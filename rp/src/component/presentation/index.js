import React from 'react';
import './index.css';

class Presentation extends React.Component{

    state={
        pageNumber:0,
        key:0,
    };

    constructor(props){
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e) {
        console.log("on key down?");
        this.setState({key:e.keyCode})
    }

    render(){
        return(
            <div
                className={"presentation"}
                onKeyDown={e => this.handleKeyDown(e)}
                tabIndex="0">
                some presentation ? {this.state.key}
            </div>
        );
    }
}

export default Presentation;
