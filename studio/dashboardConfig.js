export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f1b0b9a33a8f537befc53cb',
                  title: 'Sanity Studio',
                  name: 'ndrewgood-sanity-gatsby-studio',
                  apiId: 'e3b27530-d48a-4354-a87c-7aefd8ddb477'
                },
                {
                  buildHookId: '5f1b0b9986e8990851ca13c1',
                  title: 'Live Site',
                  name: 'ndrewgood-sanity-gatsby',
                  apiId: '3fbb8c57-5a81-4656-bb52-a070e850239f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ndrewgood/ndrewgood-sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: '',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
