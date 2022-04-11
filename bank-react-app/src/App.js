import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import UserProfile from './components/UserProfile';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: 
      {
        userName: 'Eric',
        memberSince: '04/29/96',
      },
      credit: [], //array w/ all credit products
      debit: [], //array w/ all debit products
      totalCredit: 0 //total balance
    }
  }

  componentDidMount() { //for the APIs
    this.getCredit();
    this.getDebit();
  }

  getCredit() {
    let creditAPI = "https://moj-api.herokuapp.com/credits";

    axios.get(creditAPI)
    .then((response) => {
      let credit = response.data;

      this.setState({credit});
      this.setState({totalCredit: this.calcTotal(credit)});
    })

    .catch((error) =>
    {
      this.setState({credit: [] });
    })
  }
  //for calculating credit api total (Helper func)
  calcTotal(data) {
    return data.reduce((total, currentAmount) => {
      
      total += currentAmount.amount;
      return total;

    }, 0);
  }
  getDebit() {
    let debitAPI = "https://moj-api.herokuapp.com/debits";

    axios.get(debitAPI)
    .then((response) => {
      let debit = response.data; //an array of all products from api
      
      let subFromTotal = (this.state.totalCredit); //This is current balance

      //For every product (debit[i]) in debit array, subtract the amount from total
      for(let i=0; i<debit.length; i++)
      {
        
        subFromTotal-=debit[i].amount; //subtract from current balance, each debit product's amount
      }
        
      this.setState({debit}); //sets debit array to debit
      this.setState({totalCredit:subFromTotal}); //sets the total balance to the calculated total 
    })

    .catch((error) =>
    {
      this.setState({credit: [] });
    })
  }
  

  addCredit = (event) => {
    event.preventDefault();

    let creditDescription = event.target.description.value;
    let creditAmount = event.target.amount.value;
    let date = new Date().toISOString();
    
  
    if(isNaN(creditAmount)===false) //if credit amount is a not number, add as credit
    {
      
      let newCredit = {
        description: creditDescription,
        amount: Number(creditAmount),
        date: date
      }

      let creditData = new Array(...this.state.credit, newCredit);
      this.setState({credit: creditData});
      this.setState({totalCredit:this.state.totalCredit+newCredit.amount});
    }
    
    event.target.reset();
  }

  addDebit = (event) => {
    event.preventDefault();

    let debitDescription = event.target.description.value;
    let debitAmount = event.target.amount.value;
    let date = new Date().toISOString();

    if(isNaN(debitAmount)===false) //if debit amount is a number, add as debit
    {
      let newDebit = {
        description: debitDescription,
        amount: Number(debitAmount),
        date: date
      }
  
      let debitData = new Array(...this.state.debit, newDebit);
      this.setState({debit: debitData});
      this.setState({totalCredit:(this.state.totalCredit)-newDebit.amount});
    }
    event.target.reset();
  }

  render() {
    
    let UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );

    let CreditsComponent = () => (
      <Credits 
        data = {this.state.credit}
        addCredit = {this.addCredit}
      />
    );

    let DebitsComponent= () =>(
      <Debits
      data={this.state.debit}
      addDebit={this.addDebit}
      />
    );


    
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={UserProfileComponent}/>    
            <Route exact path="/userProfile" render={UserProfileComponent}/>  
            <Route exact path="/credit" render={CreditsComponent}/>
            <Route exact path="/debit" render={DebitsComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
