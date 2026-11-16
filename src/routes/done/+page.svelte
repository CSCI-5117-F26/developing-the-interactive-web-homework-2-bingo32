<script>
  import Done from "./Done.svelte";
  import Nav from "../Nav.svelte";
</script>
<section class="section">
  <div class="container">
    <h1 class="title">Done Tasks</h1>
    <!-- <p class="subtitle">Your friendly task manager!</p> -->
  </div>
</section>
<div class="columns is-centered">
  <div class="column is-half">
    <Nav />
    <a href="/todos" class="button is-info">See Todo Tasks</a>
    <br />
    <br />
    <Done />
  </div>
</div>
