import React from "react";
import styles from "./characterGrid.module.css";

class CharacterGrid extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    const characterGridItems = data.results.map(item => (
      <CharacterGridItem character={item} />
    ));
    return <div className={styles.characterGrid}>{characterGridItems}</div>;
  }
}

const CharacterGridItem = props => {
  const { character } = props;
  return (
    <div className={styles.gridItem}>
      <img src={character.image} alt={character.name} />
      <div className={styles.name}>{character.name}</div>
      <div>Status: {character.status}</div>
      <div>Species: {character.species}</div>
      <div>Gender: {character.gender}</div>
      <div>Origin: {character.origin.name}</div>
    </div>
  );
};

export default CharacterGrid;
