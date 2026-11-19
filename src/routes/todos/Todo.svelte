<script>
  import { goto } from "$app/navigation";
  let props = $props();
  async function done(id) {
    const response = await fetch("/api/done", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const completed = await response.json();
    if (completed) await goto("/done", { invalidateAll: true });
  }
</script>

{#each props.tasks as task (task)}
  <article class="message is-info">
    <div class="message-header">
      <p>{task.title}</p>
      <div>
        <a href="/todos/{task.id} " class="button is-info is-light">Edit</a>
        <button onclick={() => done(task.id)} class="button is-info is-light"
          >Done</button
        >
      </div>
    </div>
    <div class="message-body">{task.summary}</div>
  </article>
{/each}
