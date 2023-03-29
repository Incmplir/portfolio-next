import Section from "@/common/Section/Section";
import React from "react";
import ProyectsCard from "./ProyectsCard";

const Proyects = () => {
    return (
        <>
            <Section title="Proyectos" idSection='proyectos'>
                <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-4 items-center justify-center">
                    <ProyectsCard number='1'/>
                    <ProyectsCard number='2'/>
                    <ProyectsCard number='3'/>
                    <ProyectsCard number='0'/>
                </div>
            </Section>
        </>
    );
};

export default Proyects;
