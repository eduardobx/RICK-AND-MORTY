import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharacterUrl from "./components/CharacterUrl";
import LocationFeatures from "./components/LocationFeatures";
import Footer from "./components/Footer";


function App() {
  const [location, setLocation] = useState([]);
  const [idLocation, setIdLocation] = useState("");
  const [name, setName] = useState([]);

  useEffect(() => {
    const i = Math.floor(Math.random() * 100);
    axios
      .get(`https://rickandmortyapi.com/api/location/${i}`)
      .then((res) => setLocation(res.data));
  }, []);

  const seacrhType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((res) => setLocation(res.data));

    if (idLocation > 150) {
      alert("Id no encontrado");
    } else if (isNaN(idLocation)) {
      alert(" no es un id");
    }
    const arrayname = [...name];
    arrayname.push(location.name);
    setName(arrayname);

    setIdLocation("");
  };

  console.log(name);

  const idCharacter = (e) => {
    setIdLocation(e.target.value);
  };
  const newlocation = () => {
    alert("hola");
  };
  const suggestions = () => {
    if (idLocation !== "") {
      return (
        <form className="mdeida-q">
          {name.map((index) => (
            <div key={index} onClick={newlocation}>
              {index}
            </div>
          ))}
        </form>
      );
    }
  };

  console.log(location);
  return (
    <div className="App">
      <div className="conteiner-main">
        <header>
          <div className="img-back">
            <div>
              <h1>RICK AND MORTY wikky</h1>
              <input
                type="text"
                value={idLocation}
                onChange={idCharacter}
                placeholder="write a location id"
              />
              <button onClick={seacrhType}>search</button>
              {suggestions()}
            </div>
          </div>
          <LocationFeatures location={location} />
        </header>

        <main className=" conteiner-fearures">
          {location.residents?.map((urlCharcter) => (
            <CharacterUrl url={urlCharcter} key={urlCharcter} />
          ))}
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
