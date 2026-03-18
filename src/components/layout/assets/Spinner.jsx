import { ThreeCircles } from "react-loader-spinner";
function Spinner() {
  return (
    // "w-full":- Makes container full width
    // "flex justify-center":- Centers child horizontally
    <div className="w-full mt-20 flex justify-center">
      <ThreeCircles
        visible={true}
        width={180}
        className="text-center mx-auto"
        color="#FFFFFF"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
}

export default Spinner;
