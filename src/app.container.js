import React from "react";
import { connect } from "react-redux";
import { loadAPIData } from "./store/actions";
import SplashScreen from "./splashScreen.component";
import Home from "./home.component";

class App extends React.Component {
  state = {
    showSplashScreen: true
  };

  componentDidMount() {
    this.props.loadAPIData();
    setTimeout(() => {
      this.setState({
        showSplashScreen: false
      });
    }, 4000);
  }

  render() {
    const { showSplashScreen } = this.state;
    const { apiData, loadAPIData } = this.props;
    return (
      <div className="App">
        {showSplashScreen ? (
          <SplashScreen />
        ) : (
          apiData && <Home data={apiData} loadAPIData={loadAPIData} />
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
