import styled from "styled-components";

const StyledButton = styled.button`
    padding: 16px 32px;
    font-family: Assistant;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    border-radius: 12px;
    background-color: #ff9f00;
    border: 0px;
    margin-top: 16px;
`;

const StyledTitle= styled.h4`
    font-family: Arial;
    font-size: 16px;
    line-height: 1.69;
    font-weight: normal;
    color: #1c1c1c;
`;

const StyledHeadLine = styled.h2`
    font-family: Arial;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.48px;
    color: #1c1c1c;

`;

const StyledContent = styled.div`
    font-family: Arial;
    font-size: 18px;
    line-height: 1.5;
    font-weight: normal;
    color: #1c1c1c;
`;

const StyledImage = styled.img`
    width: 100%;
`;


export const StyledLink = styled.a`
    color: #ff7748;
`

const Article = ({
    className, 
    title, 
    headline, 
    buttonText,
    image,
    children}) => {
    return (
        <article className={className}>
            {image &&<StyledImage src={image} /> }
            <StyledTitle>{title}</StyledTitle>
            <StyledHeadLine>{headline}</StyledHeadLine>
            <StyledContent>{children}</StyledContent>
            {buttonText && <StyledButton>{buttonText}</StyledButton>}
        </article>
    )
}

export const StyledArticle = styled(Article)`
    margin-top: 40px;
    margin-bottom: 40px;
`

export const StyledList = styled.ul`
    padding: 18px;
`
