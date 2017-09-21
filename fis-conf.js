//// project ignores
var ignores = fis.get('project.ignore');
ignores = ignores.concat([
  'test_data/**'
]);

fis.set('project.ignore', ignores);

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

//所有 css 加 hash
fis.match('*.{less}', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})
//
//
// 所有图片加 hash
fis.match('*.{gif,png,jpg}', {
  useHash: true
});
// 所有js, css 加 hash
//fis.match('*.{js,css,less}', {
//  useHash: true
//});

fis.match('/css-site/*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

fis.match('/style/*.{css,less}', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('/images-site/**.*', {
  release: '/vendor/$0'
});

fis.match('/images-site/**.png', {
  optimizer: fis.plugin('png-compressor')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('/**/**.html', {
  release: '/$0'
});

// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
});

// 启用插件
fis.hook('relative');

////fis3-hook-module
//fis.hook('module', {
//    mode: 'amd' // 模块化支持 amd 规范，适应 require.js
//});
//fis.match('/js-site/*.js', {
//    isMod: true
//});

//
fis.match('::package', {
    postpackager: fis.plugin('loader', {})
});

fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: 'dist'
  })
})
