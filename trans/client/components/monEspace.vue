<template>
    <div id="divBody">
        <div id="divActualites">
            <h2><strong>Fils d'actualites</strong></h2>
            <div id="actualites">
                <h3 id="titreAsso">Nom de l'association</h3><br>
                <div id="photoAsso">photo pour illustrer</div>
                <div id="textAsso">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                
                <h3 id="titreAsso">Nom de l'association</h3><br>
                <div id="photoAsso">photo pour illustrer</div>
                <div id="textAsso">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</div>

                <h3 id="titreAsso">Nom de l'association</h3><br>
                <div id="photoAsso">photo pour illustrer</div>
                <div id="textAsso">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
            </div>
        </div>
        <div id="assos_follow">
            <h2><strong>Associations follow</strong></h2>
            <article v-for="(association, index) in follow.associations" :key="association.id">
                <div>
                    {{ associations[(follow.associations[index].id)-1].name }}
                </div>

                <div id="image_infos_bouton">
                    <div id="article_img">
                        <div id="img" :style="{backgroundImage: 'url(' + associations[(follow.associations[index].id)-1].image + ')' }">
                        </div>
                        <div id="bouton">
                            <button @click="unfollow(association.id)" id="bouton_style">Ne plus suivre</button>               
                        </div>
                    </div>

                    <div id="infos">
                        <div class="trois_infos">
                            <strong>Nombre de membres :</strong> {{ associations[(follow.associations[index].id)-1].membres }} 
                        </div><br>

                        <div class="trois_infos">
                            <strong>Nom du gérant :</strong> {{ associations[(follow.associations[index].id)-1].nom_gerant }} 
                        </div><br>

                        <div class="trois_infos">
                            <strong>Contact :</strong> {{ associations[(follow.associations[index].id)-1].telephone }}
                        </div>
                    </div>

                </div>
            </article>
        </div>
    
  
     
    </div>
</template>

<script>



  module.exports = {
    props: {
      associations: { type: Array, default: [] },
       teste: {type: Object },
      follow: { type: Object }
     
    },
    data () {
      return {
      }
    },
    
    methods: {
      unfollow(associationId) {
        this.$emit('un-follow', associationId)
      },

     
      
      
    }
  }
</script>

<style scoped>
    article
    {
        margin-bottom: 30px;
    }
    #img
    {
        height: 100px;
        width: 150px;
        background-repeat: no-repeat;
        background-size: contain;
    }
    #divBody
    {
        display: flex;
        width: 1350px;
        margin: 0 auto;
        font-family: arial;
        margin-top: 50px;
    }
    #divActualites
    {
        flex: 5;
    }
    #actualites
    {
        /* border: 1px solid black; */
        border-radius: 10px;
        min-height: 500px;
        margin-right: 40px;
        background-color: #ECECEC;
        padding-top: 1px;
        padding-bottom: 20px;
    }
    #photoAsso
    {
        width: 85%;
        height: 130px;
        border: 1px solid black;
        text-align: center;
        padding-top: 120px;
        margin: 0 auto;
        border-radius: 5px
    }
    #titreAsso
    {
        margin: 0 auto;
        width: 85%;
        margin-top: 50px;
    }
    #textAsso
    {
        margin: 0 auto;
        width: 85%;
        margin-top: 4px;
    }
    #assos_follow
    {
        flex: 2;
    }
    article
    {
        border: 1px solid black;
        border-radius: 20px;
        padding: 10px;
    }
    #image_infos_bouton
    {
        display: flex;
    }
    #article_img
    {
        flex: 3;
    }
    #infos
    {
        flex: 4;
        flex-direction: column;
    }
    .trois_infos
    {
        flex: 1;
    }
    #bouton
    {
        text-align: center;
    }
    #bouton_style
    {
        background-color: #B7B7B7;
        border: 0px;
        border-radius: 5px;
        padding: 5px;
        width: 100%;
        transition: 0.5s;
    }
    #bouton_style:hover
    {
        background-color: #DADADA;
    }
</style>