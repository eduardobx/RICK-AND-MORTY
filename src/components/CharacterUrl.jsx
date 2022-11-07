import React, { useEffect, useState } from "react";
import axios from "axios";
const CharacterUrl = ({ url }) => {
  const [character, setChacter] = useState([]);
  useEffect(() => {
    axios.get(`${url}`).then((res) => setChacter(res.data));
  }, []);
 
  const color=()=>{
     if(character.status=="Dead"){
      return  "red"
     } else if(character.status=="Alive") {
      return  "white"
     }else { return  "black"}
  }
 
  return (
    <div className="character-card">
      <img src={character.image} alt="" />
      <ul>
        <li className="name"><b> {character.name}</b></li>
        <li> <b> birtplace</b> <br />
        {character.origin?.name}</li>
        <li><b>number of episodes where it</b> <br />
        {character?.episode?.length}</li>
      </ul>
      
       <h4><p style={{ backgroundColor: color()}} className="status"></p> <div>{character.status}</div></h4>
    </div>
  );
};

export default CharacterUrl;
