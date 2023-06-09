const Newsletters = () => {
  return (
    <div className="footer-newsletter br-10 bg-lighter">
      <div className="row">
        <div className="col-lg-6">
          <div
            className="newsletter-video bgs-cover overlay wow fadeInLeft delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/video/footer-video-bg.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="newsletter-content wow fadeInRight delay-0-2s">
            <div className="section-title mb-20">
              <span className="sub-title-two">Newsletters</span>
              <h2>Get Our Every Single Notifications</h2>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="newsletter-form mt-25"
              action="#"
            >
              <div className="newsletter-radios mb-25">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="hero-wekly"
                    name="example1"
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="hero-wekly">
                    Regular Updates
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="hero-monthly"
                    name="example1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="hero-monthly"
                  >
                    Weekly Updates
                  </label>
                </div>
              </div>
              <div className="newsletter-email">
                <label htmlFor="email">
                  <i className="far fa-envelope" />
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  required=""
                />
                <button type="submit" className="theme-btn style-two">
                  sign up <i className="fas fa-arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletters;
