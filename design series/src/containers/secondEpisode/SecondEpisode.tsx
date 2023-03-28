import styled from "styled-components";
import { FC } from "react";
import { MainBodyWrapper } from "../home/Home";

interface props {
  secondWidth: string;
}

const SecondEpisode: FC<props> = ({ secondWidth }) => {
  return <MainBodyWrapper right={secondWidth}>Episode 2</MainBodyWrapper>;
};

export default SecondEpisode;
