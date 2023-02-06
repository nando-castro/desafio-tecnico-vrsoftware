import { useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import Input from "../input/Input";

export const FormStudent = ({
  setOpenForm,
  update,
  setUpdate,
  data,
  setData
}: {
  setOpenForm: any;
  update: boolean;
  setUpdate: any;
  data: any;
  setData: any;
}) => {
  const [name, setName] = useState("" || data.name);

  const handleCreateStudent = (e: any) => {
    e.preventDefault();

    api
      .post(`/student`, { name })
      .then((res) => {
        setUpdate(!update);
        setOpenForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateStudent = (id: number) => {
    api
      .put(`/student/${data.id}`, {name})
      .then((res) => {
        setUpdate(!update);
        setOpenForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setData({ id: 0, name: '' });
    setOpenForm(false);
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
        text={data.id === 0 ? "Cadastrar Aluno": "Atualizar Aluno"}
        type={"submit"}
        action={data.id === 0 ? handleCreateStudent : handleUpdateStudent}
        background={"#00B187"}
      />
      <Cancel onClick={handleCancel}>Cancelar</Cancel>
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
`;
