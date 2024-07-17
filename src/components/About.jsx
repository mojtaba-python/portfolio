import { useState, useEffect } from "react";

import bg from "../assets/pic5.jpg";
import { Card, CardContent, Chip, Divider, Grid, Typography, Avatar } from "@mui/material";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import AboutInfo from "./Tabs/AboutInfo";
import Skill from "./Skill";
import { devSkills } from "./Skills";
import { Helmet } from "react-helmet-async";

const About = () => {
    const { htmlSkill, jsSkill, reactSkill, cssSkill, gitSkill, djangoSkill, pythonSkill } = devSkills;

    const [js, setJs] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [react, setReact] = useState(0);
    const [git, setGit] = useState(0);
    const [dj, setDj] = useState(0);
    const [python, setPython] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });
            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);
            });
            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });
            setReact((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75);
            });
            setDj((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 71);
            });
            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 61);
            });
            setDj((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75);
            });
            setPython((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 67);
            });
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundImage: `url(${(bg)})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>درباره من</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3, display:"flex", justifyContent:"center", }}>
                    <Grid sx={{
                        backgroundColor: "#0b0e18c4",
                        p: 3,
                    }}
                        xs={12} sm={12} md={8} lg={8} xl={8}
                    >
                        <Divider textAlign="center" color="whitesmoke"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: orange[800],
                                }
                            }}  >
                            <Chip
                                color="primary"
                                icon={<CodeRounded />}
                                label={
                                    <Typography variant="body1" color="white" sx={{ textAlign: "center", p:2, }}>
                                        توسعه دهنده فرانت اند
                                    </Typography>
                                } sx={{ p: 2 }} >
                            </Chip>
                        </Divider>
                        <AboutInfo> نام و نام خانوادگی : مجتبی بخشی پور </AboutInfo>
                        <AboutInfo> سن : 32</AboutInfo>
                        <AboutInfo> شهر : رشت</AboutInfo>
                        <AboutInfo> mojtaba.klaie@gmail.com : آدرس ایمیل</AboutInfo>
                        <AboutInfo> شماره موبایل : 09375674194</AboutInfo>

                    </Grid>
                   
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1, backgroundColor: "#0b0e18c4", }} >
                        <Divider textAlign="center" color="whitesmoke"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: orange[800],
                                }
                            }}  >
                            <Chip
                                color="primary"
                                icon={<SelfImprovementRounded />}
                                label={
                                    <Typography variant="body1" color="white" sx={{ textAlign: "center"}}>
                                        مهارت های من
                                    </Typography>
                                } sx={{ p: 2 }} >
                            </Chip>
                        </Divider>


                        <Skill
                            name={htmlSkill.name}
                            icon={htmlSkill.icon}
                            color={htmlSkill.color}
                            value={html}
                        />

                        <Skill
                            name={jsSkill.name}
                            icon={jsSkill.icon}
                            color={jsSkill.color}
                            value={js}
                        />
                        <Skill
                            name={reactSkill.name}
                            icon={reactSkill.icon}
                            color={reactSkill.color}
                            value={react}
                        />
                        <Skill
                            name={cssSkill.name}
                            icon={cssSkill.icon}
                            color={cssSkill.color}
                            value={css}
                        />
                        <Skill
                            name={gitSkill.name}
                            icon={gitSkill.icon}
                            color={gitSkill.color}
                            value={git}
                        />
                        <Skill
                            name={djangoSkill.name}
                            icon={djangoSkill.icon}
                            color={djangoSkill.color}
                            value={dj}
                        />
                        <Skill
                            name={pythonSkill.name}
                            icon={pythonSkill.icon}
                            color={pythonSkill.color}
                            value={python}
                        />

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default About;