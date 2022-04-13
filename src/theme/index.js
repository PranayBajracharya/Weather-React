import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: {
            default: '#282c34',
        },
        secondary: {
            default: '#eee'
        }
    },
    components: {
        Button: {
            variants: {
                solid: {
                    backgroundColor: '#282c34',
                    _hover: {
                        backgroundColor: '#121417',
                    },
                    _active: {
                        backgroundColor: '#121417',
                    },
                    _focus: {
                        backgroundColor: '#121417',
                    }
                },
                active: {
                    backgroundColor: '#121417',
                    _hover: {
                        backgroundColor: '#121417',
                    },
                    _active: {
                        backgroundColor: '#121417',
                    },
                    _focus: {
                        backgroundColor: '#121417',
                    }
                },
            }
        }
    }
});

export default theme;