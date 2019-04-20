import React from 'react';
import './DateTimeDisplay.css';

class DateTimeDisplay extends React.Component {
    constructor() {
        super();

        let t = new Date().toLocaleString();

        this.state = {
            time: t,
        };
    }

    render() {
        return (
            <div className="DateTimeDisplay" >
                {this.state.time}
            </div>
        );
    }

    componentDidMount() {
        setInterval(this.updateTime.bind(this), 999);
    }

    updateTime() {
        let now = new Date();
        let t = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

        this.setState({
            time: t,
        });
    }
}

export default DateTimeDisplay;