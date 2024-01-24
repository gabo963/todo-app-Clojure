goog.provide('app.components.ui_todo');
app.components.ui_todo.ui_todo_checkbox = (function app$components$ui_todo$ui_todo_checkbox(this$,id,done){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69968 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930),cljs.core.not(done)], null);
return (app.model.todo.todo_change_done.cljs$core$IFn$_invoke$arity$1 ? app.model.todo.todo_change_done.cljs$core$IFn$_invoke$arity$1(G__69968) : app.model.todo.todo_change_done.call(null,G__69968));
})()], null));
})], null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),""])], null),null);
});
app.components.ui_todo.ui_todo_input = (function app$components$ui_todo$ui_todo_input(this$,id,text,done){
if(cljs.core.truth_(done)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null)], null),new cljs.core.Keyword(null,".w-full",".w-full",61905205))], null),new cljs.core.Keyword(null,".ui.disabled.input",".ui.disabled.input",-23203583));
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write Something",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__69969_SHARP_){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69970 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203),com.fulcrologic.fulcro.dom.events.target_value(p1__69969_SHARP_)], null);
return (app.model.todo.todo_change_text.cljs$core$IFn$_invoke$arity$1 ? app.model.todo.todo_change_text.cljs$core$IFn$_invoke$arity$1(G__69970) : app.model.todo.todo_change_text.call(null,G__69970));
})()], null));
})], null)], null),new cljs.core.Keyword(null,".w-full",".w-full",61905205))], null),new cljs.core.Keyword(null,".ui.input",".ui.input",437295036));
}
});
app.components.ui_todo.ui_todo_delete_button = (function app$components$ui_todo$ui_todo_delete_button(onDelete,id){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (onDelete.cljs$core$IFn$_invoke$arity$1 ? onDelete.cljs$core$IFn$_invoke$arity$1(id) : onDelete.call(null,id));
})], null),"",com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "x icon"})])], null),new cljs.core.Keyword(null,".ui.icon.button",".ui.icon.button",-934115019))], null),new cljs.core.Keyword(null,".fluid",".fluid",1194491397));
});

var options__63143__auto___69975 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_todo$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","done","todo/done",-886331930),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_todo$ident_STAR_(this$,p__69971){
var map__69972 = p__69971;
var map__69972__$1 = cljs.core.__destructure_map(map__69972);
var props = map__69972__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69972__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69972__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69972__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","id","todo/id",-1375661554).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_todo$render_Todo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__69973 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__69973__$1 = cljs.core.__destructure_map(map__69973);
var props = map__69973__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69973__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69973__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69973__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
var map__69974 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__69974__$1 = cljs.core.__destructure_map(map__69974);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69974__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.ui_todo.ui_todo_checkbox(this$,id,done)], null),new cljs.core.Keyword(null,".column",".column",1389783581)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.ui_todo.ui_todo_input(this$,id,text,done)], null),new cljs.core.Keyword(null,".ten.wide.column",".ten.wide.column",-1038580355)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.ui_todo.ui_todo_delete_button(onDelete,id)], null),new cljs.core.Keyword(null,".two.wide.column",".two.wide.column",-879756945))], null),new cljs.core.Keyword(null,".ui.grid",".ui.grid",-1055033377));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_todo !== 'undefined') && (typeof app.components.ui_todo.Todo !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_todo.Todo = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__63143__auto___69975,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_todo.Todo,new cljs.core.Keyword("app.components.ui-todo","Todo","app.components.ui-todo/Todo",1766621371),options__63143__auto___69975);
app.components.ui_todo.ui_todo = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.components.ui_todo.Todo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null));

//# sourceMappingURL=app.components.ui_todo.js.map
