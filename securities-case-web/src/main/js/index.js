import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
    render() {
        return <p>hello world</p>;
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
