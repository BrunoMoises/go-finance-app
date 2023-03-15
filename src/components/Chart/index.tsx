import React from 'react'
import { VictoryPie } from 'victory'
import { Container, Subtitle } from './style'

const subtitleLabel = [{ color: "tomato", label: "A pagar" }, { color: "orange", label: "A receber" }]

export const Chart = () => {
    return (
        <Container>
            <VictoryPie
                data={[{ x: "A pagar", y: 20 }, { x: "A receber", y: 80 }]}
                innerRadius={100}
                colorScale={["tomato", "orange"]}
                padAngle={5}
                style={{ labels: { display: "none" } }}
            />
            {subtitleLabel.map(subtitle => (
                <Subtitle key={subtitle.color} color={subtitle.color}>
                    <div />
                    {subtitle.label}
                </Subtitle>
            ))}
        </Container>
    )
}
