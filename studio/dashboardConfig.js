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
                  buildHookId: '5fbf00bbd5527278f4df1dff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gcu98nd6',
                  apiId: '650fbb7a-5d1c-4d31-8828-8e19e581ae87'
                },
                {
                  buildHookId: '5fbf00bbb5d07e8e69d86afe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6xqnh6jb',
                  apiId: '9b04813d-cf22-429c-8e98-f73a5a230129'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/applyThoughts/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6xqnh6jb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
