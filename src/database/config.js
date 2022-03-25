module.exports = {
  host: "localhost",
  database: "posts",
  username: "root",
  password: "",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
