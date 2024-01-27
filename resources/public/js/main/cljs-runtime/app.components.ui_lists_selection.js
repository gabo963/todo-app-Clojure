goog.provide('app.components.ui_lists_selection');

var options__48138__auto___51690 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_lists_selection$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_list_list.ListList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_todo_list.Lista)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_lists_selection$ident_STAR_(this$,p__51687){
var map__51688 = p__51687;
var map__51688__$1 = cljs.core.__destructure_map(map__51688);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51688__$1,new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200));
var selected_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51688__$1,new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.components.ui-lists-selection","list-picker","app.components.ui-lists-selection/list-picker",-1391815791)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$components$ui_lists_selection$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200),app.components.ui_list_list.ListList,new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384),app.components.ui_todo_list.Lista], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_lists_selection$render_ListPicker(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51689 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__51689__$1 = cljs.core.__destructure_map(map__51689);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51689__$1,new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200));
var selected_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51689__$1,new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.components.ui_list_list.ui_list_list.cljs$core$IFn$_invoke$arity$1 ? app.components.ui_list_list.ui_list_list.cljs$core$IFn$_invoke$arity$1(list) : app.components.ui_list_list.ui_list_list.call(null,list))], null),new cljs.core.Keyword(null,".column",".column",1389783581)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.components.ui_todo_list.ui_list.cljs$core$IFn$_invoke$arity$1 ? app.components.ui_todo_list.ui_list.cljs$core$IFn$_invoke$arity$1(selected_list) : app.components.ui_todo_list.ui_list.call(null,selected_list))], null),new cljs.core.Keyword(null,".column",".column",1389783581))], null),new cljs.core.Keyword(null,".ui.two.column.container.grid",".ui.two.column.container.grid",1396250453));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_lists_selection !== 'undefined') && (typeof app.components.ui_lists_selection.ListPicker !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_lists_selection.ListPicker = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48138__auto___51690,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_lists_selection.ListPicker,new cljs.core.Keyword("app.components.ui-lists-selection","ListPicker","app.components.ui-lists-selection/ListPicker",-777591202),options__48138__auto___51690);
app.components.ui_lists_selection.ui_list_picker = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.components.ui_lists_selection.ListPicker);

//# sourceMappingURL=app.components.ui_lists_selection.js.map
