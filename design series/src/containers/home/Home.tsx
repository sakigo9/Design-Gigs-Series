import styled from "styled-components";
import { FC } from "react";

interface homeProps {
    right:string;
}

export const MainBodyWrapper = styled.div<{right:string;}>`
  background-color: var(--text-color);
  height: 85vh;
  border-radius: 6px;
  margin: 10px;
  /* display:flex; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: 10px 15px;
  width: ${p=>p.right};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Home: FC<homeProps> = ({right}) => {
  return <MainBodyWrapper right={right}>DashBoard</MainBodyWrapper>;
};

export default Home;
