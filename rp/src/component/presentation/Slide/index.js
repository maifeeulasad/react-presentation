import React from 'react';

class Slide extends React.Component {

    state = {
        slide: {},
        details: {},
    };

    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.renderBody = this.renderBody.bind(this);
    }

    updateData = () => {
        this.setState({slide: this.props.slide});
        this.setState({details: this.props.details});
    };

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.updateData();
        }
    }

    renderBody = () =>{
        if(this.state.slide.body!==undefined) {
            return this.state.slide.body.map(elem => {
                if(typeof elem === "object")
                {
                    let type=elem.type;
                    if(type==="img")
                    {
                        return(
                            <div className="slide-body">
                                <img alt={"asd"} src={elem.content}/>
                            </div>
                        )
                    }
                    if(type==="link")
                    {
                        return(
                            <div className="slide-body">
                                <a href={elem.content}>{elem.alt}</a>
                            </div>
                        )
                    }
                    if(type==="iframe")
                    {
                        return(
                            <div className="slide-body">
                                <iframe title={elem.title} src={elem.content}>{elem.alt}</iframe>
                            </div>
                        )
                    }
                }
                return(
                    <div className="slide-body">
                        {elem}
                    </div>
                )
            });
        }
        return (
            <div/>
        )
    };

    render() {
        return (
            <div>
                <div className="slide-title">
                    {this.state.slide.title}
                </div>
                {this.renderBody()}
                <div className={"slide-footer"}>
                    {
                        this.state.details.copyright === true ?
                            <div>
                                <span role={"img"}>©</span>️
                                {this.state.details.short_name} -
                                {new Date(this.state.details.time_stamp).getFullYear()}
                            </div> :
                            <div>
                                {this.state.details.short_name} -
                                {new Date(this.state.details.time_stamp).getFullYear()}
                            </div>}
                </div>
            </div>
        )
    }
}

export default Slide;
