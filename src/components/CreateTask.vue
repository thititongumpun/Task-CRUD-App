<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>เพิ่มรายชื่อ</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addTask()">
            <div class="form-group">
              <label>Task</label>
              <input type="text" class="form-control" placeholder="Task" v-model="task" />
            </div>
            <div class="form-group">
              <label>Date</label>
              <input type="text" class="form-control" placeholder="Date" v-model="date" />
            </div>
             <div class="form-group">
              <label>DueDate</label>
              <input type="text" class="form-control" placeholder="DueDate" v-model="dueDate" />
            </div>
            <button type="submit" class="btn btn-primary">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      date:"",
      dueDate: "",
    };
  },
  methods: {
    addTask() {
      if (this.task) {
        let payload = { task: this.task, date: this.date, dueDate: this.dueDate};
        this.$store.dispatch("addTask", payload);
      }
    }
  }
};
</script>