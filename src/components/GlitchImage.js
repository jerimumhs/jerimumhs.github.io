import React from 'react';
import styled, { keyframes } from 'styled-components';

class GlitchImage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: true
    };
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        active: !this.state.active
      });
    }, 3000);
  }

  random(size) {
    return Math.floor((Math.random() * 1000) % size);
  }

  createKeyframesContent(steps, width, height) {
    let keyframes = ``;
    for (let step in new Array(steps + 1).fill(0)) {
      keyframes += `\n${Math.floor((step * 100) * (1 / steps))}% {
        clip: rect(${this.random(height)}px, ${width}px, ${this.random(height)}px, 0);
      }`;
    }

    return keyframes;
  }

  createAnimations(steps, width, height, top, left) {
    let anim1 = keyframes`${this.createKeyframesContent(steps, width, height)}`,
        anim2 = keyframes`${this.createKeyframesContent(steps, width, height)}`;

  return styled.div`
    position: relative;
    display: block;
    width: 250px;
    margin: 0 auto;

    & img:nth-child(1) {
      position: relative;
    };

    & img {
      position: absolute;
      top: ${ top }px;
      left: ${ left }px;
      width: 100%;
    };
    
    & img:nth-child(2),
    & img:nth-child(3){
      clip: rect(0, 0, 0, 0); 
    };

    & img:nth-child(2) {
      left: ${ left + 2 }px;
      animation: ${ (props) => props.active ? `${ anim1 } 2s infinite linear alternate-reverse` : `none` };
    };

    & img:nth-child(3) {
      left: ${ left - 2 }px;
      animation: ${ (props) => props.active ? `${ anim2 } 3s infinite linear alternate-reverse` : `none` };
  `;

  }

  render() {
    let Glitchy = this.createAnimations(70, document.body.clientWidth, 230, 0, 20);
    return (
      <Glitchy active={this.state.active}>
        <Image src={ this.props.src }/>
        <Image filter={`hue`} src={ this.props.src }/>
        <Image filter={`gray`} src={ this.props.src }/>
      </Glitchy>
    );
  }
}

const Image = styled.img`
  filter: ${ 
    (props) => {
      if (!props.filter) {
        return 'none'
      }

      return props.filter === 'hue'?
      `hue-rotate(-42deg)`:
      `grayscale(1)`
    }
  };
`;

export default GlitchImage;