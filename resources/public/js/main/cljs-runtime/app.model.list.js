goog.provide('app.model.list');
/**
 * 
 */
app.model.list.todo_add = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.list","todo-add","app.model.list/todo-add",371275898,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.list","todo-add","app.model.list/todo-add",371275898,null),(function (fulcro_mutation_env_symbol){
var map__58834 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__58834__$1 = cljs.core.__destructure_map(map__58834);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$list$remote(env){
return true;
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function app$model$list$ok_action(p__58835){
var map__58836 = p__58835;
var map__58836__$1 = cljs.core.__destructure_map(map__58836);
var env = map__58836__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58836__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__58837_58848 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58838_58849 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58838_58849);

try{var new_todo_id_58850 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("app.model.list","todo-add","app.model.list/todo-add",371275898,null),new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__56758__auto__){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s__56758__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),list_id,new cljs.core.Keyword("list","todos","list/todos",583299230)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_58850], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_58850], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_58850,new cljs.core.Keyword("todo","text","todo/text",-1787258203),"",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58837_58848);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__58839 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58840 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58840);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58839);
}})], null);
}));
/**
 * 
 */
app.model.list.todo_delete = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.list","todo-delete","app.model.list/todo-delete",2074320579,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.list","todo-delete","app.model.list/todo-delete",2074320579,null),(function (fulcro_mutation_env_symbol){
var map__58841 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__58841__$1 = cljs.core.__destructure_map(map__58841);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var todo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$list$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$list$action(p__58842){
var map__58843 = p__58842;
var map__58843__$1 = cljs.core.__destructure_map(map__58843);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__58844_58851 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58845_58852 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58845_58852);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__56758__auto__){
return com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in(com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_(s__56758__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),list_id,new cljs.core.Keyword("list","todos","list/todos",583299230)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58844_58851);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__58846 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58847 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58847);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58846);
}})], null);
}));

//# sourceMappingURL=app.model.list.js.map
