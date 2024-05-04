import {ButtonLogin, RegistrationFormPart} from "../styles.ts";
import {DefaultInput, DefaultLabel, DefaultText, DefaultTitle, Footnote, Highlighting} from "../../../common/styles.ts";
import {borders, colors} from "../../../common/stylesConstants.ts";

export default function RegistrationDetails() {

    return (
        <>
            <DefaultTitle marginBottom={40}>Company details</DefaultTitle>
            {/*ToDo вынести в отдельный компонент(?)*/}
            <RegistrationFormPart margin={'0 0 24px 0'}>
                <DefaultLabel marginBottom={8} htmlFor='fullName'>Full name*</DefaultLabel>
                <DefaultInput marginBottom={0} width={'100%'} id='fullName' type='text'
                              placeholder='Text'/>
            </RegistrationFormPart>
            <RegistrationFormPart margin={'0 0 24px 0'}>
                <DefaultLabel marginBottom={8} htmlFor='fullName'>Company name*</DefaultLabel>
                <DefaultInput marginBottom={0} width={'100%'} id='fullName' type='text'
                              placeholder='Text'/>
            </RegistrationFormPart>
            <RegistrationFormPart margin={'0 0 24px 0'}>
                <DefaultLabel marginBottom={8} htmlFor='fullName'>Amout of employees</DefaultLabel>
                <DefaultInput marginBottom={0} width={'100%'} id='fullName' type='text'
                              placeholder='Text'/>
            </RegistrationFormPart>
            <RegistrationFormPart margin={'0 0 32px 0'}>
                <DefaultLabel marginBottom={8} htmlFor='password'>Password*</DefaultLabel>
                <DefaultInput marginBottom={0} width={'100%'} id='fullName' type='password'
                              placeholder='Password'/>
                <Footnote>Password requerments</Footnote>
            </RegistrationFormPart>
            <ButtonLogin
                margin={'0 0 32px 0'}
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
                By continuing, you’re agreeing to our <Highlighting style={{cursor: 'pointer'}}>Customer Terms of
                Service, and Privacy Policy.</Highlighting>
            </DefaultText>
        </>
    )
}