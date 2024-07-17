import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";


const AboutInfo = ({children}) => {
    return (
        <Typography variant="body1" color="white" textAlign={"left"}
            sx={{ fontSize:"13px" }}
        >
           {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "error.main",
                }}
            />
        </Typography>
    )
}
export default AboutInfo;