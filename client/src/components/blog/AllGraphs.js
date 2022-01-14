import React, { useEffect, useState } from "react";
import api from "./baseURL";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import RangeDatePicker from "../common/RangeDatePicker";
// import Chart from "../../utils/chart";

const AllGraphs = ({ title }) => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: title,
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  });

  const fetchData = async () => {
    try {
      const response = await api.get("/temp");
      const mongo_data = response.data;
      let temp_arr = mongo_data.map((obj_temp) => obj_temp.temp.$numberDecimal);
      setData({
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: title,
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: temp_arr,
          },
        ],
      });
      console.log(temp_arr);
    } catch (err) {
      if (err.response) {
        // Not in the 200 range
        console.log(err.response.data);
        console.log(err.response.statusCode);
        console.log(err.response.headers);
      } else {
        console.log(`ERROR: ${err.message}`);
      }
    }
  };

  return (
    <Card small className="h-auto w-11/12">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <CardBody className="pt-0">
        <Row className="border-bottom py-2 bg-light">
          <Col sm="6" className="d-flex mb-2 mb-sm-0">
            <RangeDatePicker />
          </Col>
          <Col>
            <Button
              size="sm"
              className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              onClick={fetchData}
            >
              View Full Report &rarr;
            </Button>
          </Col>
        </Row>
        <Row>
          <Line
            data={data}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </Row>
      </CardBody>
    </Card>
  );
};

AllGraphs.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
};

export default AllGraphs;
