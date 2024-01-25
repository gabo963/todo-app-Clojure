goog.provide('app.model.list');
/**
 * 
 */
app.model.list.todo_add = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.list","todo-add","app.model.list/todo-add",371275898,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.list","todo-add","app.model.list/todo-add",371275898,null),(function (fulcro_mutation_env_symbol){
var map__59094 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59094__$1 = cljs.core.__destructure_map(map__59094);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59094__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$list$remote(env){
return true;
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function app$model$list$ok_action(p__59095){
var map__59097 = p__59095;
var map__59097__$1 = cljs.core.__destructure_map(map__59097);
var env = map__59097__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59097__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__59098_59113 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59099_59114 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59099_59114);

try{var new_todo_id_59115 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("app.model.list","todo-add","app.model.list/todo-add",371275898,null),new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__56758__auto__){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s__56758__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),list_id,new cljs.core.Keyword("list","todos","list/todos",583299230)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_59115], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_59115], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_59115,new cljs.core.Keyword("todo","text","todo/text",-1787258203),"",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59098_59113);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59100 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59101 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59101);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59100);
}})], null);
}));
/**
 * 
 */
app.model.list.todo_delete = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.list","todo-delete","app.model.list/todo-delete",2074320579,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.list","todo-delete","app.model.list/todo-delete",2074320579,null),(function (fulcro_mutation_env_symbol){
var map__59102 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59102__$1 = cljs.core.__destructure_map(map__59102);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59102__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var todo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59102__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$list$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$list$action(p__59105){
var map__59106 = p__59105;
var map__59106__$1 = cljs.core.__destructure_map(map__59106);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59106__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__59107_59117 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59108_59118 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59108_59118);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__56758__auto__){
return com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in(com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_(s__56758__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),list_id,new cljs.core.Keyword("list","todos","list/todos",583299230)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59107_59117);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59110 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59111 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59111);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59110);
}})], null);
}));

//# sourceMappingURL=app.model.list.js.map
