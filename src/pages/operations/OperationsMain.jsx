import {
  Box,
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Navigation } from "../actualStatus/components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { GetOperations } from "../../services/operations/OperationsApi";
import dayjs from "dayjs";

export const Urgent = ({ is_urgent }) => {
  return (
    <input
      value="urgent"
      type="checkbox"
      defaultChecked={is_urgent}
      className="custom-checkbox"
    />
  );
};
export const EditOperation = ({ status }) => {
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <Button
      onClick={handleClick}
      sx={{
        padding: "0",
        margin: "0",
        border: "none",
        width: "2rem",
        height: "1rem",
        color:
          status === "Pending"
            ? "blue"
            : status === "Completed"
            ? "#88B14B"
            : status === "Requested"
            ? "#1A73E8"
            : "#000",
      }}
      disabled={status === "Completed"}
    >
      <Edit />
    </Button>
  );
};
const columns = [
  { id: "request", label: "Request" },
  { id: "epackLocation", label: "Epack Location" },
  { id: "replacementDestination", label: "Replacement Destination" },
  { id: "timeOfRequest", label: "Time of Request" },
  { id: "status", label: "Status" },
  { id: "driver", label: "Driver" },
  { id: "urgent", label: "Urgent" },
  { id: "edit", label: "Edit" },
];


export const OperationsMain = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // OPERATIONS
  const operations = useSelector(
    (state) => state.OperationsSlice.allOperations
  );
  console.log(operations)
  const rows = operations[0]?.map((item, index) => {
    return {
      request: `${item.id}`,
      epackLocation: item.location,
      replacementDestination: ` ${index + 1}`,
      timeOfRequest: dayjs(item.scheduled_at).format("YYYY-MM-DD HH:mm"),
      status: item.status,
      driver: `Driver ${item.driver_id}`,
      urgent: <Urgent is_urgent={item?.is_urgent} />,
      edit: <EditOperation status={item.status} />,
    };
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    dispatch(GetOperations());
  }, [dispatch]);
  return (
    <Grid container sx={{ background: "#fff", padding: "1rem" }}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack mb={2}>
          <Navigation
            breadcrumbsData={[
              { link: "/operations", text: "Operations" },
              { link: "/select-epack", text: "Move E-Pack" },
            ]}
          />
        </Stack>
      </Grid>
      <Grid container maxWidth={"100%"} sx={{ overflowX: "scroll" }}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h3" mb={2}>
            My Operations
          </Typography>
          <Table sx={{ border: "1px solid #dadada", borderRadius: "8px" }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    <Typography variant="body2" textTransform="uppercase">
                      {column.label !== "Edit" && column.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <TableRow key={row.request}>
                    {columns.map((column) => (
                      <TableCell key={column.id}>
                        <Typography
                          variant="p"
                          color={
                            row[column.id] === "Pending"
                              ? "blue"
                              : row[column.id] === "Completed"
                              ? "#88B14B"
                              : row[column.id] === "Requested"
                              ? "#1A73E8"
                              : column.label === "Edit"
                              ? "#7a7a7a"
                              : "#000"
                          }
                          sx={{
                            cursor: column.label === "Request" ? "pointer" : "",
                          }}
                        >
                          {row[column.id]}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Box width={"100%"}>
        <TablePagination
          component="div"
          count={rows?.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#88B14B",
            minWidth: "10rem",
            borderRadius: "8px",
            border: "1px solid #88b14b",
            "&:hover": { color: "#88b14b", background: "#fff" },
          }}
          onClick={() => navigate("/select-epack")}
        >
          New Request
        </Button>
      </Box>
    </Grid>
  );
};
