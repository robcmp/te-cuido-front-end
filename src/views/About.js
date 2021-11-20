import React from "react";
import "../styles/home.css";

const About = () => {
  return (
    <div>
      {/* <!-- Start Banner Hero --> */}
      <section className="bg-light w-100">
        <div className="container">
          <div className="row d-flex align-items-center py-5">
            <div className="col-lg-6 text-start">
              <h1 className="h2 py-5 text-primary typo-space-line">About Us</h1>
              <p className="light-300">
                Vector illustration credit goes to{" "}
                <a rel="nofollow" href="http://freepik.com/" target="_blank">
                  FreePik
                </a>{" "}
                website. Purple Buzz is provided by TemplateMo. Lorem ipsum
                dolor sit amet, consectetur.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="../images/banner-img-02.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Hero --> */}

      {/* <!-- Start Team Member --> */}
      <section className="container py-5">
        <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">
          <div className="col-lg-3">
            <h2 className="h2 py-5 typo-space-line">Our Team</h2>
            <p className="text-muted light-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="col-lg-9 row">
            <div className="team-member col-md-4">
              <img
                className="team-member-img img-fluid rounded-circle p-4"
                src="/src/images/team-01.jpg"
                alt="women"
              />
              <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                <li>John Doe</li>
                <li>Business Development</li>
              </ul>
            </div>
            <div className="team-member col-md-4">
              <img
                className="team-member-img img-fluid rounded-circle p-4"
                src="../images/team-02.jpg"
                alt=""
              />
              <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                <li>Jane Doe</li>
                <li>Media Development</li>
              </ul>
            </div>
            <div className="team-member col-md-4">
              <img
                className="team-member-img img-fluid rounded-circle p-4"
                src="../images/team-03.jpg"
                alt=""
              />
              <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                <li>Sam</li>
                <li>Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Member --> */}

      {/* <!-- Start Our Partner --> */}
      <section className="bg-secondary py-3">
        <div className="container py-5">
          <h2 className="h2 text-white text-center py-5">Our Partner</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                  <i className="display-1 text-white bx bxs-buildings"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                  <i className="display-1 bx text-white bxs-check-shield bx-lg"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                  <i className="display-1 text-white bx bxs-bolt-circle"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                  <i className="display-1 text-white bx bxs-spa"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Our Partner--> */}

      {/* <!-- Start Progress --> */}
      <section className="bg-white py-5">
        <div className="container my-4">
          <h1 className="creative-heading h2 pb-3">Creative & Make Perfect</h1>

          <div className="creative-content row py-3">
            <div className="col-md-5">
              <p className="text-muted col-lg-8 light-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida Risus.
              </p>
            </div>
            <div className="creative-progress col-md-7">
              <div className="row mt-4 mt-sm-2">
                <div className="col-6">
                  <h4 className="h5">Development</h4>
                </div>
                <div className="col-6 text-right">66%</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "66%" }}
                  aria-valuenow="66"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="row mt-4 mt-sm-2">
                <div className="col-6">
                  <h4 className="h5">Design</h4>
                </div>
                <div className="col-6 text-right">90%</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="row mt-4 mt-sm-2">
                <div className="col-6">
                  <h4 className="h5">Marketing</h4>
                </div>
                <div className="col-6 text-right">74%</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "74%" }}
                  aria-valuenow="74"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Progress --> */}

      {/* <!-- Start Choice --> */}
      <section className="why-us banner-bg bg-light">
        <div className="container my-4">
          <div className="row">
            <div className="banner-img col-lg-5">
              <img
                src="./assets/img/work.svg"
                className="rounded img-fluid"
                alt=""
              />
            </div>
            <div className="banner-content col-lg-7 align-self-end">
              <h2 className="h2 pb-3">Why you choose us?</h2>
              <p className="text-muted pb-5 light-300">
                You are allowed to download and use this Purple Buzz template
                for your websites. You are <strong>not allowed</strong> to
                re-distribute this template ZIP file on other template websites.
                It is quite easy to simply copy and repost the ZIP file on any{" "}
                <a
                  rel="nofollow"
                  href="https://www.google.com/search?q=free+css"
                  target="_blank"
                >
                  Free CSS collection
                </a>{" "}
                websites.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Choice --> */}

      {/* <!-- Start Aim --> */}
      <section className="banner-bg bg-white py-5">
        <div className="container my-4">
          <div className="row text-center">
            <div className="objective col-lg-4">
              <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                <i className="display-4 bx bxs-bulb text-light"></i>
              </div>
              <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">
                Our Vision
              </h2>
              <p className="light-300">
                Incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse commodo viverra.
              </p>
            </div>

            <div className="objective col-lg-4 mt-sm-0 mt-4">
              <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                <i className="display-4 bx bx-revision text-light"></i>
              </div>
              <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">
                Our Mission
              </h2>
              <p className="light-300">
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis.
              </p>
            </div>

            <div className="objective col-lg-4 mt-sm-0 mt-4">
              <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                <i className="display-4 bx bxs-select-multiple text-light"></i>
              </div>
              <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">
                Our Goal
              </h2>
              <p className="light-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Aim --> */}

      {/* <!-- Start Contact --> */}
      <section className="banner-bg bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto my-4 p-3">
              <form action="#" method="get">
                <h1 className="h2 text-center">Stay up to date with us</h1>
                <div className="input-group py-3">
                  <input
                    name="email"
                    type="text"
                    className="form-control form-control-lg rounded-pill rounded-end"
                    id="email"
                    placeholder="Your Email"
                    aria-label="Your Email"
                  />
                  <button
                    className="btn btn-secondary text-white btn-lg rounded-pill rounded-start px-lg-4"
                    type="submit"
                  >
                    Subsribe
                  </button>
                </div>
                <p className="text-center light-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact --> */}
    </div>
  );
};

export default About;
