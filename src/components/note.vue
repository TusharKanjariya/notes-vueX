<template>
  <div class="card">
    <div class="card-header">
      <strong>{{noteData.title}}</strong>

      <div class="float-right">
        <router-link :to="'/edit/'+index" class="text-success mr-2">
          <i class="fas fa-edit"></i>
        </router-link>
        <a class="text-danger" v-on:click="deleteNote()">
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </div>
    <span v-html="markToHTML(noteData.desc)"></span>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Note",
  props: ["noteData", "index"],
  methods: {
    markToHTML(text) {
      return marked(text);
    },
    deleteNote() {
      this.$store.dispatch("deleteNotes", this.index);
    }
  }
};
</script>

<style scoped>
</style>