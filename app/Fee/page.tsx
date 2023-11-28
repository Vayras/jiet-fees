"use client"
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
  Select,
  Stack,
  Heading,
} from '@chakra-ui/react';
import {   ChangeEvent , useState } from 'react';

export default function Fee(){
    const [count ,setCount] = useState(1);

    const [formData , setFormData] = useState({
        id:count,
        RegistrationNumber:"",
        Course:"",
        Branch:"",
        Section:"",
        FirstName:"",
        LastName:"",
        Fname:"",
        Mname:"",
        TransactionId:"",
        Amount:"",
        Screenshot:"",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const handleClick = () => {
        setCount(count+1);
        console.log("helloworld", formData);
        localStorage.setItem('userData', JSON.stringify(formData));
      };
 
  return(
    <Flex
    align="center"  
    justify="center"  
    minH="100vh"  
>
    <Container maxW="3xl" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
        <Heading>Fees Form</Heading>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            
            >
               
                <Stack spacing="6">
                <HStack justify="space-between">
                        <FormControl>
                            <FormLabel htmlFor="Registration Number">Registration Number</FormLabel>
                            <Input required id="RegistrationNumber" type="Text"  placeholder={"JIET/MCA/2023/006"} value={formData.RegistrationNumber} onChange={handleChange} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="Course">Course</FormLabel>
                            <Select required placeholder='Select option' textColor="black" id="Course" value={formData.Course} onChange={handleChange}>
                                <option value='MCA'>MCA</option>
                                <option value='BTech'>BTech</option>
                                <option value='MBA'>MBA</option>
                            </Select>
                       </FormControl>
                
                </HStack>
                <HStack justify="space-between">
                        <FormControl>
                            <FormLabel htmlFor="Branch">Branch</FormLabel>
                            <Input required id="Branch" type="Text"  value={formData.Branch}  onChange={handleChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="Section">Section</FormLabel>
                            <Input required id="Section" type="Text"  value={formData.Section} onChange={handleChange}/>
                        </FormControl>
                </HStack> 

                <HStack justify="space-between">
                    
                    <FormControl>
                        <FormLabel htmlFor="First Name" >First Name</FormLabel>
                        <Input required id="FirstName" type="Text" value={formData.FirstName} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="Last Name">Last Name</FormLabel>
                        <Input required id="LastName" type="Text" value={formData.LastName} onChange={handleChange} />
                    </FormControl>
            </HStack>   

                <HStack justify="space-between">
                    
                        <FormControl>
                            <FormLabel htmlFor="Father’s Name">Father’s Name</FormLabel>
                            <Input required id="Fname" type="Text"  value={formData.Fname} onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="Mother's Name">Mother's Name</FormLabel>
                            <Input required id="Mname" type="Text"value={formData.Mname} onChange={handleChange} />
                        </FormControl>
                </HStack>   

                <HStack justify="space-between">
                        <FormControl>
                            <FormLabel htmlFor="Transaction Id">Transaction Id</FormLabel>
                            <Input id="TransactionId" type="Number"  value={formData.TransactionId} onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="Amount">Amount</FormLabel>
                            <Input required id="Amount" type="Number" value={formData.Amount} onChange={handleChange} />
                        </FormControl>
                </HStack>   

                        <Stack justify="space-between">
                        <FormLabel htmlFor="Amount">Transaction Screenshot</FormLabel>
                        <Input required id="Screenshot" type="File" value={formData.Screenshot} onChange={handleChange} />
                        </Stack>    
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>I confirm that the fees have been paid </Checkbox>
                       
                    </HStack>
                    <Stack spacing="6">
                        <Button onClick={handleClick}>Submit</Button>
                        <HStack></HStack>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>
</Flex>
  )
}