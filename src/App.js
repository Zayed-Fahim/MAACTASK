import "./App.css";
import Router from "./routes/Router";

const App = () => {
  return (
    <>
      <style jsx>
        {`
          .background {
            height: 910px;
          }
        `}
      </style>
      <div className="background">
        <Router />
      </div>
    </>
  );
};

export default App;
