import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const LineChart = () => {
  const mathMarks = [
    { id: 1, name: "Alice", math: 85, physics: 78 },
    { id: 2, name: "Bob", math: 78, physics: 74 },
    { id: 3, name: "Charlie", math: 92, physics: 88 },
    { id: 4, name: "David", math: 74, physics: 70 },
    { id: 5, name: "Eve", math: 88, physics: 82 },
    { id: 6, name: "Frank", math: 80, physics: 76 },
    { id: 7, name: "Grace", math: 95, physics: 89 },
    { id: 8, name: "Hannah", math: 67, physics: 65 },
    { id: 9, name: "Ian", math: 90, physics: 85 },
    { id: 10, name: "Jack", math: 76, physics: 72 },
  ];

  return (
    <div>
      <LChart width={900} height={500} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics"></Line>
      </LChart>

      <BarChart width={900} height={500} data={mathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="math" fill="blue"></Bar>
      </BarChart>

      <PieChart width={500} height={500}>
        <Pie
          data={mathMarks}
          dataKey="math"
          startAngle={360}
          endAngle={0}
          fill="violet"
        ></Pie>
        {/* <Pie data={mathMarks} dataKey="physics" startAngle={360} endAngle={0} fill="black"></Pie> */}
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default LineChart;
