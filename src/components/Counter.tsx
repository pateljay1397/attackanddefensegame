import { useState } from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [lastPlay, setLastPlay] = useState("");

  const handleAttack = () => {
    //alert("Attack clicked");
    let newCount = count + Math.round(Math.random() * 10);
    setCount(newCount);
    setLastPlay("Attack");
    newCount > 10 ? setGameStatus("You Won!!") : setGameStatus(gameStatus);
  };

  const handleDefence = () => {
    //alert("Defend clicked");
    let newCount = count - Math.round(Math.random() * 10);
    setCount(newCount);
    setLastPlay("Defence");
    newCount < -10 ? setGameStatus("You Lost!!") : setGameStatus(gameStatus);
  };

  const handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      handleAttack();
    } else {
      handleDefence();
    }
  };

  const handleReset = () => {
    setCount(0);
    setGameStatus("");
    setLastPlay("");
  };

  return (
    <div className="row text-white text-center">
      <h1>Game Score: {count} </h1>
      <p>You win at +10 points and lose at -10 points!</p>
      <p>Last Play:{lastPlay} </p>
      <h3>Game Status : {gameStatus}</h3>
      <div className="col-6 col-md-3 offset-md-3">
        <img
          style={{
            width: "100%",
            cursor: "pointer",
            border: "1px solid green",
          }}
          className="p-4 rounded"
          src={attack}
          onClick={handleAttack}
          alt="Defense"
        />
      </div>
      <div className="col-6 col-md-3 ">
        <img
          style={{
            width: "100%",
            cursor: "pointer",
            border: "1px solid red",
          }}
          className="p-4 rounded"
          src={defend}
          onClick={handleDefence}
          alt="Attack"
        />
      </div>
      <div className="col-12 col-md-4 offset-md-4">
        <button
          className="btn btn-secondary w-100 mt-2"
          onClick={handleRandomPlay}
        >
          Random Play
        </button>
        <br />
        <button className="btn btn-warning w-100 mt-2" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
