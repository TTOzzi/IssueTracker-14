import React from "react";
import Icon from "./../../components/atoms/Icon"
import colors from "./../../constants/colors";
import styled from "styled-components";

const StyledHeader = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    width: 100%;
    height: 6rem;
    color: ${colors["white"]};
    background-color: ${colors["black"]};
    font-size: 185%;
`

const Header = () => (
    <StyledHeader> <Icon name={"book"} cursor={"text"} /> 헤더입니다. </StyledHeader>
)

export default Header;