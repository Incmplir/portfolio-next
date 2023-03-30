import { useState, useEffect } from "react";
import { Navbar, Text, Avatar, Dropdown, Item } from "@nextui-org/react";
import Link from "next/link";
import { Loading } from "@nextui-org/react";
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
    /* Clima */
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeather() {
            const res = await fetch(
                "https://api.openweathermap.org/data/2.5/weather?lat=-33.5538400&lon=-71.6076100&appid=088a8dd3ffd2fb73650655f8c113f5d8"
            );
            const data = await res.json();
            setWeather(data);
            setLoading(false);
        }

        fetchWeather();
    }, []);
    /* casos de temperatura */
    const temperature = loading ? null : Math.round(weather.main.temp - 273.15)
    let category;

    if (temperature >= -5 && temperature <= 1) {
        category = "cubito de hielo";
    } else if (temperature >= 2 && temperature <= 8) {
        category = "congelado";
    } else if (temperature >= 9 && temperature <= 14) {
        category = "friesito";
    } else if (temperature >= 15 && temperature <= 20) {
        category = "calido";
    } else {
        category = "infiernal";
    }

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
                        <Dropdown placement="bottom-right">
                            <Navbar.Item>
                                <Dropdown.Trigger>
                                    <Avatar
                                        className="cursor-pointer"
                                        placement="bottom-right"
                                        bordered
                                        color="primary"
                                        size="md"
                                        src={
                                            "https://github.com/Incmplir/landing-page/blob/main/gentlemanFrogOrange.webp?raw=true"
                                        }
                                    />
                                </Dropdown.Trigger>
                            </Navbar.Item>
                            <Dropdown.Menu
                                aria-label="User menu actions"
                                color="warning"
                                onAction={(actionKey) =>
                                    console.log({ actionKey })
                                }
                            >
                                <Dropdown.Item
                                    key="profile"
                                    css={{ height: "100%" }}
                                >
                                    <h1 className="text-3xl font-bold">
                                        <span className="text-xl font-medium">
                                            Acá en mi
                                        </span>{" "}
                                        {loading ? (
                                            <Loading type="default" />
                                        ) : (
                                            weather.name
                                        )}
                                    </h1>
                                    <p className="text-xl">
                                        {loading ? (
                                            <Loading type="points" />
                                        ) : (
                                            `${Math.round(
                                                weather.main.temp - 273.15
                                            )}°C`
                                        )}
                                    </p>
                                </Dropdown.Item>
                                <Dropdown.Item key="settings" withDivider>
                                    Hoy hace un día... {category}.
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Content>
                    <Navbar.Collapse>
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
