import { grey } from "@mui/material/colors";
import {
    Box,
    Typography,
    Avatar,
    Tabs,
    Tab,
    Divider,
    IconButton,
} from "@mui/material";
import {
    HomeRounded, PersonOutline,
    TextSnippetRounded, MessageRounded,
    ConnectWithoutContactRounded, CopyrightRounded,
    GitHub,
    Instagram,
    Telegram,
} from "@mui/icons-material";
import pic from "../../assets/Avatar.jpg";

const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };

    return (

        <Box
            sx={{
                justifyContent: 'center',
                textAlign: 'center',
                mt: 2,

            }}
        >

            <Avatar src={pic}
                sx={{
                    height: 110, width: 110, margin: "0 auto",
                    display: { xl: "block", lg: "block", md: "block", sm: "none", xs: "none" }
                }} />

            <Typography
                color="whitesmoke"
                variant="button"
            >
                مجتبی بخشی پور
            </Typography>
            <br />
            <Typography
                color="whitesmoke"
                variant="caption"
            >
                برنامه نویس و توسعه دهنده فرانت اند 
            </Typography>

            <Divider variant="middle" sx={{ mt: 2 }} color={grey[800]} />
            
            <Box component="div" sx={{m:"0 auto", textAlign:"ecnter"}}>
                <IconButton  aria-label="Github">
                    <a  href="https://github.com/mojtaba-python" target="_blank" rel="noopener noreferrer">
                        <GitHub className="Social_media" sx={{ color:"gray"}} />
                    </a> 
                </IconButton>
                <IconButton aria-label="Instagram">
                    <a href="https://Instagram.com/mojtaba.bakhshipour" target="_blank" rel="noopener noreferrer">
                        <Instagram className="Social_media" sx={{ color:"gray"}} />
                    </a>
                </IconButton>
                <IconButton aria-label="Telegram">
                    <a href="https://t.me/Poshtekala_admin" target="_blank" rel="noopener noreferrer">
                        <Telegram className="Social_media" sx={{ color:"gray"}} />
                    </a>
                </IconButton>
            </Box>
            
            <Divider variant="middle"  color={grey[800]} />
            <Tabs
                
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
                
            >
                <Tab 
                    className="Tab_P1"
                    label="صفحه اصلی"
                    icon={<HomeRounded />}
                    iconPosition="start"
                    sx={{
                        "&.MuiTab-root": {
                            color: "whitesmoke",
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2,
                            m: 0.2,
                            mx: 1,
                            fontSize: 12,
                        }
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tabProps(0)} />

                <Tab
                    className="Tab_P1" 
                    disableGutters label=" درباره من"
                    icon={<PersonOutline />}
                    iconPosition="start"
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        "&.MuiTab-root": {
                            color: "whitesmoke",
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2,
                            m: 0.2,
                            mx: 1,
                            fontSize: 12,
                        }
                    }}
                    {...tabProps(1)} />

                <Tab 
                    className="Tab_P1"
                    disableGutters label=" رزومه من"
                    icon={<TextSnippetRounded />}
                    iconPosition="start"
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        "&.MuiTab-root": {
                            color: "whitesmoke",
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2,
                            m: 0.2,
                            mx: 1,
                            fontSize: 12,
                        }
                    }}
                    {...tabProps(2)} />

                <Tab
                 className="Tab_P1"
                 disableGutters label="نظرات "
                    icon={<MessageRounded />}
                    iconPosition="start"
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        "&.MuiTab-root": {
                            color: "whitesmoke",
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2,
                            m: 0.2,
                            mx: 1,
                            fontSize: 12,
                        }
                    }}
                    {...tabProps(3)} />

                <Tab 
                 className="Tab_P1"
                disableGutters label=" ارتباط با من"
                    icon={<ConnectWithoutContactRounded />}
                    iconPosition="start"
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        "&.MuiTab-root": {
                            color: "whitesmoke",
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2,
                            m: 0.2,
                            mx: 1,
                            fontSize: 12,
                        }
                    }}
                    {...tabProps(4)} />
            </Tabs>
            <Divider variant="middle" sx={{ mt: 2 }} color={grey[800]} />
            <Box
                sx={{
                    flexGrow: 1,
                    display: "block",
                    flexDirection: "row",
                    justifyContent: "center",
                    height: 50,
                    mt: 2,

                }}>
                <Typography variant="subtitle2" color="whitesmoke" sx={{ textAlign: "center", fontSize: 10, }}>
                    طراحی شده توسط مجتبی بخشی پور
                </Typography>
                <Typography variant="subtitle2" color="whitesmoke"
                    sx={{ fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    کپی رایت 1403 {" "} <CopyrightRounded sx={{ height: 12 }} />
                </Typography>
            </Box>
        </Box>


    );
};

export default DrawerContent;