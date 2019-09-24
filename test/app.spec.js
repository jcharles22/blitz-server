const knex = require('knex');
const app = require('../src/app');
require('dotenv').config();s

describe('App', () => {
    it('GET / responds with 200 contating "Hello, world!"', () => {
        return supertest(app)
          .get('/')
          .expect(200, "Hello, world!")
    })
})

describe('GetScore', function () {
    let db;
    let testScore = [{
        'users': 'JTC',
        'score': 800
    }]

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
    })
    before('clean the table', () => db.raw('TRUNCATE users score RESTART IDENTITY CASCADE'))

    afterEach('cleanup', () => db.raw('TRUNCATE users scores RESTART IDENTITY CASCADE'))

    after(() => db.destroy())

    describe(``, () => {
        context(`seed teh database`, () => {
            this.beforeEach('insert users and score', () => {
                return db
                    .into('leaderBoard')
                    .insert(testScore)
                    
            })
        })
        it('responds with 200 and at most 5 scores', () => {
            return supertest(app)
                .get('/')
                .expect(200)
        })
    })
})