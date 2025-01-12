import MyNavBar from "./components/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import { Component } from "react";
import MyProfile from "./components/MyProfile";
import ProfileSettings from "./components/ProfileSettings";

class App extends Component {
  state = {
    showPage: 1,
  };

  handleChangePage = (num) => {
    this.setState({ showPage: num });
    console.log("funziona" + this.state.showPage);
  };

  render() {
    return (
      <>
        <MyNavBar handleChangePage={this.handleChangePage} />
        {this.state.showPage == 1 ? (
          <MyHome />
        ) : this.state.showPage == 2 ? (
          <MyProfile />
        ) : (
          <ProfileSettings />
        )}
        <MyFooter />
      </>
    );
  }
}

export default App;
