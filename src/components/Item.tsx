import styled, { keyframes } from "styled-components";

interface ItemProps {
    id: string;
    name: string;
    thumbImg: string;
    contentImg: string;
    skills: string[]
    modalOpen: () => void;
}

const FadeUp = keyframes`
    0%{
        opacity: 0;
        top: 50px;
    }
    100%{
        opacity: 1;
        top: 0;
    }
`

const ScaleWidth = keyframes`
    0%{
       max-width: 0;
    }
    100%{
        max-width: 100%;
    }
`
const ItemWrap = styled.div<{bg: string}>`
    width: 100%; 
    position: relative; 
    margin-bottom: 18px; 
    height: 8.4vh;
    cursor: pointer;
    color: #212121; 
    display: flex;
    align-items: center;
    opacity: 0;
   // animation: ${FadeUp} 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    //animation: ${FadeUp} 300ms ease-in-out;
    animation-fill-mode: both;
    &:last-child{
        border-bottom: 0; 
    }
   
    h2{
        max-width: 11vw;
        font-size: .91vw; 
        margin: 0; 
        word-break: keep-all;
        word-wrap: break-word;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 1.4em;
        transition: .12s ease-in-out;
        padding: 0 10px;
        font-family: 'TAEBAEKfont', sans-serif ;
        @media (max-width: 992px) {
            max-width: 14vw;
            font-size: 1.6vw; 
        }
        @media (max-width: 600px) {
            max-width: 100%;
            width: 100%; 
            font-size: 3.9vw; 
            justify-content: left;
        }
        @media (max-width: 480px) {
            font-size: 5vw; 
            position: relative;
            top: -3px;
            text-align: left; 
        }
    }
    &:hover{
        .fadeIn{
            opacity: 1;
        }
    }
    &:first-child{
        .box-start {
            width: 36vh;
        }
    }
    &:nth-child(3){
        .box-start {
            width: 26vw;
        }
    }
    &:nth-child(4n){
        .box-start {
            width: 36vw;
        }
    }
    &:nth-child(5n){
        .box-start {
            width: 24vh;
        }
    }
    &:nth-child(7n){
        .box-start {
            width: 48vh;
        }
    }
    transition: .12s ease-in-out;
   
    &:hover{
        transition: 0s ease-in-out;
        .box-start, .box-end{
            width:0
        }
        h2{
            color: rgba(220,3,3,1);
        }
        .box-skills{
            max-width: 100%;
        }
    }
    @media (max-width: 600px) {
        height: auto;  
        margin: 0px 20px 40px 0px;
        flex-direction: column;
    }
    @media (max-width: 480px) {
        height: auto;  
        margin: 0 0 40px 0;
        flex-direction: column;
    }
    &:nth-child(2){
        animation-delay: .2s
    }
    &:nth-child(3){
        animation-delay: .35s
    }
    &:nth-child(4){
        animation-delay: .5s
    }
    &:nth-child(5){
        animation-delay: .65s
    }
    &:nth-child(6){
        animation-delay: .8s
    }
    &:nth-child(7){
        animation-delay: .95s
    }
    &:nth-child(8){
        animation-delay: 1.1s
    }
    &:nth-child(9){
        animation-delay: 1.25s
    }
    &:nth-child(10){
        animation-delay: 1.4s
    }
`
const BoxStart = styled.div<{bg: string}>`
    width: 12vh; 
    height: 100%; 
    background-image: url( https://siennapp.github.io/static/${(props)=> props.bg });
    background-size: contain;
    transition: .2s;
    @media (max-width: 600px) {
        width: 0 !important; 
        flex-grow: 0; 
    }
`
const BoxEnd = styled.div<{bg: string}>`
    flex-grow: 1; 
    height: 100%; 
    transition: .2s;
    background-image: url( https://siennapp.github.io/static/${(props)=> props.bg });
    background-size: contain;
    @media (max-width: 600px) {
        width: 0;
        flex-grow: 0; 
    }
`
const Num = styled.span`
    font-size: 17px; 
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: #000;
    margin-right: 30px; 
    position: absolute;
    left: -40px;
    
`

const Skills = styled.div`
    margin-top: -2px; 
    
    left: 100%; 
    
    top: 0; 
    max-width: 0px;
    margin-right: 10px; 
    overflow: hidden;
    animation: ${ScaleWidth} 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    @media (max-width: 992px) {
        padding: 10px; 
    }
    @media (max-width: 480px){
        position: relative;
        display: block;
        height: auto; 
        width: 100%;
        left: 0; 
        top: 100%;
    }

`
const Badge = styled.div`
    padding: 2px 6px; 
    display: inline-block;
    border: solid 1px #000; 
    margin: 3px; 
    background: #ffffff;
    
    color: #000000; 
    font-family: 'Montserrat', sans-serif;
    font-size: .753em; 
    font-weight: 600;
    @media (max-width: 600px){
        display: inline-block;
    }
`

function Item ( {
        id,
        thumbImg,
        name,
        skills,
        modalOpen
    }:ItemProps ) {
    
    return(
        <ItemWrap
            key={id}
            bg={thumbImg}
            onClick={modalOpen}
            data-aos="fade"
            data-aos-offset="100"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
        >
            <BoxStart className="box-start"  bg={thumbImg}/>
           
            
            <Num>{id}</Num>
            <h2>{name}</h2>
            <Skills className="box-skills">
                {skills.map((skill,index) => {

                    
                return index%2 === 0?<span><Badge key={index}>{skill}</Badge></span> : (<span><Badge key={index}>{skill}</Badge><br /></span>)
                })}
            </Skills>
            <BoxEnd className="box-end"  bg={thumbImg}/>
        </ItemWrap>
    )
}
export default Item;