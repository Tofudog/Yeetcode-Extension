import "./components.css";

type CustomButtonProps = {
  label: string;
};

function CustomButton({ label }: CustomButtonProps) {
  const tempFunction = () => {
    alert("The button was clicked!");
  };
  return (
    <button className="custom-button" onClick={tempFunction}>
      {label}
    </button>
  );
}

export default CustomButton;
