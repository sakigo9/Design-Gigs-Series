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
     <EpisodeTitle title={"Episode 2: Card UI"} icon={<SignpostIcon style={{color:"#0e0e23"}}/>}/>
     <Cards 
          image={MusicImage} 
          title="Benefits of listening music" 
          description="Music is a fundamental aspect of human culture. It has the power to bring joy, stimulate memories, create connections and inspire creativity.Listening to fast or slow motivational music enhances running performance.Music can help you learn and recall information better, but it depends on how much you like the music and whether or not you’re a musician."/>
  </MainBodyWrapper>;
};

export default SecondEpisode;
