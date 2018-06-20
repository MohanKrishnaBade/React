import React from "react";

export class Home extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             age: props.userData.age,
//             status: 0,
//             homeLink: props.intialLink,
//         };
//
//         setTimeout(() => {
//             this.setState({
//                 status: this.state.status += 1
//             })
//         }, 3000)
//         console.log("constructor");
//     }
//
//
//     componentWillMount() {
//         console.log("component will mount");
//     }
//
//     componentDidMount() {
//         console.log("component did mount");
//     }
//
//     componentWillReciveProps(nextProps) {
//
//         console.log("component Will receive props", nextProps);
//     }
//
//     shouldComponetUpdate(nextProps, nextState) {
//         console.log("component will reecive the state and props", nextProps, nextState);
//         return true;
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log("component did update", prevProps, prevState)
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//         console.log("component will update", nextProps, nextState);
//     }
//
//     componentWillUnMount() {
//         console.log("component will unmount");
//     }
//
//     ageIncrease() {
//         this.setState({
//             age: this.state.age + 5
//         });
//     }
//
//     onChangeLink() {
//         this.props.homeLink(this.state.homeLink);
//     }
//
//     onChangeText(event) {
//         this.setState({
//             homeLink: event.target.value
//         })
//     }
//
//     render() {
//         console.log(this.props);
//         return (
//             <div className={"container"}>
//                 <p>user object => name:{this.props.userData.lastName} age: {this.state.age}</p>
//                 <p> status : {this.state.status}</p>
//                 <hr/>
//                 <button onClick={() => this.ageIncrease()} className={"btn btn-primary"}>make me older</button>
//                 <hr/>
//                 <button onClick={this.props.greet} className={"btn btn-secondary"}>alert button</button>
//                 <hr/>
//                 <input
//                     type={"text"}
//                     value={this.state.homeLink}
//                     onChange={(event) => this.onChangeText(event)}
//                     onChangeCapture={this.onChangeLink.bind(this)}
//                 />
//                 {/*<button onClick={this.onChangeLink.bind(this)} className={"btn btn-primary"}>onChange</button>*/}
//             </div>
//         );
//     }
//
// }
//
// Home.proptypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     hobbies: React.PropTypes.object,
//     greet: React.PropTypes.func
// };

    render() {


        let style = {
            width: "100px",
            height: "100px",
            backgroundColor: "green"
        };
        return (
            <div className={style}>
                <h1 className={"np"}>home</h1>
            </div>

        );
    }
}