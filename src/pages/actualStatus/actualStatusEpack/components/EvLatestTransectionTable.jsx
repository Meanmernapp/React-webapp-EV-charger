import React, { useState } from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TablePagination,
} from "@mui/material";

const EpLatestTransectionTable = ({ tableData }) => {
  const rowsPerPage = 5; 
  const [page, setPage] = useState(0);

  if (!tableData || tableData.length === 0) {
    return null;
  }

  const headings = Object.keys(tableData[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const slicedData = tableData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
            {slicedData.map((row, rowIndex) => (
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
                    {row[heading]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={tableData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
      />
    </Stack>
  );
};

export default EpLatestTransectionTable;
