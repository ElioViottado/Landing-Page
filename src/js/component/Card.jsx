import React from "react";
import PropTypes from 'prop-types'

const Card = (prop) => {
  
  const text = prop.text;

  return (
  <>
    <div className="card text-center">
      <div className="card">
        <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            {text}
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  </>
  );
};

Card.propTypes = {
  text: PropTypes.string
};

export default Card;