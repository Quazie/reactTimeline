import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Timeline } from './components/Timeline';

const App: React.FC = () => {
    return (
        <div className="App">
            <Timeline birthYear={1987} gender="m" />
        </div>
    );
};

export default App;
