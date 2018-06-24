import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Slideshow.css';
import Buttons from './Buttons';
import Slides from './Sldies';

class Slideshow extends Component {
    state = {
        translate: 0,
    }

    deployInterval() {
        this.intervalID = setInterval(() => this.rightSlide(), 6000);
    }

    restartInterval() {
        clearInterval(this.intervalID);
        this.deployInterval()
    }

    leftSlide() {
        this.setState((prevState, props) => ({
            translate: prevState.translate !== 0 ?
                prevState.translate - 1 :
                props.images.length - 1
        }))

        this.restartInterval()
    }

    rightSlide(click) {
        this.setState((prevState, props) => ({
            translate: prevState.translate < props.images.length - 1 ?
                prevState.translate + 1 :
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


Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Slideshow;