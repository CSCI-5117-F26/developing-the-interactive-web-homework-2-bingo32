<script>
  import favicon from "#lib/assets/favicon.svg";
  let { children } = $props();
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hello Bulma!</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
  />
  <title>Todo</title>
</svelte:head>

<section class="section">
  <div class="container">
    <h1 class="title">Hello There!</h1>
    <p class="subtitle">Your friendly task manager!</p>
  </div>
</section>

<main>
  {@render children()}
</main>
