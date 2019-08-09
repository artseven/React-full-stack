import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    //displaying different content based on whether user is logged in
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                console.log('case false', this.props.auth);
                return <li><a href="/auth/google">Login With Google</a></li>;  
            default:
                console.log('Case is logout');
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps( { auth} ) {
    return { auth };
}

export default connect(mapStateToProps)(Header);