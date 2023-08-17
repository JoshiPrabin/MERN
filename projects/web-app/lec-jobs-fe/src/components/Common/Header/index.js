import SearchBar from "./SearchBar";
import Menu from "./Menu";
import Nav from "./Nav";
import UserAccount from "./UserAccount";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="header-data">
          <Logo></Logo>
          <SearchBar></SearchBar>
          <Nav></Nav>
          <Menu></Menu>
          <UserAccount user={props.user}></UserAccount>
        </div>
      </div>
    </header>
  );
};

export default Header;
