import PropTypes from "prop-types";

import { MdDelete } from "react-icons/md";

const Select = ({ select, handleRemove }) => {
    const { name, role, image } = select;
    return (
        <div className="flex justify-between items-center border-2 rounded-lg px-2 py-3">
            <div className="flex items-center justify-between gap-2">
                <div>
                    <img className="h-20 w-20 rounded-lg" src={image} alt="" />
                </div>
                <div>
                    <p className="text-xl font-bold">{name}</p>
                    <p>{role}</p>
                </div>
            </div>

            <button
                onClick={() => handleRemove(name)}
                className="text-xl text-red-600">
                <MdDelete />
            </button>

        </div>
    );
};

Select.propTypes = {
    select: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Select;