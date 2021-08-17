import React, { useRef, useState } from 'react'
import {
    FormControl, FormLabel, FormHelperText, Input, Button
  } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';
//import { db } from '../firebase';
import { useHistory } from "react-router"
import Hashids from 'hashids'


export default function NewForm() {

    const hashids = new Hashids('formsubmission', 10)

    const formName = useRef();
    const { currentUser } = useAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    /*async function checkFirestore(value) {
        const docRef = db.collection(currentUser.uid).doc(currentUser.email);
        const doc = await docRef.get();
        if(!doc.exists) {
            const userData = {
                formCount: 1
            }
            await db.collection(currentUser.uid).doc(currentUser.email).set(userData);
            return 0;
        } else {
            const res = doc.data().formCount;
            return res;
        }
    }*/

    async function addForm(e) {
        e.preventDefault();

        //const count = await checkFirestore(formName.current.value);
        const docName = currentUser.email.concat(" ").concat(formName.current.value);
        
        var hex = Buffer.from(docName, 'utf8').toString('hex');
        console.log(hex);

        var encoded = hashids.encodeHex(hex);
        console.log(encoded);

        var decodedHex = hashids.decodeHex(encoded);
        console.log(decodedHex);

        var string = Buffer.from(decodedHex, 'hex').toString('utf8');
        console.log(string);


        try {
            setLoading(true);
            //await db.collection(currentUser.uid).doc(docName).set({"_formName": formName.current.value});
            //await db.collection(currentUser.uid).doc(currentUser.email).update({formCount: count+1});
            setLoading(false);
            history.push("/dashboard")
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
        
    }


    return (
        <form onSubmit={addForm}>
            <FormControl id="email">
                <FormLabel>Form Name</FormLabel>
                <Input type="text" ref={formName} />
                <FormHelperText>Make it unique!</FormHelperText>
            </FormControl>
            <Button disabled={loading} mt="4" type="submit" size="lg" rightIcon={<ArrowForwardIcon />}>
                Create
            </Button>
        </form>
    )
}

