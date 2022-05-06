import React, { useEffect, useState } from "react"
import Character from "./components/Character";
import LoadingMask from "./components/LoadingMask";
import Subscription from "./components/Subscription";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [subscription, setSubscription] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      fetch("https://demoapi.com/api/series/howimetyourmother")
      .then(res => res.json())
      .then(charsData => {
        setCharacters(charsData);
        setLoading(false);
        setTimeout(() => {
          setSubscription(true)
        }, 10000)
      })
    },
    []
  )

  return (
    <div>
      {
        loading ? 
        <LoadingMask /> :
        characters.map((character, index) => <Character key={index} character={character} />)
      }
      { subscription && <Subscription setSubscription={setSubscription}/>}
    </div>
  )
}

export default App
