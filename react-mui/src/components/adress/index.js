import { Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { states } from '../../data/states'

const Address = ({newEmployee, setNewEmployee}) => {

    const [selectState, setSelectState] = useState("")

    const handleSelectChange = (e) => {
        setSelectState(e.target.value)
        let cloneEmployee = newEmployee
        cloneEmployee['state'] = e.target.value
        setNewEmployee(cloneEmployee)
    }

    const handleInputChange = (e) => {
        let cloneEmployee = newEmployee
        cloneEmployee[e.target.id] = e.target.value
        setNewEmployee(cloneEmployee)
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Employee Adress
            </Typography>
            <Grid container spacing={3} sx={{ p: 4, pt: 2, pb: 3 }}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="addressStreet"
                        name="addressStreet"
                        label="Street"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zipCode"
                        name="zip-code"
                        label="Zip Code"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel id="select-state">State</InputLabel>
                    <Select
                        labelId="select-state"
                        value={selectState}
                        onChange={handleSelectChange}
                        fullWidth
                    >
                    {states.map((e, index) => {
                        return (
                            <MenuItem value={e.abbreviation} key={index}>{e.name}</MenuItem>
                        )
                    })}
                    </Select>
                </Grid>
            </Grid>
        </>
    )
}

export default Address