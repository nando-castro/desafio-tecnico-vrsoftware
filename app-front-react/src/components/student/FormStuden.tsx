import { useState } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import Input from "../input/Input";

export const FormStudent = ({
  openForm,
  setOpenForm,
}: {
  openForm: any;
  setOpenForm: any;
}) => {
  const [name, setName] = useState("");

  return (
    <Container>
      <Input
        maxLength={20}
        type={"text"}
        placeholder={"Nome"}
        value={name}
        name={"name"}
        onChange={(e: any) => setName(e.target.value)}
      />
      <Button
        destiny={""}
        text={"Cadastrar Aluno"}
        type={"submit"}
        action={() => setOpenForm(false)}
        background={"#00B187"}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
