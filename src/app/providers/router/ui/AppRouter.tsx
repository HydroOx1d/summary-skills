import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {routeConfig.map(({path, element}) => {
          return (
            <Route key={path} path={path} element={element}/>
          )
        })}
      </Routes>
    </React.Suspense>
  );
};
