import React, { useState } from "react";
import styled from "styled-components";
import A from "../atoms/index";
import M from "../molecules/index";
import O from "../organisms/index";
import colors from "../../constants/colors";
import { useIssueDispatch, useIssueState } from "../../stores/issue";

const StyledEditIsssueForm = styled.section`
  padding: 0.5rem 0.5rem;
  margin: 0 1rem;
  width: 60vw;
`;

const StyledFormTextAreaWrapper = styled.div`
  border-top: 1px solid ${colors["lightGrey"]};
  padding: 1rem 0;
  margin-top: -1px;
`;

const EditIssueForm = ({ issue }) => {
  if (issue === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <StyledEditIsssueForm>
      <O.EditIssueTitle
        id={issue.id}
        title={issue.title}
        status={issue.status}
      />
      <A.Button
        cursor={"default"}
        backgroundColor={issue.status === "open" ? "green" : "red"}
        width={"auto"}
      >
        <A.Icon name="alert" color={"white"}></A.Icon>
        <A.Text color={"white"} display={"inline"}>
          {issue.status}
        </A.Text>
      </A.Button>
      <A.Text>{issue.user.nickname}</A.Text>
      <A.Text>{issue.updatedAt}</A.Text>
      <A.Text>{issue.comments.length}</A.Text>
      <StyledFormTextAreaWrapper>
        <div>
          {issue.description || issue.comments[0]
            ? issue.comments[0].content
            : "no description"}
        </div>
        <M.FileInput />
      </StyledFormTextAreaWrapper>
    </StyledEditIsssueForm>
  );
};

export default EditIssueForm;
