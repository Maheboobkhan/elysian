import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  newYorkdataArr,
  usdataArr,
  travledataArr,
  side1dataArr,
  posts,
  londondataArr,
} from "./component/data";
import Home from "./component/Home";
import Travel from "./component/Travel";
import London from "./component/London";
import Newyork from "./component/Newyork";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              newyork={newYorkdataArr}
              us={usdataArr}
              sideone={side1dataArr}
              post={posts}
            />
          }
        />

        {/* route1 */}
        <Route
          path="/newyork"
          element={
            <Newyork
              newyork={newYorkdataArr}
              sideone={side1dataArr}
              post={posts}
            />
          }
        />

        {/* route2 */}
        <Route
          path="/travel"
          element={
            <Travel
              travel={travledataArr}
              sideone={side1dataArr}
              post={posts}
            />
          }
        />

        {/* route 3 */}
        <Route
          path="/london"
          element={
            <London
              london={londondataArr}
              sideone={side1dataArr}
              post={posts}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
