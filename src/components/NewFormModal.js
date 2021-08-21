import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Icon, Text
  } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import NewForm from "./NewForm"

export default function NewFormModal(props) {
    const { navSize }  = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button bg="gray.400" _hover={{ textDecor: 'none', bg: "#AEC8CA" }} onClick={onOpen}
        _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
            <Icon as={AddIcon} fontSize="xl" />
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>New Form</Text>
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered  motionPreset="scale">
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Add Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <NewForm />
            </ModalBody>

            <ModalFooter>
                {
                    //something can be added
                }
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}