import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href={"/"} style={{color:"orange"}}>Mohan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href={"/home"} style={{color:"red"}}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href={"/user/10"} style={{color:"blue"}}>User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href={"/home"}>Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}