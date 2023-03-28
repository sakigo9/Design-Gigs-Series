import styled from "styled-components";
import { FC } from "react";
import { MainBodyWrapper } from "../home/Home";

interface props {
  firstWidth: string;
}

const FirstEpisode: FC<props> = ({ firstWidth }) => {
  return <MainBodyWrapper right={firstWidth}>Episode 1</MainBodyWrapper>;
};

export default FirstEpisode;
