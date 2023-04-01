import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { WomenSection } from './WomenSection'
import { MenSection } from './MenSection'
import { Homepage } from './Homepage'
import { Login } from './Login'
import { WomenSingleProductPage } from './WomenSingleProductPage'
import { PrivateRoute } from './AuthContext/PrivateRoute'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/women/t-shirts' element={<WomenSection />} />
                <Route path='/women/products/t-shirts/:id' element={
                    <PrivateRoute>
                        <WomenSingleProductPage />
                    </PrivateRoute>

                } />

                <Route path='/men' element={<MenSection />} />
                <Route path='/men' element={<MenSection />} />
                <Route path='/login' element={<Login />} />

                {/* <Route to='/kids' element={<KidsCard />} /> */}
                {/* <Route path='*' element={<NoPageFound />} /> */}
                <Route />
            </Routes>
        </div>
    )
}
