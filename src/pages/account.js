import Head from "next/head";
import { Box, Container, Grid, Typography ,Card} from "@mui/material";
import { AccountProfile } from "../components/account/account-profile";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { DashboardLayout } from "../components/dashboard-layout";

const Account = () => (
  <>
    <Head>
      <title>Account</title>
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
          Human Monitor
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={5} md={6} xs={12}>
            <Card>
              <img
                style={{ width: "30rem", objectFit: "contain" }}
                src={
                  "https://developers.google.com/static/ml-kit/vision/face-detection/images/face_contours.svg"
                }
                alt={
                  "https://developers.google.com/static/ml-kit/vision/face-detection/images/face_contours.svg"
                }
              />
            </Card>
            {/* <AccountProfile /> */}
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
