goog.provide('com.fulcrologic.fulcro.algorithms.normalized_state');
/**
 * [state ident & named-parameters]
 * 
 *   Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not place
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 * 
 *   NOTE: `ident` does not have to be an ident if you want to place denormalized data.  It can really be anything.
 * 
 *   Returns the updated state map.
 */
com.fulcrologic.fulcro.algorithms.normalized_state.integrate_ident = com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_;
/**
 *  [state-map ident path-to-idents]
 * 
 *   Removes an ident, if it exists, from a list of idents in app state. This
 *   function is safe to use within mutations.
 */
com.fulcrologic.fulcro.algorithms.normalized_state.remove_ident = com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_;
/**
 * Convert a 'denormalized' path into a normalized one by walking the path in state treating ident-based edges
 *   as jumps back to that location in state-map.
 * 
 *   For example, one might find this to be true for a normalized db:
 * 
 *   ```
 *   state => {:person/id {1 {:person/id 1 :person/spouse [:person/id 3]}
 *                      3 {:person/id 3 :person/first-name ...}}}
 * 
 *   (tree-path->db-path state [:person/id 1 :person/spouse :person/first-name])
 *   => [:person/id 3 :person/first-name]
 *   ```
 *   
 */
com.fulcrologic.fulcro.algorithms.normalized_state.tree_path__GT_db_path = (function com$fulcrologic$fulcro$algorithms$normalized_state$tree_path__GT_db_path(state,path){
var G__56783 = path;
var vec__56785 = G__56783;
var seq__56786 = cljs.core.seq(vec__56785);
var first__56787 = cljs.core.first(seq__56786);
var seq__56786__$1 = cljs.core.next(seq__56786);
var h = first__56787;
var t = seq__56786__$1;
var new_path = cljs.core.PersistentVector.EMPTY;
var G__56783__$1 = G__56783;
var new_path__$1 = new_path;
while(true){
var vec__56793 = G__56783__$1;
var seq__56794 = cljs.core.seq(vec__56793);
var first__56795 = cljs.core.first(seq__56794);
var seq__56794__$1 = cljs.core.next(seq__56794);
var h__$1 = first__56795;
var t__$1 = seq__56794__$1;
var new_path__$2 = new_path__$1;
if(cljs.core.truth_(h__$1)){
var np = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
var c = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,np);
if(edn_query_language.core.ident_QMARK_(c)){
var G__56867 = t__$1;
var G__56868 = c;
G__56783__$1 = G__56867;
new_path__$1 = G__56868;
continue;
} else {
var G__56869 = t__$1;
var G__56870 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
G__56783__$1 = G__56869;
new_path__$1 = G__56870;
continue;
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,new_path__$2)){
return new_path__$2;
} else {
return path;
}
}
break;
}
});
/**
 * Like clojure.core/get-in, but as it traverses the path it will follow idents in the state-map. This makes it similar
 * to a very targeted `db->tree`, but allows you to get something along a particular path without needing to parse a query.
 * 
 * Returns the data at the path, `not-found` (if specified) if nothing is found; otherwise nil.
 * 
 * See also `tree-path->db-path`.
 */
com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph = (function com$fulcrologic$fulcro$algorithms$normalized_state$get_in_graph(var_args){
var G__56810 = arguments.length;
switch (G__56810) {
case 2:
return com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$2 = (function (state_map,path){
return com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$3(state_map,path,null);
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$3 = (function (state_map,path,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,com.fulcrologic.fulcro.algorithms.normalized_state.tree_path__GT_db_path(state_map,path),not_found);
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$lang$maxFixedArity = 3);

/**
 * Obtain a tree of props for a UI instance from the current application state. Useful in mutations where you want
 * to denormalize an entity from the state database. `this` can often be obtained from the mutation `env` at the
 *   `:component` key.
 */
com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props = (function com$fulcrologic$fulcro$algorithms$normalized_state$ui__GT_props(var_args){
var G__56814 = arguments.length;
switch (G__56814) {
case 1:
return com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.component__GT_state_map(this$),com.fulcrologic.fulcro.components.react_type(this$),(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)));
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3 = (function (state_map,component_class,ident){
return com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map),com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$2(state_map,ident),state_map);
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$lang$maxFixedArity = 3);

/**
 * Dissociates an entry from a nested associative structure returning a new
 * nested structure. keys is a sequence of keys. Any empty maps that result
 * will not be present in the new structure.
 * 
 * The `ks` is *not* ident-aware. This function is here simply because it
 * is often needed, and clojure.core does not supply it.
 * 
 */
com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in = (function com$fulcrologic$fulcro$algorithms$normalized_state$dissoc_in(m,p__56815){
var vec__56816 = p__56815;
var seq__56817 = cljs.core.seq(vec__56816);
var first__56818 = cljs.core.first(seq__56817);
var seq__56817__$1 = cljs.core.next(seq__56817);
var k = first__56818;
var ks = seq__56817__$1;
var keys = vec__56816;
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Remove the given entity at the given ident. Also scans all tables and removes any to-one or to-many idents that are
 *   found that match `ident` (removes dangling pointers to the removed entity).
 * 
 *   The optional `cascade` parameter is a set of keywords that represent edges that should cause recursive deletes
 *   (i.e. it indicates edge names that *own* something, indicating it is safe to remove those entities as well).
 * 
 *   Returns the new state map with the entity(ies) removed.
 */
com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity = (function com$fulcrologic$fulcro$algorithms$normalized_state$remove_entity(var_args){
var G__56823 = arguments.length;
switch (G__56823) {
case 2:
return com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$core$IFn$_invoke$arity$2 = (function (state_map,ident){
return com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$core$IFn$_invoke$arity$3(state_map,ident,cljs.core.PersistentHashSet.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$core$IFn$_invoke$arity$3 = (function (state_map,ident,cascade){
var normalized_paths = (function (){var paths_STAR_ = (function com$fulcrologic$fulcro$algorithms$normalized_state$paths_STAR_(ps,ks,m){
return cljs.core.reduce_kv((function (ps__$1,k,v){
if(cljs.core.map_QMARK_(v)){
return com$fulcrologic$fulcro$algorithms$normalized_state$paths_STAR_(ps__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k),v);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k));
}
}),ps,m);
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56819_SHARP_){
return (cljs.core.count(p1__56819_SHARP_) < (4));
}),paths_STAR_(cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,state_map));
})();
var ident_specific_paths = (function (state,ident__$1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (a_path){
var vl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,a_path);
if(cljs.core.coll_QMARK_(vl)){
var or__5045__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([ident__$1]),vl);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ident__$1,vl);
}
} else {
return null;
}
}),normalized_paths);
});
var remove_ident_at_path = (function (state,a_normalized_path,ident__$1){
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,a_normalized_path);
if(cljs.core.coll_QMARK_(v)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,ident__$1)){
return com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in(state,a_normalized_path);
} else {
if(cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,v)){
return com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_(state,ident__$1,a_normalized_path);
} else {
return state;

}
}
} else {
return state;
}
});
var remove_ident_from_tables = (function (state,ident__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56820_SHARP_,p2__56821_SHARP_){
return remove_ident_at_path(p1__56820_SHARP_,p2__56821_SHARP_,ident__$1);
}),state,ident_specific_paths(state,ident__$1));
});
var state_without_entity = com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in(remove_ident_from_tables(state_map,ident),ident);
var target_entity = com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$2(state_map,ident);
var cascaded_idents = (function (){var table_key = cljs.core.first(ident);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (entity_field){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_key,(table_key.cljs$core$IFn$_invoke$arity$1 ? table_key.cljs$core$IFn$_invoke$arity$1(target_entity) : table_key.call(null,target_entity))], null),entity_field));
}),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cascade,cljs.core.set(cljs.core.keys(target_entity))));
})();
var final_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,edge){
if(cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,edge)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_state,ident__$1){
return com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$core$IFn$_invoke$arity$3(new_state,ident__$1,cascade);
}),state,edge);
} else {
return com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$core$IFn$_invoke$arity$3(state,edge,cascade);
}
}),state_without_entity,cascaded_idents);
return final_state;
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity.cljs$lang$maxFixedArity = 3);

/**
 * Returns the sorted version of the provided vector of idents.
 * 
 *   Intended to be used as
 *   ```
 *   (sort-idents-by people-idents :person/name)
 *   ```
 * 
 *   NOTE: The order of parameters is different from clojure.core/sort-by to facilitate:
 * 
 *   ```
 *   (swap! state update-in [:person/id 1 :person/children]
 *  (partial sort-idents-by @state) :person/first-name)
 * 
 *   ```
 * 
 *   You can optionally pass a `comp-fn` which is as-described in `sort-by`.
 *   
 */
com.fulcrologic.fulcro.algorithms.normalized_state.sort_idents_by = (function com$fulcrologic$fulcro$algorithms$normalized_state$sort_idents_by(var_args){
var G__56846 = arguments.length;
switch (G__56846) {
case 4:
return com.fulcrologic.fulcro.algorithms.normalized_state.sort_idents_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalized_state.sort_idents_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalized_state.sort_idents_by.cljs$core$IFn$_invoke$arity$4 = (function (state_map,vector_of_idents,sortkey_fn,comp_fn){
var kfn = (function (ident){
var G__56850 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident);
return (sortkey_fn.cljs$core$IFn$_invoke$arity$1 ? sortkey_fn.cljs$core$IFn$_invoke$arity$1(G__56850) : sortkey_fn.call(null,G__56850));
});
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(kfn,comp_fn,vector_of_idents));
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.sort_idents_by.cljs$core$IFn$_invoke$arity$3 = (function (state_map,vector_of_idents,sortkey_fn){
return com.fulcrologic.fulcro.algorithms.normalized_state.sort_idents_by.cljs$core$IFn$_invoke$arity$4(state_map,vector_of_idents,sortkey_fn,cljs.core.compare);
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.sort_idents_by.cljs$lang$maxFixedArity = 4);

/**
 * Runs clojure.core/update on the table entry in the state database that corresponds
 * to the mutation caller (which can be explicitly set via `:ref` when calling `transact!`).
 * 
 * Equivalent to
 * ```
 * (apply swap! (:state env) update-in (:ref env) ...)
 * ```
 * 
 */
com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_BANG_ = (function com$fulcrologic$fulcro$algorithms$normalized_state$update_caller_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56879 = arguments.length;
var i__5770__auto___56880 = (0);
while(true){
if((i__5770__auto___56880 < len__5769__auto___56879)){
args__5775__auto__.push((arguments[i__5770__auto___56880]));

var G__56881 = (i__5770__auto___56880 + (1));
i__5770__auto___56880 = G__56881;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__56858,args){
var map__56859 = p__56858;
var map__56859__$1 = cljs.core.__destructure_map(map__56859);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56859__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56859__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,ref,args);
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_BANG_.cljs$lang$applyTo = (function (seq56854){
var G__56855 = cljs.core.first(seq56854);
var seq56854__$1 = cljs.core.next(seq56854);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56855,seq56854__$1);
}));

/**
 * Like swap! but starts at the ref from `env`, adds in supplied `path` elements
 *   (resolving across idents if necessary). Finally runs an update-in on that resultant
 *   path with the given `args`.
 * 
 * Equivalent to:
 * ```
 * (swap! (:state env) update-in (tree-path->db-path @state (into (:ref env) path)) args)
 * ```
 * with a small bit of additional sanity checking.
 */
com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_in_BANG_ = (function com$fulcrologic$fulcro$algorithms$normalized_state$update_caller_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56882 = arguments.length;
var i__5770__auto___56883 = (0);
while(true){
if((i__5770__auto___56883 < len__5769__auto___56882)){
args__5775__auto__.push((arguments[i__5770__auto___56883]));

var G__56885 = (i__5770__auto___56883 + (1));
i__5770__auto___56883 = G__56885;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__56863,path,args){
var map__56864 = p__56863;
var map__56864__$1 = cljs.core.__destructure_map(map__56864);
var mutation_env = map__56864__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56864__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56864__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var path__$1 = com.fulcrologic.fulcro.algorithms.normalized_state.tree_path__GT_db_path(cljs.core.deref(state),cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref,path));
if(cljs.core.truth_((function (){var and__5043__auto__ = path__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.algorithms.normalized_state.get_in_graph.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path__$1);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,path__$1,args);
} else {
return cljs.core.deref(state);
}
}));

(com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.normalized_state.update_caller_in_BANG_.cljs$lang$applyTo = (function (seq56860){
var G__56861 = cljs.core.first(seq56860);
var seq56860__$1 = cljs.core.next(seq56860);
var G__56862 = cljs.core.first(seq56860__$1);
var seq56860__$2 = cljs.core.next(seq56860__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56861,G__56862,seq56860__$2);
}));


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.normalized_state.js.map
