import { Component } from "react";
import Header from "./Header";
import UserSection from "./UserSection";
import PosTop from "./PosTop";
import PostBar from "./PostBar";
import RightBar from "./RightBar";
import Spinner from "./Spinner";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/v1/user")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ user: data });
      })
      .catch((err) => {
        console.error(err);
      });

    fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const user = { ...this.state.user };
    // const { user } = this.state;
    if (!Object.keys(user).length) {
      return <div></div>;
    }
    return (
      <div className="wrapper">
        <Header user={user}></Header>
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                    <UserSection user={user}></UserSection>
                  </div>
                  <div className="col-lg-6 col-md-8 no-pd">
                    <div className="main-ws-sec">
                      <PosTop></PosTop>
                      <div className="posts-section">
                        <PostBar user={user}></PostBar>
                        <div
                          className="top-profiles"
                          style={{ display: "none" }}
                        >
                          <div className="pf-hd">
                            <h3>Top Profiles</h3>
                            <i className="la la-ellipsis-v"></i>
                          </div>
                          <div className="profiles-slider slick-initialized slick-slider">
                            <span
                              className="slick-previous slick-arrow"
                              style={{ display: " inline" }}
                            ></span>
                            <div className="slick-list draggable">
                              <div
                                className="slick-track"
                                style={{
                                  opacity: 1,
                                  width: "2415px",
                                  transform: "translate3d(-805px, 0px, 0px)",
                                  transition: "transform 500ms ease 0s",
                                }}
                              >
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="-3"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="-2"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="-1"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide"
                                  data-slick-index="0"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide"
                                  data-slick-index="1"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="0"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="0"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="0"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="0"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="./index.html#" title="" tabIndex="0">
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-current slick-active"
                                  data-slick-index="2"
                                  aria-hidden="false"
                                  style={{ width: "153px" }}
                                  tabIndex="0"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="0"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="0"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="0"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="./index.html#" title="" tabIndex="0">
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-active"
                                  data-slick-index="3"
                                  aria-hidden="false"
                                  style={{ width: "153px" }}
                                  tabIndex="0"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="0"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="0"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="0"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="./index.html#" title="" tabIndex="0">
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-active"
                                  data-slick-index="4"
                                  aria-hidden="false"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide"
                                  data-slick-index="5"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="6"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="7"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="8"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="9"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="10"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="11"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabIndex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Prabin Joshi</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabIndex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabIndex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabIndex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabIndex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>

                            <span
                              className="slick-nexti slick-arrow"
                              style={{ display: " inline" }}
                            ></span>
                          </div>
                        </div>
                        <div className="posty">
                          <div
                            className="comment-section"
                            style={{ display: "none" }}
                          >
                            <a href="./index.html#" className="plus-ic">
                              <i className="la la-plus"></i>
                            </a>
                            <div className="comment-sec">
                              <ul>
                                <li>
                                  <div className="comment-list">
                                    <div className="bg-img">
                                      <img src="./images/bg-img1.png" alt="" />
                                    </div>
                                    <div className="comment">
                                      <h3>Prabin Joshi</h3>
                                      <span>
                                        <img src="./images/clock.png" alt="" />{" "}
                                        3 min ago
                                      </span>
                                      <p>Lorem ipsum dolor sit amet,</p>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="active"
                                      >
                                        <i className="fa fa-reply-all"></i>Reply
                                      </a>
                                    </div>
                                  </div>
                                  <ul>
                                    <li>
                                      <div className="comment-list">
                                        <div className="bg-img">
                                          <img
                                            src="./images/bg-img2.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="comment">
                                          <h3>Prabin Joshi</h3>
                                          <span>
                                            <img
                                              src="./images/clock.png"
                                              alt=""
                                            />
                                            3 min ago
                                          </span>
                                          <p>Hi John</p>
                                          <a href="./index.html#" title="">
                                            <i className="fa fa-reply-all"></i>
                                            Reply
                                          </a>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <div className="comment-list">
                                    <div className="bg-img">
                                      <img src="./images/bg-img3.png" alt="" />
                                    </div>
                                    <div className="comment">
                                      <h3>Prabin Joshi</h3>
                                      <span>
                                        <img src="./images/clock.png" alt="" />{" "}
                                        3 min ago
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam luctus
                                        hendrerit metus, ut ullamcorper quam
                                        finibus at.
                                      </p>
                                      <a href="./index.html#" title="">
                                        <i className="fa fa-reply-all"></i>Reply
                                      </a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="post-comment">
                              <div className="cm_img">
                                <img src="./images/bg-img4.png" alt="" />
                              </div>
                              <div className="comment_box">
                                <form>
                                  <input
                                    type="text"
                                    placeholder="Post a comment"
                                  />
                                  <button type="submit">Send</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Spinner></Spinner>
                      </div>
                    </div>
                  </div>
                  <RightBar></RightBar>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="post-popup pst-pj">
          <div className="post-project">
            <h3>Post a project</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-12">
                    <div className="price-sec">
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar"></i>
                      </div>
                      <span>To</span>
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="submit" value="post">
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="./index.html#" title="">
              <i className="la la-times-circle-o"></i>
            </a>
          </div>
        </div>
        <div className="post-popup job_post">
          <div className="post-project">
            <h3>Post a job</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-6">
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar"></i>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inp-field">
                      <select>
                        <option>Full Time</option>
                        <option>Half time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="submit" value="post">
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="./index.html#" title="">
              <i className="la la-times-circle-o"></i>
            </a>
          </div>
        </div>
        <div
          className="chatbox-list"
          style={{ right: "270px", display: "none" }}
        >
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img1.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Prabin Joshi <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_1"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabIndex="0"
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_1_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_1_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img2.png" alt="" />
              </a>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Prabin Joshi <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_2"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_2"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabIndex="0"
                >
                  <div
                    id="mCSB_2_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_2_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_2_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg bx">
              <a href="./index.html#" title="">
                <img src="./images/chat.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title">
                <h3>Messages</h3>
                <a href="./index.html#" title="" className="close-chat">
                  <i className="la la-minus-square"></i>
                </a>
              </div>
              <div className="chat-list">
                <div className="conv-list active">
                  <div className="usrr-pic">
                    <img src="./images/usy1.png" alt="" />
                    <span className="active-status activee"></span>
                  </div>
                  <div className="usy-info">
                    <h3>Prabin Joshi</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>1:55 PM</span>
                  </div>
                  <span className="msg-numbers">2</span>
                </div>
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy2.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Prabin Joshi</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>11:39 PM</span>
                  </div>
                </div>
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy3.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Prabin Joshi</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>0.28 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
