import { Outlet } from 'react-router-dom';
import LandFooter from '../components/footer/LandFooter';
import LandNavbar from '../components/navbar/LandNavbar';
import { SpeedDial, SpeedDialAction, styled } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(2),
    zIndex: 1100,
    '& .MuiSpeedDial-fab': {
        backgroundColor: "green", 
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,  // Customize the hover color
        },
    },
}));

const LandingUILayout = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div style={{ flex: "0 0 auto", position: "fixed", width: "100%", zIndex: 100 }}>
                <LandNavbar />
            </div>
            <div style={{
                flex: "1 0 auto",
                marginTop: "50px"
            }}>
                <Outlet />
            </div>
            <div style={{ flex: "0 0 auto" }}>
                <LandFooter style={{ position: "sticky", bottom: "0", zIndex: "100" }} />
            </div>
            <StyledSpeedDial
                ariaLabel="SpeedDial basic example"
                icon={<WhatsAppIcon />}
                sx={{
                    textTransform: "none",
                    animation: "hoverAnimation 0.5s infinite",
                    "@keyframes hoverAnimation": {
                      "0%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.05)" },
                      "100%": { transform: "scale(1)" },
                    },
                    "&:hover": {
                      animation: "none",
                    },
                  }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </StyledSpeedDial>
        </div>
    );
}

export default LandingUILayout;
