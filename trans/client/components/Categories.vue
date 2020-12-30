<template>
<div>
    </br>
     </br>

<div class="jumbotron">
        <h1 class="display-4">Activités</h1>
        <div v-for="categorie in categories" :key="categorie.id" class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
                <div class="card" @click="gotoassos(categorie.id)">
                    <img :src="categorie.image" class="card-img-top">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{categorie.nom}}</h5>
                        <div class="divchev">
                            <div class="chevron"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
module.exports = {
    props: {
        categories: { type: Array, default: [] },
        
    },
    data (){
        return{
            
        }
    },
    methods:{
        gotoassos(catId){
            this.$emit('go-to-assos', catId)
        }
    }
}
</script>

<style scoped>
    .display-4{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .jumbotron{
        margin-left: 50px;
        margin-right: 50px;
        padding: 0;
        background-color: rgba(184, 184, 184, 0.329);
        box-shadow: 0 0 0.5em #666;
        max-width: 1000px;
        margin: auto;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }
    .row{
        margin-top: 10px;
    }
    .card{
        max-width: 500px;
        background-color: rgba(184, 184, 184, 0.329);
    }
    .card:hover{
        box-shadow: 0 0 1em grey;
        cursor: pointer;
    }
    .card-title{
        font-size: 200%;
    }
    .card-body{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        height: 200%;
    }
    .chevron {
        margin-top: 10px;
        width: 5em;
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs,1));
        width: 22px;
        height: 22px;
        border: 2px solid transparent;
        border-radius: 100px
    }
    .chevron::after,
    .chevron::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 2px;
        height: 14px;
        border-right: 2px solid;
        top: 2px;
        right: 0
    }
    .chevron::after {
        width: 10px;
        height: 10px;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        right: 6px;
        top: 4px
    }




</style>