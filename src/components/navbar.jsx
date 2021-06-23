import React, { Component } from "react";

class navbar extends Component {
    styles = {};

    render() {
        return(
            <div>
                <div className="logo">
                    <a className="title" href="index">
                        {"// lucas kobashi <"}
                    </a>
                </div>

                <input id="hamburger" type="checkbox" style="display: none">
                    <label htmlFor="hamburger">
                        <div className="hamburger"></div>
                    </label>

                    <ul className="menu">

                        <li className="menu">
                            <a className="menu" href="index">
                                home
                                <i className="material-icons-outlined" style="font-size:19px; vertical-align: bottom">home</i>
                            </a></li>

                        <li className="menu">
                            <a className="menu" href="contact">
                                contact
                                <i className="material-icons-outlined"
                                   style="font-size:19px; vertical-align: bottom">contact_page</i>
                            </a></li>

                        <li className="menu">
                            <a className="menu" href="courses">
                                courses
                                <i className="material-icons-outlined" style="font-size:19px; vertical-align: bottom">school</i>
                            </a></li>

                        <li className="menu">
                            <a className="menu" href="files">
                                files
                                <i className="material-icons-outlined" style="font-size:19px; vertical-align: bottom">folder</i>
                            </a></li>

                        <li className="menu">
                            <a className="menu" href="spotify">
                                spotify
                                <i className="material-icons-outlined"
                                   style="font-size:19px; vertical-align: bottom">play_circle_outline</i>
                            </a></li>
                    </ul>
                </input>
            </div>
        )
    }
}

//const domContainer = document.querySelector('#navbar_container');
//ReactDOM.render(React.createElement(navbar), domContainer);
