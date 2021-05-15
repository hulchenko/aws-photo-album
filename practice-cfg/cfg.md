npm install -g @aws-amplify/cli

vue create aws-photo-album:

1. manual
2. babel, router, vuex, css, linter
3. v2
4. history - yes
5. dart-sass
6. basic
7. lint on save
8. dedicated config file
9. don't save preset

vue add tailwind (minimal)

npm install uuid (encrypted key)

amplify configure (follow steps in AWS console > default)

npm install aws-amplify @aws-amplify/ui-vue (amplify library for vue, adding new vue components in project)

update main.js with amplify config

amplify add auth (Amazon Cognito setup) >> amplify push (will auto update aws-exports.js)

setup Auth Vuex Store

create components

update tailwind assets

update views

amplify add storage (for auth users only)

amplify add api (add GraphQL):

1. GraphQL
2. name
3. Cognito User Pool
4. Additional Settings
5. IAM
6. No conflict detection
7. No annotated GraphQL Schema
8. Single Object with fields
9. No for Schema Edit

update >> amplify/backend/api/schema.graphql

amplify mock api (to test setup locally):

1. install Amazon Corretto 11 (java required)
2. javascript
3. file name default
4. yes to generate/update ops
5. 5 max depth (for practice purposes)

amplify push (s3 storage, graphQL schema to the cloud)

1. Yes
2. No update
3. Yes for script

now src/graphql files have been updated based on amplify/backend/api/schema.graphql

create albums.js
