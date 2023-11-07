import React, { useState } from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const EpLiveTransactionTable = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return null;
  }

  const headings = Object.keys(tableData[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Stack mb={2} width={"100%"}>
      <TableContainer sx={{ border: "1px solid #ddd" }}>
        <Table>
          <TableRow>
            {headings.map((heading) => (
              <TableCell key={heading} sx={{ padding: "10px 5px" }}>
                <Typography sx={{ fontSize: "10px", textAlign: "center" }}>
                  {heading}
                </Typography>
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
                      "&:hover": {
                        bgcolor: "#d1d1d1",
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "10px", textAlign: "center" }}>
                      {row[heading]}
                    </Typography>
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

export default EpLiveTransactionTable;
