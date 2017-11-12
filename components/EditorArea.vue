<template>
    <div class="editorarea">
        <textarea name="" id="" v-on:input="editNote" ></textarea>
    </div>
</template>

<script>
  export default {
    name: 'editorarea',
    data(){
        return {
        }
    },
    computed: {
        // showActiveNote() {
        //     return this.$store.state.active_note.text
        // }
    },
    methods:{
        editNote(e){
            this.$store.dispatch('editNote',e.target.value)
        }
    }
}
</script>

 <style scoped> 
    .editorarea {
        /* min-width: 400px; */
        height: 100%;
        padding: 10px 14px;
        font-size: 14px;
        line-height: 14px;
    }
    .editorarea textarea {
        /* height: 100%;
        width: 100%; */
        border: none;
    }
    
</style>




