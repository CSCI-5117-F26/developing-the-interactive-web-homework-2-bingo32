<script>
  let { doneList } = $props();
</script>

{#each doneList as task (task._id)}
  <article class="message is-success">
    <div class="message-header">
      <p>{task.title}</p>
    </div>
    <div class="message-body">{task.summary}</div>
  </article>
{/each}
