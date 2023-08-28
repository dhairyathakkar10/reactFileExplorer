import "./SearchBar.css";
const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        class="nameInputBox"
        placeholder="Enter File/Folder name here"
        id="fileName"
        value={props.fName}
        onChange={(e) => {
          props.setFName(e.target.value);
        }}
      />
      <span class="error" id="error"></span>
    </div>
  );
};
export default SearchBar;
