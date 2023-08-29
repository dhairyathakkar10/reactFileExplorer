import { useState } from "react";
import "./App.css";
import FileExplorer from "./Components/FileExplorer/FileExplorer";
function App() {
  const [fileExplorer, setFileExplorer] = useState([
    {
      id: -1,
      key: 0,
      level: 0,
      parentNodeId: -1,
      name: "root",
      type: "folder",
      children: [
        // {
        //   id: 1,
        //   level: 1,
        //   key: 0,
        //   parentNodeid: -1,
        //   name: "root",
        //   type: "file",
        //   children: null,
        // },
      ],
    },
  ]);
  return (
    <div className="App">
      <FileExplorer
        fileExplorer={fileExplorer}
        setFileExplorer={setFileExplorer}
      />
    </div>
  );
}

export default App;
