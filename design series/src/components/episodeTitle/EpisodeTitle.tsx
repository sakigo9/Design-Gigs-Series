import {FC} from "react";
import styled from "styled-components"

interface titleProps{
    title: string;
    icon:any;
}

const EpisodeTitleWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:10px;
    color:#fff;
    font-weight:500;
    font-size:20px;
    font-family:Inter;
`
const EpisodeTitle:FC<titleProps>=({title,icon})=>{
   return <EpisodeTitleWrapper>
       {icon?icon:null}
       {title}
   </EpisodeTitleWrapper>
}

export default EpisodeTitle;