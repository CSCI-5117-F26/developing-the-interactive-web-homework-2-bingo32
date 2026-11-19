<script>
  /** @type {import('./$types').PageProps} */
  let { data } = $props();
  let title = $state(data.task.title);
  let summary = $state(data.task.summary);
  let description = $state(data.task.description);
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Edit Task</h1>
    <!-- <p class="subtitle"></p> -->
  </div>
</section>

<div class="columns is-centered">
  <div class="column is-half">
    <p>this is task with id: {data.task.id}</p>

    <br />
    <a href="/todos" class="button is-info">See Todo Tasks</a>

    <br />
    <br />
    <form action="/todos" method="POST">
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
          <button class="button is-info submit">Save Changes</button>
        </div>
      </article>
    </form>
  </div>
</div>
