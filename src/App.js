// import logo from './logo.png'
import './App.css';
import Graph from './Graph.js';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { useEffect } from 'react';

Chart.register(CategoryScale)

function App() {
  useEffect(() => {
    document.title = "Game's Graph";
  }, [])

  return (
    <Graph />
  );
}

export default App;
