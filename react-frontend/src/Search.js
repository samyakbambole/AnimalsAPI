import styles from "./Search.module.css"

export default function Search(props) {
  const inputChangeHandler = (event) => {
    const truncatedList = props.animalsList.filter((animal) =>
      animal.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    props.onSearch(truncatedList);
  };
  return (
      <div className={styles.search}>
      <input
        id="myInput"
        type="text"
        name="myAnimal"
        placeholder="Search Animals"
        onChange={inputChangeHandler}
      ></input>
    </div>
  );
}
