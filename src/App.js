import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { InProzent } from './components/inProzent';
import { Stundenlohnrechner } from './components/stundenlohnrechner';
import { MyData } from './components/MyData';
import './css/normalize.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  
  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }
  
  render() {
    return (
      <div className="App" ref={this.textInput}>
        <header className="App-header">
        <Router>
        <div>
 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/InProzent"  component={InProzent} />
            <Route path="/Stundenlohnrechner"  component={Stundenlohnrechner} />
            <Route path="/MyData"  component={MyData} />
            <Redirect from="/old-match" to="/will-match" />
            <Route path="/will-match" component={WillMatch} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <nav>

      <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/InProzent">InProzent</Link>
            </li>
            <li>
              <Link to="/Stundenlohnrechner">Stundenlohnrechner</Link>
            </li>
            <li>
              <Link to="/MyData">My Data</Link>
            </li>
              {/* <li>
                <Link to="/old-match">Old Match, to be redirected</Link>
              </li> */}
            {/* <li>
              <Link to="/will-match">Will Match</Link>
              </li>
              <li>
              <Link to="/will-not-match">Will Not Match</Link>
              </li>
            <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
          </li> */}
          </ul>
          </nav>
      </Router>
        </header>
      </div>
    );
  }
}



function Home() {
  return (
    <p>
      A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
      that matches. A <code>&lt;Route></code> with no <code>path</code> always
      matches.
    </p>
  );
}

function WillMatch() {
  return <h3>Matched!</h3>;
}

 function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default App;

// export default NoMatchExample;

