import React from "react";
import { connect } from "react-redux";
import { loadAPIData } from "./store/actions";
import SplashScreen from "./splashScreen.component";
import Home from "./home.component";

class App extends React.Component {
  componentDidMount() {
    this.props.loadAPIData();
  }

  render() {
    const { showSplashScreen, apiData } = this.props;
    return (
      <div className="App">
        {showSplashScreen ? (
          <SplashScreen />
        ) : (
          apiData && <Home data={apiData} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = { loadAPIData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
