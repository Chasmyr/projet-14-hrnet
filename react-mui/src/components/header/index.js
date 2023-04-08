import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './index.css'

const Header = () => {

    return (
        <Box sx={{ mb: 12 }}>
            <AppBar>
                <Toolbar sx={{ display: 'flex', m: 1 }}>
                    <Typography variant="h1" sx={{ fontSize: {xs: '38px', md:'48px'} }}>
                        HRnet
                    </Typography>
                    <Box sx={{ width: {xs:'250px', sm: '350px'}, display: 'flex', justifyContent: 'space-between', ml: {xs: 4, sm: 6, md: 8} }}>
                        <Link to="/">Add Employee</Link>
                        <Link to="/list">Employee List</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header