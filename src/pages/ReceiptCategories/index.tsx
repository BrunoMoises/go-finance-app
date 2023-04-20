import {Container} from "@/src/styles/global";
import {TableContainer} from "@/src/components/TableContainer";
import {TableDetails} from "@/src/components/TableDetails";
import {TableLine} from "@/src/components/TableLine";
import {useCallback, useEffect, useState} from "react";
import {TableNavBar} from "@/src/components/TableNavBar";
import api from "@/src/services/api";
import {toast} from "react-toastify";
import {ReceiptCategoriesType} from "@/src/types/categories";

const ReceiptCategories = () => {
    const [userId, setUserId] = useState<string | null>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<ReceiptCategoriesType[]>([]);
    const listReceiptCategories = useCallback(
        async (id: string | null | undefined) => {
            try {
                setLoading(true)
                const response = await api.get(`/category?user_id=${id}&type=receipt`)
                setCategories(response.data)
            } catch {
                toast.error('Erro ao buscar categorias!')
            } finally {
                setLoading(false)
            }
        }, [])
    useEffect(() => {
        const user_id = localStorage.getItem("@gofinance:user_id")
        setUserId(user_id)
        listReceiptCategories(user_id)
    }, [userId, listReceiptCategories]);
    const createCategoryHandle = useCallback(async () => {
        try {
            await api.post('/category', {
                user_id: Number(userId),
                title,
                description,
                type: 'receipt'
            })
            listReceiptCategories(userId)
            toast.success('Categoria criada com sucesso!')
        } catch {
            toast.error('Erro ao criar categoria!')
        }
    }, [title, description, userId, listReceiptCategories])
    if (loading) return <div>Carregando...</div>
    return (
        <Container>
            <TableContainer>
                <TableNavBar title="Nova categoria" buttonTitle="Criar categoria" setTitle={setTitle}
                             setDescription={setDescription} createCategoryHandle={createCategoryHandle}/>
                <TableDetails>
                    {categories.map((category) => (
                        <TableLine
                            key={category.id}
                            title={category.title}
                            description={category.description}
                        />
                    ))}
                </TableDetails>
            </TableContainer>
        </Container>
    );
}

export default ReceiptCategories;