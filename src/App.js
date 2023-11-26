import React from 'react';
import GlobalStyle from "./globalStyle";
import StartSection from "./components/startSection"
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";

function App() {

    return (
        <div>
            <GlobalStyle/>
            <StartSection/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    );
}

export default App;
