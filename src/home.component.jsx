import React from "react";
import Filters from "./filters.component";
import CharacterGrid from "./characterGrid.component";
import styles from "./home.module.css";

class Home extends React.Component {
  render() {
    const { data, loadAPIData } = this.props;
    return (
      <div className={styles.home}>
        <div className={styles.header}>Rick and Morty Pitstop</div>
        <div className={styles.tagline}>
          Your one stop shop to know all about Rick and Morty characters!
        </div>
        <Filters onSubmit={loadAPIData} />
        <CharacterGrid data={data} />
      </div>
    );
  }
}

export default Home;
