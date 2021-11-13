import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 bg-pink-700 text-white mt-10 py-10'>
                <div>
                    <h1 className='text-2xl font-semibold'>Information</h1>
                    <ul className='mt-4'>
                        <li><Link to='/dummyLocation'>Search</Link></li>
                        <li><Link to='/dummyLocation'>Consultant</Link></li>
                        <li><Link to='/dummyLocation'>Help &#38; FAQs</Link></li>
                        <li><Link to='/dummyLocation'>Location &#38; Store</Link></li>
                        <li><Link to='/dummyLocation'>News</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Support</h1>
                    <ul className='mt-4'>
                        <li><Link to='/dummyLocation'>Contact Us</Link></li>
                        <li><Link to='/dummyLocation'>Refund &#38; Returns</Link></li>
                        <li><Link to='/dummyLocation'>Term of Services</Link></li>
                        <li><Link to='/dummyLocation'>Press Release</Link></li>
                        <li><Link to='/dummyLocation'>Location &#38; Store</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl mt-10 md:mt-0 font-semibold'>Contact Us</h1>
                    <ul className='mt-4'>
                        <li>111 Dummy street, Dummy 90225</li>
                        <li><i class="fas fa-phone"></i> +60 121442352</li>
                        <li><i class="fas fa-envelope-square"></i> info@babycare.com</li>
                        <li><div className='space-x-5 text-xl mt-2'>
                            <Link to='/dummyLocation'><i class="fab fa-facebook"></i></Link>
                            <Link to='/dummyLocation'><i class="fab fa-instagram"></i></Link>
                            <Link to='/dummyLocation'><i class="fab fa-youtube"></i></Link>
                            <Link to='/dummyLocation'><i class="fab fa-twitter"></i></Link>
                        </div></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl mt-10 md:mt-0 font-semibold'>Stay Updated</h1>
                    <div className='mt-4 mx-2'>
                        <input className='block w-full rounded py-2 text-center' placeholder='Your Email' type="email" name="" id="" />
                        <button className='bg-pink-600 mt-2 w-full rounded py-2 text-center'>Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
            <div className='bg-black text-white p-2'>
                <p>Copyright &copy; 2021, <span className='text-pink-300'>Baby Care Inc.</span></p>
            </div>
        </div>
    );
};

export default Footer;