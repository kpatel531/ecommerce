import { Router } from 'express'
import auth from '../middleware/auth.js'
import { addAddressController, deleteAddresscontroller, getAddressController, getOrderAddressController, updateAddressController } from '../controllers/address.controller.js'

const addressRouter = Router()

addressRouter.post('/create',auth,addAddressController)
addressRouter.get("/get",auth,getAddressController)
addressRouter.get("/get/order",auth,getOrderAddressController)
addressRouter.put('/update',auth,updateAddressController)
addressRouter.delete("/disable",auth,deleteAddresscontroller)

export default addressRouter