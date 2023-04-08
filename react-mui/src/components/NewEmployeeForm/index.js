import {Alert, Box, Button, Modal, Typography} from "@mui/material"
import { useState } from "react"
import { setEmployees } from "../../slices/employee/employeeSlice"
import Address from "../adress"
import PersonnalInfo from "../personalInfo"

const NewEmployeeForm = ({dispatch}) => {

    const [newEmployee, setNewEmployee] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const [formError, setFormError] = useState([])

    const toCheck = ['addressStreet', 'city', 'dateOfBirth', 'zipCode', 'departement', 'firstName', 'lastName', 'startDate', 'state']

    const handleSubmit = () => {
        if(newEmployee.addressStreet !== undefined && newEmployee.city !== undefined && newEmployee.dateOfBirth !== undefined && newEmployee.zipCode !== undefined &&
            newEmployee.departement !== undefined && newEmployee.firstName !== undefined && newEmployee.lastName !== undefined && newEmployee.startDate !== undefined) {
            setFormError([])
            dispatch(setEmployees(newEmployee))
            setOpenModal(true)
            setNewEmployee({})
        } else {
            let errorCount = []
            toCheck.map((checker) => {
                if(newEmployee[checker] === undefined) {
                    return errorCount.push(checker)
                }
                return false
            })
            window.scrollTo(0, 0)
            setFormError(errorCount)
        }
    }

    return (
        <>  
            <Modal
                open={openModal}
                onClose={() => {setOpenModal(false)}}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >   
                <Box sx={{ backgroundColor: 'white', width: '250px', height: '120px', borderRadius: '10px', boxShadow: 3,
                    display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6">
                        Employee Created !
                    </Typography>
                </Box>
            </Modal>
            <Box>
                {formError.length > 0 &&
                    <Alert severity="error" sx={{mt: 1, mb: 2, ml: 4, mr:4}} onClose={() => {setFormError([])}}>
                        Some required fields are not filled : {formError.map((e) => <strong key={e}>{e} </strong>)}!
                    </Alert>}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, flexDirection: 'column', alignItems: 'center' }}>
                    <PersonnalInfo newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                    <Address newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                    <Button variant="contained" onClick={handleSubmit}>
                        Save
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default NewEmployeeForm