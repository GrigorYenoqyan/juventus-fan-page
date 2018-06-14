import React, { Component } from 'react';
import './Slideshow.css';
import { stadiumData as stadium } from '../../data';
import ContainerWhite from '../Containers/ContainerWhite';

class Slideshow extends Component {
    state = {
        translate: 0,
    }

    leftSlide() {
        this.setState((c) => ({
            translate: c.translate !== 0 ?
                c.translate - 1 :
                stadium.images.length - 1
        }))
    }

    rightSlide() {
        this.setState((c) => ({
            translate: c.translate < stadium.images.length - 1 ?
                c.translate + 1 :
                0
        }))
    }

    render() {
        const { translate } = this.state;
        return (
            <ContainerWhite>
                <div className='slideshow'>
                    <div
                        className='slide-wrapper'
                        style={{ transform: `translateX(-${translate * 100}%)` }}
                    >
                        <div className='slides'>
                            {
                                stadium.images.map((e, i) => {
                                    return (
                                        <div className='slide' key={`slide${i}`} >
                                            <img
                                                src={stadium.images[i]}
                                                alt='stadium'
                                                className='slideshow-image'
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => this.leftSlide()}>
                        left
                    </button>
                    <button onClick={() => this.rightSlide()}>
                        right
                    </button>
                </div>
            </ContainerWhite>
        )
    }
}

export default Slideshow;