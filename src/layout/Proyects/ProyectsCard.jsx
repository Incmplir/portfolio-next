import React from "react";
import { Card, Col, Text, Image, Row, Button } from "@nextui-org/react";
import { ProyectsData } from "./ProyectsData";
import { Badge } from "@nextui-org/react";
import Link from "next/link";

const ProyectsCard = ({ number }) => {
    const badgeArray = ProyectsData[number].badge;
    const dirPath = ProyectsData[number].title.toLowerCase().replace(/\s/g, '-')
    dirPath.toLowerCase().replace(/\s/g, '-')
    return (
        <>
            <div className='w-[400px] sm:w-[400px] h-[340px] sm:h-[340px]'>
                <Card
                    variant="flat"
                    css={{
                        backgroundColor: "#32312e",
                        border: "none",
                        w: "100%",
                        h: "100%",
                    }}
                >
                    <Card.Header /* css={{ position: "absolute", zIndex: 1, botton: 5 }} */
                    >
                        <div className="inset-0 z-10 absolute | flex items-center flex-col justify-center w-full h-full content-center ">
                            <span className="text-primary-100 text-3xl font-black mb-4">
                                {ProyectsData[number].title}
                            </span>
                            <div className="flex flex-row flex-wrap items-center justify-center w-full gap-1">
                                {badgeArray.map((badge) => (
                                    <div key={badge} className="select-none">
                                        <Badge
                                            color="primary"
                                            variant="bordered"
                                            size="sm"
                                        >
                                            {badge}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                            <div className="border border-primary-100/50 w-6/12 my-2"></div>
                            <p className="w-7/12 leading-tight mb-4">
                                {ProyectsData[number].description}
                            </p>
                            <div /* className="group" */>
                                
                            <Button
                                    as={Link}
                                    href={`/Proyectos/${dirPath}`}
                                    color="primary"
                                    auto
                                    ghost
                                >
                                    Ver más
                                </Button>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Image
                    showSkeleton
                        src={ProyectsData[number].bgProyect}
                        className="brightness-50 grayscale opacity-25 inset-0 absolute  group-hover:brightness-100 group-hover:grayscale-0 group-hover:opacity-100  transition-all duration-500 ease-in-out"
                        objectFit="cover"
                        width="100%"
                        height={340}
                        alt={ProyectsData[number].title}
                    />
                </Card>
            </div>
        </>
    );
};

export default ProyectsCard;
