import React from "react";
import { Navbar, Text, Avatar, Dropdown, Item } from "@nextui-org/react";
import Link from "next/link";

import Logo from "./Logo";
import Box from "../Box/Box";
import { useRouter } from "next/router";
const NavBar = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    let yo;
    let habilidades;
    let proyectos;
    let contacto;
    switch (currentPath) {
        case "/":
            yo = "#yo";
            habilidades = "#habilidades";
            proyectos = "#proyectos";
            contacto = "#contacto";
            break;
        default:
            yo = "/#yo";
            habilidades = "/#habilidades";
            proyectos = "/#proyectos";
            contacto = "/#contacto";
            break;
    }
    // const collapseItems = ["Yo", "Habilidades", "Proyectos", "Contacto"];
    // const collapseLinks = [yo, habilidades, proyectos, contacto];
    const collapseLinks = [
        {
            name: ["Yo", "Habilidades", "Proyectos", "Contacto"],
            nameLinks: [yo, habilidades, proyectos, contacto],
        },
    ];
    const lapseLi = collapseLinks[0].name;
    return (
        <>
            <Box>
                <Navbar isBordered variant="sticky">
                    <Navbar.Toggle showIn="xs" />
                    <Navbar.Brand
                        css={{
                            "@xs": {
                                w: "12%",
                            },
                        }}
                    >
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Content
                        enableCursorHighlight
                        activeColor="primary"
                        hideIn="xs"
                        variant="default"
                    >
                        <Navbar.Item as={Link} href={yo}>
                            Yo
                        </Navbar.Item>
                        <Navbar.Item as={Link} href={habilidades}>
                            Habilidades
                        </Navbar.Item>
                        <Navbar.Item as={Link} href={proyectos}>
                            Proyectos
                        </Navbar.Item>
                        <Navbar.Item as={Link} href={contacto}>
                            Contacto
                        </Navbar.Item>
                    </Navbar.Content>
                    <Navbar.Content
                        css={{
                            "@xs": {
                                w: "12%",
                                jc: "flex-end",
                            },
                        }}
                    >
                        <Avatar
                            placement="bottom-right"
                            bordered
                            color="primary"
                            size="md"
                            src={
                                "https://github.com/Incmplir/landing-page/blob/main/gentlemanFrogOrange.webp?raw=true"
                            }
                        />
                    </Navbar.Content>
                    <Navbar.Collapse >
                        {collapseLinks[0].name.map((name, index) => (
                            <Navbar.CollapseItem
                                key={index}
                                activeColor="primary"
                                css={{
                                    d: "flex",
                                    flexDirection: "column",
                                    color:
                                        index === collapseLinks.length - 1
                                            ? "$error"
                                            : "",
                                }}
                                isActive={index === 2}
                            >
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href={collapseLinks[0].nameLinks[index]}
                                >
                                    {name}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>
                </Navbar>
            </Box>
        </>
    );
};

export default NavBar;
