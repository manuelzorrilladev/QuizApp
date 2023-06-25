<script setup>
import {RouterView} from 'vue-router'

</script>


<template>
    <div >
        <RouterView/>
        
    </div>
</template>


<style scoped>
.container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

}


@media (max-width:840px) {
    header{
        justify-content: center;
    }
    .flex{
        justify-content: center;
    }
    .card{
        width: 60vw;
    }
}

</style>