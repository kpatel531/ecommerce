import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../provider/GlobalProvider'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import Loading from './Loading'
import { useSelector } from 'react-redux'
import { FaMinus, FaPlus } from "react-icons/fa6";

const AddToCartButton = ({ data }) => {
    const { fetchCartItem, updateCartItem, deleteCartItem } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const cartItem = useSelector(state => state.cartItem.cart)
    const [isAvailableCart, setIsAvailableCart] = useState(false)
    const [qty, setQty] = useState(0)
    const [cartItemDetails, setCartItemsDetails] = useState()

    const handleAddTocart = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.addTocart,
                data: {
                    productId: data?._id
                }
            })

            const { data: responseData } = response

            if (responseData.success) {
                toast.success(responseData.message)
                if (fetchCartItem) {
                    fetchCartItem()
                }
            }
        } catch (error) {
            AxiosToastError(error)
        } finally {
            setLoading(false)
        }
    }

    // check if item is already in cart
    useEffect(() => {
        const checkingitem = cartItem.some(item => item.productId._id === data._id)
        setIsAvailableCart(checkingitem)

        const product = cartItem.find(item => item.productId._id === data._id)
        setQty(product?.quantity)
        setCartItemsDetails(product)
    }, [data, cartItem])

    const increaseQty = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            setLoading(true)
            const response = await updateCartItem(cartItemDetails?._id, qty + 1)
            if (response.success) {
                toast.success("Item added")
            }
        } catch (error) {
            AxiosToastError(error)
        } finally {
            setLoading(false)
        }
    }

    const decreaseQty = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            setLoading(true)
            if (qty === 1) {
                await deleteCartItem(cartItemDetails?._id)
            } else {
                const response = await updateCartItem(cartItemDetails?._id, qty - 1)
                if (response.success) {
                    toast.success("Item removed")
                }
            }
        } catch (error) {
            AxiosToastError(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='w-full max-w-[150px]'>
            {loading ? (
                <div className="flex items-center justify-center h-[40px]">
                    <Loading />
                </div>
            ) : isAvailableCart ? (
                <div className='flex items-center overflow-hidden rounded-full shadow-md w-fit'>
                    <button
                        onClick={decreaseQty}
                        className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-l-full'
                    >
                        <FaMinus />
                    </button>

                    <p className='bg-white text-gray-800 font-semibold px-6 py-2 text-sm'>
                        {qty}
                    </p>

                    <button
                        onClick={increaseQty}
                        className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-full'
                    >
                        <FaPlus />
                    </button>
                </div>
            ) : (
                <div className="flex items-center overflow-hidden rounded-full shadow-md w-fit">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-l-full"
                        disabled
                    >
                        <FaMinus />
                    </button>
                    <p className="bg-white text-gray-800 font-semibold px-6 py-2 text-sm">
                        {0}
                    </p>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-full"
                        onClick={handleAddTocart}
                    >
                        <FaPlus />
                    </button>
                </div>
            )}
        </div>
    )
}

export default AddToCartButton
