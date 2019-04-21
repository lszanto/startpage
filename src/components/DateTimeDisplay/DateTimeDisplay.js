import React from 'react';
import './DateTimeDisplay.css';

class DateTimeDisplay extends React.Component {
    constructor() {
        super();

        let t = this.formatDateString(new Date());

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
        let t = this.formatDateString(new Date());

        this.setState({
            time: t,
        });
    }

    formatDateString(t) {
        return t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    }
}

export default DateTimeDisplay;