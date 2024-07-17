import {Box, Chip, LinearProgress, Typography } from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
    return (
        <>
            
            <Box
                sx={{ 
                    display: "grid",
                    alignItems: "center",
                    gridTemplateColumns: "10% 65% 30% ",
                    textAlign: "center",
                    mb:2 }}>

                <Box sx={{ minWidth: 35, }}>
                    <Typography variant="body2" color="white">
                        {Math.round(value)}%
                    </Typography>
                </Box>

                <Box sx={{ width: "100%" }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{
                            height: 6,
                            borderRadius: 2,
                        }}
                    />
                </Box>
                <Box>
                    <Chip 
                        icon={ <Box component="img" src={icon} sx={{ height: 20 }} /> } 
                        color={color}
                        label={name}
                        sx={{ color: "#000", p: 2 }}
                    />
                </Box>
            </Box>
        </>
    )
}
export default Skill;