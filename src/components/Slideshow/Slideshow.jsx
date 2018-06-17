import React, { Component } from 'react';
import './Slideshow.css';
import Buttons from './Buttons';
import Slides from './Sldies';

class Slideshow extends Component {
    state = {
        translate: 0,
    }

    deployInterval() {
        this.intervalID = setInterval(() => this.rightSlide(), 4000);
    }

    restartInterval() {
        clearInterval(this.intervalID);
        this.deployInterval()
    }

    leftSlide() {
        const { images } = this.props;

        this.setState((c) => ({
            translate: c.translate !== 0 ?
                c.translate - 1 :
                images.length - 1
        }))

        this.restartInterval()
    }

    rightSlide(click) {
        const { images } = this.props;

        this.setState((c) => ({
            translate: c.translate < images.length - 1 ?
                c.translate + 1 :
                0
        }))

        click && this.restartInterval()
    }

    componentDidMount() {
        this.deployInterval()
    }

    componentWillUnmount() {
        this.intervalID && clearInterval(this.intervalID);
    }

    render() {
        const { translate } = this.state;
        const { images } = this.props;

        return (
            
                <div className='slideshow'>
                    <div
                        className='slide-wrapper'
                        style={{ transform: `translateX(-${translate * 100}%)` }}
                    >
                        <div className='slides' style={{ width: `${images.length * 100}%` }}>
                            <Slides images={images} />
                        </div>
                    </div>
                <Buttons rightSlide={() => this.rightSlide(true)} leftSlide={() => this.leftSlide()} />
                </div>
        
        )
    }
}

export default Slideshow;