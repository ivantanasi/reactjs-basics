import React from "react";

export class User extends React.Component {

    onNavigateHome() {
        console.log(this.props);
        this
            .props
            .history
            .push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.match.params.id}</p>
                <button
                    onClick={this
                    .onNavigateHome
                    .bind(this)}
                    className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}