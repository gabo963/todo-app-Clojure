goog.provide('app.components.ui_list');
app.components.ui_list.delete_todo_BANG_ = (function app$components$ui_list$delete_todo_BANG_(this$,list_id,todo_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59119 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","id","list/id",-1385338442),list_id,new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null);
return (app.model.list.todo_delete.cljs$core$IFn$_invoke$arity$1 ? app.model.list.todo_delete.cljs$core$IFn$_invoke$arity$1(G__59119) : app.model.list.todo_delete.call(null,G__59119));
})()], null));
});
app.components.ui_list.ui_todo = (function app$components$ui_list$ui_todo(this$,list_id,todo){
var G__59120 = (function (){var G__59121 = todo;
var G__59122 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.components.ui_list.delete_todo_BANG_,this$,list_id)], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__59121,G__59122) : com.fulcrologic.fulcro.components.computed.call(null,G__59121,G__59122));
})();
return (app.components.ui_todo.ui_todo.cljs$core$IFn$_invoke$arity$1 ? app.components.ui_todo.ui_todo.cljs$core$IFn$_invoke$arity$1(G__59120) : app.components.ui_todo.ui_todo.call(null,G__59120));
});

var options__52180__auto___59128 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_list$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","name","list/name",1849094347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","todos","list/todos",583299230),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_todo.Todo)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_list$ident_STAR_(this$,p__59124){
var map__59125 = p__59124;
var map__59125__$1 = cljs.core.__destructure_map(map__59125);
var props = map__59125__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword("list","name","list/name",1849094347));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword("list","todos","list/todos",583299230));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_list$render_Lista(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59126 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59126__$1 = cljs.core.__destructure_map(map__59126);
var props = map__59126__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59126__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59126__$1,new cljs.core.Keyword("list","name","list/name",1849094347));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59126__$1,new cljs.core.Keyword("list","todos","list/todos",583299230));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name," Todos:"], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59123_SHARP_){
return app.components.ui_list.ui_todo(this$,id,p1__59123_SHARP_);
}),todos)], null),null),(cljs.core.truth_(todos)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59127 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","id","list/id",-1385338442),id], null);
return (app.model.list.todo_add.cljs$core$IFn$_invoke$arity$1 ? app.model.list.todo_add.cljs$core$IFn$_invoke$arity$1(G__59127) : app.model.list.todo_add.call(null,G__59127));
})()], null));
})], null),"Add item"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607)):null)], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_list !== 'undefined') && (typeof app.components.ui_list.Lista !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_list.Lista = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__52180__auto___59128,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_list.Lista,new cljs.core.Keyword("app.components.ui-list","Lista","app.components.ui-list/Lista",583541303),options__52180__auto___59128);
app.components.ui_list.ui_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.components.ui_list.Lista,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("list","id","list/id",-1385338442)], null));

//# sourceMappingURL=app.components.ui_list.js.map
