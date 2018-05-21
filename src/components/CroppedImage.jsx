import React from 'react';
import injectSheet from 'react-jss'

import defaults from '../constants/defaults';

const styles = {
  imageContainer: (props) => ({
    height: `${props.height || defaults.CARD_HEIGHT}px`,
    width: 'none',
    overflow: 'hidden',
    position: 'relative',
  }),
  image: (props) => ({
    height: '200px',
    width: 'none',
    position: 'absolute',
    left: '-1000%',
    right: '-1000%',
    top: '-1000%',
    bottom: '-1000%',
    margin: 'auto',
    minHeight: '100%',
    minWidth: '100%',
  })
};

const CroppedImage = ({classes, onClick, src, hover}) => (
  <div
    hover={hover}
    className={classes.imageContainer}
  >
    <img
      alt={'card'}
      className={classes.image}
      src={src}
      onClick={onClick}
    />
  </div>
);

export default injectSheet(styles)(CroppedImage)
