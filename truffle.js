module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 22000,
      network_id: "*" ,// Match any network id
      gas: 6712388
      ,
      gasPrice:0,
    }
  }
};
