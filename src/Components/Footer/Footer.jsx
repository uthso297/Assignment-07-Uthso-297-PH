import footlogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className="bg-[#040D11] py-8">
            <div>
                <img className='mx-auto' src={footlogo} alt="" />
            </div>

            <div className='max-w-5xl mx-auto py-8 text-white flex justify-between'>
                <div>
                    <h5 className='text-lg font-bold'>About Us</h5>
                    <p className='opacity-70'>We are a passionate team dedicated to <br /> providing the best services to our customers.</p>
                </div>

                <div>
                    <h5 className='text-lg font-bold'>Quick Links</h5>
                    <ul className='opacity-70'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='space-y-1'>
                    <h5 className='text-lg font-bold'>Subscribe</h5>
                    <p className='opacity-70'>Subscribe to our newsletter for the latest updates.</p>
                    <div className=''>
                        <input className='rounded-l-lg px-2 py-2' type="text" placeholder='Enter your Email'/>
                        <button className='px-2 py-2 bg-[#FE9F30] text-black rounded-r-lg'>Subscribe</button>
                    </div>
                </div>
            </div>

            <hr className='bg-black' />
            <p className='text-center text-white opacity-70'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;