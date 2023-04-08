import { Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {useState} from "react";

const PersonnalInfo = ({newEmployee, setNewEmployee}) => {

    const [departement, setDepartement] = useState("")

    const selectData = [
        {
            "name": "Sales",
            "value": "Sales"
        },
        {
            "name": "Marketing",
            "value": "Marketing"
        },
        {
            "name": "Engineering",
            "value": "Engineering"
        },
        {
            "name": "Human Resources",
            "value": "HR"
        },
        {
            "name": "Legal",
            "value": "Legal"
        }
    ]

    const handleSelectChange = (e) => {
        setDepartement(e.target.value)
        let cloneEmployee = newEmployee
        cloneEmployee['departement'] = e.target.value
        setNewEmployee(cloneEmployee)
    }

    const handleLastNameChange = (e) => {
        let cloneEmployee = newEmployee
        cloneEmployee['lastName'] = e.target.value
        setNewEmployee(cloneEmployee)
    }

    const handleFirstNameChange = (e) => {
        let cloneEmployee = newEmployee
        cloneEmployee['firstName'] = e.target.value
        setNewEmployee(cloneEmployee)
    }

    const handleDateOfBirth = (e) => {
        let cloneEmployee = newEmployee
        let day = ''
        let month = ''
        let year = e.$y
        if(e.$D < 10) {
            day = '0' + e.$D
        } else {
            day = e.$D
        }
        if(e.$M < 9) {
            month = '0' + (e.$M +1)
        } else {
            month = (e.$M +1)
        }
        let dateOfBirth = month + '/' + day + '/' + year
        cloneEmployee['dateOfBirth'] = dateOfBirth
        setNewEmployee(cloneEmployee)
    }

    const handleStartDate = (e) => {
        let cloneEmployee = newEmployee
        let day = ''
        let month = ''
        let year = e.$y
        if(e.$D < 10) {
            day = '0' + e.$D
        } else {
            day = e.$D
        }
        if(e.$M < 9) {
            month = '0' + (e.$M +1)
        } else {
            month = (e.$M +1)
        }
        let startDate = month + '/' + day + '/' + year
        cloneEmployee['startDate'] = startDate
        setNewEmployee(cloneEmployee)
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Employee Informations
            </Typography>
            <Grid container spacing={3} sx={{ p: 4, pt: 2, pb: 3 }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        onChange={handleFirstNameChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        onChange={handleLastNameChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Date Of Birth"
                            format="MM/DD/YYYY"
                            sx={{ width: '100%' }}
                            onChange={handleDateOfBirth}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Start Date"
                            format="MM/DD/YYYY"
                            sx={{ width: '100%' }}
                            onChange={handleStartDate}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel id="select-departement">Departement</InputLabel>
                    <Select
                        labelId="select-departement"
                        value={departement}
                        onChange={handleSelectChange}
                        fullWidth
                    >
                    {selectData.map((e, index) => {
                        return (
                            <MenuItem value={e.value} key={index}>{e.name}</MenuItem>
                        )
                    })}
                    </Select>
                </Grid>
            </Grid>
        </>
    )
}

export default PersonnalInfo