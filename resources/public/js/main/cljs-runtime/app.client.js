goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.algorithms.normalized_state');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.dom.events');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');
/**
 * 
 */
app.client.todo_change_text = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","todo-change-text","app.client/todo-change-text",427684630,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","todo-change-text","app.client/todo-change-text",427684630,null),(function (fulcro_mutation_env_symbol){
var map__50149 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__50149__$1 = (((((!((map__50149 == null))))?(((((map__50149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50149):map__50149);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50149__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50149__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__50149,map__50149__$1,id,text){
return (function app$client$action(p__50151){
var map__50152 = p__50151;
var map__50152__$1 = (((((!((map__50152 == null))))?(((((map__50152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50152):map__50152);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50152__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__50154_50198 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__50155_50199 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__50155_50199;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),text);
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__50154_50198;
}
return null;
});})(map__50149,map__50149__$1,id,text))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__50149,map__50149__$1,id,text){
return (function (env){
var _STAR_after_render_STAR__orig_val__50156 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__50157 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__50157;

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__50156;
}});})(map__50149,map__50149__$1,id,text))
], null);
}));
/**
 * 
 */
app.client.todo_change_done = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","todo-change-done","app.client/todo-change-done",-1801832777,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","todo-change-done","app.client/todo-change-done",-1801832777,null),(function (fulcro_mutation_env_symbol){
var map__50158 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__50158__$1 = (((((!((map__50158 == null))))?(((((map__50158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50158):map__50158);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__50158,map__50158__$1,id,done){
return (function app$client$action(p__50160){
var map__50161 = p__50160;
var map__50161__$1 = (((((!((map__50161 == null))))?(((((map__50161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50161):map__50161);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50161__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__50163_50200 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__50164_50201 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__50164_50201;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930)], null),done);
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__50163_50200;
}
return null;
});})(map__50158,map__50158__$1,id,done))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__50158,map__50158__$1,id,done){
return (function (env){
var _STAR_after_render_STAR__orig_val__50165 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__50166 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__50166;

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__50165;
}});})(map__50158,map__50158__$1,id,done))
], null);
}));

var options__46640__auto___50202 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","done","todo/done",-886331930),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__50168){
var map__50169 = p__50168;
var map__50169__$1 = (((((!((map__50169 == null))))?(((((map__50169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50169):map__50169);
var props = map__50169__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","id","todo/id",-1375661554).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","text","todo/text",-1787258203),""], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Todo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__50171 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__50171__$1 = (((((!((map__50171 == null))))?(((((map__50171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50171):map__50171);
var props = map__50171__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50171__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50171__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50171__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
var map__50172 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__50172__$1 = (((((!((map__50172 == null))))?(((((map__50172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50172):map__50172);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50172__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__50171,map__50171__$1,props,id,done,text,map__50172,map__50172__$1,onDelete){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50175 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930),cljs.core.not(done)], null);
return (app.client.todo_change_done.cljs$core$IFn$_invoke$arity$1 ? app.client.todo_change_done.cljs$core$IFn$_invoke$arity$1(G__50175) : app.client.todo_change_done.call(null,G__50175));
})()], null));
});})(map__50171,map__50171__$1,props,id,done,text,map__50172,map__50172__$1,onDelete))
], null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),""])], null),new cljs.core.Keyword(null,".column",".column",1389783581)),(cljs.core.truth_(done)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null)], null),new cljs.core.Keyword(null,".w-full",".w-full",61905205))], null),new cljs.core.Keyword(null,".ui.disabled.input.ten.wide.column",".ui.disabled.input.ten.wide.column",1323431635)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write Something",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__50171,map__50171__$1,props,id,done,text,map__50172,map__50172__$1,onDelete){
return (function (p1__50167_SHARP_){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50176 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203),com.fulcrologic.fulcro.dom.events.target_value(p1__50167_SHARP_)], null);
return (app.client.todo_change_text.cljs$core$IFn$_invoke$arity$1 ? app.client.todo_change_text.cljs$core$IFn$_invoke$arity$1(G__50176) : app.client.todo_change_text.call(null,G__50176));
})()], null));
});})(map__50171,map__50171__$1,props,id,done,text,map__50172,map__50172__$1,onDelete))
], null)], null),new cljs.core.Keyword(null,".w-full",".w-full",61905205))], null),new cljs.core.Keyword(null,".ui.input.ten.wide.column",".ui.input.ten.wide.column",2025388323))),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__50171,map__50171__$1,props,id,done,text,map__50172,map__50172__$1,onDelete){
return (function (){
return (onDelete.cljs$core$IFn$_invoke$arity$1 ? onDelete.cljs$core$IFn$_invoke$arity$1(id) : onDelete.call(null,id));
});})(map__50171,map__50171__$1,props,id,done,text,map__50172,map__50172__$1,onDelete))
], null),"",com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "x icon"})])], null),new cljs.core.Keyword(null,".ui.icon.button",".ui.icon.button",-934115019))], null),new cljs.core.Keyword(null,".two.wide.column.fluid",".two.wide.column.fluid",-1576155300))], null),new cljs.core.Keyword(null,".ui.grid",".ui.grid",-1055033377));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Todo !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Todo = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46640__auto___50202,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Todo,new cljs.core.Keyword("app.client","Todo","app.client/Todo",291791615),options__46640__auto___50202);
app.client.ui_todo = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Todo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null));
/**
 * 
 */
app.client.todo_delete = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","todo-delete","app.client/todo-delete",49048779,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","todo-delete","app.client/todo-delete",49048779,null),(function (fulcro_mutation_env_symbol){
var map__50177 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__50177__$1 = (((((!((map__50177 == null))))?(((((map__50177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50177):map__50177);
var lista_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50177__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var todo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50177__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__50177,map__50177__$1,lista_id,todo_id){
return (function app$client$action(p__50179){
var map__50180 = p__50179;
var map__50180__$1 = (((((!((map__50180 == null))))?(((((map__50180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50180):map__50180);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50180__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__50182_50203 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__50183_50204 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__50183_50204;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (_STAR_after_render_STAR__orig_val__50182_50203,_STAR_after_render_STAR__temp_val__50183_50204,map__50180,map__50180__$1,state,map__50177,map__50177__$1,lista_id,todo_id){
return (function (s__46761__auto__){
return com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in(com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_(s__46761__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),lista_id,new cljs.core.Keyword("lista","todos","lista/todos",531969415)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null));
});})(_STAR_after_render_STAR__orig_val__50182_50203,_STAR_after_render_STAR__temp_val__50183_50204,map__50180,map__50180__$1,state,map__50177,map__50177__$1,lista_id,todo_id))
);
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__50182_50203;
}
return null;
});})(map__50177,map__50177__$1,lista_id,todo_id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__50177,map__50177__$1,lista_id,todo_id){
return (function (env){
var _STAR_after_render_STAR__orig_val__50184 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__50185 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__50185;

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__50184;
}});})(map__50177,map__50177__$1,lista_id,todo_id))
], null);
}));

var options__46640__auto___50205 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","name","lista/name",1611084718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lista","todos","lista/todos",531969415),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Todo)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__50187){
var map__50188 = p__50187;
var map__50188__$1 = (((((!((map__50188 == null))))?(((((map__50188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50188):map__50188);
var props = map__50188__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50188__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50188__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50188__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","id","lista/id",-1285810479).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("lista","name","lista/name",1611084718),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("lista","todos","lista/todos",531969415),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lista","todos","lista/todos",531969415),app.client.Todo], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Lista(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__50190 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__50190__$1 = (((((!((map__50190 == null))))?(((((map__50190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50190):map__50190);
var props = map__50190__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
var delete_todo = ((function (map__50190,map__50190__$1,props,id,name,todos){
return (function (todo_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50192 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),id,new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null);
return (app.client.todo_delete.cljs$core$IFn$_invoke$arity$1 ? app.client.todo_delete.cljs$core$IFn$_invoke$arity$1(G__50192) : app.client.todo_delete.call(null,G__50192));
})()], null));
});})(map__50190,map__50190__$1,props,id,name,todos))
;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,"'s Todos"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Todos:"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (delete_todo,map__50190,map__50190__$1,props,id,name,todos){
return (function (p1__50186_SHARP_){
var G__50193 = (function (){var G__50194 = p1__50186_SHARP_;
var G__50195 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),delete_todo], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__50194,G__50195) : com.fulcrologic.fulcro.components.computed.call(null,G__50194,G__50195));
})();
return (app.client.ui_todo.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_todo.cljs$core$IFn$_invoke$arity$1(G__50193) : app.client.ui_todo.call(null,G__50193));
});})(delete_todo,map__50190,map__50190__$1,props,id,name,todos))
,todos)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "ui button"}),"Add item"]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Lista !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Lista = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46640__auto___50205,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Lista,new cljs.core.Keyword("app.client","Lista","app.client/Lista",-889360437),options__46640__auto___50205);
app.client.ui_lista = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Lista,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("lista","id","lista/id",-1285810479)], null));

var options__46640__auto___50206 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","lista","root/lista",745692867),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Lista)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","lista","root/lista",745692867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Gabriel"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","lista","root/lista",745692867),app.client.Lista], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__50196 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__50196__$1 = (((((!((map__50196 == null))))?(((((map__50196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50196):map__50196);
var lista = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50196__$1,new cljs.core.Keyword("root","lista","root/lista",745692867));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({}),"Todo List"])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(lista)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_lista.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_lista.cljs$core$IFn$_invoke$arity$1(lista) : app.client.ui_lista.call(null,lista))], null),null):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Loading..."])))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46640__auto___50206,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__46640__auto___50206);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Root,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
