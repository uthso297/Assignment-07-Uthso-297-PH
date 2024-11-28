import PropTypes from 'prop-types'
import bgimg from '../../assets/bg-shadow.png'
import criimg from '../../assets/banner-main.png'

const Hero = ({addCredit}) => {

    const divStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
      };

  return (
    <div style={divStyle} className='bg-[rgba(19,19,19,1)] rounded-xl my-3 py-5 space-y-5'>
        <div>
        <img className='mx-auto' src={criimg} alt="" />
        </div>
        <div className='text-center text-white'>
            <h1 className='text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='opacity-70'>Beyond Boundaries Beyond Limits</p>
        </div>
        <div className='text-center'>
        <button 
        onClick={addCredit}
        className='bg-[#E7FE29] px-3 py-2 rounded-lg'>
                Claim Free Credit
        </button>
        </div>
    </div>
  )
}

Hero.propTypes = {
    addCredit: PropTypes.func.isRequired
}

export default Hero