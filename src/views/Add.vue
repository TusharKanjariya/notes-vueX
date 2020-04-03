<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 bg-light p-2">
        <div class="form-group">
          <label>Note Title</label>
          <input type="text" class="form-control" v-model="title" placeholder="Title" required />
        </div>
        <div class="form-group">
          <label>Note Data</label>
          <textarea class="form-control" v-model="desc" placeholder="- Task 1" required></textarea>
          <small class="form-text text-muted">Markdown Format is Supported</small>
        </div>
        <div class="form-group">
          <button class="btn btn-success" v-on:click="add()" v-if="!id">Add Note</button>
          <button class="btn btn-success" v-on:click="update()" v-if="id">Update Note</button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: ["id"],
  data: function() {
    return {
      title: "",
      desc: ""
    };
  },
  mounted() {
    if (this.id) {
      let d = this.getNote;
      this.title = d.title;
      this.desc = d.desc;
    }
  },
  computed: {
    getNote() {
      return this.$store.getters.getItemByIndex(this.id);
    }
  },
  methods: {
    add() {
      if (this.title === "" || this.desc === "") {
        alert("Filed is Required");
      } else {
        let data = {
          title: this.title,
          desc: this.desc
        };
        this.$store.dispatch("addNotes", data);
        this.title = "";
        this.desc = "";
      }
    },
    update() {
      if (this.title === "" || this.desc === "") {
        alert("Not Empty Supported");
      } else {
        let note = {
          id: this.id,
          title: this.title,
          desc: this.desc
        };
        this.$store.dispatch("noteUpdate", note);
        this.title = "";
        this.desc = "";
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>