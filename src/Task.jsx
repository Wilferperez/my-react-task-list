import { Checkbox, Button, HStack, Box, Card, Divider, CardBody, Center, Text } from '@chakra-ui/react'
export const Task = ({ id, name, completed, onRemovedTask, onToggleCompletedTask }) => {

    return (
        <div>
            <Center height='20px'>
                <Divider orientation='vertical' />
            </Center>
            <Card>
                <CardBody>
                    <HStack spacing='20px'>
                        <Box w='500px' h='5' bg='green.50'>
                            <Checkbox
                                checked={completed}
                                type="checkbox"
                                onChange={(event) => {
                                    onToggleCompletedTask({ id, completed: event.target.checked })
                                }}
                            >
                                <Text as={completed ? 'del' : ''}>{name}</Text>
                            </Checkbox>
                        </Box>
                        <Box w='50px' h='10'>
                            <Button
                                onClick={()=>{
                                    console.log({id})
                                    onRemovedTask({id})
                                }}
                            >
                                X
                            </Button>
                        </Box>
                    </HStack>
                </CardBody>
            </Card>
        </div>
    )
}