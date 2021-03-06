module.exports = (sequelize, DataTypes) => {
  const RolePrevilege = sequelize.define("roleprevilege", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    previlegeId: {
      type: DataTypes.STRING,
    },
    roleId: {
      type: DataTypes.STRING,
    },
  });
  return RolePrevilege;
};
