import React, { useEffect, useCallback} from 'react'
import { useForm } from '../../contexts/FormContext'
import { secondaryDb as db} from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import SubmissionsTable from './SubmissionsTable';

export default function SubmissionsDash() {

    const { currentForm, setFormArray } = useForm();
    //const [formData, setFormData] = useState({});
    const { currentUser } = useAuth()
    
    const getForm = useCallback(()=> {
        let formDataArray = []
        if(currentForm!=="") {
            db.collection(currentUser.email).doc("_formData").collection(currentForm)
            .onSnapshot(
                querySnapshot=>{
                    querySnapshot.docChanges().forEach(change => {
                        formDataArray.push(change.doc.data())
                        console.log(formDataArray)
                    });
                    setFormArray(formDataArray)
                })
        }
        
    }, [currentForm, currentUser.email, setFormArray])
    //getForm()
    useEffect(() => {
        getForm()
    }, [getForm])
    //console.log(formData)
    return (
        <div>
            <SubmissionsTable/>
        </div>
    )
}
