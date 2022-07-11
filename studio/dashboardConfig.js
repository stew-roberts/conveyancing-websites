export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62cc5f14d032a6468242c704',
                  title: 'Sanity Studio',
                  name: 'conveyancing-websites-studio',
                  apiId: '1b6314c7-14d6-4876-be12-acc76a9b43ee'
                },
                {
                  buildHookId: '62cc5f141f436f474b550adc',
                  title: 'Landing pages Website',
                  name: 'conveyancing-websites',
                  apiId: 'fa6875aa-b9a6-42c4-b8c8-e22d854e6d7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stew-roberts/conveyancing-websites',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://conveyancing-websites.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
