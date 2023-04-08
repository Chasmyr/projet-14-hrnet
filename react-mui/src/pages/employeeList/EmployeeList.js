import { Box } from "@mui/material"
import { connect } from "react-redux"
import Header from "../../components/header"
import {default as DisplayTable} from "oc-table-module"
import "../../../node_modules/oc-table-module/dist/style.css"
import { useEffect } from "react"
import { useState } from "react"

const EmployeeList = ({employees = null}) => {

    const [toDisplay, setToDisplay] = useState(employees)

    const tableConf = {
      title: 'Current employee',
      searchable: true,
      pagination: true,
      defaultNumberOfEntries: 2,
      entriesOptions: [2, 4, 6, 8, 10],
      columns: [
        {
          name: 'First Name',
          orderable: true,
          ref: 'firstName'
        },
        {
          name: 'Last Name',
          orderable: true,
          ref: 'lastName'
        },
        {
          name: 'Date of Birth',
          orderable: true,
          ref: 'dateOfBirth'
        },
        {
          name: 'Start Date',
          orderable: true,
          ref: 'startDate'
        },
        {
          name: 'City',
          orderable: true,
          ref: 'city'
        },
        {
          name: 'State',
          orderable: true,
          ref: 'state'
        },
        {
          name: 'Zip Code',
          ref: 'zipCode'
        },
        {
          name: 'Address',
          ref: 'addressStreet'
        }
      ]
    }

    useEffect(() => {
      if(toDisplay === null) {
        setToDisplay([])
      } 
    }, [toDisplay])

    if(toDisplay === null) {
      tableConf.rows = []
    } else {
      tableConf.rows = [...toDisplay]
    }

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
                <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '15px', boxShadow: 3 }}>
                    <Box sx={{width: "93%", mb: 3, mt: 2}}>
                        <DisplayTable config={tableConf} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default connect(
    state => ({
        employees: state.employeeReducer.employees
    })
)(EmployeeList)