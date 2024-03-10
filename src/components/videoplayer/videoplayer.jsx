import "./videoplayer.css";
import video from "../../assets/program-1.png";
import { useRef } from "react";
const Videoplayer = ({ play, Setplay }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      Setplay(false);
    }
  };
  return (
    <div
      className={`videoplayer ${play ? " " : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <img src={video} alt="" />
    </div>
  );
};

export default Videoplayer;
