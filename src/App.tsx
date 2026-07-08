import "./App.css";
import JsonForm from "./components/JsonForm";

function App() {
  return (
    <>
      <div className="black-box">
        <div className="top-of-box">
          <p id="filename">
            <u>login.json</u>
          </p>
          <img id="logo" src="/favicon.svg" alt="Yeetcode logo" />
        </div>
        <div className="json-form">
          <JsonForm></JsonForm>
        </div>
        <div className="button-navbottom"></div>
      </div>
    </>
  );
}

export default App;
