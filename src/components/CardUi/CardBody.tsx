import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space}
  border: 1px #FFFFFF solid;
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
