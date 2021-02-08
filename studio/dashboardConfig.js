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
                  buildHookId: '6020d8f6a96f4c8f8317c464',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5xbh6mwp',
                  apiId: '1c9c9b2d-b1b6-4012-a85f-1d083771df3e'
                },
                {
                  buildHookId: '6020d8f65610f95ae04b17ea',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mddjz2ss',
                  apiId: '6ff234fb-9d19-40e6-85e5-ba8753f2208a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rifqirosyidi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mddjz2ss.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
