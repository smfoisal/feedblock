import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return(
            <StripeCheckout
                name="FeedBlock"
                description="$5 for 5 email Credit"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={ process.env.REACT_APP_STRIPE_KEY }
            >
                <button className="btn blue white-text">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);