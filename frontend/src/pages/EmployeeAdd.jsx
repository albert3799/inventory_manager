import React, { Component } from 'react';
import {
    Center,
    Heading,
    Box,
    Stack,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Alert,
    AlertIcon,
    HStack,
    Input,
} from '@chakra-ui/react';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';

const MAX_ID_LENGTH = 5;
const MAX_NAME_LENGTH = 40;

export default class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee_id: '',
            id_err: false,
            employee_name: '',
            name_err: false,
            success: false,
            failure: '',
        };

        this.handleIDChange = this.handleIDChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIDChange(e) {
        this.setState({
            department_id: e.target.value,
            id_err: false,
            success: false,
            failure: '',
        });
    }

    handleNameChange(e) {
        this.setState({
            employee_name: e.target.value,
            name_err: false,
            success: false,
            failure: '',
        });
    }

    handleSubmit() {
        var isError = false;
        if (this.state.employee_id.length == 0) {
            this.setState({
                id_err: true,
            });
            isError = true;
        }

        if (this.state.employee_name.length == 0) {
            this.setState({
                name_err: true,
            });
            isError = true;
        }

        if (isError) {
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                employee_id: this.state.employee_id,
                employee_name: this.state.employee_name,
            }),
        };
        fetch('/api/employee', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.employee_id[0].includes('already exists.')) {
                    this.setState({
                        failure: data.employee_id[0],
                    });
                } else if (data.employee_id[0].includes('error')) {
                    this.setState({
                        failure: data.employee_id[0],
                    });
                } else {
                    this.setState({
                        success: true,
                    });
                }
            });
    }

    render() {
        return (
            <Box>
                <Navbar />
                <Box
                    width='100%'
                    bg='brand.300'
                    color='brand.600'
                    height='100%'
                    minHeight='100vh'
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
                                <Heading>Add Employee</Heading>
                                <FormControl isInvalid={this.state.id_err}>
                                    <FormLabel htmlFor='employee_id'>
                                        Employee ID
                                    </FormLabel>
                                    <Input
                                        id='employee_id'
                                        placeholder='KVY67'
                                        variant='outline'
                                        bg='white'
                                        my='auto'
                                        focusBorderColor='brand.200'
                                        onChange={this.handleIDChange}
                                        maxLength={MAX_ID_LENGTH}
                                    />
                                    <FormErrorMessage>
                                        Employee ID is required.
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={this.state.name_err}>
                                    <FormLabel htmlFor='employee_id'>
                                        Employee Name
                                    </FormLabel>
                                    <Input
                                        id='employee_id'
                                        placeholder='Marketing'
                                        variant='outline'
                                        bg='white'
                                        focusBorderColor='brand.200'
                                        onChange={this.handleNameChange}
                                        maxLength={MAX_NAME_LENGTH}
                                    />
                                    <FormErrorMessage>
                                        Employee Name is required.
                                    </FormErrorMessage>
                                </FormControl>
                                <HStack spacing={2} mt={2}>
                                    <Button
                                        type='submit'
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                    <Link to='/employee/'>
                                        <Button type='cancel'>Cancel</Button>
                                    </Link>
                                </HStack>
                                {this.state.success ? (
                                    <Alert
                                        status='success'
                                        borderRadius='5px'
                                        variant='subtle'
                                    >
                                        <AlertIcon />
                                        Employee added successfully.
                                    </Alert>
                                ) : (
                                    <></>
                                )}
                                {this.state.failure.length > 0 ? (
                                    <Alert
                                        status='error'
                                        borderRadius='5px'
                                        variant='subtle'
                                    >
                                        <AlertIcon />
                                        {this.state.failure}
                                    </Alert>
                                ) : (
                                    <></>
                                )}
                            </Stack>
                        </Box>
                    </Center>
                </Box>
            </Box>
        );
    }
}