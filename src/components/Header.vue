<script setup>
    const {questionStatus, barStatus} = defineProps(['questionStatus','barStatus'])


</script>



<template>
    <header>
        <h4>Question {{questionStatus}}</h4>
        <div class="bar">
            <div class="completion" :style="{ width: barStatus+ '%' }"></div>
        </div>
    </header>
</template>

<style scoped>
header {
    margin-top: 20px;
    margin-left: 15vw;

}

header h4 {
    font-size: 30px;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid rgb(175, 124, 103);
}

.completion {
    transition: 0.3s;
    height: 100%;
    width: 0%;
    background-color: rgb(175, 124, 103);
}
</style>