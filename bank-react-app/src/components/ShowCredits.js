import React, {Component} from 'react';

class ShowCredits extends Component {
    render() {
        return (
            <div id="creditItems">
                <h3>{this.props.description}</h3>
                <ul class="no-bullets">
                    <li>Amount: {this.props.amount} </li>
                    <li>Date: {this.props.date} </li>
                </ul>
            </div>
        );
    }
}

export default ShowCredits;