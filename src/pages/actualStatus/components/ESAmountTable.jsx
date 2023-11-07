import React, { useState } from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export const ESAmountTable = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return null;
  }
  const headings = Object.keys(tableData[0]);
  return (
    <Stack mb={2} width={"100%"}>
      <TableContainer sx={{ border: "1px solid #ddd" }}>
        <Table>
          <TableRow>
            {headings.map((heading) => (
              <TableCell key={heading} sx={{ padding: "10px 5px" }}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
          <TableBody>
            {tableData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  "&:hover": {
                    bgcolor: "#d1d1d1",
                  },
                }}
              >
                {headings.map((heading) => (
                  <TableCell
                    key={heading}
                    sx={{
                      padding: "10px 10px",
                      "&:hover": { backgroundColor: "#d1d1d1" },
                    }}
                  >
                    {row[heading]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
