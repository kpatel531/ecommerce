
import React from 'react'
import { useSelector } from 'react-redux'
import isAdmin from '../utils/isAdmin'
import RestrictPage from '../components/RestrictPage'

const AdminPermision = ({children}) => {
    const user = useSelector(state => state.user)


  return (
    <>
        {
          isAdmin(user.role) ?  children : <RestrictPage />
        }
    </>
  )
}

export default AdminPermision