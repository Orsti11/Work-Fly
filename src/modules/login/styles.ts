import styled from '@emotion/styled'
import {colors, fontsSize, shadow} from "../../common/stylesConstants.ts";

export const LoginHeader = styled('div')`
    height: 81px;
    padding: 0 32px;
    
    margin-bottom: 73px;
`;

export const Logo = styled('img')`
    width: 72px;
    height: 42px;
    
    margin: auto 0;
`;

export const ButtonLogin = styled('button')<
    {backgroundColor: string, transitionColor: string, width?: string, padding: string}>`
    width: ${(props) => props.width || 'auto'};
    margin: auto 0;
    padding: ${(props) => props.padding};
    border-radius: 8px;
    font-size: ${fontsSize.fontMain};
    font-weight: 500;
    color: ${(props) => props.transitionColor};
    background-color: ${(props) => props.backgroundColor};
    
    border: 1px solid ${colors.main};
    transition: all 0.3s ease-in-out; 
    
    
    &:hover {
        background-color: ${(props) => props.transitionColor};
        color: ${(props) => props.backgroundColor};
        transition: all 0.3s ease-in-out;
    }
`;

export const LoginHeaderInside = styled('div')`
    height: inherit;
    display: flex;
    justify-content: space-between;
    margin: auto 0;
`;

export const WrapperLoginPage = styled('div')``;

export const WrapperLoginOutlet = styled('div')`
    display: flex;
    justify-content: center;
`;

export const WrapperRegistration = styled('div')`
    display: flex;
    gap: 116.5px;
`;

export const RegistrationLeftSide = styled('div')`
    display: flex;
    flex-direction: column;
`;

export const RegistrationLeftContent = styled('div')`
    padding-top: 22px;
    display: inline-block;
    margin: 0 auto;
`;

export const RegistrationImg = styled('img')``;

export const RegistrationRightSide = styled('div')`
    text-align: center;
`;

export const WrapperRegistrationForm = styled('div')`
    padding: 95px 84px 0;
    background-color: ${colors.white};
    width: 647px;
    height: 797px;
    border-radius: 28px;
    box-shadow: ${shadow.form1}, ${shadow.form2}, ${shadow.form3};
`;

export const RegistrationForm = styled('form')``;

export const RegistrationFormPart = styled('div')<{margin: string}>`
    text-align: left;
    margin: ${(props) => props.margin || 0};
`;