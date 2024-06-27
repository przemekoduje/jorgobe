import "./filter.scss";
import { useState } from "react";

export default function Filter({ onFilterChange }) {
  const [type, setType] = useState("");
  const [feature, setFeature] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onFilterChange(e.target.value, feature);
  };

  const handleFeatureChange = (e) => {
    setFeature(e.target.value);
    onFilterChange(type, e.target.value);
  };
  
  return (
    <div className="filter">
      <div className="content">
        <h1>Products</h1>
        <div className="filters">
          <div className="block">
            <label className="filter-label">By Type:</label>
            <select className="custom-select" value={type} onChange={handleTypeChange}>
              <option value="">All</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
          <div className="block">
            <label className="filter-label">By Feature:</label>
            <select className="custom-select" value={feature} onChange={handleFeatureChange}>
              <option value="">All</option>
              <option value="feature1">Feature 1</option>
              <option value="feature2">Feature 2</option>
              <option value="feature3">Feature 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
