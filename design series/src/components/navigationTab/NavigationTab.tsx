import { FC, useState, useMemo } from "react";
import styled from "styled-components";

interface TabsData {
  title: string;
  icon: any;
  status: boolean;
  text: string;
}

interface navProps {
  tabData: TabsData[];
}

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

const NavGroup = styled.div`
  background: #fff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  width: "max-content";
  height: 9.5%;
  display: flex;
  align-items: center;
  padding: 0px;
`;

const Tabs = styled.div<{ active: boolean }>`
  text-transform: uppercase;
  font-size: 16px;
  color: #777;
  margin: 0px;
  border-radius: 50px;
  padding: 10px 20px;
  background: ${(p) => (p.active ? "var(--core-color)" : null)};
  transition: background 1s ease;
  color: ${(p) => (p.active ? "#fff" : "#777")};
  &:active {
    color: #fff;
    background: var(--core-color);
  }
`;

const NavWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  background-color: #fff;
  margin: 0px 100px;
  border-radius: 12px;
  width: 600px;
`;

const NavigationTab: FC<navProps> = ({ tabData }) => {
  const [tabs, setTabs] = useState(tabData);
  
  const content: any = () => {
    let value;
    tabs.forEach((tab) => {
      if (tab.status === true) {
        value = tab.text;
      }
    });
    return value;
  };

  const handleTabClick = (index: number) => {
    let temp = [...tabs].map((item, i) => {
      if (i === index) {
        item.status = true;
      } else {
        item.status = false;
      }
      return item;
    });
    setTabs(temp);
  };
  return (
    <NavWrapper>
      <NavGroup>
        {tabs.map((tab, index) => {
          return (
            <Tabs
              key={index}
              active={tab.status}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </Tabs>
          );
        })}
      </NavGroup>
      <NavWindow>{content()}</NavWindow>
    </NavWrapper>
  );
};

export default NavigationTab;
