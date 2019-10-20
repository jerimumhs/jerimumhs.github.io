import React from 'react';
import list, { translate } from '@translations/list';

class Translate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span> { translate(this.props.translation, this.props.lang) } </span>
    )
  }
}

export default Translate;