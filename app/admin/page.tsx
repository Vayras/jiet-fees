"use client"
import { useEffect, useState } from "react";
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

export default function admin() {
  const [userData, setUserData] = useState(Object);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedUserDataString = localStorage.getItem('userData');

    if (storedUserDataString) {
      const storedUserData = JSON.parse(storedUserDataString);

      // Update state only if there's data
      setUserData(storedUserData);
    }
  }, []);

  console.log(userData);

  return (
    <>

      {Object.keys(userData).map((key, value) => (
        
        <div key={key}>
            <HStack>  <Heading  as='h5' size='md'>{key}:</Heading>
          <Heading as='h5' size='sm'>{userData[key]}</Heading></HStack>
        
        </div>
      ))}
    </>
  );
}
