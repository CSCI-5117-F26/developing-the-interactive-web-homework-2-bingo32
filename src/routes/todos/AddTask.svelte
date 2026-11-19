<script>
  import { goto } from "$app/navigation";
  let title = $state("");
  let summary = $state("");
  let description = $state("");
  async function add() {
    const response = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, summary, description }),
    });
    const completed = await response.json();
    if (completed) {
      title = "";
      summary = "";
      description = "";
      await goto("/todos", { invalidateAll: true });
    }
  }
</script>

<article class="message is-info">
  <div class="message-header">
    <p>Let's add something fun!</p>
    <button onclick={add} class="button is-info is-light" type="submit"
      >Add Task</button
    >
  </div>
  <div class="message-body">
    <div class="field">
      <label class="label" for="title">Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          id="title"
          name="title"
          required
          bind:value={title}
        />
      </div>
    </div>

    <div class="field">
      <label class="label" for="summary">Summary</label>
      <div class="control">
        <input
          class="input"
          type="text"
          id="summary"
          name="summary"
          required
          bind:value={summary}
        />
      </div>
    </div>

    <div class="field">
      <label class="label" for="description">Task Desciption</label>
      <div class="control">
        <textarea
          class="textarea"
          id="description"
          name="description"
          required
          bind:value={description}></textarea>
      </div>
    </div>
    <!-- <button class="button is-info submit">Add Task</button> -->
  </div>
</article>
