import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const SOPManual = () => {
  const documents = [
    { title: "Quality Manuals", version: "V.1.0" },
    { title: "Standard Operating Procedures", version: "V.1.0" },
    { title: "Cold-room Operating Procedures", version: "V.1.0" },
    { title: "Transport Validation Protocol", version: "V.1.0" },
    { title: "Good Distribution and Storage Practices Manuals", version: "V.1.0" },
    { title: "BCP for PV and In General", version: "V.1.0" },
    { title: "Anti-corruption and Anti-bribery Training Manual", version: "V.1.0" },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        List of SOPs and Manuals
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Explore our detailed guides and protocols to ensure quality and compliance across operations.
      </Typography>
      
      <Grid container spacing={4}>
        {documents.map((doc, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {doc.title}
                </Typography>
                <Typography color="textSecondary">
                  Version: {doc.version}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="contained">
                  View
                </Button>
                <Button size="small" color="secondary" variant="outlined">
                  Download
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SOPManual;
