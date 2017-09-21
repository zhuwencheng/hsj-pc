/**
 * Created by Administrator on 2017/5/16.
 */
var config = {
    baseUrl: '../', //依赖相对路径
    paths: {	//如果某个前缀的依赖不是按照baseUrl拼接这么简单，需要在这里指出
        jquery: 'js-site/jquery-1.11.3',
        handlebars: 'js-site/handlebars-v3.0.3',
        backbone: 'js-site/backbone-min',
        text: 'js-site/text',  //用于requirejs导入html类型的依赖
        css: 'js-site/text',  //用于requirejs导入html类型的依赖
        homeToll:'js-site/home-tool',
        imgScroll:'js-site/fullImgSroll',
        pager:'js-site/hx-pager',
        layer:'js-site/layer/layer',
        tools:'js-site/tool',
        cookie:'js-site/jquery.cookie',
        placeholders :'js-site/home-placeholders',
        lazyLoad : 'js-site/lazyLoad'
    },
    map: {
        '*': {
            'css': 'js-site/css'
        }
    },
    shim: { //引入没有使用requirejs模块写法的类库。backbone依赖underscore
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'homeToll': {
            deps: ['jquery']
        },
        'imgScroll': {
            deps: ['jquery']
        },
        'pager': {
            deps: ['jquery']
        },
        'layer':{
            deps: ['jquery']
        },
        'tools':{
            deps: ['jquery']
        },
        'cookie':{
            deps: ['jquery']
        },
        'placeholders' : {
            deps : ['jquery']
        },
        'lazyLoad' : {
            deps : ['jquery']
        }
        /*,
         'backbone': {
         deps: ['underscore', 'jquery'],
         exports: 'Backbone'
         }*/

    },
    isquerying :false
};
require.config(config);
require(['js-site/renderBasicComponent'],function(main){
    var callbackFun=function(){
        $('#to-top').on('click',function(e){
            $('html').animate({ scrollTop: '0px' }, 'easein');
            e.preventDefault();
        });//回到顶部
    }
    main(callbackFun);
});

