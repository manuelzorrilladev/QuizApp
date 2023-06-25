<script setup>
    import {RouterLink} from 'vue-router'
    
    const totalScore = defineProps(['totalScore'])

</script>   

<template>
   <div class="results">
    <p>Your final score is...</p>
    <h1>{{ totalScore.totalScore}}</h1>
    <RouterLink to="/" class="backBtn">Go Back</RouterLink>
   </div>
</template>

<style scoped>
.results{
    text-align: center;
    padding: 100px 0;

}
p{
    font-size: 35px;
}
h1{
    font-size: 60px;
}
.backBtn{
    text-decoration: none;
    color: black;
    background-color: rgb(175, 124, 103);
    padding: 5px 15px;
    border-radius: 5px;
    transition: 0.3s ;
}
.backBtn:hover{
    background-color: rgb(236, 203, 188);

}
</style>