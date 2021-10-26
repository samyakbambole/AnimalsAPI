import styles from "./Details.module.css";

export default function Details(props) {
  return (
    <div className={`${styles.front}`} onClick={props.onClick}>
      <div className={`${styles.centerscreen}`} onClick={props.onClick}>
        <div className={`${styles.box}`} onClick={props.onClick}>
          <img src={props.animal.image} alt={props.animal.name} />
          <div className={`${styles.leftalign}`}>
            <h1>{props.animal.name}</h1>
            <h2>{props.animal.species}</h2>
            <h3>{props.animal.habitat}</h3>
            <h4>{props.animal.description}</h4>
            <h5>
              <a href={props.animal.link} target="_blank">
                Visit Wikipedia
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
