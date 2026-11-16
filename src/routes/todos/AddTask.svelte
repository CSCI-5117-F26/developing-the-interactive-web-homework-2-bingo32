<script>
  let props = $props();
</script>


<form action="/todos" method="POST">

  <article class="message is-info">
    <div class="message-header">
      <p>Let's add something fun!</p>
      <button class="button is-info is-light" type="submit">Add Task</button>
    </div>
    <div class="message-body">
      <div class="field">
        <label class="label" for="title">Title</label>
        <div class="control">
          <input class="input" type="text" id="title" name="title" required/>
        </div>
      </div>

      <div class="field">
        <label class="label" for="summary">Summary</label>
        <div class="control">
          <input class="input" type="text" id="summary" name="summary" required/>
        </div>
      </div>

      <div class="field">
        <label class="label" for="description">Task Desciption</label>
        <div class="control">
          <textarea class="textarea" id="description" name="description" required></textarea>
        </div>
      </div>
      <!-- <button class="button is-info submit">Add Task</button> -->
    </div>
  </article>
</form>
