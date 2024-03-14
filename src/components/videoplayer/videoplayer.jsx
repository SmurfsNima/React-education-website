import "./videoplayer.css";
import video from '../../assets/video.mp4';
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
      <video autoPlay controls muted loop src={video} alt="" />
    </div>
  );
};

export default Videoplayer;
