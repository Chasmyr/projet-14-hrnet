import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees: null
}

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            if(state.employees === null) {
                return {
                    ...state,
                    employees:
                        [action.payload]
                }
            } else {
                let toReturn = [...state.employees]
                toReturn.unshift(action.payload)
                return {
                    ...state,
                    employees:
                        toReturn
                }
            }
        }
    }
})

export const {actions, reducer} = employeeSlice

export const {setEmployees} = actions