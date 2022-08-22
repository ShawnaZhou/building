import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Button,
  LinearProgress,
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { SettingsNotifications } from "../components/settings/settings-notifications";
import { SettingsPassword } from "../components/settings/settings-password";

const Settings = () => {
  const settings = [
    {
      id: 0,
      building: "001",
      daily: 2,
      progress: 85,
    },
    {
      id: 1,
      building: "002",
      daily: 3,
      progress: 90,
    },
    {
      id: 2,
      building: "003",
      daily: 2,
      progress: 68,
    },
    {
      id: 3,
      building: "004",
      daily: 2,
      progress: 37,
    },
    {
      id: 4,
      building: "005",
      daily: 2,
      progress: 34,
    },
  ];
  return (
    <>
      <Head>
        <title>Progress</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Progress
          </Typography>
          <SettingsNotifications />
          <Box sx={{ pt: 3 }}>
            {/* <SettingsPassword /> */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Building</TableCell>
                  <TableCell>Progress</TableCell>
                  <TableCell>Daily Progress</TableCell>
                  <TableCell>Setting</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {settings.map((order) => (
                  <TableRow hover key={order.id}>
                    <TableCell>Building {order.building}</TableCell>
                    <TableCell>
                      {" "}
                      <LinearProgress variant="determinate" value={order.progress} />
                    </TableCell>
                    <TableCell>
                      <LinearProgress variant="determinate" value={order.progress + order.daily} />
                    </TableCell>
                    <TableCell>
                      <Button>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Settings;
