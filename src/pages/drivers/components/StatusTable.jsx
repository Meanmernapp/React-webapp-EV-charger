import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
const data = [
  {
    id: 1,
    title: "Contacted Driver to change route",
    time: "10:00 AM",
    name: "John Doe",
    action: "waiting for response",
    status: "pending",
  },
  {
    id: 2,
    title: "Contacted someone to fix conection due to station damage.",
    time: "11:30 AM",
    name: "Jane Smith",
    action: "resolved",
    status: "fullfilled",
  },
  {
    id: 2,
    title: "Contacted someone to fix conection due to station damage.",
    time: "11:30 AM",
    name: "Jane Smith",
    action: "rejected",
    status: "rejected",
  },
];
const headings = ["Notes", "Time", "Responisble", "Status"];
export const StatusTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "#f7f7f7" },
            }}
          >
            {headings?.map((_, index) => (
              <TableCell key={index}>{_}</TableCell>
            ))}
          </TableRow>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor: "white",
                "&:hover": { backgroundColor: "#f7f7f7" },
              }}
            >
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell
                sx={{
                  color:
                    row.status === "pending"
                      ? "blue"
                      : row.status === "rejected"
                      ? "red"
                      : "green",
                }}
              >
                {row.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
