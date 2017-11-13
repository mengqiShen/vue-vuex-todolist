<template>
   <div class="toolbar">
      <ul>
        <li><button @click='createNote' class="glyphicon glyphicon-plus"></button></li>
        <li><button :class='{favorite:isFavorited}' @click='favoriteNote' class="glyphicon glyphicon-star-empty" ></button></li>
        <li><button @click='removeNote' class="glyphicon glyphicon-remove"></button></li>
      </ul>
   </div>
</template>

<script>
  export default {
      name: 'toolbar',
      data(){
        return {
        }
      },
      computed:{
        isFavorited(){
          return this.$store.state.active_note.favorite
        }
      },
      methods:{
        createNote(){
          this.$store.dispatch('createNote')
        },
        favoriteNote(){
          this.$store.dispatch('favoriteNote')
        },
        removeNote(){
          this.$store.dispatch('removeNote')
        }
      }
}
</script>

 <style scoped> /*有scoped标识，只会影响所在的组件*/
  .toolbar{
    min-width: 90px;
    height: 100%;
    background-color: #878d99;
    }
  ul {
    list-style: none;
    padding: 0;
    padding-top: 40px;
    text-align: center;
  }
  ul li {
    margin-bottom: 50px;
  }
  .glyphicon {
    font-size: 28px;
  }
  button {
    background-color: #878d99;
    border: none;    
  }
  .favorite {
    color: gold;
  }
</style>




