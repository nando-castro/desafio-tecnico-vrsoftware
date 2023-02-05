import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import { Item } from "../item/Item";
import { FormStudent } from "./FormStudent";
import { UIStudent } from "./UIStudent";

export const Student = () => {
  const [students, setStudents] = useState([]);
  const [update, setUpdate] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openUI, setOpenUI] = useState(false);
  const [data, setData] = useState({
    id: 0,
    name: "",
  });

  useEffect(() => {
    async function getStudents() {
      await api
        .get("/students")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStudents();
  }, [update]);

  const handleDelete = (id: number) => {
    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar o registro do aluno?"
    );

    if (response === true) {
      api
        .delete(`/student/${id}`)
        .then((res) => {
          setUpdate(!update);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const sendDataUpdate = (id: number, name: string) => {
    setData({ id, name });
    setOpenForm(true);
  };

  const sendDataUIStudent = (id: number, name: string) => {
    setData({ id, name });
    setOpenUI(true);
  };

  const renderStudents = () => {
    return students.map((i: any) => (
      <Content key={i.id}>
        <Item
          id={i.id}
          name={i.name}
          action={() => sendDataUIStudent(i.id, i.name)}
          actionDelete={() => handleDelete(i.id)}
          actionUpdate={() => sendDataUpdate(i.id, i.name)}
        />
      </Content>
    ));
  };

  return (
    <Container>
      {openUI ? (
        <UIStudent
          openUI={openUI}
          setOpenUI={setOpenUI}
          data={data}
          setData={setData}
          setOpenForm={setOpenForm}
        />
      ) : openForm ? (
        <FormStudent
          setOpenForm={setOpenForm}
          update={update}
          setUpdate={setUpdate}
          data={data}
          setData={setData}
        />
      ) : (
        <>
          {students.length > 0 ? (
            renderStudents()
          ) : (
            <Message>Não há alunos cadastrados!</Message>
          )}
          <Footer>
            <Button
              destiny={""}
              text={"Adicionar Aluno"}
              type={"submit"}
              action={() => setOpenForm(true)}
              background={"#00B187"}
            />
          </Footer>
        </>
      )}
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100%;
  color: #000000;
`;

const Content = styled.main`
  width: 100%;
  height: 50px;
`;

const Footer = styled.div`
  width: 90%;
  height: 60px;

  position: fixed;
  bottom: 42px;

  border-radius: 0 0 20px 20px;
`;

const Message = styled.div`
  width: 100%;
  height: 100%;
`;
