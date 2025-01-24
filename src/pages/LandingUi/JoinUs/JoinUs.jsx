import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "../../../assets/FooterImage.png";

const JoinUs = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Be a part of our amazing community and explore the endless
            opportunities we offer.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You cannot enjoy wealth if you are not in good health
          </Typography>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Evolving Health Care
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => alert("Button Clicked")}
          >
            Join Us
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default JoinUs;
