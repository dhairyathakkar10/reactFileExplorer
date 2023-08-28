import "./FileExplorerDiv.css";
import Folder from "../Folder/Folder";
import File from "../File/File";
let uniqueId = -1;
const generateId = () => {
  uniqueId++;
  return uniqueId;
};

const FileExplorerDiv = ({ store, data, inputName, setData, setFName }) => {
  const addFolder = (storeData, id) => {
    let newObj = {
      id: generateId(),
      parentNodeId: id,
      name: inputName,
      children: [],
      type: "folder",
    };
    storeData.forEach((el) => {
      let duplicateName = false;
      if (el.id === id) {
        el.children.forEach((el) => {
          if (el.name === inputName) {
            window.alert("Folder with this name already exists!");
            duplicateName = true;
          }
        });
        if (!duplicateName) {
          el.children.push(newObj);
        }
        setFName("");
      } else if (el.children) {
        addFolder(el.children, id);
      }
    });
  };
  const addFile = (storeData, id) => {
    let newObj = {
      id: generateId(),
      parentNodeId: id,
      name: inputName,
      children: null,
      type: "file",
    };
    storeData.forEach((el) => {
      let duplicateName = false;
      if (el.id === id) {
        el.children.forEach((el) => {
          if (el.name === inputName) {
            window.alert("File with this name already exists!");
            duplicateName = true;
          }
        });
        if (!duplicateName) {
          el.children.push(newObj);
        }
        setFName("");
      } else if (el.children) {
        addFile(el.children, id);
      }
    });
  };
  return (
    <div>
      {data.map((el) =>
        el.type === "folder" ? (
          <div style={{ paddingLeft: "20px" }}>
            <Folder
              folderData={el}
              data={data}
              inputName={inputName}
              setData={setData}
              addFolder={addFolder}
              addFile={addFile}
              store={store}
            />
            {el.children && (
              <FileExplorerDiv
                data={el.children}
                store={store}
                inputName={inputName}
                setData={setData}
                setFName={setFName}
              />
            )}
          </div>
        ) : (
          <div style={{ paddingLeft: "20px" }}>
            <File
              fileData={el}
              inputName={inputName}
              data={data}
              setData={setData}
            />
          </div>
        )
      )}
    </div>
  );
};

export default FileExplorerDiv;
