import { ThemeProvider } from "@mui/material/styles";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { lightTheme, darkTheme } from "../components/ui/theme";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


//Note Create RTL Cache 
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
})


const MainLayout = ({ children, mode }) => {

    const theme = mode === "dark" ? darkTheme : lightTheme;
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی مجتبی بخشی پور</title>
                    </Helmet>
                    {/* Grid system */}
                    <Grid2 container sx={{ height: "100vh" }}>
                        {children}
                    </Grid2>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}
export default MainLayout;