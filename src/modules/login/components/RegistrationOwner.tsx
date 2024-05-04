import {ButtonLogin, RegistrationFormPart} from "../styles.ts";
import {DefaultInput, DefaultLabel, DefaultText, DefaultTitle, Footnote, Highlighting} from "../../../common/styles.ts";
import {borders, colors} from "../../../common/stylesConstants.ts";
import {useNavigate} from "react-router-dom";

export default function RegistrationOwner() {
    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/login/reg/code')
    }

    return (
        <>
            <DefaultTitle marginBottom={10}>Welcome</DefaultTitle>
            <DefaultText marginBottom={78}>lets get started with a few simple steps!</DefaultText>
            <RegistrationFormPart margin={'0 0 20px 0'}>
                <DefaultLabel marginBottom={8} htmlFor='email'>E-mail*</DefaultLabel>
                <DefaultInput marginBottom={8} width={'100%'} id='email' placeholder='Enter e-mail...'/>
                <Footnote>Please, enter your work e-mail</Footnote>
            </RegistrationFormPart>
            <RegistrationFormPart margin={'0 0 32px 0'}>
                <DefaultLabel marginBottom={8} htmlFor='tel'>Phone number*</DefaultLabel>
                <DefaultInput marginBottom={0} width={'100%'} id='tel' type='tel'
                              placeholder='+1 (000) 000-0000'/>
            </RegistrationFormPart>
            <ButtonLogin onClick={(e) => handleClick(e)}
                         margin={'0 0 134px 0'}
                         backgroundColor={colors.main}
                         transitionColor={colors.white}
                         width={'100%'}
                         padding={"16px 0"}
                         border={borders.button}
                         color={colors.white}
            >
                Get started
            </ButtonLogin>
            <DefaultText>
                You have a code? <Highlighting style={{cursor: 'pointer'}} >Join your team</Highlighting>
            </DefaultText>
        </>
    )
}