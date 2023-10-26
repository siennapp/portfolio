
interface InitialModalProps{
    modalVisible: boolean;
    content: {};
    imgSrc: string;
}

type ModalAction =
    | ReturnType<typeof showModal>
    | ReturnType<typeof hideModal>;


/** 액션 */
export const SHOW_MODAL = 'SHOW_MODAL' as const;
export const HIDE_MODAL = 'HIDE_MODAL' as const;

export const showModal = ({ content,imgSrc}: InitialModalProps ) => ({
  type: SHOW_MODAL,
  content,
  imgSrc
});

export const hideModal = () => ({ type: HIDE_MODAL });

const initialState: InitialModalProps = {
    modalVisible: false,
    content: {},
    imgSrc:''
};

function modalReducer (state: InitialModalProps = initialState, action: ModalAction){

    switch (action.type) {
        case SHOW_MODAL:
            return { 
                modalVisible: true,
                content: action.content,
                imgSrc: action.imgSrc
             };
        case HIDE_MODAL:
            return { 
                modalVisible: false,
                content: {},
                imgSrc: ''
             };
        default:
            return state;
  }
};

export default modalReducer;
export type rootState = ReturnType<typeof modalReducer>