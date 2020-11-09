import React, { useState } from "react";
import styled from "styled-components";
import A from "../atoms/index";

const StyledFormTextArea = styled.div`
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;
  border-bottom: 1px solid #e3e3e4;
  margin-bottom: 0.5rem;
  z-index: 0;
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  right: 0.8rem;
  bottom: 4rem;
`;

const StyledTextAreaWrapper = styled.div``;

const FormTextArea = ({
  label,
  htmlFor,
  name,
  placeholder,
  rows,
  bgColor,
  ...rest
}) => {
  const [charLength, setCharLength] = useState(0);

  const onChange = (e) => {
    setTimeout(() => setCharLength(e.target.value.length), 2000);
  };

  return (
    <StyledFormTextArea>
      <StyledButtonWrapper>
        <A.Button
          border
          borderBottom={"0"}
          padding={"0.5rem"}
          rounded={false}
          borderColor="#e3e3e4"
          zIndex={"1"}
        >
          Write
        </A.Button>
      </StyledButtonWrapper>
      <StyledTextWrapper>
        <A.Text cursor={"default"} hover={false} fontSize={"0.8rem"}>
          {charLength} characters
        </A.Text>
      </StyledTextWrapper>
      <StyledTextAreaWrapper>
        <A.TextArea
          name={name}
          placeholder={placeholder}
          rows={rows}
          bgColor={bgColor}
          {...rest}
          onChange={onChange}
        />
        <A.Input type={"file"} name={"file"} margin={"0"} />
      </StyledTextAreaWrapper>
    </StyledFormTextArea>
  );
};

export default FormTextArea;
