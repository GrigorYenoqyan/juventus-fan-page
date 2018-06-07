import React, { Component } from 'react';
import { thoughtsData } from "../../data.js";
import './Thoughts.css';
import ContainerWhite from '../Containers/ContainerWhite/index.js';

class Thoughts extends Component {
    state = {
        shown: 0,
        opChange: false
    }

    changeOpacity() {
        
        this.setState((c) => ({
            opChange: !c.opChange
        }))

        setTimeout(() => {
            this.setState((c) => ({
                opChange: !c.opChange
            }))
        }, 5000)

        setTimeout(() => {
            this.setState((c) => ({
                shown: c.shown < thoughtsData.texts.length - 1 ? c.shown + 1 : 0
            }))
        }, 5300)
    }

    componentDidMount() {
        this.changeOpacity()
        setInterval(() => this.changeOpacity()
            , 5500)
    }

    render() {
        const { shown } = this.state;
        const { opChange } = this.state;

        return (
            <ContainerWhite>
                <p className={opChange ? 'text' : 'text-hidden'} >
                    {thoughtsData.texts[shown].text}
                </p>
                <p className={opChange ? 'author' : 'author-hidden'} >
                    {thoughtsData.texts[shown].author}
                </p>
            </ContainerWhite>
        )
    }
}

export default Thoughts;