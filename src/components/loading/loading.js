import React, { PropTypes } from 'react'
import "./loading.scss";
const LoadingSpinner = () => (
  <div className="loading_spinner-wrap">
    <svg
      className="loading_spinner"
      width="150"
      height="100"
      viewBox="0 0 60 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="15" r="4" />
      <circle cx="30" cy="15" r="4" />
      <circle cx="53" cy="15" r="4" />
    </svg>
  </div>
)

export default LoadingSpinner;