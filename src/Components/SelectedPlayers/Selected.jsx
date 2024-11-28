import PropTypes from "prop-types";
import Select from "./Select";
// import { useState } from "react";

const Selected = ({ selected, handleRemove, handleAddMore }) => {
    return (
        <div>
            <div className="space-y-5 py-8">
                {
                    selected.map(player => (
                        <Select key={player.name} select={player} handleRemove={handleRemove}></Select>
                    ))
                }
            </div>
            <button
                onClick={handleAddMore}
                className="bg-[#E7FE29] px-3 py-2 rounded-lg">Add More Player</button>
        </div>
    );
};

Selected.propTypes = {
    selected: PropTypes.array.isRequired,
    handleRemove: PropTypes.func,
    handleAddMore: PropTypes.func
}

export default Selected;