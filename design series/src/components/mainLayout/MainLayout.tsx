import React,{FC, ReactElement, ReactNode} from 'react'
import styled from "styled-components"
import LayoutHeader from '../layoutHeader';
import SideBar from '../sideBar';

interface mainLayoutProps{
    leftWidth:string;
    rightWidth:string;
    sideBarSection:ReactElement;
    mainBodySection:ReactElement;
    children:ReactNode;
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
   flex-direction: column;
   align-items: flex-end;
`;

const MainLayout:FC<mainLayoutProps> = ({leftWidth,rightWidth,sideBarSection,mainBodySection,children}) => {
  return (
    <MainLayoutWrapper>
        <SideBar leftSideWidth={leftWidth}/>
        <RightSideLayout>
            <LayoutHeader left={leftWidth} right={rightWidth}/>
            {children}
        </RightSideLayout>
    </MainLayoutWrapper>
  )
}

export default MainLayout