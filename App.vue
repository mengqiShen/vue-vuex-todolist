<template>
  <div id="app" class="container-fulid">
    <div class="row">
      <tool-bar class='col-md-2 col-xs-2 col-sm-2'></tool-bar>
      <note-list class='col-md-3 col-xs-4 col-sm-4'></note-list>
      <editor-area class='col-md-7 col-xs-6 col-sm-6'></editor-area>
    </div>
  
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import NoteList from './components/Notelist'
import EditorArea from './components/EditorArea'

export default {
  name: 'app',
  components: {NoteList,ToolBar,EditorArea}
}
</script>

<style>
  html,body {
    height: 100%;
  }
  .row{
    height: 100%;
  }
  #app {
    height: 100%;
    /* overflow: hidden; */
  }
</style>
