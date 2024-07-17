import MainLayout from "./layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import { useState } from "react";
import TabPanel from "./components/Tabs/TabPanel";
import { ReactTyped } from "react-typed";
import { Box, Typography } from "@mui/material";
import page1 from "./assets/pic3.jpg";
import SwipeableViews from "react-swipeable-views";
import About from "./components/About";
import Resume from "./components/Resume";
import Comments from "./components/Comments";
import Contact from "./components/Contact";

function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <MainLayout>
            <Sidebar value={value} handleChange={handleChange} />
            <ContentContainer  >
                <SwipeableViews
                    index={value}
                    onChangeIndex={handleChange}
                >
                    <TabPanel value={value} index={0}>
                        <Box
                            sx={{
                                backgroundImage: `url(${(page1)})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Typography
                                variant="h5"
                                color="#05081efa"
                                sx={{
                                    textAlign: "center",
                                    backgroundColor: "#FF9800",
                                    display: "inline",
                                    padding: "20px",
                                    borderRadius: "6px",
                                }}
                            >
                                <ReactTyped strings={[
                                    "من مجتبی بخشی پور هستم",
                                    "من برنامه نویس فول استک هستم",
                                    "من توسعه دهنده فرانت اند هستم",

                                ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                            </Typography>
                            
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <About />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Resume />
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <Comments />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Contact/>
                    </TabPanel>
                </SwipeableViews>

            </ContentContainer>
        </MainLayout>

    );
}

export default App;
