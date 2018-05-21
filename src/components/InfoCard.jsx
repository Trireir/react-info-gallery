import React from 'react';
import injectSheet from 'react-jss'

import InfoCardStyle from './InfoCardStyle';
import CloseIcon from '../images/close.svg';

class InfoCard extends React.Component {
  render() {
    const { classes, closeOnClick, description, title, src } = this.props;

    return (
      <div class={classes.footerContainer}>
        <div class={classes.infoContainer}>
          {typeof title === 'string' ?
            <h1 class={classes.title}>{title}</h1> : title}
          {typeof description === 'string' ?
            <h3 class={classes.description}>{description}</h3> : description}
        </div>
        <div class={classes.imageContainer}>
          <div class={classes.gradiant}></div>
          <img class={classes.image} src={src} alt="Footer"/>
          <img class={classes.closeButton} onClick={closeOnClick} src={CloseIcon} alt="Close" />
        </div>
      </div>
    );
  }
}

export default injectSheet(InfoCardStyle)(InfoCard);