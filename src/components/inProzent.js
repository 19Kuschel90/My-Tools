import React, { Component } from 'react';


export class InProzent extends Component {
    constructor(props) {
      super(props);
      this.state = {
          A: 100,
          B: 20,
          inProzent: 20,
          einEuro: 1,
          cssClass: "ShowOutput",
        };
  
      this.handleChangeA = this.handleChangeA.bind(this);
      this.handleChangeB = this.handleChangeB.bind(this);
      this.inProzent = this.inProzent.bind(this);
    }

   
    handleChangeA(event) {
      this.setState({cssClass: ""});

       this.setState({A: Number( event.target.value)}, this.inProzent);
    }
    handleChangeB(event) {

      this.setState({B: Number( event.target.value)}, this.inProzent);
    }
  
    inProzent(){
      
      const W = this.state.B;
      const G = this.state.A;
      this.setState({inProzent: W/G*100 });
      this.setState({einEuro: G*1 /100 });

        // this.setState({cssClass: ""});     
    }


    
    render() {
   
      return (
        <div >
          <label>
            <div>
            <p>Komplet(€) Z.B: 100€</p>
          <p>A: <input type="number" value={this.state.A} onChange={this.handleChangeA} /> (€)</p>
              </div>
              <div>
                <p>Teil(€) Z.B: 20€</p>              
              <p>B: <input  nput type="number" value={this.state.B} onChange={this.handleChangeB} /> (€)</p>

              </div>
        <button onClick={this.inProzent} type="button"  className="btn btn-success">Run</button>
          </label>
        <div>
        Output:
       <p>Teil in Prozent  Z.B: 20%: </p>
       <p className={this.state.cssClass}> Teil(€) {this.state.B } = <span className="btn-success">{this.state.inProzent}%</span></p> 
       <p>1% ist Z.B: 1€: </p>
       <p className={this.state.cssClass}>1% = <span className="btn-warning">{this.state.einEuro}€</span></p>

        </div>
        </div>
      );
    }
  }
  export default InProzent;
  