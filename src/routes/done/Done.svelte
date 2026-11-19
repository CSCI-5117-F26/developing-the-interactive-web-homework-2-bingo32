<script>
  let props = $props();
</script>

{#each props.dones as task (task)}
  <article class="message is-success">
    <div class="message-header">
      <p>{task.title}</p>
    </div>
    <div class="message-body">{task.summary}</div>
  </article>
{/each}
