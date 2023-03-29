import React from "react";

const Section = ({ children, title, idSection }) => {
    return (
        <>
            <section className="flex w-11/12 flex-col items-center justify-center my-6" id={idSection}>
                <h3 className="text-primary-100 text-3xl my-4">{title}</h3>

                {children}
            </section>
        </>
    );
};

export default Section;
