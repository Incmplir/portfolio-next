import IconGoogle from "@/common/IconGoogle/IconGoogle";
import Logo from "@/common/NavBar/Logo";
import Section from "@/common/Section/Section";
import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FiExternalLink, FiMail } from "react-icons/fi";
import { Link } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";


const Footer = () => {
    function copyToClipboard(text) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log(`Copiado al portapapeles: ${text}`);
            })
            .catch((error) => {
                console.error(`Error al copiar al portapapeles: ${error}`);
            });
    }
    return (
        <>
            <Section idSection='contacto'>
                <div className="flex sm:flex-row flex-col mb-12 sm:mb-auto gap-12 font-mono">
                    <div className="flex flex-col w-64">
                        <Logo />
                        <span>
                            Si te gusta mi trabajo y me necesitas, estaría
                            encantado de hablar contigo.
                        </span>
                    </div>
                    <div>
                        <h3 className="text-primary-100 text-3xl">
                            Contacto
                        </h3>
                        <div className='select-none'>
                            <span
                                className="flex items-center gap-1 group cursor-pointer  
                                active:text-primary-100/50 text-text-100 hover:text-primary-100 "
                                onClick={() =>
                                    copyToClipboard(
                                        "christian.lisantti@gmail.com"
                                    )
                                }
                            >
                                <FiMail/> christian.lisantti@gmail.com
                                <div className="opacity-0 group-hover:opacity-100">
                                <Badge
                                            color="primary"
                                            variant="bordered"
                                            size="sm"
                                        >
                                            copy
                                        </Badge>
                                </div>
                            </span>
                            <Link
                                className="flex items-center gap-1 group text-text-100 hover:text-primary-100"
                                href="https://github.com/Incmplir/"
                                target="_blank"
                            >
                                <GoMarkGithub /> @Incmplir
                                <div className="opacity-0 group-hover:opacity-100">
                                    <FiExternalLink />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Footer;
