module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Mountain Bike Virginia',
      script    : './server.js',
      instances : 'max',
      exec_mode : 'cluster',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'ubuntu',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'https://github.com/Coletrane/mountain-bike-virginia.git',
      path : '/srv/putblic/mountain-bike-virginia',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
  }
};
