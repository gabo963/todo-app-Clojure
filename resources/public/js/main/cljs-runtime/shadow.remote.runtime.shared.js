goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__58997,res){
var map__58999 = p__58997;
var map__58999__$1 = cljs.core.__destructure_map(map__58999);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58999__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58999__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__59000 = res;
var G__59000__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59000,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__59000);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59000__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__59000__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__59003 = arguments.length;
switch (G__59003) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__59007,msg,handlers,timeout_after_ms){
var map__59008 = p__59007;
var map__59008__$1 = cljs.core.__destructure_map(map__59008);
var runtime = map__59008__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59008__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59125 = arguments.length;
var i__5770__auto___59126 = (0);
while(true){
if((i__5770__auto___59126 < len__5769__auto___59125)){
args__5775__auto__.push((arguments[i__5770__auto___59126]));

var G__59127 = (i__5770__auto___59126 + (1));
i__5770__auto___59126 = G__59127;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59025,ev,args){
var map__59026 = p__59025;
var map__59026__$1 = cljs.core.__destructure_map(map__59026);
var runtime = map__59026__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59026__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__59028 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59031 = null;
var count__59032 = (0);
var i__59033 = (0);
while(true){
if((i__59033 < count__59032)){
var ext = chunk__59031.cljs$core$IIndexed$_nth$arity$2(null,i__59033);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__59131 = seq__59028;
var G__59132 = chunk__59031;
var G__59133 = count__59032;
var G__59134 = (i__59033 + (1));
seq__59028 = G__59131;
chunk__59031 = G__59132;
count__59032 = G__59133;
i__59033 = G__59134;
continue;
} else {
var G__59135 = seq__59028;
var G__59136 = chunk__59031;
var G__59137 = count__59032;
var G__59138 = (i__59033 + (1));
seq__59028 = G__59135;
chunk__59031 = G__59136;
count__59032 = G__59137;
i__59033 = G__59138;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__59028);
if(temp__5804__auto__){
var seq__59028__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59028__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__59028__$1);
var G__59139 = cljs.core.chunk_rest(seq__59028__$1);
var G__59140 = c__5568__auto__;
var G__59141 = cljs.core.count(c__5568__auto__);
var G__59142 = (0);
seq__59028 = G__59139;
chunk__59031 = G__59140;
count__59032 = G__59141;
i__59033 = G__59142;
continue;
} else {
var ext = cljs.core.first(seq__59028__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__59146 = cljs.core.next(seq__59028__$1);
var G__59147 = null;
var G__59148 = (0);
var G__59149 = (0);
seq__59028 = G__59146;
chunk__59031 = G__59147;
count__59032 = G__59148;
i__59033 = G__59149;
continue;
} else {
var G__59151 = cljs.core.next(seq__59028__$1);
var G__59152 = null;
var G__59153 = (0);
var G__59154 = (0);
seq__59028 = G__59151;
chunk__59031 = G__59152;
count__59032 = G__59153;
i__59033 = G__59154;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq59014){
var G__59015 = cljs.core.first(seq59014);
var seq59014__$1 = cljs.core.next(seq59014);
var G__59016 = cljs.core.first(seq59014__$1);
var seq59014__$2 = cljs.core.next(seq59014__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59015,G__59016,seq59014__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59055,p__59056){
var map__59057 = p__59055;
var map__59057__$1 = cljs.core.__destructure_map(map__59057);
var runtime = map__59057__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59057__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59058 = p__59056;
var map__59058__$1 = cljs.core.__destructure_map(map__59058);
var msg = map__59058__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59058__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__59064 = cljs.core.deref(state_ref);
var map__59064__$1 = cljs.core.__destructure_map(map__59064);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__59068){
var map__59069 = p__59068;
var map__59069__$1 = cljs.core.__destructure_map(map__59069);
var runtime = map__59069__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59069__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59072,msg){
var map__59073 = p__59072;
var map__59073__$1 = cljs.core.__destructure_map(map__59073);
var runtime = map__59073__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59073__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59076,key,p__59077){
var map__59078 = p__59076;
var map__59078__$1 = cljs.core.__destructure_map(map__59078);
var state = map__59078__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59078__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59079 = p__59077;
var map__59079__$1 = cljs.core.__destructure_map(map__59079);
var spec = map__59079__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59082,key,spec){
var map__59083 = p__59082;
var map__59083__$1 = cljs.core.__destructure_map(map__59083);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59083__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59084_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59084_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59085_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59085_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59086_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59086_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__59087_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__59087_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59088_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59088_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59094,key){
var map__59095 = p__59094;
var map__59095__$1 = cljs.core.__destructure_map(map__59095);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__59100,msg){
var map__59101 = p__59100;
var map__59101__$1 = cljs.core.__destructure_map(map__59101);
var runtime = map__59101__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59101__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59102,p__59103){
var map__59104 = p__59102;
var map__59104__$1 = cljs.core.__destructure_map(map__59104);
var runtime = map__59104__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59104__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59105 = p__59103;
var map__59105__$1 = cljs.core.__destructure_map(map__59105);
var msg = map__59105__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59106 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59108 = null;
var count__59109 = (0);
var i__59110 = (0);
while(true){
if((i__59110 < count__59109)){
var map__59114 = chunk__59108.cljs$core$IIndexed$_nth$arity$2(null,i__59110);
var map__59114__$1 = cljs.core.__destructure_map(map__59114);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59160 = seq__59106;
var G__59161 = chunk__59108;
var G__59162 = count__59109;
var G__59163 = (i__59110 + (1));
seq__59106 = G__59160;
chunk__59108 = G__59161;
count__59109 = G__59162;
i__59110 = G__59163;
continue;
} else {
var G__59164 = seq__59106;
var G__59165 = chunk__59108;
var G__59166 = count__59109;
var G__59167 = (i__59110 + (1));
seq__59106 = G__59164;
chunk__59108 = G__59165;
count__59109 = G__59166;
i__59110 = G__59167;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__59106);
if(temp__5804__auto__){
var seq__59106__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59106__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__59106__$1);
var G__59168 = cljs.core.chunk_rest(seq__59106__$1);
var G__59169 = c__5568__auto__;
var G__59170 = cljs.core.count(c__5568__auto__);
var G__59171 = (0);
seq__59106 = G__59168;
chunk__59108 = G__59169;
count__59109 = G__59170;
i__59110 = G__59171;
continue;
} else {
var map__59115 = cljs.core.first(seq__59106__$1);
var map__59115__$1 = cljs.core.__destructure_map(map__59115);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59115__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59172 = cljs.core.next(seq__59106__$1);
var G__59173 = null;
var G__59174 = (0);
var G__59175 = (0);
seq__59106 = G__59172;
chunk__59108 = G__59173;
count__59109 = G__59174;
i__59110 = G__59175;
continue;
} else {
var G__59176 = cljs.core.next(seq__59106__$1);
var G__59177 = null;
var G__59178 = (0);
var G__59179 = (0);
seq__59106 = G__59176;
chunk__59108 = G__59177;
count__59109 = G__59178;
i__59110 = G__59179;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
