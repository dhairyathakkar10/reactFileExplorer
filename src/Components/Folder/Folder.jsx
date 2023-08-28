import "./Folder.css";

const Folder = (props) => {
  return (
    <div className="folderWrapper">
      <span className="rotate">&#10148;</span>
      <span>{props.folderData.name}</span>

      {props.inputName !== "" ? (
        <span>
          <span
            className="createFolderBtn"
            onClick={() => props.addFolder(props.store, props.folderData.id)}
          >
            &#128193;
          </span>
          <span
            className="createFileBtn"
            onClick={() => props.addFile(props.store, props.folderData.id)}
          >
            &#128196;
          </span>
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
