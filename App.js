import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("h1",{id:"heading"},"Hello World from react!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

{
  /* <div id='parent'>
    <div id='child1'>
        <h1>Iam h1 tag</h1>
        <h2>Iam h2 tag</h2>
    </div>
    <div id='child2'>
        <h1>Iam h1 tag</h1>
        <h2>Iam h2 tag</h2>
    </div>
</div> */
}

// const parent = React.createElement("div",{id:'parent'},[
//     React.createElement("div",{id:'child1'},[
//         React.createElement("h1",{},"Iam h1 tag"),
//         React.createElement("h2",{},"Iam h2 tag")
//     ]),
//     React.createElement("div",{id:'child2'},[
//         React.createElement("h1",{},"Iam h1 tag"),
//         React.createElement('h2',{},"Iam h2 tag")
//     ])
// ]);
// const heading = (
//     <div className="container">
//         <div>
//             <h1>Do Epic Shit!</h1>
//         </div>
//         <div>
//             <p>This is a random text for rendering</p>
//         </div>
//     </div>
// )
const DescriptionComponent = () => {
  return (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  );
};
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>Hello Namaste React!</h1>
        <DescriptionComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
