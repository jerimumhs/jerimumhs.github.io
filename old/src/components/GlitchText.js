import React from 'react';
import styled, { keyframes } from 'styled-components';

class GlitchText extends React.Component {

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
    }, 2500);
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

  createAnimations(steps, width, height, color, background, highlightColor1, highlightColor2, content) {
    let anim1 = keyframes`${this.createKeyframesContent(steps, width, height)}`,
        anim2 = keyframes`${this.createKeyframesContent(steps, width, height)}`;

  return styled.div`
        color: ${color};
        font-size: 52px;
        position: relative;
        &:before,
        &:after {
          content: '${content}';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: ${background};
          clip: rect(0, 0, 0, 0); 
        };
        &:after {
          left: 2px;
          text-shadow: -1px 0 ${highlightColor1};
          animation: ${ (props) => props.active ? `${ anim1 } 2s infinite linear alternate-reverse` : `none` };
        };
        &:before {
          left: -2px;
          text-shadow: 2px 0 ${highlightColor2}; 
          animation: ${ (props) => props.active ? `${ anim2 } 3s infinite linear alternate-reverse` : `none` };
        };
  `;

  }

  fakeHackedCode(text) {
    let sheet = {
      a: `@`,
      A: `4`,
      E: `3`,
      I: `1`,
      T: `7`,
      O: `0`,
      S: `$`
    }

    for (let char in sheet) {
      let regex = new RegExp(`${char}`, 'g');

      text = text.replace(regex, sheet[char]);
    }

    return text;
  }

  render() {
    let Glitchy = this.createAnimations(20, document.body.clientWidth, 100, 'white', 'black', 'red', 'green', this.props.fakeEncription ? this.fakeHackedCode(this.props.text) : this.props.text);
    return (
      <Glitchy active={this.state.active}>
        { this.props.text }
      </Glitchy>
    );
  }
}

export default GlitchText;