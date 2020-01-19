import React from "react";
import styles from "./filters.module.css";

class Filters extends React.Component {
  state = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  };

  onChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, status, species, type, gender } = this.state;
    return (
      <div className={styles.filters}>
        FILTER:
        <div>
          Name:{" "}
          <input
            name="name"
            autoComplete="off"
            type="text"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div>
          Status:{" "}
          <input
            name="status"
            autoComplete="off"
            type="text"
            value={status}
            onChange={this.onChange}
          />
        </div>
        <div>
          Species:{" "}
          <input
            name="species"
            autoComplete="off"
            type="text"
            value={species}
            onChange={this.onChange}
          />
        </div>
        <div>
          Type:{" "}
          <input
            name="type"
            autoComplete="off"
            type="text"
            value={type}
            onChange={this.onChange}
          />
        </div>
        <div>
          Gender:{" "}
          <input
            name="gender"
            type="text"
            value={gender}
            onChange={this.onChange}
          />
        </div>
        <div>
          <input type="button" value="Filter" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Filters;
