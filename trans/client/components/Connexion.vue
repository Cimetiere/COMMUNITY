<template>
    <div id="bodyLogin">
        <div id=choix_form>
            <button class="U_G" id="U" @click="afficher_U()">UTILISATEUR</button>
            <button class="U_G" id="G" @click="afficher_G()">GÉRANT</button>
        </div>
        <form id="formConnection" @submit.prevent="connexionUtilisateur()">
            <div class="champs">
                <input type="text"  placeholder="email" v-model="nouvelleConnection.email" required id="email">
            </div>
            <div class="champs">
                <input type="password" placeholder="Mot de passe" v-model="nouvelleConnection.password" required id="password">
            </div>
            <div class="champs">
                <button type="submit" id="valider" class="btn btn-secondary">Connexion</button>
            </div>
            <h4 v-if="error" style="color: #FE3A3A">{{error}}</h4>
        </form>
        
        <form id="formConnection2" @submit.prevent="connexionGerant()">
            <div class="champs">
                <input type="text" placeholder="email" v-model="nouvelleConnection.email" required id="email">
            </div>
            <div class="champs">
                <input type="password" placeholder="Mot de passe" v-model="nouvelleConnection.password" required id="password">
            </div>
            <div class="champs">
                <button type="submit" id="valider" class="btn btn-secondary">Connexion</button>
            </div>
            <h4 v-if="error" style="color: #FE3A3A">{{error}}</h4>
        </form>
    </div>
</template>

<script>
  module.exports = {
    props: {
      associations: { type: Array, default: [] },
      follow: { type: Object },
      error: { type: String }
    },
    data () {
        return {
            nouvelleConnection: {
                email: '',
                password: ''
            }
        }
    },
    async mounted () {
    },
    methods: {
        connexionUtilisateur() {
            this.$emit('connexion-utilisateur', this.nouvelleConnection.email, this.nouvelleConnection.password)
        },
        connexionGerant() {
            this.$emit('connexion-gerant', this.nouvelleConnection.email, this.nouvelleConnection.password)
        },
        afficher_U()
        {
            document.getElementById("formConnection").style.display = "block";
            document.getElementById("formConnection2").style.display = "none";
        },
        afficher_G()
        {
            document.getElementById("formConnection").style.display = "none";
            document.getElementById("formConnection2").style.display = "block";
        }
    }
  }
</script>

<style>
    #choix_form
    {
        width: 500px;
        border: 2px solid #CACACA;
        border-bottom: none;
        border-radius: 10px 10px 0px 0px;
        margin-bottom: -2px;
        display: flex;
    }
    .U_G
    {
        flex: 1;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    #U
    {
        background-color: #DFDFDF;
        border-radius: 8px 0px 0px 0px;
    }
    #G
    {
        background-color: #CFCFCF;
        border-radius: 0px 8px 0px 0px;
    }
    #connexion
    {
        font-family: arial;
    }
    #bodyLogin
    {
        width: 500px;
        margin: 0 auto;
        margin-top: 120px;
        background-color: #e7e7e7;
    }
    #fieldsetLogin
    {
        height: 350px;
        border-radius: 1%;
    }
    #formConnection
    {
        border: 2px solid #CACACA;
        border-radius: 0px 0px 10px 10px;
        padding-bottom: 50px;
        background-color: #DFDFDF;
    }
    #formConnection2
    {
        background-color: #CFCFCF;
        border: 2px solid #CACACA;
        border-radius: 0px 0px 10px 10px;
        padding-bottom: 50px;
        display: none;
    }
    #choix_form button
    {
        border: none;
        cursor: pointer;
        outline-style: none;
    }
    #choix_form button:focus
    {
        border: none;
    }
    #formConnection:hover
    {
        box-shadow: 0px 0px 12px #E1E1E1;;
    }
    #titre_form
    {
        margin-left: 25px;
    }
    #formInscription
    {
        margin-top: 50px;
    }
    .champs
    {
        margin-top: 10px;
        text-align: center;
    }
    #formConnection h4
    {
        text-align: center;
        margin-top: 30px;
        margin-bottom: -20px;
    }
    #email, #password, #valider
    {
        margin-top: 20px;
        width: 120px;
        height: 40px;
        border-top: none;
        border-right: none;
        border-left: none;
        transition: 0.5s;
        background-color: #e7e7e7;
        outline-style: none;
    }
    #valider
    {
        background-color: #D6D6D6;
        color: white;
    }
    #email::placeholder
    {
    }
    #email:focus::placeholder
    {
        margin-bottom: 20px;
    }
    #valider:hover, #email:focus, #password:focus, #valider:focus
    {
        margin-top: 20px;
        width: 200px;
        height: 40px;
    }
    #email:hover, #email:focus, #password:hover, #password:focus
    {
        background-color: #D6D6D6;
    }
</style>