import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Box, Drawer, Fab } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import DrawerContent from "./ui/DrawerContent";

const Sidebar = ({ value, handleChange }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
   
    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{ 
                backgroundColor: grey[900],
                height: "100vh",
                overflowY: "scroll",
                overflowX: "hidden",
             }}
        >
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none",
                        
                    },
                     position: "absolute",
                }}
            >
                <Fab
                    sx={{ backgroundColor: "#FBA834", m: 2 }}
                    aria-label="Sidebar"
                    size="small"
                    onClick={() => setDrawerOpen(true)}
                > 
                    <MenuRounded /> 
                </Fab> 
            </Box>
            <DrawerContent value={value} handleChange={handleChange}  setDrawerOpen={setDrawerOpen} />
            <Drawer
                open={drawerOpen}
                variant="temporary"
                onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 300, backgroundColor: grey[900]
                    },
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                    }
                }}
            >
                {/* Drawer */}
                <DrawerContent 
                    value={value} 
                    handleChange={handleChange} 
                    setDrawerOpen={setDrawerOpen} />
            </Drawer>
        </Grid>
    );
};

export default Sidebar;
