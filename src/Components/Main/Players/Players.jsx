import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({ handleCredit, players }) => {
   
    return (
        <div className="grid grid-cols-3 gap-3 py-8">
            {
                players.map(player => <Player key={player.playerId} player={player} handleCredit={handleCredit}></Player>)
            }
        </div>
    );
};
Players.propTypes = {
    handleCredit: PropTypes.func.isRequired,
    players: PropTypes.array
}
export default Players;