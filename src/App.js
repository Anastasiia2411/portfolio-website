import React from 'react';
import GlobalStyle from "./globalStyle";
import StartSection from "./components/startSection"
import SecondSection from "./components/secondSection";

function App() {

    return (
        <div>
            <GlobalStyle/>
            <StartSection/>
            <SecondSection/>
        </div>
    );
}

export default App;
