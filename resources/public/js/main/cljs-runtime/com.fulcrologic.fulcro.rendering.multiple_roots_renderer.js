goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.scope(function(){
  com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 *   Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__68907 = arguments.length;
switch (G__68907) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__68909){
var map__68910 = p__68909;
var map__68910__$1 = cljs.core.__destructure_map(map__68910);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68910__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68910__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__68912 = app__$2;
var G__68912__$1 = (((G__68912 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__68912));
var G__68912__$2 = (((G__68912__$1 == null))?null:cljs.core.deref(G__68912__$1));
if((G__68912__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__68912__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__5043__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(initialized_QMARK_));
} else {
return and__5043__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__68914_69001 = app__$2;
var G__68915_69002 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__68914_69001,G__68915_69002) : schedule_render_BANG_.call(null,G__68914_69001,G__68915_69002));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,94,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-1564306591,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,-1970342317,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__68918 = arguments.length;
switch (G__68918) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__68920){
var map__68921 = p__68920;
var map__68921__$1 = cljs.core.__destructure_map(map__68921);
var options = map__68921__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68921__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,942740573,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,-848376427,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__68924 = app__$1;
var G__68924__$1 = (((G__68924 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__68924));
if((G__68924__$1 == null)){
return null;
} else {
return cljs.core.deref(G__68924__$1);
}
})();
var known_roots = (function (){var G__68925 = app__$1;
var G__68925__$1 = (((G__68925 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__68925));
var G__68925__$2 = (((G__68925__$1 == null))?null:cljs.core.deref(G__68925__$1));
if((G__68925__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__68925__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__68926 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__68928 = null;
var count__68929 = (0);
var i__68930 = (0);
while(true){
if((i__68930 < count__68929)){
var k = chunk__68928.cljs$core$IIndexed$_nth$arity$2(null,i__68930);
var cls_69007 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_69008 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_69007,state_map);
var root_props_69009 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_69008,state_map,state_map);
var seq__68946_69011 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__68947_69012 = null;
var count__68948_69013 = (0);
var i__68949_69014 = (0);
while(true){
if((i__68949_69014 < count__68948_69013)){
var root_69015 = chunk__68947_69012.cljs$core$IIndexed$_nth$arity$2(null,i__68949_69014);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_69015,root_props_69009);


var G__69016 = seq__68946_69011;
var G__69017 = chunk__68947_69012;
var G__69018 = count__68948_69013;
var G__69019 = (i__68949_69014 + (1));
seq__68946_69011 = G__69016;
chunk__68947_69012 = G__69017;
count__68948_69013 = G__69018;
i__68949_69014 = G__69019;
continue;
} else {
var temp__5804__auto___69020 = cljs.core.seq(seq__68946_69011);
if(temp__5804__auto___69020){
var seq__68946_69021__$1 = temp__5804__auto___69020;
if(cljs.core.chunked_seq_QMARK_(seq__68946_69021__$1)){
var c__5568__auto___69022 = cljs.core.chunk_first(seq__68946_69021__$1);
var G__69023 = cljs.core.chunk_rest(seq__68946_69021__$1);
var G__69024 = c__5568__auto___69022;
var G__69025 = cljs.core.count(c__5568__auto___69022);
var G__69026 = (0);
seq__68946_69011 = G__69023;
chunk__68947_69012 = G__69024;
count__68948_69013 = G__69025;
i__68949_69014 = G__69026;
continue;
} else {
var root_69027 = cljs.core.first(seq__68946_69021__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_69027,root_props_69009);


var G__69028 = cljs.core.next(seq__68946_69021__$1);
var G__69029 = null;
var G__69030 = (0);
var G__69031 = (0);
seq__68946_69011 = G__69028;
chunk__68947_69012 = G__69029;
count__68948_69013 = G__69030;
i__68949_69014 = G__69031;
continue;
}
} else {
}
}
break;
}


var G__69032 = seq__68926;
var G__69033 = chunk__68928;
var G__69034 = count__68929;
var G__69035 = (i__68930 + (1));
seq__68926 = G__69032;
chunk__68928 = G__69033;
count__68929 = G__69034;
i__68930 = G__69035;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68926);
if(temp__5804__auto__){
var seq__68926__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68926__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__68926__$1);
var G__69036 = cljs.core.chunk_rest(seq__68926__$1);
var G__69037 = c__5568__auto__;
var G__69038 = cljs.core.count(c__5568__auto__);
var G__69039 = (0);
seq__68926 = G__69036;
chunk__68928 = G__69037;
count__68929 = G__69038;
i__68930 = G__69039;
continue;
} else {
var k = cljs.core.first(seq__68926__$1);
var cls_69041 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_69042 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_69041,state_map);
var root_props_69043 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_69042,state_map,state_map);
var seq__68952_69044 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__68953_69045 = null;
var count__68954_69046 = (0);
var i__68955_69047 = (0);
while(true){
if((i__68955_69047 < count__68954_69046)){
var root_69048 = chunk__68953_69045.cljs$core$IIndexed$_nth$arity$2(null,i__68955_69047);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_69048,root_props_69043);


var G__69049 = seq__68952_69044;
var G__69050 = chunk__68953_69045;
var G__69051 = count__68954_69046;
var G__69052 = (i__68955_69047 + (1));
seq__68952_69044 = G__69049;
chunk__68953_69045 = G__69050;
count__68954_69046 = G__69051;
i__68955_69047 = G__69052;
continue;
} else {
var temp__5804__auto___69053__$1 = cljs.core.seq(seq__68952_69044);
if(temp__5804__auto___69053__$1){
var seq__68952_69054__$1 = temp__5804__auto___69053__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68952_69054__$1)){
var c__5568__auto___69055 = cljs.core.chunk_first(seq__68952_69054__$1);
var G__69056 = cljs.core.chunk_rest(seq__68952_69054__$1);
var G__69057 = c__5568__auto___69055;
var G__69058 = cljs.core.count(c__5568__auto___69055);
var G__69059 = (0);
seq__68952_69044 = G__69056;
chunk__68953_69045 = G__69057;
count__68954_69046 = G__69058;
i__68955_69047 = G__69059;
continue;
} else {
var root_69060 = cljs.core.first(seq__68952_69054__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_69060,root_props_69043);


var G__69061 = cljs.core.next(seq__68952_69054__$1);
var G__69062 = null;
var G__69063 = (0);
var G__69064 = (0);
seq__68952_69044 = G__69061;
chunk__68953_69045 = G__69062;
count__68954_69046 = G__69063;
i__68955_69047 = G__69064;
continue;
}
} else {
}
}
break;
}


var G__69065 = cljs.core.next(seq__68926__$1);
var G__69066 = null;
var G__69067 = (0);
var G__69068 = (0);
seq__68926 = G__69065;
chunk__68928 = G__69066;
count__68929 = G__69067;
i__68930 = G__69068;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__68959 = app__$1;
var map__68959__$1 = cljs.core.__destructure_map(map__68959);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68959__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__68960 = cljs.core.deref(runtime_atom);
var map__68960__$1 = cljs.core.__destructure_map(map__68960);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68960__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__68961 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__68961__$1 = cljs.core.__destructure_map(map__68961);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68961__$1,true);
var seq__68963 = cljs.core.seq(limited_idents);
var chunk__68964 = null;
var count__68965 = (0);
var i__68966 = (0);
while(true){
if((i__68966 < count__68965)){
var i = chunk__68964.cljs$core$IIndexed$_nth$arity$2(null,i__68966);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__69070 = seq__68963;
var G__69071 = chunk__68964;
var G__69072 = count__68965;
var G__69073 = (i__68966 + (1));
seq__68963 = G__69070;
chunk__68964 = G__69071;
count__68965 = G__69072;
i__68966 = G__69073;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68963);
if(temp__5804__auto__){
var seq__68963__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68963__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__68963__$1);
var G__69074 = cljs.core.chunk_rest(seq__68963__$1);
var G__69075 = c__5568__auto__;
var G__69076 = cljs.core.count(c__5568__auto__);
var G__69077 = (0);
seq__68963 = G__69074;
chunk__68964 = G__69075;
count__68965 = G__69076;
i__68966 = G__69077;
continue;
} else {
var i = cljs.core.first(seq__68963__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__69079 = cljs.core.next(seq__68963__$1);
var G__69080 = null;
var G__69081 = (0);
var G__69082 = (0);
seq__68963 = G__69079;
chunk__68964 = G__69080;
count__68965 = G__69081;
i__68966 = G__69082;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 * The top-level call for using this optimized render in your application.
 * 
 * If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 * This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 * (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 * will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 * ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 * events that should really only affect a known set of components (like the input field).
 * 
 * This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__68970 = arguments.length;
switch (G__68970) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__68973){
var map__68974 = p__68973;
var map__68974__$1 = cljs.core.__destructure_map(map__68974);
var options = map__68974__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68974__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68974__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e68975){var e = e68975;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,158,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1094389348,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object.extend(cls.prototype,module$node_modules$react$index.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__68881__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fulcro_app;
}
})();
var _STAR_app_STAR__orig_val__68981 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__68982 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__68983 = app__68881__auto__;
var _STAR_shared_STAR__temp_val__68984 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__68881__auto__);
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__68983);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__68984);

try{var state_map = (function (){var G__68985 = fulcro_app;
var G__68985__$1 = (((G__68985 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__68985));
if((G__68985__$1 == null)){
return null;
} else {
return cljs.core.deref(G__68985__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIRoot,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__68987 = props;
var G__68988 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__68987,G__68988) : ui_root.call(null,G__68987,G__68988));
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__68982);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__68981);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__68991 = arguments.length;
switch (G__68991) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var state_map = (function (){var G__68993 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__68993__$1 = (((G__68993 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__68993));
if((G__68993__$1 == null)){
return null;
} else {
return cljs.core.deref(G__68993__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__68995 = (function (){var or__5045__auto__ = props;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__68996 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__68995,G__68996) : ui_factory.call(null,G__68995,G__68996));
});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
