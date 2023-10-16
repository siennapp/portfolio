import styled, { keyframes } from "styled-components"
//import laptop from './img/laptop.png'
import { AiOutlineCodepenCircle,AiFillGithub,AiFillMail  } from "react-icons/ai";
import { useEffect, useState } from "react";

const ScaleWidth = keyframes`
    0%{
        width: 100%; 
        background: transparent;
    }
    100%{
        width: 20vw;
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
    100%{
        transform: scale(.16);
    }

`
const FadeIn = keyframes`
    0%{
    opacity: 0;
    }
    100%{
        opacity: 1;
    }

`
const TitleBox = styled.div`
    position: fixed;
    left: 0; top: 0; 
    border-right: solid 1px #000;
    width: 100vw;
    min-width: 320px;
    height: 100vh; 
    z-index: 101;
    display: flex;
    flex-direction: column;
    padding: 30px 25px 30px 25px;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px; 
    transform: scale(1);
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
            animation: ${FadeIn} .38s 3.5s cubic-bezier(0.46,0.03,0.52,0.96);
            animation-fill-mode: forwards;
            /* &:nth-of-type(2){
                animation-delay: 3.6s;
            }
            &:nth-of-type(3){
                animation-delay: 3.7s;
            } */
        }

        animation: ${ScaleWidth} .4s 3s cubic-bezier(0.46,0.03,0.52,0.96);
        animation-fill-mode: forwards;
    }
`

const Links = styled.div`
    width: 100%; 
    display: flex;
    /* flex-direction: column; */
    margin-bottom: 10px;
    position: absolute;
    width:100%;
    top: 9vw;

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
const Footer = styled.div`
    width: 100%; 
    text-align: center;
    font-size: 14px; 
    
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
                        <span className="left-title">Frontend Frontend <h2>Frontend</h2></span>
                    </Left>
                    <Right> 
                        <span className="right-title"><h2>Developer</h2> Developer Developer</span>
                    </Right>
                </Box>
            </Banner>
            {/* <Introduce>웹 퍼블리셔 및 프론트엔드 개발자로서 약 4년의 경력을 가지고 있습니다. </Introduce> */}
            <Footer>Developed by @Sienna Park</Footer>
        </TitleBox>
    )
}
export default MainTitle