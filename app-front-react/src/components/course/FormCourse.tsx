import { useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import Input from "../input/Input";

export const FormCourse = ({
  setOpenForm,
  update,
  setUpdate,
  data,
  setData,
}: {
  setOpenForm: any;
  update: boolean;
  setUpdate: any;
  data: any;
  setData: any;
}) => {
  const [courseData, setCourseData] = useState({
    description: "" || data.description,
    course_content: "" || data.course_content,
  });
  function changeInput(e: any) {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  }

  const handleCreateCourse = (e: any) => {
    e.preventDefault();

    api
      .post(`/course`, { ...courseData })
      .then((res) => {
        setUpdate(!update);
        setOpenForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateCourse = (id: number) => {
    api
      .put(`/course/${data.id}`, { ...courseData })
      .then((res) => {
        setUpdate(!update);
        setOpenForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setData({ id: 0, description: "", course_content: "" });
    setOpenForm(false);
  };

  return (
    <Container>
      <Input
        maxLength={50}
        type={"text"}
        placeholder={"Descrição"}
        value={courseData.description}
        name={"description"}
        onChange={changeInput}
      />
      <textarea
        className="text-box"
        placeholder={"Ementa"}
        value={courseData.course_content}
        name={"course_content"}
        onChange={changeInput}
      />
      <Button
        destiny={""}
        text={data.id === 0 ? "Cadastrar Curso" : "Atualizar Curso"}
        type={"submit"}
        action={data.id === 0 ? handleCreateCourse : handleUpdateCourse}
        background={"#00B187"}
      />
      <Cancel onClick={handleCancel}>Cancelar</Cancel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;

  .text-box {
    width: 326px;
    height: 150px;
    margin-bottom: 20px;

    @media (max-width: 365px) {
      width: 100%;
    }
  }
`;

const Cancel = styled.div`
  width: 30%;
  height: 30px;
  margin-top: 20px;
  cursor: pointer;
`;
