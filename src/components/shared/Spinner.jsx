import spinner from "../layout/assets/spinner.gif";
function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto h-48"
      />
    </div>
  );
}

export default Spinner;
