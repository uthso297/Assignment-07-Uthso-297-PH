import PropTypes from "prop-types";

const Buttons = ({ handleShow1, handleShow2, selectedP, show }) => {
    return (
        <div className="flex justify-between">
            <p className="text-xl font-bold">
                {
                    show === 'A' ? `Available Players` : `Selected Players: ${selectedP}/6 `
                }
            </p>
            <div className="flex border-2 rounded-lg px-2 font-bold">
                <button onClick={handleShow1} className="py-2 border-r-2 pr-1">Available</button>
                <button onClick={handleShow2} className="px-1 py-2">Selected {selectedP}</button>
            </div>

        </div>

    );
};

Buttons.propTypes = {
    handleShow1: PropTypes.func.isRequired,
    handleShow2: PropTypes.func.isRequired,
    selectedP: PropTypes.number.isRequired,
    show: PropTypes.string
}

export default Buttons;