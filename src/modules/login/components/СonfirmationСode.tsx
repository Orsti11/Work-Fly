import {ButtonLogin, DigitConfirmationCode, WrapperConfirmationCode} from "../styles.ts";
import {DefaultText, DefaultTitle, Highlighting} from "../../../common/styles.ts";
import {borders, colors} from "../../../common/stylesConstants.ts";
import {useFocus} from "../../../hooks/use-focus.ts";

export default function ConfirmationCode() {
    const [firstDigit, focusFirstDigit] = useFocus();
    const [secondDigit, focusSecondDigit] = useFocus();
    const [thirdDigit, focusThirdDigit] = useFocus();
    const [fourthDigit, focusFourthDigit] = useFocus();

    return (
        <>
            <DefaultTitle marginBottom={10}>Verification code</DefaultTitle>
            <DefaultText marginBottom={90}>Please, enter the code we sent to the e-mail company@company.com</DefaultText>
            <WrapperConfirmationCode>
                <DigitConfirmationCode ref={firstDigit} onChange={focusSecondDigit} maxLength={1}/>
                <DigitConfirmationCode ref={secondDigit} onChange={focusThirdDigit} maxLength={1}/>
                <DigitConfirmationCode ref={thirdDigit} onChange={focusFourthDigit} maxLength={1}/>
                <DigitConfirmationCode ref={fourthDigit} onChange={focusFirstDigit} maxLength={1}/>
            </WrapperConfirmationCode>
            <ButtonLogin
                margin={'0 0 86px 0'}
                style={{cursor: "default"}}
                backgroundColor={colors.disabled}
                transitionColor={colors.disabled}
                width={'100%'}
                padding={"16px 0"}
                border={borders.disabled}
                color={colors.white}
                disabled
            >
                Continue
            </ButtonLogin>
            <DefaultText>
                Didn't receive an email? <Highlighting style={{cursor: 'pointer'}} >Resend</Highlighting>
            </DefaultText>
        </>
    )
}