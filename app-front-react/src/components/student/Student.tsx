import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import { Item } from "../item/Item";

export const Student = () => {
  const [studens, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      await api
        .get("/students")
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStudents();
  }, []);

  const handleDelete = (id: number) => {
    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar o registro do cliente?"
    );

    if (response === true) {
      api
        .delete(`/student/${id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return <Container>Student</Container>;
};

const Container = styled.main`
  width: 100%;
  height: 100%;
  color: #000000;

  background: red;
`;
