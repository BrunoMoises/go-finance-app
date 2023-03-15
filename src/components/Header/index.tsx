import { Container, MenuItens } from "./styles"
import logo from '../../assets/logo.png'
import debit from '../../assets/debit.png'
import receipt from '../../assets/receipt.png'
import debitCategories from '../../assets/debitCategories.png'
import receiptCategories from '../../assets/receiptCategories.png'
import Link from "next/link"
import Image from "next/image"

const menuItens = [
    {
        href: "/Debit",
        src: debit,
        alt: "Debit"
    },
    {
        href: "/Receipt",
        src: receipt,
        alt: "Receipt"
    },
    {
        href: "/DebitCategories",
        src: debitCategories,
        alt: "DebitCategories"
    },
    {
        href: "/ReceiptCategories",
        src: receiptCategories,
        alt: "ReceiptCategories"
    }
]

export const Header = () => {
    return (
        <Container>
            <Link href="/">
                <Image src={logo} alt="GoFinance" width={60} />
            </Link>
            <MenuItens>
                {menuItens.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <Image src={item.src} alt={item.alt} width={41} />
                    </Link>
                ))}
            </MenuItens>
        </Container>
    )
}
