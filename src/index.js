import { render } from 'react-dom';
import React from 'react';
import styled from 'styled-components';

import GlitchText from '@components/GlitchText';
import Boot from '@components/Boot';
import GlitchImage from './components/GlitchImage';

class JHS extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isBoot: true,
    }

  }

  onBootEnd() {
    this.setState({
      ...this.state,
      isBoot: false
    });
  }

  texts = [
    'loading...',
    'community.h',
    'good_people.h',
    'hacking_stuff.h',
    'your_help.h'
  ]
  render() {
    return (
      <Body>
        { 
          this.state.isBoot?
          <Boot delay={1000} texts={this.texts} onBootEnd={ () => { this.onBootEnd() } } />:
          <Middle>
            <GlitchImage src={'dist/img/logo.svg'}/>
            <GlitchText text={'JERIMUM HACKERSPACE'} fakeEncription={true}/>
            <Text>
              Somos um grupo de pessoas interessadas em usar, remixar e compartilhar tecnologia, aprendizado, diversão e cultura de forma colaborativa e indiscriminada.
            </Text>
            <Text>
              Temos como prioridade estratégica a manutenção de um hackerspace em Natal/RN para concretizar essas aspirações.
            </Text>
            <Text>
              Quer falar com a gente? Quer participar? É fácil nos achar. :)
            </Text>
            <Text>
              <Link href={'https://t.me/JerimumHS'}><i className='fab fa-telegram'></i></Link> | <Link href={'https://twitter.com/JerimumHS'}><i className='fab fa-twitter-square'></i></Link>
            </Text>
          </Middle>
        }
      </Body>
    );
  }
}

const Body = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  font-family: 'Share Tech Mono', monospace;
  color: #fff;
  padding: 1px;
`;

const Middle = styled.div`
  text-align: center;
  margin-top: 20vh;
`;

const Text = styled.p`
  max-width: 800px;
  margin: 20px auto;
`;

const Link = styled.a`
  color: #ea9f77;
  font-size: 20px;
`;

render(<JHS/>, document.getElementById('jhs'));