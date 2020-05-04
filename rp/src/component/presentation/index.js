import React from 'react';
import './index.css';
import Slide from './Slide';

class Index extends React.Component {

    state = {
        default_data: {
            "details": {
                "copyright": true,
                "author": "Maifee Ul Asad",
                "short_name": "MUA",
                "time_stamp": 1588592791100,
                "thank_you": true,
                "question": true,
                "source": "maifeeulasad.github.io"
            },
            "slides": [
                {
                    "title": "whoami",
                    "body": [
                        "Hello, I'm Maifee Ul Asad",
                        "Thanks for moving onto this template",
                        "This means a lot to me, thanks again"
                    ]
                },
                {
                    "title": "react-presentation",
                    "body": [
                        "Wherever we go, whatever we do, we are just presenting ourselves",
                        "That's all",
                        "For presenting we use different Open-Document,Office Open XML,Windows Media Video,PowerPoint, Windows Metafile etc",
                        "",
                        "None of these felt satisfactory to me, so I came up with my own solution",
                        "",
                        "",
                        "Web Presentation",
                        "It's not something new",
                        "It's just something like redefining",
                        "Web presentation with JSON",
                        "Think about it",
                        "And the project is open-source feel free to contribute",
                        {
                            "type": "link",
                            "content": "github.com/maifeeulasad/react-presentation",
                            "title": "React presentation GitHub repository"
                        }
                    ]
                }
            ]
        },
        pageNumber: 0,
        data: {},
        length: 0,
    };

    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    updateData = () => {
        if (this.props.data === undefined) {
            this.setState({length: this.state.default_data.slides.length})
        }
        this.setState({data: this.props.data}, () => {
            try {
                this.setState({length: this.state.data.slides.length});
            } catch (e) {
                this.setState({length: this.state.default_data.slides.length});
            }
        });
    };


    componentDidMount() {
        this.updateData();
    }

    handleKeyDown = (e) => {
        let keyCode = e.keyCode;
        if (keyCode === 37)
            this.setState({pageNumber: Math.max(this.state.pageNumber - 1, 0)});
        if (keyCode === 39)
            this.setState({pageNumber: Math.min(this.state.pageNumber + 1, this.state.length - 1)});
    };

    render() {
        if (this.props.data !== undefined) {
            try {
                return (
                    <div
                        className={"presentation"}
                        onKeyDown={e => this.handleKeyDown(e)}
                        tabIndex="0">
                        <Slide
                            slide={this.state.data.slides[this.state.pageNumber]}
                            details={this.state.data.details}/>
                    </div>
                );
            } catch (e) {

            }
        }
        if (this.state.default_data !== undefined) {
            return (
                <div
                    className={"presentation"}
                    onKeyDown={e => this.handleKeyDown(e)}
                    tabIndex="0">
                    <Slide
                        slide={this.state.default_data.slides[this.state.pageNumber]}
                        details={this.state.default_data.details}/>
                </div>
            );
        }
        return (
            <div/>
        );
    }
}

export default Index;


