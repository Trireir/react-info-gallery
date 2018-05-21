import React from 'react';
import CroppedImage from './CroppedImage.jsx';

class Card extends React.Component {
  constructor(props) {
  	super(props);
    this.state = { hover: false };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({hover: true});
  }

  onMouseLeave() {
    this.setState({hover: false});
  }

  render() {
    const { cardHeight, onClick, value } = this.props;
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <CroppedImage
          src={value}
          onClick={onClick}
          height={cardHeight}
        />
      </div>
    );
  }
}

export default Card;