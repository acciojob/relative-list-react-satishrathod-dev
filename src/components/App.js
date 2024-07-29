// import React, { useState } from "react";

// const App = () => {
//   const [input, setInput] = useState("");
//   const [items, setItems] = useState([]);

//   const handleInput = (event) => {
//     setInput(event.target.value);
//   };

//   const addItem = () => {
//     // setItems((t) => [...t, "list"]);
//     if (input.trim() !== "") {
//       setItems((prevItems) => [...prevItems, input]);
//       setInput("");
//     }
//   };

//   return (
//     <div id="main">
//       {/* Do not remove the main div */}
//       <input
//         id="input-value"
//         type="text"
//         value={input}
//         onChange={handleInput}
//       />
//       <button onClick={addItem}>Add Item</button>
//       {/* <ol id="relativeList">
//         {items.map((item, index) => (
//           <li id={`relativeListItem${index + 1}`} key={index}>
//             {item}
//           </li>
//         ))}
//       </ol> */}
//       <ol id="relativeList">
//         {items.map((item, index) => {
//           const itemId = `relativeListItem${index + 1}`;
//           console.log(itemId); // Log the id
//           return (
//             <li id={itemId} key={index}>
//               {item}
//             </li>
//           );
//         })}
//       </ol>
//     </div>
//   );
// };

// export default App;
import React from "react";

function RelativesList() {
  const relatives = ["John", "Jane", "Jim", "Jill"]; // replace with your relatives' names

  return (
    <div>
      <h1>Relative List</h1>
      <ol id="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
}

export default RelativesList;
