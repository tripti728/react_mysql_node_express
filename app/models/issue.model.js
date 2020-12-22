module.exports = (sequelize, Sequelize) => {
  const Issue = sequelize.define('issue', {
    IssueId: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Issue: {
      type: Sequelize.TEXT(),
    },

    Email: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
  })

  return Issue
}
