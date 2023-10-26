import { useSelector, shallowEqual } from "react-redux";
import OverlayModal from "../components/OverlayModal";
import { rootState } from "../redux";

function Modal(){
    
    const  {modalVisible, content,imgSrc} = useSelector( (state: rootState) =>({
        modalVisible: state.modalVisible,
        content: state.content,
        imgSrc: state.imgSrc
    }), shallowEqual)

    return(
        <OverlayModal 
            modalVisible={modalVisible}
            content={content}
            imgSrc={imgSrc}
        />
    )
}
export default Modal; 