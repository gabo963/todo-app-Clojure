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
var map__67870 = app__$1;
var map__67870__$1 = cljs.core.__destructure_map(map__67870);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67870__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
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
var new_props = (function (){var G__67872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__67873 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__67872,G__67873) : com.fulcrologic.fulcro.components.computed.call(null,G__67872,G__67873));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-1430336806,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__67875 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__67875) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__67875));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1707966006,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__67877 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__67878 = null;
var count__67879 = (0);
var i__67880 = (0);
while(true){
if((i__67880 < count__67879)){
var c = chunk__67878.cljs$core$IIndexed$_nth$arity$2(null,i__67880);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__68003 = seq__67877;
var G__68004 = chunk__67878;
var G__68005 = count__67879;
var G__68006 = (i__67880 + (1));
seq__67877 = G__68003;
chunk__67878 = G__68004;
count__67879 = G__68005;
i__67880 = G__68006;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67877);
if(temp__5804__auto__){
var seq__67877__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67877__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67877__$1);
var G__68007 = cljs.core.chunk_rest(seq__67877__$1);
var G__68008 = c__5568__auto__;
var G__68009 = cljs.core.count(c__5568__auto__);
var G__68010 = (0);
seq__67877 = G__68007;
chunk__67878 = G__68008;
count__67879 = G__68009;
i__67880 = G__68010;
continue;
} else {
var c = cljs.core.first(seq__67877__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__68011 = cljs.core.next(seq__67877__$1);
var G__68012 = null;
var G__68013 = (0);
var G__68014 = (0);
seq__67877 = G__68011;
chunk__67878 = G__68012;
count__67879 = G__68013;
i__67880 = G__68014;
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

var map__67895 = app__$1;
var map__67895__$1 = cljs.core.__destructure_map(map__67895);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67895__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__67896 = cljs.core.deref(runtime_atom);
var map__67896__$1 = cljs.core.__destructure_map(map__67896);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67896__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__67897 = indexes;
var map__67897__$1 = cljs.core.__destructure_map(map__67897);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67897__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67897__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67897__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__67901 = cljs.core.seq(classes);
var chunk__67902 = null;
var count__67903 = (0);
var i__67904 = (0);
while(true){
if((i__67904 < count__67903)){
var class$ = chunk__67902.cljs$core$IIndexed$_nth$arity$2(null,i__67904);
var seq__67935_68016 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__67937_68017 = null;
var count__67938_68018 = (0);
var i__67939_68019 = (0);
while(true){
if((i__67939_68019 < count__67938_68018)){
var component_68020 = chunk__67937_68017.cljs$core$IIndexed$_nth$arity$2(null,i__67939_68019);
var component_ident_68021 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_68020) : com.fulcrologic.fulcro.components.get_ident.call(null,component_68020));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_68021,component_68020);


var G__68022 = seq__67935_68016;
var G__68023 = chunk__67937_68017;
var G__68024 = count__67938_68018;
var G__68025 = (i__67939_68019 + (1));
seq__67935_68016 = G__68022;
chunk__67937_68017 = G__68023;
count__67938_68018 = G__68024;
i__67939_68019 = G__68025;
continue;
} else {
var temp__5804__auto___68026 = cljs.core.seq(seq__67935_68016);
if(temp__5804__auto___68026){
var seq__67935_68027__$1 = temp__5804__auto___68026;
if(cljs.core.chunked_seq_QMARK_(seq__67935_68027__$1)){
var c__5568__auto___68028 = cljs.core.chunk_first(seq__67935_68027__$1);
var G__68030 = cljs.core.chunk_rest(seq__67935_68027__$1);
var G__68031 = c__5568__auto___68028;
var G__68032 = cljs.core.count(c__5568__auto___68028);
var G__68033 = (0);
seq__67935_68016 = G__68030;
chunk__67937_68017 = G__68031;
count__67938_68018 = G__68032;
i__67939_68019 = G__68033;
continue;
} else {
var component_68034 = cljs.core.first(seq__67935_68027__$1);
var component_ident_68035 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_68034) : com.fulcrologic.fulcro.components.get_ident.call(null,component_68034));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_68035,component_68034);


var G__68036 = cljs.core.next(seq__67935_68027__$1);
var G__68037 = null;
var G__68038 = (0);
var G__68039 = (0);
seq__67935_68016 = G__68036;
chunk__67937_68017 = G__68037;
count__67938_68018 = G__68038;
i__67939_68019 = G__68039;
continue;
}
} else {
}
}
break;
}


var G__68040 = seq__67901;
var G__68041 = chunk__67902;
var G__68042 = count__67903;
var G__68043 = (i__67904 + (1));
seq__67901 = G__68040;
chunk__67902 = G__68041;
count__67903 = G__68042;
i__67904 = G__68043;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67901);
if(temp__5804__auto__){
var seq__67901__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67901__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67901__$1);
var G__68044 = cljs.core.chunk_rest(seq__67901__$1);
var G__68045 = c__5568__auto__;
var G__68046 = cljs.core.count(c__5568__auto__);
var G__68047 = (0);
seq__67901 = G__68044;
chunk__67902 = G__68045;
count__67903 = G__68046;
i__67904 = G__68047;
continue;
} else {
var class$ = cljs.core.first(seq__67901__$1);
var seq__67944_68048 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__67946_68049 = null;
var count__67947_68050 = (0);
var i__67948_68051 = (0);
while(true){
if((i__67948_68051 < count__67947_68050)){
var component_68052 = chunk__67946_68049.cljs$core$IIndexed$_nth$arity$2(null,i__67948_68051);
var component_ident_68053 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_68052) : com.fulcrologic.fulcro.components.get_ident.call(null,component_68052));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_68053,component_68052);


var G__68054 = seq__67944_68048;
var G__68055 = chunk__67946_68049;
var G__68056 = count__67947_68050;
var G__68057 = (i__67948_68051 + (1));
seq__67944_68048 = G__68054;
chunk__67946_68049 = G__68055;
count__67947_68050 = G__68056;
i__67948_68051 = G__68057;
continue;
} else {
var temp__5804__auto___68058__$1 = cljs.core.seq(seq__67944_68048);
if(temp__5804__auto___68058__$1){
var seq__67944_68059__$1 = temp__5804__auto___68058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67944_68059__$1)){
var c__5568__auto___68060 = cljs.core.chunk_first(seq__67944_68059__$1);
var G__68061 = cljs.core.chunk_rest(seq__67944_68059__$1);
var G__68062 = c__5568__auto___68060;
var G__68063 = cljs.core.count(c__5568__auto___68060);
var G__68064 = (0);
seq__67944_68048 = G__68061;
chunk__67946_68049 = G__68062;
count__67947_68050 = G__68063;
i__67948_68051 = G__68064;
continue;
} else {
var component_68065 = cljs.core.first(seq__67944_68059__$1);
var component_ident_68066 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_68065) : com.fulcrologic.fulcro.components.get_ident.call(null,component_68065));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_68066,component_68065);


var G__68067 = cljs.core.next(seq__67944_68059__$1);
var G__68068 = null;
var G__68069 = (0);
var G__68070 = (0);
seq__67944_68048 = G__68067;
chunk__67946_68049 = G__68068;
count__67947_68050 = G__68069;
i__67948_68051 = G__68070;
continue;
}
} else {
}
}
break;
}


var G__68071 = cljs.core.next(seq__67901__$1);
var G__68072 = null;
var G__68073 = (0);
var G__68074 = (0);
seq__67901 = G__68071;
chunk__67902 = G__68072;
count__67903 = G__68073;
i__67904 = G__68074;
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
var map__67956 = app__$1;
var map__67956__$1 = cljs.core.__destructure_map(map__67956);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67956__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__67957 = cljs.core.deref(runtime_atom);
var map__67957__$1 = cljs.core.__destructure_map(map__67957);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67957__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__67958 = indexes;
var map__67958__$1 = cljs.core.__destructure_map(map__67958);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67958__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67958__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67953_SHARP_,p2__67954_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__67953_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__67954_SHARP_) : class__GT_components.call(null,p2__67954_SHARP_)));
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
var map__67962 = app__$1;
var map__67962__$1 = cljs.core.__destructure_map(map__67962);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__67963 = cljs.core.deref(runtime_atom);
var map__67963__$1 = cljs.core.__destructure_map(map__67963);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__67964 = indexes;
var map__67964__$1 = cljs.core.__destructure_map(map__67964);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67964__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67964__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67964__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67964__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__67965 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__67965__$1 = cljs.core.__destructure_map(map__67965);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67965__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67965__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__67967_68077 = cljs.core.seq(limited_to_render);
var chunk__67969_68078 = null;
var count__67970_68079 = (0);
var i__67971_68080 = (0);
while(true){
if((i__67971_68080 < count__67970_68079)){
var c_68081 = chunk__67969_68078.cljs$core$IIndexed$_nth$arity$2(null,i__67971_68080);
var ident_68082 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_68081) : com.fulcrologic.fulcro.components.get_ident.call(null,c_68081));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_68082,c_68081);


var G__68083 = seq__67967_68077;
var G__68084 = chunk__67969_68078;
var G__68085 = count__67970_68079;
var G__68086 = (i__67971_68080 + (1));
seq__67967_68077 = G__68083;
chunk__67969_68078 = G__68084;
count__67970_68079 = G__68085;
i__67971_68080 = G__68086;
continue;
} else {
var temp__5804__auto___68087 = cljs.core.seq(seq__67967_68077);
if(temp__5804__auto___68087){
var seq__67967_68088__$1 = temp__5804__auto___68087;
if(cljs.core.chunked_seq_QMARK_(seq__67967_68088__$1)){
var c__5568__auto___68089 = cljs.core.chunk_first(seq__67967_68088__$1);
var G__68090 = cljs.core.chunk_rest(seq__67967_68088__$1);
var G__68091 = c__5568__auto___68089;
var G__68092 = cljs.core.count(c__5568__auto___68089);
var G__68093 = (0);
seq__67967_68077 = G__68090;
chunk__67969_68078 = G__68091;
count__67970_68079 = G__68092;
i__67971_68080 = G__68093;
continue;
} else {
var c_68094 = cljs.core.first(seq__67967_68088__$1);
var ident_68096 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_68094) : com.fulcrologic.fulcro.components.get_ident.call(null,c_68094));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_68096,c_68094);


var G__68097 = cljs.core.next(seq__67967_68088__$1);
var G__68098 = null;
var G__68099 = (0);
var G__68100 = (0);
seq__67967_68077 = G__68097;
chunk__67969_68078 = G__68098;
count__67970_68079 = G__68099;
i__67971_68080 = G__68100;
continue;
}
} else {
}
}
break;
}

var seq__67975 = cljs.core.seq(limited_idents);
var chunk__67976 = null;
var count__67977 = (0);
var i__67978 = (0);
while(true){
if((i__67978 < count__67977)){
var i = chunk__67976.cljs$core$IIndexed$_nth$arity$2(null,i__67978);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__68101 = seq__67975;
var G__68102 = chunk__67976;
var G__68103 = count__67977;
var G__68104 = (i__67978 + (1));
seq__67975 = G__68101;
chunk__67976 = G__68102;
count__67977 = G__68103;
i__67978 = G__68104;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67975);
if(temp__5804__auto__){
var seq__67975__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67975__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67975__$1);
var G__68105 = cljs.core.chunk_rest(seq__67975__$1);
var G__68106 = c__5568__auto__;
var G__68107 = cljs.core.count(c__5568__auto__);
var G__68108 = (0);
seq__67975 = G__68105;
chunk__67976 = G__68106;
count__67977 = G__68107;
i__67978 = G__68108;
continue;
} else {
var i = cljs.core.first(seq__67975__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__68109 = cljs.core.next(seq__67975__$1);
var G__68110 = null;
var G__68111 = (0);
var G__68112 = (0);
seq__67975 = G__68109;
chunk__67976 = G__68110;
count__67977 = G__68111;
i__67978 = G__68112;
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
var map__67981 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__67981__$1 = cljs.core.__destructure_map(map__67981);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__67983_68114 = cljs.core.seq(all_idents);
var chunk__67984_68115 = null;
var count__67985_68116 = (0);
var i__67986_68117 = (0);
while(true){
if((i__67986_68117 < count__67985_68116)){
var i_68118 = chunk__67984_68115.cljs$core$IIndexed$_nth$arity$2(null,i__67986_68117);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_68118);


var G__68119 = seq__67983_68114;
var G__68120 = chunk__67984_68115;
var G__68121 = count__67985_68116;
var G__68122 = (i__67986_68117 + (1));
seq__67983_68114 = G__68119;
chunk__67984_68115 = G__68120;
count__67985_68116 = G__68121;
i__67986_68117 = G__68122;
continue;
} else {
var temp__5804__auto___68123 = cljs.core.seq(seq__67983_68114);
if(temp__5804__auto___68123){
var seq__67983_68124__$1 = temp__5804__auto___68123;
if(cljs.core.chunked_seq_QMARK_(seq__67983_68124__$1)){
var c__5568__auto___68125 = cljs.core.chunk_first(seq__67983_68124__$1);
var G__68126 = cljs.core.chunk_rest(seq__67983_68124__$1);
var G__68127 = c__5568__auto___68125;
var G__68128 = cljs.core.count(c__5568__auto___68125);
var G__68129 = (0);
seq__67983_68114 = G__68126;
chunk__67984_68115 = G__68127;
count__67985_68116 = G__68128;
i__67986_68117 = G__68129;
continue;
} else {
var i_68130 = cljs.core.first(seq__67983_68124__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_68130);


var G__68132 = cljs.core.next(seq__67983_68124__$1);
var G__68133 = null;
var G__68134 = (0);
var G__68135 = (0);
seq__67983_68114 = G__68132;
chunk__67984_68115 = G__68133;
count__67985_68116 = G__68134;
i__67986_68117 = G__68135;
continue;
}
} else {
}
}
break;
}

var seq__67989 = cljs.core.seq(extra_to_force);
var chunk__67990 = null;
var count__67991 = (0);
var i__67992 = (0);
while(true){
if((i__67992 < count__67991)){
var c = chunk__67990.cljs$core$IIndexed$_nth$arity$2(null,i__67992);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__68136 = seq__67989;
var G__68137 = chunk__67990;
var G__68138 = count__67991;
var G__68139 = (i__67992 + (1));
seq__67989 = G__68136;
chunk__67990 = G__68137;
count__67991 = G__68138;
i__67992 = G__68139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67989);
if(temp__5804__auto__){
var seq__67989__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67989__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67989__$1);
var G__68140 = cljs.core.chunk_rest(seq__67989__$1);
var G__68141 = c__5568__auto__;
var G__68142 = cljs.core.count(c__5568__auto__);
var G__68143 = (0);
seq__67989 = G__68140;
chunk__67990 = G__68141;
count__67991 = G__68142;
i__67992 = G__68143;
continue;
} else {
var c = cljs.core.first(seq__67989__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__68144 = cljs.core.next(seq__67989__$1);
var G__68145 = null;
var G__68146 = (0);
var G__68147 = (0);
seq__67989 = G__68144;
chunk__67990 = G__68145;
count__67991 = G__68146;
i__67992 = G__68147;
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
var G__67995 = arguments.length;
switch (G__67995) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__67997){
var map__67998 = p__67997;
var map__67998__$1 = cljs.core.__destructure_map(map__67998);
var options = map__67998__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67998__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67998__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e67999){var e = e67999;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,468117522,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
