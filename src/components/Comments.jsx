import { Box, Card, CardContent, Chip, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import bg from '../assets/wp2.jpg';
import Slider from 'react-slick';
import { ForumRounded } from '@mui/icons-material';
import { blue, orange } from '@mui/material/colors';
import { userComments } from './Detail';

export default function Comments() {

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear",

    }

    return (
        <Card
            sx={{
             
                height: "100vh",
                backgroundImage: `url(${(bg)})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>نظر شما</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ display:"flex", justifyContent:"center", }}>
                    <Grid
                        xs={11} sm={11} md={10} lg={10} xl={10}
                    >
                        <Divider textAlign="center" color="whitesmoke"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: orange[900],
                                }
                            }}  >
                            <Chip
                                color="warning"
                                icon={<ForumRounded />}
                                label={
                                    <Typography variant="body1" color="white" sx={{ textAlign: "center", p: 2, }}>
                                        نظرات شما دوستان عزیز
                                    </Typography>
                                } sx={{ p: 2 }} >
                            </Chip>
                        </Divider>
                        <Box component="div" sx={{ mt: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Slider {...options}>
                                {
                                    userComments.map((user, index) => (
                                        <Box key={index} component="div"  >

                                            <Card
                                                sx={{
                                                    backgroundColor: blue[900],
                                                    boxShadow:"2px 2px 15px 1px rgba(0,0,0,0.4)",     
                                                    borderRadius: 3,
                                                    m:2,
                                                }}
                                            >
                                                <CardContent>
                                                    <Typography variant='body1' textAlign="end" color="#c2c2c2">
                                                        {user.fullname} | {user.jobTitle}
                                                    </Typography>

                                                    <Typography variant="body2" textAlign="end" sx={{ mt: 2 }} color="#fff">
                                                        {user.comment}
                                                    </Typography>
                                                </CardContent>
                                            </Card>

                                        </Box>
                                    ))
                                }
                            </Slider>

                        </Box>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}
