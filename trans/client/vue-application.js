const Home = window.httpVueLoader('./components/Home.vue')
const Gerant = window.httpVueLoader('./components/Gerant.vue')
const Utilisateur = window.httpVueLoader('./components/Utilisateur.vue')
const Inscription = window.httpVueLoader('./components/Inscription.vue')
const monEspace = window.httpVueLoader('./components/monEspace.vue')
const FindAssos = window.httpVueLoader('./components/FindAssos.vue')
const Categories = window.httpVueLoader('./components/Categories.vue')
const AssosDetails = window.httpVueLoader('./components/AssosDetails.vue')
const Connexion = window.httpVueLoader('./components/connexion.vue')
const Test = window.httpVueLoader('./components/Test.vue')

const routes = [
  { path: '/', component: Home , name:'home'},
  { path: '/gerant', component: Gerant, name:'gerant' },
  { path: '/utilisateur', component: Utilisateur, name:'utilisateur' },
  { path: '/inscription', component: Inscription, name:'inscription' },
  { path: '/monEspace', component: monEspace, name:'espace' },
  {path: '/connexion', component: Connexion, name:'connexion' },
  { path: '/categories', component: Categories },
  { path: '/categories/:catid', component: FindAssos },
  { path: '/categories/:catid/:assosid', component: AssosDetails },
  { path: '/test', component: Test }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    categories: [],
    catId: 0,
    catIndex: 0,
    assosId: 0,
    assosIndex: 0,
    alertfollowing: false,
    villes : [],
    choixVille : '',
    associations: [],
    follow: {
      createdAt: null,
      updatedAt: null,
      associations: []
    },
    namee:[],
    img:[],
    descriptionn: [],
    numberr: [],
    categoriee: [],
    phonee: [],
    taille: null,
    error: '',
    i: null,
    nomm: [],
    prenomm: [],
    emaill: [],
    

    
    
   
  },
  async mounted () {
    const ress = await axios.get('/api/associations')
    this.associations = ress.data

    const res2 = await axios.get('/api/follow')
    this.follow = res2.data

    const res = await axios.get('/api/categories')
    this.categories = res.data
  
    this.alertfollowing = false
    let compt = 0
    for (i=0;i<this.categories.length;i++){
      for (j=0;j<this.categories[i].assos.length;j++){
        if (this.villes.length == 0){
          this.villes.push(this.categories[i].assos[j].ville)
        }
        else{
          for (h=0;h<this.villes.length;h++){
            if (this.categories[i].assos[j].ville == this.villes[h]){
              compt = compt + 1
            }
          }
          if(compt == 0){
            this.villes.push(this.categories[i].assos[j].ville)
          }
          compt = 0
        }
      }
    }
  
  },
  
  methods: {
    async addFollow(associationId) {
      const res = await axios.post('/api/follow', {id:associationId})
      this.follow.associations.push({id:associationId})
    },
    async unfollow(associationId) {
      const res = await axios.delete('/api/follow/' + associationId)
      const index = this.follow.associations.findIndex(a => a.id === associationId)
      this.follow.associations.splice(index,1)
    },
    async inscription(email,password,name,firstname) {
      const res = await axios.post('/api/register', {email: email, password:password, name:name, firstname:firstname}).catch(error => {
        if (error.response.status === 401) {
            alert("Cet email est déja inscrit dans notre base de données")
          }
        if (error.response.status === 400) {
          alert("Bravo, vous êtes inscrit!")
          router.replace({
            name: 'home'
          })
        }
        }
        );
      
        return
    },

    async inscription2(email,password,name,firstname,nom_assoc,description, members, categorie,mobile,picture) {
      const res = await axios.post('/api/register2', {email: email, password:password, name:name, firstname:firstname, nom_assoc:nom_assoc,description:description, members:members, categorie:categorie,mobile:mobile, picture:picture}).catch(error => {
        if (error.response.status === 401) {
            alert("Cet email est déja inscrit dans notre base de données")
          }
        if (error.response.status === 400) {
          alert("Bravo, vous êtes inscrit!")
          router.replace({
            name: 'home'
          })
        }
        });
        
        return res.data.rows[0]


    },

    async backup(){
      
      const re = await axios.get('/api/backup')
     
        for (let i=0; i<re.data.rowCount; i++){
          this.namee.push(re.data.rows[i].name)
          this.img.push(re.data.rows[i].picture)
          this.descriptionn.push(re.data.rows[i].description)
          this.numberr.push(re.data.rows[i].number)
          this.categoriee.push(re.data.rows[i].categorie)
          this.phonee.push(re.data.rows[i].phone)
        }
        this.taille = re.data.rowCount

        const ree = await axios.get('/api/backup2')
     
        for (let i=0; i<ree.data.rowCount; i++){
          this.nomm.push(ree.data.rows[i].name)
          this.prenomm.push(ree.data.rows[i].firstname)
          this.emaill.push(ree.data.rows[i].email)
         
        }



    },

    goToAssos(catId){
      this.catId = catId
      this.catIndex = this.categories.findIndex(a => a.id === catId)
      router.push('/categories/' + catId)
    },
    goToDetails(assosId){
      this.assosId = assosId
      this.assosIndex = this.categories[this.catIndex].assos.findIndex(a => a.id === assosId)
      router.push('/categories/' + this.catId + '/' + assosId)
    },
    goToDetails2(i){
      console.log(i)
      this.i = i
      router.push('/test')
    },
    async followAssos(){
      this.alertfollowing = true
      const res = await axios.post('/api/categories/' + this.catId + '/' + this.assosId, {
        catIndex: this.catIndex,
        assosIndex: this.assosIndex
      })
      this.categories[this.catIndex].assos[this.assosIndex].followstatus = res.data
      
    },
    AnnulVille(){
      this.choixVille = ''
    },
    async connexionUtilisateur(email, password) {
      try
      {
        const res = await axios.post('/api/login_utilisateur', {email:email, password:password})
        this.$router.push('/monEspace')
      }
      catch(error)
      {
        this.error = 'Mot de passe ou email incorrect'
      }
    },
    async connexionGerant(email, password) {
      try
      {
        const res = await axios.post('/api/login_gerant', {email:email, password:password})
        this.$router.push('/monEspaceGerant')
      }
      catch(error)
      {
        this.error = 'Mot de passe ou email incorrect'
      }
    }
    
  }
})
