// TODO: this is dummy db, rewrite full db
const accounts = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    roles: [
      'ADMIN',
      'MEMBER'
    ]
  },
  {
    id: 2,
    username: 'user',
    password: 'user',
    roles: [
      'MEMBER'
    ]
  }
]

function clone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

module.exports.findById = (id) => {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) return Promise.resolve(clone(accounts[i]))
  }
  return Promise.resolve(null)
}

module.exports.findByUsername = (username) => {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username) return Promise.resolve(clone(accounts[i]))
  }
  return Promise.resolve(null)
}

module.exports.findAll = () => {
  return Promise.resolve(clone(accounts))
}
