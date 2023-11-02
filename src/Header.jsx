import { CreateTask } from "./CreateTask";
import { Center, Text, Box, HStack } from '@chakra-ui/react'

export const Header = ({ onAddTask }) => {
    return (
        <Box w="100%" h="200px" bgGradient="linear(to-r, blue.200, green.400, blue.200)">
            <Center>
                <Text
                    bgGradient="linear(to-l, white, white)"
                    bgClip="text"
                    fontSize="6xl"
                    fontWeight="extrabold"
                >
                    Todo App
                </Text>
            </Center>
            <Center>
                <HStack>
                    <CreateTask saveTask={onAddTask} />
                </HStack>
            </Center> 
        </Box>
    )
}