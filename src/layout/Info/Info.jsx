import Section from "@/common/Section/Section";
import React from "react";

const Info = () => {
    return (
        <>
            <Section title="Yo" idSection='yo'>
                <div className='flex flex-row gap-2 items-center'>
                    <div class="container-logo-1 bg-text-100/80">
                        <div class="container-logo-2 bg-primary-100/80">
                            <div class="container-logo-3 w-20 h-20"></div>
                        </div>
                    </div>

                <p class="text">
                    A few years ago, I became interested in developing websites
                    and interfaces. Since then, I have been steadily improving
                    my skills. Now I am developing websites and web applications
                    to order or for myself.
                </p>
                </div>

            </Section>
        </>
    );
};

export default Info;
