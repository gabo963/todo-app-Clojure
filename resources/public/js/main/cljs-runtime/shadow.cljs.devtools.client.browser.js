goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54297 = arguments.length;
var i__4731__auto___54298 = (0);
while(true){
if((i__4731__auto___54298 < len__4730__auto___54297)){
args__4736__auto__.push((arguments[i__4731__auto___54298]));

var G__54299 = (i__4731__auto___54298 + (1));
i__4731__auto___54298 = G__54299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53936){
var G__53937 = cljs.core.first(seq53936);
var seq53936__$1 = cljs.core.next(seq53936);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53937,seq53936__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5802__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5802__auto__)){
var s = temp__5802__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__53942){
var map__53943 = p__53942;
var map__53943__$1 = (((((!((map__53943 == null))))?(((((map__53943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53943):map__53943);
var src = map__53943__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53943__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53943__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53951 = cljs.core.seq(sources);
var chunk__53952 = null;
var count__53953 = (0);
var i__53954 = (0);
while(true){
if((i__53954 < count__53953)){
var map__53963 = chunk__53952.cljs$core$IIndexed$_nth$arity$2(null,i__53954);
var map__53963__$1 = (((((!((map__53963 == null))))?(((((map__53963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53963):map__53963);
var src = map__53963__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53963__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53963__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53963__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53963__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e53965){var e_54308 = e53965;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54308);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54308.message)].join('')));
}

var G__54309 = seq__53951;
var G__54310 = chunk__53952;
var G__54311 = count__53953;
var G__54312 = (i__53954 + (1));
seq__53951 = G__54309;
chunk__53952 = G__54310;
count__53953 = G__54311;
i__53954 = G__54312;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53951);
if(temp__5804__auto__){
var seq__53951__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53951__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53951__$1);
var G__54314 = cljs.core.chunk_rest(seq__53951__$1);
var G__54315 = c__4550__auto__;
var G__54316 = cljs.core.count(c__4550__auto__);
var G__54317 = (0);
seq__53951 = G__54314;
chunk__53952 = G__54315;
count__53953 = G__54316;
i__53954 = G__54317;
continue;
} else {
var map__53966 = cljs.core.first(seq__53951__$1);
var map__53966__$1 = (((((!((map__53966 == null))))?(((((map__53966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53966):map__53966);
var src = map__53966__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53966__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53966__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53966__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53966__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e53969){var e_54320 = e53969;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54320);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54320.message)].join('')));
}

var G__54321 = cljs.core.next(seq__53951__$1);
var G__54322 = null;
var G__54323 = (0);
var G__54324 = (0);
seq__53951 = G__54321;
chunk__53952 = G__54322;
count__53953 = G__54323;
i__53954 = G__54324;
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
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
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
var seq__53970 = cljs.core.seq(js_requires);
var chunk__53971 = null;
var count__53972 = (0);
var i__53973 = (0);
while(true){
if((i__53973 < count__53972)){
var js_ns = chunk__53971.cljs$core$IIndexed$_nth$arity$2(null,i__53973);
var require_str_54326 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54326);


var G__54327 = seq__53970;
var G__54328 = chunk__53971;
var G__54329 = count__53972;
var G__54330 = (i__53973 + (1));
seq__53970 = G__54327;
chunk__53971 = G__54328;
count__53972 = G__54329;
i__53973 = G__54330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53970);
if(temp__5804__auto__){
var seq__53970__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53970__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53970__$1);
var G__54331 = cljs.core.chunk_rest(seq__53970__$1);
var G__54332 = c__4550__auto__;
var G__54333 = cljs.core.count(c__4550__auto__);
var G__54334 = (0);
seq__53970 = G__54331;
chunk__53971 = G__54332;
count__53972 = G__54333;
i__53973 = G__54334;
continue;
} else {
var js_ns = cljs.core.first(seq__53970__$1);
var require_str_54335 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54335);


var G__54337 = cljs.core.next(seq__53970__$1);
var G__54338 = null;
var G__54339 = (0);
var G__54340 = (0);
seq__53970 = G__54337;
chunk__53971 = G__54338;
count__53972 = G__54339;
i__53973 = G__54340;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__53979 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__53979) : callback.call(null,G__53979));
} else {
var G__53980 = shadow.cljs.devtools.client.env.files_url();
var G__53981 = ((function (G__53980){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__53980))
;
var G__53982 = "POST";
var G__53983 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__53984 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__53980,G__53981,G__53982,G__53983,G__53984);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__53989){
var map__53990 = p__53989;
var map__53990__$1 = (((((!((map__53990 == null))))?(((((map__53990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53990):map__53990);
var msg = map__53990__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53990__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53990__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__53994 = info;
var map__53994__$1 = (((((!((map__53994 == null))))?(((((map__53994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53994):map__53994);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53994__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53994__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53997(s__53998){
return (new cljs.core.LazySeq(null,((function (map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info){
return (function (){
var s__53998__$1 = s__53998;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53998__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__54005 = cljs.core.first(xs__6360__auto__);
var map__54005__$1 = (((((!((map__54005 == null))))?(((((map__54005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54005):map__54005);
var src = map__54005__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__53998__$1,map__54005,map__54005__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53997_$_iter__53999(s__54000){
return (new cljs.core.LazySeq(null,((function (s__53998__$1,map__54005,map__54005__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info){
return (function (){
var s__54000__$1 = s__54000;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__54000__$1);
if(temp__5804__auto____$1){
var s__54000__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54000__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__54000__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__54002 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__54001 = (0);
while(true){
if((i__54001 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__54001);
cljs.core.chunk_append(b__54002,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54352 = (i__54001 + (1));
i__54001 = G__54352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54002),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53997_$_iter__53999(cljs.core.chunk_rest(s__54000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54002),null);
}
} else {
var warning = cljs.core.first(s__54000__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53997_$_iter__53999(cljs.core.rest(s__54000__$2)));
}
} else {
return null;
}
break;
}
});})(s__53998__$1,map__54005,map__54005__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info))
,null,null));
});})(s__53998__$1,map__54005,map__54005__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53997(cljs.core.rest(s__53998__$1)));
} else {
var G__54354 = cljs.core.rest(s__53998__$1);
s__53998__$1 = G__54354;
continue;
}
} else {
var G__54355 = cljs.core.rest(s__53998__$1);
s__53998__$1 = G__54355;
continue;
}
} else {
return null;
}
break;
}
});})(map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info))
,null,null));
});})(map__53994,map__53994__$1,sources,compiled,map__53990,map__53990__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__54014_54356 = cljs.core.seq(warnings);
var chunk__54015_54357 = null;
var count__54016_54358 = (0);
var i__54017_54359 = (0);
while(true){
if((i__54017_54359 < count__54016_54358)){
var map__54025_54360 = chunk__54015_54357.cljs$core$IIndexed$_nth$arity$2(null,i__54017_54359);
var map__54025_54361__$1 = (((((!((map__54025_54360 == null))))?(((((map__54025_54360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54025_54360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54025_54360):map__54025_54360);
var w_54362 = map__54025_54361__$1;
var msg_54363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54361__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54361__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54361__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025_54361__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54366)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54364),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54365),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54363__$1)].join(''));


var G__54367 = seq__54014_54356;
var G__54368 = chunk__54015_54357;
var G__54369 = count__54016_54358;
var G__54370 = (i__54017_54359 + (1));
seq__54014_54356 = G__54367;
chunk__54015_54357 = G__54368;
count__54016_54358 = G__54369;
i__54017_54359 = G__54370;
continue;
} else {
var temp__5804__auto___54371 = cljs.core.seq(seq__54014_54356);
if(temp__5804__auto___54371){
var seq__54014_54372__$1 = temp__5804__auto___54371;
if(cljs.core.chunked_seq_QMARK_(seq__54014_54372__$1)){
var c__4550__auto___54373 = cljs.core.chunk_first(seq__54014_54372__$1);
var G__54374 = cljs.core.chunk_rest(seq__54014_54372__$1);
var G__54375 = c__4550__auto___54373;
var G__54376 = cljs.core.count(c__4550__auto___54373);
var G__54377 = (0);
seq__54014_54356 = G__54374;
chunk__54015_54357 = G__54375;
count__54016_54358 = G__54376;
i__54017_54359 = G__54377;
continue;
} else {
var map__54029_54378 = cljs.core.first(seq__54014_54372__$1);
var map__54029_54379__$1 = (((((!((map__54029_54378 == null))))?(((((map__54029_54378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54029_54378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54029_54378):map__54029_54378);
var w_54380 = map__54029_54379__$1;
var msg_54381__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54029_54379__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54029_54379__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54029_54379__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54029_54379__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54384)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54382),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54383),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54381__$1)].join(''));


var G__54385 = cljs.core.next(seq__54014_54372__$1);
var G__54386 = null;
var G__54387 = (0);
var G__54388 = (0);
seq__54014_54356 = G__54385;
chunk__54015_54357 = G__54386;
count__54016_54358 = G__54387;
i__54017_54359 = G__54388;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info){
return (function (p__54036){
var map__54037 = p__54036;
var map__54037__$1 = (((((!((map__54037 == null))))?(((((map__54037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54037):map__54037);
var src = map__54037__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info){
return (function (p__54043){
var map__54044 = p__54043;
var map__54044__$1 = (((((!((map__54044 == null))))?(((((map__54044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54044):map__54044);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54044__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info){
return (function (p__54046){
var map__54047 = p__54046;
var map__54047__$1 = (((((!((map__54047 == null))))?(((((map__54047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54047):map__54047);
var rc = map__54047__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54047__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info){
return (function (p1__53988_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53988_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__53994,map__53994__$1,sources,compiled,warnings,map__53990,map__53990__$1,msg,info,reload_info))
);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__54061){
var map__54062 = p__54061;
var map__54062__$1 = (((((!((map__54062 == null))))?(((((map__54062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54062):map__54062);
var msg = map__54062__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54062__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__54064 = cljs.core.seq(updates);
var chunk__54066 = null;
var count__54067 = (0);
var i__54068 = (0);
while(true){
if((i__54068 < count__54067)){
var path = chunk__54066.cljs$core$IIndexed$_nth$arity$2(null,i__54068);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54106_54395 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54109_54396 = null;
var count__54110_54397 = (0);
var i__54111_54398 = (0);
while(true){
if((i__54111_54398 < count__54110_54397)){
var node_54401 = chunk__54109_54396.cljs$core$IIndexed$_nth$arity$2(null,i__54111_54398);
var path_match_54402 = shadow.cljs.devtools.client.browser.match_paths(node_54401.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54402)){
var new_link_54403 = (function (){var G__54117 = node_54401.cloneNode(true);
G__54117.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54402),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54117;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54402], 0));

goog.dom.insertSiblingAfter(new_link_54403,node_54401);

goog.dom.removeNode(node_54401);


var G__54404 = seq__54106_54395;
var G__54405 = chunk__54109_54396;
var G__54406 = count__54110_54397;
var G__54407 = (i__54111_54398 + (1));
seq__54106_54395 = G__54404;
chunk__54109_54396 = G__54405;
count__54110_54397 = G__54406;
i__54111_54398 = G__54407;
continue;
} else {
var G__54408 = seq__54106_54395;
var G__54409 = chunk__54109_54396;
var G__54410 = count__54110_54397;
var G__54411 = (i__54111_54398 + (1));
seq__54106_54395 = G__54408;
chunk__54109_54396 = G__54409;
count__54110_54397 = G__54410;
i__54111_54398 = G__54411;
continue;
}
} else {
var temp__5804__auto___54412 = cljs.core.seq(seq__54106_54395);
if(temp__5804__auto___54412){
var seq__54106_54413__$1 = temp__5804__auto___54412;
if(cljs.core.chunked_seq_QMARK_(seq__54106_54413__$1)){
var c__4550__auto___54414 = cljs.core.chunk_first(seq__54106_54413__$1);
var G__54415 = cljs.core.chunk_rest(seq__54106_54413__$1);
var G__54416 = c__4550__auto___54414;
var G__54417 = cljs.core.count(c__4550__auto___54414);
var G__54418 = (0);
seq__54106_54395 = G__54415;
chunk__54109_54396 = G__54416;
count__54110_54397 = G__54417;
i__54111_54398 = G__54418;
continue;
} else {
var node_54419 = cljs.core.first(seq__54106_54413__$1);
var path_match_54420 = shadow.cljs.devtools.client.browser.match_paths(node_54419.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54420)){
var new_link_54421 = (function (){var G__54118 = node_54419.cloneNode(true);
G__54118.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54420),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54118;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54420], 0));

goog.dom.insertSiblingAfter(new_link_54421,node_54419);

goog.dom.removeNode(node_54419);


var G__54422 = cljs.core.next(seq__54106_54413__$1);
var G__54423 = null;
var G__54424 = (0);
var G__54425 = (0);
seq__54106_54395 = G__54422;
chunk__54109_54396 = G__54423;
count__54110_54397 = G__54424;
i__54111_54398 = G__54425;
continue;
} else {
var G__54426 = cljs.core.next(seq__54106_54413__$1);
var G__54427 = null;
var G__54428 = (0);
var G__54429 = (0);
seq__54106_54395 = G__54426;
chunk__54109_54396 = G__54427;
count__54110_54397 = G__54428;
i__54111_54398 = G__54429;
continue;
}
}
} else {
}
}
break;
}


var G__54430 = seq__54064;
var G__54431 = chunk__54066;
var G__54432 = count__54067;
var G__54433 = (i__54068 + (1));
seq__54064 = G__54430;
chunk__54066 = G__54431;
count__54067 = G__54432;
i__54068 = G__54433;
continue;
} else {
var G__54434 = seq__54064;
var G__54435 = chunk__54066;
var G__54436 = count__54067;
var G__54437 = (i__54068 + (1));
seq__54064 = G__54434;
chunk__54066 = G__54435;
count__54067 = G__54436;
i__54068 = G__54437;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54064);
if(temp__5804__auto__){
var seq__54064__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54064__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54064__$1);
var G__54439 = cljs.core.chunk_rest(seq__54064__$1);
var G__54440 = c__4550__auto__;
var G__54441 = cljs.core.count(c__4550__auto__);
var G__54442 = (0);
seq__54064 = G__54439;
chunk__54066 = G__54440;
count__54067 = G__54441;
i__54068 = G__54442;
continue;
} else {
var path = cljs.core.first(seq__54064__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54126_54443 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54129_54444 = null;
var count__54130_54445 = (0);
var i__54131_54446 = (0);
while(true){
if((i__54131_54446 < count__54130_54445)){
var node_54447 = chunk__54129_54444.cljs$core$IIndexed$_nth$arity$2(null,i__54131_54446);
var path_match_54448 = shadow.cljs.devtools.client.browser.match_paths(node_54447.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54448)){
var new_link_54449 = (function (){var G__54160 = node_54447.cloneNode(true);
G__54160.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54448),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54160;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54448], 0));

goog.dom.insertSiblingAfter(new_link_54449,node_54447);

goog.dom.removeNode(node_54447);


var G__54450 = seq__54126_54443;
var G__54451 = chunk__54129_54444;
var G__54452 = count__54130_54445;
var G__54453 = (i__54131_54446 + (1));
seq__54126_54443 = G__54450;
chunk__54129_54444 = G__54451;
count__54130_54445 = G__54452;
i__54131_54446 = G__54453;
continue;
} else {
var G__54454 = seq__54126_54443;
var G__54455 = chunk__54129_54444;
var G__54456 = count__54130_54445;
var G__54457 = (i__54131_54446 + (1));
seq__54126_54443 = G__54454;
chunk__54129_54444 = G__54455;
count__54130_54445 = G__54456;
i__54131_54446 = G__54457;
continue;
}
} else {
var temp__5804__auto___54458__$1 = cljs.core.seq(seq__54126_54443);
if(temp__5804__auto___54458__$1){
var seq__54126_54460__$1 = temp__5804__auto___54458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54126_54460__$1)){
var c__4550__auto___54461 = cljs.core.chunk_first(seq__54126_54460__$1);
var G__54462 = cljs.core.chunk_rest(seq__54126_54460__$1);
var G__54463 = c__4550__auto___54461;
var G__54464 = cljs.core.count(c__4550__auto___54461);
var G__54465 = (0);
seq__54126_54443 = G__54462;
chunk__54129_54444 = G__54463;
count__54130_54445 = G__54464;
i__54131_54446 = G__54465;
continue;
} else {
var node_54467 = cljs.core.first(seq__54126_54460__$1);
var path_match_54471 = shadow.cljs.devtools.client.browser.match_paths(node_54467.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54471)){
var new_link_54472 = (function (){var G__54162 = node_54467.cloneNode(true);
G__54162.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54471),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54162;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54471], 0));

goog.dom.insertSiblingAfter(new_link_54472,node_54467);

goog.dom.removeNode(node_54467);


var G__54474 = cljs.core.next(seq__54126_54460__$1);
var G__54475 = null;
var G__54476 = (0);
var G__54477 = (0);
seq__54126_54443 = G__54474;
chunk__54129_54444 = G__54475;
count__54130_54445 = G__54476;
i__54131_54446 = G__54477;
continue;
} else {
var G__54478 = cljs.core.next(seq__54126_54460__$1);
var G__54479 = null;
var G__54480 = (0);
var G__54481 = (0);
seq__54126_54443 = G__54478;
chunk__54129_54444 = G__54479;
count__54130_54445 = G__54480;
i__54131_54446 = G__54481;
continue;
}
}
} else {
}
}
break;
}


var G__54482 = cljs.core.next(seq__54064__$1);
var G__54483 = null;
var G__54484 = (0);
var G__54485 = (0);
seq__54064 = G__54482;
chunk__54066 = G__54483;
count__54067 = G__54484;
i__54068 = G__54485;
continue;
} else {
var G__54486 = cljs.core.next(seq__54064__$1);
var G__54487 = null;
var G__54488 = (0);
var G__54489 = (0);
seq__54064 = G__54486;
chunk__54066 = G__54487;
count__54067 = G__54488;
i__54068 = G__54489;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__54192){
var map__54193 = p__54192;
var map__54193__$1 = (((((!((map__54193 == null))))?(((((map__54193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54193):map__54193);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54193__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__54193,map__54193__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__54193,map__54193__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__54212,done){
var map__54217 = p__54212;
var map__54217__$1 = (((((!((map__54217 == null))))?(((((map__54217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54217):map__54217);
var msg = map__54217__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54217__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54217__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54217__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__54217,map__54217__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__54227){
var map__54228 = p__54227;
var map__54228__$1 = (((((!((map__54228 == null))))?(((((map__54228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54228):map__54228);
var src = map__54228__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__54217,map__54217__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__54217,map__54217__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e54233){var e = e54233;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__54217,map__54217__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__54239,done){
var map__54240 = p__54239;
var map__54240__$1 = (((((!((map__54240 == null))))?(((((map__54240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54240):map__54240);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54240__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54240__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__54240,map__54240__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__54240,map__54240__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__54249){
var map__54250 = p__54249;
var map__54250__$1 = (((((!((map__54250 == null))))?(((((map__54250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54250):map__54250);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54250__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__54253,done){
var map__54254 = p__54253;
var map__54254__$1 = (((((!((map__54254 == null))))?(((((map__54254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54254):map__54254);
var msg = map__54254__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54254__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__54256_54501 = type;
var G__54256_54502__$1 = (((G__54256_54501 instanceof cljs.core.Keyword))?G__54256_54501.fqn:null);
switch (G__54256_54502__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__54282 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__54283 = ((function (G__54282){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__54282))
;
var G__54284 = "POST";
var G__54285 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__54286 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__54282,G__54283,G__54284,G__54285,G__54286);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5804__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e54290){var e = e54290;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5804__auto___54509 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto___54509)){
var s_54510 = temp__5804__auto___54509;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_54510.onclose = ((function (s_54510,temp__5804__auto___54509){
return (function (e){
return null;
});})(s_54510,temp__5804__auto___54509))
;

s_54510.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5804__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
