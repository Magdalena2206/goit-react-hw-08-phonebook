import { Box, Container } from "@mui/material";
import { boxFooterStyle } from "./StyleFooter";

const Footer = () => {
    return (
        <Box component="footer" sx={boxFooterStyle}>
            <Container maxWidth="sm" variant="body2" color="inherit" align="center" sx={{ mt: 4, mb: 2 }}>
                
            </Container>
        </Box>
    )
};

export default Footer;