import React from 'react';
import FormattedDate from './formatted-date';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
        let a = () => 1;
        console.log(typeof a);
        console.log('mounted');
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        console.log('unmount');
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It's {this.state.date.toLocaleTimeString()} </h2>
                <FormattedDate date={this.state.date}/>
                <FormattedDate date={this.state.date}/>
                <FormattedDate date={this.state.date}/>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }

}