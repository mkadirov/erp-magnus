import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import { Typography } from '@mui/material'
import PhotoBox from '../components/Purchases/PhotoBox'
import AddNewPurchase from '../components/Purchases/AddNewPurchase'

function Purchases() {
  return (
    <MainLayout>
        <AddNewPurchase/>
    </MainLayout>
  )
}

export default Purchases