import defaults from '../constants/defaults';

export default {
  '@keyframes slidein': {
    from: {height: 0},
    to: {height: `500px`}
  },
  footerContainer: (props) => ({
    width: '100%',
    height: `${props.height || defaults.INFO_CARD_HEIGHT}px`,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    animation: 'slidein .3s linear 0s',
  }),
  infoContainer: (props) => ({
    display: 'flex',
    width: '33%',
    height: `${props.height || defaults.INFO_CARD_HEIGHT}px`,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }),
  title: {
    margin: '5px 15px',
    display: 'flex',
    justifySelf: 'flex-start',
    textAlign: 'start',
    width: '150%',
    zIndex: 1,
  },
  description: {
    margin: '5px 15px',
    display: 'flex',
    justifySelf: 'flex-start',
  },
  imageContainer: {
    position: 'relative',
    width: '66%',
  },
  image: {
    width: '100%',
  },
  closeButton: {
    fontSize: '36px',
    color: 'white',
    cursor: 'pointer',
    position: 'absolute',
    top: '5px',
    right: '20px',
  },
  gradiant: (props) => ({
    position: 'absolute',
    width: '50%',
    height: `${props.height || defaults.INFO_CARD_HEIGHT}px`,
    backgroundImage: `linear-gradient(to right,${props.gradientColor || '#FFF'},transparent)`,
  })
};
