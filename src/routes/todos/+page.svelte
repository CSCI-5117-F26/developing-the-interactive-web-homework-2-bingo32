<script>
  import AddTask from "./AddTask.svelte";
  import Nav from "../Nav.svelte";
  import Todo from "./Todo.svelte";
  let { data } = $props();
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
    <AddTask/>
    <br />
    <Todo tasks={data.taskList} />
  </div>
</div>
