import React, { Component } from 'react';
import { thoughtsData } from "../../data.js";
import './Thoughts.css';
import ContainerWhite from '../Containers/ContainerWhite/index.js';

class Thoughts extends Component {
    state = {
        shown: 0,
        opChange: false,
        intervalId: null
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
        if (this.timeoutOne) clearTimeout(this.timeoutOne);
        if (this.timeoutTwo) clearTimeout(this.timeoutTwo);
        if (this.interval) clearInterval(this.interval);
    }

    render() {
        const { shown, opChange } = this.state;

        return (

            <div className='thoughts-container'>
                <ContainerWhite>
                    <p className={opChange ? 'text' : 'text-hidden'} >
                        {thoughtsData.texts[shown].text}
                    </p>
                    <p className={opChange ? 'author' : 'author-hidden'} >
                        {thoughtsData.texts[shown].author}
                    </p>
                </ContainerWhite>
            </div>
        )
    }
}

export default Thoughts;