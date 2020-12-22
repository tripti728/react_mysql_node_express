const models = require('../models')
module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define('news', {
    NewsTitle: {
      type: Sequelize.STRING(255),
    },
    News: {
      type: Sequelize.TEXT(),
    },
    Locality: {
      type: Sequelize.STRING(255),
    },
    Image: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    Count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Rid: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'Uid',
      },
    },
  })
  News.associate = function (models) {
    News.hasMany(models.issue, { as: 'issues' })
  }
  return News
}
