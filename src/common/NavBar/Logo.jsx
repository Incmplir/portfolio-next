import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <>
        <Link href='/'>
            <span className="text-primary-100 font-black text-xl">
                {`<C_hristian.`}
                <span className="text-text-100">{`Lisantti/>`}</span>
            </span>
        </Link>
        </>
    );
};

export default Logo;
