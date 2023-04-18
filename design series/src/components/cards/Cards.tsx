import {FC} from 'react';
import styled from 'styled-components';

interface cardsProps{
    width?: string;
    height?:string;
    image: string;
}

const CardsContainers=styled.div`
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 50px;
    
`;

const CardBody=styled.div<{width:string;height:string;}>`
    display:flex;
    flex-direction: column;
    background-color: #fff;
    width:${props=>props.width};
    height:${props=>props.height};
    border-radius: 20px;
`;

const CardImage=styled.img<{image:string}>`
    background-image: url(${props=>props.image})
`;
const Cards:FC<cardsProps>=({width="300px",height="500px",image})=>{
   return <CardsContainers>
        <CardBody width={width} height={height}>
           <img src={image} alt='Cards' style={{height:"200px",width:width,objectFit:"cover"}}/>
        </CardBody>
   </CardsContainers>
}

export default Cards;