import { connect } from "react-redux"
import './index.css'
import Header from "../../components/header"
import Form from "../../components/form"
import {useState} from "react"

const CreateEmployee = ({employees = null, dispatch}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(employees)

    return (
        <>
            {isModalOpen &&
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content">
                        <span className="modal-text">Employee created !</span>
                    </div>
                </div>
            }
            <Header />
            <div className="form-container">
                <Form setIsModalOpen={setIsModalOpen} dispatch={dispatch} />
            </div>
        </>  
    )
}

export default connect(
    state => ({
        employees: state.employeeReducer.employees
    })
)(CreateEmployee)