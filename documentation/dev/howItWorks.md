# How it works

90% of the frotnend is based on Nuxt and altering it's functionality to offer the most versatile and easy-to-use SCMS ever created.

## [Guide] Generating the static files ready to be deployed / hosted

1. Run `yarn generate`
2. Copy the contents of the newly created `dist/` dir to your host
eg. [GitHub Hosting Tutorial]()

## After deploy, a first time installation is required

This generates the `gazette.config.js` file ONCE in the project directory and when found by the project, it self-deletes the install.vue file for safety and acts as installed - serving the website as it should.

In case of a self-hosted server, it furtherly checks the connection and ensures everything goes ok.


