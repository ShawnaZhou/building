import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { DashboardLayout } from "../components/dashboard-layout";

function createData(name, calories, fat, carbs, protein, price, history) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">
          <LinearProgress variant="determinate" value={row.calories} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Rencently Checked</TableCell>
                    <TableCell>Check Item</TableCell>
                    <TableCell align="start">Status</TableCell>
                    <TableCell align="right">Setting</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">
                        <div
                          style={{
                            width: "5rem",
                            textAlign: "center",
                            backgroundColor:
                              historyRow.amount == "passed" ? "green" : "rgb(230,120,0)",
                            color: "white",
                            borderRadius: "15px",
                          }}
                        >
                          {historyRow.amount}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <Button>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Building 001", 85, 6.0, 24, 4.0, 3.99, [
    {
      date: "2021-01-01",
      customerId: "wall",
      amount: "passed",
    },
    {
      date: "2021-01-02",
      customerId: "ground",
      amount: "passed",
    },
    {
      date: "2021-01-02",
      customerId: "painting",
      amount: "warning",
    },
  ]),
  createData("Building 002", 90, 9.0, 37, 4.3, 4.99, [
    {
      date: "2021-01-01",
      customerId: "wall",
      amount: "passed",
    },
    {
      date: "2021-01-02",
      customerId: "ground",
      amount: "passed",
    },
    {
      date: "2021-01-02",
      customerId: "painting",
      amount: "warning",
    },
  ]),
  createData("Building 003", 68, 16.0, 24, 6.0, 3.79, [
    {
      date: "2021-01-01",
      customerId: "wall",
      amount: "passed",
    },
    {
      date: "2021-01-02",
      customerId: "ground",
      amount: "passed",
    },
    {
      date: "2021-01-02",
      customerId: "painting",
      amount: "warning",
    },
  ]),
  createData("Building 004", 37, 3.7, 67, 4.3, 2.5, [
    {
      date: "2021-01-01",
      customerId: "wall",
      amount: "passed",
    },
    {
      date: "2021-01-02",
      customerId: "ground",
      amount: "warning",
    },
    {
      date: "2021-01-02",
      customerId: "painting",
      amount: "warning",
    },
  ]),
  createData("Building 005", 34, 16.0, 49, 3.9, 1.5, [
    {
      date: "2021-01-01",
      customerId: "wall",
      amount: "warning",
    },
    {
      date: "2021-01-02",
      customerId: "ground",
      amount: "warning",
    },
    {
      date: "2021-01-02",
      customerId: "painting",
      amount: "warning",
    },
  ]),
];

export default function Quality() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Building</TableCell>
            <TableCell align="center">Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
Quality.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
