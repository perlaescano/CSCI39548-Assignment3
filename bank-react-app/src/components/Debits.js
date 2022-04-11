import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ShowCredit from './ShowCredits';

class Debits extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = props.addDebit.bind(this.handleSubmit);
    }
    render(){
        return(
        <div id="credit">
            <h1>Debits</h1>
            <div id="menu">
                <label>Menu</label>
                <Link id="buttons" to="/userProfile"><button><p>My Profile</p></button></Link>
                <Link id="buttons" to="/credit"><button><p>View Credits</p></button></Link>
               
            </div>
            
        <div id="addCredit">
                <h3>Add Debit</h3>
                <form id="buttons" onSubmit={this.handleSubmit}>
                    <label>Description: </label>
                    <input name="description" placeholder="Item Name" required />

                    <br></br>

                    <label>Amount (USD): </label>
                    <input name ="amount" placeholder="1.00" required />

                    <br></br>

                    <button type="submit"><p>Submit</p></button>
                </form>
        </div>

             <section id="listItems">
                    {this.dataDisplay(this.props.data)}
             </section>
        </div>
        
        );
        
    }
    dataDisplay(data){
        let display = [];
            data.forEach((element, index) => {
                const description = element.description;
                const amount = element.amount;
                const date = element.date;

                display.push(
                    <ShowCredits
                        key = {index.toString()}
                        description = {description}
                        amount = {amount}
                        date = {date}
                    />
                );
            })
            return display;
        }
}
export default Debits;

