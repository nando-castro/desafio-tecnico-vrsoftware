import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import { MdDelete } from "react-icons/md";

export const UIStudent = ({
  openUI,
  setOpenUI,
  data,
  setData,
  setOpenForm,
}: {
  openUI: boolean;
  setOpenUI: any;
  data: { id: number; name: string };
  setData: any;
  setOpenForm: any;
}) => {
  const [registerStudent, setRegisterStudent] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [coursesByStudent, setCoursesByStudentss] = useState<any[]>([]);
  const [id, setId] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);
  const [enroll, setEnroll] = useState<{ courseId: number; studentId: number }>(
    {
      courseId: id,
      studentId: data.id,
    }
  );

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

  useEffect(() => {
    async function getCoursesByStudent() {
      await api
        .get(`/student/${data.id}/courses`)
        .then((res) => {
          console.log(res.data);
          setCoursesByStudentss(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCoursesByStudent();
  }, [update]);

  const handleEnrollment = () => {
    api
      .post(`/enrollment`, { ...enroll, courseId: Number(id) })
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
      "Voce tem certeza que gostaria de apagar o registro do aluno?"
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

  const sendDataUpdate = (id: number, name: string) => {
    setData({ id, name });
    setOpenUI(false);
    setOpenForm(true);
  };

  function renderCourses() {
    if (courses.length > 0) {
      return courses.map((i) => (
        <option key={i.id} value={i.id}>
          {i.description}
        </option>
      ));
    }
  }

  function renderCoursesEnroll() {
    return coursesByStudent.map((i) => (
      <CourseList key={i.id}>
        <CourseName key={i.id}>{i.course.description}</CourseName>
        <Button
          destiny={""}
          text={<MdDelete />}
          type={"submit"}
          action={() => handleDeleteEnroll(i.id)}
          background={"#DC0000"}
        />
      </CourseList>
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
            <Division>Aluno: {data.name}</Division>
            <Select name="id" onChange={(e: any) => setId(e.target.value)}>
              <option></option>
              {renderCourses()}
            </Select>
            <Division>
              <Button
                destiny={""}
                text={"Matricular-se no curso"}
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
            <Name>{data.name}</Name>
          </Content>
          <StudentContent>
            Cursos matriculado:
            {coursesByStudent.length > 0
              ? renderCoursesEnroll()
              : "Aluno não está matriculado em um curso!"}
          </StudentContent>
          <Footer>
            <Division>
              <Button
                destiny={""}
                text={"Matricular-se"}
                type={"submit"}
                action={() => setRegisterStudent(true)}
              />
            </Division>
            <Division>
              <Button
                destiny={""}
                text={"Editar"}
                type={"submit"}
                action={() => sendDataUpdate(data.id, data.name)}
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

const Name = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #000;
  color: #000000;
  word-break: break-all;
`;

const Footer = styled.div`
  width: 100%;
  height: 60px;

  position: fixed;

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

const CourseList = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid #000;
`;

const CourseName = styled.section`
  width: 100%;
`;

const StudentContent = styled.main`
  width: 100%;
  height: 78%;
  padding: 10px;
  color: #000;
  border-bottom: 1px solid #000;
  word-break: break-all;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 370px) {
    height: 67%;
    flex-direction: column;
  }
`;
