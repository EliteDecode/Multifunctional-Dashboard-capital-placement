import React from "react";
import { Button, Col, Input, Row, Select, Space } from "antd";

import { SearchOutlined, InfoCircleOutlined } from "@ant-design/icons";
import OverviewDetails from "./OverviewDetails";
import {
  OverviewData,
  OverviewDataMicrosoft,
  OverviewsGoogle,
  OverviewsMicrosoft,
} from "../utils/HelperItems";
const { Option } = Select;

const OverviewArea: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="header">
        <h1 className="text-[16px] font-semibold">
          Detailed Opportunity Overview
        </h1>
      </div>

      <div className="input-headers mt-5">
        <Row className="w-full " gutter={12}>
          <Col xs={24} sm={24} md={12} lg={14}>
            {" "}
            {/* Adjusted column sizes */}
            <div className="border-white justify-between bg-white flex items-center px-3 rounded-md">
              <div className="flex items-center w-full">
                <SearchOutlined className="text-[14px] opacity-40" />
                <Input placeholder="Search by employer name" />
              </div>
              <InfoCircleOutlined className="text-[14px] opacity-40" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={5}>
            {" "}
            {/* Adjusted column sizes */}
            <Select
              defaultValue="Sort BY"
              style={{ width: "100%" }} // Adjusted width
            >
              <Option value="applied">Applied</Option>
              <Option value="recommended">Recommended</Option>
              <Option value="interview">Interview</Option>
              <Option value="other">Other</Option>
              <Option value="hired">Hired</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={6} lg={5}>
            {" "}
            {/* Adjusted column sizes */}
            <Button
              type="default"
              size="middle"
              className="w-full font-bold bg-white text-[#0557E5] border-white outline-none"
            >
              Export all as CSV
            </Button>
          </Col>
        </Row>
      </div>

      <div className="mt-5">
        <OverviewDetails
          firm="Microsoft"
          data={OverviewsGoogle}
          applicationDetails={OverviewData}
        />
      </div>
      <div className="mt-5">
        <OverviewDetails
          firm="Google"
          data={OverviewsMicrosoft}
          applicationDetails={OverviewDataMicrosoft}
        />
      </div>
    </div>
  );
};

export default OverviewArea;
