const Home = window.httpVueLoader('./components/Home.vue')
const Gerant = window.httpVueLoader('./components/Gerant.vue')
const Utilisateur = window.httpVueLoader('./components/Utilisateur.vue')
const Inscription = window.httpVueLoader('./components/Inscription.vue')
const monEspace = window.httpVueLoader('./components/monEspace.vue')

const routes = [
  { path: '/', component: Home , name:'home'},
  { path: '/gerant', component: Gerant, name:'gerant' },
  { path: '/utilisateur', component: Utilisateur, name:'utilisateur' },
  { path: '/inscription', component: Inscription, name:'inscription' },
  { path: '/monEspace', component: monEspace, name:'espace' },
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    associations: [],
    follow: {
      createdAt: null,
      updatedAt: null,
      associations: []
    }
   
  },
  async mounted () {
    const res = await axios.get('/api/associations')
    this.associations = res.data

    const res2 = await axios.get('/api/follow')
    this.follow = res2.data
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
      await axios.post('/api/register', {email: email, password:password, name:name, firstname:firstname}).catch(error => {
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
        
    },

    async inscription2(email,password,name,firstname) {
      await axios.post('/api/register2', {email: email, password:password, name:name, firstname:firstname}).catch(error => {
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
    },
    
  }
})
