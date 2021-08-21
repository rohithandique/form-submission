import React, { useState, useContext } from 'react'

const FormContext = React.createContext();

export function useForm() {
    return useContext(FormContext)
}

export function FormProvider({children}) {

    const [currentForm, setCurrentForm] = useState("");
    const [formList, setFormList] = useState([]);

    const value = {
        currentForm,
        setCurrentForm,
        formList,
        setFormList
    }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}
