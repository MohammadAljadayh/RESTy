import React from "react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import LoadingSpinner from "../loading/loading";

function Results(props) {
  return (
    <section>
    <pre>{props.data ? <JSONPretty data={props.data} /> : <LoadingSpinner />}</pre>
    </section>
  );
}

export default Results;