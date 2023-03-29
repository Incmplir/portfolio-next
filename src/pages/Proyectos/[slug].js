// pages/proyectos/[slug].js
import React, { useState } from "react";

import { ProyectsData } from "../../layout/Proyects/ProyectsData";
import { Image, Badge, Link } from "@nextui-org/react";

import Body from "@/common/Body/Body";
import Section from "@/common/Section/Section";

export default function ProyectoPage({ proyecto }) {
    const [currentImage, setCurrentImage] = useState(proyecto.bgProyect);
    const [activeButtonIndex, setActiveButtonIndex] = useState(
        proyecto.bgProyect
    );
    const handleImageChange = (imageUrl, buttonIndex) => {
        setCurrentImage(imageUrl);
        setActiveButtonIndex(buttonIndex);
    };
    /*  */
    /*  */
    /*  */
    // const paragraph = proyecto.parraph;
    // const sentences = paragraph.split(". ");
    // const formattedParagraph = sentences.join(".\n");
    return (
        <>
            <Body title={`Proyecto ${proyecto.title}`}>
                <div className="flex sm:flex-row flex-col  justify-evenly w-screen">
                    <div className="flex flex-col sm:w-7/12 w-full">
                        <blockquote className="z-50 text-text-100/80 bg-bg-200 sm:hidden flex">
                            <h2 className="text-primary-100 text-3xl ">
                                {proyecto.title}
                            </h2>
                        </blockquote>
                        <blockquote className="blockquote rounded-t-2xl rounded-b-none text-text-100/80 bg-bg-100 z-0">
                            <div className="container-logo-1 bg-text-100/80 ">
                                <div className="container-logo-2 bg-primary-100/80 ">
                                    <div className="container-logo-3 ">
                                        <Image
                                            className=""
                                            src={currentImage}
                                            alt={proyecto.title}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* overflow-x-scroll */}
                        </blockquote>
                        <blockquote className="z-50 gap-x-2 flex flex-row rounded-t-none rounded-b-2xl justify-evenly | overflow-x-scroll snap-x snap-mandatory blockquote text-text-100/80 bg-bg-100">
                            {proyecto.bgProyect.map((bgProyect) => (
                                <div
                                    className={`bg-text-100/80 | snap-center snap-always ${
                                        currentImage === bgProyect
                                            ? "transition-all container-bg-3"
                                            : ""
                                    }`}
                                >
                                    <Image
                                        onClick={() =>
                                            handleImageChange(bgProyect)
                                        }
                                        showSkeleton
                                        className={`transition-all h-auto w-24 m-auto cursor-pointer hover:brightness-50 ${
                                            currentImage === bgProyect
                                                ? "transition-all frog"
                                                : ""
                                        }`}
                                        src={bgProyect}
                                        alt="hola"
                                    />
                                </div>
                            ))}
                        </blockquote>
                        <div className="flex flex-col gap-2 mt-4 z-50">
                            <blockquote className="blockquote text-text-100/80 bg-bg-100 flex flex-col mt-4 ">
                                <h2 className="text-primary-100 text-2xl">
                                    Enlaces de interes
                                </h2>
                                <Link
                                    target="_blank"
                                    isExternal
                                    href={proyecto.links[0]}
                                    color="text"
                                    animated
                                    block
                                >
                                    Ir a la Demo
                                </Link>
                                <Link
                                    target="_blank"
                                    isExternal
                                    href={proyecto.links[1]}
                                    color="text"
                                    animated
                                    block
                                >
                                    Ir al Repositorio
                                </Link>
                            </blockquote>
                        </div>
                    </div>
                    {/* Izquierda */}
                    <div className="flex flex-col sm:w-4/12 w-full ">
                        <blockquote className="text-primary-100 bg-bg-200 text-3xl sm:hidden flex">
                            Descripción
                        </blockquote>
                        <blockquote className="text-primary-100 bg-bg-200 text-3xl hidden sm:flex">
                            {proyecto.title}
                        </blockquote>
                        {/*  */}
                        {/*  */}
                        <blockquote className="blockquote text-text-100/80 bg-bg-100">
                            <div className="flex flex-row flex-wrap gap-1 select-none">
                                {proyecto.badge.map((tag) => (
                                    <Badge
                                        key={tag}
                                        color="primary"
                                        variant="bordered"
                                        size="sm"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <p>{proyecto.description}</p>
                        </blockquote>
                        <p className="leading-relaxed px-4">
                            {proyecto.parraph
                                .split(".")
                                .map((sentence, index) => (
                                    <span key={index}>
                                        {sentence.trim()}.
                                        <br />
                                    </span>
                                ))}
                        </p>
                    </div>
                </div>
            </Body>
        </>
    );
}

export async function getStaticPaths() {
    const paths = ProyectsData.map((proyecto) => ({
        params: { slug: proyecto.title.toLowerCase().replace(/\s/g, "-") },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = params.slug.replace(/-/g, " ");
    const proyecto = ProyectsData.find((p) => p.title.toLowerCase() === slug);

    return { props: { proyecto } };
}
