const parent = React.createElement("div", { id: "parent" }, React.createElement("div", {}, [React.createElement("div", {}, [React.createElement("h1", {}, "I'm h1 element"), React.createElement("h2", {}, "I'm h2 element")]),React.createElement("div", {}, [React.createElement("h1", {}, "I'm h1 element"), React.createElement("h2", {}, "I'm h2 element")])]))

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)