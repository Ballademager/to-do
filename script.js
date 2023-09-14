window.addEventListener("load", localStor);
document.addEventListener("DOMContentLoaded", function () {
  const inputBtn = document.querySelector("#addButton");
  const taskObject = {
    taskName: "",
    taskTime: "",
    taskID: 0,
    done: false,
  };
  const taskArr = [];
  const doneArr = [];
  let uniqueID = 1;
  console.log(taskArr);
  // if (document.querySelector("#theList").children.length <= 4) {
  //   document.querySelector("#newTask").placeholder = "I.e. do the laundry..";
  // }
  inputBtn.addEventListener("click", generateTask);

  function generateTask(event) {
    const inputValue = document.querySelector("#newTask").value;
    const timeValue = document.querySelector("#newTaskTime").value;
    const theList = document.querySelector("#theList");
    const doneList = document.querySelector("#doneList");
    const li = document.createElement("li");
    const form = document.querySelector("#inputForm");
    event.preventDefault();
    // console.log("***", typeof inputValue);
    // create an object with taskName taskTime taskID and done set to false
    let task = Object.create(taskObject);
    task.taskName = inputValue;
    task.taskTime = timeValue;
    task.done = false;
    task.taskID = uniqueID;
    console.log(task);

    uniqueID++;
    // if (theList.children.length >= 14) {
    //   form.classList.add("hidden");
    // }
    if (document.querySelector("#theList").children.length >= 4) {
      document.querySelector("#newTask").placeholder = "New task here..";
    }

    // push the object to the array
    if (task.taskName.length && theList.children.length <= 14) {
      taskArr.push(task);
      console.log(taskArr);

      // display the array as tasks on the list (forEach?)
      taskArr.forEach((task) => {
        const upperCap = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        // make a li and display on the ul
        if (timeValue) {
          li.innerHTML = `<span>${upperCap}</span><span>${timeValue} min</span><input class="checker" type="checkbox"><div class="deleteMe"></div>`;
        } else {
          li.innerHTML = `<span>${upperCap}</span><span>?</span><input class="checker" type="checkbox"><div class="deleteMe"></div>`;
        }
        // theList.appendChild(li);
        theList.insertBefore(li, form);
        document.querySelector("#newTask").value = "";
        document.querySelector("#newTaskTime").value = "";
      });

      // make them move from list to list
      document.querySelectorAll(".checker").forEach((element) => {
        element.addEventListener("change", (event) => {
          if (event.target.checked) {
            if (doneList.children.length <= 14) {
              doneList.appendChild(event.target.closest("li"));
              // if (theList.children.length <= 14) {
              //   form.classList.remove("hidden");
              // }
            } else if (doneList.children.length >= 15) {
              document.querySelector("#deletePlease").showModal();
            }
          } else {
            theList.insertBefore(event.target.closest("li"), form);
            // if (theList.children.length >= 14) {
            //   form.classList.add("hidden");
            // }
          }
        });
      });
      // make them deletable
      document.querySelectorAll(".deleteMe").forEach((element) => {
        element.addEventListener("click", (event) => {
          console.log(li);
          const oneLi = event.target.closest("li");
          if (oneLi) {
            oneLi.remove();
            // if (theList.children.length <= 14) {
            //   form.classList.remove("hidden");
            // }
          }
        });
      });
    } else if (theList.children.length > 14) {
      document.querySelector("#tooMany").showModal();
      document.querySelector("#newTask").value = "";
      document.querySelector("#newTaskTime").value = "";
    }
    // else if (taskArr.length >= 3) {
    //   console.log("too many tasks");
    // }
  }
});
const sel = document.querySelector("select");
sel.addEventListener("change", clrSwitch);
const themeValue = localStorage.getItem("theme");

function clrSwitch() {
  if (sel.value === "classic") {
    document.querySelector("body").dataset.theme = "classic";
    localStorage.setItem("theme", sel.value);
  } else if (sel.value === "blue") {
    document.querySelector("body").dataset.theme = "blue";
    localStorage.setItem("theme", sel.value);
  } else if (sel.value === "dust") {
    document.querySelector("body").dataset.theme = "dust";
    localStorage.setItem("theme", sel.value);
  } else if (sel.value === "pink") {
    document.querySelector("body").dataset.theme = "pink";
    localStorage.setItem("theme", sel.value);
  }
}

function localStor() {
  if (themeValue) {
    document.querySelector("body").dataset.theme = themeValue;
    sel.value = themeValue;
  } else {
    document.querySelector("body").dataset.theme = "classic";
  }
  // console.log("***********");
}

// *********** det der virkede **********
// function generateTask(event) {
//   const inputValue = document.querySelector("#newTask").value;
//   event.preventDefault();
//   console.log(event);
//   console.log("***", inputValue);
//   document.querySelector("p").textContent = "yo";
//   // generate a fixed task innerHTML?
//   const li = document.createElement("li");
//   //   make the task dynamic
//   li.innerHTML = `<span>${inputValue}</span><input id="${inputValue}" type="checkbox"><div class="deleteMe"></div>`;
//   //   append to the list
//   document.querySelector("#theList").appendChild(li);
//   // save the task in localstorage
//   localStorage.setItem("firstTask", inputValue);
//   document.querySelector("#newTask").value = "";
//   // move the task to different list
//   document.querySelector(`#${inputValue}`).addEventListener("change", (event) => {
//     if (event.target.checked) {
//       document.querySelector("#doneList").appendChild(li);
//     } else {
//       document.querySelector("#theList").appendChild(li);
//     }
//     // console.log(event.target);
//   });
//   // delete tasks by clicking on the "X"
//   document.querySelectorAll(".deleteMe").forEach((element) => {
//     element.addEventListener("click", (event) => {
//       // console.log(event);
//       li.remove();
//     });
//   });
// }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const addBtn = document.querySelector("#addButton");

//   function taskList() {
//     const testParagraf = document.querySelector("#testfield");
//     const form = document.querySelector("#inputForm");
//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const taskValue = document.querySelector("#newTask").value;
//       console.log(taskValue);
//       localStorage.setItem("newTask", taskValue);
//       const storedValue = localStorage.getItem("newTask");
//       console.log(storedValue);
//       testParagraf.textContent = "storedValue";
//     });
//   }

//   //     taskList();
// });

// taskInput.addEventListener("input", (e) => {
//   const inputValue = taskInput.value;
//   //   console.log(e);
//   console.log(inputValue);
// });

// addBtn.addEventListener("click", () => {
//   test.textContent = inputValue;
// });

// ************* virker med arrays men før localStorage og opdeling af functions
// document.addEventListener("DOMContentLoaded", function () {
//   const inputForm = document.querySelector("#inputForm");
//   const inputBtn = document.querySelector("#addButton");
//   const taskObject = {
//     taskName: "",
//     taskTime: "",
//     taskID: 0,
//     done: false,
//   };
//   const taskArr = [];
//   const doneArr = [];
//   let uniqueIDCounter = 1;
//   console.log(taskArr);
//   inputBtn.addEventListener("click", generateTask);

//   function generateTask(event) {
//     const inputValue = document.querySelector("#newTask").value;
//     const timeValue = document.querySelector("#newTaskTime").value;
//     const theList = document.querySelector("#theList");
//     const doneList = document.querySelector("#doneList");
//     const li = document.createElement("li");
//     event.preventDefault();
//     console.log("***", inputValue);
//     // create an object with taskName taskTime taskID and done set to false
//     let task = Object.create(taskObject);
//     task.taskName = inputValue;
//     task.taskTime = timeValue;
//     task.done = false;
//     task.taskID = uniqueIDCounter;
//     console.log(task);

//     uniqueIDCounter++;

//     // push the object to the array
//     taskArr.push(task);
//     console.log(taskArr);

//     // display the array as tasks on the list (forEach?)
//     taskArr.forEach((task) => {
//       // make a li and display on the ul
//       li.innerHTML = `<span>${inputValue}</span><span>${timeValue} min</span><input id="${inputValue}" type="checkbox"><div class="deleteMe"></div>`;
//       theList.appendChild(li);
//       document.querySelector("#newTask").value = "";
//       document.querySelector("#newTaskTime").value = "";
//       // save in localStorage with stringyfy
//     });

//     // make them move from list to list
//     document.querySelector(`#${inputValue}`).addEventListener("change", (event) => {
//       if (event.target.checked) {
//         document.querySelector("#doneList").appendChild(li);
//       } else {
//         document.querySelector("#theList").appendChild(li);
//       }
//     });
//     // make them deletable
//     document.querySelectorAll(".deleteMe").forEach((element) => {
//       element.addEventListener("click", (event) => {
//         console.log(li);
//         const oneLi = event.target.closest("li");
//         if (oneLi) {
//           oneLi.remove();
//         }
//       });
//     });
//   }
// });

// --- forsøg med localStorage ---
// document.addEventListener("DOMContentLoaded", function () {
//   const inputForm = document.querySelector("#inputForm");
//   const inputBtn = document.querySelector("#addButton");
//   const taskObject = {
//     taskName: "",
//     taskTime: "",
//     taskID: 0,
//     done: false,
//   };
//   const taskArr = [];
//   const doneArr = [];
//   let uniqueIDCounter = 1;

//   const testArr = [
//     {
//       taskName: "hoppe",
//       taskTime: "8",
//       taskID: 8,
//       done: false,
//     },
//     {
//       taskName: "lege",
//       taskTime: "25",
//       taskID: 9,
//       done: false,
//     },
//     {
//       taskName: "grine",
//       taskTime: "5",
//       taskID: 10,
//       done: true,
//     },
//   ];
//   const stringArr = JSON.stringify(testArr);
//   localStorage.setItem("test", stringArr);
//   console.log(taskArr);
//   inputBtn.addEventListener("click", generateTask);

//   function generateTask(event) {
//     const inputValue = document.querySelector("#newTask").value;
//     const timeValue = document.querySelector("#newTaskTime").value;
//     const theList = document.querySelector("#theList");
//     const doneList = document.querySelector("#doneList");
//     const li = document.createElement("li");
//     event.preventDefault();
//     document.querySelector("#newTask").value = "";
//     document.querySelector("#newTaskTime").value = "";
//     console.log("***", inputValue);
//     // create an object with taskName taskTime taskID and done set to false
//     let task = Object.create(taskObject);
//     task.taskName = inputValue;
//     task.taskTime = timeValue;
//     task.done = false;
//     task.taskID = uniqueIDCounter;
//     console.log(task);

//     uniqueIDCounter++;

//     // push the object to the array
//     taskArr.push(task);
//     console.log("array is:***", taskArr);
//     const saveArr = localStorage.setItem("storedArray", JSON.stringify(taskArr));
//     saveArr;
//     const getArr = localStorage.getItem("storedArray");
//     const gottenArr = JSON.parse(getArr);
//     console.log("/////))))", gottenArr);
//     // display the array as tasks on the list (forEach?)
//     taskArr.forEach((element) => {
//       console.log("-----", task);
//       // make a li and display on the ul
//       li.innerHTML = `<span>${inputValue}</span><span>${timeValue} min</span><input id="${inputValue}" type="checkbox"><div class="deleteMe"></div>`;
//       theList.appendChild(li);

//       // save in localStorage with stringyfy
//     });

//     // make them move from list to list
//     document.querySelector(`#${inputValue}`).addEventListener("change", (event) => {
//       if (event.target.checked) {
//         document.querySelector("#doneList").appendChild(li);
//       } else {
//         document.querySelector("#theList").appendChild(li);
//       }
//     });
//     // make them deletable
//     document.querySelectorAll(".deleteMe").forEach((element) => {
//       element.addEventListener("click", (event) => {
//         console.log(li);
//         const oneLi = event.target.closest("li");
//         if (oneLi) {
//           oneLi.remove();
//         }
//       });
//     });
//   }
// });

// function printLists() {}

// loadSavedList();
// function loadSavedList() {
//   // get items from localstorage
//   const storedArray = JSON.parse(localStorage.getItem("test"));
//   const lis = document.createElement("li");
//   console.log(storedArray);
//   // make a list with them
//   storedArray.forEach((item, index) => {
//     console.log(`Item ${index}:`, item);
//     lis.innerHTML = `<span>${item.taskName}</span><span>${item.taskTime} min</span><input id="${item.taskName}" type="checkbox"><div class="deleteMe"></div>`;
//     // You can also create HTML elements or perform other actions here
//     if (item.done === false) {
//       console.log("not done", item);

//       theList.appendChild(lis);
//     } else {
//       console.log("Done", item);
//       doneList.appendChild(lis);
//     }
//   });
// }

// function filter() {
//   // Array.filter()...
// }
