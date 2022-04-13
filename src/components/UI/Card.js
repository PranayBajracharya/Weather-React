import { Stack } from "@chakra-ui/react";

const Card = (props) => {
    return (
        <Stack
            bg="primary.default"
            borderRadius="14px"
            m="10px"
            p="20px"
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.25)"
        >
            {props.children}
        </Stack>
    );
};

export default Card;
