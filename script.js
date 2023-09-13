document.addEventListener("DOMContentLoaded", function () {
  const inputForm = document.querySelector("#inputForm");
  const inputBtn = document.querySelector("#addButton");
  inputBtn.addEventListener("click", generateTask);
  const testLi = document.createElement("li");
  testLi.innerHTML = `<span>vasketøj</span><input id="vasketøj" type="checkbox"><div class="deleteMe"></div>`;
  document.querySelector("#theList").appendChild(testLi);

  function generateTask(event) {
    const inputValue = document.querySelector("#newTask").value;
    event.preventDefault();
    console.log(event);
    console.log("***", inputValue);
    document.querySelector("p").textContent = "yo";
    // generate a fixed task innerHTML?
    const li = document.createElement("li");
    //   make the task dynamic
    li.innerHTML = `<span>${inputValue}</span><input id="${inputValue}" type="checkbox"><div class="deleteMe"></div>`;
    //   append to the list
    document.querySelector("#theList").appendChild(li);
    // save the task in localstorage
    localStorage.setItem("firstTask", inputValue);
    document.querySelector("#newTask").value = "";
    // move the task to different list
    document.querySelector(`#${inputValue}`).addEventListener("change", (event) => {
      if (event.target.checked) {
        document.querySelector("#doneList").appendChild(li);
      } else {
        document.querySelector("#theList").appendChild(li);
      }
      // console.log(event.target);
    });
    document.querySelector(".deleteMe").addEventListener("click", (event) => {
      li.remove();
    });
  }
});

function loadSavedList() {
  // get items from localstorage
  // make a list with them
}

function filter() {
  // Array.filter()...
}
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

const taskObj = {
  taskName: "",
  taskTime: "",
  taskID: "",
  done: false,
};
const taskArr = [];
