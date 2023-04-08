import { useState } from 'react'
import TextField from '../formComponents/textField'
import './index.css'
import DatePicker from '../formComponents/datePicker'
import Select from '../formComponents/select'
import { selectData, states } from '../../data/state'
import ErrorMessage from '../formComponents/errorMessage'
import { setEmployees } from '../../slices/employee/employeeSlice'

const Form = ({setIsModalOpen, dispatch}) => {

    const toCheck = ['addressStreet', 'city', 'dateOfBirth', 'zipCode', 'departement', 'firstName', 'lastName', 'startDate', 'state']

    const [departementValue, setDepartementValue] = useState('')
    const [stateValue, setStateValue] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorVisible, setErrorVissible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [newEmployee, setNewEmployee] = useState({})

    const handleFirstName = (value) => {
        let cloneEmployee = newEmployee
        cloneEmployee['firstName'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleLastName = (value) => {
        let cloneEmployee = newEmployee
        cloneEmployee['lastName'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleDateOfBirth = (value) => {
        let cloneEmployee = newEmployee
        cloneEmployee['dateOfBirth'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleStartDate = (value) => {
        let cloneEmployee = newEmployee
        cloneEmployee['startDate'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleDepartement = (value) => {
        setDepartementValue(value)
        let cloneEmployee = newEmployee
        cloneEmployee['departement'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleStreet = (value) => {
        let cloneEmployee = newEmployee
        cloneEmployee['addressStreet'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleCity = (value) => {
        let cloneEmployee = newEmployee
        cloneEmployee['city'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleZipCode = (value) => {
        let cloneEmployee = newEmployee
        cloneEmployee['zipCode'] = value
        setNewEmployee(cloneEmployee)
    }

    const handleState = (value) => {
        setStateValue(value)
        let cloneEmployee = newEmployee
        cloneEmployee['state'] = value
        setNewEmployee(cloneEmployee)
    }

    const format = "MM-DD-YYYY"

    const handleSubmit = () => {
        if(newEmployee.addressStreet !== undefined && newEmployee.city !== undefined && newEmployee.dateOfBirth !== undefined && newEmployee.zipCode !== undefined &&
            newEmployee.departement !== undefined && newEmployee.firstName !== undefined && newEmployee.lastName !== undefined && newEmployee.startDate !== undefined && newEmployee.state !== undefined) {
            setErrorMessage('')
            setIsError(false)
            setErrorVissible(false)
            dispatch(setEmployees(newEmployee))
            setIsModalOpen(true)
        } else {
            let message = 'Some required fields are not filled : '
            let errorCount = []
            toCheck.map((checker) => {
                if(newEmployee[checker] === undefined) {
                    return errorCount.push(checker)
                }
                return false
            })
            for(let i = 0; i < errorCount.length; i++) {
                if(i+1 === errorCount.length) {
                    message += `${errorCount[i]} !`
                } else {
                    message += `${errorCount[i]}, `
                }
            }
            window.scrollTo(0, 0)
            setErrorMessage(message)
            setIsError(true)
            setErrorVissible(true)
        }
    }

    return (
        <div className='form'>
            <h2 className='form-title'>Create Employee</h2>
            {isError &&
                <ErrorMessage message={errorMessage} visible={errorVisible} setVisible={setErrorVissible} />
            }
            <div className='form-wrapper'>
                <h2 className='form-section-title'>Employee Informations</h2>
                <div className='personnal-info'>
                    <div className='firstname-input'>
                        <TextField label="First Name" onChange={handleFirstName} />
                    </div>
                    <div className='lastname-input'>
                        <TextField label="Last Name" onChange={handleLastName} />
                    </div>
                    <div className='date-of-birth-input'>
                        <DatePicker label="Date Of Birth" format={format} onChange={handleDateOfBirth} />
                    </div>
                    <div className='start-date-input'>
                        <DatePicker label="Start Date" format={format} onChange={handleStartDate} />
                    </div>
                    <div className='departement-input'>
                        <Select defaultValue={departementValue} options={selectData} optionValue={"value"} optionLabel={"name"} placeholder={"Departement"} onChange={handleDepartement}/>
                    </div>
                </div>
                <h2 className='form-section-title'>Employee Address</h2>
                <div className='address-info'>
                    <div className='street-input'>
                        <TextField label="Steet" onChange={handleStreet} />
                    </div>
                    <div className='city-input'>
                        <TextField label="City" onChange={handleCity} />
                    </div>
                    <div className='zipcode-input'>
                        <TextField label="Zip Code" onChange={handleZipCode} />
                    </div>
                    <div className='state-input'>
                        <Select defaultValue={stateValue} options={states} optionValue={"abbreviation"} optionLabel={"name"} placeholder={"State"} onChange={handleState}/>
                    </div>
                </div>
                <div className='action-container'>
                    <button className='form-button' onClick={handleSubmit}>SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Form