<script setup>
import Card from '../components/Card.vue'

import q from '../data/quizes.json'

import { ref, watch } from 'vue'

const quizes = ref(q)
const search = ref("")

let buttonClass = 'hidden'

function deleteInput() {
    search.value = ""
}

watch(search, [
    () => {
    quizes.value = q.filter(
        quiz => quiz.name.toLowerCase().includes(
            search.value.toLowerCase()
            ))}, 
    () => {
    if (search.value == "") {
        buttonClass = 'hidden'

    } else {
        buttonClass = 'show'

    }
}])


</script>

<template>
    <div class="container">
        <div class="flex-container">
            <header>
                <h1>Quizes</h1>
                <input v-model.trim="search" type="text" placeholder="Search...">
                <button class="deleteBtn" :class="buttonClass" @click="deleteInput()">x</button>
            </header>
            <div class="option-container">
                <div class="flex" v-if="quizes.length > 0">
                    <Card v-for="quiz in quizes" :key="quiz.id" class="card" :quiz="quiz" />
                </div>
                <div v-else class="error">
                    <h1>No results founds :(</h1>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

.flex{
    display: flex;
    flex-wrap: wrap;
    
}

header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
    padding-bottom: 10px;
}

header input {
    border: none;
    height: 30px;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}


.option-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s;
}
.card:hover{
    box-shadow: 1px 1px 38px 1px rgba(0,0,0,0.75);
}

.deleteBtn{
    height: 20px;
    transform: translateX(-30px);
    font-weight: bold;
    border: none;
    border-radius: 5px;
    transition: 0.2s ;
}
.deleteBtn:hover{
    background: #000;
    color: white;
}
.show {
    display: block;
}

.hidden {
    display: none;
}
@media (max-width:840px) {
    .flex-container {
        width: 80%;
    }
    .flex{
        justify-content: center;
    }
}

</style>
