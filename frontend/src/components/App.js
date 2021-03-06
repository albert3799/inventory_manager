import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NoMatch, Inventory, Department, DepartmentCreate,
        DepartmentEdit, Customer, CustomerAll, CustomerSearch,Coupon,
        CouponCreate, CouponEdit, Item, ItemCreate,
        ItemCategory, ItemCategoryCreate, ItemCategorySearch, ItemCategoryAll,
        Transaction, TransactionCreate, Store, StoreCreate, StoreEdit, StoreSearch, StoreAll,Employee,EmployeeAdd,EmployeeAll } from "../pages/";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
//import StoreCreate from "../pages/StoreCreate";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route exact path="/inventory" element={<Inventory />} />
                <Route exact path="/department" element={<Department />} />
                <Route exact path="/department/create" element={<DepartmentCreate />} />
                <Route exact path="/department/edit" element={<DepartmentEdit />} />
                <Route exact path="/customer" element={<Customer />} />
                <Route exact path="/customer/all" element={<CustomerAll />} />
                <Route exact path="/customer/search" element={<CustomerSearch />} />
                <Route exact path="/coupon" element={<Coupon />} />
                <Route exact path="/coupon/create" element={<CouponCreate />} />
                <Route exact path="/coupon/edit" element={<CouponEdit />} />
                <Route exact path="/item" element={<Item />} />
                <Route exact path="/item/create" element={<ItemCreate />} />
                <Route exact path="/itemcategory" element={<ItemCategory />} />
                <Route exact path="/itemcategory/create" element={<ItemCategoryCreate />} />
                <Route exact path="/itemcategory/search" element={<ItemCategorySearch />} />
                <Route exact path="/itemcategory/all" element={<ItemCategorySearch />} />
                <Route exact path= "/transaction" element={<Transaction />}/>
                <Route exact path="/transaction/create" element={<TransactionCreate />} />
                <Route exact path="/store" element={<Store />} />
                <Route exact path="/store/create" element={<StoreCreate />} />
                <Route exact path="/store/edit" element={<StoreEdit />} />
                <Route exact path="/store/search" element={<StoreSearch />} />
                <Route exact path="/store/all" element={<ItemCategorySearch />} />
                <Route exact path="/employee" element={<Employee />} />
                <Route exact path="/employee/add" element={<EmployeeAdd />} />
                <Route exact path="/employee/all" element={<EmployeeAll />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>);
    }
}

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
      900: '#313638',   // dark gray
      800: '#303536',   // dark gray as well
      700: '#519872',   // dark green
      600: '#525252',   // medium gray
      500: '#cfcfcf',   // lighter gray
      300: '#c4c4c4',   // light gray
      200: '#89ce94',   // light green
      100: '#f2f4ff'    // white
    },
  }
  
  const theme = extendTheme({ colors })
 

const appDiv = document.getElementById('app');
    render(<ChakraProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChakraProvider>, appDiv);
