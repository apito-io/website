export const HomePageData = {
    seo : {
        title:'Instant API for Web and Mobile Apps',
        description:'Build Instant RESTful API & GraphQL Server easily for your App with Auth, Authorization, CDN, Webhooks, Custom Functions, and much more',
        keywords: 'api, graphql, rest api, cms headless, cms for website, low code platform, app mobile development, cloud function, rbac, database model, api integration, free api, api development, free headless cms, develop an api, api roles, auth api, graphql explorer, multilingual cms, api in cloud'
    },
    header : {
        //title: 'Develop API for web and mobile apps Build Instantly, Deploy in Seconds',
        image: 'https://cdn.apito.io/media/apito_website/Y97T0H5XM7_apito_console_full_picture.png',
        description: 'Manage Less Infrastructure, Low Code Platform. Deliver Projects in weeks not months.'
    },
    features1 : {
        slogan : 'None',
        title : 'None',
        data: [
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/2CIRIBQ6GB_apito_console.png"
                },
                "description": {
                    "markdown": "Run apito server in docker and build your application locally"
                },
                "header": "DOCKER READY",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/TX9PNRYAVX_webhooks.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Develop your API offline in your localhost"
            },
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/TM3F0KHCMN_dual_engine_api.png"
                },
                "description": {
                    "markdown": "Instantly usable GraphQL & REST API with Complex Filter"
                },
                "header": "INSTANT API",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Build API in both GraphQL & REST API"
            }
        ],
    },
    features2 : {
        slogan : 'Powerful & Flexible',
        title : 'Apito Console helps accelerates your API Development',
        data: [
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/2CIRIBQ6GB_apito_console.png"
                },
                "description": {
                    "markdown": "Model your database with fields & relations"
                },
                "header": "DATABASE",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/TX9PNRYAVX_webhooks.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Database Modeling has never been easier!"
            },
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/TM3F0KHCMN_dual_engine_api.png"
                },
                "description": {
                    "markdown": "Insert, Delete & Update your content with ease. Apito has with multilingual support"
                },
                "header": "CMS",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Robust Content Management System"
            },
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/TM3F0KHCMN_dual_engine_api.png"
                },
                "description": {
                    "markdown": "Ability to extend your api with cloud functions"
                },
                "header": "FUNCTION",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Write Cloud Function to Extend your API"
            }
        ],
    },
    exampleQueries : {
        slogan : 'QUERY PATTERNS',
        title: 'Develop API with complex Queries and Search',
        data: [
            {
                id: 1,
                title: 'Wildcard Search on All Records',
                codes: {
                    rest: `curl https://api.apito.io/secured/rest/products?name:contains=”pro”`,
                    graphql: `query SearchProducts {
  products ( 
    where : {  name : { contains :"pro" } }
  ){
    name
    price
    description
    image
    id
  }
}`,
                },
            },
            {
                id: 2,
                title: 'Filtering and Sorting',
                codes: {
                    rest: `curl https://api.apito.io/secured/rest/ecom/products?rating:gte=4&sort=-price`,
                    graphql: `query FilterProductByPriceAndRating {
  products(sort: { price: DESC }, where: { rating: { gte: 4 }}) {
    data {
      price
      name
      description {
        markdown
      }
      rating
    }
  }
}`,
                },
            },
            {
                id: 3,
                title: 'Complex Nested Filtering',
                codes: {
                    rest: `curl https://api.apito.io/secured/rest/ecom/products?price:lt=100
curl https://api.apito.io/secured/rest/ecom/category?name:contains="shirt"`,
                    graphql: `query NestedPricedProductSearchByCategory {
  categories(
    where: { name: { contains: "shirt" }}) {
    products(
      where: {price: { lt: 100 }}) {
      data {
        rating
        price
        name
      }
    }
  }
}`,
                },
            },
            {
                id: 4,
                title: 'Geo Location Search',
                codes: {
                    rest: `curl https://api.apito.io/secured/rest/ecom/store?location:geo_within=2KM`,
                    graphql: `query SearchAStoreWithin2KiloMeter {
  stores(where: { location: { geo_within: { km_radius: 2 }}}) {
    id
    data {
      name
      location {
        lon
        lat
      }
      description {
        markdown
      }
    }
  }
}`,
                },
            },
            {
                id: 5,
                title: 'Records with Pagination',
                codes: {
                    rest: `curl https://api.apito.io/secured/rest/ecom/user?limit=10&page=2`,
                    graphql: `query GetUsersWithPagination {
  users(limit: 10, page: 2) {
    id
    data {
      first_name
      phone
      email
    }
  }
}`,
                },
            },
            {
                id: 6,
                title: 'Project User Login',
                restMethod: "post",
                codes: {
                    rest: `curl -X POST "https://api.apito.io/secured/rest/quantum_ecommerce_ddlj4/system/auth/login" 
-H  "accept: application/json" -H  "Content-Type: application/json"
-d "{\\"email\\":\\"string\\",\\"secret\\":\\"string\\"}"`,
                    graphql: `query ProjectUserLogin {
  userLogin(secret: "*****", email: "john@apito.io") {
    id_token
    refresh_token
  }
}`,
                },
            },
            {
                id: 7,
                title: 'User Registration',
                restMethod: "post",
                codes: {
                    rest: `curl -X POST "https://api.apito.io/secured/rest/quantum_ecommerce_ddlj4/system/auth/register" 
-H  "accept: application/json" -H  "Content-Type: application/json" 
-d "{\\"email\\":\\"string\\",\\"secret\\":\\"string\\"}"
      `,
                    graphql: `mutation ProjectUserRegistration {
  userRegister(secret: "*****", email: "john@apito.io") {
    id_token
    refresh_token
  }
}`,
                },
            },
            {
                id: 8,
                title: 'Custom Function Calling',
                restMethod: "post",
                codes: {
                    rest: `curl -X POST "https://api.apito.io/secured/rest/ecom/system/function/processOrders"
-H  "accept: application/json" -H  "Content-Type: application/json" 
-d "{\\"status\\":\\"string\\"}"`,
                    graphql: `mutation CustomFunction {
  processOrder(payload: {status: "ACCEPTED"}) {
    order {
      id
      products {
        data {
          price
        }
        ...
      }
    }
  }
}`,
                },
            }
        ]
    },
    features3 : {
        slogan : 'None',
        title : 'None',
        data: [
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/2CIRIBQ6GB_apito_console.png"
                },
                "description": {
                    "markdown": "Ability to manage api access via custom roles & permissions"
                },
                "header": "ROLES & PERMISSIONS",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/TX9PNRYAVX_webhooks.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Manage Who will have access to your API & how"
            },
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/TM3F0KHCMN_dual_engine_api.png"
                },
                "description": {
                    "markdown": "Image Hosting for your Application and files with Upload API Support"
                },
                "header": "FILE STORAGE",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Stop worring about hosting your images elsewhere"
            },
            {
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/homepagev2/TM3F0KHCMN_dual_engine_api.png"
                },
                "description": {
                    "markdown": "Enable One click JWT based authentication support to your API"
                },
                "header": "API AUTHENTICATION",
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/8XRYHC4LBQ_auth_module.svg"
                },
                "link": "https://docs.apito.io/quick-start",
                "title": "Add Authentication Support to your API"
            }
        ],
    },
    projects: [
        {
            "data": {
                "admin_link": "https://app.apito.io",
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/25ZW8O4MTF_food_delivery.png"
                },
                "description": {
                    "markdown": "Tifinkari is a Food Delivery App Build with Apito"
                },
                "repo_link": "https://www.facebook.com/Tifinkari",
                "title": "Food Delivery App"
            },
            "id": "74eb79a3-7bdd-421f-b642-e203fa1229bf"
        },
        {
            "data": {
                "admin_link": "https://docs.apito.io",
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/8LMV4JS0ZH_support_ticket.png"
                },
                "description": {
                    "markdown": "A Jira clone built with Vuejs & Nodejs/Graphql"
                },
                "repo_link": "https://github.com/TariqueNasrullah/jira_clone",
                "title": "Jira Clone"
            },
            "id": "1a9f901d-8469-4a0f-aa71-20bede6b4530"
        },
        {
            "data": {
                "admin_link": "https://app.apito.io",
                "cover": {
                    "url": "https://cdn.apito.io/media/apito_website/OUBZ454S6O_ecom.png"
                },
                "description": {
                    "markdown": "Quantum eCommerce. Made with Next.js \\| GraphQL \\| Apito Server \\| Apollo Client \\| SSR"
                },
                "repo_link": "https://github.com/apito-io/next-ecommerce",
                "title": "E-commerce Project"
            },
            "id": "b72df783-2641-497c-8b44-216cdb127c2b"
        }
    ],
    sdk : {
        "header": "EASY INTEGRATION",
        "link": "/docs/build-api-quick-start-guide",
        "image": {
            "url": "https://cdn.apito.io/media/apito_website/language/IKUFIWX6X9_langauge_pics.png"
        },
        "title": "Easy API Integration Guide with variety of Languages & Frameworks"
    },
    communications: [
        {
            "data": {
                "description": {
                    "markdown": "We share Projects, Codes & Documentation for Apito Projects at our [**Github Account**](https://github.com/apito-io/). Do check it out."
                },
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/communication/4GBODHTPFH_github.png"
                },
                "title": "Github Access"
            },
            "id": "74ab7f03-fdcd-4736-969f-b20929099602"
        },
        {
            "data": {
                "description": {
                    "markdown": "Our Team is always active on our [**Discord Channel**](https://discord.gg/fwHgF8pUpt). Ask your Questions, Join the discussions, and much more"
                },
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/communication/0S3BQ3M873_discord.png"
                },
                "title": "Join our Discord"
            },
            "id": "82366ef1-2615-4250-a088-03368d8c874c"
        },
        {
            "data": {
                "description": {
                    "markdown": "If you have any further queries aobut our platform, please leave a message at the messanger (bottom right)"
                },
                "icon": {
                    "url": "https://cdn.apito.io/media/apito_website/communication/V0G5IGG8FC_chat.png"
                },
                "title": "Instant Chat"
            },
            "id": "3e53ed96-e190-4d6b-95f3-ef76c0d6567b"
        }
    ]
}