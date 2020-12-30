<template>
    <div>
           </br>
         </br>
          

        <div class="jumbotron">
             <a href="#"  class="previous" onclick="history.back()">&laquo; Précédent</a>
            <div class="header">
                <div id="img" :style ="{ backgroundImage: 'url(' + 'https://www.chateau-thierry.fr/sites/chateau-thierry/files/image/article/associations.jpg' + ')',
                backgroundSize: '100%'}"></div>
                <div class="name" >
                    <h1 class="display-4">{{namee[i-1]}}</h1>
                </div>
            </div>
            <p class="lead">{{descriptionn[i-1]}}</p>
            <div class="cards">
                <div class="row">
                    <div class="card-body">
                        <h5 class="card-header">Membres</h5>
                        <div class="svg">
                            <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" 
                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                            </svg>
                        </div>
                        <p class="p-card">Association actuellement composée de {{numberr[i-1]}} membres</p>
                    </div>
                </div>
                <div class="row">
                    <div class="card-body">
                        <h5 class="card-header">Localisation</h5>
                        <div class="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </div>
                        <p class="p-card">Adresse : </p>
                        <p class="p-card">Ville : </p>
                    </div>
                </div>
                <div class="row">
                    <div class="card-body">
                        <h5 class="card-header">Contacts</h5>
                        <div class="svg">
                            <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-phone-vibrate" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 3H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
                                <path fill-rule="evenodd" d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>
                            </svg>
                        </div>
                        <p class="p-card">Gérant : {{nomm[i-1] + " " + prenomm[i-1]}} </p>
                        <p class="p-card">E-mail : {{emaill[i-1]}}</p>
                        <p class="p-card">Téléphone : {{phonee[i-1]}}</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
module.exports = {
    props: {
        i:{type: Number},
        namee: {type: Array,default: [] },
         img: {type: Array,default: [] },
         descriptionn: {type: Array,default: [] },
        taille: Number,
        categoriee: {type: Array, default:[]},
        numberr: {type: Array, default:[]},
        phonee: {type: Array, default:[]},
        nomm: {type: Array, default:[]},
        prenomm: {type: Array, default:[]},
        emaill: {type: Array, default:[]},
    },
    data(){
        return{
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
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
    }
    .alert{
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    .header{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        margin-top: 0;
        height: 500px;
        background-color:#1a1d29;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    #img{
        width: 250px;
        height: 250px;
        margin-left: auto;
        margin-right: auto;
        background: no-repeat;
        border: 5px solid white;
        background-position-y: 0;
        border-radius: 200px;
        background-color: white;
        box-shadow: 0 0 20em rgb(139, 139, 139);
    }
    .name{
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    h1{
        margin: auto;
        color: blanchedalmond;
    }
    path{
        color: white;
    }
    .lead{
        padding-top: 50px;
        padding-bottom: 50px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
        border-bottom: 1px solid grey;
    }
    .cards{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 30px;
        padding-bottom: 70px;
        border-bottom: 1px solid grey;
    }
    .row{
        display: flex;
        margin-top: 30px;
        max-width: 300px;
        box-shadow: 0 0 0.5em #666;
    }
    .card-body{
        display: flex;
        flex-flow: column wrap;
        background-color:#1a1d29;
        min-width: 300px;
    }
    .svg{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    h5{
        color: white;
        margin-bottom: 10px;
    }
    .bi-phone-vibrate{
        color: white;
        margin-bottom: 10px;
    }
    .bi-people{
        color: white;
        margin-bottom: 10px;
    }
    .p-card{
        color: white;
    }
    .card-header{
        background-color:#10121a;
    }
    .btn-info{
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }
    .btn-outline-info{
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        border: 2px solid;
    }
    .bi-heart-fill{
        margin-top: 7px;
        margin-left: 5px;
    }
    .bi-heart{
        margin-top: 7px;
        margin-left: 5px;
    }
    .alert{
        margin-top: 40px;
    }
    .btn:focus{
        outline: none;
    }

    a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color: white;
  color: black;
}
</style>