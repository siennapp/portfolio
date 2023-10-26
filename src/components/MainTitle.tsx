import styled, { keyframes } from "styled-components"
import { AiOutlineCodepenCircle,AiFillGithub,AiFillMail  } from "react-icons/ai";
import { useEffect, useState } from "react";


const ScaleWidth = keyframes`
    0%{
        width: 100%; 
        height: 100vh; 
        background: transparent;
    }
    100%{
        /* width: 20vw; */
        width: ${window.innerWidth > 991? '20vw':'100vw' };
        height: ${window.innerWidth > 991? '100vh':'80px' };
        background: #3dd065;

    }
`
const ScaleHeight = keyframes`
    0%{
        height: 100vh; 
        background: transparent;
    }
    100%{
        height: 80px;
        background: #3dd065;

    }
`
const TitleUp = keyframes`
    0%{
        top: 100%; 
    }
    100%{
        top: -200%;
    }
`
const TitleDown = keyframes`
    0%{
        top: -300%;
    }
    100%{
        top: 0;
    }
`
const ScaleName = keyframes`
    0%{
        max-height: 0;
    }
    100%{
        max-height: 100%;
    }
`
const ScaleSize = keyframes`
     0%{
        transform: scale(1);
    }
    99%{
        opacity: 1;
    }
    100%{
        transform: scale(.16);
        opacity: 0;
    }

`
const FadeIn = keyframes`
    0%{
    opacity: 0;
    }
    10%{
    opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

const TitleWrap = styled.div`
    width: 20vw;
    height: 100vh;
    margin-left: 1px;
    position: fixed;
    left: 0; top:0; 
    border-right: solid 1px #000;
    z-index: 100;
    min-height: 100vh !important ;
    /* max-width: 20vw !important; */
    background: #3dd065;
    &.active{
        animation: ${ScaleWidth} .4s 3s cubic-bezier(0.46,0.03,0.52,0.96);
        animation-fill-mode: backwards;
        
    }
    /* background: red; */
    @media (max-width: 991px) {
       width: 100vw; 
       min-width: 100vw !important;
       max-width: 20vw;
       height: 80px;
       border-right: 0;
       margin-right:1px;
       border-bottom: solid 1px #000;
       padding: 12px 1.5vw;
       overflow: hidden;
       min-height:80px !important ;
       /* max-height: 80px !important ; */
    }
   
`
const TitleBox = styled.div`
    left: 0; top: 0; 
    position: absolute;
    /* min-width: 320px; */
    width: 99%;
    height: 100%; 
    z-index: 101;
    display: flex;
    flex-direction: column;
    padding: 30px 1.5vw;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px; 
    margin-left: -1px;
    transform: scale(1);
   // background: yellow;
    &.active{
        .left-title{
            animation: ${TitleUp} 1.5s .3s cubic-bezier(0.79,0.14,0.15,0.86);
            animation-fill-mode: forwards;
        }
        .right-title{
            animation: ${TitleDown} 1.5s .3s cubic-bezier(0.79,0.14,0.15,0.86);
            animation-fill-mode: forwards;
        }
        .name-box{
            animation: ${ScaleName} .4s 2.2s cubic-bezier(0.46,0.03,0.52,0.96);
            animation-fill-mode: forwards;
        }
        .banner{
            animation: ${ScaleSize} .4s 3s cubic-bezier(0.46,0.03,0.52,0.96);
            animation-fill-mode: forwards;
        }
        .link{
            animation: ${FadeIn} .38s 3.3s cubic-bezier(0.46,0.03,0.52,0.96);
            animation-fill-mode: forwards;
            /* &:nth-of-type(2){
                animation-delay: 3.6s;
            }
            &:nth-of-type(3){
                animation-delay: 3.7s;
            } */
        }
        .side-banner{
            animation: ${FadeIn} .19s 3.3s cubic-bezier(0.46,0.03,0.52,0.96);
            animation-fill-mode: forwards;
            color: #000000;
            
        }
        animation: ${ScaleWidth} .4s 3.2s cubic-bezier(0.46,0.03,0.52,0.96);
        animation-fill-mode: inherit;

        @media (max-width: 991px) {
            width: 100vw; 
            /* height: 300px; */
            border-right: 0;
            /* &.active{
                animation: ${ScaleHeight} .4s 3s cubic-bezier(0.46,0.03,0.52,0.96);
                animation-fill-mode: forwards;
            } */
        }
    }
    @media (max-width: 991px) {
        padding: 12px 1.5vw;
    }
`
const Links = styled.div`
    width: 100%; 
    display: flex;
    /* flex-direction: column; */
    margin-bottom: 10px;
    position: absolute;
    width:100%;
    top: 8.95vw;
    @media (max-width: 991px) {
        height:100%;
        top: 16px;
        right: 12px;
        align-items: center;
        justify-content: flex-end;
    }
`
const Link = styled.span`
    margin-right: 12px;
    opacity: 0;
    
   a{
        color: black;
        transition: all .3s;
        &:hover{
            color: red; 
        }
   }
`


const Banner = styled.div`
    font-family: 'Archivo', sans-serif;
    /* font-family: 'TAEBAEKfont', sans-serif; */
    font-weight: bold;
    font-size: 11.4vw;
  
    //cubic-bezier(0.86,0,0.07,1);
    /* position: absolute;
    left: 0; top: 0;  */
    transform-origin: 0px 0px;
   
`
const SideBanner = styled.div`
    position:absolute; 
    margin-top: 20px; 
    font-family: 'Archivo', sans-serif;
    opacity: 0;
    color: transparent;
    @media (max-width: 800px) {
        margin-top:1.5vw;
    }
`
const SideNameBox = styled.div`
    font-weight: bold;
    font-size: 2.53vw;
    font-weight: 900;
    @media (max-width: 800px) {
        font-size: 19px;
    }
`
const SideBox = styled.div`
    font-weight: bold;
    font-size: 1.75vw; 
    font-weight: 900;
    @media (max-width: 800px) {
        font-size: 14px;
    }
`
const Box = styled.div`
    width: 100vw; 
    line-height: 1em;
    letter-spacing: -0.03em;
    display: flex;
    height: 1em;
    overflow: hidden;
    transform: translateY(70%);
`
const Left = styled.div`
    flex:1; 
    height: 100%; 
    padding-right: 1vw;
    position: relative;
    span{
        position: absolute;
        top: 100%;
        left: 0; 
        font-weight: 900;
    }
`
const Right = styled.div`
    flex: 1.1;
    height: 100%; 
    left: 0; 
    position: relative;
    span{
        position: absolute;
        top: -400%;
        font-weight: 900;
    }
`
const NameBox = styled.div`
    width: 100%;
    font-family: 'Archivo', sans-serif;
    font-weight: 900;
    font-size: 16vw;
    margin-bottom: 30px;
    height: 1em;
    max-height: 0;
    overflow: hidden;
    transition: all .3s;
    transform: translateY(60%);
    
`
function MainTitle () {
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
    },[])
   
    return(
        <TitleWrap className={loading? "active":" "}>
            <TitleBox className={loading? "active":" "}>
                <Links> 
                    <Link className="link"><a href="https://github.com/siennapp"><AiFillGithub size={20}/></a></Link>
                    <Link className="link"><a href="https://codepen.io/siennapp"><AiOutlineCodepenCircle size={20}/></a></Link>
                    <Link className="link"><a href="mailto:sieun.park.91@gmail.com?subject=안녕하세요."><AiFillMail size={20}/></a></Link>
                </Links> 
               <Banner className="banner">
                    <NameBox className="name-box">박시은</NameBox>
                    <Box>
                        <Left>
                            <span className="left-title">Frontend Frontend Frontend</span>
                        </Left>
                        <Right> 
                            <span className="right-title">Developer Developer Developer</span>
                        </Right>
                    </Box>
                </Banner>
                <SideBanner className="side-banner">
                    <SideNameBox>박시은</SideNameBox>
                    <SideBox>
                        <span><h1>Frontend Developer</h1></span>
                    </SideBox>
                </SideBanner>
            </TitleBox>
            
            {/* <Introduce>웹 퍼블리셔 및 프론트엔드 개발자로서 약 4년의 경력을 가지고 있습니다. </Introduce> */}
            {/* <Footer>Developed by @Sienna Park</Footer> */}
        </TitleWrap>
    )
}
export default MainTitle