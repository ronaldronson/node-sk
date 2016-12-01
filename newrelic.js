exports.config = {
  /**
   * Array of application names.
   */
  app_name: [process.env.NR_APPNAME],

  /**
   * Your New Relic license key.
   */
  license_key: process.env.NR_LICENCEKEY,

  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
  },

  capture_params: true,
};
