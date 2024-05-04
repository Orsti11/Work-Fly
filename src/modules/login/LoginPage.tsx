import {Logo, LoginHeader, LoginHeaderInside, WrapperLoginPage, ButtonLogin, WrapperLoginOutlet} from "./styles.ts";
import svg from '../../common/images/svg/logo.svg';
import {Outlet} from "react-router-dom";
import {borders, colors} from "../../common/stylesConstants.ts";

export default function LoginPage() {
    return (
        <WrapperLoginPage>
            <LoginHeader>
                <LoginHeaderInside>
                    <Logo src={svg}/>
                    <ButtonLogin backgroundColor={colors.white} transitionColor={colors.main} padding={"8px 46.5px"}
                                 border={borders.button} color={colors.main}>
                        Sign In
                    </ButtonLogin>
                </LoginHeaderInside>
            </LoginHeader>

            <WrapperLoginOutlet>
                <Outlet/>
            </WrapperLoginOutlet>
        </WrapperLoginPage>
    )
}