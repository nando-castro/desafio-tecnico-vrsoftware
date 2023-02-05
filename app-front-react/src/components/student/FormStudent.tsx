import { useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import Input from "../input/Input";

export const FormStudent = ({
  setOpenForm,
  update,
  setUpdate,
}: {
  setOpenForm: any;
  update: boolean;
  setUpdate: any;
}) => {
  const [name, setName] = useState("");

  const handleCreateStudent = (e: any) => {
    e.preventDefault();

    api
      .post(`/student`, { name })
      .then((res) => {
        console.log(res.data);
        setUpdate(!update);
        setOpenForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        action={handleCreateStudent}
        background={"#00B187"}
      />
      <Cancel onClick={() => setOpenForm(false)}>Cancelar</Cancel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Cancel = styled.div`
    width: 30%;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
`