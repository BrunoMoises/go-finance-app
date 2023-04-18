import {DateInput} from "../DateInput";
import {SearchBar} from "../SearchBar";
import {Container, LeftSide} from "./styles";
import Modal from "@/src/components/Modal";
import {Dispatch, SetStateAction} from "react";

export interface ModalProps {
    title: string;
    buttonTitle: string;
    setTitle: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
    createCategoryHandle: () => Promise<void>;
}

export const TableNavBar = ({title, buttonTitle, setTitle, setDescription, createCategoryHandle}: ModalProps) => (
    <Container>
        <LeftSide>
            <DateInput title="Data Inicial"/>
            <DateInput title="Data Final"/>
            <SearchBar/>
        </LeftSide>
        <Modal title={title} buttonTitle={buttonTitle} setDescription={setDescription} setTitle={setTitle}
               createCategoryHandle={createCategoryHandle}/>
    </Container>
)
