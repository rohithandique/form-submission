import React, { useEffect, useCallback} from 'react'
import { useForm } from '../../contexts/FormContext'
import { secondaryDb as db} from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import SubmissionsTable from './SubmissionsTable';
import Hashids from 'hashids'
import { Center } from '@chakra-ui/react';

export default function SubmissionsDash() {
    
    const hashids = new Hashids('formsubmission', 10)
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
    let encoded = "";
    if(currentForm!=="") {
        const formCode = currentUser.email.concat(" ").concat(currentForm);
        
        const hex = Buffer.from(formCode, 'utf8').toString('hex');
        console.log(hex);

        encoded = hashids.encodeHex(hex);
        console.log(encoded);
    }

    return (
        <div>
            {currentForm===""? <></> : <Center>Your code is {encoded}</Center>}
            <SubmissionsTable/>
        </div>
    )
}
