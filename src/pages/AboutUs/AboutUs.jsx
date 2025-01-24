import "./AboutUs.scss";
import We1 from "../../assets/we1.jpg";
import GopalKhanal from "../../assets/GopalKhanal.png";
import We3 from "../../assets/We3.png";
import We4 from "../../assets/We4.png";
import { Box, Container } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "white", py:6  }}>
      <Container maxWidth="lg" sx={{ py: 1 }}>
        <div className="about-us-container">
          <div className="about-us-main">
            <div className="left-panel">
              <h2 className="title" style={{color:"#03517A"}}>Who we are</h2>
              <p className="subtitle">
                Evolve pharma is created with the aim
                <br /> to evolve the Nepalese pharma market
                <br /> in terms of service delivery to all stakeholders <br />
                in all aspects of business module. <br />
                <br />
                We are a team <br />
                of trade professionals with a proven track record
                <br /> in this sector that has the ability to successfully{" "}
                <br />
                transform the plan into reality.
                <br />
                <br /> Our team
                <br /> is composed of members who have worked together
                <br /> on numerous successful supplychain <br />
                businesses in the medicine, vaccines and lab
                <br /> diagnostics
                <br />
                <br /> Our team has been working <br />
                with enormous trust and <br />
                confidence with the valuable Relationship
                <br /> with government agencies/hospitals
                <br /> and retails channel across the <br />
                country
              </p>
              <div className="learn-more">
                Learn more
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.929 6.33747C11.8814 6.21472 11.8101 6.10257 11.719 6.00747L6.71903 1.00747C6.62579 0.914232 6.5151 0.840271 6.39328 0.789811C6.27146 0.739351 6.14089 0.713379 6.00903 0.713379C5.74273 0.713379 5.48734 0.819167 5.29903 1.00747C5.20579 1.10071 5.13183 1.2114 5.08137 1.33322C5.03091 1.45504 5.00494 1.58561 5.00494 1.71747C5.00494 1.98377 5.11073 2.23917 5.29903 2.42747L8.59903 5.71747H1.00903C0.743817 5.71747 0.489463 5.82283 0.301927 6.01036C0.11439 6.1979 0.0090332 6.45225 0.0090332 6.71747C0.0090332 6.98269 0.11439 7.23704 0.301927 7.42458C0.489463 7.61211 0.743817 7.71747 1.00903 7.71747H8.59903L5.29903 11.0075C5.2053 11.1004 5.13091 11.211 5.08014 11.3329C5.02937 11.4548 5.00323 11.5855 5.00323 11.7175C5.00323 11.8495 5.02937 11.9802 5.08014 12.102C5.13091 12.2239 5.2053 12.3345 5.29903 12.4275C5.392 12.5212 5.5026 12.5956 5.62446 12.6464C5.74632 12.6971 5.87702 12.7233 6.00903 12.7233C6.14105 12.7233 6.27175 12.6971 6.39361 12.6464C6.51547 12.5956 6.62607 12.5212 6.71903 12.4275L11.719 7.42747C11.8101 7.33237 11.8814 7.22022 11.929 7.09747C12.0291 6.85401 12.0291 6.58093 11.929 6.33747Z"
                    fill="#1D6FA3"
                  />
                </svg>
              </div>
            </div>
            <div className="right-panel">
              <div className="image-container">
                <div className="image-row1">
                  <div className="image-card">
                    <img src={GopalKhanal} alt="Description" />
                  </div>
                  <h3>Mr. Gopal Khanal</h3>
                </div>
                <div className="image-row2">
                  <div className="image-card">
                    <img src={We1} alt="Description" />
                  </div>
                  <h3>Mr. Madhu Paudel</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default AboutUs;
