import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = ({ target }) => {
        setInputValue(target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 2) return;
        onNewCategory(newInputValue);
        setInputValue("");
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Nueva categoria"
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};
