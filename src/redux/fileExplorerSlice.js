import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fName: "",
  data: [
    {
      id: -1,
      level: 0,
      parentNodeId: -1,
      name: "root",
      type: "folder",
      visible: true,
      children: [],
    },
  ],
};

export const fileExplorerSlice = createSlice({
  name: "fileExplorer",
  initialState,
  reducers: {
    handleInput: (state, action) => {
      state.fName = action.payload.name;
    },
    addFolder1: (state, action) => {
      addFolder(state.data, action.payload.id, state.fName);
    },
    addFile1: (state, action) => {
      addFile(state.data, action.payload.id, state.fName);
    },
    deleteElement: (state, action) => {
      deleteElem(state.data, action.payload.id, action.payload.parentNodeId);
    },
    renameElem: (state, action) => {
      rename(state.data, action.payload.id, action.payload.parentNodeId);
    },
    toggleElement: (state, action) => {
      toggle(state.data, action.payload.folderData);
    },
  },
});

//Functions
let uniqueId = -1;
const generateId = () => {
  uniqueId++;
  return uniqueId;
};

const addFolder = (storeData, id, inputName) => {
  console.log(inputName);
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
    } else if (el.children) {
      addFolder(el.children, id, inputName);
    }
  });
};
const addFile = (storeData, id, inputName) => {
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
    } else if (el.children) {
      addFile(el.children, id, inputName);
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
              window.alert("This name already exists, Please try again with a new name");
              return;
            }
          });
          children.forEach((child) => {
            if (child.id === id) {
              child.name = newName;
            }
          });
        }
      }
      if (el.children !== null) {
        rename(el.children, id, parentNodeId);
      }
    });
  }
};
const hideAll = (data) => {
  data.forEach((el) => {
    el.visible = !el.visible;
    console.log(el.children);
    if (el.children) {
      console.log("children");
      hideAll(el.children);
    }
  });
};
const toggle = (storeData, folderData) => {
  console.log(folderData);
  console.log(storeData);
  storeData.forEach((el) => {
    if (el.id === folderData.id) {
      hideAll(el.children);
      return;
    }
    if (el.children !== [] || el.children !== null) {
      toggle(el.children, folderData);
    }
  });
  //   let childrend = folderData.children;
  //   childrend.forEach((child) => {
  //     const objCopy = { ...child };
  //     // objCopy.visible = !objCopy.visible;
  //     child.visible = !objCopy.visible;
  //     console.log(objCopy);
  //     if (child.type === "folder" && child.children !== []) {
  //       toggle(child, id);
  //     }
  //   });
};

// Action creators are generated for each case reducer function
export const { addFolder1, handleInput, addFile1, deleteElement, renameElem, toggleElement } = fileExplorerSlice.actions;

export default fileExplorerSlice.reducer;
