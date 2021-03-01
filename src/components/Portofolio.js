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
            <a
              href="https://github.com/alpinnz/Seleksi-Bootcamp-Arkademy-Batch-14-1"
              style={{ display: "table-cell" }}
              target="_blank"
            >
              <img
                src={Images.portfolio_1}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 1"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="https://github.com/alpinnz/kamis-server-side"
              style={{ display: "table-cell" }}
              target="_blank"
            >
              <img
                src={Images.portfolio_2}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 2"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="https://github.com/alpinnz/web-online-shop"
              style={{ display: "table-cell" }}
              target="_blank"
            >
              <img
                src={Images.portfolio_3}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 3"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="https://github.com/alpinnz"
              style={{ display: "table-cell" }}
              target="_blank"
            >
              <img
                src={Images.portfolio_4}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 4"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="http://alpinnz.xyz/customer/init/2"
              style={{ display: "table-cell" }}
              target="_blank"
            >
              <img
                src={Images.portfolio_5}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 5"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="http://alpinnz.xyz/customer/init/2"
              style={{ display: "table-cell" }}
              target="_blank"
            >
              <img
                src={Images.portfolio_6}
                style={{ height: "15rem" }}
                className="img-fluid img-thumbnail"
                alt="portofolio 6"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
