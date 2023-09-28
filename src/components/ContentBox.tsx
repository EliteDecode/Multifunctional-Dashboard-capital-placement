import React from "react";
import { Tabs, Layout } from "antd";
import ChartArea from "./ChartArea";
import OverviewArea from "./OverviewArea";

const { Content } = Layout;
const { TabPane } = Tabs;

const ContentBox = () => {
  return (
    <Content
      style={{
        margin: "0px 0px",
        padding: "10px 25px",
        minHeight: 280,
        background: "#f5f5f5",
      }}
    >
      <OverviewArea />
    </Content>
  );
};

export default ContentBox;
