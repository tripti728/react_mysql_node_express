const dbConfig = require('../config/db.config.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./user.model.js')(sequelize, Sequelize)
db.news = require('./news.model.js')(sequelize, Sequelize)
db.issue = require('./issue.model.js')(sequelize, Sequelize)

//Association
db.users.hasMany(db.news, { foreignKey: 'Rid' })
db.news.belongsTo(db.users, { foreignKey: 'Rid' })

//Admin Integrate

db.news.hasMany(db.issue, {
  onDelete: 'CASCADE',
  force: true,
})
db.issue.belongsTo(db.news, { force: true })

module.exports = db
