import React, { Component } from 'react';
import { thoughtsData } from "../../data.js";
import './Thoughts.css';
import ColorContainer from '../ColorContainer';

class Thoughts extends Component {
    state = {
        shown: 0,
        opChange: false,
    }

    changeOpacity() {

        this.setState((c) => ({
            opChange: !c.opChange
        }))

        this.timeoutOne =  setTimeout(() => {
            this.setState((c) => ({
                opChange: !c.opChange
            }))
        }, 5000)

        this.timeoutTwo = setTimeout(() => {
            this.setState((c) => ({
                shown: c.shown < thoughtsData.texts.length - 1 ? c.shown + 1 : 0
            }))
        }, 5500)
    }

    componentDidMount() {
        this.changeOpacity()
        this.interval = setInterval(() => this.changeOpacity()
            , 6000)
    }

    componentWillUnmount() {
        this.timeoutOne && clearTimeout(this.timeoutOne);
        this.timeoutTwo && clearTimeout(this.timeoutTwo);
        this.interval && clearInterval(this.interval);
    }

    render() {
        const { shown, opChange } = this.state;

        return (

            <div className='thoughts-container'>
                <ColorContainer color='white'>
                    <p className={opChange ? 'text shown' : 'text hidden'} >
                        {thoughtsData.texts[shown].text}
                    </p>
                    <p className={opChange ? 'author shown' : 'author hidden'} >
                        {thoughtsData.texts[shown].author}
                    </p>
                </ColorContainer>
            </div>
        )
    }
}

export default Thoughts;