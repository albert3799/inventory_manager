import React, { Component } from 'react';
import {
    Center,
    Heading,
    Box,
    Stack,
    Button,
    Tooltip,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';

class EmployeeTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: undefined,
            filter: 'none',
        };

        this.filterEmployeeList = this.filterEmployeeList.bind(this);
    }

    componentDidMount() {
        this.setState({
            employee: this.props.employee,
            filter: this.props.filter,
            filtered_employee: this.props.employee,
        });
    }

    // filters Employee list on
    filterEmployeeList() {
        if (this.state.filter === 'none') {
            // change from no filter to only show members
            if (this.state.employee === undefined) {
                this.setState({
                    employee: this.props.employee,
                    filter: this.props.filter,
                });
                var filtered_employee = [];

                for (var i = 0; i < this.props.employee.length; i++) {
                    if (this.props.employee[i].member) {
                        filtered_employee.push(this.props.employee[i]);
                    }
                }

                this.setState({
                    filter: 'member',
                    filtered_employee: filtered_employee,
                });

                memberTitle1.innerHTML = 'Member Status [members]';
                memberTitle2.innerHTML = 'Member Status [members]';
                return;
            }

            var filtered_employee = [];
            for (var i = 0; i < this.state.employee.length; i++) {
                if (this.state.employee[i].member) {
                    filtered_employee.push(this.state.employee[i]);
                }
            }

            this.setState({
                filter: 'member',
                filtered_employee: filtered_employee,
            });

            memberTitle1.innerHTML = 'Member Status [members]';
            memberTitle2.innerHTML = 'Member Status [members]';
        } else if (this.state.filter === 'member') {
            // change from only show members to only show non-members
            if (this.state.employee === undefined) {
                this.setState({
                    employee: this.props.employee,
                    filter: this.props.filter,
                });
            }

            var filtered_employee = [];
            for (var i = 0; i < this.state.employee.length; i++) {
                if (!this.state.employee[i].member) {
                    filtered_employee.push(this.state.employee[i]);
                }
            }

            this.setState({
                filter: 'no member',
                filtered_employee: filtered_employee,
            });

            memberTitle1.innerHTML = 'Member Status [non-members]';
            memberTitle2.innerHTML = 'Member Status [non-members]';
        } else {
            // change from only show non-members to show all
            if (this.state.employee === undefined) {
                this.setState({
                    employee: this.props.employee,
                    filter: this.props.filter,
                });
            }

            this.setState({
                filter: 'none',
                filtered_employee: this.state.employee,
            });

            memberTitle1.innerHTML = 'Member Status [all]';
            memberTitle2.innerHTML = 'Member Status [all]';
        }
        return;
    }

    render() {
        return (
            <Table size='md'>
                <Thead>
                    <Tr>
                        <Th isNumeric>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Address</Th>
                        <Th isNumeric>Phone</Th>
                        <Th
                            id='memberTitle1'
                            isNumeric
                            cursor='pointer'
                            onClick={this.filterEmployeeList}
                        >
                            <Tooltip label='Filter on member status'>
                                Member Status [all]
                            </Tooltip>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {this.state.filtered_employee ? (
                        this.state.filtered_employee.map((empl) => (
                            <Tr key={empl.employee_id}>
                                <Td isNumeric>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.employee_id}
                                    </Link>
                                </Td>
                                <Td>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.first_name + ' ' + empl.last_name}
                                    </Link>
                                </Td>
                                <Td>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.email_address}
                                    </Link>
                                </Td>
                                <Td>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.address}
                                    </Link>
                                </Td>
                                <Td isNumeric>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.phone}
                                    </Link>
                                </Td>
                                <Td isNumeric>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.member ? (
                                            <CheckIcon />
                                        ) : (
                                            <SmallCloseIcon />
                                        )}
                                    </Link>
                                </Td>
                            </Tr>
                        ))
                    ) : this.props.employee ? (
                        this.props.employee.map((empl) => (
                            <Tr key={empl.employee_id}>
                                <Td isNumeric>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.employee_id}
                                    </Link>
                                </Td>
                                <Td>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.first_name + ' ' + empl.last_name}
                                    </Link>
                                </Td>
                                <Td>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.email_address}
                                    </Link>
                                </Td>
                                <Td>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.address}
                                    </Link>
                                </Td>
                                <Td isNumeric>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.phone}
                                    </Link>
                                </Td>
                                <Td isNumeric>
                                    <Link to={`/employee/${empl.employee_id}`}>
                                        {empl.member ? (
                                            <CheckIcon />
                                        ) : (
                                            <SmallCloseIcon />
                                        )}
                                    </Link>
                                </Td>
                            </Tr>
                        ))
                    ) : (
                        <Tr>
                            <Td>Loading...</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                    )}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th isNumeric>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Address</Th>
                        <Th isNumeric>Phone</Th>
                        <Th
                            id='memberTitle2'
                            isNumeric
                            cursor='pointer'
                            onClick={this.filterEmployeeList}
                        >
                            <Tooltip label='Filter on member status'>
                                Member Status [all]
                            </Tooltip>
                        </Th>
                    </Tr>
                </Tfoot>
            </Table>
        );
    }
}

export default class EmployeeAll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: undefined,
            filtered_employee: undefined,
            filter: 'none',
        };
    }

    componentDidMount() {
        this.getEmployeeList();
    }

    getEmployeeList() {
        fetch('/api/get-employee')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    employee: data,
                    filtered_employee: data,
                });
            });
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
                                <Heading>All Employee</Heading>
                                <EmployeeTable
                                    employee={this.state.filtered_employee}
                                    filter={this.state.filter}
                                />
                                <Link to='/'>
                                    <Button>Back to Home</Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Center>
                </Box>
            </>
        );
    }
}
