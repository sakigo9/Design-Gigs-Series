import styled from "styled-components";
import { FC } from "react";
import { MainBodyWrapper } from "../home/Home";
import EpisodeTitle from "../../components/episodeTitle/EpisodeTitle";
import SignpostIcon from '@mui/icons-material/Signpost';
import Cards from "../../components/cards/Cards";
import MusicImage from "../../assets/MusicCard.avif"
interface props {
  secondWidth: string;
}

const SecondEpisode: FC<props> = ({ secondWidth }) => {
  return <MainBodyWrapper right={secondWidth}>
     <EpisodeTitle title={"Episode 2: Music Cards"} icon={<SignpostIcon style={{color:"#0e0e23"}}/>}/>
     <Cards image={MusicImage}/>
  </MainBodyWrapper>;
};

export default SecondEpisode;
