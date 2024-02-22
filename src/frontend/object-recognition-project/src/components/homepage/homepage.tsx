import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [inputData, setInputData] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const runEDA = () => {
        axios.post('/eda', { data: inputData })
            .then(response => setResult(JSON.stringify(response.data)))
            .catch(error => console.error('There was an error!', error));
    };

    const trainModel = () => {
        axios.post('/train', { data: inputData })
            .then(response => setResult(JSON.stringify(response.data)))
            .catch(error => console.error('There was an error!', error));
    };

    const testModel = () => {
        axios.post('/test', { data: inputData })
            .then(response => setResult(JSON.stringify(response.data)))
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <div>
            <h1>Machine Learning Operations</h1>
            <textarea value={inputData} onChange={handleInputChange} placeholder="Enter your input data here" />
            <div>
                <button onClick={runEDA}>Run EDA</button>
                <button onClick={trainModel}>Train Model</button>
                <button onClick={testModel}>Test Model</button>
            </div>
            <div>
                <h2>Results:</h2>
                <p>{result}</p>
            </div>
        </div>
    );
};

export default HomePage;
