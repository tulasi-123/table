import React, { useState, useEffect } from "react";
import { ConfigProvider, Table } from "antd";
// import { createStyles } from "antd-style";
import tableData from "../mockData/tabelData";
import transformColumns from "../utils/table-columns-utils";
import transformData from "../utils/table-rows-utils";

// const useStyle = createStyles(({ css }) => {
//   const antCls = "ant";
//   return {
//     customTable: css`
//       ${antCls}-table {
//         ${antCls}-table-container {
//           ${antCls}-table-body,
//           ${antCls}-table-content {
//             ${antCls}-table-tbody {
//               tr {
//                 td {
//                   padding: 5px !important;
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   };
// });

const DataTable = () => {
  // const { styles } = useStyle();

  const [transformedData, setTransformedData] = useState([]);
  const [transformedColumns, setTransformedColumns] = useState([]);

  useEffect(() => {
    setTransformedData(transformData(tableData));
    setTransformedColumns(transformColumns(tableData));
  }, []);

  // console.log("transformedData", transformedData);
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            borderColor: "#d0d4e4",
            headerColor: "#323338",
            headerBg: "#ffffff",
          },
        },
      }}
    >
      <div className="tableContainer">
        <Table
          // className={styles.customTable}
          pagination={false}
          columns={transformedColumns}
          dataSource={transformedData}
          scroll={{ x: "max-content" }}
          bordered
          rowSelection={true}
        />
      </div>
    </ConfigProvider>
  );
};

export default DataTable;
