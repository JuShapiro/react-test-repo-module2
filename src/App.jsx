import "modern-normalize";
import { useState } from "react";
import "./App.css";

// const App = () => {
//   const handleClick = () => {
//     alert("I'm a button!");
//   };
//   return <button onClick={handleClick}>Click me!</button>;
// };

// // const App = () => {
// //   return <button onClick={() => alert("Im a button!")}>Click me!</button>;
// // };

// export default App;

// const App = () => {
//   const handleClick = (event) => {
//     console.log(event);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(event) => console.log(event)}>Second button</button>
//     </>
//   );
// };

// export default App;

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// export default App;

// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// export default App;

// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// export default App;

const App = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };
  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };
  return (
    <div>
      <p>
        x: {values.x} y: {values.y}
      </p>
      <button onClick={updateX}>UPDATE X</button>
      <button onClick={updateY}>UPDATE Y</button>
    </div>
  );
};

export default App;
