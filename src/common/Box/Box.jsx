import { styled } from "@nextui-org/react";

// export const Box = styled("div", {
//     fontFamily: "$mono",
//     color: "#efe4c9",
//     alignItems: "center",
//     d: "flex",
//     flexDirection: "column",
// });
import React from "react";

const Box = ({children}) => {
    return (
        <div className="flex flex-col items-center text-text-100 font-mono selection:bg-primary-100 selection:text-text-100">{children}</div>
    );
};

export default Box;
