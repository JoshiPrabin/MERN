import Footer from "../Main/RightSide/index";
import Middle from "./Middle";
import LeftSide from "./LeftSide";
import RightSide from "../Main/RightSide/index";

const Main = (props) => {
  return (
    <main>
      <div className="main-section">
        <div className="container">
          <div className="main-section-data">
            <div className="row">
              <LeftSide user={props.user} />
              <Middle user={props.user} />
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
