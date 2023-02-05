import { useState } from "react";
import styled from "styled-components";

export const Home = () => {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <Title>APP VR SOFTWARE</Title>
      <Content>
        <Top>
          <Item
            className={`student ${selected === "student" ? "selected" : ""}`}
            onClick={() => setSelected("student")}
          >
            Alunos
          </Item>
          <Item
            className={`course ${selected === "course" ? "selected" : ""}`}
            onClick={() => setSelected("course")}
          >
            Cursos
          </Item>
        </Top>
        <Body>Desafio Tecnico da VR Software!</Body>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100vh;
  color: #ffffff;

  flex-direction: column;

  background-color: #124090;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;

  color: #ffffff;
  font-weight: bold;
`;

const Content = styled.div`
  width: 90%;
  height: 85%;
  display: block;
  border-radius: 23px;
  background: #ffffff;
`;

const Top = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);

  border-radius: 20px 20px 0 0;

  .selected {
    color: #ffffff;
    background: #124090;
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
  }
  .student {
    border-radius: 20px 0 0 0;
  }
  .course {
    border-radius: 0 20px 0 0;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #36539b;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;