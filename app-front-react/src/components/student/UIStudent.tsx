import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";

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
  const [id, setId] = useState<number>(0);
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
  }, []);

  const handleEnrollment = () => {
    api
      .post(`/enrollment`, { ...enroll, courseId: Number(id) })
      .then((res) => {
        setRegisterStudent(false);
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
