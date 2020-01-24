const assert = require('assert')
const buildMessage = require('../utils/buildMessage')

describe('utils - buildMessage', () => {
  describe('when receives an entity and an action', () => {
    it('should return the respective message', () => {
      const result = buildMessage('movie', 'create')
      const expected = 'movie created'
      assert.strictEqual(result, expected)
    })
  })

  describe('when recieves an entity an action and a list', () => {
    it('should return the respective messsage', () => {
      const result = buildMessage('movie', 'list')
      const expected = 'movies listed'
      assert.strictEqual(result, expected)
    })
  })
})
