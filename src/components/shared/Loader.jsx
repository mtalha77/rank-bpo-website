import { BallTriangle } from "react-loader-spinner";

function Loader({ color = "#005BEA", width = "100", height = "100" }) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="flex justify-center items-center h-screen w-screen">
        <BallTriangle
          height={width}
          width={height}
          radius={5}
          color={color}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}

export default Loader;
