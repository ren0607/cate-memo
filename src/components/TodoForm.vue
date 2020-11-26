<template>
    <div>
        <v-app-bar dark color="indigo">
            <v-btn icon to="/"><v-icon>arrow_back</v-icon></v-btn>
            <v-toolbar-title class="white--text">
                MyTodo
            </v-toolbar-title>
        </v-app-bar>
        <v-card class="mx-auto my-12" width="600px">
            <v-card-text>
                <v-select
                    v-model="selectCete"
                    v-bind:items="category"
                    placeholder="カテゴリ"
                ></v-select>
                <v-text-field v-model="newTodo" placeholder="newTodo"></v-text-field>
            </v-card-text>
            <v-card-actions style="position: relative">
                <v-btn dark color="indigo" v-on:click="addTodo()" class="white--text">
                    ADD
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newTodo: '',
                category: ['晩ご飯', 'アルバイト'],
                selectCete: '',
            }
        },
        methods: {
            addTodo() {
                if(this.newTodo === '' || this.selectCete === '') return;
                this.todos = JSON.parse(localStorage.getItem('todos')) || [];
                let idNum = 0;
                this.todos.push({todoId:idNum,
                                 todo:this.newTodo,
                                 category:this.selectCete});
                localStorage.setItem('todos', JSON.stringify(this.todos));
                this.newTodo = '';
                this.selectCete = '';
                idNum++
                this.$router.push('/');
            }
        }
    }
</script>
<style scoped>

</style>
