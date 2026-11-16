<script>
  let props = $props();
</script>

<section class="section">
  <div class="container">
    <h1 class="title">Modify Task</h1>
    <!-- <p class="subtitle"></p> -->
  </div>
</section>

<div class="columns is-centered">
  <div class="column is-half">
    <br />
    <a href="/todos" class="button is-info">See Todo Tasks</a>

    <br />
    <br />
    <form action="/todos" method="POST">
      <article class="message is-info">
        <div class="message-header">
          <p>Let's add something fun!</p>
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
                required></textarea>
            </div>
          </div>
          <button class="button is-info submit">Save Changes</button>
        </div>
      </article>
    </form>
  </div>
</div>
