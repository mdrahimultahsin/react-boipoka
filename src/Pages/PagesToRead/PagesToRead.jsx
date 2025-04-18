import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {getMarkedbooks} from "../../utils/localStorage";

const PagesToRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const data = useLoaderData();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooksId = getMarkedbooks();
    const newBooks = [];
    for (const id of storedBooksId) {
      const remainingBooks = data.find((book) => book.bookId === id);
      if (remainingBooks) {
        newBooks.push(remainingBooks);
      }
    }
    setBooks(newBooks);
  }, [data]);
  const chartData = books.map((book) => ({
    name: book.bookName.split(" ").slice(0,4).join(" "),
    pages: book.totalPages,
  }));
  console.log(chartData);
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const {fill, x, y, width, height} = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="bg-[#f3f3f3] p-10 mt-8">
      
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData} height={600} width={1000}
        margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{ fontSize: '14px',textAnchor: "center" }}/>
          <YAxis />
          <Bar dataKey="pages" shape={<TriangleBar />} fill={colors} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
