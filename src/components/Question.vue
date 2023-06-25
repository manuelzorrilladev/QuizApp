<script setup>

const { question} = defineProps(['question']) 

// We use defineEmits function, to pass info from the child component to 
// the parent component
const emit = defineEmits(["selectOption"])

const emitSelectedOption = (isCorrect)=>{
    emit("selectOption",isCorrect)
}







</script> 
 


<template>
    <div class="quizBox">
        <div class="questionContainer">
            <h1 class="question">
                {{ question.text }}
            </h1>
        </div>
        <div v-for="option in question.options" :key="option.id" class="optionsContainer" @click="emitSelectedOption(option.isCorrect)">
            <div class="option">
                <p class="optionLabel">{{ option.label }}</p>
                <div class="optionValue">
                    <p>{{ option.text }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.quizBox {
    margin-left: 15vw;
}

.questionContainer {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
    cursor: pointer;
}
.optionsContainer{
    width: 80%;
}

.optionLabel {
    background-color: rgb(175, 124, 103);
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.optionValue {
    background-color: rgb(236, 203, 188);
    width: 100%;
    font-size: 30px;
    padding: 5px 0;
}

@media (max-width:840px) {
    .question {
        font-size: 30px;
    }
}
</style>