import styled, { keyframes } from "styled-components"
import { NotionRenderer } from "react-notion";
import 'react-notion/src/styles.css';
import {AiOutlineClose} from 'react-icons/ai';
import  { hideModal } from "../redux";
import {  useDispatch } from "react-redux";
import { useState } from "react";
import { modalProps } from "../common/types";




function OverlayModal({modalVisible,content, imgSrc}:modalProps){
    const [imgLoading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const onClick = (event:React.MouseEvent<HTMLElement>):void => {
        dispatch(hideModal())
    }
    const onLoad = () =>{
        setLoading(true)
    }
return (
        <>
          {modalVisible &&
            <Overlay>
                <Modal>
                    <CloseModal onClick={onClick}><AiOutlineClose size="30" color="#000000"/></CloseModal>
                    <ModalContent>
                        
                        <ImgBox bg={imgSrc}> 
                            <img onLoad={onLoad} width={940} src={`https://siennapp.github.io/static/${imgSrc}`} alt={imgSrc} />
                        </ImgBox>
                        {imgLoading? (
                            <ModalScroll>
                                <div className="content">
                                    <ModalBody>
                                        {content&&<NotionRenderer blockMap={content} />}
                                    </ModalBody>
                                </div>
                            </ModalScroll>
                        ): <Spinner/>}
                    </ModalContent>
                </Modal>  
            </Overlay>
          }
         </>
                
        

)
}

const Overlay = styled.div`
    width: 100vw; 
    height: 100vh; 
    position: fixed; 
    left: 0; top: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.6);
    z-index: 110;
    cursor: pointer;

    @media (max-width: 480px) {
       align-items: flex-end;
    }

`
const CloseModal = styled.div`
    position: absolute;
    top: -23px; right: 20px;
    width: 46px; 
    height: 46px; 
    z-index: 1;
    background: #ffffff; 
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ModalSideOpen = keyframes`
    0%{
        transform: scaleX(0);
    }
    100%{
        transform: scaleX(100%);
    }
`
const ModalUpOpen = keyframes`
    0%{
        transform: scaleY(0);
    }
    100%{
        transform: scaleY(100%);
    }
`
const Modal = styled.div`
    width: 940px;
    height: 600px;
    position: relative; 
    border: solid 1px #000;
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.2);
    cursor: auto;
    animation: ${ModalSideOpen} .2s .2s  forwards;
    transform-origin: right center;
    transform: scale(0);
    @media (max-width: 992px) {
        width: 740px;
        height: 500px;
    }
    @media (max-width: 768px) {
        width: 94vw;
        height: 64vw;
        flex-direction: column;
        transform-origin: center bottom;
        animation: ${ModalUpOpen} .2s .2s  forwards;
    }
    @media (max-width: 600px) {
        height: 70vh;
        transform-origin: center bottom;
        animation: ${ModalSideOpen} .2s 0s  forwards;
    }
    @media (max-width: 480px) {
        width: 100vw;
        height: calc( 100vh - 90px );
        border-radius: 0;
    }
`


const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: stretch;
    overflow: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 480px) {
        border-radius: 0;
    }
`


const ModalScroll = styled.div`
    
    flex-grow: 1;
    position: relative; 
    padding: 8vh 15vw; 
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 992px) {
        padding: 10vh 5vw; 
    }
    @media (max-width: 768px) {
        .content{
        }
    }
    @media (max-width:480px) {
        padding: 0;
        .content{
            border-radius: 0;
        }
    }
`
const ModalBody = styled.div`
    padding: 0 30px; 
    @media (max-width:480px) {
        padding: 0 15px;
    }
    .notion{
        font-size: 14px;
    }
`
const ImgScale = keyframes`
    0%{
        width: 100%;
        min-width: 100%;
    }
    100%{
        width: 280px;
        min-width: 280px;
    }

`
const ImgScaleMidium = keyframes`
    0%{
        width: 100%;
        min-width: 100%;
    }
    100%{
        width: 225px;
        min-width: 225px;
    }

`
const ImgScaleSmall = keyframes`
    0%{
        width: 100%;
        min-width: 100%;
        min-height: 100%;
        height: 100%;
    }
    100%{
        width: 100%;
        min-width: 100%;
        min-height: 0;
        height: 0;

    }

`
// const ImgBox = styled.img`


const ImgBox = styled.div<{bg: string}>`
    width: 100%;
    min-width: 100%; 
    //background-image: url( https://siennapp.github.io/static/${(props)=> props.bg }); 
    background-size: 940px auto;
    background-position: left top; 
    left: 0; top: 0; 
    position: relative; 
   //animation: ${ImgScale} .3s 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;
    &::after{
        content:'';
        width: 100%; 
        height: 100%; 
        background: rgba(0,0,0, 0.2);
        position: absolute; 
        left: 0; top: 0; 
    }
    @media (max-width: 991px) {
        background-size: 740px auto;
        animation: ${ImgScaleMidium} .3s 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;
        
    }
    @media (max-width: 768px) {
        min-height: 100%;
        background-size: 100%;
        animation: ${ImgScaleSmall} .3s 2s cubic-bezier(0.550, 0.085, 0.680, 0.530)  forwards;
    }
    @media (max-width: 600px) {
        display: none;
        animation: ${ImgScaleSmall} .3s 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;
    }
`
const spin = keyframes`
    0% {transform:rotate(90deg); }
    50% {
      
      transform:rotate(135deg);
    }
    100% {
      transform:rotate(270deg);
    }

` 
const Spinner = styled.div`
    width: 40px; 
    height: 40px; 
    border-radius: 50%;
    border: 5px solid rgba(255,255,255,.6);
    border-right-color: transparent;
    position: absolute; 
    left: 50%; top: 50%;
    margin-left: -20px; 
    margin-top: -20px;
    animation: ${spin} .2s ease-in infinite;
    z-index: 1;
    
`

export default OverlayModal;

