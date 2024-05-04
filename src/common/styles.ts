import {borders, colors} from "./stylesConstants.ts";
import styled from "@emotion/styled";

// styled components
export const DefaultTitle = styled('h1')<{marginBottom?: number, width?: string}>`
    font-size: 40px;
    font-weight: 600;
    line-height: 52px;
    color: ${colors.main};
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    width: ${(props) => props.width || 'auto'};
`;

export const DefaultSubtitle = styled('p')<{marginBottom?: number, width?: string}>`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: ${colors.grey};
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    width: ${(props) => props.width || 'auto'};
`;

export const DefaultText = styled('p')<{marginBottom?: number, width?: string}>`
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    color: ${colors.main};
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    width: ${(props) => props.width || 'auto'};
`;

export const DefaultLabel = styled('label')<{marginBottom: number}>`
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    color: ${colors.grey};
    margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

export const DefaultInput = styled('input')<{marginBottom: number, width?: string}>`
    padding: 16px 20px;
    border-radius: 12px;
    border: ${borders.input};
    width: ${(props) => props.width || 'auto'};
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    transition: all 0.3s ease-in-out;
    
    &:hover, &:focus {
        border: ${borders.inputActive};
        transition: all 0.3s ease-in-out;
    }
`;

export const Footnote = styled('p')<{marginBottom?: number, width?: string}>`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${colors.lightGrey};
    margin-bottom: ${(props) => props.marginBottom || 0}px;
    width: ${(props) => props.width || 'auto'};
`;

export const Highlighting = styled('span')`
    color: ${colors.main};
    font-weight: 800;
`;