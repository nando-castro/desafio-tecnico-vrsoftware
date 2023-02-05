import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import { Item } from "../item/Item";
import { FormCourse } from "./FormCourse";
import { UICourse } from "./UICourse";

export const Course = () => {
  const [courses, setCourses] = useState([]);
  const [update, setUpdate] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openUI, setOpenUI] = useState(false);
  const [data, setData] = useState({
    id: 0,
    description: "",
    course_content: "",
  });

  useEffect(() => {
    async function getCourses() {
      await api
        .get("/courses")
        .then((res) => {
          console.log(res.data);
          setCourses(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCourses();
  }, [update]);

  const handleDelete = (id: number) => {
    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar o registro do curso?"
    );

    if (response === true) {
      api
        .delete(`/course/${id}`)
        .then((res) => {
          console.log(res.data);
          setUpdate(!update);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const sendDataUpdate = (
    id: number,
    description: string,
    course_content: string
  ) => {
    setData({ id, description, course_content });
    setOpenForm(true);
  };

  const sendDataUICourse = (
    id: number,
    description: string,
    course_content: string
  ) => {
    setData({ id, description, course_content });
    setOpenUI(true);
  };

  const renderCourses = () => {
    return courses.map((i: any) => (
      <Content key={i.id}>
        <Item
          id={i.id}
          name={i.description}
          action={() => sendDataUICourse(i.id, i.description, i.course_content)}
          actionDelete={() => handleDelete(i.id)}
          actionUpdate={() =>
            sendDataUpdate(i.id, i.description, i.course_content)
          }
        />
      </Content>
    ));
  };

  return (
    <Container>
      {openUI ? (
        <UICourse
          openUI={openUI}
          setOpenUI={setOpenUI}
          data={data}
          setData={setData}
          setOpenForm={setOpenForm}
        />
      ) : openForm ? (
        <FormCourse
          setOpenForm={setOpenForm}
          update={update}
          setUpdate={setUpdate}
          data={data}
          setData={setData}
        />
      ) : (
        <>
          {courses.length > 0 ? (
            renderCourses()
          ) : (
            <Message>Não há cursos cadastrados!</Message>
          )}
          <Footer>
            <Button
              destiny={""}
              text={"Adicionar Curso"}
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
