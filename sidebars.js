/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  docs: [
    'build-api-quick-start-guide',
    {
      type: 'category',
      label: 'Apito Console',
      link: {
        type: 'generated-index',
      },
      items: [
        'console/how-to-design-database-for-your-project',
        'console/usages-of-swagger-and-graphql-explorer',
        'console/adding-multilingual-support-to-your-api',
        'console/adding-rbac-role-based-permissions-support-to-your-api',
        'console/api-integration-with-your-application'
        //'console/authentication',
        //'console/custom-function'
      ],
    },
    {
      type: 'category',
      label: 'Modeling Your Project',
      link: {
        type: 'generated-index',
      },
      items: [
        'model/database-design',
        'model/choice-between-models'
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      link: {
        type: 'generated-index',
      },
      items: [
        'auth/auth-support-in-api',
        'auth/create-user',
        'auth/user-login',
        'auth/using-login-token'
      ],
    },
    {
      type: 'category',
      label: 'Writing Logic',
      link: {
        type: 'generated-index',
      },
      items: [
        'logic/writing-cloud-functions',
        'logic/enable-lambda-extension',
        'logic/create-apito-function',
        'logic/create-lambda-function',
        'logic/connecting-function',
        'logic/calling-function'
      ],
    },
    {
      type: 'category',
      label: 'Third Party Integration',
      link: {
        type: 'generated-index',
      },
      items: [
        'third-party/prerequisite',
      ],
    },
    {
      type: 'category',
      label: 'Building Apps',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Ecommerce',
          items: [
            'apps/ecommerce/intro',
            'apps/ecommerce/designing-models',
            'apps/ecommerce/adding-relations-between-models',
            'apps/ecommerce/adding-authentication',
            'apps/ecommerce/writing-business-logic',
            'apps/ecommerce/configuring-roles-permissions',
            'apps/ecommerce/generating-api-secrets',
            'apps/ecommerce/connecting-api-to-frontend'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API Integration',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'RESTful API',
          link: {
            type: 'generated-index',
          },
          items: [
            'restapi/integration-with-java',
            'restapi/integration-with-android',
            'restapi/integration-with-ios',
            'restapi/integration-with-flutter',
            'restapi/integration-with-golang',
            'restapi/integration-with-csharp',
            'restapi/integration-with-javascript',
            'restapi/integration-with-php',
            'restapi/integration-with-python',
            'restapi/integration-with-ruby',
            'restapi/integration-with-other'
          ],
        },
        {
          type: 'category',
          label: 'GraphQL Client',
          link: {
            type: 'generated-index',
          },
          items: [
            'graphql/integration-with-java',
            'graphql/integration-with-android',
            'graphql/integration-with-ios',
            'graphql/integration-with-flutter',
            'graphql/integration-with-golang',
            //'graphql/integration-with-csharp',
            'graphql/integration-with-react',
            'graphql/integration-with-php',
            'graphql/integration-with-python',
            'graphql/integration-with-ruby',
            'graphql/integration-with-other'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuring Cloud Providers',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'AWS',
          items: [
            'cloud-provider/aws/configuring-aws',
          ],
        }
      ],
    }
  ],
};

module.exports = sidebars;
