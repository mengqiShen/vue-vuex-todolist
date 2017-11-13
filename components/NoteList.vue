<template>
    <div class="notelist">
        <h3 class="">笔记</h3>
        <div class="btn-group-wrapper">
            <div class="btn-group">
                <button class="btn btn-default" @click="showAllNotes">所有笔记</button>
                <button class="btn btn-default" @click="showFavoriteNotes">收藏笔记</button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" :class="{'selected': ind === index}" @click="activeNote(index)" v-for="(note,index) in notesList" v-if="note.text" v-show="isShowAll">{{note.text}}</li>
            <li class="list-group-item" :class="{'selected': ind === index}" @click="activeNote(index)" v-else>{{newNote}}</li>
            <li class="list-group-item" :class="{'selected': ind === index}" @click="activeNote(index)" v-for="(note,index) in favoriteNotesList" v-if="note.text" v-show="isShowFavorite">{{note.text}}</li>
            <li class="list-group-item" :class="{'selected': ind === index}" @click="activeNote(index)" v-else>{{newNote}}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'notelist',
    data(){
        return {
            ind: '',
            isShowAll: true,
            isShowFavorite: false
        }
    },
    computed:{
        notesList() {
            return this.$store.state.note_list
        },
        favoriteNotesList(){
            return this.$store.state.note_list.filter(note => note.favorite)
        },
        newNote(){
            return this.$store.state.new_note.text
        }
    },
    methods: {
        activeNote(index){  //传参正确(index)
            this.$store.dispatch('activeNote',index)
            this.ind = index
        },
        showAllNotes(){
            this.isShowAll = true
            this.isShowFavorite = false
        },
        showFavoriteNotes(){
            this.isShowAll = false
            this.isShowFavorite = true
        }
    }
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
    .selected{
        background: #EEE8AA;
    }
</style>




