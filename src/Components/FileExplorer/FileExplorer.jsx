import "./FileExplorer.css";
import SearchBar from "../SearchBar/SearchBar";
import FileExplorerDiv from "../FileExplorerDiv/FileExplorerDiv";
import { useState } from "react";
const FileExplorer = (props) => {
  console.log(props.fileExplorer);
  const [fName, setFName] = useState("");
  return (
    <div className="Wrapper">
      <h2 className="text">Hii From FileExplorer!!</h2>
      <SearchBar fName={fName} setFName={setFName} />
      <div>
        <FileExplorerDiv
          data={props.fileExplorer}
          store={props.fileExplorer}
          inputName={fName}
          setData={props.setFileExplorer}
          setFName={setFName}
        />
      </div>
    </div>
  );
};

export default FileExplorer;
