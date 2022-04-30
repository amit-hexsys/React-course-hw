import styled, { css } from "styled-components"

export const Button = styled.button`
    --primary: #ff9f00;
    --secondary: #49CDEA;
    --success: #31CD18;
    --error: #D31717;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 12px;
    padding: 16px 32px;
    margin-left: 24px;
    color: white;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    cursor: pointer;

    //colors;

    ${props => props.color === "secondary" && css`
        background-color: var(--secondary);
        border: 2px solid var(--secondary);
    `};

    ${props => props.color === "success" && css`
        background-color: var(--success);
        border: 2px solid var(--success);
    `};

    ${props => props.color === "error" && css`
        background-color: var(--error);
        border: 2px solid var(--error);
    `};

    //sizes;
    
    ${props => props.size === "medium" && css`
        padding: 14px 28px;
        font-size: 18px;
    `};

    ${props => props.size === "small" && css`
        padding: 12px 24px;
        font-size: 16px;
    `};


    //states

    &:hover {
        --primary: #f08e0e;
        --secondary: #1AB6D9;
        --success: #18AE00;
        --error: #B90000;
        
    }  

    &:active {
        --primary: #ffbb33;
        --secondary: #74DCF3;
        --success: #60D84C;
        --error: #E13E3E;
    } 

    ${props => props.state === "disabled" && css`
            opacity: 40%;
            cursor: not-allowed;
    `};

    //outline;

    ${props => props.variant === "outline" && css`
        color: var(--primary); 
        background-color: white;

        //colors

        ${props => props.color === "secondary" && css`
            color: var(--secondary);
            border: 2px solid var(--secondary);
        `};

        ${props => props.color === "success" && css`
            color: var(--success);
            border: 2px solid var(--success);
        `};

        ${props => props.color === "error" && css`
            color: var(--error);
            border: 2px solid var(--error);
        `};

        //states

        &:hover {
            --primary: #f08e0e;
            --secondary: #1AB6D9;
            --success: #18AE00;
            --error: #B90000;
            background-color: rgba(0,0,0, 0.02);
        }  

        &:active {
            --primary: #ffbb33;
            --secondary: #74DCF3;
            --success: #60D84C;
            --error: #E13E3E;
            background-color: rgba(0,0,0, 0.05);
        }     
    `};

    //text;

    ${props => props.variant === "text" && css`
        color: var(--primary); 
        background-color: white; 
        border: none;

        //colors

        ${props => props.color === "secondary" && css`
            color: var(--secondary);
        `};

        ${props => props.color === "success" && css`
            color: var(--success);
        `};

        ${props => props.color === "error" && css`
            color: var(--error);
        `};

        //states

        &:hover {
            --primary: #f08e0e;
            --secondary: #1AB6D9;
            --success: #18AE00;
            --error: #B90000;
            background-color: rgba(0,0,0, 0.02);
        }  

        &:active {
            --primary: #ffbb33;
            --secondary: #74DCF3;
            --success: #60D84C;
            --error: #E13E3E;
            background-color: rgba(0,0,0, 0.05);
        }
    `};
`;

export default Button;