import React from "react";
import "./form.scss";
import { useState } from 'react';

function Form(props) {

  const [method, setMethod] = useState('get');  // for methode
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon'); //For Url
  const [view, setView] = useState(false); // for view json file
  const [request, setrequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url
    };
    props.handleApiCall(formData,request);
  };

  
  const setUrlH = (e) => {
    setUrl(e.target.value);
  }

  const methodH = (e) => {
    setView(false);
    setMethod(e.target.id);
  }

  const textAreaH = (e) => {
    setView(true);
    setMethod(e.target.id);
  }

  const requestH = (e) => {
    setrequest(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={setUrlH} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={methodH} >GET </span>
          <span id="post" onClick={textAreaH} >POST</span>
          <span id="put" onClick={textAreaH} >PUT</span>
          <span id="delete" onClick={methodH}>DELETE </span>
        </label>
      </form>
      {view && <textarea rows="6" cols="10" onChange={requestH} />}

    </>
  );
}

export default Form;