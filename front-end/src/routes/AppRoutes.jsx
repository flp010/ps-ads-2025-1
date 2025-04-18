import { Routes, Route} from 'react-router-dom'

import Homepage from '../pages/Homepage'

import LoginPage from '../pages/LoginPage'

import CustomersList from '../pages/customers/CustomersList'
import CustomersForm from '../pages/customers/CustomersForm'
import CarsList from '../pages/cars/CarsList'
import CarsForm from '../pages/cars/CarsForm'
import NovoComponente from '../pages/NovoComponente'


export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element = { <Homepage />} />
            <Route path="/login" element = { <LoginPage />} />
            <Route path="/NovoComponente" element = { <NovoComponente/>} />
            <Route path="/customers" element = { <CustomersList />} />
            <Route path="/customers/new" element = { <CustomersForm />} />
            <Route path="/customers/:id" element = { <CustomersForm />} />
            <Route path="/cars" element = { <CarsList />} />
            <Route path="/cars/new" element = { <CarsForm />} />
            <Route path="/cars/:id" element = { <CarsForm />} />

        </Routes>
    )
}