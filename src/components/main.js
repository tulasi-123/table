import React from "react";
import { Row, Col } from "antd";
import SideMenu from "./menu";
import DataTable from "./table";

const Main = () => {
  return (
    <Row>
      <Col span={5}>
        <SideMenu />
      </Col>
      <Col span={19}>
        <DataTable />
      </Col>
    </Row>
  );
};

export default Main;
