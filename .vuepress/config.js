module.exports = {
    title: 'Conjury API Docs',
    description: 'Conjury helps you simplify and securify your application\'s authentication flow.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    themeConfig: {
        search: false,
        logo: '/conjury-profile.png',
        lastUpdated: 'Last Updated',
        docsRepo: 'conjuryio/docs',
        editLinks: true,
        editLinkText: 'Edit this page',
        nav: [
            { text: 'Back to Conjury', link: 'https://conjury.io' },
            { text: 'Docs', link: '/' },
        ],
        sidebar: [
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    ['/', 'Introduction'],
                    ['/authentication', 'Authentication'],
                ],
            },
            {
                title: 'Token API',
                collapsable: false,
                children: [
                    '/create-token',
                    '/consume-token',
                ],
            },
        ],
    },
    domain: 'https://docs.conjury.io',
    plugins: {
        'seo': {
            type: _ => 'website',
            description: (_, $site) => $site.description,
            image: (_, $site) => $site.domain + 'hero.png',
        }
    },
}