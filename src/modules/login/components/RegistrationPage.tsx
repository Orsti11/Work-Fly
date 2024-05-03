import loginImgReg from "../../../common/images/login_img_1.png";
import {
    RegistrationImg,
    RegistrationLeftContent,
    RegistrationLeftSide,
    RegistrationRightSide,
    WrapperRegistration
} from "../styles.ts";
import {DefaultSubtitle, DefaultText, DefaultTitle, Highlighting} from "../../../common/styles.ts";
import {Outlet} from "react-router-dom";

export default function RegistrationPage() {

    return (
        <WrapperRegistration>
            <RegistrationLeftSide>
                <RegistrationLeftContent>
                    <DefaultTitle marginBottom={12} width={'380px'}>Connect your team with WorkFly</DefaultTitle>
                    <DefaultSubtitle marginBottom={53}>
                        <Highlighting>1</Highlighting>/3 - Registration
                    </DefaultSubtitle>
                    <DefaultText marginBottom={40}>
                        Already have an account? <Highlighting style={{cursor: 'pointer'}} >Sign in</Highlighting>
                    </DefaultText>
                </RegistrationLeftContent>
                <RegistrationImg src={loginImgReg}/>
            </RegistrationLeftSide>
            <RegistrationRightSide>
                <Outlet/>
            </RegistrationRightSide>
        </WrapperRegistration>
    )
}