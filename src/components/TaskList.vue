<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>Task</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 8.33%">No</th>
                <th style="width: 35%">Task</th>
                <th style="width: 35%">Date</th>
                <th style="width: 35%">DueDate</th>
                <th style="width: 100%">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tasks,index) in $store.getters.tasks" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ tasks.task }}</td>
                <td v-if="index !== editIndex">{{ tasks.date }}</td>
                <td v-if="index !== editIndex">{{ tasks.dueDate }}</td>
                <td v-if="index !== editIndex">                  
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteTask(index,tasks.id)"
                  >Delete</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,tasks)"
                  >Edit</button>                  
                </td>

                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="tasks.task"
                    class="form-control"
                    v-on:change="task = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="tasks.date"
                    class="form-control"
                    v-on:change="date = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="tasks.dueDate"
                    class="form-control"
                    v-on:change="dueDate = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <button
                    type="button"
                    class="btn btn-success mr-2"
                    v-on:click="editTask(tasks.id)"
                  >ยืนยัน</button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-on:click="closeEdit()"
                  >ยกเลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      task: "",
      date: "",
      dueDate: ""
    };
  },
  created() {
    this.fetchTask();
  },
  methods: {
    fetchTask() {
      this.$store.dispatch("fetchTask");
    },
    deleteTask(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch("deleteTask", payload);
    },
    openEdit(index, tasks) {
      this.editIndex = index;
      this.task = tasks.task;
      this.date = tasks.date;
      this.dueDate = tasks.dueDate
    },
    closeEdit() {
      this.editIndex = -1;
      this.task = "";
      this.date = 0;
      this.dueDate = 0;
    },
    editTask(_id) {
      let payload = {
        index: this.editIndex,
        _id: _id,
        task: this.task,
        date: this.date,
        dueDate : this.dueDate
      };
      this.$store.dispatch("editTask", payload).then(this.closeEdit());
    }
  }
};
</script>