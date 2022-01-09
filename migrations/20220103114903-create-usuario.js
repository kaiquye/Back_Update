'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', 
    {
      id: {
              type: Sequelize.INTEGER,
              allowNull : false, 
              autoIncrement : true, 
              primaryKey : true 
          }, 
      nome: {
              type : Sequelize.STRING, 
              allowNull : false
            }, 
      senha: {
              type : Sequelize.STRING, 
              allowNull : false
             }, 
      email: {
              type : Sequelize.STRING, 
              allowNull : false
             }
    }, {timestamps : false} 
    //  OBSERVAÇÃO : NÃO COLOCAR -: tableName : 'usuarios'. NA PARTE DO MIGRATIONS.....
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
