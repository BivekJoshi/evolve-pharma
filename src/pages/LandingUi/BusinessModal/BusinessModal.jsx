import React from "react";

import one from "../../../assets/Business/oneLeave.png";
import two from "../../../assets/Business/twoLeave.png";
import three from "../../../assets/Business/threeLeave.png";
import four from "../../../assets/Business/fourLeave.png";
import five from "../../../assets/Business/fiveLeave.png";
import six from "../../../assets/Business/sixLeave.png";
import seven from "../../../assets/Business/seven.jpeg";
import { Fade } from "react-awesome-reveal";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { nanoid } from "nanoid";

const BusinessModal = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  const data1 = [
    {
      id: nanoid(),
      header: "Sales & Marketing",
      img: one,
      color: "#0484C5",
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Distribution & Logistics",
      img: two,
      color: "#01A16F",
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Product  Registration and Development",
      img: three,
      color: "#F3852D",
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
  ];

  const data2 = [
    {
      id: nanoid(),
      header: "Pharmaceuticals Products",
      img: four,
      color: "#C3D431",
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Diagnostics & Devices",
      img: five,
      color: "#04B1E8",
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Hospital Supplies",
      img: six,
      color: "#BD4A89",
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
  ];

  const renderItems = (data, isImageFirst) => {
    return data?.map((item) => (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          flexDirection: isImageFirst ? "row" : "row-reverse",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          marginBottom: "1rem",
          flexWrap: "wrap",
          textAlign: isImageFirst ? "end" : "start",
        }}
      >
        {isImageFirst ? (
          <Box style={{ display: "flex", gap: "1rem" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: isXs ? "16px" : "20px",
                  fontWeight: 600,
                  mb: 0.5,
                  color: item.color || "",
                }}
              >
                {item.header}
              </Typography>
              <Typography
                sx={{
                  fontSize: isXs ? "12px" : "14px",
                  color: "#606060",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
            <Fade direction={isImageFirst ? "right" : "left"} duration={2000}>
              <img
                src={item.img}
                alt="image"
                style={{
                  width: isSm ? "50px" : "auto",
                  height: isSm ? "50px" : "auto",
                }}
              />
            </Fade>
          </Box>
        ) : (
          <Box style={{ display: "flex", gap: "1rem" }}>
            <Fade direction={isImageFirst ? "right" : "left"} duration={2000}>
              <img
                src={item.img}
                alt="image"
                style={{
                  width: isSm ? "50px" : "auto",
                  height: isSm ? "50px" : "auto",
                }}
              />
            </Fade>
            <Box>
              <Typography
                sx={{
                  fontSize: isXs ? "16px" : "20px",
                  fontWeight: 600,
                  mb: 0.5,
                  color: item.color || "",
                }}
              >
                {item.header}
              </Typography>
              <Typography
                sx={{
                  fontSize: isXs ? "12px" : "14px",
                  color: "#606060",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    ));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            mb: 3,
          }}
        >
          <Box
            sx={{
              color: "#03517A",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "1.5rem",
                  md: "26px",
                  lg: "36px",
                },
                fontWeight: 600,
              }}
            >
              Our Business Models and Verticals
            </Typography>
          </Box>
        </Grid>

        <Stack
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: isSm ? "column" : "row",
              justifyContent: "space-between",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: isSm ? "100%" : "50%" }}>
              {renderItems(data1, true)}
            </Box>
            <Box sx={{ width: isSm ? "100%" : "50%" }}>
              {renderItems(data2, false)}
            </Box>
          </Box>
        </Stack>
      </Grid>
    </Container>
  );
};

export default BusinessModal;
