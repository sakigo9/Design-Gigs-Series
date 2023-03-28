import styled, { keyframes,css } from "styled-components";

type CircularProps = {
  active?: boolean;
  children?: React.ReactNode;
};

const CircularContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--core-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CircularNumber = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 80%;
  height: 80%;
  clip: rect(0, 50px, 100px, 0);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #007bff;
  &:hover{
    color: rgb(220, 163, 239);
  }
  background-color: #fff;
  animation-name: ${({ active }) => (active ? css`${rotate} 2s linear infinite;` : '')};
`;

const CustomIcon: React.FC<CircularProps> = ({ children, active = false }) => {
  return (
    <CircularContainer>
      <CircularNumber active={active}>{children}</CircularNumber>
    </CircularContainer>
  );
};

export default CustomIcon;
