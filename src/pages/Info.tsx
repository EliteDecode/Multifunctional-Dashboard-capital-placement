import React, { useState, useRef } from "react";
import { Tabs, Layout } from "antd";
import ChartArea from "../components/ChartArea";
import OverviewArea from "../components/OverviewArea";
import HeaderTab from "../components/HeaderTab";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Tour } from "antd";
import type { TourProps } from "antd";
import { useParams } from "react-router-dom";
const { Content } = Layout;

const Home = () => {
  const { firm } = useParams();

  const [open, setOpen] = useState<boolean>(false);

  const appliedRef = useRef(null);
  const hiredRef = useRef(null);
  const chartRef = useRef(null);

  const steps: TourProps["steps"] = [
    {
      title: "Upload File",
      description: "Put your files here.",
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => appliedRef?.current,
    },
    {
      title: "Save",
      description: "Save your changes.",
      target: () => hiredRef?.current,
    },
    {
      title: "Other Actions",
      description: "Click to see other actions.",
      target: () => chartRef?.current,
    },
  ];

  return (
    <>
      <HeaderTab title={`Program Overview ${firm}`} color="#000" />
      <Content
        style={{
          margin: "0px 0px",
          padding: "10px 25px",
          minHeight: 280,
          background: "#f5f5f5",
        }}
      >
        <ChartArea />
        <ChartArea />
      </Content>
    </>
  );
};

export default Home;
