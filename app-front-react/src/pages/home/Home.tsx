import { useState } from "react";
import styled from "styled-components";
import { Course } from "../../components/course/Course";
import { Student } from "../../components/student/Student";

export const Home = () => {
  const [selected, setSelected] = useState("");

  let renderTab: any = {
    student: <Student />,
    course: <Course />,
  };

  let currentTab: string = selected;

  return (
    <Container className="center">
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
        <Body>
          {currentTab !== "" ? (
            renderTab[currentTab]
          ) : (
            <Message>Desafio Técnico da VR Software!</Message>
          )}
        </Body>
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

const Content = styled.section`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
  border-radius: 23px;
  background: #ffffff;
`;

const Top = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);

  border-radius: 20px 20px 0 0;
  color: #000000;

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

const Body = styled.main`
  width: 100%;
  height: 95%;
`;

const Message = styled.div`
  width: 100%;
  height: 100%;
  color: #000000;
`;
