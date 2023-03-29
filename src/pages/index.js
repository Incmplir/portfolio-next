import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@nextui-org/react/button";
import Body from "@/common/Body/Body";
import Jumbotron from "@/layout/Jumbotron/Jumbotron";
import BgAnimation from "@/common/BgAnimation/BgAnimation";
import Info from "@/layout/Info/Info";
import Skill from "@/layout/Skill/Skill";
import Proyects from "@/layout/Proyects/Proyects";
import Footer from "@/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Body
                title="Desarrollador Frontend"
            >
                <BgAnimation/>
                <Jumbotron/>
                <Info/>
                <Skill/>
                <Proyects/>
                {/* <Footer/> */}
            </Body>
        </>
    );
}
