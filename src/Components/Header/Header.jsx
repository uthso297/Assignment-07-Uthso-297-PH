import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";

const Header = ({credit}) => {
  return (
    <div className='flex justify-between items-center'>
        <div>
                <img src={logo} alt="" />
        </div>
        <div className='flex items-center gap-16'>
                <ul className='flex gap-6 opacity-70'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <button className='flex gap-1 border-2 rounded-lg px-4 py-2 items-center justify-center'>
                    <span className='text-lg font-bold'>{credit}</span>
                    <p className='text-lg font-bold'>Coin</p>
                    <span className='text-yellow-600 text-xl'><BsCoin /></span>
                </button>
        </div>
    </div>
  )
}

Header.propTypes = {
    credit: PropTypes.number.isRequired
}

export default Header