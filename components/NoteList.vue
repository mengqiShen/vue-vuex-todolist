<template>
    <div class="notelist">
        <h3 class="">笔记</h3>
        <div class="btn-group-wrapper">
            <div class="btn-group">
                <button class="btn btn-default" v-on:click="">所有笔记</button>
                <button class="btn btn-default" v-on:click="">收藏笔记</button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-bind:class="{'selected': ind === index}" v-on:click="activeNote(index)" v-for="(note,index) in noteList" v-if="note.text">{{note.text.substring(0,14)}}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'notelist',
    data(){
        return {
            ind: ''
        }
    },
    computed:{
        noteList() {
            return this.$store.state.note_list
        }
        // isSelected(){
        //     return this.$store.state.isSelected
        // }
    },
    methods: {
        activeNote(index){  //传参正确(index)
            this.$store.dispatch('activeNote',index)
            this.ind = index
        }
    }
    //     allNotes(){

    //     },
    //     favoriteNotes(){

    //     }
    // }
}

</script>

 <style scoped>
    .notelist {
        min-width: 200px;
        height: 100%;
        background: #e6ebf5;
    }
    h3 {
        text-align: center;
    }
    .btn-group-wrapper {
        text-align: center;
    }
    .notearea{
        display: block;
        margin-top: 10px;
        padding: 0px 10px;
        height: 30px;
        background: #fff;
        border: 1px solid #fff;
        font-size: 16px;
        line-height: 30px;
        overflow: hidden;
    }
    .list-group {
        margin-top: 5px !important;
    }
    .list-group-item {
        /* display: inline-block;
        height: 40px;
        width: 205px;
        margin: 0; */
    }
    .selected{
        background: yellowgreen;
    }
</style>




