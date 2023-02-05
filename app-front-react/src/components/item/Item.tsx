import styled from "styled-components";
import { MdDelete, MdEdit } from "react-icons/md";

export const Item = ({
  id,
  name,
  action,
  actionDelete,
  actionUpdate,
}: {
  id: number;
  name: string;
  action: any;
  actionDelete: any;
  actionUpdate: any;
}) => {
  return (
    <Container key={id} className="center" onClick={action}>
      <Name>{name}</Name>
      <Options>
        <Icon>
          <MdDelete className="icon delete" onClick={actionDelete} />
        </Icon>
        <Icon>
          <MdEdit className="icon update" onClick={actionUpdate} />
        </Icon>
      </Options>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100%;
  color: #000000;

  background: #d9d9d9;
`;

const Name = styled.div`
  width: 70%;
  height: 100%;
  background-color: yellow;
`;

const Options = styled.div`
  width: 30%;
  height: 100%;
  justify-content: space-evenly;
  background-color: green;
`;

const Icon = styled.div`
  width: 25%;
  height: 70%;

  border-radius: 8px;

  .icon {
    font-size: 25px;
  }

  .delete {
    color: #dc0000;
  }

  .update {
    color: #cb9406;
  }

  background-color: #ffffff;
`;
