
<template>
  <div>
    

    </br>
    </br>
    </br>
    </br>
    <div class="center">
      <div class="d-flex flex-row">
        <button class="button2" v-on:click="redirection_gerant" ><span>S'inscrire en tant que gérant d'association</span>
        
      </div>
      </br>
      </br>
      </br>
      </br>
      <div class="d-flex flex-row">
       
        <button class="button" v-on:click="redirection_utilisateur" ><span>S'inscrire en tant qu'adhérent </span>
      
        
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
  margin-left: -280px;
}

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #4285F4;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 600px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}


.button2 {
  display: inline-block;
  border-radius: 4px;
  background-color: #4B515D;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 600px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button2 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button2 span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button2:hover span {
  padding-right: 25px;
}

.button2:hover span:after {
  opacity: 1;
  right: 0;
}

</style>
