import { Box, Grid, Typography } from "@mui/material"
import { connect } from "react-redux"
import Header from "../../components/header"
import NewEmployeeForm from "../../components/NewEmployeeForm"

const CreateEmployee = ({dispatch, employees = null}) => {

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}> 
                <Box sx={{ width: {xs: '90%', sm: '70%', md: '55%', lg: '40%'}, borderRadius: '15px', boxShadow: 3, mb: 4 }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h2" sx={{ m: 0, mt: 2, mb: 3, fontSize: '26px' }}>
                                Create Employee
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <NewEmployeeForm dispatch={dispatch} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>  
    )
}

export default connect(
    state => ({
        employees: state.employeeReducer.employees
    })
)(CreateEmployee)