export interface ItemProps {
    id: number;
    name: string;
    thumbImg: string;
    contentImg: string;
    skills: string[];
    notionId: string;
}
export type modalProps = {
    modalVisible: boolean;
    content: {};
    imgSrc: string;
}