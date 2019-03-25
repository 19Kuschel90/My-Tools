import React, { Component } from 'react';
import MyDropdown from './dropdown';

export class Stundenlohnrechner extends Component {
    constructor(props) {
      super(props);
      this.state = {
          B: 4000,
          C: 40,
          Stundenlohn: 23.08,
          cssClass: "ShowOutput",
        };
        window.Dropdown = 1;
      this.handleChangeB = this.handleChangeB.bind(this);
      this.handleChangeC = this.handleChangeC.bind(this);
      this.getLohn = this.getLohn.bind(this);
      this.proWoche = this.proWoche.bind(this);
      this.proMonat = this.proMonat.bind(this);
      this.proJahr = this.proJahr.bind(this);
    }
  
   
    handleChangeB(event) {

      this.setState({B: Number( event.target.value)}, this.getLohn);
    }
    handleChangeC(event) {

        this.setState({C: Number( event.target.value)}, this.getLohn);
      }
  
      getLohn(){
        switch (window.Dropdown) {
            case 0:
            this.proWoche();
                
                break;
                case 1:
                this.proMonat();
                break;
                case 2:
                this.proJahr();
                
                break;
        
            default:
                break;
        }
       
    }
    proWoche(){
        console.log(window.Dropdown);
  
          //Stundenlohn = 3 × Monatslohn ÷ 13 ÷ (wöchent­liche Arbeitsstunden)
          const wert = (12 * this.state.B / 12 / this.state.C);
          this.setState({Stundenlohn: wert });
        }
        
    proMonat(){
        console.log(window.Dropdown);

        //Stundenlohn = 3 × Monatslohn ÷ 13 ÷ (wöchent­liche Arbeitsstunden)
        const wert = (3 * this.state.B / 13 / this.state.C);
        this.setState({Stundenlohn: wert });
    }
    
    proJahr(){
        console.log(window.Dropdown);
  
          //Stundenlohn = 3 × Monatslohn ÷ 13 ÷ (wöchent­liche Arbeitsstunden)
          const wert = (1 * this.state.B / 13 / this.state.C);
          this.setState({Stundenlohn: wert });
      }
    render() {
   
      return (
        <div >
            <MyDropdown></MyDropdown>
          <label>
            Name:
            <div>
              </div>
              <div>
                <p>Lohn in € Z.B: 4000€</p>              
               B:<input  nput type="number" value={this.state.B} onChange={this.handleChangeB} /> (€)

              </div>
              <div>
                <p>Arbeitszeit pro Woche: Z.B: 40 Stunden</p>              
               C:<input  nput type="number" value={this.state.C} onChange={this.handleChangeC} /> (€)

              </div>
          </label>
        <button onClick={this.proWoche}  type="button"  className="btn btn-success">Run</button>    
        <div>
        Output:
       <p>Stundenlohn: </p>
       <p className={this.state.cssClass}> {this.state.Stundenlohn } </p>

        </div>
        </div>
      );
    }
  }
  export default Stundenlohnrechner;
  