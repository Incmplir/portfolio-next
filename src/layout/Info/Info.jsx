import Section from "@/common/Section/Section";
import React from "react";

const Info = () => {
    return (
        <>
            <Section title="Yo" idSection="yo">
                <div className="flex flex-row gap-2 items-center">
                    <div class="container-logo-1 bg-text-100/80">
                        <div class="container-logo-2 bg-primary-100/80">
                            <div class="container-logo-3 w-20 h-20"></div>
                        </div>
                    </div>
                    <p class="text">
                        Hace un tiempo, me interesé en el desarrollo web e
                        interfaces. Desde entonces, he ido mejorando
                        constantemente mis habilidades. Ahora estoy
                        desarrollando sitios web y aplicaciones web por encargo
                        o por diversión.
                    </p>
                </div>
            </Section>
        </>
    );
};

export default Info;
