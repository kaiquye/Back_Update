'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('enderecos', {
              id : {
                    type : Sequelize.INTEGER, 
                    allowNull : false, 
                    autoIncrement : true, 
                    primaryKey : true
                }, 
                cep : {
                    type : Sequelize.STRING, 
                    allowNull : false
                },
                bairro : {
                    type : Sequelize.STRING, 
                    allowNull : false
                }, 
                complemento : {
                    type : Sequelize.STRING, 
                    allowNull : true, 
                }, 
                ddd : {
                    type : Sequelize.STRING, 
                    allowNull : true, 
                }, 
                localidade : {
                    type : Sequelize.STRING, 
                    allowNull : false
                }, 
                logradouro : {
                    type : Sequelize.STRING,
                    allowNull: false
                },
                UF : {
                    type : Sequelize.STRING,
                    allowNull : false
                }
              }, {timestamps : false}
                )
            },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
