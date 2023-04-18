import {DateInput} from "../DateInput";
import {SearchBar} from "../SearchBar";
import {Container, LeftSide} from "./styles";
import Modal from "@/src/components/Modal";

export interface ModalProps {
    title: string;
    buttonTitle: string;
    setTitle: any;
    setDescription: any;
    createCategoryHandle: any;
}

export const TableNavBar = ({title, buttonTitle, setTitle, setDescription, createCategoryHandle}: ModalProps) => (
    <Container>
        <LeftSide>
            <DateInput title="Data Inicial"/>
            <DateInput title="Data Final"/>
            <SearchBar/>
        </LeftSide>
        <Modal title={title} buttonTitle={buttonTitle} setDescription={setDescription} setTitle={setTitle} createCategoryHandle={createCategoryHandle}/>
    </Container>
)
