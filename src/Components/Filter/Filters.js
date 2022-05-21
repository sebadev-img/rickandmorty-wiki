import React from "react";
import "./Filters.css";

let activeStatus,
  activeGender = null;

function Filters({ setStatus, setGender, setCurrentPage }) {
  const clearFilters = () => {
    if (activeStatus || activeGender) {
      setCurrentPage(1);
      setStatus("");
      setGender("");
      if (activeStatus) {
        activeStatus.checked = false;
      }
      if (activeGender) {
        activeGender.checked = false;
      }
    }
  };

  const handleStatusChange = (e) => {
    activeStatus = e.target;
    setStatus(e.target.value);
  };
  const handleGenderChange = (e) => {
    activeGender = e.target;
    setGender(e.target.value);
  };

  return (
    <nav className="filter-container">
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
      <ul className="filter-title-container">
        <li className="status-container">
          <h3 className="filter-title">Status</h3>
          <ul className="status-link-container">
            <li className="filter-link">
              <input
                type="radio"
                name="status"
                id="alive"
                value="alive"
                onChange={handleStatusChange}
                className="filter-link-input"
              />
              <label htmlFor="alive" className="filter-link-label">
                alive
              </label>
            </li>
            <li className="filter-link">
              <input
                type="radio"
                name="status"
                id="dead"
                value="dead"
                onChange={handleStatusChange}
                className="filter-link-input"
              />
              <label htmlFor="dead" className="filter-link-label">
                dead
              </label>
            </li>
            <li className="filter-link">
              <input
                type="radio"
                name="status"
                id="unknown"
                value="unknown"
                onChange={handleStatusChange}
                className="filter-link-input"
              />
              <label htmlFor="unknown" className="filter-link-label">
                unknown
              </label>
            </li>
          </ul>
        </li>
        <li className="status-container">
          <h3 className="filter-title">Gender</h3>

          <ul className="gender-link-container">
            <li className="filter-link">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleGenderChange}
                className="filter-link-input"
              />
              <label htmlFor="female" className="filter-link-label">
                female
              </label>
            </li>
            <li className="filter-link">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleGenderChange}
                className="filter-link-input"
              />
              <label htmlFor="male" className="filter-link-label">
                male
              </label>
            </li>
            <li className="filter-link">
              <input
                type="radio"
                name="gender"
                id="genderless"
                value="genderless"
                onChange={handleGenderChange}
                className="filter-link-input"
              />
              <label htmlFor="genderless" className="filter-link-label">
                genderless
              </label>
            </li>
            <li className="filter-link">
              <input
                type="radio"
                name="gender"
                id="unknownGender"
                value="unknown"
                onChange={handleGenderChange}
                className="filter-link-input"
              />
              <label htmlFor="unknownGender" className="filter-link-label">
                unknown
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Filters;
