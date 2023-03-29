import Section from "@/common/Section/Section";
import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
    const skillIco = {
        nextjs: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
        react: "https://cdn.svgporn.com/logos/react.svg",
        git: "https://cdn.svgporn.com/logos/git-icon.svg",
        tailwindcss: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
        sass: "https://cdn.svgporn.com/logos/sass.svg",
        javascript: "https://cdn.svgporn.com/logos/javascript.svg",
    };
    return (
        <>
            <Section title="Habilidades" idSection='habilidades'>
                <div className="w-8/12 flex flex-row flex-wrap gap-x-2 gap-y-4 items-center justify-center">
                    <SkillCard ico={skillIco.nextjs} />
                    <SkillCard ico={skillIco.tailwindcss} />
                    <SkillCard ico={skillIco.git} />
                    <SkillCard ico={skillIco.javascript} />
                    <SkillCard ico={skillIco.react} />
                    <SkillCard ico={skillIco.sass} />
                </div>
            </Section>
        </>
    );
};

export default Skill;
