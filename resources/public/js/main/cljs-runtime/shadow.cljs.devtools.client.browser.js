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
var len__4730__auto___56569 = arguments.length;
var i__4731__auto___56570 = (0);
while(true){
if((i__4731__auto___56570 < len__4730__auto___56569)){
args__4736__auto__.push((arguments[i__4731__auto___56570]));

var G__56571 = (i__4731__auto___56570 + (1));
i__4731__auto___56570 = G__56571;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56343){
var G__56344 = cljs.core.first(seq56343);
var seq56343__$1 = cljs.core.next(seq56343);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56344,seq56343__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__56349){
var map__56350 = p__56349;
var map__56350__$1 = (((((!((map__56350 == null))))?(((((map__56350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56350):map__56350);
var src = map__56350__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56350__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56350__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__56357 = cljs.core.seq(sources);
var chunk__56358 = null;
var count__56359 = (0);
var i__56360 = (0);
while(true){
if((i__56360 < count__56359)){
var map__56371 = chunk__56358.cljs$core$IIndexed$_nth$arity$2(null,i__56360);
var map__56371__$1 = (((((!((map__56371 == null))))?(((((map__56371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56371):map__56371);
var src = map__56371__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56373){var e_56577 = e56373;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56577);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56577.message)].join('')));
}

var G__56578 = seq__56357;
var G__56579 = chunk__56358;
var G__56580 = count__56359;
var G__56581 = (i__56360 + (1));
seq__56357 = G__56578;
chunk__56358 = G__56579;
count__56359 = G__56580;
i__56360 = G__56581;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56357);
if(temp__5804__auto__){
var seq__56357__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56357__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56357__$1);
var G__56583 = cljs.core.chunk_rest(seq__56357__$1);
var G__56584 = c__4550__auto__;
var G__56585 = cljs.core.count(c__4550__auto__);
var G__56586 = (0);
seq__56357 = G__56583;
chunk__56358 = G__56584;
count__56359 = G__56585;
i__56360 = G__56586;
continue;
} else {
var map__56377 = cljs.core.first(seq__56357__$1);
var map__56377__$1 = (((((!((map__56377 == null))))?(((((map__56377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56377):map__56377);
var src = map__56377__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56377__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56377__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56377__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56377__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56379){var e_56587 = e56379;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56587);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56587.message)].join('')));
}

var G__56588 = cljs.core.next(seq__56357__$1);
var G__56589 = null;
var G__56590 = (0);
var G__56591 = (0);
seq__56357 = G__56588;
chunk__56358 = G__56589;
count__56359 = G__56590;
i__56360 = G__56591;
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
var seq__56382 = cljs.core.seq(js_requires);
var chunk__56383 = null;
var count__56384 = (0);
var i__56385 = (0);
while(true){
if((i__56385 < count__56384)){
var js_ns = chunk__56383.cljs$core$IIndexed$_nth$arity$2(null,i__56385);
var require_str_56597 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56597);


var G__56598 = seq__56382;
var G__56599 = chunk__56383;
var G__56600 = count__56384;
var G__56601 = (i__56385 + (1));
seq__56382 = G__56598;
chunk__56383 = G__56599;
count__56384 = G__56600;
i__56385 = G__56601;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56382);
if(temp__5804__auto__){
var seq__56382__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56382__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56382__$1);
var G__56602 = cljs.core.chunk_rest(seq__56382__$1);
var G__56603 = c__4550__auto__;
var G__56604 = cljs.core.count(c__4550__auto__);
var G__56605 = (0);
seq__56382 = G__56602;
chunk__56383 = G__56603;
count__56384 = G__56604;
i__56385 = G__56605;
continue;
} else {
var js_ns = cljs.core.first(seq__56382__$1);
var require_str_56606 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56606);


var G__56607 = cljs.core.next(seq__56382__$1);
var G__56608 = null;
var G__56609 = (0);
var G__56610 = (0);
seq__56382 = G__56607;
chunk__56383 = G__56608;
count__56384 = G__56609;
i__56385 = G__56610;
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
var G__56386 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__56386) : callback.call(null,G__56386));
} else {
var G__56387 = shadow.cljs.devtools.client.env.files_url();
var G__56388 = ((function (G__56387){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__56387))
;
var G__56389 = "POST";
var G__56390 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__56391 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56387,G__56388,G__56389,G__56390,G__56391);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__56394){
var map__56395 = p__56394;
var map__56395__$1 = (((((!((map__56395 == null))))?(((((map__56395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56395):map__56395);
var msg = map__56395__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__56398 = info;
var map__56398__$1 = (((((!((map__56398 == null))))?(((((map__56398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56398):map__56398);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400(s__56401){
return (new cljs.core.LazySeq(null,((function (map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info){
return (function (){
var s__56401__$1 = s__56401;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56401__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__56406 = cljs.core.first(xs__6360__auto__);
var map__56406__$1 = (((((!((map__56406 == null))))?(((((map__56406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56406):map__56406);
var src = map__56406__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400_$_iter__56402(s__56403){
return (new cljs.core.LazySeq(null,((function (s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info){
return (function (){
var s__56403__$1 = s__56403;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__56403__$1);
if(temp__5804__auto____$1){
var s__56403__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56403__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56403__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56405 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56404 = (0);
while(true){
if((i__56404 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56404);
cljs.core.chunk_append(b__56405,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56618 = (i__56404 + (1));
i__56404 = G__56618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56405),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400_$_iter__56402(cljs.core.chunk_rest(s__56403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56405),null);
}
} else {
var warning = cljs.core.first(s__56403__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400_$_iter__56402(cljs.core.rest(s__56403__$2)));
}
} else {
return null;
}
break;
}
});})(s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info))
,null,null));
});})(s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400(cljs.core.rest(s__56401__$1)));
} else {
var G__56623 = cljs.core.rest(s__56401__$1);
s__56401__$1 = G__56623;
continue;
}
} else {
var G__56624 = cljs.core.rest(s__56401__$1);
s__56401__$1 = G__56624;
continue;
}
} else {
return null;
}
break;
}
});})(map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info))
,null,null));
});})(map__56398,map__56398__$1,sources,compiled,map__56395,map__56395__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__56411_56625 = cljs.core.seq(warnings);
var chunk__56412_56626 = null;
var count__56413_56627 = (0);
var i__56414_56628 = (0);
while(true){
if((i__56414_56628 < count__56413_56627)){
var map__56425_56629 = chunk__56412_56626.cljs$core$IIndexed$_nth$arity$2(null,i__56414_56628);
var map__56425_56630__$1 = (((((!((map__56425_56629 == null))))?(((((map__56425_56629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56425_56629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56425_56629):map__56425_56629);
var w_56631 = map__56425_56630__$1;
var msg_56632__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56630__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56630__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56630__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56630__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56635)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56633),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56634),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56632__$1)].join(''));


var G__56636 = seq__56411_56625;
var G__56637 = chunk__56412_56626;
var G__56638 = count__56413_56627;
var G__56639 = (i__56414_56628 + (1));
seq__56411_56625 = G__56636;
chunk__56412_56626 = G__56637;
count__56413_56627 = G__56638;
i__56414_56628 = G__56639;
continue;
} else {
var temp__5804__auto___56640 = cljs.core.seq(seq__56411_56625);
if(temp__5804__auto___56640){
var seq__56411_56641__$1 = temp__5804__auto___56640;
if(cljs.core.chunked_seq_QMARK_(seq__56411_56641__$1)){
var c__4550__auto___56642 = cljs.core.chunk_first(seq__56411_56641__$1);
var G__56643 = cljs.core.chunk_rest(seq__56411_56641__$1);
var G__56644 = c__4550__auto___56642;
var G__56645 = cljs.core.count(c__4550__auto___56642);
var G__56646 = (0);
seq__56411_56625 = G__56643;
chunk__56412_56626 = G__56644;
count__56413_56627 = G__56645;
i__56414_56628 = G__56646;
continue;
} else {
var map__56428_56647 = cljs.core.first(seq__56411_56641__$1);
var map__56428_56648__$1 = (((((!((map__56428_56647 == null))))?(((((map__56428_56647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56428_56647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56428_56647):map__56428_56647);
var w_56649 = map__56428_56648__$1;
var msg_56650__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56428_56648__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56428_56648__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56428_56648__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56428_56648__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56653)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56651),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56652),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56650__$1)].join(''));


var G__56655 = cljs.core.next(seq__56411_56641__$1);
var G__56656 = null;
var G__56657 = (0);
var G__56658 = (0);
seq__56411_56625 = G__56655;
chunk__56412_56626 = G__56656;
count__56413_56627 = G__56657;
i__56414_56628 = G__56658;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info){
return (function (p__56432){
var map__56434 = p__56432;
var map__56434__$1 = (((((!((map__56434 == null))))?(((((map__56434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56434):map__56434);
var src = map__56434__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info){
return (function (p__56438){
var map__56439 = p__56438;
var map__56439__$1 = (((((!((map__56439 == null))))?(((((map__56439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56439):map__56439);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56439__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info){
return (function (p__56441){
var map__56442 = p__56441;
var map__56442__$1 = (((((!((map__56442 == null))))?(((((map__56442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56442):map__56442);
var rc = map__56442__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56442__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info){
return (function (p1__56393_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56393_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__56398,map__56398__$1,sources,compiled,warnings,map__56395,map__56395__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__56452){
var map__56453 = p__56452;
var map__56453__$1 = (((((!((map__56453 == null))))?(((((map__56453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56453):map__56453);
var msg = map__56453__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56453__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56455 = cljs.core.seq(updates);
var chunk__56457 = null;
var count__56458 = (0);
var i__56459 = (0);
while(true){
if((i__56459 < count__56458)){
var path = chunk__56457.cljs$core$IIndexed$_nth$arity$2(null,i__56459);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56497_56665 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56500_56666 = null;
var count__56501_56667 = (0);
var i__56502_56668 = (0);
while(true){
if((i__56502_56668 < count__56501_56667)){
var node_56669 = chunk__56500_56666.cljs$core$IIndexed$_nth$arity$2(null,i__56502_56668);
var path_match_56670 = shadow.cljs.devtools.client.browser.match_paths(node_56669.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56670)){
var new_link_56671 = (function (){var G__56511 = node_56669.cloneNode(true);
G__56511.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56670),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56511;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56670], 0));

goog.dom.insertSiblingAfter(new_link_56671,node_56669);

goog.dom.removeNode(node_56669);


var G__56672 = seq__56497_56665;
var G__56673 = chunk__56500_56666;
var G__56674 = count__56501_56667;
var G__56675 = (i__56502_56668 + (1));
seq__56497_56665 = G__56672;
chunk__56500_56666 = G__56673;
count__56501_56667 = G__56674;
i__56502_56668 = G__56675;
continue;
} else {
var G__56676 = seq__56497_56665;
var G__56677 = chunk__56500_56666;
var G__56678 = count__56501_56667;
var G__56679 = (i__56502_56668 + (1));
seq__56497_56665 = G__56676;
chunk__56500_56666 = G__56677;
count__56501_56667 = G__56678;
i__56502_56668 = G__56679;
continue;
}
} else {
var temp__5804__auto___56680 = cljs.core.seq(seq__56497_56665);
if(temp__5804__auto___56680){
var seq__56497_56681__$1 = temp__5804__auto___56680;
if(cljs.core.chunked_seq_QMARK_(seq__56497_56681__$1)){
var c__4550__auto___56682 = cljs.core.chunk_first(seq__56497_56681__$1);
var G__56683 = cljs.core.chunk_rest(seq__56497_56681__$1);
var G__56684 = c__4550__auto___56682;
var G__56685 = cljs.core.count(c__4550__auto___56682);
var G__56686 = (0);
seq__56497_56665 = G__56683;
chunk__56500_56666 = G__56684;
count__56501_56667 = G__56685;
i__56502_56668 = G__56686;
continue;
} else {
var node_56687 = cljs.core.first(seq__56497_56681__$1);
var path_match_56688 = shadow.cljs.devtools.client.browser.match_paths(node_56687.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56688)){
var new_link_56689 = (function (){var G__56512 = node_56687.cloneNode(true);
G__56512.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56688),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56512;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56688], 0));

goog.dom.insertSiblingAfter(new_link_56689,node_56687);

goog.dom.removeNode(node_56687);


var G__56690 = cljs.core.next(seq__56497_56681__$1);
var G__56691 = null;
var G__56692 = (0);
var G__56693 = (0);
seq__56497_56665 = G__56690;
chunk__56500_56666 = G__56691;
count__56501_56667 = G__56692;
i__56502_56668 = G__56693;
continue;
} else {
var G__56694 = cljs.core.next(seq__56497_56681__$1);
var G__56695 = null;
var G__56696 = (0);
var G__56697 = (0);
seq__56497_56665 = G__56694;
chunk__56500_56666 = G__56695;
count__56501_56667 = G__56696;
i__56502_56668 = G__56697;
continue;
}
}
} else {
}
}
break;
}


var G__56698 = seq__56455;
var G__56699 = chunk__56457;
var G__56700 = count__56458;
var G__56701 = (i__56459 + (1));
seq__56455 = G__56698;
chunk__56457 = G__56699;
count__56458 = G__56700;
i__56459 = G__56701;
continue;
} else {
var G__56702 = seq__56455;
var G__56703 = chunk__56457;
var G__56704 = count__56458;
var G__56705 = (i__56459 + (1));
seq__56455 = G__56702;
chunk__56457 = G__56703;
count__56458 = G__56704;
i__56459 = G__56705;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56455);
if(temp__5804__auto__){
var seq__56455__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56455__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56455__$1);
var G__56706 = cljs.core.chunk_rest(seq__56455__$1);
var G__56707 = c__4550__auto__;
var G__56708 = cljs.core.count(c__4550__auto__);
var G__56709 = (0);
seq__56455 = G__56706;
chunk__56457 = G__56707;
count__56458 = G__56708;
i__56459 = G__56709;
continue;
} else {
var path = cljs.core.first(seq__56455__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56515_56710 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56518_56711 = null;
var count__56519_56712 = (0);
var i__56520_56713 = (0);
while(true){
if((i__56520_56713 < count__56519_56712)){
var node_56714 = chunk__56518_56711.cljs$core$IIndexed$_nth$arity$2(null,i__56520_56713);
var path_match_56715 = shadow.cljs.devtools.client.browser.match_paths(node_56714.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56715)){
var new_link_56716 = (function (){var G__56527 = node_56714.cloneNode(true);
G__56527.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56715),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56527;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56715], 0));

goog.dom.insertSiblingAfter(new_link_56716,node_56714);

goog.dom.removeNode(node_56714);


var G__56717 = seq__56515_56710;
var G__56718 = chunk__56518_56711;
var G__56719 = count__56519_56712;
var G__56720 = (i__56520_56713 + (1));
seq__56515_56710 = G__56717;
chunk__56518_56711 = G__56718;
count__56519_56712 = G__56719;
i__56520_56713 = G__56720;
continue;
} else {
var G__56721 = seq__56515_56710;
var G__56722 = chunk__56518_56711;
var G__56723 = count__56519_56712;
var G__56724 = (i__56520_56713 + (1));
seq__56515_56710 = G__56721;
chunk__56518_56711 = G__56722;
count__56519_56712 = G__56723;
i__56520_56713 = G__56724;
continue;
}
} else {
var temp__5804__auto___56725__$1 = cljs.core.seq(seq__56515_56710);
if(temp__5804__auto___56725__$1){
var seq__56515_56726__$1 = temp__5804__auto___56725__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56515_56726__$1)){
var c__4550__auto___56727 = cljs.core.chunk_first(seq__56515_56726__$1);
var G__56728 = cljs.core.chunk_rest(seq__56515_56726__$1);
var G__56729 = c__4550__auto___56727;
var G__56730 = cljs.core.count(c__4550__auto___56727);
var G__56731 = (0);
seq__56515_56710 = G__56728;
chunk__56518_56711 = G__56729;
count__56519_56712 = G__56730;
i__56520_56713 = G__56731;
continue;
} else {
var node_56732 = cljs.core.first(seq__56515_56726__$1);
var path_match_56733 = shadow.cljs.devtools.client.browser.match_paths(node_56732.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56733)){
var new_link_56735 = (function (){var G__56530 = node_56732.cloneNode(true);
G__56530.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56733),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56530;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56733], 0));

goog.dom.insertSiblingAfter(new_link_56735,node_56732);

goog.dom.removeNode(node_56732);


var G__56736 = cljs.core.next(seq__56515_56726__$1);
var G__56737 = null;
var G__56738 = (0);
var G__56739 = (0);
seq__56515_56710 = G__56736;
chunk__56518_56711 = G__56737;
count__56519_56712 = G__56738;
i__56520_56713 = G__56739;
continue;
} else {
var G__56740 = cljs.core.next(seq__56515_56726__$1);
var G__56741 = null;
var G__56742 = (0);
var G__56743 = (0);
seq__56515_56710 = G__56740;
chunk__56518_56711 = G__56741;
count__56519_56712 = G__56742;
i__56520_56713 = G__56743;
continue;
}
}
} else {
}
}
break;
}


var G__56744 = cljs.core.next(seq__56455__$1);
var G__56745 = null;
var G__56746 = (0);
var G__56747 = (0);
seq__56455 = G__56744;
chunk__56457 = G__56745;
count__56458 = G__56746;
i__56459 = G__56747;
continue;
} else {
var G__56748 = cljs.core.next(seq__56455__$1);
var G__56749 = null;
var G__56750 = (0);
var G__56751 = (0);
seq__56455 = G__56748;
chunk__56457 = G__56749;
count__56458 = G__56750;
i__56459 = G__56751;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__56536){
var map__56537 = p__56536;
var map__56537__$1 = (((((!((map__56537 == null))))?(((((map__56537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56537):map__56537);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__56537,map__56537__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__56537,map__56537__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__56539,done){
var map__56541 = p__56539;
var map__56541__$1 = (((((!((map__56541 == null))))?(((((map__56541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56541):map__56541);
var msg = map__56541__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56541,map__56541__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__56543){
var map__56544 = p__56543;
var map__56544__$1 = (((((!((map__56544 == null))))?(((((map__56544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56544):map__56544);
var src = map__56544__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__56541,map__56541__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__56541,map__56541__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e56546){var e = e56546;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__56541,map__56541__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__56547,done){
var map__56548 = p__56547;
var map__56548__$1 = (((((!((map__56548 == null))))?(((((map__56548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56548):map__56548);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__56548,map__56548__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__56548,map__56548__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__56550){
var map__56551 = p__56550;
var map__56551__$1 = (((((!((map__56551 == null))))?(((((map__56551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56551):map__56551);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56551__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56551__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__56553,done){
var map__56554 = p__56553;
var map__56554__$1 = (((((!((map__56554 == null))))?(((((map__56554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56554):map__56554);
var msg = map__56554__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56554__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__56556_56769 = type;
var G__56556_56770__$1 = (((G__56556_56769 instanceof cljs.core.Keyword))?G__56556_56769.fqn:null);
switch (G__56556_56770__$1) {
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
var G__56558 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__56559 = ((function (G__56558){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__56558))
;
var G__56560 = "POST";
var G__56561 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__56562 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56558,G__56559,G__56560,G__56561,G__56562);
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
}catch (e56563){var e = e56563;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5804__auto___56792 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto___56792)){
var s_56793 = temp__5804__auto___56792;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_56793.onclose = ((function (s_56793,temp__5804__auto___56792){
return (function (e){
return null;
});})(s_56793,temp__5804__auto___56792))
;

s_56793.close();

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
