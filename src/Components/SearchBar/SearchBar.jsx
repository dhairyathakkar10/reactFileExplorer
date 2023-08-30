import { handleInput } from "../../redux/fileExplorerSlice";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";

const SearchBar = (props) => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.fileExplorer);
  return (
    <div>
      <input
        type="text"
        className="nameInputBox"
        placeholder="Enter File/Folder name here"
        id="fileName"
        value={state.fName}
        onChange={(e) => {
          let name = e.target.value;
          console.log(name);
          dispatch(handleInput({ name }));
        }}
      />
      <span className="error" id="error"></span>
    </div>
  );
};
export default SearchBar;
