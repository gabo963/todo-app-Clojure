goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60819 = arguments.length;
var i__5770__auto___60820 = (0);
while(true){
if((i__5770__auto___60820 < len__5769__auto___60819)){
args__5775__auto__.push((arguments[i__5770__auto___60820]));

var G__60821 = (i__5770__auto___60820 + (1));
i__5770__auto___60820 = G__60821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60336){
var G__60337 = cljs.core.first(seq60336);
var seq60336__$1 = cljs.core.next(seq60336);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60337,seq60336__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60338 = cljs.core.seq(sources);
var chunk__60339 = null;
var count__60340 = (0);
var i__60341 = (0);
while(true){
if((i__60341 < count__60340)){
var map__60346 = chunk__60339.cljs$core$IIndexed$_nth$arity$2(null,i__60341);
var map__60346__$1 = cljs.core.__destructure_map(map__60346);
var src = map__60346__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e60347){var e_60824 = e60347;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60824);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60824.message)].join('')));
}

var G__60825 = seq__60338;
var G__60826 = chunk__60339;
var G__60827 = count__60340;
var G__60828 = (i__60341 + (1));
seq__60338 = G__60825;
chunk__60339 = G__60826;
count__60340 = G__60827;
i__60341 = G__60828;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60338);
if(temp__5804__auto__){
var seq__60338__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60338__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60338__$1);
var G__60829 = cljs.core.chunk_rest(seq__60338__$1);
var G__60830 = c__5568__auto__;
var G__60831 = cljs.core.count(c__5568__auto__);
var G__60832 = (0);
seq__60338 = G__60829;
chunk__60339 = G__60830;
count__60340 = G__60831;
i__60341 = G__60832;
continue;
} else {
var map__60348 = cljs.core.first(seq__60338__$1);
var map__60348__$1 = cljs.core.__destructure_map(map__60348);
var src = map__60348__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60348__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60348__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60348__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e60349){var e_60834 = e60349;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60834);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60834.message)].join('')));
}

var G__60835 = cljs.core.next(seq__60338__$1);
var G__60836 = null;
var G__60837 = (0);
var G__60838 = (0);
seq__60338 = G__60835;
chunk__60339 = G__60836;
count__60340 = G__60837;
i__60341 = G__60838;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__60350 = cljs.core.seq(js_requires);
var chunk__60351 = null;
var count__60352 = (0);
var i__60353 = (0);
while(true){
if((i__60353 < count__60352)){
var js_ns = chunk__60351.cljs$core$IIndexed$_nth$arity$2(null,i__60353);
var require_str_60840 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60840);


var G__60841 = seq__60350;
var G__60842 = chunk__60351;
var G__60843 = count__60352;
var G__60844 = (i__60353 + (1));
seq__60350 = G__60841;
chunk__60351 = G__60842;
count__60352 = G__60843;
i__60353 = G__60844;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60350);
if(temp__5804__auto__){
var seq__60350__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60350__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60350__$1);
var G__60845 = cljs.core.chunk_rest(seq__60350__$1);
var G__60846 = c__5568__auto__;
var G__60847 = cljs.core.count(c__5568__auto__);
var G__60848 = (0);
seq__60350 = G__60845;
chunk__60351 = G__60846;
count__60352 = G__60847;
i__60353 = G__60848;
continue;
} else {
var js_ns = cljs.core.first(seq__60350__$1);
var require_str_60851 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60851);


var G__60852 = cljs.core.next(seq__60350__$1);
var G__60853 = null;
var G__60854 = (0);
var G__60855 = (0);
seq__60350 = G__60852;
chunk__60351 = G__60853;
count__60352 = G__60854;
i__60353 = G__60855;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__60355){
var map__60356 = p__60355;
var map__60356__$1 = cljs.core.__destructure_map(map__60356);
var msg = map__60356__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60357(s__60358){
return (new cljs.core.LazySeq(null,(function (){
var s__60358__$1 = s__60358;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60358__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__60363 = cljs.core.first(xs__6360__auto__);
var map__60363__$1 = cljs.core.__destructure_map(map__60363);
var src = map__60363__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__60358__$1,map__60363,map__60363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__60356,map__60356__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60357_$_iter__60359(s__60360){
return (new cljs.core.LazySeq(null,((function (s__60358__$1,map__60363,map__60363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__60356,map__60356__$1,msg,info,reload_info){
return (function (){
var s__60360__$1 = s__60360;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__60360__$1);
if(temp__5804__auto____$1){
var s__60360__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60360__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60360__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60362 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60361 = (0);
while(true){
if((i__60361 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__60361);
cljs.core.chunk_append(b__60362,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60857 = (i__60361 + (1));
i__60361 = G__60857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60362),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60357_$_iter__60359(cljs.core.chunk_rest(s__60360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60362),null);
}
} else {
var warning = cljs.core.first(s__60360__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60357_$_iter__60359(cljs.core.rest(s__60360__$2)));
}
} else {
return null;
}
break;
}
});})(s__60358__$1,map__60363,map__60363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__60356,map__60356__$1,msg,info,reload_info))
,null,null));
});})(s__60358__$1,map__60363,map__60363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__60356,map__60356__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60357(cljs.core.rest(s__60358__$1)));
} else {
var G__60858 = cljs.core.rest(s__60358__$1);
s__60358__$1 = G__60858;
continue;
}
} else {
var G__60859 = cljs.core.rest(s__60358__$1);
s__60358__$1 = G__60859;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__60364_60860 = cljs.core.seq(warnings);
var chunk__60365_60861 = null;
var count__60366_60862 = (0);
var i__60367_60863 = (0);
while(true){
if((i__60367_60863 < count__60366_60862)){
var map__60370_60864 = chunk__60365_60861.cljs$core$IIndexed$_nth$arity$2(null,i__60367_60863);
var map__60370_60865__$1 = cljs.core.__destructure_map(map__60370_60864);
var w_60866 = map__60370_60865__$1;
var msg_60867__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60370_60865__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60370_60865__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60370_60865__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60370_60865__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60870)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60868),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60869),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60867__$1)].join(''));


var G__60872 = seq__60364_60860;
var G__60873 = chunk__60365_60861;
var G__60874 = count__60366_60862;
var G__60875 = (i__60367_60863 + (1));
seq__60364_60860 = G__60872;
chunk__60365_60861 = G__60873;
count__60366_60862 = G__60874;
i__60367_60863 = G__60875;
continue;
} else {
var temp__5804__auto___60876 = cljs.core.seq(seq__60364_60860);
if(temp__5804__auto___60876){
var seq__60364_60877__$1 = temp__5804__auto___60876;
if(cljs.core.chunked_seq_QMARK_(seq__60364_60877__$1)){
var c__5568__auto___60878 = cljs.core.chunk_first(seq__60364_60877__$1);
var G__60879 = cljs.core.chunk_rest(seq__60364_60877__$1);
var G__60880 = c__5568__auto___60878;
var G__60881 = cljs.core.count(c__5568__auto___60878);
var G__60882 = (0);
seq__60364_60860 = G__60879;
chunk__60365_60861 = G__60880;
count__60366_60862 = G__60881;
i__60367_60863 = G__60882;
continue;
} else {
var map__60371_60883 = cljs.core.first(seq__60364_60877__$1);
var map__60371_60884__$1 = cljs.core.__destructure_map(map__60371_60883);
var w_60885 = map__60371_60884__$1;
var msg_60886__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371_60884__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371_60884__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371_60884__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371_60884__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60889)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60887),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60888),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60886__$1)].join(''));


var G__60890 = cljs.core.next(seq__60364_60877__$1);
var G__60891 = null;
var G__60892 = (0);
var G__60893 = (0);
seq__60364_60860 = G__60890;
chunk__60365_60861 = G__60891;
count__60366_60862 = G__60892;
i__60367_60863 = G__60893;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__60354_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60354_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__60374){
var map__60375 = p__60374;
var map__60375__$1 = cljs.core.__destructure_map(map__60375);
var msg = map__60375__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__60378 = cljs.core.seq(updates);
var chunk__60380 = null;
var count__60381 = (0);
var i__60382 = (0);
while(true){
if((i__60382 < count__60381)){
var path = chunk__60380.cljs$core$IIndexed$_nth$arity$2(null,i__60382);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60586_60897 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60590_60898 = null;
var count__60591_60899 = (0);
var i__60592_60900 = (0);
while(true){
if((i__60592_60900 < count__60591_60899)){
var node_60901 = chunk__60590_60898.cljs$core$IIndexed$_nth$arity$2(null,i__60592_60900);
if(cljs.core.not(node_60901.shadow$old)){
var path_match_60902 = shadow.cljs.devtools.client.browser.match_paths(node_60901.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60902)){
var new_link_60903 = (function (){var G__60633 = node_60901.cloneNode(true);
G__60633.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60902),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60633;
})();
(node_60901.shadow$old = true);

(new_link_60903.onload = ((function (seq__60586_60897,chunk__60590_60898,count__60591_60899,i__60592_60900,seq__60378,chunk__60380,count__60381,i__60382,new_link_60903,path_match_60902,node_60901,path,map__60375,map__60375__$1,msg,updates,reload_info){
return (function (e){
var seq__60634_60905 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__60636_60906 = null;
var count__60637_60907 = (0);
var i__60638_60908 = (0);
while(true){
if((i__60638_60908 < count__60637_60907)){
var map__60642_60909 = chunk__60636_60906.cljs$core$IIndexed$_nth$arity$2(null,i__60638_60908);
var map__60642_60910__$1 = cljs.core.__destructure_map(map__60642_60909);
var task_60911 = map__60642_60910__$1;
var fn_str_60912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642_60910__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_60913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642_60910__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_60914 = goog.getObjectByName(fn_str_60912,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_60913)].join(''));

(fn_obj_60914.cljs$core$IFn$_invoke$arity$2 ? fn_obj_60914.cljs$core$IFn$_invoke$arity$2(path,new_link_60903) : fn_obj_60914.call(null,path,new_link_60903));


var G__60915 = seq__60634_60905;
var G__60916 = chunk__60636_60906;
var G__60917 = count__60637_60907;
var G__60918 = (i__60638_60908 + (1));
seq__60634_60905 = G__60915;
chunk__60636_60906 = G__60916;
count__60637_60907 = G__60917;
i__60638_60908 = G__60918;
continue;
} else {
var temp__5804__auto___60919 = cljs.core.seq(seq__60634_60905);
if(temp__5804__auto___60919){
var seq__60634_60920__$1 = temp__5804__auto___60919;
if(cljs.core.chunked_seq_QMARK_(seq__60634_60920__$1)){
var c__5568__auto___60922 = cljs.core.chunk_first(seq__60634_60920__$1);
var G__60923 = cljs.core.chunk_rest(seq__60634_60920__$1);
var G__60924 = c__5568__auto___60922;
var G__60925 = cljs.core.count(c__5568__auto___60922);
var G__60926 = (0);
seq__60634_60905 = G__60923;
chunk__60636_60906 = G__60924;
count__60637_60907 = G__60925;
i__60638_60908 = G__60926;
continue;
} else {
var map__60645_60927 = cljs.core.first(seq__60634_60920__$1);
var map__60645_60928__$1 = cljs.core.__destructure_map(map__60645_60927);
var task_60929 = map__60645_60928__$1;
var fn_str_60930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60645_60928__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_60931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60645_60928__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_60932 = goog.getObjectByName(fn_str_60930,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_60931)].join(''));

(fn_obj_60932.cljs$core$IFn$_invoke$arity$2 ? fn_obj_60932.cljs$core$IFn$_invoke$arity$2(path,new_link_60903) : fn_obj_60932.call(null,path,new_link_60903));


var G__60933 = cljs.core.next(seq__60634_60920__$1);
var G__60934 = null;
var G__60935 = (0);
var G__60936 = (0);
seq__60634_60905 = G__60933;
chunk__60636_60906 = G__60934;
count__60637_60907 = G__60935;
i__60638_60908 = G__60936;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_60901);
});})(seq__60586_60897,chunk__60590_60898,count__60591_60899,i__60592_60900,seq__60378,chunk__60380,count__60381,i__60382,new_link_60903,path_match_60902,node_60901,path,map__60375,map__60375__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60902], 0));

goog.dom.insertSiblingAfter(new_link_60903,node_60901);


var G__60937 = seq__60586_60897;
var G__60938 = chunk__60590_60898;
var G__60939 = count__60591_60899;
var G__60940 = (i__60592_60900 + (1));
seq__60586_60897 = G__60937;
chunk__60590_60898 = G__60938;
count__60591_60899 = G__60939;
i__60592_60900 = G__60940;
continue;
} else {
var G__60941 = seq__60586_60897;
var G__60942 = chunk__60590_60898;
var G__60943 = count__60591_60899;
var G__60944 = (i__60592_60900 + (1));
seq__60586_60897 = G__60941;
chunk__60590_60898 = G__60942;
count__60591_60899 = G__60943;
i__60592_60900 = G__60944;
continue;
}
} else {
var G__60946 = seq__60586_60897;
var G__60947 = chunk__60590_60898;
var G__60948 = count__60591_60899;
var G__60949 = (i__60592_60900 + (1));
seq__60586_60897 = G__60946;
chunk__60590_60898 = G__60947;
count__60591_60899 = G__60948;
i__60592_60900 = G__60949;
continue;
}
} else {
var temp__5804__auto___60950 = cljs.core.seq(seq__60586_60897);
if(temp__5804__auto___60950){
var seq__60586_60951__$1 = temp__5804__auto___60950;
if(cljs.core.chunked_seq_QMARK_(seq__60586_60951__$1)){
var c__5568__auto___60952 = cljs.core.chunk_first(seq__60586_60951__$1);
var G__60953 = cljs.core.chunk_rest(seq__60586_60951__$1);
var G__60954 = c__5568__auto___60952;
var G__60955 = cljs.core.count(c__5568__auto___60952);
var G__60956 = (0);
seq__60586_60897 = G__60953;
chunk__60590_60898 = G__60954;
count__60591_60899 = G__60955;
i__60592_60900 = G__60956;
continue;
} else {
var node_60957 = cljs.core.first(seq__60586_60951__$1);
if(cljs.core.not(node_60957.shadow$old)){
var path_match_60958 = shadow.cljs.devtools.client.browser.match_paths(node_60957.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60958)){
var new_link_60959 = (function (){var G__60651 = node_60957.cloneNode(true);
G__60651.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60958),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60651;
})();
(node_60957.shadow$old = true);

(new_link_60959.onload = ((function (seq__60586_60897,chunk__60590_60898,count__60591_60899,i__60592_60900,seq__60378,chunk__60380,count__60381,i__60382,new_link_60959,path_match_60958,node_60957,seq__60586_60951__$1,temp__5804__auto___60950,path,map__60375,map__60375__$1,msg,updates,reload_info){
return (function (e){
var seq__60653_60961 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__60655_60962 = null;
var count__60656_60963 = (0);
var i__60657_60964 = (0);
while(true){
if((i__60657_60964 < count__60656_60963)){
var map__60664_60965 = chunk__60655_60962.cljs$core$IIndexed$_nth$arity$2(null,i__60657_60964);
var map__60664_60966__$1 = cljs.core.__destructure_map(map__60664_60965);
var task_60967 = map__60664_60966__$1;
var fn_str_60968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60664_60966__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_60969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60664_60966__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_60970 = goog.getObjectByName(fn_str_60968,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_60969)].join(''));

(fn_obj_60970.cljs$core$IFn$_invoke$arity$2 ? fn_obj_60970.cljs$core$IFn$_invoke$arity$2(path,new_link_60959) : fn_obj_60970.call(null,path,new_link_60959));


var G__60971 = seq__60653_60961;
var G__60972 = chunk__60655_60962;
var G__60973 = count__60656_60963;
var G__60974 = (i__60657_60964 + (1));
seq__60653_60961 = G__60971;
chunk__60655_60962 = G__60972;
count__60656_60963 = G__60973;
i__60657_60964 = G__60974;
continue;
} else {
var temp__5804__auto___60975__$1 = cljs.core.seq(seq__60653_60961);
if(temp__5804__auto___60975__$1){
var seq__60653_60976__$1 = temp__5804__auto___60975__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60653_60976__$1)){
var c__5568__auto___60977 = cljs.core.chunk_first(seq__60653_60976__$1);
var G__60978 = cljs.core.chunk_rest(seq__60653_60976__$1);
var G__60979 = c__5568__auto___60977;
var G__60980 = cljs.core.count(c__5568__auto___60977);
var G__60981 = (0);
seq__60653_60961 = G__60978;
chunk__60655_60962 = G__60979;
count__60656_60963 = G__60980;
i__60657_60964 = G__60981;
continue;
} else {
var map__60666_60982 = cljs.core.first(seq__60653_60976__$1);
var map__60666_60983__$1 = cljs.core.__destructure_map(map__60666_60982);
var task_60984 = map__60666_60983__$1;
var fn_str_60985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666_60983__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_60986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666_60983__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_60987 = goog.getObjectByName(fn_str_60985,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_60986)].join(''));

(fn_obj_60987.cljs$core$IFn$_invoke$arity$2 ? fn_obj_60987.cljs$core$IFn$_invoke$arity$2(path,new_link_60959) : fn_obj_60987.call(null,path,new_link_60959));


var G__60988 = cljs.core.next(seq__60653_60976__$1);
var G__60989 = null;
var G__60990 = (0);
var G__60991 = (0);
seq__60653_60961 = G__60988;
chunk__60655_60962 = G__60989;
count__60656_60963 = G__60990;
i__60657_60964 = G__60991;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_60957);
});})(seq__60586_60897,chunk__60590_60898,count__60591_60899,i__60592_60900,seq__60378,chunk__60380,count__60381,i__60382,new_link_60959,path_match_60958,node_60957,seq__60586_60951__$1,temp__5804__auto___60950,path,map__60375,map__60375__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60958], 0));

goog.dom.insertSiblingAfter(new_link_60959,node_60957);


var G__60993 = cljs.core.next(seq__60586_60951__$1);
var G__60994 = null;
var G__60995 = (0);
var G__60996 = (0);
seq__60586_60897 = G__60993;
chunk__60590_60898 = G__60994;
count__60591_60899 = G__60995;
i__60592_60900 = G__60996;
continue;
} else {
var G__60997 = cljs.core.next(seq__60586_60951__$1);
var G__60998 = null;
var G__60999 = (0);
var G__61000 = (0);
seq__60586_60897 = G__60997;
chunk__60590_60898 = G__60998;
count__60591_60899 = G__60999;
i__60592_60900 = G__61000;
continue;
}
} else {
var G__61001 = cljs.core.next(seq__60586_60951__$1);
var G__61002 = null;
var G__61003 = (0);
var G__61004 = (0);
seq__60586_60897 = G__61001;
chunk__60590_60898 = G__61002;
count__60591_60899 = G__61003;
i__60592_60900 = G__61004;
continue;
}
}
} else {
}
}
break;
}


var G__61005 = seq__60378;
var G__61006 = chunk__60380;
var G__61007 = count__60381;
var G__61008 = (i__60382 + (1));
seq__60378 = G__61005;
chunk__60380 = G__61006;
count__60381 = G__61007;
i__60382 = G__61008;
continue;
} else {
var G__61009 = seq__60378;
var G__61010 = chunk__60380;
var G__61011 = count__60381;
var G__61012 = (i__60382 + (1));
seq__60378 = G__61009;
chunk__60380 = G__61010;
count__60381 = G__61011;
i__60382 = G__61012;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60378);
if(temp__5804__auto__){
var seq__60378__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60378__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60378__$1);
var G__61013 = cljs.core.chunk_rest(seq__60378__$1);
var G__61014 = c__5568__auto__;
var G__61015 = cljs.core.count(c__5568__auto__);
var G__61016 = (0);
seq__60378 = G__61013;
chunk__60380 = G__61014;
count__60381 = G__61015;
i__60382 = G__61016;
continue;
} else {
var path = cljs.core.first(seq__60378__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60672_61017 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60676_61018 = null;
var count__60677_61019 = (0);
var i__60678_61020 = (0);
while(true){
if((i__60678_61020 < count__60677_61019)){
var node_61021 = chunk__60676_61018.cljs$core$IIndexed$_nth$arity$2(null,i__60678_61020);
if(cljs.core.not(node_61021.shadow$old)){
var path_match_61022 = shadow.cljs.devtools.client.browser.match_paths(node_61021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61022)){
var new_link_61023 = (function (){var G__60717 = node_61021.cloneNode(true);
G__60717.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61022),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60717;
})();
(node_61021.shadow$old = true);

(new_link_61023.onload = ((function (seq__60672_61017,chunk__60676_61018,count__60677_61019,i__60678_61020,seq__60378,chunk__60380,count__60381,i__60382,new_link_61023,path_match_61022,node_61021,path,seq__60378__$1,temp__5804__auto__,map__60375,map__60375__$1,msg,updates,reload_info){
return (function (e){
var seq__60718_61025 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__60720_61026 = null;
var count__60721_61027 = (0);
var i__60722_61028 = (0);
while(true){
if((i__60722_61028 < count__60721_61027)){
var map__60734_61030 = chunk__60720_61026.cljs$core$IIndexed$_nth$arity$2(null,i__60722_61028);
var map__60734_61031__$1 = cljs.core.__destructure_map(map__60734_61030);
var task_61032 = map__60734_61031__$1;
var fn_str_61033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734_61031__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_61034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734_61031__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_61036 = goog.getObjectByName(fn_str_61033,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_61034)].join(''));

(fn_obj_61036.cljs$core$IFn$_invoke$arity$2 ? fn_obj_61036.cljs$core$IFn$_invoke$arity$2(path,new_link_61023) : fn_obj_61036.call(null,path,new_link_61023));


var G__61037 = seq__60718_61025;
var G__61038 = chunk__60720_61026;
var G__61039 = count__60721_61027;
var G__61040 = (i__60722_61028 + (1));
seq__60718_61025 = G__61037;
chunk__60720_61026 = G__61038;
count__60721_61027 = G__61039;
i__60722_61028 = G__61040;
continue;
} else {
var temp__5804__auto___61041__$1 = cljs.core.seq(seq__60718_61025);
if(temp__5804__auto___61041__$1){
var seq__60718_61042__$1 = temp__5804__auto___61041__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60718_61042__$1)){
var c__5568__auto___61043 = cljs.core.chunk_first(seq__60718_61042__$1);
var G__61044 = cljs.core.chunk_rest(seq__60718_61042__$1);
var G__61045 = c__5568__auto___61043;
var G__61046 = cljs.core.count(c__5568__auto___61043);
var G__61047 = (0);
seq__60718_61025 = G__61044;
chunk__60720_61026 = G__61045;
count__60721_61027 = G__61046;
i__60722_61028 = G__61047;
continue;
} else {
var map__60736_61048 = cljs.core.first(seq__60718_61042__$1);
var map__60736_61049__$1 = cljs.core.__destructure_map(map__60736_61048);
var task_61050 = map__60736_61049__$1;
var fn_str_61051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736_61049__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_61052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736_61049__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_61053 = goog.getObjectByName(fn_str_61051,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_61052)].join(''));

(fn_obj_61053.cljs$core$IFn$_invoke$arity$2 ? fn_obj_61053.cljs$core$IFn$_invoke$arity$2(path,new_link_61023) : fn_obj_61053.call(null,path,new_link_61023));


var G__61054 = cljs.core.next(seq__60718_61042__$1);
var G__61055 = null;
var G__61056 = (0);
var G__61057 = (0);
seq__60718_61025 = G__61054;
chunk__60720_61026 = G__61055;
count__60721_61027 = G__61056;
i__60722_61028 = G__61057;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_61021);
});})(seq__60672_61017,chunk__60676_61018,count__60677_61019,i__60678_61020,seq__60378,chunk__60380,count__60381,i__60382,new_link_61023,path_match_61022,node_61021,path,seq__60378__$1,temp__5804__auto__,map__60375,map__60375__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61022], 0));

goog.dom.insertSiblingAfter(new_link_61023,node_61021);


var G__61058 = seq__60672_61017;
var G__61059 = chunk__60676_61018;
var G__61060 = count__60677_61019;
var G__61061 = (i__60678_61020 + (1));
seq__60672_61017 = G__61058;
chunk__60676_61018 = G__61059;
count__60677_61019 = G__61060;
i__60678_61020 = G__61061;
continue;
} else {
var G__61062 = seq__60672_61017;
var G__61063 = chunk__60676_61018;
var G__61064 = count__60677_61019;
var G__61065 = (i__60678_61020 + (1));
seq__60672_61017 = G__61062;
chunk__60676_61018 = G__61063;
count__60677_61019 = G__61064;
i__60678_61020 = G__61065;
continue;
}
} else {
var G__61066 = seq__60672_61017;
var G__61067 = chunk__60676_61018;
var G__61068 = count__60677_61019;
var G__61069 = (i__60678_61020 + (1));
seq__60672_61017 = G__61066;
chunk__60676_61018 = G__61067;
count__60677_61019 = G__61068;
i__60678_61020 = G__61069;
continue;
}
} else {
var temp__5804__auto___61070__$1 = cljs.core.seq(seq__60672_61017);
if(temp__5804__auto___61070__$1){
var seq__60672_61071__$1 = temp__5804__auto___61070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60672_61071__$1)){
var c__5568__auto___61072 = cljs.core.chunk_first(seq__60672_61071__$1);
var G__61073 = cljs.core.chunk_rest(seq__60672_61071__$1);
var G__61074 = c__5568__auto___61072;
var G__61075 = cljs.core.count(c__5568__auto___61072);
var G__61076 = (0);
seq__60672_61017 = G__61073;
chunk__60676_61018 = G__61074;
count__60677_61019 = G__61075;
i__60678_61020 = G__61076;
continue;
} else {
var node_61077 = cljs.core.first(seq__60672_61071__$1);
if(cljs.core.not(node_61077.shadow$old)){
var path_match_61078 = shadow.cljs.devtools.client.browser.match_paths(node_61077.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61078)){
var new_link_61079 = (function (){var G__60740 = node_61077.cloneNode(true);
G__60740.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61078),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60740;
})();
(node_61077.shadow$old = true);

(new_link_61079.onload = ((function (seq__60672_61017,chunk__60676_61018,count__60677_61019,i__60678_61020,seq__60378,chunk__60380,count__60381,i__60382,new_link_61079,path_match_61078,node_61077,seq__60672_61071__$1,temp__5804__auto___61070__$1,path,seq__60378__$1,temp__5804__auto__,map__60375,map__60375__$1,msg,updates,reload_info){
return (function (e){
var seq__60741_61082 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__60743_61083 = null;
var count__60744_61084 = (0);
var i__60745_61085 = (0);
while(true){
if((i__60745_61085 < count__60744_61084)){
var map__60755_61086 = chunk__60743_61083.cljs$core$IIndexed$_nth$arity$2(null,i__60745_61085);
var map__60755_61087__$1 = cljs.core.__destructure_map(map__60755_61086);
var task_61088 = map__60755_61087__$1;
var fn_str_61089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755_61087__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_61090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755_61087__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_61093 = goog.getObjectByName(fn_str_61089,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_61090)].join(''));

(fn_obj_61093.cljs$core$IFn$_invoke$arity$2 ? fn_obj_61093.cljs$core$IFn$_invoke$arity$2(path,new_link_61079) : fn_obj_61093.call(null,path,new_link_61079));


var G__61094 = seq__60741_61082;
var G__61095 = chunk__60743_61083;
var G__61096 = count__60744_61084;
var G__61097 = (i__60745_61085 + (1));
seq__60741_61082 = G__61094;
chunk__60743_61083 = G__61095;
count__60744_61084 = G__61096;
i__60745_61085 = G__61097;
continue;
} else {
var temp__5804__auto___61098__$2 = cljs.core.seq(seq__60741_61082);
if(temp__5804__auto___61098__$2){
var seq__60741_61099__$1 = temp__5804__auto___61098__$2;
if(cljs.core.chunked_seq_QMARK_(seq__60741_61099__$1)){
var c__5568__auto___61102 = cljs.core.chunk_first(seq__60741_61099__$1);
var G__61103 = cljs.core.chunk_rest(seq__60741_61099__$1);
var G__61104 = c__5568__auto___61102;
var G__61105 = cljs.core.count(c__5568__auto___61102);
var G__61106 = (0);
seq__60741_61082 = G__61103;
chunk__60743_61083 = G__61104;
count__60744_61084 = G__61105;
i__60745_61085 = G__61106;
continue;
} else {
var map__60759_61107 = cljs.core.first(seq__60741_61099__$1);
var map__60759_61108__$1 = cljs.core.__destructure_map(map__60759_61107);
var task_61109 = map__60759_61108__$1;
var fn_str_61110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759_61108__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_61111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759_61108__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_61113 = goog.getObjectByName(fn_str_61110,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_61111)].join(''));

(fn_obj_61113.cljs$core$IFn$_invoke$arity$2 ? fn_obj_61113.cljs$core$IFn$_invoke$arity$2(path,new_link_61079) : fn_obj_61113.call(null,path,new_link_61079));


var G__61117 = cljs.core.next(seq__60741_61099__$1);
var G__61118 = null;
var G__61119 = (0);
var G__61120 = (0);
seq__60741_61082 = G__61117;
chunk__60743_61083 = G__61118;
count__60744_61084 = G__61119;
i__60745_61085 = G__61120;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_61077);
});})(seq__60672_61017,chunk__60676_61018,count__60677_61019,i__60678_61020,seq__60378,chunk__60380,count__60381,i__60382,new_link_61079,path_match_61078,node_61077,seq__60672_61071__$1,temp__5804__auto___61070__$1,path,seq__60378__$1,temp__5804__auto__,map__60375,map__60375__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61078], 0));

goog.dom.insertSiblingAfter(new_link_61079,node_61077);


var G__61121 = cljs.core.next(seq__60672_61071__$1);
var G__61122 = null;
var G__61123 = (0);
var G__61124 = (0);
seq__60672_61017 = G__61121;
chunk__60676_61018 = G__61122;
count__60677_61019 = G__61123;
i__60678_61020 = G__61124;
continue;
} else {
var G__61125 = cljs.core.next(seq__60672_61071__$1);
var G__61126 = null;
var G__61127 = (0);
var G__61128 = (0);
seq__60672_61017 = G__61125;
chunk__60676_61018 = G__61126;
count__60677_61019 = G__61127;
i__60678_61020 = G__61128;
continue;
}
} else {
var G__61129 = cljs.core.next(seq__60672_61071__$1);
var G__61130 = null;
var G__61131 = (0);
var G__61132 = (0);
seq__60672_61017 = G__61129;
chunk__60676_61018 = G__61130;
count__60677_61019 = G__61131;
i__60678_61020 = G__61132;
continue;
}
}
} else {
}
}
break;
}


var G__61133 = cljs.core.next(seq__60378__$1);
var G__61134 = null;
var G__61135 = (0);
var G__61136 = (0);
seq__60378 = G__61133;
chunk__60380 = G__61134;
count__60381 = G__61135;
i__60382 = G__61136;
continue;
} else {
var G__61137 = cljs.core.next(seq__60378__$1);
var G__61138 = null;
var G__61139 = (0);
var G__61140 = (0);
seq__60378 = G__61137;
chunk__60380 = G__61138;
count__60381 = G__61139;
i__60382 = G__61140;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__60765){
var map__60766 = p__60765;
var map__60766__$1 = cljs.core.__destructure_map(map__60766);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__60778){
var map__60779 = p__60778;
var map__60779__$1 = cljs.core.__destructure_map(map__60779);
var _ = map__60779__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60779__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__60780,done,error){
var map__60782 = p__60780;
var map__60782__$1 = cljs.core.__destructure_map(map__60782);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__60786,done,error){
var map__60787 = p__60786;
var map__60787__$1 = cljs.core.__destructure_map(map__60787);
var msg = map__60787__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60788){
var map__60789 = p__60788;
var map__60789__$1 = cljs.core.__destructure_map(map__60789);
var src = map__60789__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60789__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__60794 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__60794) : done.call(null,G__60794));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__60795){
var map__60796 = p__60795;
var map__60796__$1 = cljs.core.__destructure_map(map__60796);
var msg__$1 = map__60796__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60796__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e60797){var ex = e60797;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__60798){
var map__60799 = p__60798;
var map__60799__$1 = cljs.core.__destructure_map(map__60799);
var env = map__60799__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60799__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__60809){
var map__60810 = p__60809;
var map__60810__$1 = cljs.core.__destructure_map(map__60810);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60810__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60810__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__60811){
var map__60812 = p__60811;
var map__60812__$1 = cljs.core.__destructure_map(map__60812);
var svc = map__60812__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60812__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
