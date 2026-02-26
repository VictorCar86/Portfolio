import React from "react";
import MainPage from "./pages/MainPage";
import Background from "./components/Background";

const App = () => {
    return (
        <Background>
            <MainPage />
        </Background>
    );
};

export default App;
