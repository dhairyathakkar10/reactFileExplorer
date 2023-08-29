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
      visible: true,
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
      visible: true,
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
  const deleteElem = (storeData, id, parentNodeId) => {
    let root = false;
    if (id === -1) {
      root = true;
      window.alert("Cannot delete the root folder!");
    }
    if (!root) {
      storeData.forEach((el) => {
        if (el.id === parentNodeId) {
          let children = el.children;
          for (let i = 0; i < children.length; i++) {
            if (children[i].id === id) {
              children.splice(i, 1);
            }
          }
          el.children = children;
          setData([...store]);
        }
        if (el.children !== null) {
          deleteElem(el.children, id, parentNodeId);
        }
      });
    }
  };
  const rename = (storeData, id, parentNodeId) => {
    let root = false;
    if (id === -1) {
      window.alert("Cannot rename root Folder!");
      root = true;
    }
    if (!root) {
      storeData.forEach((el) => {
        if (el.id === parentNodeId) {
          let newName = window.prompt("Enter new Name");
          if (newName !== null || newName !== "") {
            let children = el.children;
            children.forEach((child) => {
              if (child.name === newName) {
                window.alert(
                  "This name already exists, Please try again with a new name"
                );
                return;
              }
            });
            children.forEach((child) => {
              if (child.id === id) {
                child.name = newName;
                setData([...store]);
              }
            });
          }
        }
        if (el.children !== null) {
          rename(el.children, id, parentNodeId);
        }
      });
    }

    console.log(storeData, " ", id, " ", parentNodeId);
  };
  const toggle = (folderData, id) => {
    console.log(id);
    console.log(folderData);
    folderData.children.forEach((child) => {
      child.visible = !child.visible;
      if (child.type === "folder" && child.children != []) {
        toggle(child, id);
      }
    });
    setData([...store]);
  };
  return (
    <div>
      {data.map((el) =>
        el.type === "folder" ? (
          <div style={{ paddingLeft: "20px" }}>
            {el.visible && (
              <Folder
                folderData={el}
                data={data}
                inputName={inputName}
                setData={setData}
                addFolder={addFolder}
                addFile={addFile}
                store={store}
                deleteElem={deleteElem}
                rename={rename}
                toggle={toggle}
              />
            )}
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
            {el.visible && (
              <File
                fileData={el}
                store={store}
                inputName={inputName}
                data={data}
                setData={setData}
                deleteElem={deleteElem}
              />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default FileExplorerDiv;
