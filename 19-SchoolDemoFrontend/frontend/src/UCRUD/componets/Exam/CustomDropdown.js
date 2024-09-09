import React, { useState, useRef, useEffect } from 'react';
// import classes from './CustomDropdown.module.css'; // Import your CSS module
import classes from "../../CSS/Exam/ExamList.module.css";

const CustomDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0] || {});
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <div className={classes.selected} onClick={toggleDropdown}>
        {selectedOption.stud_name || 'Select an option'}
      </div>
      {isOpen && (
        <div className={classes.options}>
          {options.map((option) => (
            <div
              key={option.id}
              className={classes.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.stud_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;