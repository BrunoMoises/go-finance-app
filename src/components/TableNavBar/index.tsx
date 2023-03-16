import { DateInput } from "../DateInput";
import { SearchBar } from "../SearchBar";
import { Container, LeftSide } from "./styles";

export const TableNavBar = () => (
    <Container>
        <LeftSide>
            <DateInput title="Data Inicial" />
            <DateInput title="Data Final" />
            <SearchBar />
        </LeftSide>
        <button>Adicionar</button>
    </Container>
)
