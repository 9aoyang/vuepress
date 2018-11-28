module.exports = {
  title: '页头',
  description: 'Just playing around',

  themeConfig: {
    // sidebar: 'auto',
    // sidebarDepth: 2,
    // displayAllHeaders: true,
    lastUpdated: '最后一次更新于',
    nav: [
      { text: '首页', link: '/' },
      { text: '页面', link: '/foo/' },
      {
        text: '列表',
        items: [
          { text: '列表项', link: '/foo/' },
          { text: '列表项', link: '/bar/' }
        ]
      },
      {
        text: '分组列表',
        items: [
          { text: '组', items: [
            { text: '子目录', link: '/language/chinese' }
          ] },
          { text: '组', items: [
            { text: '子目录', link: '/language/chinese' }
          ] }
        ]
      },
      { text: '外链', link: 'https://google.com' }
    ],
    // sidebar: [
    //   {
    //     title: 'Group 1',
    //     collapsable: false,
    //     children: [
    //       '/'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [ /* ... */ ]
    //   }
    // ]
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'standard', /* /standard.html */
        'meeting', /* /meeting.html */
        'about'    /* /about.html */
      ]
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
