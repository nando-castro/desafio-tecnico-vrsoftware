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

  return <Container>Student</Container>;
};

const Container = styled.main`
  width: 100%;
  height: 100%;
  color: #000000;

  background: red;
`;
