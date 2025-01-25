import { Container, Typography, Grid } from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import React from "react";
import { Fade } from "react-awesome-reveal";

const BusinessProcess = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid item xs={12} md={4}>
          <Fade duration={2000}>
            <LocalPharmacyIcon fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Quality Products
            </Typography>
            <Typography color="textSecondary">
              We offer a wide range of high-quality, certified pharmaceutical
              products.
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4}>
          <Fade duration={2000}>
            <LocalShippingIcon fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Fast Delivery
            </Typography>
            <Typography color="textSecondary">
              Efficient and reliable shipping to ensure timely deliveries.
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4}>
          <Fade duration={2000}>
            <VerifiedIcon fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Trusted Service
            </Typography>
            <Typography color="textSecondary">
              We are a trusted partner for pharmacies nationwide.
            </Typography>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BusinessProcess;
