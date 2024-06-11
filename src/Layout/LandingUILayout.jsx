import { Outlet } from 'react-router-dom';
import LandFooter from '../components/footer/LandFooter';
import LandNavbar from '../components/navbar/LandNavbar';

const LandingUILayout = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div style={{ flex: "0 0 auto", position: "fixed", width: "100%", zIndex: 100 }}>
                <LandNavbar />
            </div>
            <div style={{
                flex: "1 0 auto",
                marginTop: "60px"
            }}>
                <Outlet />
            </div>
            <div style={{ flex: "0 0 auto" }}>
                <LandFooter style={{ position: "sticky", bottom: "0", zIndex: "100" }} />
            </div>
        </div>
    );
}

export default LandingUILayout;
