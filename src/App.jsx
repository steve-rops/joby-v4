import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DrawerContext } from "./features/Drawer/DrawerContext";

import MobileLayout from "./MobileLayout";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="app"
          element={
            <DrawerContext>
              <MobileLayout />
            </DrawerContext>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
