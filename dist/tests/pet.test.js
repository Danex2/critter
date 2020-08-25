"use strict";

var _app = _interopRequireDefault(require("../app"));

var _supertest = _interopRequireDefault(require("supertest"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongodbMemoryServer = require("mongodb-memory-server");

var _Pet = _interopRequireDefault(require("../models/Pet.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const req = (0, _supertest.default)(_app.default);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
let mongoServer;
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};
const pets = [{
  name: 'George',
  breed: 'Pitbull',
  image: 'https://images.unsplash.com/photo-1519963183664-2adcfeb55889?ixlib=rb-1.2.1&w=1000&q=80',
  lastSeen: {
    date: new Date(),
    location: {
      lat: 45,
      long: 84
    }
  },
  info: '',
  found: false
}, {
  name: 'Lady',
  breed: 'Shihtzu',
  image: 'https://www.pets4homes.co.uk/images/articles/1532/large/five-useful-things-to-know-about-the-shih-tzu-puppy-5ce28dbbd4f12.jpg',
  lastSeen: {
    date: new Date(),
    location: {
      lat: 45,
      long: 84
    }
  },
  info: '',
  found: true
}, {
  name: 'Doug',
  breed: 'Shihtzu',
  image: 'https://www.marshallspetzone.com/blog/wp-content/uploads/2018/06/featured-image.jpg',
  lastSeen: {
    date: new Date(),
    location: {
      lat: 45,
      long: 84
    }
  },
  info: '',
  found: false
}];
beforeAll(async () => {
  mongoServer = new _mongodbMemoryServer.MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await _mongoose.default.connect(mongoUri, opts, err => {
    if (err) console.error(err);
  });
  await _Pet.default.insertMany(pets);
});
afterAll(async () => {
  await _Pet.default.deleteMany({});
  await _mongoose.default.disconnect();
  await mongoServer.stop();
});
describe('Testing the pet routes', () => {
  describe('/pets', () => {
    test('should return all pets with a 200 status code', async done => {
      const res = await req.get('/pets');
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.pets)).toBe(true);
      done();
    });
  });
  describe('/pet/:id', () => {
    let pet;
    beforeEach(async () => {
      pet = await _Pet.default.create({
        name: 'Jack',
        breed: 'Jarman',
        image: 'https://dogzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2018/07/german-shepherd-price-5.jpg',
        lastSeen: {
          date: new Date(),
          location: {
            lat: 45,
            long: 84
          }
        },
        info: '',
        found: true
      });
    });
    test('should return a single pet with a 200 status code', async done => {
      const res = await req.get(`/pet/${pet._id}`);
      expect(res.status).toBe(200);
      expect(res.body.pet.name).toBe('Jack');
      done();
    });
  });
});