import "./App.css";
import JsonForm from "./components/JsonForm";
import CustomButton from "./components/CustomButton";

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
        <hr className="form-divider" />
        <div className="button-navbottom">
          <CustomButton label="Login" />
          <CustomButton label="Sign Up" />
        </div>
      </div>
    </>
  );
}

export default App;
