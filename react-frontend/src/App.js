import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Animals from "./Animals";
import Search from "./Search";

function App() {
  const [animalsList, setAnimalsList] = useState([]);
  const [truncatedAnimalsList, setTruncatedAnimalsList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/animals").then((response) => {
      setAnimalsList(response.data);
      setTruncatedAnimalsList(response.data);
    });
  }, []);

  const searchHandler = (data) => setTruncatedAnimalsList(data)

  return (
    <div className="App">
      <Search animalsList={animalsList} onSearch={searchHandler}></Search>
      <Animals animalsList={truncatedAnimalsList}></Animals>
      {truncatedAnimalsList.length===0 && <p>Search returned no results</p>}
    </div>
  );
}

export default App;
