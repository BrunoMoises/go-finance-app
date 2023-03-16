import { Card } from "../components/Card";
import { Chart } from "../components/Chart";
import { Container, RightSide } from "../styles/home/home.styles";

const cardData = [
  {
    title: "Saldo a pagar",
    value: "120,75"
  },
  {
    title: "Saldo a receber",
    value: "120,75"
  },
  {
    title: "Saldo total",
    value: "120,75"
  },
];

const Home = () => (
  <Container>
    <Chart />
    <RightSide>
      {cardData.map(card => (
        <Card key={card.title} title={card.title} value={card.value} />
      ))}
      <button>Download</button>
    </RightSide>
  </Container>
);

export default Home;