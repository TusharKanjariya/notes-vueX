<template>
  <div id="app">
    <header class="bg-dark text-white">
      <router-link to="/" class="text-white reset">Take Notes</router-link>
      <router-link to="/add" class="btn btn-success btn-sm float-right mt-2">Add New Note</router-link>
    </header>
    <router-view />
  </div>
</template>

<style>
</style>
