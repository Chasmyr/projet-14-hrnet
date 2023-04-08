import { Box, Typography } from "@mui/material"
import Header from "../../components/header"

const Error = () => {


    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
                <Box sx={{ width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '15px', boxShadow: 3, height: '60vh', justifyContent: 'center' }}>
                    <Typography variant="h2" sx={{ m:0, fontSize: '90px', fontWeight: 'semi-bold'}}>
                        Error 404
                    </Typography>
                    <Typography variant="h2" sx={{ m:0, mt: '15px', fontSize: '24px', mb: '15px'}}>
                        This page doesn't exist
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Error