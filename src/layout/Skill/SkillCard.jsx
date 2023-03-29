import React from "react";
import { Card, Col, Text } from "@nextui-org/react";
const SkillCard = ({ ico }) => {
    return (
        <>
            <Card
                variant="flat"
                css={{
                    backgroundColor: "#32312e",
                    border: "none",
                    mw: "100px",
                    mh: "100px",
                }}
            >
                <Card.Body>
                    <Card.Image
                        src={ico}
                        objectFit="contain"
                        width="100%"
                        height={340}
                        alt="Card image background"
                    />
                </Card.Body>
            </Card>
        </>
    );
};

export default SkillCard;
