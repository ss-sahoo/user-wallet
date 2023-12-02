import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [postsData, setPostsData] = useState([]);

  // Fetch the posts data from the API and store it in state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data);
        const filteredPosts = data.filter((post) => post.userId === 1);
        setPosts(filteredPosts);
      });
  }, []);

  // Get the users data for the pie chart
  const getUsersData = () => {
    const usersData = [];
    const users = Array.from(new Set(postsData.map((post) => post.userId)));
    const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6e52", "#c49a9a"]; // Define the colors for each user here

    // Iterate through each unique user and calculate their number of posts
    users.forEach((userId, index) => {
      const userPosts = postsData.filter((post) => post.userId === userId);
      usersData.push({
        name: `User ${userId}`,
        value: userPosts.length,
        color: colors[index % colors.length], // Use a color based on the index of the user
      });
    });

    return usersData;
  };

  // Get the data for the pie chart
  const data = getUsersData();

  return (
    <div className="pt-16 h-screen">
      <table className="w-full mx-auto">
        <thead>
          <tr>
            <th className="bg-gray-200 text-primary font-bold py-2 px-4">ID</th>
            <th className="bg-gray-200 text-primary font-bold py-2 px-4">
              Title
            </th>
            <th className="bg-gray-200 text-primary font-bold py-2 px-4">
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render each post in a table row */}
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border py-2 px-4">{post.id}</td>
              <td className="border py-2 px-4">{post.title}</td>
              <td className="border py-2 px-4">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-10 mx-auto w-4/5">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {/* Render a colored cell for each data entry */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Data;
