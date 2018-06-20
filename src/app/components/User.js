import React from "react";

export class User extends React.Component {

    something = "mohan";

    chnageName(event) {
        this.something = event.target.value;
    }

    render() {
        return (
            <div>
                <h1>
                    user
                </h1>
                <h4>
                    User id:{this.props.params.id}
                </h4>
                <button onClick={this.chnageName.bind(this)} className={"btn btn-danger"}>back to Home</button>
            </div>
        )
    }

}