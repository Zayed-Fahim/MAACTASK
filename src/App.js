import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { AuthContext } from "./contexts/AuthProvider";
import Router from "./routes/Router";
import RedirectScreen from "./pages/SmallComponents/Home/RedirectScreen";
import Loader from "./pages/SmallComponents/Home/Loader";

const App = () => {
  const { isLoading, currentPath } = useContext(AuthContext);
  const [redirectLoading, setRedirectLoading] = useState(false);

  return redirectLoading ? (
    <RedirectScreen />
  ) : (
    <>
      <style jsx="true">
        {`
          .background {
            height: 910px;
          }
        `}
      </style>
      {isLoading &&
      (currentPath === "/" ||
        currentPath === "/login" ||
        currentPath === "/register" ||
        currentPath === "/dashboard/area-list") ? (
        <Loader />
      ) : (
        <div className="background">
          <Router
            redirectLoading={redirectLoading}
            setRedirectLoading={setRedirectLoading}
          />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      )}
    </>
  );
};

export default App;
