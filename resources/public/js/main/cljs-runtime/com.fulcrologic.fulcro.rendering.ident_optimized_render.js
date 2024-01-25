goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__56894 = app__$1;
var map__56894__$1 = cljs.core.__destructure_map(map__56894);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__56896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__56897 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__56896,G__56897) : com.fulcrologic.fulcro.components.computed.call(null,G__56896,G__56897));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,626296303,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__56899 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__56899) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__56899));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1099818473,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__56901 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__56902 = null;
var count__56903 = (0);
var i__56904 = (0);
while(true){
if((i__56904 < count__56903)){
var c = chunk__56902.cljs$core$IIndexed$_nth$arity$2(null,i__56904);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57016 = seq__56901;
var G__57017 = chunk__56902;
var G__57018 = count__56903;
var G__57019 = (i__56904 + (1));
seq__56901 = G__57016;
chunk__56902 = G__57017;
count__56903 = G__57018;
i__56904 = G__57019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56901);
if(temp__5804__auto__){
var seq__56901__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56901__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56901__$1);
var G__57020 = cljs.core.chunk_rest(seq__56901__$1);
var G__57021 = c__5568__auto__;
var G__57022 = cljs.core.count(c__5568__auto__);
var G__57023 = (0);
seq__56901 = G__57020;
chunk__56902 = G__57021;
count__56903 = G__57022;
i__56904 = G__57023;
continue;
} else {
var c = cljs.core.first(seq__56901__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57024 = cljs.core.next(seq__56901__$1);
var G__57025 = null;
var G__57026 = (0);
var G__57027 = (0);
seq__56901 = G__57024;
chunk__56902 = G__57025;
count__56903 = G__57026;
i__56904 = G__57027;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__56908 = app__$1;
var map__56908__$1 = cljs.core.__destructure_map(map__56908);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56908__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56909 = cljs.core.deref(runtime_atom);
var map__56909__$1 = cljs.core.__destructure_map(map__56909);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56909__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56910 = indexes;
var map__56910__$1 = cljs.core.__destructure_map(map__56910);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__56911 = cljs.core.seq(classes);
var chunk__56913 = null;
var count__56914 = (0);
var i__56915 = (0);
while(true){
if((i__56915 < count__56914)){
var class$ = chunk__56913.cljs$core$IIndexed$_nth$arity$2(null,i__56915);
var seq__56933_57029 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56935_57030 = null;
var count__56936_57031 = (0);
var i__56937_57032 = (0);
while(true){
if((i__56937_57032 < count__56936_57031)){
var component_57033 = chunk__56935_57030.cljs$core$IIndexed$_nth$arity$2(null,i__56937_57032);
var component_ident_57034 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57033) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57033));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57034,component_57033);


var G__57035 = seq__56933_57029;
var G__57036 = chunk__56935_57030;
var G__57037 = count__56936_57031;
var G__57038 = (i__56937_57032 + (1));
seq__56933_57029 = G__57035;
chunk__56935_57030 = G__57036;
count__56936_57031 = G__57037;
i__56937_57032 = G__57038;
continue;
} else {
var temp__5804__auto___57039 = cljs.core.seq(seq__56933_57029);
if(temp__5804__auto___57039){
var seq__56933_57040__$1 = temp__5804__auto___57039;
if(cljs.core.chunked_seq_QMARK_(seq__56933_57040__$1)){
var c__5568__auto___57041 = cljs.core.chunk_first(seq__56933_57040__$1);
var G__57042 = cljs.core.chunk_rest(seq__56933_57040__$1);
var G__57043 = c__5568__auto___57041;
var G__57044 = cljs.core.count(c__5568__auto___57041);
var G__57045 = (0);
seq__56933_57029 = G__57042;
chunk__56935_57030 = G__57043;
count__56936_57031 = G__57044;
i__56937_57032 = G__57045;
continue;
} else {
var component_57046 = cljs.core.first(seq__56933_57040__$1);
var component_ident_57048 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57046) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57046));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57048,component_57046);


var G__57049 = cljs.core.next(seq__56933_57040__$1);
var G__57050 = null;
var G__57051 = (0);
var G__57052 = (0);
seq__56933_57029 = G__57049;
chunk__56935_57030 = G__57050;
count__56936_57031 = G__57051;
i__56937_57032 = G__57052;
continue;
}
} else {
}
}
break;
}


var G__57053 = seq__56911;
var G__57054 = chunk__56913;
var G__57055 = count__56914;
var G__57056 = (i__56915 + (1));
seq__56911 = G__57053;
chunk__56913 = G__57054;
count__56914 = G__57055;
i__56915 = G__57056;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56911);
if(temp__5804__auto__){
var seq__56911__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56911__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56911__$1);
var G__57057 = cljs.core.chunk_rest(seq__56911__$1);
var G__57058 = c__5568__auto__;
var G__57059 = cljs.core.count(c__5568__auto__);
var G__57060 = (0);
seq__56911 = G__57057;
chunk__56913 = G__57058;
count__56914 = G__57059;
i__56915 = G__57060;
continue;
} else {
var class$ = cljs.core.first(seq__56911__$1);
var seq__56947_57061 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56950_57062 = null;
var count__56951_57063 = (0);
var i__56952_57064 = (0);
while(true){
if((i__56952_57064 < count__56951_57063)){
var component_57065 = chunk__56950_57062.cljs$core$IIndexed$_nth$arity$2(null,i__56952_57064);
var component_ident_57066 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57065) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57065));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57066,component_57065);


var G__57067 = seq__56947_57061;
var G__57068 = chunk__56950_57062;
var G__57069 = count__56951_57063;
var G__57070 = (i__56952_57064 + (1));
seq__56947_57061 = G__57067;
chunk__56950_57062 = G__57068;
count__56951_57063 = G__57069;
i__56952_57064 = G__57070;
continue;
} else {
var temp__5804__auto___57071__$1 = cljs.core.seq(seq__56947_57061);
if(temp__5804__auto___57071__$1){
var seq__56947_57072__$1 = temp__5804__auto___57071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56947_57072__$1)){
var c__5568__auto___57074 = cljs.core.chunk_first(seq__56947_57072__$1);
var G__57075 = cljs.core.chunk_rest(seq__56947_57072__$1);
var G__57076 = c__5568__auto___57074;
var G__57077 = cljs.core.count(c__5568__auto___57074);
var G__57078 = (0);
seq__56947_57061 = G__57075;
chunk__56950_57062 = G__57076;
count__56951_57063 = G__57077;
i__56952_57064 = G__57078;
continue;
} else {
var component_57079 = cljs.core.first(seq__56947_57072__$1);
var component_ident_57080 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57079) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57079));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57080,component_57079);


var G__57081 = cljs.core.next(seq__56947_57072__$1);
var G__57082 = null;
var G__57083 = (0);
var G__57084 = (0);
seq__56947_57061 = G__57081;
chunk__56950_57062 = G__57082;
count__56951_57063 = G__57083;
i__56952_57064 = G__57084;
continue;
}
} else {
}
}
break;
}


var G__57085 = cljs.core.next(seq__56911__$1);
var G__57086 = null;
var G__57087 = (0);
var G__57088 = (0);
seq__56911 = G__57085;
chunk__56913 = G__57086;
count__56914 = G__57087;
i__56915 = G__57088;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__56966 = app__$1;
var map__56966__$1 = cljs.core.__destructure_map(map__56966);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56967 = cljs.core.deref(runtime_atom);
var map__56967__$1 = cljs.core.__destructure_map(map__56967);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56968 = indexes;
var map__56968__$1 = cljs.core.__destructure_map(map__56968);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56963_SHARP_,p2__56964_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__56963_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__56964_SHARP_) : class__GT_components.call(null,p2__56964_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__56976 = app__$1;
var map__56976__$1 = cljs.core.__destructure_map(map__56976);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56976__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56976__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__56977 = cljs.core.deref(runtime_atom);
var map__56977__$1 = cljs.core.__destructure_map(map__56977);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__56978 = indexes;
var map__56978__$1 = cljs.core.__destructure_map(map__56978);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56978__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56978__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56978__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56978__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__56979 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__56979__$1 = cljs.core.__destructure_map(map__56979);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__56980_57091 = cljs.core.seq(limited_to_render);
var chunk__56982_57092 = null;
var count__56983_57093 = (0);
var i__56984_57094 = (0);
while(true){
if((i__56984_57094 < count__56983_57093)){
var c_57095 = chunk__56982_57092.cljs$core$IIndexed$_nth$arity$2(null,i__56984_57094);
var ident_57096 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57095) : com.fulcrologic.fulcro.components.get_ident.call(null,c_57095));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_57096,c_57095);


var G__57097 = seq__56980_57091;
var G__57098 = chunk__56982_57092;
var G__57099 = count__56983_57093;
var G__57100 = (i__56984_57094 + (1));
seq__56980_57091 = G__57097;
chunk__56982_57092 = G__57098;
count__56983_57093 = G__57099;
i__56984_57094 = G__57100;
continue;
} else {
var temp__5804__auto___57101 = cljs.core.seq(seq__56980_57091);
if(temp__5804__auto___57101){
var seq__56980_57102__$1 = temp__5804__auto___57101;
if(cljs.core.chunked_seq_QMARK_(seq__56980_57102__$1)){
var c__5568__auto___57103 = cljs.core.chunk_first(seq__56980_57102__$1);
var G__57104 = cljs.core.chunk_rest(seq__56980_57102__$1);
var G__57105 = c__5568__auto___57103;
var G__57106 = cljs.core.count(c__5568__auto___57103);
var G__57107 = (0);
seq__56980_57091 = G__57104;
chunk__56982_57092 = G__57105;
count__56983_57093 = G__57106;
i__56984_57094 = G__57107;
continue;
} else {
var c_57108 = cljs.core.first(seq__56980_57102__$1);
var ident_57109 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57108) : com.fulcrologic.fulcro.components.get_ident.call(null,c_57108));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_57109,c_57108);


var G__57110 = cljs.core.next(seq__56980_57102__$1);
var G__57111 = null;
var G__57112 = (0);
var G__57113 = (0);
seq__56980_57091 = G__57110;
chunk__56982_57092 = G__57111;
count__56983_57093 = G__57112;
i__56984_57094 = G__57113;
continue;
}
} else {
}
}
break;
}

var seq__56987 = cljs.core.seq(limited_idents);
var chunk__56988 = null;
var count__56989 = (0);
var i__56990 = (0);
while(true){
if((i__56990 < count__56989)){
var i = chunk__56988.cljs$core$IIndexed$_nth$arity$2(null,i__56990);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__57114 = seq__56987;
var G__57115 = chunk__56988;
var G__57116 = count__56989;
var G__57117 = (i__56990 + (1));
seq__56987 = G__57114;
chunk__56988 = G__57115;
count__56989 = G__57116;
i__56990 = G__57117;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56987);
if(temp__5804__auto__){
var seq__56987__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56987__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56987__$1);
var G__57118 = cljs.core.chunk_rest(seq__56987__$1);
var G__57119 = c__5568__auto__;
var G__57120 = cljs.core.count(c__5568__auto__);
var G__57121 = (0);
seq__56987 = G__57118;
chunk__56988 = G__57119;
count__56989 = G__57120;
i__56990 = G__57121;
continue;
} else {
var i = cljs.core.first(seq__56987__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__57122 = cljs.core.next(seq__56987__$1);
var G__57123 = null;
var G__57124 = (0);
var G__57125 = (0);
seq__56987 = G__57122;
chunk__56988 = G__57123;
count__56989 = G__57124;
i__56990 = G__57125;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__56991 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__56991__$1 = cljs.core.__destructure_map(map__56991);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56991__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56991__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__56993_57126 = cljs.core.seq(all_idents);
var chunk__56994_57127 = null;
var count__56995_57128 = (0);
var i__56996_57129 = (0);
while(true){
if((i__56996_57129 < count__56995_57128)){
var i_57130 = chunk__56994_57127.cljs$core$IIndexed$_nth$arity$2(null,i__56996_57129);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_57130);


var G__57131 = seq__56993_57126;
var G__57132 = chunk__56994_57127;
var G__57133 = count__56995_57128;
var G__57134 = (i__56996_57129 + (1));
seq__56993_57126 = G__57131;
chunk__56994_57127 = G__57132;
count__56995_57128 = G__57133;
i__56996_57129 = G__57134;
continue;
} else {
var temp__5804__auto___57135 = cljs.core.seq(seq__56993_57126);
if(temp__5804__auto___57135){
var seq__56993_57136__$1 = temp__5804__auto___57135;
if(cljs.core.chunked_seq_QMARK_(seq__56993_57136__$1)){
var c__5568__auto___57137 = cljs.core.chunk_first(seq__56993_57136__$1);
var G__57138 = cljs.core.chunk_rest(seq__56993_57136__$1);
var G__57139 = c__5568__auto___57137;
var G__57140 = cljs.core.count(c__5568__auto___57137);
var G__57141 = (0);
seq__56993_57126 = G__57138;
chunk__56994_57127 = G__57139;
count__56995_57128 = G__57140;
i__56996_57129 = G__57141;
continue;
} else {
var i_57142 = cljs.core.first(seq__56993_57136__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_57142);


var G__57143 = cljs.core.next(seq__56993_57136__$1);
var G__57144 = null;
var G__57145 = (0);
var G__57146 = (0);
seq__56993_57126 = G__57143;
chunk__56994_57127 = G__57144;
count__56995_57128 = G__57145;
i__56996_57129 = G__57146;
continue;
}
} else {
}
}
break;
}

var seq__56999 = cljs.core.seq(extra_to_force);
var chunk__57000 = null;
var count__57001 = (0);
var i__57002 = (0);
while(true){
if((i__57002 < count__57001)){
var c = chunk__57000.cljs$core$IIndexed$_nth$arity$2(null,i__57002);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__57148 = seq__56999;
var G__57149 = chunk__57000;
var G__57150 = count__57001;
var G__57151 = (i__57002 + (1));
seq__56999 = G__57148;
chunk__57000 = G__57149;
count__57001 = G__57150;
i__57002 = G__57151;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56999);
if(temp__5804__auto__){
var seq__56999__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56999__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56999__$1);
var G__57152 = cljs.core.chunk_rest(seq__56999__$1);
var G__57153 = c__5568__auto__;
var G__57154 = cljs.core.count(c__5568__auto__);
var G__57155 = (0);
seq__56999 = G__57152;
chunk__57000 = G__57153;
count__57001 = G__57154;
i__57002 = G__57155;
continue;
} else {
var c = cljs.core.first(seq__56999__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__57156 = cljs.core.next(seq__56999__$1);
var G__57157 = null;
var G__57158 = (0);
var G__57159 = (0);
seq__56999 = G__57156;
chunk__57000 = G__57157;
count__57001 = G__57158;
i__57002 = G__57159;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * DEPRECATED: Careful use of hooks/use-component will give a much more optimized experience, and async rendering in
 * React 18 may break with this renderer. Use at your own risk with React 18+.
 * 
 *   The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__57008 = arguments.length;
switch (G__57008) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__57010){
var map__57011 = p__57010;
var map__57011__$1 = cljs.core.__destructure_map(map__57011);
var options = map__57011__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57011__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57011__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e57012){var e = e57012;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-93948057,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
