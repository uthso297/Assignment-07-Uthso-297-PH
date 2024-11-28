import { IoIosContact } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import PropTypes from "prop-types";
const Player = ({ player, handleCredit }) => {
    const { image, name, country, role, rating, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className="border-2 rounded-lg p-4 space-y-4">
            <div>
                <img className="h-[195px] rounded-lg" src={image} alt="" />
            </div>

            <div className="flex items-center gap-1">
                <span><IoIosContact /></span>
                <p>Name: {name}</p>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <span><CiFlag1 /></span>
                    <p>Country: {country}</p>
                </div>
                <div>
                    <p>Type: {role}</p>
                </div>
            </div>

            <hr />

            <div>
                <p>Rating out of 5 : {rating}</p>
            </div>

            <div className="flex justify-between items-center">
                <p>{battingType}</p>
                <p>{bowlingType === "N/A" ? "Bowling: None" : `Bowling: ${bowlingType}`}</p>
            </div>

            <div className="flex justify-between items-center">
                <p>Price: {biddingPrice}</p>
                <button
                    onClick={() => handleCredit(biddingPrice, name, player)}
                    className="px-2 py-1 border-2 rounded-lg">Choose Player</button>
            </div>

        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleCredit: PropTypes.func.isRequired
}


export default Player;