import React from 'react';
import './App.css';
import { Timeline } from './components/Timeline';

const App: React.FC = () => {
    return (
        <div className="App">
            <Timeline birthDay={new Date('4/30/1987')} gender="m" />
        </div>
    );
};

export default App;
