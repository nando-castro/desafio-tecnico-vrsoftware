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

  const sendDataUpdate = (
    id: number,
    description: string,
    course_content: string
  ) => {
    setData({ id, description, course_content });
    setOpenUI(false);
    setOpenForm(true);
  };
  return (
    <Container>
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
            action={() => setOpenForm(true)}
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
  height: 50px;
  border-bottom: 1px solid #000;
  color: #000000;
`;

const CourseContent = styled.main`
  width: 100%;
  height: auto;
  padding: 20px;
  color: #000;
  border-bottom: 1px solid #000;
`;

const Footer = styled.div`
  width: 90%;
  height: 60px;

  position: fixed;
  bottom: 42px;

  border-radius: 0 0 20px 20px;

  @media (max-width: 330px) {
    height: 150px;
    flex-direction: column;
  }
`;

const Division = styled.div`
  width: 100%;
  height: 100%;
`;
