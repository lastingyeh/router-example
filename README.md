### setup and module desc

  -as meteor npm install --save

    for react 
    
    * react react-dom prop-types

    for bootstrap

    * bootstrap react-bootstrap

    for data connect to react

    * react-addons-pure-render-mixin

    for router

    * react-router-dom react-router-bootstrap

    for jquery and jq-validate

    * jquery jquery-validation

    for user-auth

    * bcrypt

    for matching data with container, and send to components (version for composeWithTracker method used )

    * react-komposer@1.13.1 

-----------------------------------------------------

  -as ATMOSPHERE.js (https://atmospherejs.com/). after installing,see .meteor/packages
  
    * meteor add themeteorchef:bert

      desc: A client side, multi-style alerts system for Meteor.

    * meteor add accounts-base accounts-ui accounts-password

      desc: client accounts manage,it needs to integrate with bcrypt (npm install)

    * meteor remove autopublish insecure

      desc: remove autopublish and insecure,and uses subscribe/publish to post data

    * meteor add aldeed:simple-schema

      desc: A simple, reactive schema validation package for Meteor

    * meteor add dburles:factory

      desc: A package for creating test data or for generating fixtures.

    * meteor add mdg:validated-method

      desc: Define Meteor methods in a structured way, with mixins

    * scehma steup notice

      meteor remove aldeed:simple-schema aldeed:collection2
      meteor add aldeed:collection2-core@2.0.0
      meteor npm install --save simpl-schema

      install 

      meteor add aldeed:collection2

      desc: A Meteor package that allows you to attach a schema to a Mongo.Collection. Automatically validates against that schema when inserting and updating from client or server code.

    * meteor add ddp-rate-limiter

      desc: A rate limiter added directly to DDP that provides an API to add rules to Meteor methods and collections.

    * meteor add underscore

      -plunk > extracting a list of property values.

      -contains > Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. 

    * meteor add alanning:roles

      Authorization package for Meteor - compatible with built-in accounts package.

    * meteor add browser-policy-common

      This is one of a family of packages that can be used to easily configure an app's browser-side security policies.

  ### Project Structure

    * Client 

      - main.html

      - main.js 

        - index.js (Client entry point > '/imports/startup/client/')
        
          - App.js ('/imports/ui/layouts/')

            *Router page (sort by g(general),a(authenticated),p(public))

              - Index (g)

              - Documents (a)

                - DocumentsList

                  *api ('../../api/documents/documents')

                  *components ('../components/DocumentsList')

              - NewDocument (a)

                  *components ('../components/DocumentEditor')

                    *module ('../../modules/document-editor') > upsertDocument ('../api/documents/methods')

              - ViewDocument (a)

                  *pages ('../pages/ViewDocument')

                    *api ('../../api/documents/methods') > removeDocument

                  *pages ('./NotFound')

                  *api ('../../api/documents/documents')

              - EditDocument (a)

                  *pages ('../pages/EditDocument')

                    *components ('../components/DocumentEditor')

                      *module ('../../modules/document-editor')

                        *api ('../api/documents/methods') > upsertDocument

                    *pages ('./NotFound')

                  *api ('../../api/documents/documents')

              - Signup (p)

                *module ('../../modules/signup')

              - Login (p)

                *module ('../../modules/login')

              - RecoverPassword (g)

                *module ('../../modules/recover-password')

              - ResetPassword (g)

                *module ('../../modules/reset-password')

              - NotFound (g)

    * Server

      main.js

        index.js ('/imports/startup/server/')

          api ('./api')

            *api ('../../api/documents/methods')

                 (''../../api/documents/server/publications') > Documents ('../documents')

          email-templates ('./accounts/email-templates')

          browser-plicy ('./browser-policy')

          fixtures ('./fixtures')

### Refs by 

  1 https://themeteorchef.com/tutorials/getting-started-with-react-router-v4
  
  2 https://github.com/themeteorchef/getting-started-with-react-router-v4/tree/master/code

