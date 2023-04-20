import {FC} from 'react';
import styled from 'styled-components';

interface cardsProps{
    width?: string;
    height?:string;
    image: string;
    title:string;
    description:string;
}

const CardsContainers=styled.div`
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 50px;
    display:flex;
    justify-content: center;
`;

const CardBody=styled.div<{width:string;height:string;}>`
    display:flex;
    flex-direction: column;
    background-color: #fff;
    width:${props=>props.width};
    height:${props=>props.height};
    border-radius: 20px;
    overflow: hidden;
`;

const CardTitle=styled.div`
      font-size: 20px;
      font-weight: 500;
      margin: 20px 10px;
      display: flex;
      justify-content: center;
      font-family: Alstoria;
      color:var(--secondary-color);
`;

const CardDescriptions=styled.div`
      font-size: 14px;
      font-weight: 500;
      margin: 10px 10px;
      display: flex;
      text-align: center;
`;
const Cards:FC<cardsProps>=({width="300px",height="500px",image,title,description})=>{
   return <CardsContainers>
        <CardBody width={width} height={height}>
           <img src={image} alt='Cards' style={{height:"200px",width:"100%",objectFit:"cover"}}/>
           <CardTitle>{title}</CardTitle>
           <CardDescriptions>{description}</CardDescriptions>
        </CardBody>
   </CardsContainers>
}

export default Cards;