import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import { MdDelete } from "react-icons/md";

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
  const [courses, setCourses] = useState<any[]>([]);
  const [id, setId] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);
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
  }, [update]);

  useEffect(() => {
    async function getStudentsByCourse() {
      await api
        .get(`/course/${data.id}/students`)
        .then((res) => {
          console.log(res.data);
          setCourses(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStudentsByCourse();
  }, [update]);

  const handleEnrollment = () => {
    api
      .post(`/enrollment`, { ...enroll, studentId: Number(id) })
      .then((res) => {
        setRegisterStudent(false);
        setUpdate(!update);
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

  const handleDeleteEnroll = (id: number) => {
    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar a matrícula do aluno?"
    );

    if (response === true) {
      api
        .delete(`/enrollment/${id}`)
        .then((res) => {
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

  function renderCourses() {
    return courses.map((i) => (
      <StudentList key={i.id}>
        <StudentName key={i.id}>{i.student.name}</StudentName>
        <Button
          destiny={""}
          text={<MdDelete />}
          type={"submit"}
          action={() => handleDeleteEnroll(i.id)}
          background={"#DC0000"}
        />
      </StudentList>
    ));
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
        <Content>
          <Description>Descrição: {data.description}</Description>
          <CourseContent>Ementa: {data.course_content}</CourseContent>
          <CourseContent>
            Alunos matriculados:
            {students.length > 0
              ? renderCourses()
              : "O curso não possui alunos matriculados!"}
          </CourseContent>
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
        </Content>
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
  height: 100%;
  flex-direction: column;
  border-radius: 0 0 20px 20px;
  color: #000000;
  background-color: purple;
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

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 70px;

  border-radius: 0 0 20px 20px;

  @media (max-width: 370px) {
    height: 150px;
    flex-direction: column;
  }

  background-color: aquamarine;
`;

const Division = styled.div`
  width: 150px;
  height: 50px;
  margin: 5px;

  background-color: green;
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

const StudentList = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid #000;
`;

const StudentName = styled.section`
  width: 100%;
`;
