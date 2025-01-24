import { Box, Container, Grid } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid
          container
          sx={{
            backgroundColor: "#F9F9FF",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Grid item xs={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.988841507452!2d85.32366919999996!3d27.6711098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19daaaad1fb9%3A0xce05a6a8240aca9d!2sTangal%20Tole%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1709290723897!5m2!1sen!2snp"
              width="100%"
              height="450px"
              marginTop="12px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{display:"flex",alignItems:'center',height:"450px",justifyContent:'center'}}>
                cssdc
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
