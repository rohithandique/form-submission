import React, { useState, useEffect, useCallback} from 'react'
import { useForm } from '../../contexts/FormContext'
import { secondaryDb as db} from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function SubmissionsDash() {

    const { currentForm } = useForm();
    console.log(currentForm)
    const [formData, setFormData] = useState({});
    const { currentUser } = useAuth()
    
    const getForm = useCallback(async ()=> {
        const formArray = [];
        if(currentForm!=="") {
            const collectionRef = db.collection(currentUser.email).doc("_formData").collection(currentForm);
            const collection = await collectionRef.get()
            collection.forEach(doc => {
                formArray.push(doc.data())
                setFormData(doc.data())
                console.log(doc.data())
            })
        }
        console.log(formArray)
        
    }, [currentForm, currentUser.email])
    //getForm()
    console.log(formData)
    useEffect(() => {
        getForm()

    }, [getForm])

    return (
        <div>
        {currentForm}
        </div>
    )
}
