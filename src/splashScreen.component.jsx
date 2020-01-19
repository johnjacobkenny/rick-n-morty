import React from "react";
import Spinner from "./common/spinner.component";
import styles from "./splashScreen.module.css";
import rnm from "./rnm.png";

const SplashScreen = () => {
  return (
    <div className={styles.splashScreen}>
      <img src={rnm} />
      <div className={styles.loading}>Scouring the multiverse!</div>
      <Spinner />
    </div>
  );
};

export default SplashScreen;
