import { FC, useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
interface Props {
  icon: any;
  width:string;
  height:string;
  autoPlay?:boolean;
  style?:object;
}
const IconWrapper = styled.div<{height:string;width:string}>`
cursor: pointer;
`;

const AnimationIcons: FC<Props> = ({ icon,height,width,autoPlay,style }) => {
  const defaultOptions = {
    loop: true,
    autoplay: autoPlay|| false,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  const [iconActive, setIconActive] = useState(autoPlay || false);
  const handleMouseEnter = () => {
    setIconActive(false);
  };

  const handleMouseLeave = () => {
    {autoPlay?setIconActive(false):setIconActive(true);}
    
  };
 
  return (
    <IconWrapper
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isStopped={iconActive}
        isPaused={iconActive}
      />
    </IconWrapper>
  );
};

export default AnimationIcons;
