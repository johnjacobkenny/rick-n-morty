import React from "react";
import SplashScreen from "./splashScreen.component";
import Home from "./home.component";

class App extends React.Component {
  state = {
    loading: false // TODO: take this from the redux store?
  };

  render() {
    const { loading } = this.state;

    return <div className="App">{loading ? <SplashScreen /> : <Home />}</div>;
  }
}

export default App;
