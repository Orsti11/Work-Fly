import {ButtonLogin, WrapperRegistrationForm, RegistrationForm, RegistrationFormPart} from "../styles.ts";
import {DefaultInput, DefaultLabel, DefaultText, DefaultTitle, Footnote} from "../../../common/styles.ts";
import {colors} from "../../../common/stylesConstants.ts";
import {useNavigate} from "react-router-dom";

export default function RegistrationFormComponent() {
    const navigate = useNavigate();
    const handleClick = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/login/reg/code')
    }

    return (
        <WrapperRegistrationForm>
            <DefaultTitle marginBottom={10}>Welcome</DefaultTitle>
            <DefaultText marginBottom={78}>lets get started with a few simple steps!</DefaultText>
            <RegistrationForm>
                <RegistrationFormPart margin={'0 0 20px 0'}>
                    <DefaultLabel marginBottom={8} htmlFor='email'>E-mail*</DefaultLabel>
                    <DefaultInput marginBottom={8} width={'100%'} id='email' placeholder='Enter e-mail...'/>
                    <Footnote>Please, enter your work e-mail</Footnote>
                </RegistrationFormPart>
                <RegistrationFormPart margin={'0 0 32px 0'}>
                    <DefaultLabel marginBottom={8} htmlFor='password'>Phone number*</DefaultLabel>
                    <DefaultInput marginBottom={0} width={'100%'} id='password' type='tel' placeholder='+1 (000) 000-0000'/>
                </RegistrationFormPart>
                <ButtonLogin onClick={(e) => handleClick(e)}
                    backgroundColor={colors.main}
                    transitionColor={colors.white}
                    width={'100%'}
                    padding={"16px 0"}
                >
                    Get started
                </ButtonLogin>
            </RegistrationForm>
        </WrapperRegistrationForm>
    )
}