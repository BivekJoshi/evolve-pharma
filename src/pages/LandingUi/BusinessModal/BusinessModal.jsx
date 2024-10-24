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
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Distribution & Logistics",
      img: two,
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Product  Registration and Development",
      img: three,
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
  ];

  const data2 = [
    {
      id: nanoid(),
      header: "Pharmaceuticals Products",
      img: four,
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Diagnostics & Devices",
      img: five,
      desc: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.  Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. ",
    },
    {
      id: nanoid(),
      header: "Hospital Supplies",
      img: six,
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
    <Box
      sx={{
        margin: {
          xs: "2rem auto",
          sm: "3rem auto",
          md: "4rem auto",
          lg: "2rem auto",
        },
        width: "90%",
      }}
    >
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
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: isSm ? "column" : "row",
              justifyContent: "center",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: isSm ? "100%" : "30%" }}>
              {renderItems(data1, true)}
            </Box>
            <Box
              sx={{
                width: isSm ? "100%" : "20%",
                display: "flex",
                justifyContent: "center",
                mb: isSm ? 2 : 0,
              }}
            >
              <img
                src={seven}
                alt="how it works"
                style={{
                  width: isSm ? "80%" : "100%",
                  maxWidth: "200px",
                }}
              />
            </Box>
            <Box sx={{ width: isSm ? "100%" : "30%" }}>
              {renderItems(data2, false)}
            </Box>
          </Box>
        </Stack>
      </Grid>
    </Box>
  );
};

export default BusinessModal;
