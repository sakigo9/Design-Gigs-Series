import { FC } from "react";
import styled from "styled-components";
import HeroIcon from "../../assets/heroIcon/HeroIcon.json";
import Avatar from "../../assets/authorIcon/AuthorIcon.json";
import AnimationIcons from "../animationIcons";
interface headerProps {
  left: string;
  right:string;
}

const HeaderWrapper = styled.div<headerProps>`
  display: flex;
  justify-content: space-between;
  width: ${p=>p.right};
  margin: 10px;
  float: right;
  /* left: 50%; */
  position: relative;
  border-radius: 6px;
  padding: 0px 15px;
  background: var(--secondary-color);
`;

const HeroTitle = styled.div`
  font-size: 24px;
  color: #fff;
  font-family: Alstoria;
  letter-spacing: 1px;
`;

const LayoutHeader: FC<headerProps> = ({ left,right }) => {
  return (
    <HeaderWrapper left={left} right={right}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AnimationIcons
          icon={HeroIcon}
          autoPlay={true}
          height={"70px"}
          width="90px"
        />
        <HeroTitle>The Design Series</HeroTitle>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AnimationIcons
          icon={Avatar}
          autoPlay={true}
          height={"50px"}
          width="50px"
          style={{
            border: "2px solid rgb(202,94,237)",
            borderRadius: "50%",
            width: "50px",
          }}
        />
      </div>
    </HeaderWrapper>
  );
};

export default LayoutHeader;
