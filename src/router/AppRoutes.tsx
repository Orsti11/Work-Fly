import {Route, Routes} from "react-router-dom";
import LoginPage from "../modules/login/LoginPage.tsx";
import RegistrationPage from "../modules/login/components/RegistrationPage.tsx";
import RegistrationFormComponent from "../modules/login/components/RegistrationFormComponent.tsx";

export default function AppRoutes() {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     navigate('/login');
    // }, []);
    return (

        <Routes>
            <Route path='/login/' element={<LoginPage/>}>
                <Route path='reg/' element={<RegistrationPage />}>
                    <Route path='owner' element={<RegistrationFormComponent/>} />
                    <Route path='code' element={<div>Code</div>}/>
                </Route>
            </Route>
            <Route path='/user' element={<></>}>

            </Route>
        </Routes>
    )
}