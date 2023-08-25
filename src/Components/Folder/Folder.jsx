import "./Folder.css";
const Folder = (props) => {
  return (
    <div className="folderWrapper">
      <span className="rotate">&#10148;</span>
      <span>{props.name}</span>
      {console.log(props.inputName)}
      {props.inputName ? (
        <span>
          <span className="createFolderBtn">&#128193;</span>
          <span className="createFileBtn">&#128196;</span>
        </span>
      ) : (
        ""
      )}
      <span className="deleteBtn">&#x2715;</span>
      <span className="rename">&#9998;</span>
    </div>
  );
};
export default Folder;
