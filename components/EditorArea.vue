<template>
    <div class="editorarea">
        <textarea name="" id="" @input="editNote" v-model="showActiveNote" ></textarea>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
  export default {
    name: 'editorarea',
    data(){
        return {
        }
    },
    computed: {
        showActiveNote() {
            return this.$store.state.active_note.text
        }
    },
    methods: {
        ...mapActions([
            'editNote(e.target.value)'
        ])
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
        height: 100%;
        width: 100%;
        border: none;
    }
    
</style>




