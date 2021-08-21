import React, { useEffect } from 'react'
import { Box, VStack, StackDivider, Container } from '@chakra-ui/react'
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../contexts/FormContext';
import SubmissionsMenu from './utils/SubmissionsMenu';
import SubmissionsDash from './utils/SubmissionsDash';

export default function Submissions(props) {

    const { currentUser } = useAuth();
    const { formList, setFormList } = useForm();

    useEffect(() => { 
        let data = []
        const unsubscribe = db.collection(currentUser.email).onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
              if (change.type === 'added') {
                data = Object.values(change.doc.data()).filter(val=>typeof val === "string")
              }
              if (change.type === 'modified') {
                data = Object.values(change.doc.data()).filter(val=>typeof val === "string")
              }
              if (change.type === 'removed') {
                data = Object.values(change.doc.data()).filter(val=>typeof val === "string")
              }
            });
            setFormList(data);
          });

        //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
        return () => {
            unsubscribe()
        }
    }, [currentUser.email, setFormList]);
    return (
        <>
            <Container>
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    >
                    <Box mt="4">
                        <SubmissionsMenu formList={formList}/>
                    </Box>
                    <Box>
                        <SubmissionsDash />
                    </Box>
                    <Box>
                        3
                    </Box>
                </VStack>
            </Container>
        </>
    )
}
