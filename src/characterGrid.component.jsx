import React from "react";
import styles from "./characterGrid.module.css";
import emptyState from "./emptyState.png";
import Spinner from "./common/spinner.component";

class CharacterGrid extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return;
    if (data.error)
      return (
        <div className={styles.empty}>
          <img src={emptyState} alt="empty state" />I hate to break it to ya
          Morty, what you're looking for isn't in this multiverse! Try something
          else.
        </div>
      );
    // if (data.error) return <div className={styles.empty}>Whoops, couldn't find that one!</div>;

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
