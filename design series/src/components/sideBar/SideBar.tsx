import { FC, useState } from "react";
import styled from "styled-components";
import AnimationIcons from "../animationIcons";
import {useNavigate} from 'react-router-dom';
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import CustomIcon from "../customIcon";
import BookMark from "../../assets/BookMark.png"

interface sideBarProps {
  leftSideWidth?: string;
}

interface sideBarData {
  title: string;
  value: number;
  active: boolean;
  path:string;
}
const SideBarWrapper = styled.div<{ leftSideWidth: string }>`
  top: 0;
  position: fixed;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  width: ${(width) => width.leftSideWidth};
  background: var(--secondary-color);
  height: -webkit-fill-available;
  margin: 10px;
  padding: 10px 15px;
  color: #fff;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SideBarEpisode = styled.div<{active:boolean;}>`
  background: ${p=>p.active? 'var(--core-color)':null};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 10vw;
  &:hover {
    color: rgb(220, 163, 239);
  }
`;

const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  gap: 15px;
`;

const SideBar: FC<sideBarProps> = ({ leftSideWidth = "30vw" }) => {
  const navigation=useNavigate();
  const data: sideBarData[] = [
    {
      title: "Home",
      value: 0,
      active: true,
      path:"/"
    },
    {
      title: "Episode",
      value: 1,
      active: false,
      path:"/episode1"
    },
    {
      title: "Episode",
      value: 2,
      active: false,
      path:"/episode2"
    },
  ];
  const [episodeData,setEpisodeData]=useState(data);

  const handleActiveEpisode=(currIndex:number)=>{
    let local=[...episodeData];
    local.map((episode,index)=>{
      if(currIndex===index){
        local[currIndex].active=true;
        let currPath=episode.path;
        navigation(currPath);
      }else{
        local[index].active=false
      }
    })
    setEpisodeData(local);
  }
  return (
    <SideBarWrapper leftSideWidth={leftSideWidth}>
      <img src={BookMark} alt="BookMark" style={{height:"100px",width:"100px"}}/>
      <SideBarContent>
        {episodeData.map((item, index) => {
          return (
            <SideBarEpisode key={index} active={item.path===window.location.pathname} onClick={()=>handleActiveEpisode(index)}>
              <div>
                {item.value === 0 ? (
                  <DashboardCustomizeIcon />
                ) : (
                  <CustomIcon active={item.active}>
                    {item.value}
                  </CustomIcon>
                )}
              </div>
              <div>{item.title}</div>
            </SideBarEpisode>
          );
        })}
      </SideBarContent>
    </SideBarWrapper>
  );
};
export default SideBar;
