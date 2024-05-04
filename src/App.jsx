import { BrowserRouter, Route, Routes } from "react-router-dom";

import MapLayout from "./features/map/MapLayout";
import JobsListing from "./features/Jobs/JobsListing/JobsListing";
import SingleJobLayout from "./features/Jobs/SingleJob/SingleJobLayout";
import About from "./About";
import Home from "./pages/Home";
import SignInComponent from "./features/auth/signIn/SignInComponent";
import SignUpComponent from "./features/auth/signup/SignUpComponent";
import ProtectedRoutes from "./features/auth/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route index element={<Home />} />
        <Route path="app" replace element={<ProtectedRoutes />}>
          <Route path="" element={<JobsListing />} />
          <Route path="map" element={<MapLayout />} />
        </Route>
        <Route path="app/:id" element={<SingleJobLayout />} />
        <Route path="sign-up" element={<SignUpComponent />} />
        <Route path="sign-in" element={<SignInComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
