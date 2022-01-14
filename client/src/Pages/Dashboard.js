import React from "react";
import { Container, Row, Col } from "shards-react";

import AllGraphs from "../components/blog/AllGraphs";

const Dashboard = () => {
  return (
    <div className="m-8 h-full">
        <h7 className=" text-gray-400">DASHBOARD</h7>
        <h2 className=" text-gray-600">CHART OVERVIEW</h2>
        <Row className="m-5">
          <Col>
            <AllGraphs title={"Dissolved Oxygen"} />
          </Col>
          <Col>
            <AllGraphs title={"Temperature"} />
          </Col>
          <Col>
            <AllGraphs title={"pH"} />
          </Col>
        </Row>
        <Row className="m-5">
          <Col>
            <AllGraphs title={"Carbon Dioxide"} />
          </Col>
          <Col>
            <AllGraphs title={"Oxygen"} />
          </Col>
          <Col>
            <AllGraphs title={"Carbon Monoxide"} />
          </Col>
        </Row>
    </div>
  );
};

export default Dashboard;
