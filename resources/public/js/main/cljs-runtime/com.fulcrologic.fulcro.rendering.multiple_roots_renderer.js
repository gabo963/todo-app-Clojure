goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.raw.application');
goog.require('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('goog.object');
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
var G__61721 = arguments.length;
switch (G__61721) {
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

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__61723){
var map__61724 = p__61723;
var map__61724__$1 = (((((!((map__61724 == null))))?(((((map__61724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61724):map__61724);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61724__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61724__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__4131__auto__ = app__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
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
var known_roots = (function (){var G__61729 = app__$2;
var G__61729__$1 = (((G__61729 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__61729));
var G__61729__$2 = (((G__61729__$1 == null))?null:cljs.core.deref(G__61729__$1));
if((G__61729__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__61729__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4120__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4120__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__61730_61841 = app__$2;
var G__61731_61842 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__61730_61841,G__61731_61842) : schedule_render_BANG_.call(null,G__61730_61841,G__61731_61842));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,94,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (class$,k,initialize_state_BANG_,schedule_render_BANG_,known_roots,initialized_QMARK_,app__$2,map__61724,map__61724__$1,app__$1,initialize_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
});})(class$,k,initialize_state_BANG_,schedule_render_BANG_,known_roots,initialized_QMARK_,app__$2,map__61724,map__61724__$1,app__$1,initialize_QMARK_))
,null)),null,47117563,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (app__$2,map__61724,map__61724__$1,app__$1,initialize_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
});})(app__$2,map__61724,map__61724__$1,app__$1,initialize_QMARK_))
,null)),null,-1389403391,null);
}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__61736 = arguments.length;
switch (G__61736) {
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

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__61737){
var map__61739 = p__61737;
var map__61739__$1 = (((((!((map__61739 == null))))?(((((map__61739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61739):map__61739);
var options = map__61739__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__4131__auto__ = app__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (class$,k,app__$2,map__61739,map__61739__$1,options,app__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
});})(class$,k,app__$2,map__61739,map__61739__$1,options,app__$1))
,null)),null,794866771,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (app__$2,map__61739,map__61739__$1,options,app__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
});})(app__$2,map__61739,map__61739__$1,options,app__$1))
,null)),null,862280264,null);
}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__61743 = app__$1;
var G__61743__$1 = (((G__61743 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__61743));
if((G__61743__$1 == null)){
return null;
} else {
return cljs.core.deref(G__61743__$1);
}
})();
var known_roots = (function (){var G__61744 = app__$1;
var G__61744__$1 = (((G__61744 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__61744));
var G__61744__$2 = (((G__61744__$1 == null))?null:cljs.core.deref(G__61744__$1));
if((G__61744__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__61744__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__61746 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__61749 = null;
var count__61750 = (0);
var i__61751 = (0);
while(true){
if((i__61751 < count__61750)){
var k = chunk__61749.cljs$core$IIndexed$_nth$arity$2(null,i__61751);
var cls_61851 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_61852 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_61851,state_map);
var root_props_61853 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_61852,state_map,state_map);
var seq__61770_61854 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__61771_61855 = null;
var count__61772_61856 = (0);
var i__61773_61857 = (0);
while(true){
if((i__61773_61857 < count__61772_61856)){
var root_61858 = chunk__61771_61855.cljs$core$IIndexed$_nth$arity$2(null,i__61773_61857);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_61858,root_props_61853);


var G__61859 = seq__61770_61854;
var G__61860 = chunk__61771_61855;
var G__61861 = count__61772_61856;
var G__61862 = (i__61773_61857 + (1));
seq__61770_61854 = G__61859;
chunk__61771_61855 = G__61860;
count__61772_61856 = G__61861;
i__61773_61857 = G__61862;
continue;
} else {
var temp__5804__auto___61864 = cljs.core.seq(seq__61770_61854);
if(temp__5804__auto___61864){
var seq__61770_61866__$1 = temp__5804__auto___61864;
if(cljs.core.chunked_seq_QMARK_(seq__61770_61866__$1)){
var c__4550__auto___61867 = cljs.core.chunk_first(seq__61770_61866__$1);
var G__61868 = cljs.core.chunk_rest(seq__61770_61866__$1);
var G__61869 = c__4550__auto___61867;
var G__61870 = cljs.core.count(c__4550__auto___61867);
var G__61871 = (0);
seq__61770_61854 = G__61868;
chunk__61771_61855 = G__61869;
count__61772_61856 = G__61870;
i__61773_61857 = G__61871;
continue;
} else {
var root_61872 = cljs.core.first(seq__61770_61866__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_61872,root_props_61853);


var G__61873 = cljs.core.next(seq__61770_61866__$1);
var G__61874 = null;
var G__61875 = (0);
var G__61876 = (0);
seq__61770_61854 = G__61873;
chunk__61771_61855 = G__61874;
count__61772_61856 = G__61875;
i__61773_61857 = G__61876;
continue;
}
} else {
}
}
break;
}


var G__61877 = seq__61746;
var G__61878 = chunk__61749;
var G__61879 = count__61750;
var G__61880 = (i__61751 + (1));
seq__61746 = G__61877;
chunk__61749 = G__61878;
count__61750 = G__61879;
i__61751 = G__61880;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61746);
if(temp__5804__auto__){
var seq__61746__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61746__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61746__$1);
var G__61881 = cljs.core.chunk_rest(seq__61746__$1);
var G__61882 = c__4550__auto__;
var G__61883 = cljs.core.count(c__4550__auto__);
var G__61884 = (0);
seq__61746 = G__61881;
chunk__61749 = G__61882;
count__61750 = G__61883;
i__61751 = G__61884;
continue;
} else {
var k = cljs.core.first(seq__61746__$1);
var cls_61886 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_61887 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_61886,state_map);
var root_props_61888 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_61887,state_map,state_map);
var seq__61777_61889 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__61778_61890 = null;
var count__61779_61891 = (0);
var i__61780_61892 = (0);
while(true){
if((i__61780_61892 < count__61779_61891)){
var root_61893 = chunk__61778_61890.cljs$core$IIndexed$_nth$arity$2(null,i__61780_61892);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_61893,root_props_61888);


var G__61894 = seq__61777_61889;
var G__61895 = chunk__61778_61890;
var G__61896 = count__61779_61891;
var G__61897 = (i__61780_61892 + (1));
seq__61777_61889 = G__61894;
chunk__61778_61890 = G__61895;
count__61779_61891 = G__61896;
i__61780_61892 = G__61897;
continue;
} else {
var temp__5804__auto___61898__$1 = cljs.core.seq(seq__61777_61889);
if(temp__5804__auto___61898__$1){
var seq__61777_61899__$1 = temp__5804__auto___61898__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61777_61899__$1)){
var c__4550__auto___61900 = cljs.core.chunk_first(seq__61777_61899__$1);
var G__61902 = cljs.core.chunk_rest(seq__61777_61899__$1);
var G__61903 = c__4550__auto___61900;
var G__61904 = cljs.core.count(c__4550__auto___61900);
var G__61905 = (0);
seq__61777_61889 = G__61902;
chunk__61778_61890 = G__61903;
count__61779_61891 = G__61904;
i__61780_61892 = G__61905;
continue;
} else {
var root_61907 = cljs.core.first(seq__61777_61899__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_61907,root_props_61888);


var G__61908 = cljs.core.next(seq__61777_61899__$1);
var G__61909 = null;
var G__61910 = (0);
var G__61911 = (0);
seq__61777_61889 = G__61908;
chunk__61778_61890 = G__61909;
count__61779_61891 = G__61910;
i__61780_61892 = G__61911;
continue;
}
} else {
}
}
break;
}


var G__61912 = cljs.core.next(seq__61746__$1);
var G__61913 = null;
var G__61914 = (0);
var G__61915 = (0);
seq__61746 = G__61912;
chunk__61749 = G__61913;
count__61750 = G__61914;
i__61751 = G__61915;
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
var map__61785 = app__$1;
var map__61785__$1 = (((((!((map__61785 == null))))?(((((map__61785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61785):map__61785);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61785__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__61786 = cljs.core.deref(runtime_atom);
var map__61786__$1 = (((((!((map__61786 == null))))?(((((map__61786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61786):map__61786);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61786__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__61791 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__61791__$1 = (((((!((map__61791 == null))))?(((((map__61791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61791):map__61791);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61791__$1,true);
var seq__61793 = cljs.core.seq(limited_idents);
var chunk__61794 = null;
var count__61795 = (0);
var i__61796 = (0);
while(true){
if((i__61796 < count__61795)){
var i = chunk__61794.cljs$core$IIndexed$_nth$arity$2(null,i__61796);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__61917 = seq__61793;
var G__61918 = chunk__61794;
var G__61919 = count__61795;
var G__61920 = (i__61796 + (1));
seq__61793 = G__61917;
chunk__61794 = G__61918;
count__61795 = G__61919;
i__61796 = G__61920;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61793);
if(temp__5804__auto__){
var seq__61793__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61793__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61793__$1);
var G__61923 = cljs.core.chunk_rest(seq__61793__$1);
var G__61924 = c__4550__auto__;
var G__61925 = cljs.core.count(c__4550__auto__);
var G__61926 = (0);
seq__61793 = G__61923;
chunk__61794 = G__61924;
count__61795 = G__61925;
i__61796 = G__61926;
continue;
} else {
var i = cljs.core.first(seq__61793__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__61927 = cljs.core.next(seq__61793__$1);
var G__61928 = null;
var G__61929 = (0);
var G__61930 = (0);
seq__61793 = G__61927;
chunk__61794 = G__61928;
count__61795 = G__61929;
i__61796 = G__61930;
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
var G__61802 = arguments.length;
switch (G__61802) {
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

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__61804){
var map__61806 = p__61804;
var map__61806__$1 = (((((!((map__61806 == null))))?(((((map__61806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61806):map__61806);
var options = map__61806__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61806__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61806__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e61808){var e = e61808;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,158,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__61806,map__61806__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__61806,map__61806__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,-2106569277,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2;

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
var G__61813_61935 = cls.prototype;
var G__61814_61936 = module$node_modules$react$index.Component.prototype;
var G__61815_61937 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),((function (G__61813_61935,G__61814_61936,cls,ui_root){
return (function (){
return false;
});})(G__61813_61935,G__61814_61936,cls,ui_root))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (G__61813_61935,G__61814_61936,cls,ui_root){
return (function (){
var this$ = this;
var js_props = this$.props;
var app__61690__auto__ = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro_app;
}
})();
var _STAR_app_STAR__orig_val__61817 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__61818 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__61819 = app__61690__auto__;
var _STAR_shared_STAR__temp_val__61820 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__61690__auto__);
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__61819;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__61820;

try{var state_map = (function (){var G__61823 = fulcro_app;
var G__61823__$1 = (((G__61823 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__61823));
if((G__61823__$1 == null)){
return null;
} else {
return cljs.core.deref(G__61823__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIRoot,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__61824 = props;
var G__61825 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__61824,G__61825) : ui_root.call(null,G__61824,G__61825));
}finally {com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__61818;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__61817;
}});})(G__61813_61935,G__61814_61936,cls,ui_root))
], null));
goog.object.extend(G__61813_61935,G__61814_61936,G__61815_61937);

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
var G__61828 = arguments.length;
switch (G__61828) {
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

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = ((function (constructor$,ui_factory){
return (function (this$){
var state_map = (function (){var G__61831 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__61831__$1 = (((G__61831 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__61831));
if((G__61831__$1 == null)){
return null;
} else {
return cljs.core.deref(G__61831__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__61833 = (function (){var or__4131__auto__ = props;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__61834 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__61833,G__61834) : ui_factory.call(null,G__61833,G__61834));
});})(constructor$,ui_factory))
;
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),((function (constructor$,ui_factory,render){
return (function (_,___$1,___$2){
return false;
});})(constructor$,ui_factory,render))
,new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
});

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
