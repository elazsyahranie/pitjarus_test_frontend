import { Container, Row, Form, Col, Button } from "react-bootstrap";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
    },
  ],
};

function Home() {
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-around">
          <Button>Select Area</Button>
          <Button>Select dateFrom</Button>
          <Button>Select dateTo</Button>
          <Button>Select View</Button>
        </div>
        <Bar
          data={data}
          style={{ width: "700px", height: "auto", margin: "0 auto" }}
        />
      </Row>
    </Container>
  );
}

export default Home;
