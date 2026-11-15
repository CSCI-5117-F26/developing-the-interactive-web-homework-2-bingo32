<script>
  import AddTask from "./AddTask.svelte";
  import Done from "./Done.svelte";
  import Nav from "./Nav.svelte";
  import Todo from "./Todo.svelte";
</script>

<div class="columns is-centered">
  <div class="column is-half">
    <Nav />
    <AddTask />
    <Todo />
    <Done />
  </div>
</div>
