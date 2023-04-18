import {Container, OutsideContainer} from "@/src/components/Modal/styles";
import React, {useRef, useState} from "react";
import {ModalProps} from "@/src/components/TableNavBar";

const Modal = ({title, buttonTitle, setTitle, setDescription, createCategoryHandle}: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const outsideContainerRef = useRef(null);
    const openModal = () => setIsOpen(true)
    const closeModal = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target == outsideContainerRef.current) {
            setIsOpen(false)
        }
    }
    const submit = async () => {
        await createCategoryHandle()
        setIsOpen(false)
    }
    return <>
        <button onClick={openModal}>Adicionar</button>
        {isOpen && <OutsideContainer onClick={closeModal} ref={outsideContainerRef}>
            <Container>
                <h2>{title}</h2>
                <input type="text" placeholder="Titulo" onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)}/>
                <button onClick={submit}>{buttonTitle}</button>
            </Container>
        </OutsideContainer>}
    </>;
}

export default Modal;