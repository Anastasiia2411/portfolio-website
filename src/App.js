import React from 'react';
import GlobalStyle from "./globalStyle";
import StartSection from "./components/startSection"
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import ReactFullpage from '@fullpage/react-fullpage';

function App() {

    return (
        <div>
            <GlobalStyle/>
            <ReactFullpage
                // Здесь можно добавить опции для fullPage.js, например:
                scrollingSpeed={1000} /* Время в миллисекундах для скролла между секциями */
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section"><StartSection/></div>
                            <div className="section"><SecondSection/></div>
                            <div className="section"><ThirdSection/></div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
}

export default App;
