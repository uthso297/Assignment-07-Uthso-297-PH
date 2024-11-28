import bgimg from '../../assets/bg-shadow.png'

const Subscribe = () => {
    const divStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
      };
    return (
        <div className='p-4 border-2 rounded-lg bg-gray-50 backdrop-blur-lg mt-10'>
            <div style={divStyle} className='bg-[#b3b1b1] border-2 rounded-lg p-8 space-y-5'>
                <h1 className='text-4xl font-bold text-center'>Subscribe to Our Newsletter</h1>
                <p className='text-center'>Get the latest updates and news right in your inbox!</p>
                <div className='flex justify-center items-center gap-3'>
                    <input className='rounded-lg px-2 py-2' type="text" placeholder='Enter your email' />
                    <button className='rounded-lg px-2 py-2 border-2 bg-[#fac957]'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;