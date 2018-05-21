import React from 'react';
import injectSheet from 'react-jss'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './Card.jsx';
import InfoCard from './InfoCard.jsx';

const styles = {
  title: {
    fontSize: '1.5em',
    textAlign: 'initial',
    color: 'palevioletred',
    margin: '5px'
  },
  infoCardContainer: {
    display: 'flex',

  }
};

function CustomArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{
        ...style,
        height: '100%',
        background: 'lightgrey',
        opacity: 0.7,
        display: 'flex',
        alignItems: 'center',
        padding: '0px 15px',
        zIndex: '1',
        right: props.next ? '0%' : null,
        left: props.prev ? '0%' : null,
      }}
      onClick={onClick}
    ></div>
  );
}

class InfoGallery extends React.Component {
  constructor(props) {
  	super(props);
    this.state = { selected: null };
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard({ cardPhoto, title }, i) {
    return (
      <div key={`card${i}`}>
        <Card
          value={cardPhoto}
          onClick={() => { this.setState({selected: i}) }}
          cardHeight={this.props.cardHeight}
        />
      </div>);
  }

  renderCards(info) {
    const out = [];
    info.forEach((cardInfo, i) => {
      out.push(this.renderCard(cardInfo, i));
    });
    return out;
  }

  render() {
    const { classes, cardsToScroll, cardsToShow, info, title, infoHeight,
      gradientColor } = this.props;
    const { selected } = this.state;
    const settings = {
      infinite: true,
      speed: 250,
      slidesToShow: cardsToShow || 5,
      slidesToScroll: cardsToScroll || 5,
      adaptiveHeight: true,
      dots: false,
      prevArrow: <CustomArrow prev/>,
      nextArrow: <CustomArrow next/>,
    };

    return (
      <div>
        <h1 className={classes.title}>
          {title}
        </h1>
        <Slider {...settings}>
          {this.renderCards(info)}
        </Slider>

        {selected !== null &&
          <InfoCard
            title={selected ? info[selected].title : null}
            description={selected ? info[selected].description : null}
            src={selected ? info[selected].cardPhoto : null}
            closeOnClick={() => {this.setState({selected: null})}}
            height={selected ? infoHeight : 0}
            gradientColor={gradientColor}
          />
        }
      </div>
    )
  }
}

export default injectSheet(styles)(InfoGallery)
