import React, { Component } from 'react';

class TimerClass extends React.Component {
    state = {
        count : 0,
    }

    componentDidMount() {
        this.myTimer = setInterval(() => {
            console.log('hi')
            this.setState({count: this.state.count +1})
        }, 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.myTimer)
    }
    render() { 
        return <div>Set Interval</div>;
    }
}
 
export default TimerClass;