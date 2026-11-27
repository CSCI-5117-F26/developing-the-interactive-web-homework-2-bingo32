<script>
  import AddTask from "./AddTask.svelte";
  import Nav from "../Nav.svelte";
  import Todo from "./Todo.svelte";
  let { data } = $props();
  let tasks = $derived(data.tasks);
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Todo Tasks</h1>
    <!-- <p class="subtitle"></p> -->
    <a href="/done" class="button is-success">My Done Tasks</a>
  </div>
</section>
<div class="columns is-centered">
  <div class="column is-half">
    <Nav />
    <AddTask />
    <br />
    {#each tasks as task (task._id)}
      <Todo {task} />
    {/each}
  </div>
</div>
