import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { WomenSection } from './WomenSection'
import { Homepage } from './Homepage'
import { WomenSingleProductPage } from './WomenSingleProductPage'
import { PrivateRoute } from './AuthContext/PrivateRoute'
import Cart from '../components/Cart/Cart'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/women' element={<WomenSection />} />
                <Route path='/women/:id' element={
                    <PrivateRoute>
                        <WomenSingleProductPage />
                    </PrivateRoute>
                } />

                <Route path='/cart' element={<Cart />} />
             
            </Routes>
        </div>
    )
}



{/* <Route path='*' element={<NoPageFound />} /> */}