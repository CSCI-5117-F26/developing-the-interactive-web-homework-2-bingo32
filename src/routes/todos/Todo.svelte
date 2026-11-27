<script>
  import { refreshAll } from "$app/navigation";
  let { task } = $props();
  const id = task._id.$oid;
  async function done(id) {
    const response = await fetch("/api/done", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const completed = await response.json();
    if (completed) await refreshAll();
  }
</script>

<article class="message is-info">
  <div class="message-header">
    <p>{task.title}</p>
    <div>
      <a href="/todos/{id}" class="button is-info is-light">Edit</a>
      <button onclick={() => done(id)} class="button is-info is-light"
        >Done</button
      >
    </div>
  </div>
  <div class="message-body">{task.summary}</div>
</article>
