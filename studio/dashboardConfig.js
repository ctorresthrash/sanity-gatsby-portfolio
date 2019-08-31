export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d6acd82c27cd589a77ac158',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tgjucpk4',
                  apiId: 'b129ae19-d9fb-4320-8f7e-5fcf67fb37de'
                },
                {
                  buildHookId: '5d6acd82d6bb18a1b656bd3a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7ab98zj1',
                  apiId: '3ccef16b-a265-43fa-8dfb-bb7016d5c634'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ctorresthrash/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7ab98zj1.netlify.com',
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
