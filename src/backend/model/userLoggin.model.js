module.exports = (sequelize, DataTypes) => {
  const LoginUser = sequelize.define(
    "userlogin",
    {
      loginId: {
        type: DataTypes.STRING,
        primaryKey : true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        required: true,
      },
      username: {  
        type: DataTypes.STRING,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,   
    }
  );
  return LoginUser;
};
