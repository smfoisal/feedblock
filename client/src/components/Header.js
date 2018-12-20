import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google" style={styles.signInButton}>
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" style={styles.googleImg}/>
                        Sign in with Google</a>
                    </li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 15px' }}>
                        Credits: { this.props.auth.credits }
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render () {
        console.log(this.props);
        return(
            <nav style={ styles.navBack }>
                <div className="nav-wrapper">
                    <div className="container">
                        <Link
                            to={ this.props.auth ? '/surveys': '/' }
                            className="left brand-logo"
                            style={ styles.brand }>
                            FeedBlock
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            { this.renderContent() }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
const styles = {
    navBack: {
        backgroundColor: '#009688',
        boxShadow: 'none',
    },
    brand: {
        fontSize: '1.5rem',
    },
    signInButton: {
        margin: '0.75rem 0',
        padding: '0.75rem 1rem',
        borderRadius: '0.25rem',
        background: 'white',
        color: '#009688',
        boxShadow: '0 0 4px rgba(0,0,0,0.15)',
        lineHeight: '1.5rem',
    },
    googleImg: {
        float: 'left',
        width: 20,
        height: 20,
        marginRight: '1rem',
    },
};

// function mapStateToProps( state ) {
//     return { auth: state.auth };
// }
function mapStateToProps({ auth }) {
    return { auth: auth };
}

export default connect(mapStateToProps)(Header);