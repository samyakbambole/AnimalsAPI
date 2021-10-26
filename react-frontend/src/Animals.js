import Animal from "./Animal";
import styles from "./Animals.module.css";

export default function Animals(props) {
  return (
    <div className={styles.container}>
      {props.animalsList.map((animal) => {
        return (
          <Animal
            key={animal.id}
            name={animal.name}
            description={animal.description}
            habitat={animal.habitat}
            species={animal.species}
            link={animal.wikipedia}
            image={animal.image}
          ></Animal>
        );
      })}
    </div>
  );
}
