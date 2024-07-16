import lottie from "@/images/loading-lottie.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const Loader = () => {
  return (
    <div className="md:mt-24 mt-6">
      <Player
        autoplay
        loop
        src={lottie}
        style={{ height: "250px", width: "250px" }}
      />
      <div className="flex justify-center items-center space-x-1">
        <span>Cargando</span>
        <span className="dot1 animate-loading1">.</span>
        <span className="dot2 animate-loading2">.</span>
        <span className="dot3 animate-loading3">.</span>
      </div>
    </div>
  );
};
