<div class="columns is-centered">
  <div class="column is-half">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Find a Task" />
      </p>
      <p class="control">
        <button class="button is-info"> Search </button>
      </p>
    </div>
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a href="#">Todo</a></li>
        <li><a <a href="#">Done</a></li>
      </ul>
    </div>
    <article class="message is-link">
      <div class="message-header">
        <p>Let's add something fun!</p>
        <button class="button is-link is-light">Add Task</button>
      </div>
      <div class="message-body">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>

        <div class="field">
          <label class="label">Summary</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="Task Description"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Task Desciption</label>
          <div class="control">
            <textarea class="textarea"></textarea>
          </div>
        </div>
      </div>
    </article>

    <article class="message is-info">
      <div class="message-header">
        <p>Todo</p>
        <div>
          <button class="button is-info is-light">Edit</button>
          <button class="button is-info is-light">Done</button>
        </div>
      </div>
      <div class="message-body">stuff</div>
    </article>
    <article class="message is-success">
      <div class="message-header">
        <p>Done</p>
      </div>
      <div class="message-body">More Stuff</div>
    </article>
  </div>
</div>
