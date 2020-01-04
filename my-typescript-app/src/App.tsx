import React from 'react';
import './App.css';
import { Timeline } from './components/Timeline';
import { DateTime } from 'luxon';

const App: React.FC = () => {
    return (
        <div className="App">
            <Timeline birthDay={DateTime.fromJSDate(new Date('4/30/1987'))} gender="m" />
        </div>
    );
};

export default App;
