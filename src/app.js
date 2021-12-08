import React from 'react';

import './app.scss';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios'

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

import historyReducer, { addHistory, emptyHistory } from './components/reducer/reducer';
import History from './components/history/history';

const initialState = {
  history: []
}

function App(props) {

  const [requestParams, setRequestParams] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(historyReducer, initialState)

  const callApi = async (requestParams) => {

    let url = requestParams.url;
    let method = requestParams.method;
    let body = requestParams.body;
    let results = requestParams.results


    if (method == 'get' || method == 'delete') {
      await axios[method](url).then(result => {
        setData([result.data]);
        dispatch(addHistory(requestParams, result.data));
        setLoading(true);
      })
    } else {
      await axios[method](url, body).then(result => {
        setData([...data, result.data]);
        dispatch(addHistory(requestParams, result.data));
        setLoading(true);
      })
    }
  }

  

  return (
    <React.Fragment>
      <Header />
  
      {state.history.length ? <History history={state.history} /> : null}
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );

}

export default App;
