import {Container} from "@/src/styles/global";
import {TableContainer} from "@/src/components/TableContainer";
import {TableDetails} from "@/src/components/TableDetails";
import {TableLine} from "@/src/components/TableLine";
import {useEffect, useState} from "react";
import {TableNavBar} from "@/src/components/TableNavBar";
import api from "@/src/services/api";
import {toast} from "react-toastify";

const teste = [
    {
        title: "Titulo 1",
        description: "Descrição 1"
    },
    {
        title: "Titulo 2",
        description: "Descrição 2"
    },
    {
        title: "Titulo 3",
        description: "Descrição 3"
    },
];

const ReceiptCategories = () => {
    const [userId, setUserId] = useState<string | null>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        const user_id = localStorage.getItem("@gofinance:user_id")
        setUserId(user_id)
    }, []);
    const createCategoryHandle = async () => {
        try {
            await api.post('/category', {
                user_id: Number(userId),
                title,
                description,
                type: 'receipt'
            })
            toast.success('Categoria criada com sucesso!')
        } catch {
            toast.error('Erro ao criar categoria!')
        }
    }
    return (
        <Container>
            <TableContainer>
                <TableNavBar title="Nova categoria" buttonTitle="Criar categoria" setTitle={setTitle}
                             setDescription={setDescription} createCategoryHandle={createCategoryHandle}/>
                <TableDetails>
                    {teste.map((test) => (
                        <TableLine
                            key={test.title}
                            title={test.title}
                            description={test.description}
                        />
                    ))}
                </TableDetails>
            </TableContainer>
        </Container>
    );
}

export default ReceiptCategories;