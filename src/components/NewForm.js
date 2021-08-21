import React, { useRef, useState } from 'react'
import {
    FormControl, FormLabel, FormHelperText, Input, Button,  Box, Center
  } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { useHistory } from "react-router"
import Hashids from 'hashids'


export default function NewForm(props) {

    const { navSize } = props;

    const hashids = new Hashids('formsubmission', 10)

    const formName = useRef();
    const { currentUser } = useAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    async function checkFirestore() {
        const docRef = db.collection(currentUser.email).doc("_userData");
        const doc = await docRef.get();
        if(!doc.exists) {
            const userData = {
                formCount: 0
            }
            await db.collection(currentUser.email).doc("_userData").set(userData);
            return 0;
        } else {
            const res = doc.data().formCount;
            return res;
        }
    }

    async function addForm(e) {
        e.preventDefault();

        const count = await checkFirestore();
        const formNo = "form".concat((count+1).toString());
        const formCode = currentUser.email.concat(" ").concat(formName.current.value);
        
        const hex = Buffer.from(formCode, 'utf8').toString('hex');
        console.log(hex);

        const encoded = hashids.encodeHex(hex);
        console.log(encoded);

        const decodedHex = hashids.decodeHex(encoded);
        console.log(decodedHex);

        const string = Buffer.from(decodedHex, 'hex').toString('utf8');
        console.log(string);

        try {
            setLoading(true);

            await db.collection(currentUser.email).doc("_userData")
            .update({
                formCount: count+1,
                [formNo] : formName.current.value
            });
            setLoading(false);
            history.push("/dashboard/submissions")
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }


    return (
        <Box bg="gray.600" w={navSize==="large"? "calc(100vw - 250px)" : "calc(100vw - 60px)"}>
            <Center>
            <form onSubmit={addForm}>
                <FormControl id="email" >
                    <FormLabel>Form Name</FormLabel>
                    <Input type="text" ref={formName} />
                    <FormHelperText>Make it unique!</FormHelperText>
                </FormControl>
                <Button disabled={loading} mt="4" type="submit" size="lg" rightIcon={<ArrowForwardIcon />}>
                    Create
                </Button>
            </form>
            </Center>
            
        </Box>
    )
}

