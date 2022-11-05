import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CharacterUrl from "./components/CharacterUrl";
import LocationFeatures from "./components/LocationFeatures";


function App() {
  const [location, setLocation] = useState([]);
  const [idLocation,setIdLocation]=useState("")


  useEffect(() => {
     const i=Math.floor(Math.random ()  *100)
     axios.get(`https://rickandmortyapi.com/api/location/${i}`)
      .then((res) => setLocation(res.data))
    
  }, []);

  const seacrhType=()=>{

    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then((res) => setLocation(res.data))

    if(idLocation>150){
      alert("Id no encontrado")
    }else if(isNaN(idLocation)){
      alert (" no es un id")
    }
    
  }

  
 const idCharacter=(e)=>{
    setIdLocation(e.target.value)

 }
 
   
console.log(location)
  return (
    <div className="App">
    <img src="https://s3-alpha-sig.figma.com/img/2838/9946/263f7612d0101b6aa67c8b9f233f19fb?Expires=1668384000&Signature=GK-oJbP5YK12Uo~3EeAmAY-DQ7PrKu21hO6u67biQTmRdFnRMEiuPqsu8NvfIc79Ci8S5B9S25nKaxBdjlQgOtTCbOQlIjSYF01qQgEICeqDojHgraFBcQwC1jvkm3d7OQhAyHcr8qL5WBbPWGGgvj7cDBxuGnDXMecHnGAJ2raYQTLHSphEpo5ZX7VQAWEhcXcXBY~0g0jBLDM~cXzKfWW-N3blJH5mTok~CWXU7vTwFtr~Ik-FlZ6Rd5OF2RZVcF9NIHp~qld-k2LTC4oeTwqJlKu1tV57Xu9IOA752W~g9E3SUgAKpyJ8-VhmvdReWcMzjSbS~R-A8l9xdyLFAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""  className="caratula"/>
   <div className="conteiner-main">
     <header>
     <h1>RICK AND MORTY wikky</h1>
     <input type="text" value={idLocation}  onChange={idCharacter}/>
     <button onClick={seacrhType}>seacrh</button>
      <LocationFeatures location={location}/>
     </header>
    
     <main className=" conteiner-fearures">
     { location.residents?.map(urlCharcter=> (
      <CharacterUrl url={urlCharcter} key={urlCharcter}/>) )
     }
     </main> 
  </div>
    </div>
  );
}

export default App;
