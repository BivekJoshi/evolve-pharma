import "./LandFooter.scss";
import FooterLogo from "../../assets/FooterLogo.png";
import CompanyLogo from "../../assets/Company logo.png";
import Icon1 from "../../assets/Twitter.png";
import Icon2 from "../../assets/Group 73.png";
import Icon3 from "../../assets/YouTube.png";
import ScrollToTop from "../../assets/Scroll to top.png";

const LandFooter = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="footer-container">
            <div className={`footer-background desktop`}>
                <div className="content">
                    <div className="content-inner">
                        <div>
                            <div className="content-inner-logo">
                                <img src={CompanyLogo} alt="Company Logo" />
                            </div>
                            <p className="description">
                                We are a collaboration of non-government <br />
                                organisation and professionals working to <br />
                                ensure that government spending.
                            </p>
                            <div className="social-icons">
                                <div className="icon">
                                    <img src={Icon1} alt="Twitter" />
                                </div>
                                <div className="icon">
                                    <img src={Icon2} alt="Icon2" />
                                </div>
                                <div className="icon">
                                    <img src={Icon3} alt="YouTube" />
                                </div>
                            </div>
                        </div>
                        <div className="links-container">
                            <div className="links-column">
                                <p className="title">Links</p>
                                <p className="link">Campaigns</p>
                                <p className="link">News</p>
                                <p className="link">Resources</p>
                                <p className="link">About Us</p>
                            </div>
                            <div className="links-column">
                                <p className="title">Resources</p>
                                <p className="link">Transparency Toolkit</p>
                                <p className="link">Best Practices</p>
                                <p className="link">Best Practices</p>
                            </div>
                            <div className="links-column">
                                <p className="title">Work with Us</p>
                                <p className="link">Contact Us</p>
                                <p className="link">Join Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p className="terms">Terms and Conditions</p>
                    <div className="footer-logo">
                        <img src={FooterLogo} alt="Footer Logo" />
                    </div>

                </div>
                <span className="footer-scroll-to-top" onClick={handleScrollToTop}>
                    <img src={ScrollToTop} alt="Footer Logo" />
                </span>
            </div>
        </div>
    );
}

export default LandFooter;
