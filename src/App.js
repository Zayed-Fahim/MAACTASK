import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthProvider";
import Loader from "./pages/SmallComponents/Loader";
import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <>
      <style jsx="true">
        {`
          .background {
            height: 910px;
          }
        `}
      </style>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="background">
          <Router />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      )}
    </>
  );
};

export default App;
