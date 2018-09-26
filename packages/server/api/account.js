'use strict'

const router = require('express').Router()
const db = require('../db')
const _ = require('lodash')

function removeSensitiveAccountInfo (accounts) {
  if (accounts instanceof Array) {
    return _.map(accounts, function (account) {
      delete account.password
      return account
    })
  } else {
    delete accounts.password
    return accounts
  }
}

router.get('/', function (req, res) {
  db.accounts.findAll()
    .then(accounts => {
      res.json({
        data: removeSensitiveAccountInfo(accounts)
      })
    })
})

module.exports = router
