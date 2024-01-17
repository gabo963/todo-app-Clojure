goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
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
if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return ident;
} else {
return and__4120__auto__;
}
})())){
var map__62843 = app__$1;
var map__62843__$1 = (((((!((map__62843 == null))))?(((((map__62843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62843):map__62843);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62843__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__62843,map__62843__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
});})(map__62843,map__62843__$1,state_atom,state_map,query,q,data_tree,new_props))
,null)),null,45227718);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState(((function (map__62843,map__62843__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (s){
return ({"fulcro$value": new_props});
});})(map__62843,map__62843__$1,state_atom,state_map,query,q,data_tree,new_props))
);
} else {
return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident. If that is your application root,","consider moving that changing state to a child component."], null);
}),null)),null,-840590575);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__62855 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__62856 = null;
var count__62857 = (0);
var i__62858 = (0);
while(true){
if((i__62858 < count__62857)){
var c = chunk__62856.cljs$core$IIndexed$_nth$arity$2(null,i__62858);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__63036 = seq__62855;
var G__63037 = chunk__62856;
var G__63038 = count__62857;
var G__63039 = (i__62858 + (1));
seq__62855 = G__63036;
chunk__62856 = G__63037;
count__62857 = G__63038;
i__62858 = G__63039;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62855);
if(temp__5804__auto__){
var seq__62855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62855__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62855__$1);
var G__63040 = cljs.core.chunk_rest(seq__62855__$1);
var G__63041 = c__4550__auto__;
var G__63042 = cljs.core.count(c__4550__auto__);
var G__63043 = (0);
seq__62855 = G__63040;
chunk__62856 = G__63041;
count__62857 = G__63042;
i__62858 = G__63043;
continue;
} else {
var c = cljs.core.first(seq__62855__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__63044 = cljs.core.next(seq__62855__$1);
var G__63045 = null;
var G__63046 = (0);
var G__63047 = (0);
seq__62855 = G__63044;
chunk__62856 = G__63045;
count__62857 = G__63046;
i__62858 = G__63047;
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

var map__62865 = app__$1;
var map__62865__$1 = (((((!((map__62865 == null))))?(((((map__62865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62865):map__62865);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62865__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62866 = cljs.core.deref(runtime_atom);
var map__62866__$1 = (((((!((map__62866 == null))))?(((((map__62866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62866):map__62866);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62866__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62867 = indexes;
var map__62867__$1 = (((((!((map__62867 == null))))?(((((map__62867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62867):map__62867);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62867__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__62875 = cljs.core.seq(classes);
var chunk__62876 = null;
var count__62877 = (0);
var i__62878 = (0);
while(true){
if((i__62878 < count__62877)){
var class$ = chunk__62876.cljs$core$IIndexed$_nth$arity$2(null,i__62878);
var seq__62894_63049 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62896_63050 = null;
var count__62897_63051 = (0);
var i__62898_63052 = (0);
while(true){
if((i__62898_63052 < count__62897_63051)){
var component_63053 = chunk__62896_63050.cljs$core$IIndexed$_nth$arity$2(null,i__62898_63052);
var component_ident_63054 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_63053);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_63054,component_63053);


var G__63055 = seq__62894_63049;
var G__63056 = chunk__62896_63050;
var G__63057 = count__62897_63051;
var G__63058 = (i__62898_63052 + (1));
seq__62894_63049 = G__63055;
chunk__62896_63050 = G__63056;
count__62897_63051 = G__63057;
i__62898_63052 = G__63058;
continue;
} else {
var temp__5804__auto___63059 = cljs.core.seq(seq__62894_63049);
if(temp__5804__auto___63059){
var seq__62894_63060__$1 = temp__5804__auto___63059;
if(cljs.core.chunked_seq_QMARK_(seq__62894_63060__$1)){
var c__4550__auto___63061 = cljs.core.chunk_first(seq__62894_63060__$1);
var G__63062 = cljs.core.chunk_rest(seq__62894_63060__$1);
var G__63063 = c__4550__auto___63061;
var G__63064 = cljs.core.count(c__4550__auto___63061);
var G__63065 = (0);
seq__62894_63049 = G__63062;
chunk__62896_63050 = G__63063;
count__62897_63051 = G__63064;
i__62898_63052 = G__63065;
continue;
} else {
var component_63066 = cljs.core.first(seq__62894_63060__$1);
var component_ident_63067 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_63066);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_63067,component_63066);


var G__63068 = cljs.core.next(seq__62894_63060__$1);
var G__63069 = null;
var G__63070 = (0);
var G__63071 = (0);
seq__62894_63049 = G__63068;
chunk__62896_63050 = G__63069;
count__62897_63051 = G__63070;
i__62898_63052 = G__63071;
continue;
}
} else {
}
}
break;
}


var G__63072 = seq__62875;
var G__63073 = chunk__62876;
var G__63074 = count__62877;
var G__63075 = (i__62878 + (1));
seq__62875 = G__63072;
chunk__62876 = G__63073;
count__62877 = G__63074;
i__62878 = G__63075;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62875);
if(temp__5804__auto__){
var seq__62875__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62875__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62875__$1);
var G__63076 = cljs.core.chunk_rest(seq__62875__$1);
var G__63077 = c__4550__auto__;
var G__63078 = cljs.core.count(c__4550__auto__);
var G__63079 = (0);
seq__62875 = G__63076;
chunk__62876 = G__63077;
count__62877 = G__63078;
i__62878 = G__63079;
continue;
} else {
var class$ = cljs.core.first(seq__62875__$1);
var seq__62905_63080 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62907_63081 = null;
var count__62908_63082 = (0);
var i__62909_63083 = (0);
while(true){
if((i__62909_63083 < count__62908_63082)){
var component_63084 = chunk__62907_63081.cljs$core$IIndexed$_nth$arity$2(null,i__62909_63083);
var component_ident_63085 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_63084);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_63085,component_63084);


var G__63087 = seq__62905_63080;
var G__63088 = chunk__62907_63081;
var G__63089 = count__62908_63082;
var G__63090 = (i__62909_63083 + (1));
seq__62905_63080 = G__63087;
chunk__62907_63081 = G__63088;
count__62908_63082 = G__63089;
i__62909_63083 = G__63090;
continue;
} else {
var temp__5804__auto___63094__$1 = cljs.core.seq(seq__62905_63080);
if(temp__5804__auto___63094__$1){
var seq__62905_63096__$1 = temp__5804__auto___63094__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62905_63096__$1)){
var c__4550__auto___63097 = cljs.core.chunk_first(seq__62905_63096__$1);
var G__63098 = cljs.core.chunk_rest(seq__62905_63096__$1);
var G__63099 = c__4550__auto___63097;
var G__63100 = cljs.core.count(c__4550__auto___63097);
var G__63101 = (0);
seq__62905_63080 = G__63098;
chunk__62907_63081 = G__63099;
count__62908_63082 = G__63100;
i__62909_63083 = G__63101;
continue;
} else {
var component_63102 = cljs.core.first(seq__62905_63096__$1);
var component_ident_63103 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_63102);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_63103,component_63102);


var G__63104 = cljs.core.next(seq__62905_63096__$1);
var G__63105 = null;
var G__63106 = (0);
var G__63107 = (0);
seq__62905_63080 = G__63104;
chunk__62907_63081 = G__63105;
count__62908_63082 = G__63106;
i__62909_63083 = G__63107;
continue;
}
} else {
}
}
break;
}


var G__63108 = cljs.core.next(seq__62875__$1);
var G__63109 = null;
var G__63110 = (0);
var G__63111 = (0);
seq__62875 = G__63108;
chunk__62876 = G__63109;
count__62877 = G__63110;
i__62878 = G__63111;
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
var map__62939 = app__$1;
var map__62939__$1 = (((((!((map__62939 == null))))?(((((map__62939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62939):map__62939);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62939__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62940 = cljs.core.deref(runtime_atom);
var map__62940__$1 = (((((!((map__62940 == null))))?(((((map__62940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62940):map__62940);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62940__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62941 = indexes;
var map__62941__$1 = (((((!((map__62941 == null))))?(((((map__62941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62941):map__62941);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__62939,map__62939__$1,runtime_atom,map__62940,map__62940__$1,indexes,map__62941,map__62941__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__62939,map__62939__$1,runtime_atom,map__62940,map__62940__$1,indexes,map__62941,map__62941__$1,prop__GT_classes,class__GT_components){
return (function (p1__62937_SHARP_,p2__62938_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__62937_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__62938_SHARP_) : class__GT_components.call(null,p2__62938_SHARP_)));
});})(classes,map__62939,map__62939__$1,runtime_atom,map__62940,map__62940__$1,indexes,map__62941,map__62941__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__62939,map__62939__$1,runtime_atom,map__62940,map__62940__$1,indexes,map__62941,map__62941__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,property_set);
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
var map__62955 = app__$1;
var map__62955__$1 = (((((!((map__62955 == null))))?(((((map__62955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62955):map__62955);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62955__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62955__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62956 = cljs.core.deref(runtime_atom);
var map__62956__$1 = (((((!((map__62956 == null))))?(((((map__62956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62956):map__62956);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62956__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62956__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62956__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62956__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__62957 = indexes;
var map__62957__$1 = (((((!((map__62957 == null))))?(((((map__62957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62957):map__62957);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__62964 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__62964__$1 = (((((!((map__62964 == null))))?(((((map__62964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62964):map__62964);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__62967_63119 = cljs.core.seq(limited_to_render);
var chunk__62969_63120 = null;
var count__62970_63121 = (0);
var i__62971_63122 = (0);
while(true){
if((i__62971_63122 < count__62970_63121)){
var c_63123 = chunk__62969_63120.cljs$core$IIndexed$_nth$arity$2(null,i__62971_63122);
var ident_63124 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_63123);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_63124,c_63123);


var G__63125 = seq__62967_63119;
var G__63126 = chunk__62969_63120;
var G__63127 = count__62970_63121;
var G__63128 = (i__62971_63122 + (1));
seq__62967_63119 = G__63125;
chunk__62969_63120 = G__63126;
count__62970_63121 = G__63127;
i__62971_63122 = G__63128;
continue;
} else {
var temp__5804__auto___63129 = cljs.core.seq(seq__62967_63119);
if(temp__5804__auto___63129){
var seq__62967_63130__$1 = temp__5804__auto___63129;
if(cljs.core.chunked_seq_QMARK_(seq__62967_63130__$1)){
var c__4550__auto___63131 = cljs.core.chunk_first(seq__62967_63130__$1);
var G__63132 = cljs.core.chunk_rest(seq__62967_63130__$1);
var G__63133 = c__4550__auto___63131;
var G__63134 = cljs.core.count(c__4550__auto___63131);
var G__63135 = (0);
seq__62967_63119 = G__63132;
chunk__62969_63120 = G__63133;
count__62970_63121 = G__63134;
i__62971_63122 = G__63135;
continue;
} else {
var c_63136 = cljs.core.first(seq__62967_63130__$1);
var ident_63137 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_63136);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_63137,c_63136);


var G__63138 = cljs.core.next(seq__62967_63130__$1);
var G__63139 = null;
var G__63140 = (0);
var G__63141 = (0);
seq__62967_63119 = G__63138;
chunk__62969_63120 = G__63139;
count__62970_63121 = G__63140;
i__62971_63122 = G__63141;
continue;
}
} else {
}
}
break;
}

var seq__62977 = cljs.core.seq(limited_idents);
var chunk__62978 = null;
var count__62979 = (0);
var i__62980 = (0);
while(true){
if((i__62980 < count__62979)){
var i = chunk__62978.cljs$core$IIndexed$_nth$arity$2(null,i__62980);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__63142 = seq__62977;
var G__63143 = chunk__62978;
var G__63144 = count__62979;
var G__63145 = (i__62980 + (1));
seq__62977 = G__63142;
chunk__62978 = G__63143;
count__62979 = G__63144;
i__62980 = G__63145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62977);
if(temp__5804__auto__){
var seq__62977__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62977__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62977__$1);
var G__63146 = cljs.core.chunk_rest(seq__62977__$1);
var G__63147 = c__4550__auto__;
var G__63148 = cljs.core.count(c__4550__auto__);
var G__63149 = (0);
seq__62977 = G__63146;
chunk__62978 = G__63147;
count__62979 = G__63148;
i__62980 = G__63149;
continue;
} else {
var i = cljs.core.first(seq__62977__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__63150 = cljs.core.next(seq__62977__$1);
var G__63151 = null;
var G__63152 = (0);
var G__63153 = (0);
seq__62977 = G__63150;
chunk__62978 = G__63151;
count__62979 = G__63152;
i__62980 = G__63153;
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
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__62955,map__62955__$1,runtime_atom,state_atom,map__62956,map__62956__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62957,map__62957__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__62955,map__62955__$1,runtime_atom,state_atom,map__62956,map__62956__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62957,map__62957__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__62996 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__62996__$1 = (((((!((map__62996 == null))))?(((((map__62996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62996):map__62996);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62996__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62996__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__63001_63157 = cljs.core.seq(all_idents);
var chunk__63002_63158 = null;
var count__63003_63159 = (0);
var i__63004_63160 = (0);
while(true){
if((i__63004_63160 < count__63003_63159)){
var i_63161 = chunk__63002_63158.cljs$core$IIndexed$_nth$arity$2(null,i__63004_63160);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_63161);


var G__63162 = seq__63001_63157;
var G__63163 = chunk__63002_63158;
var G__63164 = count__63003_63159;
var G__63165 = (i__63004_63160 + (1));
seq__63001_63157 = G__63162;
chunk__63002_63158 = G__63163;
count__63003_63159 = G__63164;
i__63004_63160 = G__63165;
continue;
} else {
var temp__5804__auto___63166 = cljs.core.seq(seq__63001_63157);
if(temp__5804__auto___63166){
var seq__63001_63167__$1 = temp__5804__auto___63166;
if(cljs.core.chunked_seq_QMARK_(seq__63001_63167__$1)){
var c__4550__auto___63168 = cljs.core.chunk_first(seq__63001_63167__$1);
var G__63169 = cljs.core.chunk_rest(seq__63001_63167__$1);
var G__63170 = c__4550__auto___63168;
var G__63171 = cljs.core.count(c__4550__auto___63168);
var G__63172 = (0);
seq__63001_63157 = G__63169;
chunk__63002_63158 = G__63170;
count__63003_63159 = G__63171;
i__63004_63160 = G__63172;
continue;
} else {
var i_63173 = cljs.core.first(seq__63001_63167__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_63173);


var G__63174 = cljs.core.next(seq__63001_63167__$1);
var G__63175 = null;
var G__63176 = (0);
var G__63177 = (0);
seq__63001_63157 = G__63174;
chunk__63002_63158 = G__63175;
count__63003_63159 = G__63176;
i__63004_63160 = G__63177;
continue;
}
} else {
}
}
break;
}

var seq__63011 = cljs.core.seq(extra_to_force);
var chunk__63012 = null;
var count__63013 = (0);
var i__63014 = (0);
while(true){
if((i__63014 < count__63013)){
var c = chunk__63012.cljs$core$IIndexed$_nth$arity$2(null,i__63014);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__63178 = seq__63011;
var G__63179 = chunk__63012;
var G__63180 = count__63013;
var G__63181 = (i__63014 + (1));
seq__63011 = G__63178;
chunk__63012 = G__63179;
count__63013 = G__63180;
i__63014 = G__63181;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63011);
if(temp__5804__auto__){
var seq__63011__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63011__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63011__$1);
var G__63182 = cljs.core.chunk_rest(seq__63011__$1);
var G__63183 = c__4550__auto__;
var G__63184 = cljs.core.count(c__4550__auto__);
var G__63185 = (0);
seq__63011 = G__63182;
chunk__63012 = G__63183;
count__63013 = G__63184;
i__63014 = G__63185;
continue;
} else {
var c = cljs.core.first(seq__63011__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__63186 = cljs.core.next(seq__63011__$1);
var G__63187 = null;
var G__63188 = (0);
var G__63189 = (0);
seq__63011 = G__63186;
chunk__63012 = G__63187;
count__63013 = G__63188;
i__63014 = G__63189;
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
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__63019 = arguments.length;
switch (G__63019) {
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

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__63023){
var map__63024 = p__63023;
var map__63024__$1 = (((((!((map__63024 == null))))?(((((map__63024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63024):map__63024);
var options = map__63024__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63024__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63024__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e63028){var e = e63028;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__63024,map__63024__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__63024,map__63024__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,326152703);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
