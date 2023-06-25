<script setup>
// Imports from vue
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
// data import
import quizes from '../data/quizes.json'

// component imports
import Question from '../components/Question.vue'
import Header from '../components/Header.vue'
import Result from '../components/Result.vue'
// ******

// usage of useRoute to find the actual id of the quiz
// and find the quiz asociated to de id

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)
const quizLength = quiz.questions.length

// Completion bar and index of the actual question



// Progress and score
const currentQuestionIndex = ref(0)
const currentScore = ref(0)


// We use computed method from vue, to return a new value when  state change
const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quizLength}`
})

//Status Bar 
const barStatus = computed(() => {
    return (currentQuestionIndex.value * 100) / quizLength
})
// Results prop
const totalScore = computed(()=>{
    return `${currentScore.value}/${quizLength}`
})

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {

        currentScore.value++
    }
    currentQuestionIndex.value++
}

</script>


<template>
    <div class="quizContainer">

        <Header 
            :questionStatus="questionStatus" 
            :barStatus="barStatus" 
        />
        <div>
            <Question 
                v-if="currentQuestionIndex < quizLength" 
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected" 
            />
            <Result 
                v-else
                :totalScore="totalScore"
            />

        </div>

    </div>
</template>

<style scoped>
.quizContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>