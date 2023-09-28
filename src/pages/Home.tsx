import React, { useState, useRef, useEffect } from "react";
import { Tabs, Layout, Col, Row } from "antd";
import ChartArea from "../components/ChartArea";
import OverviewArea from "../components/OverviewArea";
import HeaderTab from "../components/HeaderTab";
import { PieChartOutlined } from "@ant-design/icons";
import { Tour } from "antd";
import type { TourProps } from "antd";
import { Skeleton } from "antd";

const { Content } = Layout;
const { TabPane } = Tabs;

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSkeleton, setSkeletonOpen] = useState<boolean>(true);

  const overviewRef = useRef(null);
  const chartRef = useRef(null);

  const steps: TourProps["steps"] = [
    {
      title: "Chart Area",
      description:
        "See applications made and how it's been represented in the chart and table.",

      target: () => chartRef?.current,
    },
    {
      title: "Opportunity Overview",
      description: "See the analysis of application on each firm",
      cover: (
        <div>
          <h2 className="text-[14px] font-bold">
            Click on the icon on the top right corner and the sidebar to see
            full details of application on each firm. see Icon below.
          </h2>
          <PieChartOutlined className="text-[25px] mt-4 text-blue-600" />
        </div>
      ),
      target: () => overviewRef?.current,
    },
  ];

  useEffect(() => {
    const skeletonTimer = setTimeout(() => {
      setSkeletonOpen(false);

      const tourCompleted = localStorage.getItem("tourCompleted");

      if (!tourCompleted) {
        setOpen(true);
      }
    }, 2000);

    return () => {
      clearTimeout(skeletonTimer);
    };
  }, []);

  const handleTourClose = () => {
    localStorage.setItem("tourCompleted", "true");
    setOpen(false);
  };

  return (
    <div>
      <HeaderTab title="Opportunity Overview" color="#1D4ED8" />

      <Content
        style={{
          margin: "0px 0px",
          padding: "10px 25px",
          minHeight: 280,
          background: "#f5f5f5",
        }}
      >
        {openSkeleton ? (
          <div className="w-full  p-4">
            <Skeleton
              active
              paragraph={{ rows: 18 }} // Specify the number of rows
            />
          </div>
        ) : (
          <>
            <div ref={chartRef}>
              <ChartArea />
            </div>

            <div ref={overviewRef}>
              <OverviewArea />
            </div>
          </>
        )}

        <Tour open={open} onClose={handleTourClose} steps={steps} />
      </Content>
    </div>
  );
};

export default Home;
