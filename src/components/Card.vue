
<script setup>
    
    import {useRouter} from 'vue-router'

    const router = useRouter()

    const {quiz} = defineProps(['quiz'])

    const navigateToQuiz = () =>{
        router.push(`/quiz/${quiz.id}`)
    }
</script>



<template>
    
    <div @click="navigateToQuiz()">
        <img :src="quiz.img" alt="math">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
        </div>
    </div>
</template>

<style scoped>

.card img {
    width: 100%;
    height: 190px;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card .card-text h2 {
    font-weight: bold;
}

.error h1 {
    text-align: center;
}
</style>