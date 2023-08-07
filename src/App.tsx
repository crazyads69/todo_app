import React from 'react';
import { Login } from './Login';
import { Loading } from './components/Loading';
function App() {
    return (
        // Create full screen container
        <div className="App">
            <div className="container flex flex-col items-center min-w-full min-h-full">
                <Loading />
                <Login />
            </div>
        </div>
    );
}

export default App;
