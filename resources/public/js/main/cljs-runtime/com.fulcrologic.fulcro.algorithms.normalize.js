goog.provide('com.fulcrologic.fulcro.algorithms.normalize');
/**
 * Insert or merge a data entity into a state table under the given `ident`.
 *   A better version of `(update-in state ident merge entity-map)`.
 *   Ex.: `(upsert-ident {} [:person/id 1] #:person{:id 1 :age 42}) => {:person/id {1 #:person{:id 1, :age 42}}}`
 */
com.fulcrologic.fulcro.algorithms.normalize.upsert_ident = (function com$fulcrologic$fulcro$algorithms$normalize$upsert_ident(state,ident,entity_map){
try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,ident,cljs.core.merge,entity_map);
}catch (e61649){var e = e61649;
if(cljs.core.map_QMARK_(entity_map)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query join indicates the data should contain a data map but the actual data is ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity_map], 0))," Joined component's ident: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Insert/update of the presumed data entity ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity_map], 0))," into the state at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident)," failed due to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),cljs.core.PersistentArrayMap.EMPTY,e);
}});
com.fulcrologic.fulcro.algorithms.normalize.hide_not_found = (function com$fulcrologic$fulcro$algorithms$normalize$hide_not_found(m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__61658){
var vec__61659 = p__61658;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61659,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),k)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))))){
return acc;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
});
com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_ = (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR_(query,data,tables,union_seen,transform){
var data__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = transform;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.vector_QMARK_(data)));
} else {
return and__5043__auto__;
}
})())?(transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(query,data) : transform.call(null,query,data)):data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = (function (){var G__61705 = data__$1;
var G__61705__$1 = (((G__61705 == null))?null:com.fulcrologic.fulcro.algorithms.normalize.hide_not_found(G__61705));
if((G__61705__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,G__61705__$1);
}
})();
if(((cljs.core.seq(data__$1)) && ((ident == null)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.normalize",null,54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union component received data, but the ident function returned nil.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),com.fulcrologic.fulcro.raw.components.component_name(class$),new cljs.core.Keyword(null,"data","data",-232669377),data__$1], null)], null);
}),null)),null,1336868919,null);
} else {
if((cljs.core.second(ident) == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.normalize",null,59,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union component returned nil for the ID of an ident during normalize."], null);
}),null)),null,1864140866,null);
} else {
}

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__61718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__61719 = data__$1;
var G__61720 = tables;
var G__61721 = union_seen;
var G__61722 = transform;
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(G__61718,G__61719,G__61720,G__61721,G__61722) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,G__61718,G__61719,G__61720,G__61721,G__61722));
})(),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.normalize","tag","com.fulcrologic.fulcro.algorithms.normalize/tag",313912943),cljs.core.first(ident));
}
} else {
if(cljs.core.vector_QMARK_(data__$1)){
return data__$1;
} else {
var q = cljs.core.seq(query);
var ret = data__$1;
while(true){
if((!((q == null)))){
var expr = cljs.core.first(q);
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(expr)){
var vec__61768 = com.fulcrologic.fulcro.algorithms.do_not_use.join_entry(expr);
var join_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61768,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61768,(1),null);
var recursive_QMARK_ = com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(subquery);
var union_entry = ((com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(expr))?subquery:union_seen);
var subquery__$1 = ((recursive_QMARK_)?(((!((union_seen == null))))?union_seen:query):subquery);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(subquery__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,join_key);
if(((recursive_QMARK_) && (edn_query_language.core.ident_QMARK_(v)))){
var G__61800 = cljs.core.next(q);
var G__61801 = ret;
q = G__61800;
ret = G__61801;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(subquery__$1,v,tables,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,subquery__$1,v,tables,union_entry,transform));
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(class$)))))))){
var i = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,com.fulcrologic.fulcro.algorithms.normalize.hide_not_found(x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tables,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__61802 = cljs.core.next(q);
var G__61803 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,i);
q = G__61802;
ret = G__61803;
continue;
} else {
var G__61804 = cljs.core.next(q);
var G__61805 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,x);
q = G__61804;
ret = G__61805;
continue;
}
} else {
if(((cljs.core.vector_QMARK_(v)) && ((((!(edn_query_language.core.ident_QMARK_(v)))) && ((!(edn_query_language.core.ident_QMARK_(cljs.core.first(v))))))))){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (p1__61683_SHARP_){
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(subquery__$1,p1__61683_SHARP_,tables,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,subquery__$1,p1__61683_SHARP_,tables,union_entry,transform));
});})(q,ret,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
),v);
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(class$)))))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (p1__61684_SHARP_){
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,com.fulcrologic.fulcro.algorithms.normalize.hide_not_found(p1__61684_SHARP_));
});})(q,ret,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
),xs);
if(cljs.core.vector_QMARK_(subquery__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tables,((function (q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (tables_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR__$_merge_to_client_db(state,p__61778){
var vec__61779 = p__61778;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61779,(0),null);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61779,(1),null);
return com.fulcrologic.fulcro.algorithms.normalize.upsert_ident(state,ident,entity);
});})(q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
,tables_SINGLEQUOTE_,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tables,((function (q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (tables_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR__$_merge_to_client_db(state,p__61783){
var vec__61784 = p__61783;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61784,(0),null);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61784,(1),null);
return com.fulcrologic.fulcro.algorithms.normalize.upsert_ident(state,ident,entity);
});})(q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
,tables_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__61768,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
);
}

var G__61806 = cljs.core.next(q);
var G__61807 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,is);
q = G__61806;
ret = G__61807;
continue;
} else {
var G__61808 = cljs.core.next(q);
var G__61809 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,xs);
q = G__61808;
ret = G__61809;
continue;
}
} else {
if((v == null)){
var G__61810 = cljs.core.next(q);
var G__61811 = ret;
q = G__61810;
ret = G__61811;
continue;
} else {
var G__61812 = cljs.core.next(q);
var G__61813 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,v);
q = G__61812;
ret = G__61813;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if((v == null)){
var G__61814 = cljs.core.next(q);
var G__61815 = ret;
q = G__61814;
ret = G__61815;
continue;
} else {
var G__61816 = cljs.core.next(q);
var G__61817 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__61816;
ret = G__61817;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
com.fulcrologic.fulcro.algorithms.normalize.better_normalize_STAR_ = (function com$fulcrologic$fulcro$algorithms$normalize$better_normalize_STAR_(query,data,tables,union_seen,transform){
try{return com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_(query,data,tables,union_seen,transform);
}catch (e61790){var e = e61790;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.normalize",null,150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Normalize failed and no data will be inserted into the client DB. Error:",cljs.core.ex_message(e),(function (){var temp__5802__auto__ = (function (){var G__61794 = query;
var G__61794__$1 = (((G__61794 == null))?null:cljs.core.meta(G__61794));
var G__61794__$2 = (((G__61794__$1 == null))?null:new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__61794__$1));
if((G__61794__$2 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.component_name(G__61794__$2);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
return ["Target component: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return ["Query: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
})(),"Data: ",data], null);
}),null)),null,180550892,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
/**
 * Given a component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db = (function com$fulcrologic$fulcro$algorithms$normalize$tree__GT_db(var_args){
var G__61799 = arguments.length;
switch (G__61799) {
case 2:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(x,data,merge_idents,null);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4 = (function (x,data,merge_idents,transform){
var tables = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(x,data));
var ret = com.fulcrologic.fulcro.algorithms.normalize.better_normalize_STAR_(x__$1,data,tables,null,transform);
if(merge_idents){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,cljs.core.deref(tables)], 0));
} else {
return cljs.core.with_meta(ret,cljs.core.deref(tables));
}
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.normalize.js.map
