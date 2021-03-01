import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-dark">About</h2>
            <hr />
          </div>
        </div>
        <div className="row row-value">
          <div className="col-sm-5 offset-sm-1">
            <p className="text-justify">
              Hello, my name is Alfin NoviAji. I am 25 years old. I was born in
              Malang, 21 November 1996. I live on Jalan Raya Losawi No. 15
              Malang. My nationality is Indonesian, and my religion is Islam.
              This time, I have graduated from the Malang Institute of
              Technology and Business majoring in informatics engineering. My
              hobbies are coding and basketball
            </p>
          </div>
          <div className="col-sm-5">
            <p className="text-justify">
              I am interested in technology so that I have expertise in
              fullstack web and mobile development, the language that is most
              proficient in the javascript platform I often use node.js, I
              always keep abreast of the evolving technology development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
