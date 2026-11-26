// place files you want to import through the `#lib` alias in this folder.
  export const taskList = [
  ];
  export const doneList = [{
      id: 3,
      title: "sleep",
      summary: "sleep on a bed",
      description: "sleep on a bed in a bedroom",
    },
];

  export function add(task) {
    // need to add id attribute to object
    taskList.push(task);
  }
  export function remove(id) {
    const i = taskList.findIndex((t) => t.id === id);
    if (i !== -1) taskList.splice(i, 1);
  }
  export function find(id) {
    return taskList.find((t) => t.id === id);
  }

  export function edit(newTask){
    // find id, change contents based on new task
  }

  export function addDone(id){
    let task = find(id)
    remove(task.id);
    doneList.push(task);
  }
