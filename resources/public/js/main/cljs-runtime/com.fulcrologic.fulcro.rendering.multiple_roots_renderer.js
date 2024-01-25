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
var G__57870 = arguments.length;
switch (G__57870) {
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

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__57872){
var map__57873 = p__57872;
var map__57873__$1 = cljs.core.__destructure_map(map__57873);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57873__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57873__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
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
var known_roots = (function (){var G__57875 = app__$2;
var G__57875__$1 = (((G__57875 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__57875));
var G__57875__$2 = (((G__57875__$1 == null))?null:cljs.core.deref(G__57875__$1));
if((G__57875__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__57875__$2);
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

var G__57876_57965 = app__$2;
var G__57877_57966 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__57876_57965,G__57877_57966) : schedule_render_BANG_.call(null,G__57876_57965,G__57877_57966));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,94,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-466526402,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,57938779,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__57881 = arguments.length;
switch (G__57881) {
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

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__57882){
var map__57883 = p__57882;
var map__57883__$1 = cljs.core.__destructure_map(map__57883);
var options = map__57883__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57883__$1,new cljs.core.Keyword(null,"app","app",-560961707));
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
}),null)),null,-2125263934,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,1065487371,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__57886 = app__$1;
var G__57886__$1 = (((G__57886 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__57886));
if((G__57886__$1 == null)){
return null;
} else {
return cljs.core.deref(G__57886__$1);
}
})();
var known_roots = (function (){var G__57888 = app__$1;
var G__57888__$1 = (((G__57888 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__57888));
var G__57888__$2 = (((G__57888__$1 == null))?null:cljs.core.deref(G__57888__$1));
if((G__57888__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__57888__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__57889 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__57891 = null;
var count__57892 = (0);
var i__57893 = (0);
while(true){
if((i__57893 < count__57892)){
var k = chunk__57891.cljs$core$IIndexed$_nth$arity$2(null,i__57893);
var cls_57971 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_57972 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_57971,state_map);
var root_props_57973 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_57972,state_map,state_map);
var seq__57908_57975 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__57909_57976 = null;
var count__57910_57977 = (0);
var i__57911_57978 = (0);
while(true){
if((i__57911_57978 < count__57910_57977)){
var root_57979 = chunk__57909_57976.cljs$core$IIndexed$_nth$arity$2(null,i__57911_57978);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_57979,root_props_57973);


var G__57980 = seq__57908_57975;
var G__57981 = chunk__57909_57976;
var G__57982 = count__57910_57977;
var G__57983 = (i__57911_57978 + (1));
seq__57908_57975 = G__57980;
chunk__57909_57976 = G__57981;
count__57910_57977 = G__57982;
i__57911_57978 = G__57983;
continue;
} else {
var temp__5804__auto___57984 = cljs.core.seq(seq__57908_57975);
if(temp__5804__auto___57984){
var seq__57908_57985__$1 = temp__5804__auto___57984;
if(cljs.core.chunked_seq_QMARK_(seq__57908_57985__$1)){
var c__5568__auto___57986 = cljs.core.chunk_first(seq__57908_57985__$1);
var G__57987 = cljs.core.chunk_rest(seq__57908_57985__$1);
var G__57988 = c__5568__auto___57986;
var G__57989 = cljs.core.count(c__5568__auto___57986);
var G__57990 = (0);
seq__57908_57975 = G__57987;
chunk__57909_57976 = G__57988;
count__57910_57977 = G__57989;
i__57911_57978 = G__57990;
continue;
} else {
var root_57991 = cljs.core.first(seq__57908_57985__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_57991,root_props_57973);


var G__57992 = cljs.core.next(seq__57908_57985__$1);
var G__57993 = null;
var G__57994 = (0);
var G__57995 = (0);
seq__57908_57975 = G__57992;
chunk__57909_57976 = G__57993;
count__57910_57977 = G__57994;
i__57911_57978 = G__57995;
continue;
}
} else {
}
}
break;
}


var G__57996 = seq__57889;
var G__57997 = chunk__57891;
var G__57998 = count__57892;
var G__57999 = (i__57893 + (1));
seq__57889 = G__57996;
chunk__57891 = G__57997;
count__57892 = G__57998;
i__57893 = G__57999;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57889);
if(temp__5804__auto__){
var seq__57889__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57889__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57889__$1);
var G__58000 = cljs.core.chunk_rest(seq__57889__$1);
var G__58001 = c__5568__auto__;
var G__58002 = cljs.core.count(c__5568__auto__);
var G__58003 = (0);
seq__57889 = G__58000;
chunk__57891 = G__58001;
count__57892 = G__58002;
i__57893 = G__58003;
continue;
} else {
var k = cljs.core.first(seq__57889__$1);
var cls_58005 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_58006 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_58005,state_map);
var root_props_58007 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_58006,state_map,state_map);
var seq__57915_58008 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__57916_58009 = null;
var count__57917_58010 = (0);
var i__57918_58011 = (0);
while(true){
if((i__57918_58011 < count__57917_58010)){
var root_58012 = chunk__57916_58009.cljs$core$IIndexed$_nth$arity$2(null,i__57918_58011);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_58012,root_props_58007);


var G__58013 = seq__57915_58008;
var G__58014 = chunk__57916_58009;
var G__58015 = count__57917_58010;
var G__58016 = (i__57918_58011 + (1));
seq__57915_58008 = G__58013;
chunk__57916_58009 = G__58014;
count__57917_58010 = G__58015;
i__57918_58011 = G__58016;
continue;
} else {
var temp__5804__auto___58017__$1 = cljs.core.seq(seq__57915_58008);
if(temp__5804__auto___58017__$1){
var seq__57915_58018__$1 = temp__5804__auto___58017__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57915_58018__$1)){
var c__5568__auto___58019 = cljs.core.chunk_first(seq__57915_58018__$1);
var G__58020 = cljs.core.chunk_rest(seq__57915_58018__$1);
var G__58021 = c__5568__auto___58019;
var G__58022 = cljs.core.count(c__5568__auto___58019);
var G__58023 = (0);
seq__57915_58008 = G__58020;
chunk__57916_58009 = G__58021;
count__57917_58010 = G__58022;
i__57918_58011 = G__58023;
continue;
} else {
var root_58024 = cljs.core.first(seq__57915_58018__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_58024,root_props_58007);


var G__58025 = cljs.core.next(seq__57915_58018__$1);
var G__58026 = null;
var G__58027 = (0);
var G__58028 = (0);
seq__57915_58008 = G__58025;
chunk__57916_58009 = G__58026;
count__57917_58010 = G__58027;
i__57918_58011 = G__58028;
continue;
}
} else {
}
}
break;
}


var G__58029 = cljs.core.next(seq__57889__$1);
var G__58030 = null;
var G__58031 = (0);
var G__58032 = (0);
seq__57889 = G__58029;
chunk__57891 = G__58030;
count__57892 = G__58031;
i__57893 = G__58032;
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
var map__57922 = app__$1;
var map__57922__$1 = cljs.core.__destructure_map(map__57922);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57922__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__57923 = cljs.core.deref(runtime_atom);
var map__57923__$1 = cljs.core.__destructure_map(map__57923);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57923__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__57925 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__57925__$1 = cljs.core.__destructure_map(map__57925);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57925__$1,true);
var seq__57926 = cljs.core.seq(limited_idents);
var chunk__57927 = null;
var count__57928 = (0);
var i__57929 = (0);
while(true){
if((i__57929 < count__57928)){
var i = chunk__57927.cljs$core$IIndexed$_nth$arity$2(null,i__57929);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__58034 = seq__57926;
var G__58035 = chunk__57927;
var G__58036 = count__57928;
var G__58037 = (i__57929 + (1));
seq__57926 = G__58034;
chunk__57927 = G__58035;
count__57928 = G__58036;
i__57929 = G__58037;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57926);
if(temp__5804__auto__){
var seq__57926__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57926__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57926__$1);
var G__58038 = cljs.core.chunk_rest(seq__57926__$1);
var G__58039 = c__5568__auto__;
var G__58040 = cljs.core.count(c__5568__auto__);
var G__58041 = (0);
seq__57926 = G__58038;
chunk__57927 = G__58039;
count__57928 = G__58040;
i__57929 = G__58041;
continue;
} else {
var i = cljs.core.first(seq__57926__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__58042 = cljs.core.next(seq__57926__$1);
var G__58043 = null;
var G__58044 = (0);
var G__58045 = (0);
seq__57926 = G__58042;
chunk__57927 = G__58043;
count__57928 = G__58044;
i__57929 = G__58045;
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
var G__57934 = arguments.length;
switch (G__57934) {
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

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__57936){
var map__57937 = p__57936;
var map__57937__$1 = cljs.core.__destructure_map(map__57937);
var options = map__57937__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57937__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57937__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e57938){var e = e57938;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,158,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,287500996,null);

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
var app__57842__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fulcro_app;
}
})();
var _STAR_app_STAR__orig_val__57944 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__57945 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__57946 = app__57842__auto__;
var _STAR_shared_STAR__temp_val__57947 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__57842__auto__);
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__57946);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57947);

try{var state_map = (function (){var G__57949 = fulcro_app;
var G__57949__$1 = (((G__57949 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__57949));
if((G__57949__$1 == null)){
return null;
} else {
return cljs.core.deref(G__57949__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIRoot,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__57950 = props;
var G__57951 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__57950,G__57951) : ui_root.call(null,G__57950,G__57951));
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57945);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__57944);
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
var G__57955 = arguments.length;
switch (G__57955) {
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
var state_map = (function (){var G__57957 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__57957__$1 = (((G__57957 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__57957));
if((G__57957__$1 == null)){
return null;
} else {
return cljs.core.deref(G__57957__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__57958 = (function (){var or__5045__auto__ = props;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__57959 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__57958,G__57959) : ui_factory.call(null,G__57958,G__57959));
});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
