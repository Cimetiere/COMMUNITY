<template>
    <div >
         </br>
         </br>
         </br>
        <button v-on:click="backup">LOAD </button>
         
    
        <div class="jumbotron">
            <a href="#"  class="previous" onclick="history.back()">&laquo; Précédent</a>
        <div class="barre">
            <h1 class="display-4">Associations</h1>
            <div class="recherche">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Rechercher une association..." v-model="recherche">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6" v-for="assos in Recherche" :key = assos.id>
                <div class="card" @click="gotodetails(assos.id)">
                    <div class="card-body">
                        <img :src="assos.image" class="card-img-top">
                        <h5 class="card-title">{{assos.nom}}</h5>
                        <p class="card-text">{{assos.activite}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="catId === 3">
            <div v-for="i in taille" :key = i>
                <div v-if="categoriee[i-1] ==='🗽 Culture'">
                    <div class="card" @click="gotodetails2(i)" >
                        <div class="card-body">
                            <img src="https://www.chateau-thierry.fr/sites/chateau-thierry/files/image/article/associations.jpg" class="card-img-top">
                            <h5 class="card-title">{{namee[i-1]}}</h5>
                            <p class="card-text">{{descriptionn[i-1]}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="catId === 2">
            <div  v-for="i in taille" :key = i>
                <div v-if="categoriee[i-1] ==='🤸🏻‍♀️ Loisirs'">
                    <div class="card" @click="gotodetails2(i)" >
                        <div class="card-body">
                            <img src="https://www.chateau-thierry.fr/sites/chateau-thierry/files/image/article/associations.jpg" class="card-img-top">
                            <h5 class="card-title">{{namee[i-1]}}</h5>
                            <p class="card-text">{{descriptionn[i-1]}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="catId === 1">
            <div  v-for="i in taille" :key = i>
                <div v-if="categoriee[i-1] ==='⚽️ Sport'">
                    <div class="card" @click="gotodetails2(i)" >
                        <div class="card-body">
                            <img src="https://www.chateau-thierry.fr/sites/chateau-thierry/files/image/article/associations.jpg" class="card-img-top">
                            <h5 class="card-title">{{namee[i-1]}}</h5>
                            <p class="card-text">{{descriptionn[i-1]}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="notfound" v-if="notfound == true">
            <p>Nous n'avons pas trouvé d'association comportant ce nom, cette ville ou cette activité</p>
            <p>Veillez à bien ressaisir votre demande</p>
        </div>
    </div>
    </div>
</template>

<script>

module.exports = {
    props: {
        categories: { type: Array, default: [] },
        catId: Number,
        catIndex: Number,
        choixVille: String,
         namee: {type: Array,default: [] },
         img: {type: Array,default: [] },
         descriptionn: {type: Array,default: [] },
        taille: Number,
        categoriee: {type: Array, default:[]}
    },
    data (){
        return{
            recherche: '',
            notfound: false,
       
        }
    },
   
    computed: {
        
        Test: function () {
    return this.categoriee.filter(i => i === '🗽 Culture')
  },
        Recherche(){
            const res = this.categories[this.catIndex].assos.filter(assos => {
                if (assos.ville == this.choixVille || this.choixVille == ''){
                    return assos.nom.toLowerCase().includes(this.recherche.toLowerCase())
                }
            })
           
            if (res.length == 0){
                const res2 = this.categories[this.catIndex].assos.filter(assos => {
                    if (assos.ville == this.choixVille || this.choixVille == ''){
                        return assos.activite.toLowerCase().includes(this.recherche.toLowerCase())
                    }
                })
                if (res2.length == 0){
                    this.notfound = true
                    return
                }
                else{
                    this.notfound = false
                    return res2
                }
            }
            else{
                this.notfound = false
                return res
            }
        }
    },
    methods:{
        
        gotodetails2(i){
            this.$emit('go-to-details2', i)
        },
        gotodetails(assosId){
            this.$emit('go-to-details', assosId)
        },
         backup(){    
            this.$emit('backup')    
      },
    }
}
</script>

<style scoped>
#test{

    display: none;
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
    .display-4{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .barre{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        width: 90%;
    }
    .input-group-prepend{
        border-radius: 10px;
    }
    .recherche{
        display: flex;
        margin-top: 43px;
        margin-bottom: auto;
    }
    .row{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        width: 100%;
        padding-bottom: 20px;
    
    }

    .row2{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 100%;
        padding-bottom: 20%;
    
    }
    
    .card{
        margin: auto;
        margin-top: 20px;
        max-width: 400px;
        min-height: 400px;
        background-color: rgba(184, 184, 184, 0.329);
    }
   
    .card:hover{
        box-shadow: 0 0 1em grey;
        cursor: pointer;
    }
    .card-img-top{
        max-height: 200px;
    }
    .card-title{
        font-size: 200%;
        margin-top: 10px;
    }
    .card-body{
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        height: 20%;
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
    .div{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        border-radius: 10px;
        background-color: rgba(184, 184, 184, 0.329);
        box-shadow: 0 0 0.5em #666;
        max-width: 1000px;
        max-height: 1000px;
        padding-top: 20px;
        margin: auto;
    }
    .info{
        margin-top: auto;
        margin-bottom: auto;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    #img{
        width: 100px;
        height: 60px;
        background: no-repeat;
    }
    .case{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-bottom: 50px;
    }
    .input-group{
        width: 300px;
        margin: auto;
        box-shadow: 0.2em 0.2em 0.5em #666;
        border-radius: 5px;
    }
    .btn{
        border: none;
    }
    h1{
        margin-bottom: 30px;
    }
    .pagination{
        background-color: rgba(184, 184, 184, 0.329);
    }
    .notfound{
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        margin: 50px;
    }

    a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color:grey ;
  color: white;
}
</style>
