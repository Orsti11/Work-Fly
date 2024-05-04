import {Route, Routes} from "react-router-dom";
import LoginPage from "../modules/login/LoginPage.tsx";
import RegistrationPage from "../modules/login/components/RegistrationPage.tsx";
import ConfirmationCode from "../modules/login/components/СonfirmationСode.tsx";
import RegistrationOwner from "../modules/login/components/RegistrationOwner.tsx";
import RegistrationDetails from "../modules/login/components/RegistrationDetails.tsx";

export default function AppRoutes() {
    return (

        <Routes>
            <Route path='/login/' element={<LoginPage/>}>
                <Route path='reg/' element={<RegistrationPage />}>
                    <Route path='owner' element={<RegistrationOwner/>} />
                    <Route path='code' element={<ConfirmationCode />}/>
                    <Route path='details' element={<RegistrationDetails />} />
                </Route>
            </Route>
            <Route path='/user' element={<></>}>

            </Route>
        </Routes>
    )
}