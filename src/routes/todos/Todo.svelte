<script>
  let props = $props();
</script>

{#each props.tasks as task(task)}
  <article class="message is-info">
    <div class="message-header">
      <p>{task.title}</p>
      <div>
        <a href="/todos/{task.id}" class="button is-info is-light">Edit</a>
        <button class="button is-info is-light">Done</button>
      </div>
    </div>
    <div class="message-body">{task.summary}</div>
  </article>
{/each}
