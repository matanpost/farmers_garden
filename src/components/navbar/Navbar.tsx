import { FC, PropsWithChildren, } from "react"
import styles from './Navbar.module.css'
import * as data from './links.json';
import logo from '../../assets/31B1EE66-1209-46B6-81D5-30F7F735106C.png'
import CartInfo from "../cartInfo/CartIinfo";

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;
type NavbarProps = PropsWithChildren

type Link = {
    label: string;
    href: string;
};

const Links: FC<{ links: Link[] }> = ({ links }) => {

    console.log('pages links: ', links);

    return (
        <ul className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <li key={link.label} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
};





const Navbar: FC<NavbarProps> = () => {

    return (
        <nav className={true ? styles.nav : ''}>
            <img className={styles.logo} src={logo} alt="logo" />
            <Links links={links} />

            <CartInfo />

        </nav>

    )
}

export default Navbar