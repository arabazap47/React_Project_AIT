import React from 'react'
import { serviceData } from './products'
import { MdLocalShipping } from "react-icons/md";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import './Css/Services.css'

const Services = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row row-cols-4">
                <div class="card_s">
                    <div className="icon">
                        <p className='log'><MdLocalShipping /></p>
                    </div>
                    <h2>Title Name</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card_s">
                    <div className="icon">
                        <p className='log'><IoCard /></p>
                    </div>
                    <h2>Safe Payment</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card_s">
                    <div className="icon">
                        <p className='log'><FaShieldAlt /></p>
                    </div>
                    <h2>Secure Payment</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card_s">
                    <div className="icon">
                        <p className='log'><RiRefund2Fill /></p>
                    </div>
                    <h2>Back Guarantee</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Services