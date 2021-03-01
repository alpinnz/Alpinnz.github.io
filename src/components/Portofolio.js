import React from "react";
import Images from "./../assets/images";

const Portofolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      {/* end portfolio */}
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-dark">Portfolio</h2>
            <hr />
          </div>
        </div>
        <div className="row row-value">
          <div className="col-sm-4">
            <a href="https://github.com/alpinnz/Seleksi-Bootcamp-Arkademy-Batch-14-1">
              <img
                src={Images.portfolio_1}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 1"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="https://github.com/alpinnz/kamis-server-side">
              <img
                src={Images.portfolio_2}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 1"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="https://github.com/alpinnz/web-online-shop">
              <img
                src={Images.portfolio_3}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 1"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="https://github.com/alpinnz">
              <img
                src={Images.portfolio_4}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 1"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="https://github.com/alpinnz">
              <img
                src={Images.portfolio_1}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 1"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href>
              <img
                src={Images.portfolio_1}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
