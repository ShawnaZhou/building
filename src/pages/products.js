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

const Products = () => {
  const salary = [
    {
      id: 0,
      position: "manager",
      salary: "10k",
      performance: "5%",
    },
    {
      id: 1,
      position: "support",
      salary: "8k",
      performance: "3%",
    },
    {
      id: 2,
      position: "designer",
      salary: "8.5k",
      performance: "1%",
    },
    {
      id: 3,
      position: "worker",
      salary: "6k",
      performance: "0.5%",
    },
  ];
  const materials = [
    {
      id: 0,
      item: "Rebar HRB400E",
      price: "3500/t",
      storage: 145,
      used: 2,
    },
    {
      id: 1,
      item: "Snail HRB400",
      price: "4026/t",
      storage: 145,
      used: 2,
    },
    {
      id: 2,
      item: "Low alloy plate Q345B",
      price: "3774/t",
      storage: 125,
      used: 10,
    },
    {
      id: 3,
      item: "Concrete C10",
      price: "440/m^3",
      storage: 385,
      used: 42,
    },
    {
      id: 4,
      item: "Concrete C15",
      price: "450/m^3",
      storage: 445,
      used: 32,
    },
    {
      id: 5,
      item: "Concrete C40",
      price: "510/m^3",
      storage: 375,
      used: 23,
    },
  ];
  return (
    <>
      <Head>
        <title>Asset Management</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3, mt: 1 }}>
            <Card>
              <CardHeader title="Salary Manage" />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Positioin</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Performance</TableCell>
                    <TableCell>Setting</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {salary.map((customer) => (
                    <TableRow hover key={customer.id}>
                      <TableCell>{customer.position}</TableCell>
                      <TableCell>{customer.salary}</TableCell>
                      <TableCell>{customer.performance}</TableCell>
                      <TableCell>
                        <Button>Setting</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardHeader title="Building Materials Manage" />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Storage</TableCell>
                    <TableCell>Used Today</TableCell>
                    <TableCell>Handle</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {materials.map((customer) => (
                    <TableRow hover key={customer.id}>
                      <TableCell>{customer.item}</TableCell>
                      <TableCell>{customer.price}</TableCell>
                      <TableCell>{customer.storage}</TableCell>
                      <TableCell>{customer.used}</TableCell>
                      <TableCell><Button>Edit</Button></TableCell>
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

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
