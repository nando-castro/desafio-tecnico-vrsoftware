import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Button({ destiny, text, type, action, loading, background }: any) {
  return (
    <Link to={destiny}>
      <Container disabled={loading} type={type} onClick={action} value={background}>
        {text}
      </Container>
    </Link>
  );
}

const Container = styled.button`
  width: 326px;
  height: 46px;
  padding: 10px;
  background: ${(props) => props.value || "#00164E"};
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
  border: none;
  &:hover {
    background: #36539B;
    border-radius: 5px;
  }

  @media(max-width: 390px) {
    width: 100%;
  }
`;