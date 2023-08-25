import "./FileExplorer.css";
import SearchBar from "../SearchBar/SearchBar";
import Folder from "../Folder/Folder";
import File from "../File/File";
import { useState } from "react";
const FileExplorer = (props) => {
  console.log(props.fileExplorer);
  const [fName, setFName] = useState("");
  return (
    <div className="Wrapper">
      <h2 className="text">Hii From FileExplorer!!</h2>
      <SearchBar fName={fName} setFName={setFName} />
      {console.log(fName)}
      {props.fileExplorer.map((el) =>
        el.type === "folder" ? (
          <Folder name={el.name} inputName={fName} />
        ) : (
          <File name={el.name} inputName={fName} />
        )
      )}
    </div>
  );
};

export default FileExplorer;
