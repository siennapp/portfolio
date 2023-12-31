import styled from "styled-components";
import MainTitle from "../components/MainTitle";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import itemData from "./../itemData.json"
import Item from "../components/Item"

const skills  = [
    {name: "Javascript", color:'#edd72e'},
    {name: "Typescript", color:'#3071b9'},
    {name: "React", color:'#6bc7e7'},
    {name: "React-native", color:'#6bc7e7'},
    {name: "Angular", color:'#d53537'},
    {name: "HTML5", color:'#d74f27'},
    {name: "CSS3", color:'#56b432'},
    {name: "SCSS", color:'#c16292'},
    {name: "Style in Js", color:'#d06c8c'}
]

function Main (){
    const [loading, setLoading] = useState(false);
    const target = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true);
        },4000)
    },[])
    useEffect(()=>{
      
        AOS.init();
       
    },[target.current]);

    
    return (
            <MainWrap ref={target}>
                <MainTitle />
                {loading&&
                    <SectionWrap>
                        <Section>
                            <Left
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="100"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                            >
                                <BoxTitle>Expierences</BoxTitle>
                                <Box className="box">데이터 기업에서 근무하면서 데이터 조회, 시각화, 관리 admin 사이트 개발에 참여하였습니다. 주로 공공기관과 협업하며 <b>웹 접근성</b>과 <b>웹 표준</b>을 중점으로 하고, <b>반응형 레이아웃</b> 최적화를 고려한 마크업을 수행하였습니다. 
                                    <br/>
                                    <br/>
                                    개인 프리랜서로서 프로젝트를 참여하면서 업무에 있어 책임감을 더 키우고 팀 구성원과 커뮤니케이션 능력을 기를 수 있었습니다. 또한 <b>웹, 하이브리드 앱</b> 개발을 위한 다양한 javascript 프레임워크와 개발 환경은 물론 zeplin, Figma 와 같은 디자인 툴과 익숙해질 수 있었습니다. 
                                </Box>
                            </Left>
                            <Right>
                                <History className="history-list">
                                    <li className="point"
                                        data-aos="fade"
                                        data-aos-delay="700"
                                    ><b>2018</b></li>
                                    <li
                                        data-aos="fade"
                                        data-aos-delay="700"
                                    ><p
                                        data-aos="fade-left"
                                        data-aos-delay="1200"
                                        data-aos-duration="500"
                                    >주식회사 리스트<span>주임 / 퍼블리셔</span></p></li> 
                                    <li className="point"
                                        data-aos="fade"
                                        data-aos-delay="900"
                                    ><b>2021</b></li>
                                    <li
                                        data-aos="fade"
                                        data-aos-delay="900"
                                    >
                                    <p
                                        data-aos="fade-left"
                                        data-aos-delay="1200"
                                        data-aos-duration="500"
                                    >프리랜서<span>프론트엔드</span><br/>
                                    </p> </li> 
                                    <li className="point"
                                        data-aos="fade"
                                        data-aos-delay="1100"
                                    > <b>현재</b></li>
                                </History>
                            </Right>
                        </Section>
                        <Section className="reverse">
                            <Left>
                                <SkillsBox>
                                    {skills.map((v,idx )=> 
                                            <SkillItem 
                                                key={idx}
                                                color={v.color}
                                                data-aos="zoom-in-up"
                                                data-aos-offset="200"
                                                data-aos-delay={300+ idx%3*100}
                                                data-aos-duration="300"
                                                data-aos-easing="ease-in-out"
                                                >{v.name}
                                            </SkillItem> )
                                    }
                                </SkillsBox>
                            </Left>
                            <Right
                                data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="100"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                            >
                                <BoxTitle>Stacks</BoxTitle>
                                <Box>개인 프로젝트는 주로 <b>React</b>를 기반으로 개발하고 있으며<br/> <b>Recoil</b> , <b>Graph QL</b> , <b>Next.js</b> 등 다양한 기술을 경험하며 확장성을 넓히고 있습니다.
                                    css 애니메이션을 사용한 인터랙티브한 모션에 자신 있고 최근 <b>이미지 최적화</b>와 <b>Typescirpt</b> 에 관심을 가지고 공부하고 있습니다.</Box>
                            </Right>
                        
                        </Section>
                        <Section>
                            <Full
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="100"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                            >
                                <BoxTitle>Works</BoxTitle>
                                <List>
                                    {itemData.map((item)=> 
                                        <Item key={item.id}  
                                            {...item}
                                        />
                                    ) }
                                </List>
                                
                            </Full>
                        </Section>
                        <Footer>Developed by @Sienna Park</Footer> 
                    </SectionWrap>
                }
               
            </MainWrap>
       
       

    )
}
export default Main;

const MainWrap = styled.div`
    width: 100vw; 
    height: auto;
    min-height: 100vh;
    padding: 100px 0 30px 0;
    position: relative; 
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    
`
const SectionWrap = styled.div`
    width: 80vw; 
    /* max-width: calc( 100% - 320px ); */
    @media (max-width: 991px) {
        width: 100vw;
    }
`
const Section = styled.div`
    width: 100%; 
    padding:14vh 4vw; 
    display: flex;
    align-items: stretch;
    position:relative;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        padding:12vh 4vw; 
    }
`
const Left = styled.div`
    flex: 1.5; 
    padding-right: 30px;
    @media (max-width: 600px) {
        padding: 0;
        .box{
            margin-top: 270px;
        }

    }
`
const Right = styled.div`
    flex: 1; 
    padding-left: 30px;
    @media (max-width: 600px) {
        padding: 0;
        .history-list{
            position: absolute;
            top: 180px;
            height: 190px;
            padding-left: 10px;
        }
    }
`
const Full = styled.div`
   flex: 1; 
`
const BoxTitle = styled.h2`
    width: 100%;
    height: 55px;
    font-family: 'TAEBAEKfont', sans-serif !important;
    /* font-family: 'Archivo', sans-serif; */
    font-style: italic ;
    font-size: 2.2vw; 
    letter-spacing: -0.03em;
    @media (max-width: 991px) {
        font-size: 24px; 
    }
`
const Box = styled.div`
    width: 100%;
    background: #fff; 
    border: solid 1px #111111; 
    padding: 35px 40px; 
    line-height: 1.6em;
    b{
        //text-decoration: underline;
        position: relative;
        color: red; 
       
    }
`
const History = styled.ul`
    padding-top: 80px;
    padding-bottom:20px;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    li{
        flex:1;
        padding: 10px 0;
        padding-left: 120px;
        border-left: 3px dotted #000000;
        font-family: TAEBAEKfont, sans-serif !important;
        line-height: 1.4em;
        position:relative;
        @media (max-width: 991px) {
            padding-left: 95px;
        }
        p{
            font-size: 1em;
        }
        span{
            display: block;
            font-size: .75em;
            @media (max-width: 600px) {
                display: inline-block;
                margin-left:10px;
            }
        }
        &.skills{
          
            position: relative;
            border-left: 0;
            //top: 10%;
        }
        &.point{
            border-left:0;
            padding-left: 30px;
            min-height: 30px;
            b{
                position: absolute;
                /* transform: translateX(-55%); */
                font-size: 1.25rem;
                &::before{
                    content:'';
                    width: 9px; 
                    height: 9px; 
                    border-radius: 50%;
                    background: #fff;
                    border: solid 1px; 
                    position:absolute; 
                    left: -34px; 
                    top: 50%;
                    transform: translateY(-80%);
                }
            }
           
        }
        &:last-of-type b::before{
                background: red; 
            }
    }
`
const SkillsBox =  styled.div`
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 60px;
    margin-top: 20px;
   
    @media (max-width: 991px) {
        padding: 50px 15px 0 15px;
        
    }
`
const SkillItem = styled.span<{color: string}>`
    background: ${ props=>props.color};
    padding: 7px 12px; 
    font-family: TAEBAEKfont, sans-serif;
    font-size: 20px;
    border: 1px solid #000;
    margin: 5px;
    @media (max-width: 600px) {
        font-size: 16px;

    }
`
const List = styled.div`
    width:100%;
    padding: 0 0 0  ; 

    @media (max-width: 991px) {
        padding: 0; 
    }
`
const Footer = styled.div`
    width: 100%; 
    text-align: center;
    font-size: 14px; 
    
`