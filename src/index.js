import { render } from 'react-dom';
import React from 'react';
import styled from 'styled-components';

import GlitchText from '@components/GlitchText';
import Boot from '@components/Boot';
import GlitchImage from '@components/GlitchImage';
import Translate from '@components/Translate';
import { translate, setLang, langKeys } from '@translations/list';

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

  changeLang(lang) {
    setLang(lang);
    this.forceUpdate();
  }

  texts = translate('boot')
  
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
              <Translate translation={'paragraphOne'}/>
            </Text>
            <Text>
              <Translate translation={'paragraphTwo'}/>
            </Text>
            <Text>
              <Translate translation={'paragraphThree'}/>
            </Text>
            <Text>
              <Link href={'https://wiki.hackerspaces.org/Jerimum_HackerSpace'}><i className='fab fa-wikipedia-w'></i></Link> | 
              <Link href={'https://t.me/JerimumHS'}><i className='fab fa-telegram'></i></Link> | 
              <Link href={'https://twitter.com/JerimumHS'}><i className='fab fa-twitter-square'></i></Link> | 
              <Link href={'https://www.facebook.com/HackerspaceNatal'}><i className='fab fa-facebook-square'></i></Link> | 
              <Link href={'https://groups.google.com/forum/#!forum/hackerspace-natal'}><i className='fab fa-google'></i></Link>
            </Text>
            <Footer>
              | { langKeys.map(((lang, key) => (
                <span>
                  <Link key={key} href="javascript:void(0)" onClick={ () => { this.changeLang(lang) } }>{translate('languageName', lang)}</Link> |&nbsp;
                </span>
              ))) }
            </Footer>
          </Middle>
        }
      </Body>
    );
  }
}

const Body = styled.div`
  background-color: #000;
  width: 100%;
  height: 99vh;
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

const Footer = styled.div`
  margin-top: 40px;
  width: 100%:
  text-align: center;
  line-height: 20px;
  vertical-align: middle;
  & a {
    font-size: 15px;
  }
`

render(<JHS/>, document.getElementById('jhs'));