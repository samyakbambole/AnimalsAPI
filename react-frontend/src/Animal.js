import styles from "./Animal.module.css";
import Details from "./Details";
import { useState } from "react";

export default function Animal(animal) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <div className={`${styles.tile} ${styles.grow}`} onClick={toggleShowInfo}>
        <img src={animal.image} alt={animal.name} />
        <p className={styles.center}>
          <b>{animal.name}</b>
        </p>
      </div>
      {showInfo && <Details animal={animal} onClick={toggleShowInfo}></Details>}
    </>
  );
}
