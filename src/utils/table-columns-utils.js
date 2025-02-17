import { Avatar, Tag } from "antd";
import "../App.css";
const transformColumns = (data) => {
  const updateColumns = data?.columns?.map((column) => ({
    ...column,
    dataIndex: column.type,
    width:
      column.type === "name"
        ? 300
        : column.type === "subtasks"
        ? 50
        : column.type === "people"
        ? 100
        : 150,
    fixed: column.type === "name" || column.type === "subtasks" ? "left" : "",
    align: "center",
    render:
      column.type === "people"
        ? (imgUrl) => <Avatar src={imgUrl} />
        : column.type === "timeline"
        ? (timeline) => (
            <>
              <Tag
                color={timeline === "-" ? "rgb(196, 196, 196)" : "#333333"}
                key={timeline}
                className="timelineTag"
              >
                {timeline}
              </Tag>
            </>
          )
        : column.type === "dropdown"
        ? (dropdown) => (
            <>
              {dropdown?.split(" ")?.map((value) => {
                return (
                  <Tag color={"#cce5ff"} className="dropdownTag">
                    {value}
                  </Tag>
                );
              })}
            </>
          )
        : column.type === "status"
        ? (text, record) => {
            return {
              props: {
                style: {
                  background: record.labelColor,
                  color: "#ffffff",
                },
              },
              children: <div>{text}</div>,
            };
          }
        : "",
  }));

  return updateColumns;
};

export default transformColumns;

// #cce5ff
