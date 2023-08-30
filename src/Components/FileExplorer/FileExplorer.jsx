import "./FileExplorer.css";
import SearchBar from "../SearchBar/SearchBar";
import FileExplorerDiv from "../FileExplorerDiv/FileExplorerDiv";
import { useSelector } from "react-redux";
const FileExplorer = () => {
  let state = useSelector((state) => state.fileExplorer);
  return (
    <div className="Wrapper">
      <h2 className="text">Hii From FileExplorer!!</h2>
      <SearchBar />
      <div>
        <FileExplorerDiv fileExplorerData={state.data} />
      </div>
    </div>
  );
};

export default FileExplorer;
