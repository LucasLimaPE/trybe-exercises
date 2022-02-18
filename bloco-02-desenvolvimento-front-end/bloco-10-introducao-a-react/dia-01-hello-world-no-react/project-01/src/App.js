/* Este código foi feito com base no gabarito do course */

import './App.css';
import React from 'react';

const tasks = ['Tomar banho', 'Jantar', 'Escovar os dentes', 'Dormir'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render() {
  return (
    <ul>{ tasks.map(task => Task(task)) }</ul>
  );
 }
}

export default App;
