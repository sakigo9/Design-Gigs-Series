import React,{FC, ReactElement} from 'react'
import styled from "styled-components"
import LayoutHeader from '../layoutHeader';
import SideBar from '../sideBar';

interface mainLayoutProps{
    leftWidth:number;
    rightWidth:number;
    sideBarSection:ReactElement;
    mainBodySection:ReactElement;
}

const MainLayoutWrapper=styled.div`
   height: 100vh;
   width : 100vw;
   background-color: var(--primary-color);
   position: absolute;
   display: flex;
   flex-direction: column;
`;

const RightSideLayout=styled.div`
   display: flex;
   justify-content: flex-end;
`;

const MainLayout:FC<mainLayoutProps> = ({leftWidth,rightWidth,sideBarSection,mainBodySection}) => {
  return (
    <MainLayoutWrapper>
        <SideBar leftSideWidth='12vw'/>
        <RightSideLayout>
            <LayoutHeader left="12vw"/>
        </RightSideLayout>
    </MainLayoutWrapper>
  )
}

export default MainLayout