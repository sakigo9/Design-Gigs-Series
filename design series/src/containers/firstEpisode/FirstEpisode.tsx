import styled from "styled-components";
import { FC } from "react";
import { MainBodyWrapper } from "../home/Home";
import NavigationTab from "../../components/navigationTab";
import EpisodeTitle from "../../components/episodeTitle/EpisodeTitle";
import SignpostIcon from '@mui/icons-material/Signpost';

interface props {
  firstWidth: string;
}

export const EpisodeHeader=styled.div`

`;

const FirstEpisode: FC<props> = ({ firstWidth }) => {
  const data = [
    {
      title: "Home",
      icon: "home",
      status: true,
      text:"This is Home Page."
    },
    {
      title: "Profile",
      icon: "profile",
      status: false,
      text:"This is Profile."
    },
    {
      title: "Settings",
      icon: "setting",
      status: false,
      text:"This is Settings."
    },
    {
      title: "Log Out",
      icon: "logout",
      status: false,
      text:"This is Log Out."
    },
  ];

  return (
    <MainBodyWrapper right={firstWidth}>
      <EpisodeTitle title={"Episode 1: Navigation Tab"} icon={<SignpostIcon style={{color:"#0e0e23"}}/>}/>
      <NavigationTab tabData={data} />
    </MainBodyWrapper>
  );
};

export default FirstEpisode;
