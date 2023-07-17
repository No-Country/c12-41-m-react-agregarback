import { useState } from "react"
import { MdEdit, MdSave } from 'react-icons/md';
import PropTypes from 'prop-types';

const EditableField = ({ name, value, label, regex, errorMsg, onChangeHandler, type, editable }) => {

    EditableField.propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired,
        regex: PropTypes.instanceOf(RegExp),
        errorMsg: PropTypes.string,
        onChangeHandler: PropTypes.func.isRequired,
        type: PropTypes.string,
        editable: PropTypes.bool.isRequired,
    };

    const [isDisabled, setIsDisabled] = useState(true)
    const [hasError, setHasError] = useState(false)
    const validate = (e) => {
        if (regex) {
            if (regex.test(e.target.value)) {
                setHasError(false);
            } else {
                setHasError(true);
            }
        }

        onChangeHandler(e);
    }
    return (
        <div className="flex flex-col align-bottom w-[90%] text-lg">
            <label htmlFor={label} className="block text-left text-yellow font-semibold">{label}</label>
            <div className="flex items-center gap-2">
                <input
                    className={`p-1 rounded-sm w-full border-b-2 border-yellow  bg-transparent text-white focus:outline-none ${isDisabled ? "" : "bg-[#0000004d]"}`}
                    type={type}
                    name={name}
                    value={value}
                    onChange={validate}
                    id={label}
                    disabled={isDisabled}
                />
                {editable ?
                    (isDisabled ?
                        <MdEdit onClick={() => setIsDisabled(false)} /> :
                        (hasError ? <MdSave color="#ff6767" /> : <MdSave onClick={() => setIsDisabled(true)} />)) :
                    <></>
                }
            </div>
            <p className="text-sm text-left text-[#ff6767] h-[1rem]">{hasError && errorMsg}</p>
        </div>
    )
}

export default EditableField