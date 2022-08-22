import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Button,
  TableRow,
} from "@mui/material";
import { products } from "../__mocks__/products";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { ProductCard } from "../components/product/product-card";
import { DashboardLayout } from "../components/dashboard-layout";

const Devices = () => {
  const salary = [
    {
      id: 0,
      item: "computer",
      price: "10k",
      amount: "5",
      status: "active",
    },
    {
      id: 2,
      item: "phone",
      price: "5k",
      amount: "5",
      status: "active",
    },
    {
      id: 3,
      item: "chair",
      price: "1k",
      amount: "15",
      status: "active",
    },
    {
      id: 4,
      item: "Table",
      price: "5k",
      amount: "5",
      status: "active",
    },
    {
      id: 5,
      item: "monitor",
      price: "5k",
      amount: "2",
      status: "active",
    },
    {
      id: 6,
      item: "printer",
      price: "3k",
      amount: "1",
      status: "active",
    },
  ];
  const materials = [
    {
      id: 0,
      item: "Tower Crane",
      price: "280000",
      storage: 2,
      used: "pending",
    },
    {
      id: 1,
      item: "Forklift",
      price: "49000",
      storage: 15,
      used: "working",
    },
    {
      id: 2,
      item: "Excavator",
      price: "100000",
      storage: 5,
      used: "working",
    },
    {
      id: 3,
      item: "Drilling Rig",
      price: "30000",
      storage: 5,
      used: "working",
    },
  ];
  return (
    <>
      <Head>
        <title>Devices Management</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth={false}>
          <h1 style={{ padding: "2rem 0" }}>Devices Management</h1>
          <Box sx={{ pt: 3 }}>
            <Card>
              <CardHeader title="Office Equipment Manage" />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Setting</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {salary.map((customer) => (
                    <TableRow hover key={customer.id}>
                      <TableCell>{customer.item}</TableCell>
                      <TableCell>{customer.price}</TableCell>
                      <TableCell>{customer.amount}</TableCell>
                      <TableCell>
                        <div
                          style={{
                            backgroundColor: "rgb(25,155,0)",
                            color: "white",
                            width: "4rem",
                            borderRadius: "15px",
                            textAlign: "center",
                          }}
                        >
                          {customer.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardHeader title="Construction Equipment Manage" />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Setting</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {materials.map((customer) => (
                    <TableRow hover key={customer.id}>
                      <TableCell>{customer.item}</TableCell>
                      <TableCell>{customer.price}</TableCell>
                      <TableCell>{customer.storage}</TableCell>
                      <TableCell>
                        <div
                          style={{
                            backgroundColor:
                              customer.used == "working" ? "rgb(25,155,0)" : "blue",
                            color: "white",
                            width: "5rem",
                            borderRadius: "15px",
                            textAlign: "center",
                          }}
                        >
                          {customer.used}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Devices.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Devices;
