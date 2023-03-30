// import Image from "next/image";
import { Image } from "@nextui-org/react";
import React from "react";

const Jumbotron = () => {
    return (
        <>
            <section className="flex sm:flex-row flex-col w-11/12 h-[80vh] z-10 items-center justify-evenly sm:my-12 my-6">
                <div className="flex flex-col">
                    <h1 className="text-primary-100 text-5xl font-black">
                        Christian Lisantti
                    </h1>
                    <h2 className="text-2xl">Desarrollador Frontend</h2>
                    <p className="">
                        Desarrollador Frontend buscando ideas y proyectos para
                        mi mismo u otros.
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="container-logo-1 bg-text-100/80">
                        <div className="container-logo-2 bg-primary-100/80">
                            <div className="container-logo-3">
                                <Image
                                    priority={true}
                                    className="frog h-auto w-11/12"
                                    src="https://github.com/Incmplir/landing-page/blob/main/gentlemanFrogOrange.webp?raw=true"
                                ></Image>
                            </div>
                        </div>
                    </div>
                    <figure className="text-end z-50 -mt-28">
                        <blockquote className="blockquote text-text-100/80 bg-bg-100">
                            <p>
                                A veces quisiera tirar la toalla, pero luego...
                                ¿Con que me seco?
                            </p>
                            <figcaption className="blockquote-footer text-primary-100">
                                Frases que Nadie dijo{" "}
                                <cite title="Source Title">nunca</cite>
                            </figcaption>
                        </blockquote>
                    </figure>
                </div>
            </section>
        </>
    );
};

export default Jumbotron;
