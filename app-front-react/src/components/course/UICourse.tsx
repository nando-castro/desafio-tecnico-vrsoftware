import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";

export const UICourse = ({
  openUI,
  setOpenUI,
  data,
  setData,
  setOpenForm,
}: {
  openUI: boolean;
  setOpenUI: any;
  data: { id: number; description: string; course_content: string };
  setData: any;
  setOpenForm: any;
}) => {
  const [registerStudent, setRegisterStudent] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [id, setId] = useState<number>(0);
  const [enroll, setEnroll] = useState<{ courseId: number; studentId: number }>(
    {
      courseId: data.id,
      studentId: id,
    }
  );

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

  const handleEnrollment = () => {
    api
      .post(`/enrollment`, { ...enroll, studentId: Number(id) })
      .then((res) => {
        setRegisterStudent(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar o registro do curso?"
    );

    if (response === true) {
      api
        .delete(`/course/${data.id}`)
        .then((res) => {
          window.location.reload();
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
    setOpenUI(false);
    setOpenForm(true);
  };

  function renderStudents() {
    if (students.length > 0) {
      return students.map((i) => (
        <option key={i.id} value={i.id}>
          {i.name}
        </option>
      ));
    }
  }

  const handleCancel = () => {
    setRegisterStudent(false);
  };

  return (
    <Container>
      {registerStudent ? (
        <Division>
          <Enroll>
            <Division>Curso: {data.description}</Division>
            <Select name="id" onChange={(e: any) => setId(e.target.value)}>
              <option></option>
              {renderStudents()}
            </Select>
            <Division>
              <Button
                destiny={""}
                text={"Matricular aluno"}
                type={"submit"}
                action={handleEnrollment}
              />
              <Cancel onClick={handleCancel}>Cancelar</Cancel>
            </Division>
          </Enroll>
        </Division>
      ) : (
        <>
          <Content>
            <Description>Descrição: {data.description}</Description>
          </Content>
          <CourseContent>Ementa: {data.course_content}</CourseContent>
          <Footer>
            <Division>
              <Button
                destiny={""}
                text={"Matricular aluno"}
                type={"submit"}
                action={() => setRegisterStudent(true)}
              />
            </Division>
            <Division>
              <Button
                destiny={""}
                text={"Editar"}
                type={"submit"}
                action={() =>
                  sendDataUpdate(data.id, data.description, data.course_content)
                }
                background={"#CB9406"}
              />
            </Division>
            <Division>
              <Button
                destiny={""}
                text={"Apagar"}
                type={"submit"}
                action={handleDelete}
                background={"#DC0000"}
              />
            </Division>
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

const Content = styled.div`
  width: 100%;
  height: 75px;
  color: #000000;
`;

const Description = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  border-bottom: 1px solid #000;
  color: #000000;
  word-break: break-all;
`;

const CourseContent = styled.main`
  width: 100%;
  height: auto;
  padding: 10px;
  color: #000;
  border-bottom: 1px solid #000;
  word-break: break-all;
`;

const Footer = styled.div`
  width: 90%;
  height: 60px;

  position: fixed;
  bottom: 42px;

  border-radius: 0 0 20px 20px;

  @media (max-width: 370px) {
    height: 150px;
    flex-direction: column;
  }
`;

const Division = styled.div`
  width: 100%;
  height: 100%;
  word-break: break-all;
`;

const Select = styled.select`
  width: 200px;
  height: 100px;
`;

const Enroll = styled.div`
  width: 100;
  height: 400px;

  flex-direction: column;
`;

const Cancel = styled.div`
  width: 100px;
  height: 50px;

  border: 1px solid #000;
  margin-left: 20px;
  cursor: pointer;
`;
