<script>
  import AddTask from "./AddTask.svelte";
  import Nav from "../Nav.svelte";
  import Todo from "./Todo.svelte";
  let taskList = $state([
    {
      id: 1,
      title: "bake",
      summary: "bake cookies",
      description: "bake 10 cookies",
    },
    {
      id: 2,
      title: "eat",
      summary: "eat cookies",
      description: "eat cookies under a tree",
    },
    {
      id: 3,
      title: "breath",
      summary: "breath air",
      description: "breath air always",
    },
  ]);

  function add(task) {
    taskList.push(task);
  }
  function remove(id) {
    taskList = taskList.filter((task) => task.id !== id);
  }
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Todo Tasks</h1>
    <!-- <p class="subtitle"></p> -->
  </div>
</section>
<div class="columns is-centered">
  <div class="column is-half">
    <Nav />
    <a href="/done" class="button is-success">See Done Tasks</a>
    <br />
    <br />
    <AddTask {add} />
    <br />
    <Todo tasks={taskList} />
  </div>
</div>
