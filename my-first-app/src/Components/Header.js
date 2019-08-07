import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( <section id="header">
        <div className="inner">
            <span className="icon solid major fa-cloud"></span>
            <h1>Hi, I'm <strong>Photon</strong>, another fine
            little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
            <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna
            lobortis feugiat sapien sed etiam volutpat accumsan.</p>
            <ul className="actions special">
                <li><a href="#one" className="button scrolly">Discover</a></li>
            </ul>
        </div>
    </section> );
    }
}

export default Header;