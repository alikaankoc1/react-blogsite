import React from "react";
import Header from "./Header";
import { city } from "./Data";
import City from "./City";

function App() {
  return (
    <div>
      <Header />
      <div className="city-list">
        {city?.map((uni) => (
          <City key={uni.id} uni={uni} />
        ))}
      </div>
    </div>
  );
}

export default App;
