import React from "react";
import PropTypes from "prop-types";
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}
//Eğer card title girilmezse default olarak atancak değer
Card.defaultProps = {
  cardTitle: "default card title",
};
Card.propTypes = {
  cardText: PropTypes.string,
};

export default Card;

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.namse}</h1>;
//   }
// }
