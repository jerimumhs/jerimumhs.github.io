import React from 'react';
class Boot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: [...props.texts, ''] || [],
      current: 0
    }

  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.current === this.state.texts.length - 1) {
        clearInterval(this.interval);
        if (this.props.onBootEnd) {
          this.props.onBootEnd();
        }
      }

      this.setState({
        ...this.state,
        current: this.state.current + 1
      })

    }, this.props.delay || 500);
  }

  display() {
    if (this.state.texts.length === 0) {
      return <p> BOOT ERROR... </p>
    }

    let texts = [];
    for (let i = 0; i < this.state.current; i++) {
      texts.push(<p key={i}> {this.state.texts[i]} </p>);
    }

    return texts;
  }

  render() {
    return (
      <div>
        { this.display() }
      </div>
    )
  }
}

export default Boot;