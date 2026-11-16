<script>
  import favicon from "#lib/assets/favicon.svg";
  let { children } = $props();
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
  />
  <title>Todo</title>
</svelte:head>

<main>
  {@render children()}
</main>

<style>
  :global(html) {
    /* background-color: #C0F5B0; */
    background-color: #f4fafc;
  }
</style>
