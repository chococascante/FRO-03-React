import { useTodos } from "../../contexts/use-todos";
import "../../styles/ItemTodo.scss";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface ItemTodoProps {
  id: number;
  title: string;
}

const StyledListItem = styled.li<{ primary?: boolean }>`
  color: ${({ primary }) => (primary ? "red" : "blue")};

  @media (min-width: 600px) {
    color: green;
  }
`;

export const ItemTodo = ({ id, title }: ItemTodoProps) => {
  const { obtenerTodoPorId } = useTodos();
  const nombre = "Luis";

  //Hola Luis
  const holaMundo = "Hola " + nombre;
  const strTemplate = `Hola ${nombre ? nombre : "Mundo"}`;

  const clase = css`
    color: ${nombre ? "yellow" : "blue"};
  `;

  const width = "120px";

  const manejarClick = () => {
    try {
      obtenerTodoPorId(id);
    } catch (error) {
      console.error(error);
    }
  };

  const style = {
    width,
    backgroundColor: "green",
  };

  return (
    <StyledListItem
      // @ts-ignore:next-line
      css={clase}
      id="lista"
      style={style}
      className={`item-todo`}
      onClick={manejarClick}
      key={id}
    >
      {title}
    </StyledListItem>
  );
};
