// import React from 'react'

// const WhyUs = () => {
//   return (
//     <div>WhyUs</div>
//   )
// }

// export default WhyUs


import React from 'react';
import { Container, Box, Typography, Grid, Button, Divider } from '@mui/material';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import { styled } from '@mui/system';

// Animation styling
const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: `fadeInUp 1s ease-out`,
  '@keyframes fadeInUp': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const WhyUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 1, pt: 6, pb: 6 }}>
      {/* Hero Section */}
      <AnimatedBox textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight="bold" color="primary">
          Welcome to PharmaWholesale
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Your Trusted Partner in Pharmacy Wholesale and Distribution
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
          Shop Now
        </Button>
      </AnimatedBox>

      {/* Service Highlights */}
      <Grid container spacing={4} sx={{ mb: 5 }}>
        <Grid item xs={12} md={4}>
          <AnimatedBox sx={{ textAlign: 'center' }}>
            <LocalPharmacyIcon fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Quality Products
            </Typography>
            <Typography color="textSecondary">
              We offer a wide range of high-quality, certified pharmaceutical products.
            </Typography>
          </AnimatedBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedBox sx={{ textAlign: 'center' }}>
            <LocalShippingIcon fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Fast Delivery
            </Typography>
            <Typography color="textSecondary">
              Efficient and reliable shipping to ensure timely deliveries.
            </Typography>
          </AnimatedBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedBox sx={{ textAlign: 'center' }}>
            <VerifiedIcon fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Trusted Service
            </Typography>
            <Typography color="textSecondary">
              We are a trusted partner for pharmacies nationwide.
            </Typography>
          </AnimatedBox>
        </Grid>
      </Grid>

      {/* About Section */}
      <Divider sx={{ my: 5 }} />
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          PharmaWholesale is committed to providing the highest quality products and exceptional service to our clients. 
          With a wide selection of pharmaceuticals, medical supplies, and customer-focused support, 
          we ensure that your pharmacy has everything needed to succeed.
        </Typography>
      </Box>

      {/* Products Section */}
      <Divider sx={{ my: 5 }} />
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          Featured Products
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Browse our top-selling products specially curated for you.
        </Typography>
        <Grid container spacing={4} mt={3}>
          {[1, 2, 3, 4].map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
                  textAlign: 'center',
                }}
              >
                <img
                  src={`https://via.placeholder.com/150?text=Product+${product}`}
                  alt={`Product ${product}`}
                  style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
                />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Product {product}
                </Typography>
                <Button variant="contained" color="secondary" size="small" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
