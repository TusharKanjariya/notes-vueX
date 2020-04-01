<template>
  <div id="app">
    <div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-5 mb-4" v-for="(n,i) in noteData" v-bind:key="i">
            <Note :noteData="n" :index="i"></Note>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Note from "../components/note";

export default {
  name: "Home",
  components: {
    Note
  },
  mounted() {
    this.noteData = this.$store.getters.getNotes;
    console.log(this.noteData);
  },
  data: function() {
    return {
      markedText: "Hello",
      noteData: []
    };
  },
  computed: {}
};
</script>

<style>
header {
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}
</style>
