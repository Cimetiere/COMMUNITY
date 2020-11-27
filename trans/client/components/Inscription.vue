
<template>
  <div>
    

    </br>
    </br>
    </br>
    </br>
    <div class="center">
      <div class="d-flex flex-row">
      <svg class="utilisateur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50"><path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path></svg>
        <button  type="button" id="utilisateur" class="btn btn-secondary btn-lg btn-block" v-on:click="redirection_gerant">S'inscrire en tant que gérant d'association</button>
      </div>
      </br>
      </br>
      </br>
      </br>
      <div class="d-flex flex-row">
        <svg class="gerant"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50"><path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path></svg>
      
        <button v-on:click="redirection_utilisateur" type="button" class="btn btn-primary btn-lg btn-block">S'inscrire en tant qu'adhérent</button>
        
      </div>
    </div>
  </div>
</template>

<script>


const routes = [
  { path: '/gerant', component: Gerant, name:'gerant' },
  { path: '/utilisateur', component: Utilisateur, name:'utilisateur' },
  
]


module.exports = {
  data () {
    return {
      
    }
  },
  methods: {
    redirection_utilisateur(){
      router.replace({
              name: 'utilisateur'
          })
    },
     
     redirection_gerant(){
      router.replace({
              name: 'gerant'
          })
    }
    
  }
}
</script>

<style scoped>

h1{
  text-align:center;
}
svg {
    fill: currentColor;

  }


.center{
 

  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
}




</style>
