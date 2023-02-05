import { useState } from "react";
import styled from "styled-components";

export default function Input({
  width,
  height,
  type,
  maxLength,
  disabled,
  placeholder,
  value,
  name,
  onChange,
}: any) {
  return (
    <Container>
      <Content
        width={width}
        height={height}
        disabled={disabled}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </Container>
  );
}
const Container = styled.div`
  .icon {
    font-size: 25px;
    position: fixed;
    margin-left: 290px;
    margin-top: -55px;
    cursor: pointer;
  }
`;
const Content = styled.input`
  width: ${(props) => props.width || "326px"};
  height: ${(props) => props.height || "45px"};
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #000;
  background: #ffffff;
  border-radius: 5px;
  text-align: start;
`;
