import React from 'react';
// import PropTypes from "prop-types";

Banner.propTypes = {};

function Banner(props) {
  return (
    <div className="carousel-section">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/999/1368/400"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>BRING ME HAPPY</h5>
              <p>The purpose of our lives is to be happy!!! :P</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/248/1368/400"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>KEEP TRYING</h5>
              <p>You only live once, but if you do it right, once is enough.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/111/1368/400"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>CHALLENGE YOURSELF</h5>
              <p>The way I see it, if you want the rainbow, you gotta put up with the rain.</p>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
