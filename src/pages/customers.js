import { useState } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Customers = () => {
  const [customerList, setCustomerList] = useState(customers);
  const [position, setPosition] = useState("all");
  const handlePositionChange = (e) => {
    console.log(e);
    setPosition(e.target.value);
    filtList(e.target.value);
  };
  const filtList = (e) => {
    if (e == "all") {
      setCustomerList(customers);
      return;
    }
    let result = customers.filter((item) => {
      if (item.position == e) return true;
      else return false;
    });
    setCustomerList(result);
  };
  return (
    <>
      <Head>
        <title>Staff</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar position={position} handleChange={handlePositionChange} />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults customers={customerList} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Customers;
