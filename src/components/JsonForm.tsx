import "./components.css";

function JsonForm() {
  const fields = [
    ["ID", "input", ""],
    ["PW", "input", ""],
  ];
  const formType = "login"; //eventually make it allow other types
  return (
    <>
      <div className="json-container">
        <h1>&#123;</h1>
        {fields.map((field) => (
          <div className="side-by-side-mapping">
            <h1 className="tab">&quot;{field[0]}&quot; : &nbsp;</h1>
            <h1>
              &quot;{" "}
              {field[1] === "input" ? (
                <input
                  className="field-input"
                  id={`${formType}-field-${field[0]}`}
                ></input>
              ) : (
                field[2]
              )}{" "}
              &quot;,
            </h1>
          </div>
        ))}
        <h1>&#125;</h1>
      </div>
    </>
  );
}

export default JsonForm;
