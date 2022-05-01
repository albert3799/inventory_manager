import React, { Component } from 'react';
import {
    Center,
    Heading,
    Box,
    Stack,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';

export default class Employee extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar />
                <Box
                    width='100%'
                    bg='brand.300'
                    color='brand.600'
                    height='100vh'
                >
                    <Center>
                        <Box
                            bg='brand.500'
                            borderRadius='5px'
                            maxWidth='1020px'
                            m={[10, 10, 30, 40]}
                            mt={[20, 20, 20, 20]}
                            p={1}
                        >
                            <Stack
                                m={[10, 10, 10, 10]}
                                align='center'
                                spacing={3}
                            >
                                <Heading>Employees</Heading>
                                <Link to='/employee/add'>  
                                    <Button>Add Employee</Button>
                                </Link>
                                <Link to='/employee/all'>    
                                    <Button>View All Employee</Button>
                                </Link>
                                <Link to='/employee/removeEmployee'> 
                                    <Button>Remove Employee</Button>
                                </Link>
                                <Link to='/employee/removeEmployee'> 
                                    <Button>Find Employee</Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Center>
                </Box>
            </>
        );
    }
}
