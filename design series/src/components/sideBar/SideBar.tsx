import { FC, useState } from "react";
import BookIcon from "../../assets/bookAnima/BookAnimation.json";
import styled from "styled-components";
import AnimationIcons from "../animationIcons";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

interface sideBarProps {
  leftSideWidth?: string;
}

interface sideBarData {
  title: string;
  value: number;
  active: boolean;
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
    color: rgb(202, 94, 237);
  }
`;

const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  gap: 20px;
`;

const SideBar: FC<sideBarProps> = ({ leftSideWidth = "30vw" }) => {
  const episodeData: sideBarData[] = [
    {
      title: "Home",
      value: 0,
      active: true,
    },
    {
      title: "Episode",
      value: 1,
      active: false,
    },
    {
      title: "Episode",
      value: 2,
      active: false,
    },
  ];
  return (
    <SideBarWrapper leftSideWidth={leftSideWidth}>
      <AnimationIcons icon={BookIcon} height="100px" width="100px" />
      <SideBarContent>
        {episodeData.map((item, index) => {
          return (
            <SideBarEpisode key={index} active={item.active}>
              <div>{item.title}</div>
              <div>
                {item.value === 0 ? (
                  <DashboardCustomizeIcon />
                ) : (
                  <DashboardCustomizeIcon />
                )}
              </div>
            </SideBarEpisode>
          );
        })}
      </SideBarContent>
    </SideBarWrapper>
  );
};
export default SideBar;
