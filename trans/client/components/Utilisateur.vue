<template>
<div>

<form>
    
      </br>
      </br>
      </br>
      <hr>
      <h2> 1er étape - Profil</h2>
      <hr>
      </br>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Prénom</span>
      </div>
      <input type="text" onfocus="this.value=''"  class="form-control" placeholder="xxx" aria-label="Username" aria-describedby="basic-addon1" id="texte" v-model="firstname" >
      </div>
    </br>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Nom</span>
      </div>
      <input type="text" onfocus="this.value=''"  class="form-control" placeholder="xxx" aria-label="Username" aria-describedby="basic-addon1" id="texte" v-model="name">
      </div>

      
      </br>
      </br>
      <hr>
      <h2> 2eme étape - Mon espace personnel</h2>
      <hr>
      </br>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Email</span>
      </div>
      <input type="text" onfocus="this.value=''"  class="form-control" placeholder="xxx@gmail.com" aria-label="Username" aria-describedby="basic-addon1" id="texte" v-model="email">
      </div>
    </br>
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Mot de passe</span>
      </div>
      <input type="text" onfocus="this.value=''"  class="form-control" placeholder="**********" aria-label="Username" aria-describedby="passwordHelpBlock" id="texte" v-model="password" >
      
      </div>
      <small id="passwordHelpBlock" class="form-text text-muted">
  Votre mot de passe doit contenir au minimum 8 caractères et un symbole * et un symbole /
</small>
        </br>
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Validation du mot de passe</span>
      </div>
      <input type="text" onfocus="this.value=''"  class="form-control" placeholder="**********" aria-label="Username" aria-describedby="basic-addon1" id="texte" v-model="password2">
      </div>
      </br>
       </br>
        </br>
         </br>

        <div class="submit">
        <button class="btn btn-primary btn-lg" type="submit" v-on:click="inscription" >S'inscrire   </button>
        </div>
  
    </form>

  
</div>

</template>

<script>
module.exports = {
  data () {
    return {
        email: '',
      password: '',
      password2: '',
      name: '',
      firstname: '',
      

      
    }
  },
  methods: {
    inscription(){ 
        if (this.password=='' || this.password2=='' || this.name ==''|| this.firstname == ''|| this.email == ''){
            alert("Vous n'avez pas rempli tous les champs.")
        }
        else{
        if (this.password == this.password2){
          if (this.password.length > 7 && this.password.includes('*') && this.password.includes('/')){
            
            this.$emit('inscription', this.email, this.password, this.name, this.firstname)
          }
          else{
              alert("Problèmes, vérifiez que les 2 mots de passes respectent la nomenclature demandée.")
          }
        }
     
        else{
          alert("Problèmes, vérifiez si les 2 mots de passes corresspondent.")
        }
        }
        
        
    }
  }
  
}

</script>

<style scoped>

h3,h2{
    text-align:center;
    font-weight: lighter;
}

.submit{
    text-align:center;
}

hr{
  border-top: 5px double #333;
}

#basic-addon1,#inputGroupFileAddon01{
  background-color:#343a40;
  color: white;
}

</style>