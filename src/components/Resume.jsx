import { Card, CardContent, Chip, Divider, Grid, Typography } from "@mui/material";
import bg from '../assets/wp1.jpg';
import { Helmet } from "react-helmet-async";
import { devEdu } from "./Detail";
import { orange } from "@mui/material/colors";
import { SchoolRounded, SettingsEthernetRounded } from "@mui/icons-material";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

const Resume = () => {

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
                <title>رزومه من</title>
            </Helmet>
            <CardContent>
                <Divider textAlign="center" color="whitesmoke"
                    sx={{
                        "&::before, &::after": {
                            borderColor: orange[800],
                        }
                    }}  >
                    <Chip
                        color="warning"
                        icon={<SettingsEthernetRounded />}
                        label={
                            <Typography variant="body1" color="white" sx={{ textAlign: "center", p: 2, }}>
                                رزومه من
                            </Typography>
                        } sx={{ p: 2 }} >
                    </Chip>
                </Divider>
                <Grid container sx={{ mt: 4, display: "flex", justifyContent: "center" }} >

                    <Grid xs={11} className="div_Resume"  >
                        <Divider textAlign="center" color="whitesmoke"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "#fff",
                                }
                            }}  >
                            <Chip
                                color="primary"
                                icon={<SettingsEthernetRounded />}
                                label={
                                    <Typography variant="body1" color="white" sx={{ textAlign: "center", p: 2, }}>
                                        تحصیلات
                                    </Typography>
                                } sx={{ p: 2 }} >
                            </Chip>
                        </Divider>
                        {
                            devEdu.map((item, index) => (
                              
                                < TimelineItem key={index} >
                                    <TimelineSeparator>
                                        <TimelineDot color="info" variant="outline">
                                            <SchoolRounded color="info" />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                               

                                    <TimelineContent>
                                        <Typography variant="caption" color="#fff" sx={{ my: 2 }}>
                                            {item.year}
                                        </Typography>
                                        <Typography variant="h6" color="#fff" sx={{ my: 2 }}>
                                            {item.cert}
                                        </Typography>
                                        <Typography variant="h6" color="#fff" sx={{ my: 2 }}>
                                            {item.major}
                                        </Typography>
                                        <Typography variant="h6" color="#fff" sx={{ my: 2 }}>
                                            {item.uni}
                                        </Typography>
                                    </TimelineContent>

                                </TimelineItem>
                            ))
                        }

                    </Grid>

                </Grid>
            </CardContent>
        </Card >
    )
}

export default Resume;