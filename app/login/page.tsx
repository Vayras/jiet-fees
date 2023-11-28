import {
    Box,
    Button,
    Checkbox,
    Container,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Stack,
} from '@chakra-ui/react';


export default function Login() {
    return (
        <Flex
            align="center"  
            justify="center"  
            minH="100vh"  
        >
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="Registration Number">Registration Number</FormLabel>
                                    <Input id="Registration Number" type="Registration Number" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input id="password" type="password" />
                                </FormControl>
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox defaultChecked>Remember me</Checkbox>
                                <Button variant="text" size="sm">
                                    Forgot password?
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <Button>Sign in</Button>
                                <HStack></HStack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Flex>
    );
}
