import React from 'react';
import App from '../app';
import Results from '../components/results/index';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('should render All Data', async () => {
  const raw = await fetch ('https://pokeapi.co/api/v2/pokemon');
  let data = await raw.json();
  let results = Object.entries(data);
  console.log(results);
  render(<Results src={results} />);
  expect(results).toBeTruthy();
})