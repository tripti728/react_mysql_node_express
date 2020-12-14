module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      // Uid: {
      //   type: Sequelize.INTEGER(11),
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      Uname: {
        type: Sequelize.STRING(30)
      },
      EmailId: {
        type: Sequelize.STRING(20)
      },
      AadharId: {
        type: Sequelize.BIGINT(12)
      },
      Locality: {
        type: Sequelize.STRING(20)
      },
      MobNo: {
        type: Sequelize.BIGINT(10)
      },
      Password: {
        type: Sequelize.STRING(8)
      },
      ConfirmPassword: {
        type: Sequelize.STRING(8)
      },
      // Role: {
      //   type: Sequelize.STRING(10)
      // },
      isApproved: {
        type: Sequelize.BOOLEAN(),
        defaultValue: false
      }
    });
  
    return User;
  };