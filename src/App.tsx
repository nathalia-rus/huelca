import React from "react";
import AppName from "./components/atoms/appName";
import Navigation from "./components/molecules/navigation";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation
        menuitems={["home", "logs", "ratings", "charts"]}
        navigationurl={["home", "logs", "ratings", "charts"]}
      />
      <AppName name="Huelca" />
    </div>
  );
};

export default App;
