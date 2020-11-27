const express = require('express')
const router = express.Router()
const associations = require('../data/associations.js')

const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: 'your_password',
 database: 'Transverse'
})

client.connect()

class Follow {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.associations = []
  }
}

router.post('/register', async(req, res) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name
  const firstname = req.body.firstname


  const result = await client.query({ 
    text: 'SELECT * FROM utilisateurs WHERE email=$1',
    values: [email]
  })

  if (result.rows.length > 0){
    res.status(401).json({ message: 'L utilisateur est déja inscrit!' })
    return
  }

  const hash = await bcrypt.hash(password, 10)
  await client.query('INSERT INTO utilisateurs(email, password, name, firstname) VALUES ($1,$2,$3,$4)', [email, hash, name, firstname])
  res.status(400).json({ message: 'L utilisateur est maintenant inscrit!' })
  return
 
})


router.post('/register2', async(req, res) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name
  const firstname = req.body.firstname


  const result = await client.query({ 
    text: 'SELECT * FROM gerants WHERE email=$1',
    values: [email]
  })

  if (result.rows.length > 0){
    res.status(401).json({ message: 'L utilisateur est déja inscrit!' })
    return
  }

  const hash = await bcrypt.hash(password, 10)
  await client.query('INSERT INTO gerants(email, password, name, firstname) VALUES ($1,$2,$3,$4)', [email, hash, name, firstname])
  res.status(400).json({ message: 'L utilisateur est maintenant inscrit!' })
  return
 
})

router.use((req, res, next) => {
  if(typeof req.session.follow === 'undefined') {
    req.session.follow = new Follow()
  }
  next()
})

/**
 * Cette route renvoie l'intégralité des associations du site
 */
router.get('/associations', (req, res) => {
  res.json(associations)
})
/**
 * Cette route renvoie l'intégralité des associations follow
 */
router.get('/follow', (req, res) => {
  res.json(req.session.follow)
})

/**
 * Cette route permet d'ajouter à ses follow
 */
router.post('/follow', (req, res) => {
  const id = req.body.id
  const nbr_assos_follow = req.session.follow.associations.length

  for(let i=0 ; i<nbr_assos_follow ; i++)
    {
      if(id == req.session.follow.associations[i].id)
      {
        res.status(400).json({ message: 'bad request - ce lieu fait déjà partis des favoris'})
        return
      }
    }

  req.session.follow.associations.push({id})

  res.json(req.session.follow)
})

router.delete('/follow/:associationId', (req, res) => {
  const nbr_assos_follow = req.session.follow.associations.length

  for(let i=0 ; i<nbr_assos_follow ; i++)
    {
      if(req.params.associationId == req.session.follow.associations[i].id)
      {
        req.session.follow.associations.splice(i, 1)
        res.json(req.session.follow)
        return
      }
    }
    res.status(400).json({ message: 'bad request - Vous ne suivez pas cette association'})

})


module.exports = router
