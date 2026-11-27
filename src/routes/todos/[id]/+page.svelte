<script>
  import { goto } from "$app/navigation";
  let { data } = $props();
  let { task } = data;
  let id = task._id.$oid;
  let title = $state(task.title);
  let summary = $state(task.summary);
  let description = $state(task.description);
  async function update() {
    const response = await fetch("/api/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, summary, description }),
    });
    const completed = await response.json();
    if (completed) goto("/todos");
  }
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Edit Task</h1>
    <!-- <p class="subtitle"></p> -->
  </div>
</section>

<div class="columns is-centered">
  <div class="column is-half">
    <br />
    <a href="/todos" class="button is-info">See Todo Tasks</a>

    <br />
    <br />
    <article class="message is-info">
      <div class="message-header">
        <p>Let's make some changes</p>
        <div>
          <button class="button is-info is-light" type="submit">Done</button>
        </div>
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
        <button class="button is-info submit" onclick={update}
          >Save Changes</button
        >
      </div>
    </article>
  </div>
</div>
