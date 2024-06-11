import { HashRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../utility/ScrollToTop';
import LandingUILayout from '../Layout/LandingUILayout';
import LandingUIPage from '../pages/LandingUi/LandingUIPage';

const AppRoute = () => {
    return (
        <HashRouter hashType="slash">
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<LandingUILayout />} >
                        <Route exact path="/" element={<LandingUIPage />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </HashRouter>
    );
}

export default AppRoute;
