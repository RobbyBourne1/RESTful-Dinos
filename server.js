const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express()
app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }))

let allDinos = [
  {
    id: 1,
    name: 'T-Rex',
    color: ['Green'],
    diet: 'Carnivore'
  },
  {
    id: 1,
    name: 'Raptor',
    color: ['Green', 'Purple'],
    diet: 'Carnivore'
  },
  {
    id: 1,
    name: 'Stegosaurus',
    color: ['Green', 'Yellow'],
    diet: 'Herbivore'
  },
  {
    id: 1,
    name: 'Triceratops',
    color: ['Orange', 'Yellow'],
    diet: 'Herbivore'
  }
]

app.get('/api/dinos', (request, response) => {
  response.json(allDinos)
})

app.get('/api/dinos/:id', (request, response) => {
  const dinoId = paresInt(request.params.id)
  const thisDino = allDinos.find(dino => {
    dino.id === dinoId
  })
})

app.get('api/dinos/:id/diet', (request, response) => {})

app.listen(3000, () => {
  console.log('Clever Girl')
})
