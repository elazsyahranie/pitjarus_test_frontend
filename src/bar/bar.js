import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  dataset: [
    {
      data: [12, 19, 3, 5, 2, 3],
    },
  ],
};

function BarPage() {
  return (
    <>
      <h2>This is where the bar will be</h2>
      <div className="d-flex justify-content-center">
        <Bar data={data} />
      </div>{" "}
    </>
  );
}

export default BarPage;
