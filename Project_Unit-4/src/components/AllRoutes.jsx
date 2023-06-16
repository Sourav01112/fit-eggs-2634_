import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { WomenSection } from './WomenSection'
import { Homepage } from './Homepage'
import { WomenSingleProductPage } from './WomenSingleProductPage'
import { PrivateRoute } from './AuthContext/PrivateRoute'
// import Cart from '../components/Cart/Cart'
import { NoPageFound } from './NoPageFound'
import { Cart } from './Cart'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={<Homepage />} />
                <Route path='/women' exact element={<WomenSection />} />
                <Route path='/women/:id' exact element={
                    <PrivateRoute>
                        <WomenSingleProductPage />
                    </PrivateRoute>
                } />

                <Route path='/cart' exact element={<Cart />} />
                <Route path='*' exact element={<NoPageFound />} />

            </Routes>
        </div>
    )
}


