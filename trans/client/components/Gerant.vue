<template >
<div>

<form>
    
      </br>
      </br>
      </br>
      <hr>
      <h3> 1er étape - Profil</h3>
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
      <h3> 2eme étape - Mon espace personnel</h3>
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
  Votre mot de passe doit contenir au minimum 8 caractères et au minimum 2 symboles
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
      <hr>
      <h3> 3eme étape - Ajout de votre association</h3>
      <hr>
      </br>

      <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Nom de l'association</span>
      </div>
      <input type="text" onfocus="this.value=''"  class="form-control" placeholder="Community" aria-label="Username" aria-describedby="basic-addon1" id="texte" v-model="nom_assoc" >
      </div>
    </br>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Description</span>
      </div>
        <textarea class="form-control" aria-label="With textarea" v-model="description" placeholder="L'association [...] a pour but de [...]"></textarea> 
      </div>

      </br>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" id="inputGroupFileAddon01" for="inputGroupSelect01">Catégorie </label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>🏐 Loisir</option>
          <option value="1">🗽 Culture</option>
          <option value="2">👤 Social</option>
          <option value="3">📖 Education</option>
        </select>
      </div>

</br>
   <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Télécharger des photos</span>
        </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01">
              <label class="custom-file-label" for="inputGroupFile01">Choisir un fichier</label>
            </div>
  </div>

  </br>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Numéro de téléphone</span>
      </div>
      <input type="text" onfocus="this.value=''"  class="form-control" placeholder="XX.XX.XX.XX.XX" aria-label="Username" aria-describedby="basic-addon1" id="texte" v-model="mobile" >
      </div>
   

      </br>
       </br>
        </br>
         </br>

        <div class="submit">
        <button class="btn btn-primary btn-lg" type="submit" v-on:click="inscription2" >S'inscrire et ajouter mon association  </button>
        </div>
    </form>
</div>

</template>

<script>
$(document).ready(function(){
  $('#inputGroupFile01').on('change',function(){
      //get the file name
      var fileName = $(this).val();
      //replace the "Choose a file" label
      $(this).next('.custom-file-label').html(fileName);
  })
});

module.exports = {
  data () {
    return {
        email: '',
      password: '',
      password2: '',
      name: '',
      firstname: '',
      nom_assoc: '',
      description: '',
      mobile: '',
      
    }
  },
  methods: {
    inscription2(){ //problème pour le mdp , symbole et 8 caractères obligatoires !!!!
        if (this.password=='' || this.password2=='' || this.name ==''|| this.firstname == ''|| this.email == ''){
            alert("Vous n'avez pas rempli tous les champs.")
        }
        else{
        if (this.password == this.password2){
          this.$emit('inscription2', this.email, this.password, this.name, this.firstname)
        }
     
        else{
          alert("Les mots de passes ne sont pas les mêmes veuillez réssayer.")
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