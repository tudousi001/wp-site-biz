!function(t){function e(e){for(var a,c,n=e[0],r=e[1],d=e[2],u=0,p=[];u<n.length;u++)c=n[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(o&&o(e);p.length;)p.shift()();return l.push.apply(l,d||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],a=!0,n=1;n<i.length;n++){var r=i[n];0!==s[r]&&(a=!1)}a&&(l.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},s={3:0},l=[];function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var o=r;l.push([29,0]),i()}({13:function(t,e,i){var a=i(0);t.exports=function(t){var e,i="",s=t||{};return function(t){i+='<section class="controls-inside p-0 controls-light bg-dark" data-flickity="{ &quot;autoPlay&quot;: true, &quot;cellAlign&quot;: &quot;left&quot;, &quot;contain&quot;: true, &quot;imagesLoaded&quot;: true, &quot;wrapAround&quot;: true, &quot;prevNextButtons&quot;: true }">',function(){var s=t;if("number"==typeof s.length)for(var l=0,c=s.length;l<c;l++){var n=s[l];i=i+'<div class="height-80 carousel-cell py-3 py-md-4"><img class="bg-image opacity-70"'+a.attr("src",n.bg_image,!0,!0)+'><div class="container"><div class="row"><div class="col-12 col-md-8"><h1 class="display-4 text-white">'+(null==(e=n.headline)?"":e)+'</h1><p class="lead text-white">'+(null==(e=n.descript)?"":e)+"</p>",""!=n.button_caption&&(i=i+'<a class="btn btn-primary btn-lg"'+a.attr("href",n.button_link,!0,!0)+">"+(null==(e=n.button_caption)?"":e)+"</a>"),i+="</div></div></div></div>"}else{c=0;for(var l in s){c++;n=s[l];i=i+'<div class="height-80 carousel-cell py-3 py-md-4"><img class="bg-image opacity-70"'+a.attr("src",n.bg_image,!0,!0)+'><div class="container"><div class="row"><div class="col-12 col-md-8"><h1 class="display-4 text-white">'+(null==(e=n.headline)?"":e)+'</h1><p class="lead text-white">'+(null==(e=n.descript)?"":e)+"</p>",""!=n.button_caption&&(i=i+'<a class="btn btn-primary btn-lg"'+a.attr("href",n.button_link,!0,!0)+">"+(null==(e=n.button_caption)?"":e)+"</a>"),i+="</div></div></div></div>"}}}.call(this),i+="</section>"}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),i}},29:function(t,e,i){var a=i(3),s=i(4),l=i(30),c=i(31),n=i(2);for(var r in document.write(n({data:a})),l){if(l[r].widget.search(/news_autolist/i)>=0){var d=i(28);for(var o in d)if(void 0!==d[o].data.newslist){l[r].data.newslist=[];var u=i(37);for(var p in u)l[r].data.newslist.push({id:u[p].id,title:u[p].title,preface:u[p].preface,datetime:u[p].datetime})}}n=c(l[r].widget),document.write(n({data:l[r].data}))}n=i(5),document.write(n({data:s}))},30:function(t){t.exports=JSON.parse('[{"widget":"widgets/carousel_01","data":[{"bg_image":"./assets/imgs/header-4.jpg","headline":"网络构建2019解决方案","descript":"采用最新安全技术和产品打造的覆盖全行业解决方案。<br>适用于传统制造业、重点国企、交通航空等大中型企业客户。","button_caption":"查看详情...","button_link":"solution_A201905.html"},{"bg_image":"./assets/imgs/header-3.jpg","headline":"新闻热点：年内发放5G牌照","descript":"随着5G技术研发和应用日益成熟，这一颠覆性移动通信技术的商用也指日可待。未来，它将给人们生活的方方面面带来不可估量的影响。","button_caption":"查看详情...","button_link":"news_20190507.html"},{"bg_image":"./assets/imgs/header-2.jpg","headline":"客户服务","descript":"如果您有任何关于产品或方案的疑问以及业务资讯，<br>可随时通过电话、邮件、QQ、微信等与我们联系。<br>我们将竭诚为您服务！","button_caption":"获取联系方式","button_link":"about.html#tag_LXFS"}]},{"widget":"solutions/solution_list_headline","data":{"bg_image":"./assets/imgs/header-1.jpg","headline":"全面的行业解决方案","descript":"按照等保条例构建的企业信息安全防护体系","solutionlist":[{"icon":"./assets/imgs/icon-1.svg","caption":"网络构建解决方案","id":"solution_A201905"},{"icon":"./assets/imgs/icon-2.svg","caption":"电商行业解决方案","id":"solution_B201901"},{"icon":"./assets/imgs/icon-3.svg","caption":"数据维护解决方案","id":""},{"icon":"./assets/imgs/icon-4.svg","caption":"更多解决方案...","id":"solution_list"}]}},{"widget":"products/product_list_cardlist","data":{"headline":"优秀的产品和技术","descript":"所有产品均符合国家信息安全法律法规及等保条例要求","productlist":[{"id":"product_F100CG2","image":"./assets/imgs/products/product_F100CG2_01.jpg","text":"F100CG2网络防火墙"},{"id":"product_USG6106","image":"./assets/imgs/products/product_USG6106_01.jpg","text":"USG6106网络防火墙"},{"id":"product_WVR1300L","image":"./assets/imgs/products/product_WVR1300L_01.jpg","text":"WVR1300L无线路由器"},{"id":"product_list","image":"./assets/imgs/products/product_SG1210P_01.jpg","text":"更多网络产品..."}]}},{"widget":"widgets/common_crew_list_02","data":{"headline":"值得信赖的服务团队","descript":"热忱、耐心、专业、敬业","crewlist":[{"title":"产品方案技术咨询","image":"./assets/imgs/avatar-4.jpg","name":"王文军"},{"title":"行业大客户支持","image":"./assets/imgs/avatar-5.jpg","name":"左小月"},{"title":"售后服务","image":"./assets/imgs/avatar-6.jpg","name":"刘雯"},{"title":"销售代理咨询","image":"./assets/imgs/avatar-3.jpg","name":"乔恩"}]}},{"widget":"news/news_autolist","data":{"headline":"最新企业资讯","descript":"连接我们，共创成功","maxitems":4,"linkid":"news_list_1","linkcaption":"更多新闻..."}},{"widget":"widgets/common_space","data":{"class":"bg-light pb-3 pb-lg-5"}}]')},31:function(t,e,i){t.exports=function(t){switch(t){case"widgets/carousel_01":return i(13);case"solutions/solution_list_headline":return i(33);case"products/product_list_cardlist":return i(34);case"widgets/common_crew_list_02":return i(35);case"news/news_autolist":return i(36);case"widgets/common_space":return i(7)}return i(6)}},33:function(t,e,i){var a=i(0);t.exports=function(t){var e,i="",s=t||{};return function(t){i=i+'<section class="bg-light pb-0 pt-5"><div class="container"><div class="pb-0 pt-3"><div class="row justify-content-center align-items-center"><div class="col-lg-6 mb-3 mb-sm-0 order-lg-1"><div class="mb-0 mx-xl-3"><h1>'+(null==(e=t.headline)?"":e)+"</h1></div>",""!=t.descript&&null!=t.descript&&(i=i+'<div class="mb-0 mx-xl-3"><p class="lead">'+(null==(e=t.descript)?"":e)+"</p></div>"),i+='<div class="list-group mb-0 mx-xl-3 border rounded">';var s="#";(function(){var l=t.solutionlist;if("number"==typeof l.length)for(var c=0,n=l.length;c<n;c++){var r=l[c];s=""!=r.id&&null!=r.id?`${r.id}.html`:"#",i=i+'<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"'+a.attr("href",s,!0,!0)+'><div class="d-flex align-items-center"><img class="d-block mr-3 icon"'+a.attr("src",r.icon,!0,!0)+'><span class="mb-0 h6 mb-0">'+(null==(e=r.caption)?"":e)+'</span></div><i class="fas fa-angle-right fa-lg"></i></a>'}else{n=0;for(var c in l){n++;r=l[c];s=""!=r.id&&null!=r.id?`${r.id}.html`:"#",i=i+'<a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"'+a.attr("href",s,!0,!0)+'><div class="d-flex align-items-center"><img class="d-block mr-3 icon"'+a.attr("src",r.icon,!0,!0)+'><span class="mb-0 h6 mb-0">'+(null==(e=r.caption)?"":e)+'</span></div><i class="fas fa-angle-right fa-lg"></i></a>'}}}).call(this),i=i+'</div></div><div class="col-lg-6 order-lg-0"><img class="pt-md-5 pt-lg-0"'+a.attr("src",t.bg_image,!0,!0)+"></div></div></div></div></section>"}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),i}},34:function(t,e,i){var a=i(0);t.exports=function(t){var e,i="",s=t||{};return function(t){i=i+'<section class="bg-light pb-0 pt-5"><div class="container"><div class="pb-0 pt-3"><div class="row justify-content-center align-items-center"><div class="col-12 mb-3 mb-sm-0 text-center"><h1>'+(null==(e=t.headline)?"":e)+'</h1></div><div class="col-12 mb-3 text-center">',""!=t.descript&&null!=t.descript&&(i=i+'<p class="lead">'+(null==(e=t.descript)?"":e)+"</p>"),i+="</div>",function(){var s=t.productlist;if("number"==typeof s.length)for(var l=0,c=s.length;l<c;l++){var n=s[l];i+='<div class="col-6 col-lg-3 d-flex">';var r="#";""!=n.id&&null!=n.id&&(r=`${n.id}.html`),i=i+'<a class="card border rounded hover-effect"'+a.attr("href",r,!0,!0)+'><img class="card-img-top"'+a.attr("src",n.image,!0,!0)+'><div class="card-body"><div class="d-flex justify-content-between align-items-center"><h6 class="mb-0">'+(null==(e=n.text)?"":e)+'</h6><i class="material-icons text-dark">keyboard_arrow_right</i></div></div></a></div>'}else{c=0;for(var l in s){c++;n=s[l];i+='<div class="col-6 col-lg-3 d-flex">';r="#";""!=n.id&&null!=n.id&&(r=`${n.id}.html`),i=i+'<a class="card border rounded hover-effect"'+a.attr("href",r,!0,!0)+'><img class="card-img-top"'+a.attr("src",n.image,!0,!0)+'><div class="card-body"><div class="d-flex justify-content-between align-items-center"><h6 class="mb-0">'+(null==(e=n.text)?"":e)+'</h6><i class="material-icons text-dark">keyboard_arrow_right</i></div></div></a></div>'}}}.call(this),i+="</div></div></div></section>"}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),i}},35:function(t,e,i){var a=i(0);t.exports=function(t){var e,i="",s=t||{};return function(t){i=i+'<section class="bg-light pb-0 pt-5"><div class="container"><div class="pb-0 pt-0"><div class="row justify-content-center align-items-center"><div class="col-12 mb-3 mb-sm-0 text-center"><h1>'+(null==(e=t.headline)?"":e)+'</h1></div><div class="col-12 mb-3 text-center">',""!=t.descript&&null!=t.descript&&(i=i+'<p class="lead">'+(null==(e=t.descript)?"":e)+"</p>"),i+="</div>",function(){var s=t.crewlist;if("number"==typeof s.length)for(var l=0,c=s.length;l<c;l++){var n=s[l];i=i+'<div class="col-6 col-md-4 col-lg-3"><div class="card bg-light"><img class="card-img-top rounded-circle p-3"'+a.attr("src",n.image,!0,!0)+'><div class="card-body"><h6 class="card-title text-center">'+a.escape(null==(e=n.title)?"":e)+'</h6><h5 class="card-title text-center">'+a.escape(null==(e=n.name)?"":e)+"</h5></div></div></div>"}else{c=0;for(var l in s){c++;n=s[l];i=i+'<div class="col-6 col-md-4 col-lg-3"><div class="card bg-light"><img class="card-img-top rounded-circle p-3"'+a.attr("src",n.image,!0,!0)+'><div class="card-body"><h6 class="card-title text-center">'+a.escape(null==(e=n.title)?"":e)+'</h6><h5 class="card-title text-center">'+a.escape(null==(e=n.name)?"":e)+"</h5></div></div></div>"}}}.call(this),i+="</div></div></div></section>"}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),i}},36:function(t,e,i){var a=i(0);t.exports=function(t){var e,i="",s=t||{};return function(t){i=i+'<section class="bg-light p-3"><div class="container"><div class="row justify-content-center align-items-center"><div class="col-12 mb-3 mb-sm-0 text-center"><h1>'+(null==(e=t.headline)?"":e)+'</h1></div><div class="col-12 mb-3 text-center">',""!=t.descript&&null!=t.descript&&(i=i+'<p class="lead">'+(null==(e=t.descript)?"":e)+"</p>"),i+='</div></div><div class="row">',function(){var s=t.newslist;if("number"==typeof s.length)for(var l=0,c=s.length;l<c;l++){var n=s[l];i=i+'<div class="col-12 col-md-6"><div class="card bg-light"><div class="card-body"><a class="h5 card-title text-primary"'+a.attr("href",`${n.id}.html`,!0,!0)+">"+a.escape(null==(e=n.title)?"":e)+'</a><p class="card-text">'+a.escape(null==(e=n.datetime)?"":e)+'</p><p class="card-text text-dark">'+a.escape(null==(e=n.preface)?"":e)+"</p></div></div></div>"}else{c=0;for(var l in s){c++;n=s[l];i=i+'<div class="col-12 col-md-6"><div class="card bg-light"><div class="card-body"><a class="h5 card-title text-primary"'+a.attr("href",`${n.id}.html`,!0,!0)+">"+a.escape(null==(e=n.title)?"":e)+'</a><p class="card-text">'+a.escape(null==(e=n.datetime)?"":e)+'</p><p class="card-text text-dark">'+a.escape(null==(e=n.preface)?"":e)+"</p></div></div></div>"}}}.call(this),i=i+'</div><div class="row p-3"><div class="col justify-content-center text-center"><a class="h5"'+a.attr("href",`${t.linkid}.html`,!0,!0)+">"+a.escape(null==(e=t.linkcaption)?"":e)+"</a></div></div></div></section>"}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),i}},37:function(t){t.exports=JSON.parse('[{"preface":"2019年11月5日01时43分，我国在西昌卫星发射中心用长征三号乙运载火箭，成功发射第四十九颗北斗导航卫星。该卫星发射成功，标志着北斗三号系统3颗倾斜地球同步轨道卫星全部发射完毕。","title":"中国成功发射第49颗北斗导航卫星","datetime":"2019年11月5日 北京时间","id":"news_20191101"},{"preface":"据美国太空网站报道，目前，天文学家发现6颗系外行星可能是由未知的“奇异物质”构成。构成传统物质的原子有由质子和中子组成的原子核，而质子和中子是由被称为夸克的亚原子粒子构成，夸克共有6种：上夸克、下夸克、奇夸克、粲夸克、顶夸克和底夸克，其中上夸克和下夸克的质量最轻，每个质子包含两个上夸克和一个下夸克，然而每个中子包含两个下夸克和一个上夸克。科学家通过粒子加速器强烈碰撞创造出奇夸克，但这些夸克很快就衰变为更稳定的粒子，然而，之前研究表明，在被称为中子星的超密度恒星尸体中，奇夸克可能被证明是稳定的。","title":"最新发现6颗“奇异行星”可能由神秘物质构成","datetime":"2019年9月25日 北京时间","id":"news_20190901"},{"preface":"据《时代》杂志网站报道，《时代》杂志的自由编辑与太空记者杰弗里·克鲁格（Jeffrey Kluger）在SpaceX的加州总部与公司首席执行官伊隆·马斯克（Elon Musk）展开了一次深度对话，讨论了马斯克成立SpaceX的原因，对于登月竞争中出现的各种挑战对手的看法，以及他对未来人类太空旅行的预测。","title":"《时代》专访马斯克：SpaceX最快两年内实现登月","datetime":"2019年7月19日 美国时间","id":"news_20190702"},{"preface":"参考消息网7月11日报道 境外媒体报道称，大疆创新推出的大疆政企版无人机系统，已通过美国内政部的官方测试与独立验证。","title":"罕见！大疆通过美国内政部审核","datetime":"2019年7月11日 北京时间","id":"news_20190701"}]')}});