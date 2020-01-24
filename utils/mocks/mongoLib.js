const sinon = require('sinon')
const { moviesMock, filteredMoviesMock } = require('./movies')

// For test purpose only
const ID = '5de31d41a86e04593563129b'
const tagQuery = { tags: { $in: ['drama'] } }

const getAllStub = sinon.stub()
// Without filter
getAllStub.withArgs('movies').resolves(moviesMock)
// Filter applied
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock)

const createStub = sinon.stub().resolves(moviesMock[0].id)

const updateStub = sinon
  .stub()
  .withArgs('movies', ID)
  .resolves(moviesMock[0].id)

const deleteStub = sinon
  .stub()
  .withArgs('movies', ID)
  .resolves(moviesMock[0].id)

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query)
  }

  create(collection, data) {
    return createStub(collection, data)
  }

  update(collection, id, data) {
    return updateStub(collection, id, data)
  }

  delete(collection, id) {
    return deleteStub(collection, id)
  }
}

module.exports = {
  getAllStub,
  createStub,
  updateStub,
  deleteStub,
  MongoLibMock
}
