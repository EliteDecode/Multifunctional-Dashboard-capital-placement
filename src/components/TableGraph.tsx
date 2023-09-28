import { Table, Divider } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  stage: string;
  qualified: number;
  disqualified: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Stage",
    dataIndex: "stage",
  },
  {
    title: "Qualified",
    dataIndex: "qualified",
  },
  {
    title: "Disqualified",
    dataIndex: "disqualified",
  },
];

const data: DataType[] = [
  {
    key: "1",
    stage: "Applied",
    qualified: 3022,
    disqualified: 1445,
  },
  {
    key: "2",
    stage: "Recommended",
    qualified: 2154,
    disqualified: 958,
  },
  {
    key: "3",
    stage: "Interview",
    qualified: 443,
    disqualified: 123,
  },
  {
    key: "4",
    stage: "Other",
    qualified: 183,
    disqualified: 290,
  },
  {
    key: "5",
    stage: "Hired",
    qualified: 110,

    disqualified: 55,
  },
];

const TableGraph: React.FC = () => (
  <>
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      bordered={false}
      pagination={false}
    />
  </>
);

export default TableGraph;
