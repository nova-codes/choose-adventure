// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}