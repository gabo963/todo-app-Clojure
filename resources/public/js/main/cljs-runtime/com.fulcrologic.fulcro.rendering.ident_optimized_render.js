goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.raw.application');
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
var map__60639 = app__$1;
var map__60639__$1 = (((((!((map__60639 == null))))?(((((map__60639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60639):map__60639);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4131__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__60641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__60642 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__60641,G__60642) : com.fulcrologic.fulcro.components.computed.call(null,G__60641,G__60642));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__60639,map__60639__$1,state_atom,state_map,query,q,prior_computed,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
});})(map__60639,map__60639__$1,state_atom,state_map,query,q,prior_computed,data_tree,new_props))
,null)),null,1974622524,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (root){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__60643 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__60643) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__60643));
})(),"queries for data that changed, but does not have an ident."], null);
});})(root))
,null)),null,-599572412,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__60644 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__60645 = null;
var count__60646 = (0);
var i__60647 = (0);
while(true){
if((i__60647 < count__60646)){
var c = chunk__60645.cljs$core$IIndexed$_nth$arity$2(null,i__60647);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__60793 = seq__60644;
var G__60794 = chunk__60645;
var G__60795 = count__60646;
var G__60796 = (i__60647 + (1));
seq__60644 = G__60793;
chunk__60645 = G__60794;
count__60646 = G__60795;
i__60647 = G__60796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60644);
if(temp__5804__auto__){
var seq__60644__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60644__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60644__$1);
var G__60798 = cljs.core.chunk_rest(seq__60644__$1);
var G__60799 = c__4550__auto__;
var G__60800 = cljs.core.count(c__4550__auto__);
var G__60801 = (0);
seq__60644 = G__60798;
chunk__60645 = G__60799;
count__60646 = G__60800;
i__60647 = G__60801;
continue;
} else {
var c = cljs.core.first(seq__60644__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__60802 = cljs.core.next(seq__60644__$1);
var G__60803 = null;
var G__60804 = (0);
var G__60805 = (0);
seq__60644 = G__60802;
chunk__60645 = G__60803;
count__60646 = G__60804;
i__60647 = G__60805;
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

var map__60648 = app__$1;
var map__60648__$1 = (((((!((map__60648 == null))))?(((((map__60648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60648):map__60648);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60648__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60649 = cljs.core.deref(runtime_atom);
var map__60649__$1 = (((((!((map__60649 == null))))?(((((map__60649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60649):map__60649);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__60650 = indexes;
var map__60650__$1 = (((((!((map__60650 == null))))?(((((map__60650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60650):map__60650);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60650__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60650__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60650__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__60654 = cljs.core.seq(classes);
var chunk__60655 = null;
var count__60656 = (0);
var i__60657 = (0);
while(true){
if((i__60657 < count__60656)){
var class$ = chunk__60655.cljs$core$IIndexed$_nth$arity$2(null,i__60657);
var seq__60691_60812 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__60693_60813 = null;
var count__60694_60814 = (0);
var i__60695_60815 = (0);
while(true){
if((i__60695_60815 < count__60694_60814)){
var component_60817 = chunk__60693_60813.cljs$core$IIndexed$_nth$arity$2(null,i__60695_60815);
var component_ident_60818 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60817) : com.fulcrologic.fulcro.components.get_ident.call(null,component_60817));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60818,component_60817);


var G__60820 = seq__60691_60812;
var G__60821 = chunk__60693_60813;
var G__60822 = count__60694_60814;
var G__60823 = (i__60695_60815 + (1));
seq__60691_60812 = G__60820;
chunk__60693_60813 = G__60821;
count__60694_60814 = G__60822;
i__60695_60815 = G__60823;
continue;
} else {
var temp__5804__auto___60825 = cljs.core.seq(seq__60691_60812);
if(temp__5804__auto___60825){
var seq__60691_60826__$1 = temp__5804__auto___60825;
if(cljs.core.chunked_seq_QMARK_(seq__60691_60826__$1)){
var c__4550__auto___60827 = cljs.core.chunk_first(seq__60691_60826__$1);
var G__60829 = cljs.core.chunk_rest(seq__60691_60826__$1);
var G__60830 = c__4550__auto___60827;
var G__60831 = cljs.core.count(c__4550__auto___60827);
var G__60832 = (0);
seq__60691_60812 = G__60829;
chunk__60693_60813 = G__60830;
count__60694_60814 = G__60831;
i__60695_60815 = G__60832;
continue;
} else {
var component_60834 = cljs.core.first(seq__60691_60826__$1);
var component_ident_60836 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60834) : com.fulcrologic.fulcro.components.get_ident.call(null,component_60834));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60836,component_60834);


var G__60837 = cljs.core.next(seq__60691_60826__$1);
var G__60838 = null;
var G__60839 = (0);
var G__60840 = (0);
seq__60691_60812 = G__60837;
chunk__60693_60813 = G__60838;
count__60694_60814 = G__60839;
i__60695_60815 = G__60840;
continue;
}
} else {
}
}
break;
}


var G__60841 = seq__60654;
var G__60842 = chunk__60655;
var G__60843 = count__60656;
var G__60844 = (i__60657 + (1));
seq__60654 = G__60841;
chunk__60655 = G__60842;
count__60656 = G__60843;
i__60657 = G__60844;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60654);
if(temp__5804__auto__){
var seq__60654__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60654__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60654__$1);
var G__60845 = cljs.core.chunk_rest(seq__60654__$1);
var G__60846 = c__4550__auto__;
var G__60847 = cljs.core.count(c__4550__auto__);
var G__60848 = (0);
seq__60654 = G__60845;
chunk__60655 = G__60846;
count__60656 = G__60847;
i__60657 = G__60848;
continue;
} else {
var class$ = cljs.core.first(seq__60654__$1);
var seq__60702_60849 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__60704_60850 = null;
var count__60705_60851 = (0);
var i__60706_60852 = (0);
while(true){
if((i__60706_60852 < count__60705_60851)){
var component_60853 = chunk__60704_60850.cljs$core$IIndexed$_nth$arity$2(null,i__60706_60852);
var component_ident_60854 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60853) : com.fulcrologic.fulcro.components.get_ident.call(null,component_60853));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60854,component_60853);


var G__60855 = seq__60702_60849;
var G__60856 = chunk__60704_60850;
var G__60857 = count__60705_60851;
var G__60858 = (i__60706_60852 + (1));
seq__60702_60849 = G__60855;
chunk__60704_60850 = G__60856;
count__60705_60851 = G__60857;
i__60706_60852 = G__60858;
continue;
} else {
var temp__5804__auto___60860__$1 = cljs.core.seq(seq__60702_60849);
if(temp__5804__auto___60860__$1){
var seq__60702_60861__$1 = temp__5804__auto___60860__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60702_60861__$1)){
var c__4550__auto___60862 = cljs.core.chunk_first(seq__60702_60861__$1);
var G__60864 = cljs.core.chunk_rest(seq__60702_60861__$1);
var G__60865 = c__4550__auto___60862;
var G__60866 = cljs.core.count(c__4550__auto___60862);
var G__60867 = (0);
seq__60702_60849 = G__60864;
chunk__60704_60850 = G__60865;
count__60705_60851 = G__60866;
i__60706_60852 = G__60867;
continue;
} else {
var component_60868 = cljs.core.first(seq__60702_60861__$1);
var component_ident_60869 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_60868) : com.fulcrologic.fulcro.components.get_ident.call(null,component_60868));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_60869,component_60868);


var G__60870 = cljs.core.next(seq__60702_60861__$1);
var G__60871 = null;
var G__60872 = (0);
var G__60873 = (0);
seq__60702_60849 = G__60870;
chunk__60704_60850 = G__60871;
count__60705_60851 = G__60872;
i__60706_60852 = G__60873;
continue;
}
} else {
}
}
break;
}


var G__60874 = cljs.core.next(seq__60654__$1);
var G__60875 = null;
var G__60876 = (0);
var G__60877 = (0);
seq__60654 = G__60874;
chunk__60655 = G__60875;
count__60656 = G__60876;
i__60657 = G__60877;
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
var map__60716 = app__$1;
var map__60716__$1 = (((((!((map__60716 == null))))?(((((map__60716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60716):map__60716);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__60717 = cljs.core.deref(runtime_atom);
var map__60717__$1 = (((((!((map__60717 == null))))?(((((map__60717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60717):map__60717);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__60718 = indexes;
var map__60718__$1 = (((((!((map__60718 == null))))?(((((map__60718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60718):map__60718);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60718__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60718__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60716,map__60716__$1,runtime_atom,map__60717,map__60717__$1,indexes,map__60718,map__60718__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__60716,map__60716__$1,runtime_atom,map__60717,map__60717__$1,indexes,map__60718,map__60718__$1,prop__GT_classes,class__GT_components){
return (function (p1__60713_SHARP_,p2__60714_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__60713_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__60714_SHARP_) : class__GT_components.call(null,p2__60714_SHARP_)));
});})(classes,map__60716,map__60716__$1,runtime_atom,map__60717,map__60717__$1,indexes,map__60718,map__60718__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__60716,map__60716__$1,runtime_atom,map__60717,map__60717__$1,indexes,map__60718,map__60718__$1,prop__GT_classes,class__GT_components))
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
var map__60727 = app__$1;
var map__60727__$1 = (((((!((map__60727 == null))))?(((((map__60727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60727):map__60727);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60727__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60727__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__60728 = cljs.core.deref(runtime_atom);
var map__60728__$1 = (((((!((map__60728 == null))))?(((((map__60728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60728):map__60728);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__60729 = indexes;
var map__60729__$1 = (((((!((map__60729 == null))))?(((((map__60729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60729):map__60729);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__60733 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__60733__$1 = (((((!((map__60733 == null))))?(((((map__60733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60733):map__60733);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60733__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60733__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__60735_60886 = cljs.core.seq(limited_to_render);
var chunk__60737_60887 = null;
var count__60738_60888 = (0);
var i__60739_60889 = (0);
while(true){
if((i__60739_60889 < count__60738_60888)){
var c_60891 = chunk__60737_60887.cljs$core$IIndexed$_nth$arity$2(null,i__60739_60889);
var ident_60892 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_60891) : com.fulcrologic.fulcro.components.get_ident.call(null,c_60891));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_60892,c_60891);


var G__60894 = seq__60735_60886;
var G__60895 = chunk__60737_60887;
var G__60896 = count__60738_60888;
var G__60897 = (i__60739_60889 + (1));
seq__60735_60886 = G__60894;
chunk__60737_60887 = G__60895;
count__60738_60888 = G__60896;
i__60739_60889 = G__60897;
continue;
} else {
var temp__5804__auto___60899 = cljs.core.seq(seq__60735_60886);
if(temp__5804__auto___60899){
var seq__60735_60900__$1 = temp__5804__auto___60899;
if(cljs.core.chunked_seq_QMARK_(seq__60735_60900__$1)){
var c__4550__auto___60901 = cljs.core.chunk_first(seq__60735_60900__$1);
var G__60902 = cljs.core.chunk_rest(seq__60735_60900__$1);
var G__60904 = c__4550__auto___60901;
var G__60905 = cljs.core.count(c__4550__auto___60901);
var G__60906 = (0);
seq__60735_60886 = G__60902;
chunk__60737_60887 = G__60904;
count__60738_60888 = G__60905;
i__60739_60889 = G__60906;
continue;
} else {
var c_60908 = cljs.core.first(seq__60735_60900__$1);
var ident_60909 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_60908) : com.fulcrologic.fulcro.components.get_ident.call(null,c_60908));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_60909,c_60908);


var G__60911 = cljs.core.next(seq__60735_60900__$1);
var G__60912 = null;
var G__60913 = (0);
var G__60914 = (0);
seq__60735_60886 = G__60911;
chunk__60737_60887 = G__60912;
count__60738_60888 = G__60913;
i__60739_60889 = G__60914;
continue;
}
} else {
}
}
break;
}

var seq__60744 = cljs.core.seq(limited_idents);
var chunk__60745 = null;
var count__60746 = (0);
var i__60747 = (0);
while(true){
if((i__60747 < count__60746)){
var i = chunk__60745.cljs$core$IIndexed$_nth$arity$2(null,i__60747);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__60915 = seq__60744;
var G__60916 = chunk__60745;
var G__60917 = count__60746;
var G__60918 = (i__60747 + (1));
seq__60744 = G__60915;
chunk__60745 = G__60916;
count__60746 = G__60917;
i__60747 = G__60918;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60744);
if(temp__5804__auto__){
var seq__60744__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60744__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60744__$1);
var G__60920 = cljs.core.chunk_rest(seq__60744__$1);
var G__60921 = c__4550__auto__;
var G__60922 = cljs.core.count(c__4550__auto__);
var G__60923 = (0);
seq__60744 = G__60920;
chunk__60745 = G__60921;
count__60746 = G__60922;
i__60747 = G__60923;
continue;
} else {
var i = cljs.core.first(seq__60744__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__60925 = cljs.core.next(seq__60744__$1);
var G__60926 = null;
var G__60927 = (0);
var G__60928 = (0);
seq__60744 = G__60925;
chunk__60745 = G__60926;
count__60746 = G__60927;
i__60747 = G__60928;
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
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__60727,map__60727__$1,runtime_atom,state_atom,map__60728,map__60728__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__60729,map__60729__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__60727,map__60727__$1,runtime_atom,state_atom,map__60728,map__60728__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__60729,map__60729__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__60750 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__60750__$1 = (((((!((map__60750 == null))))?(((((map__60750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60750):map__60750);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__60758_60930 = cljs.core.seq(all_idents);
var chunk__60759_60931 = null;
var count__60760_60932 = (0);
var i__60761_60933 = (0);
while(true){
if((i__60761_60933 < count__60760_60932)){
var i_60934 = chunk__60759_60931.cljs$core$IIndexed$_nth$arity$2(null,i__60761_60933);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_60934);


var G__60935 = seq__60758_60930;
var G__60936 = chunk__60759_60931;
var G__60937 = count__60760_60932;
var G__60938 = (i__60761_60933 + (1));
seq__60758_60930 = G__60935;
chunk__60759_60931 = G__60936;
count__60760_60932 = G__60937;
i__60761_60933 = G__60938;
continue;
} else {
var temp__5804__auto___60942 = cljs.core.seq(seq__60758_60930);
if(temp__5804__auto___60942){
var seq__60758_60944__$1 = temp__5804__auto___60942;
if(cljs.core.chunked_seq_QMARK_(seq__60758_60944__$1)){
var c__4550__auto___60945 = cljs.core.chunk_first(seq__60758_60944__$1);
var G__60946 = cljs.core.chunk_rest(seq__60758_60944__$1);
var G__60947 = c__4550__auto___60945;
var G__60948 = cljs.core.count(c__4550__auto___60945);
var G__60949 = (0);
seq__60758_60930 = G__60946;
chunk__60759_60931 = G__60947;
count__60760_60932 = G__60948;
i__60761_60933 = G__60949;
continue;
} else {
var i_60950 = cljs.core.first(seq__60758_60944__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_60950);


var G__60952 = cljs.core.next(seq__60758_60944__$1);
var G__60953 = null;
var G__60954 = (0);
var G__60955 = (0);
seq__60758_60930 = G__60952;
chunk__60759_60931 = G__60953;
count__60760_60932 = G__60954;
i__60761_60933 = G__60955;
continue;
}
} else {
}
}
break;
}

var seq__60764 = cljs.core.seq(extra_to_force);
var chunk__60765 = null;
var count__60766 = (0);
var i__60767 = (0);
while(true){
if((i__60767 < count__60766)){
var c = chunk__60765.cljs$core$IIndexed$_nth$arity$2(null,i__60767);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__60959 = seq__60764;
var G__60960 = chunk__60765;
var G__60961 = count__60766;
var G__60962 = (i__60767 + (1));
seq__60764 = G__60959;
chunk__60765 = G__60960;
count__60766 = G__60961;
i__60767 = G__60962;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60764);
if(temp__5804__auto__){
var seq__60764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60764__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60764__$1);
var G__60965 = cljs.core.chunk_rest(seq__60764__$1);
var G__60966 = c__4550__auto__;
var G__60967 = cljs.core.count(c__4550__auto__);
var G__60968 = (0);
seq__60764 = G__60965;
chunk__60765 = G__60966;
count__60766 = G__60967;
i__60767 = G__60968;
continue;
} else {
var c = cljs.core.first(seq__60764__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__60970 = cljs.core.next(seq__60764__$1);
var G__60971 = null;
var G__60972 = (0);
var G__60973 = (0);
seq__60764 = G__60970;
chunk__60765 = G__60971;
count__60766 = G__60972;
i__60767 = G__60973;
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
var G__60773 = arguments.length;
switch (G__60773) {
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

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__60774){
var map__60775 = p__60774;
var map__60775__$1 = (((((!((map__60775 == null))))?(((((map__60775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60775):map__60775);
var options = map__60775__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60775__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60775__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e60777){var e = e60777;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__60775,map__60775__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__60775,map__60775__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,524520646,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
