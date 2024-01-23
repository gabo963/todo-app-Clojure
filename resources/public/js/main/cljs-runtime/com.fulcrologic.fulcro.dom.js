goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__67676){
var vec__67677 = p__67676;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67677,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67677,(1),null);
var pair = vec__67677;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__67686){
var vec__67687 = p__67686;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67687,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67687,(1),null);
var pair = vec__67687;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__67695){
var vec__67696 = p__67695;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67696,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67696,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__67700 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67700,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__67700;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * This fn is outdated - it expects js/ReactDOMServer to be defined (used to be provided cljsjs.react.dom.server).
 *   It is better to do it yourself (under shadow-cljs):
 * 
 * ```clj
 * (ns ex (:require ["react-dom/server" :as react-dom-server] ...))
 * (react-dom-server/renderToString c)
 * ```
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__67707 = arguments.length;
switch (G__67707) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__67710 = component.refs;
var G__67710__$1 = (((G__67710 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__67710,name));
if((G__67710__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__67710__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__67712 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__67715 = (function (){var G__67716 = r;
if((G__67716 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__67716);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__67715) : ref.call(null,G__67715));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__67712) : factory.call(null,G__67712));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__67723 = arguments.length;
switch (G__67723) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___69125 = arguments.length;
var i__5770__auto___69126 = (0);
while(true){
if((i__5770__auto___69126 < len__5769__auto___69125)){
args_arr__5794__auto__.push((arguments[i__5770__auto___69126]));

var G__69127 = (i__5770__auto___69126 + (1));
i__5770__auto___69126 = G__69127;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq67720){
var G__67721 = cljs.core.first(seq67720);
var seq67720__$1 = cljs.core.next(seq67720);
var G__67722 = cljs.core.first(seq67720__$1);
var seq67720__$2 = cljs.core.next(seq67720__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67721,G__67722,seq67720__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__67755 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__67755) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__67755));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x67767_69128 = ctor.prototype;
(x67767_69128.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x67767_69128.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__67765_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__67765_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-723592276,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x67767_69128.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__69129__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__69129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69130__i = 0, G__69130__a = new Array(arguments.length -  0);
while (G__69130__i < G__69130__a.length) {G__69130__a[G__69130__i] = arguments[G__69130__i + 0]; ++G__69130__i;}
  args = new cljs.core.IndexedSeq(G__69130__a,0,null);
} 
return G__69129__delegate.call(this,args);};
G__69129.cljs$lang$maxFixedArity = 0;
G__69129.cljs$lang$applyTo = (function (arglist__69131){
var args = cljs.core.seq(arglist__69131);
return G__69129__delegate(args);
});
G__69129.cljs$core$IFn$_invoke$arity$variadic = G__69129__delegate;
return G__69129;
})()
;
return (function() { 
var G__69132__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__69132 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__69133__i = 0, G__69133__a = new Array(arguments.length -  1);
while (G__69133__i < G__69133__a.length) {G__69133__a[G__69133__i] = arguments[G__69133__i + 1]; ++G__69133__i;}
  children = new cljs.core.IndexedSeq(G__69133__a,0,null);
} 
return G__69132__delegate.call(this,props,children);};
G__69132.cljs$lang$maxFixedArity = 1;
G__69132.cljs$lang$applyTo = (function (arglist__69134){
var props = cljs.core.first(arglist__69134);
var children = cljs.core.rest(arglist__69134);
return G__69132__delegate(props,children);
});
G__69132.cljs$core$IFn$_invoke$arity$variadic = G__69132__delegate;
return G__69132;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__67779 = tag;
switch (G__67779) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67779)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__67781 = arguments.length;
switch (G__67781) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__67782 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__67783 = cljs.core.seq(vec__67782);
var first__67784 = cljs.core.first(seq__67783);
var seq__67783__$1 = cljs.core.next(seq__67783);
var head = first__67784;
var tail = seq__67783__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__67785 = (function (){var G__67786 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67786,tail);

return G__67786;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67785) : f.call(null,G__67785));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__67787 = (function (){var G__67788 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67788,args);

return G__67788;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67787) : f.call(null,G__67787));
} else {
if(cljs.core.object_QMARK_(head)){
var G__67789 = (function (){var G__67790 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67790,tail);

return G__67790;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67789) : f.call(null,G__67789));
} else {
if(cljs.core.map_QMARK_(head)){
var G__67791 = (function (){var G__67792 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__67792,tail);

return G__67792;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67791) : f.call(null,G__67791));
} else {
var G__67793 = (function (){var G__67794 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67794,args);

return G__67794;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67793) : f.call(null,G__67793));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__67796 = arguments.length;
switch (G__67796) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__67800 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__67801 = cljs.core.seq(vec__67800);
var first__67802 = cljs.core.first(seq__67801);
var seq__67801__$1 = cljs.core.next(seq__67801);
var head = first__67802;
var tail = seq__67801__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__67803 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67803,tail);

return G__67803;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__67805 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67805,args);

return G__67805;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__67807 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67807,tail);

return G__67807;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__67808 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__67808,tail);

return G__67808;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__67809 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__67809,args);

return G__67809;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69138 = arguments.length;
var i__5770__auto___69139 = (0);
while(true){
if((i__5770__auto___69139 < len__5769__auto___69138)){
args__5775__auto__.push((arguments[i__5770__auto___69139]));

var G__69140 = (i__5770__auto___69139 + (1));
i__5770__auto___69139 = G__69140;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67822 = conformed_args__66417__auto__;
var map__67822__$1 = cljs.core.__destructure_map(map__67822);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq67820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69141 = arguments.length;
var i__5770__auto___69142 = (0);
while(true){
if((i__5770__auto___69142 < len__5769__auto___69141)){
args__5775__auto__.push((arguments[i__5770__auto___69142]));

var G__69143 = (i__5770__auto___69142 + (1));
i__5770__auto___69142 = G__69143;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67830 = conformed_args__66417__auto__;
var map__67830__$1 = cljs.core.__destructure_map(map__67830);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq67823){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67823));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69144 = arguments.length;
var i__5770__auto___69145 = (0);
while(true){
if((i__5770__auto___69145 < len__5769__auto___69144)){
args__5775__auto__.push((arguments[i__5770__auto___69145]));

var G__69146 = (i__5770__auto___69145 + (1));
i__5770__auto___69145 = G__69146;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67833 = conformed_args__66417__auto__;
var map__67833__$1 = cljs.core.__destructure_map(map__67833);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq67831){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67831));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69147 = arguments.length;
var i__5770__auto___69148 = (0);
while(true){
if((i__5770__auto___69148 < len__5769__auto___69147)){
args__5775__auto__.push((arguments[i__5770__auto___69148]));

var G__69149 = (i__5770__auto___69148 + (1));
i__5770__auto___69148 = G__69149;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67836 = conformed_args__66417__auto__;
var map__67836__$1 = cljs.core.__destructure_map(map__67836);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67836__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67836__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67836__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq67834){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69150 = arguments.length;
var i__5770__auto___69151 = (0);
while(true){
if((i__5770__auto___69151 < len__5769__auto___69150)){
args__5775__auto__.push((arguments[i__5770__auto___69151]));

var G__69152 = (i__5770__auto___69151 + (1));
i__5770__auto___69151 = G__69152;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67844 = conformed_args__66417__auto__;
var map__67844__$1 = cljs.core.__destructure_map(map__67844);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq67841){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67841));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69153 = arguments.length;
var i__5770__auto___69154 = (0);
while(true){
if((i__5770__auto___69154 < len__5769__auto___69153)){
args__5775__auto__.push((arguments[i__5770__auto___69154]));

var G__69155 = (i__5770__auto___69154 + (1));
i__5770__auto___69154 = G__69155;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67846 = conformed_args__66417__auto__;
var map__67846__$1 = cljs.core.__destructure_map(map__67846);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq67845){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69156 = arguments.length;
var i__5770__auto___69157 = (0);
while(true){
if((i__5770__auto___69157 < len__5769__auto___69156)){
args__5775__auto__.push((arguments[i__5770__auto___69157]));

var G__69158 = (i__5770__auto___69157 + (1));
i__5770__auto___69157 = G__69158;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67848 = conformed_args__66417__auto__;
var map__67848__$1 = cljs.core.__destructure_map(map__67848);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq67847){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67847));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69159 = arguments.length;
var i__5770__auto___69160 = (0);
while(true){
if((i__5770__auto___69160 < len__5769__auto___69159)){
args__5775__auto__.push((arguments[i__5770__auto___69160]));

var G__69161 = (i__5770__auto___69160 + (1));
i__5770__auto___69160 = G__69161;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67850 = conformed_args__66417__auto__;
var map__67850__$1 = cljs.core.__destructure_map(map__67850);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq67849){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69162 = arguments.length;
var i__5770__auto___69163 = (0);
while(true){
if((i__5770__auto___69163 < len__5769__auto___69162)){
args__5775__auto__.push((arguments[i__5770__auto___69163]));

var G__69164 = (i__5770__auto___69163 + (1));
i__5770__auto___69163 = G__69164;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67852 = conformed_args__66417__auto__;
var map__67852__$1 = cljs.core.__destructure_map(map__67852);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq67851){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69165 = arguments.length;
var i__5770__auto___69166 = (0);
while(true){
if((i__5770__auto___69166 < len__5769__auto___69165)){
args__5775__auto__.push((arguments[i__5770__auto___69166]));

var G__69167 = (i__5770__auto___69166 + (1));
i__5770__auto___69166 = G__69167;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67854 = conformed_args__66417__auto__;
var map__67854__$1 = cljs.core.__destructure_map(map__67854);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67854__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67854__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67854__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq67853){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67853));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69168 = arguments.length;
var i__5770__auto___69169 = (0);
while(true){
if((i__5770__auto___69169 < len__5769__auto___69168)){
args__5775__auto__.push((arguments[i__5770__auto___69169]));

var G__69170 = (i__5770__auto___69169 + (1));
i__5770__auto___69169 = G__69170;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67856 = conformed_args__66417__auto__;
var map__67856__$1 = cljs.core.__destructure_map(map__67856);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq67855){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69171 = arguments.length;
var i__5770__auto___69172 = (0);
while(true){
if((i__5770__auto___69172 < len__5769__auto___69171)){
args__5775__auto__.push((arguments[i__5770__auto___69172]));

var G__69173 = (i__5770__auto___69172 + (1));
i__5770__auto___69172 = G__69173;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67858 = conformed_args__66417__auto__;
var map__67858__$1 = cljs.core.__destructure_map(map__67858);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq67857){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69174 = arguments.length;
var i__5770__auto___69175 = (0);
while(true){
if((i__5770__auto___69175 < len__5769__auto___69174)){
args__5775__auto__.push((arguments[i__5770__auto___69175]));

var G__69176 = (i__5770__auto___69175 + (1));
i__5770__auto___69175 = G__69176;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67860 = conformed_args__66417__auto__;
var map__67860__$1 = cljs.core.__destructure_map(map__67860);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq67859){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67859));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69177 = arguments.length;
var i__5770__auto___69178 = (0);
while(true){
if((i__5770__auto___69178 < len__5769__auto___69177)){
args__5775__auto__.push((arguments[i__5770__auto___69178]));

var G__69179 = (i__5770__auto___69178 + (1));
i__5770__auto___69178 = G__69179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67862 = conformed_args__66417__auto__;
var map__67862__$1 = cljs.core.__destructure_map(map__67862);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq67861){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67861));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69180 = arguments.length;
var i__5770__auto___69181 = (0);
while(true){
if((i__5770__auto___69181 < len__5769__auto___69180)){
args__5775__auto__.push((arguments[i__5770__auto___69181]));

var G__69182 = (i__5770__auto___69181 + (1));
i__5770__auto___69181 = G__69182;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67864 = conformed_args__66417__auto__;
var map__67864__$1 = cljs.core.__destructure_map(map__67864);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67864__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67864__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67864__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq67863){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67863));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69183 = arguments.length;
var i__5770__auto___69184 = (0);
while(true){
if((i__5770__auto___69184 < len__5769__auto___69183)){
args__5775__auto__.push((arguments[i__5770__auto___69184]));

var G__69185 = (i__5770__auto___69184 + (1));
i__5770__auto___69184 = G__69185;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67866 = conformed_args__66417__auto__;
var map__67866__$1 = cljs.core.__destructure_map(map__67866);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq67865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67865));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69186 = arguments.length;
var i__5770__auto___69187 = (0);
while(true){
if((i__5770__auto___69187 < len__5769__auto___69186)){
args__5775__auto__.push((arguments[i__5770__auto___69187]));

var G__69188 = (i__5770__auto___69187 + (1));
i__5770__auto___69187 = G__69188;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67868 = conformed_args__66417__auto__;
var map__67868__$1 = cljs.core.__destructure_map(map__67868);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq67867){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67867));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69189 = arguments.length;
var i__5770__auto___69190 = (0);
while(true){
if((i__5770__auto___69190 < len__5769__auto___69189)){
args__5775__auto__.push((arguments[i__5770__auto___69190]));

var G__69191 = (i__5770__auto___69190 + (1));
i__5770__auto___69190 = G__69191;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67871 = conformed_args__66417__auto__;
var map__67871__$1 = cljs.core.__destructure_map(map__67871);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq67869){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67869));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69192 = arguments.length;
var i__5770__auto___69193 = (0);
while(true){
if((i__5770__auto___69193 < len__5769__auto___69192)){
args__5775__auto__.push((arguments[i__5770__auto___69193]));

var G__69194 = (i__5770__auto___69193 + (1));
i__5770__auto___69193 = G__69194;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67881 = conformed_args__66417__auto__;
var map__67881__$1 = cljs.core.__destructure_map(map__67881);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq67874){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67874));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69195 = arguments.length;
var i__5770__auto___69196 = (0);
while(true){
if((i__5770__auto___69196 < len__5769__auto___69195)){
args__5775__auto__.push((arguments[i__5770__auto___69196]));

var G__69197 = (i__5770__auto___69196 + (1));
i__5770__auto___69196 = G__69197;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67890 = conformed_args__66417__auto__;
var map__67890__$1 = cljs.core.__destructure_map(map__67890);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67890__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67890__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67890__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq67888){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67888));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69198 = arguments.length;
var i__5770__auto___69199 = (0);
while(true){
if((i__5770__auto___69199 < len__5769__auto___69198)){
args__5775__auto__.push((arguments[i__5770__auto___69199]));

var G__69200 = (i__5770__auto___69199 + (1));
i__5770__auto___69199 = G__69200;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67912 = conformed_args__66417__auto__;
var map__67912__$1 = cljs.core.__destructure_map(map__67912);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq67900){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69201 = arguments.length;
var i__5770__auto___69202 = (0);
while(true){
if((i__5770__auto___69202 < len__5769__auto___69201)){
args__5775__auto__.push((arguments[i__5770__auto___69202]));

var G__69203 = (i__5770__auto___69202 + (1));
i__5770__auto___69202 = G__69203;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67920 = conformed_args__66417__auto__;
var map__67920__$1 = cljs.core.__destructure_map(map__67920);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq67917){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67917));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69204 = arguments.length;
var i__5770__auto___69205 = (0);
while(true){
if((i__5770__auto___69205 < len__5769__auto___69204)){
args__5775__auto__.push((arguments[i__5770__auto___69205]));

var G__69206 = (i__5770__auto___69205 + (1));
i__5770__auto___69205 = G__69206;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67934 = conformed_args__66417__auto__;
var map__67934__$1 = cljs.core.__destructure_map(map__67934);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq67929){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67929));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69207 = arguments.length;
var i__5770__auto___69208 = (0);
while(true){
if((i__5770__auto___69208 < len__5769__auto___69207)){
args__5775__auto__.push((arguments[i__5770__auto___69208]));

var G__69209 = (i__5770__auto___69208 + (1));
i__5770__auto___69208 = G__69209;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67942 = conformed_args__66417__auto__;
var map__67942__$1 = cljs.core.__destructure_map(map__67942);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67942__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67942__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67942__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq67941){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67941));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69210 = arguments.length;
var i__5770__auto___69211 = (0);
while(true){
if((i__5770__auto___69211 < len__5769__auto___69210)){
args__5775__auto__.push((arguments[i__5770__auto___69211]));

var G__69212 = (i__5770__auto___69211 + (1));
i__5770__auto___69211 = G__69212;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67950 = conformed_args__66417__auto__;
var map__67950__$1 = cljs.core.__destructure_map(map__67950);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq67943){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67943));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69213 = arguments.length;
var i__5770__auto___69214 = (0);
while(true){
if((i__5770__auto___69214 < len__5769__auto___69213)){
args__5775__auto__.push((arguments[i__5770__auto___69214]));

var G__69215 = (i__5770__auto___69214 + (1));
i__5770__auto___69214 = G__69215;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67952 = conformed_args__66417__auto__;
var map__67952__$1 = cljs.core.__destructure_map(map__67952);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq67951){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67951));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69216 = arguments.length;
var i__5770__auto___69217 = (0);
while(true){
if((i__5770__auto___69217 < len__5769__auto___69216)){
args__5775__auto__.push((arguments[i__5770__auto___69217]));

var G__69218 = (i__5770__auto___69217 + (1));
i__5770__auto___69217 = G__69218;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67959 = conformed_args__66417__auto__;
var map__67959__$1 = cljs.core.__destructure_map(map__67959);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq67955){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67955));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69219 = arguments.length;
var i__5770__auto___69220 = (0);
while(true){
if((i__5770__auto___69220 < len__5769__auto___69219)){
args__5775__auto__.push((arguments[i__5770__auto___69220]));

var G__69221 = (i__5770__auto___69220 + (1));
i__5770__auto___69220 = G__69221;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67961 = conformed_args__66417__auto__;
var map__67961__$1 = cljs.core.__destructure_map(map__67961);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq67960){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69222 = arguments.length;
var i__5770__auto___69223 = (0);
while(true){
if((i__5770__auto___69223 < len__5769__auto___69222)){
args__5775__auto__.push((arguments[i__5770__auto___69223]));

var G__69224 = (i__5770__auto___69223 + (1));
i__5770__auto___69223 = G__69224;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67973 = conformed_args__66417__auto__;
var map__67973__$1 = cljs.core.__destructure_map(map__67973);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq67966){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67966));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69225 = arguments.length;
var i__5770__auto___69226 = (0);
while(true){
if((i__5770__auto___69226 < len__5769__auto___69225)){
args__5775__auto__.push((arguments[i__5770__auto___69226]));

var G__69227 = (i__5770__auto___69226 + (1));
i__5770__auto___69226 = G__69227;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67979 = conformed_args__66417__auto__;
var map__67979__$1 = cljs.core.__destructure_map(map__67979);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq67974){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69228 = arguments.length;
var i__5770__auto___69229 = (0);
while(true){
if((i__5770__auto___69229 < len__5769__auto___69228)){
args__5775__auto__.push((arguments[i__5770__auto___69229]));

var G__69230 = (i__5770__auto___69229 + (1));
i__5770__auto___69229 = G__69230;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67982 = conformed_args__66417__auto__;
var map__67982__$1 = cljs.core.__destructure_map(map__67982);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq67980){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69231 = arguments.length;
var i__5770__auto___69232 = (0);
while(true){
if((i__5770__auto___69232 < len__5769__auto___69231)){
args__5775__auto__.push((arguments[i__5770__auto___69232]));

var G__69233 = (i__5770__auto___69232 + (1));
i__5770__auto___69232 = G__69233;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67988 = conformed_args__66417__auto__;
var map__67988__$1 = cljs.core.__destructure_map(map__67988);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq67987){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67987));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69234 = arguments.length;
var i__5770__auto___69235 = (0);
while(true){
if((i__5770__auto___69235 < len__5769__auto___69234)){
args__5775__auto__.push((arguments[i__5770__auto___69235]));

var G__69236 = (i__5770__auto___69235 + (1));
i__5770__auto___69235 = G__69236;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__67996 = conformed_args__66417__auto__;
var map__67996__$1 = cljs.core.__destructure_map(map__67996);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq67993){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67993));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69237 = arguments.length;
var i__5770__auto___69238 = (0);
while(true){
if((i__5770__auto___69238 < len__5769__auto___69237)){
args__5775__auto__.push((arguments[i__5770__auto___69238]));

var G__69239 = (i__5770__auto___69238 + (1));
i__5770__auto___69238 = G__69239;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68001 = conformed_args__66417__auto__;
var map__68001__$1 = cljs.core.__destructure_map(map__68001);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq68000){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69240 = arguments.length;
var i__5770__auto___69241 = (0);
while(true){
if((i__5770__auto___69241 < len__5769__auto___69240)){
args__5775__auto__.push((arguments[i__5770__auto___69241]));

var G__69242 = (i__5770__auto___69241 + (1));
i__5770__auto___69241 = G__69242;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68015 = conformed_args__66417__auto__;
var map__68015__$1 = cljs.core.__destructure_map(map__68015);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq68002){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69243 = arguments.length;
var i__5770__auto___69244 = (0);
while(true){
if((i__5770__auto___69244 < len__5769__auto___69243)){
args__5775__auto__.push((arguments[i__5770__auto___69244]));

var G__69245 = (i__5770__auto___69244 + (1));
i__5770__auto___69244 = G__69245;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68075 = conformed_args__66417__auto__;
var map__68075__$1 = cljs.core.__destructure_map(map__68075);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq68029){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68029));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69246 = arguments.length;
var i__5770__auto___69247 = (0);
while(true){
if((i__5770__auto___69247 < len__5769__auto___69246)){
args__5775__auto__.push((arguments[i__5770__auto___69247]));

var G__69248 = (i__5770__auto___69247 + (1));
i__5770__auto___69247 = G__69248;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68095 = conformed_args__66417__auto__;
var map__68095__$1 = cljs.core.__destructure_map(map__68095);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq68076){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68076));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69249 = arguments.length;
var i__5770__auto___69250 = (0);
while(true){
if((i__5770__auto___69250 < len__5769__auto___69249)){
args__5775__auto__.push((arguments[i__5770__auto___69250]));

var G__69251 = (i__5770__auto___69250 + (1));
i__5770__auto___69250 = G__69251;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68131 = conformed_args__66417__auto__;
var map__68131__$1 = cljs.core.__destructure_map(map__68131);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq68113){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68113));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69252 = arguments.length;
var i__5770__auto___69253 = (0);
while(true){
if((i__5770__auto___69253 < len__5769__auto___69252)){
args__5775__auto__.push((arguments[i__5770__auto___69253]));

var G__69254 = (i__5770__auto___69253 + (1));
i__5770__auto___69253 = G__69254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68150 = conformed_args__66417__auto__;
var map__68150__$1 = cljs.core.__destructure_map(map__68150);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68150__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68150__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68150__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq68148){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68148));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69255 = arguments.length;
var i__5770__auto___69256 = (0);
while(true){
if((i__5770__auto___69256 < len__5769__auto___69255)){
args__5775__auto__.push((arguments[i__5770__auto___69256]));

var G__69257 = (i__5770__auto___69256 + (1));
i__5770__auto___69256 = G__69257;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68152 = conformed_args__66417__auto__;
var map__68152__$1 = cljs.core.__destructure_map(map__68152);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68152__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68152__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68152__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq68151){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68151));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69258 = arguments.length;
var i__5770__auto___69259 = (0);
while(true){
if((i__5770__auto___69259 < len__5769__auto___69258)){
args__5775__auto__.push((arguments[i__5770__auto___69259]));

var G__69260 = (i__5770__auto___69259 + (1));
i__5770__auto___69259 = G__69260;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68154 = conformed_args__66417__auto__;
var map__68154__$1 = cljs.core.__destructure_map(map__68154);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq68153){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68153));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69261 = arguments.length;
var i__5770__auto___69262 = (0);
while(true){
if((i__5770__auto___69262 < len__5769__auto___69261)){
args__5775__auto__.push((arguments[i__5770__auto___69262]));

var G__69263 = (i__5770__auto___69262 + (1));
i__5770__auto___69262 = G__69263;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68156 = conformed_args__66417__auto__;
var map__68156__$1 = cljs.core.__destructure_map(map__68156);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq68155){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68155));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69265 = arguments.length;
var i__5770__auto___69266 = (0);
while(true){
if((i__5770__auto___69266 < len__5769__auto___69265)){
args__5775__auto__.push((arguments[i__5770__auto___69266]));

var G__69268 = (i__5770__auto___69266 + (1));
i__5770__auto___69266 = G__69268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68158 = conformed_args__66417__auto__;
var map__68158__$1 = cljs.core.__destructure_map(map__68158);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq68157){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68157));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69270 = arguments.length;
var i__5770__auto___69271 = (0);
while(true){
if((i__5770__auto___69271 < len__5769__auto___69270)){
args__5775__auto__.push((arguments[i__5770__auto___69271]));

var G__69272 = (i__5770__auto___69271 + (1));
i__5770__auto___69271 = G__69272;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68160 = conformed_args__66417__auto__;
var map__68160__$1 = cljs.core.__destructure_map(map__68160);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq68159){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68159));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69273 = arguments.length;
var i__5770__auto___69274 = (0);
while(true){
if((i__5770__auto___69274 < len__5769__auto___69273)){
args__5775__auto__.push((arguments[i__5770__auto___69274]));

var G__69275 = (i__5770__auto___69274 + (1));
i__5770__auto___69274 = G__69275;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68162 = conformed_args__66417__auto__;
var map__68162__$1 = cljs.core.__destructure_map(map__68162);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68162__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68162__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq68161){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68161));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69276 = arguments.length;
var i__5770__auto___69277 = (0);
while(true){
if((i__5770__auto___69277 < len__5769__auto___69276)){
args__5775__auto__.push((arguments[i__5770__auto___69277]));

var G__69278 = (i__5770__auto___69277 + (1));
i__5770__auto___69277 = G__69278;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68164 = conformed_args__66417__auto__;
var map__68164__$1 = cljs.core.__destructure_map(map__68164);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq68163){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68163));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69281 = arguments.length;
var i__5770__auto___69282 = (0);
while(true){
if((i__5770__auto___69282 < len__5769__auto___69281)){
args__5775__auto__.push((arguments[i__5770__auto___69282]));

var G__69283 = (i__5770__auto___69282 + (1));
i__5770__auto___69282 = G__69283;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68166 = conformed_args__66417__auto__;
var map__68166__$1 = cljs.core.__destructure_map(map__68166);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68166__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq68165){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68165));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69284 = arguments.length;
var i__5770__auto___69285 = (0);
while(true){
if((i__5770__auto___69285 < len__5769__auto___69284)){
args__5775__auto__.push((arguments[i__5770__auto___69285]));

var G__69286 = (i__5770__auto___69285 + (1));
i__5770__auto___69285 = G__69286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68168 = conformed_args__66417__auto__;
var map__68168__$1 = cljs.core.__destructure_map(map__68168);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68168__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68168__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68168__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq68167){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68167));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69287 = arguments.length;
var i__5770__auto___69288 = (0);
while(true){
if((i__5770__auto___69288 < len__5769__auto___69287)){
args__5775__auto__.push((arguments[i__5770__auto___69288]));

var G__69289 = (i__5770__auto___69288 + (1));
i__5770__auto___69288 = G__69289;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68170 = conformed_args__66417__auto__;
var map__68170__$1 = cljs.core.__destructure_map(map__68170);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq68169){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69290 = arguments.length;
var i__5770__auto___69291 = (0);
while(true){
if((i__5770__auto___69291 < len__5769__auto___69290)){
args__5775__auto__.push((arguments[i__5770__auto___69291]));

var G__69292 = (i__5770__auto___69291 + (1));
i__5770__auto___69291 = G__69292;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68172 = conformed_args__66417__auto__;
var map__68172__$1 = cljs.core.__destructure_map(map__68172);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq68171){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68171));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69293 = arguments.length;
var i__5770__auto___69294 = (0);
while(true){
if((i__5770__auto___69294 < len__5769__auto___69293)){
args__5775__auto__.push((arguments[i__5770__auto___69294]));

var G__69295 = (i__5770__auto___69294 + (1));
i__5770__auto___69294 = G__69295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68174 = conformed_args__66417__auto__;
var map__68174__$1 = cljs.core.__destructure_map(map__68174);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq68173){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68173));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69296 = arguments.length;
var i__5770__auto___69297 = (0);
while(true){
if((i__5770__auto___69297 < len__5769__auto___69296)){
args__5775__auto__.push((arguments[i__5770__auto___69297]));

var G__69298 = (i__5770__auto___69297 + (1));
i__5770__auto___69297 = G__69298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68176 = conformed_args__66417__auto__;
var map__68176__$1 = cljs.core.__destructure_map(map__68176);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq68175){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68175));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69301 = arguments.length;
var i__5770__auto___69302 = (0);
while(true){
if((i__5770__auto___69302 < len__5769__auto___69301)){
args__5775__auto__.push((arguments[i__5770__auto___69302]));

var G__69303 = (i__5770__auto___69302 + (1));
i__5770__auto___69302 = G__69303;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68178 = conformed_args__66417__auto__;
var map__68178__$1 = cljs.core.__destructure_map(map__68178);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq68177){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68177));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69304 = arguments.length;
var i__5770__auto___69305 = (0);
while(true){
if((i__5770__auto___69305 < len__5769__auto___69304)){
args__5775__auto__.push((arguments[i__5770__auto___69305]));

var G__69306 = (i__5770__auto___69305 + (1));
i__5770__auto___69305 = G__69306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68180 = conformed_args__66417__auto__;
var map__68180__$1 = cljs.core.__destructure_map(map__68180);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq68179){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68179));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69310 = arguments.length;
var i__5770__auto___69311 = (0);
while(true){
if((i__5770__auto___69311 < len__5769__auto___69310)){
args__5775__auto__.push((arguments[i__5770__auto___69311]));

var G__69312 = (i__5770__auto___69311 + (1));
i__5770__auto___69311 = G__69312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68182 = conformed_args__66417__auto__;
var map__68182__$1 = cljs.core.__destructure_map(map__68182);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq68181){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68181));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69316 = arguments.length;
var i__5770__auto___69317 = (0);
while(true){
if((i__5770__auto___69317 < len__5769__auto___69316)){
args__5775__auto__.push((arguments[i__5770__auto___69317]));

var G__69320 = (i__5770__auto___69317 + (1));
i__5770__auto___69317 = G__69320;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68184 = conformed_args__66417__auto__;
var map__68184__$1 = cljs.core.__destructure_map(map__68184);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq68183){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68183));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69326 = arguments.length;
var i__5770__auto___69327 = (0);
while(true){
if((i__5770__auto___69327 < len__5769__auto___69326)){
args__5775__auto__.push((arguments[i__5770__auto___69327]));

var G__69328 = (i__5770__auto___69327 + (1));
i__5770__auto___69327 = G__69328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68186 = conformed_args__66417__auto__;
var map__68186__$1 = cljs.core.__destructure_map(map__68186);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq68185){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68185));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69331 = arguments.length;
var i__5770__auto___69332 = (0);
while(true){
if((i__5770__auto___69332 < len__5769__auto___69331)){
args__5775__auto__.push((arguments[i__5770__auto___69332]));

var G__69333 = (i__5770__auto___69332 + (1));
i__5770__auto___69332 = G__69333;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68190 = conformed_args__66417__auto__;
var map__68190__$1 = cljs.core.__destructure_map(map__68190);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68190__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68190__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq68189){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68189));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69335 = arguments.length;
var i__5770__auto___69336 = (0);
while(true){
if((i__5770__auto___69336 < len__5769__auto___69335)){
args__5775__auto__.push((arguments[i__5770__auto___69336]));

var G__69337 = (i__5770__auto___69336 + (1));
i__5770__auto___69336 = G__69337;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68198 = conformed_args__66417__auto__;
var map__68198__$1 = cljs.core.__destructure_map(map__68198);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq68197){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68197));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69340 = arguments.length;
var i__5770__auto___69341 = (0);
while(true){
if((i__5770__auto___69341 < len__5769__auto___69340)){
args__5775__auto__.push((arguments[i__5770__auto___69341]));

var G__69342 = (i__5770__auto___69341 + (1));
i__5770__auto___69341 = G__69342;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68205 = conformed_args__66417__auto__;
var map__68205__$1 = cljs.core.__destructure_map(map__68205);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq68201){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68201));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69345 = arguments.length;
var i__5770__auto___69346 = (0);
while(true){
if((i__5770__auto___69346 < len__5769__auto___69345)){
args__5775__auto__.push((arguments[i__5770__auto___69346]));

var G__69347 = (i__5770__auto___69346 + (1));
i__5770__auto___69346 = G__69347;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68208 = conformed_args__66417__auto__;
var map__68208__$1 = cljs.core.__destructure_map(map__68208);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq68207){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68207));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69349 = arguments.length;
var i__5770__auto___69350 = (0);
while(true){
if((i__5770__auto___69350 < len__5769__auto___69349)){
args__5775__auto__.push((arguments[i__5770__auto___69350]));

var G__69351 = (i__5770__auto___69350 + (1));
i__5770__auto___69350 = G__69351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68210 = conformed_args__66417__auto__;
var map__68210__$1 = cljs.core.__destructure_map(map__68210);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq68209){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68209));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69354 = arguments.length;
var i__5770__auto___69355 = (0);
while(true){
if((i__5770__auto___69355 < len__5769__auto___69354)){
args__5775__auto__.push((arguments[i__5770__auto___69355]));

var G__69356 = (i__5770__auto___69355 + (1));
i__5770__auto___69355 = G__69356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68218 = conformed_args__66417__auto__;
var map__68218__$1 = cljs.core.__destructure_map(map__68218);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq68214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69358 = arguments.length;
var i__5770__auto___69360 = (0);
while(true){
if((i__5770__auto___69360 < len__5769__auto___69358)){
args__5775__auto__.push((arguments[i__5770__auto___69360]));

var G__69361 = (i__5770__auto___69360 + (1));
i__5770__auto___69360 = G__69361;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68222 = conformed_args__66417__auto__;
var map__68222__$1 = cljs.core.__destructure_map(map__68222);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq68221){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69363 = arguments.length;
var i__5770__auto___69364 = (0);
while(true){
if((i__5770__auto___69364 < len__5769__auto___69363)){
args__5775__auto__.push((arguments[i__5770__auto___69364]));

var G__69365 = (i__5770__auto___69364 + (1));
i__5770__auto___69364 = G__69365;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68228 = conformed_args__66417__auto__;
var map__68228__$1 = cljs.core.__destructure_map(map__68228);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq68226){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68226));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69366 = arguments.length;
var i__5770__auto___69367 = (0);
while(true){
if((i__5770__auto___69367 < len__5769__auto___69366)){
args__5775__auto__.push((arguments[i__5770__auto___69367]));

var G__69368 = (i__5770__auto___69367 + (1));
i__5770__auto___69367 = G__69368;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68237 = conformed_args__66417__auto__;
var map__68237__$1 = cljs.core.__destructure_map(map__68237);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq68231){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69369 = arguments.length;
var i__5770__auto___69370 = (0);
while(true){
if((i__5770__auto___69370 < len__5769__auto___69369)){
args__5775__auto__.push((arguments[i__5770__auto___69370]));

var G__69371 = (i__5770__auto___69370 + (1));
i__5770__auto___69370 = G__69371;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68244 = conformed_args__66417__auto__;
var map__68244__$1 = cljs.core.__destructure_map(map__68244);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq68242){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68242));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69372 = arguments.length;
var i__5770__auto___69373 = (0);
while(true){
if((i__5770__auto___69373 < len__5769__auto___69372)){
args__5775__auto__.push((arguments[i__5770__auto___69373]));

var G__69376 = (i__5770__auto___69373 + (1));
i__5770__auto___69373 = G__69376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68249 = conformed_args__66417__auto__;
var map__68249__$1 = cljs.core.__destructure_map(map__68249);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq68246){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68246));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69377 = arguments.length;
var i__5770__auto___69378 = (0);
while(true){
if((i__5770__auto___69378 < len__5769__auto___69377)){
args__5775__auto__.push((arguments[i__5770__auto___69378]));

var G__69379 = (i__5770__auto___69378 + (1));
i__5770__auto___69378 = G__69379;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68254 = conformed_args__66417__auto__;
var map__68254__$1 = cljs.core.__destructure_map(map__68254);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq68253){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68253));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69382 = arguments.length;
var i__5770__auto___69383 = (0);
while(true){
if((i__5770__auto___69383 < len__5769__auto___69382)){
args__5775__auto__.push((arguments[i__5770__auto___69383]));

var G__69384 = (i__5770__auto___69383 + (1));
i__5770__auto___69383 = G__69384;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68263 = conformed_args__66417__auto__;
var map__68263__$1 = cljs.core.__destructure_map(map__68263);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq68260){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68260));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69388 = arguments.length;
var i__5770__auto___69389 = (0);
while(true){
if((i__5770__auto___69389 < len__5769__auto___69388)){
args__5775__auto__.push((arguments[i__5770__auto___69389]));

var G__69390 = (i__5770__auto___69389 + (1));
i__5770__auto___69389 = G__69390;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68267 = conformed_args__66417__auto__;
var map__68267__$1 = cljs.core.__destructure_map(map__68267);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq68264){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68264));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69392 = arguments.length;
var i__5770__auto___69393 = (0);
while(true){
if((i__5770__auto___69393 < len__5769__auto___69392)){
args__5775__auto__.push((arguments[i__5770__auto___69393]));

var G__69394 = (i__5770__auto___69393 + (1));
i__5770__auto___69393 = G__69394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68277 = conformed_args__66417__auto__;
var map__68277__$1 = cljs.core.__destructure_map(map__68277);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq68271){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68271));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69396 = arguments.length;
var i__5770__auto___69397 = (0);
while(true){
if((i__5770__auto___69397 < len__5769__auto___69396)){
args__5775__auto__.push((arguments[i__5770__auto___69397]));

var G__69400 = (i__5770__auto___69397 + (1));
i__5770__auto___69397 = G__69400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68281 = conformed_args__66417__auto__;
var map__68281__$1 = cljs.core.__destructure_map(map__68281);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq68280){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68280));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69401 = arguments.length;
var i__5770__auto___69402 = (0);
while(true){
if((i__5770__auto___69402 < len__5769__auto___69401)){
args__5775__auto__.push((arguments[i__5770__auto___69402]));

var G__69403 = (i__5770__auto___69402 + (1));
i__5770__auto___69402 = G__69403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68290 = conformed_args__66417__auto__;
var map__68290__$1 = cljs.core.__destructure_map(map__68290);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq68287){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68287));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69405 = arguments.length;
var i__5770__auto___69406 = (0);
while(true){
if((i__5770__auto___69406 < len__5769__auto___69405)){
args__5775__auto__.push((arguments[i__5770__auto___69406]));

var G__69407 = (i__5770__auto___69406 + (1));
i__5770__auto___69406 = G__69407;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68305 = conformed_args__66417__auto__;
var map__68305__$1 = cljs.core.__destructure_map(map__68305);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq68299){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68299));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69410 = arguments.length;
var i__5770__auto___69411 = (0);
while(true){
if((i__5770__auto___69411 < len__5769__auto___69410)){
args__5775__auto__.push((arguments[i__5770__auto___69411]));

var G__69412 = (i__5770__auto___69411 + (1));
i__5770__auto___69411 = G__69412;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68307 = conformed_args__66417__auto__;
var map__68307__$1 = cljs.core.__destructure_map(map__68307);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq68306){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69413 = arguments.length;
var i__5770__auto___69414 = (0);
while(true){
if((i__5770__auto___69414 < len__5769__auto___69413)){
args__5775__auto__.push((arguments[i__5770__auto___69414]));

var G__69415 = (i__5770__auto___69414 + (1));
i__5770__auto___69414 = G__69415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68311 = conformed_args__66417__auto__;
var map__68311__$1 = cljs.core.__destructure_map(map__68311);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68311__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68311__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68311__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq68308){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68308));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69418 = arguments.length;
var i__5770__auto___69419 = (0);
while(true){
if((i__5770__auto___69419 < len__5769__auto___69418)){
args__5775__auto__.push((arguments[i__5770__auto___69419]));

var G__69420 = (i__5770__auto___69419 + (1));
i__5770__auto___69419 = G__69420;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68319 = conformed_args__66417__auto__;
var map__68319__$1 = cljs.core.__destructure_map(map__68319);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq68315){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69421 = arguments.length;
var i__5770__auto___69422 = (0);
while(true){
if((i__5770__auto___69422 < len__5769__auto___69421)){
args__5775__auto__.push((arguments[i__5770__auto___69422]));

var G__69423 = (i__5770__auto___69422 + (1));
i__5770__auto___69422 = G__69423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68321 = conformed_args__66417__auto__;
var map__68321__$1 = cljs.core.__destructure_map(map__68321);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq68320){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68320));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69424 = arguments.length;
var i__5770__auto___69425 = (0);
while(true){
if((i__5770__auto___69425 < len__5769__auto___69424)){
args__5775__auto__.push((arguments[i__5770__auto___69425]));

var G__69426 = (i__5770__auto___69425 + (1));
i__5770__auto___69425 = G__69426;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68327 = conformed_args__66417__auto__;
var map__68327__$1 = cljs.core.__destructure_map(map__68327);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq68323){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68323));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69427 = arguments.length;
var i__5770__auto___69428 = (0);
while(true){
if((i__5770__auto___69428 < len__5769__auto___69427)){
args__5775__auto__.push((arguments[i__5770__auto___69428]));

var G__69429 = (i__5770__auto___69428 + (1));
i__5770__auto___69428 = G__69429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68331 = conformed_args__66417__auto__;
var map__68331__$1 = cljs.core.__destructure_map(map__68331);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq68328){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68328));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69430 = arguments.length;
var i__5770__auto___69431 = (0);
while(true){
if((i__5770__auto___69431 < len__5769__auto___69430)){
args__5775__auto__.push((arguments[i__5770__auto___69431]));

var G__69432 = (i__5770__auto___69431 + (1));
i__5770__auto___69431 = G__69432;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68336 = conformed_args__66417__auto__;
var map__68336__$1 = cljs.core.__destructure_map(map__68336);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68336__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq68333){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68333));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69433 = arguments.length;
var i__5770__auto___69434 = (0);
while(true){
if((i__5770__auto___69434 < len__5769__auto___69433)){
args__5775__auto__.push((arguments[i__5770__auto___69434]));

var G__69435 = (i__5770__auto___69434 + (1));
i__5770__auto___69434 = G__69435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68340 = conformed_args__66417__auto__;
var map__68340__$1 = cljs.core.__destructure_map(map__68340);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq68338){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68338));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69436 = arguments.length;
var i__5770__auto___69437 = (0);
while(true){
if((i__5770__auto___69437 < len__5769__auto___69436)){
args__5775__auto__.push((arguments[i__5770__auto___69437]));

var G__69438 = (i__5770__auto___69437 + (1));
i__5770__auto___69437 = G__69438;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68353 = conformed_args__66417__auto__;
var map__68353__$1 = cljs.core.__destructure_map(map__68353);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68353__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68353__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68353__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq68345){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68345));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69439 = arguments.length;
var i__5770__auto___69440 = (0);
while(true){
if((i__5770__auto___69440 < len__5769__auto___69439)){
args__5775__auto__.push((arguments[i__5770__auto___69440]));

var G__69441 = (i__5770__auto___69440 + (1));
i__5770__auto___69440 = G__69441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68356 = conformed_args__66417__auto__;
var map__68356__$1 = cljs.core.__destructure_map(map__68356);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq68355){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68355));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69443 = arguments.length;
var i__5770__auto___69444 = (0);
while(true){
if((i__5770__auto___69444 < len__5769__auto___69443)){
args__5775__auto__.push((arguments[i__5770__auto___69444]));

var G__69445 = (i__5770__auto___69444 + (1));
i__5770__auto___69444 = G__69445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68361 = conformed_args__66417__auto__;
var map__68361__$1 = cljs.core.__destructure_map(map__68361);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq68359){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68359));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69446 = arguments.length;
var i__5770__auto___69447 = (0);
while(true){
if((i__5770__auto___69447 < len__5769__auto___69446)){
args__5775__auto__.push((arguments[i__5770__auto___69447]));

var G__69448 = (i__5770__auto___69447 + (1));
i__5770__auto___69447 = G__69448;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68376 = conformed_args__66417__auto__;
var map__68376__$1 = cljs.core.__destructure_map(map__68376);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq68375){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68375));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69449 = arguments.length;
var i__5770__auto___69450 = (0);
while(true){
if((i__5770__auto___69450 < len__5769__auto___69449)){
args__5775__auto__.push((arguments[i__5770__auto___69450]));

var G__69451 = (i__5770__auto___69450 + (1));
i__5770__auto___69450 = G__69451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68378 = conformed_args__66417__auto__;
var map__68378__$1 = cljs.core.__destructure_map(map__68378);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq68377){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68377));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69452 = arguments.length;
var i__5770__auto___69453 = (0);
while(true){
if((i__5770__auto___69453 < len__5769__auto___69452)){
args__5775__auto__.push((arguments[i__5770__auto___69453]));

var G__69454 = (i__5770__auto___69453 + (1));
i__5770__auto___69453 = G__69454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68380 = conformed_args__66417__auto__;
var map__68380__$1 = cljs.core.__destructure_map(map__68380);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq68379){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68379));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69455 = arguments.length;
var i__5770__auto___69456 = (0);
while(true){
if((i__5770__auto___69456 < len__5769__auto___69455)){
args__5775__auto__.push((arguments[i__5770__auto___69456]));

var G__69458 = (i__5770__auto___69456 + (1));
i__5770__auto___69456 = G__69458;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68384 = conformed_args__66417__auto__;
var map__68384__$1 = cljs.core.__destructure_map(map__68384);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq68381){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68381));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69459 = arguments.length;
var i__5770__auto___69460 = (0);
while(true){
if((i__5770__auto___69460 < len__5769__auto___69459)){
args__5775__auto__.push((arguments[i__5770__auto___69460]));

var G__69461 = (i__5770__auto___69460 + (1));
i__5770__auto___69460 = G__69461;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68386 = conformed_args__66417__auto__;
var map__68386__$1 = cljs.core.__destructure_map(map__68386);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq68385){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69462 = arguments.length;
var i__5770__auto___69463 = (0);
while(true){
if((i__5770__auto___69463 < len__5769__auto___69462)){
args__5775__auto__.push((arguments[i__5770__auto___69463]));

var G__69464 = (i__5770__auto___69463 + (1));
i__5770__auto___69463 = G__69464;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68388 = conformed_args__66417__auto__;
var map__68388__$1 = cljs.core.__destructure_map(map__68388);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq68387){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68387));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69465 = arguments.length;
var i__5770__auto___69466 = (0);
while(true){
if((i__5770__auto___69466 < len__5769__auto___69465)){
args__5775__auto__.push((arguments[i__5770__auto___69466]));

var G__69467 = (i__5770__auto___69466 + (1));
i__5770__auto___69466 = G__69467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68392 = conformed_args__66417__auto__;
var map__68392__$1 = cljs.core.__destructure_map(map__68392);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq68390){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68390));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69468 = arguments.length;
var i__5770__auto___69469 = (0);
while(true){
if((i__5770__auto___69469 < len__5769__auto___69468)){
args__5775__auto__.push((arguments[i__5770__auto___69469]));

var G__69470 = (i__5770__auto___69469 + (1));
i__5770__auto___69469 = G__69470;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68398 = conformed_args__66417__auto__;
var map__68398__$1 = cljs.core.__destructure_map(map__68398);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq68397){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68397));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69472 = arguments.length;
var i__5770__auto___69473 = (0);
while(true){
if((i__5770__auto___69473 < len__5769__auto___69472)){
args__5775__auto__.push((arguments[i__5770__auto___69473]));

var G__69474 = (i__5770__auto___69473 + (1));
i__5770__auto___69473 = G__69474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68406 = conformed_args__66417__auto__;
var map__68406__$1 = cljs.core.__destructure_map(map__68406);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq68399){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69475 = arguments.length;
var i__5770__auto___69476 = (0);
while(true){
if((i__5770__auto___69476 < len__5769__auto___69475)){
args__5775__auto__.push((arguments[i__5770__auto___69476]));

var G__69477 = (i__5770__auto___69476 + (1));
i__5770__auto___69476 = G__69477;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68412 = conformed_args__66417__auto__;
var map__68412__$1 = cljs.core.__destructure_map(map__68412);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq68411){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68411));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69478 = arguments.length;
var i__5770__auto___69479 = (0);
while(true){
if((i__5770__auto___69479 < len__5769__auto___69478)){
args__5775__auto__.push((arguments[i__5770__auto___69479]));

var G__69480 = (i__5770__auto___69479 + (1));
i__5770__auto___69479 = G__69480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68421 = conformed_args__66417__auto__;
var map__68421__$1 = cljs.core.__destructure_map(map__68421);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq68418){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68418));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69481 = arguments.length;
var i__5770__auto___69483 = (0);
while(true){
if((i__5770__auto___69483 < len__5769__auto___69481)){
args__5775__auto__.push((arguments[i__5770__auto___69483]));

var G__69484 = (i__5770__auto___69483 + (1));
i__5770__auto___69483 = G__69484;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68438 = conformed_args__66417__auto__;
var map__68438__$1 = cljs.core.__destructure_map(map__68438);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68438__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68438__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq68431){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68431));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69485 = arguments.length;
var i__5770__auto___69486 = (0);
while(true){
if((i__5770__auto___69486 < len__5769__auto___69485)){
args__5775__auto__.push((arguments[i__5770__auto___69486]));

var G__69487 = (i__5770__auto___69486 + (1));
i__5770__auto___69486 = G__69487;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68443 = conformed_args__66417__auto__;
var map__68443__$1 = cljs.core.__destructure_map(map__68443);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq68442){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68442));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69488 = arguments.length;
var i__5770__auto___69489 = (0);
while(true){
if((i__5770__auto___69489 < len__5769__auto___69488)){
args__5775__auto__.push((arguments[i__5770__auto___69489]));

var G__69490 = (i__5770__auto___69489 + (1));
i__5770__auto___69489 = G__69490;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68452 = conformed_args__66417__auto__;
var map__68452__$1 = cljs.core.__destructure_map(map__68452);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq68446){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68446));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69491 = arguments.length;
var i__5770__auto___69492 = (0);
while(true){
if((i__5770__auto___69492 < len__5769__auto___69491)){
args__5775__auto__.push((arguments[i__5770__auto___69492]));

var G__69493 = (i__5770__auto___69492 + (1));
i__5770__auto___69492 = G__69493;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68455 = conformed_args__66417__auto__;
var map__68455__$1 = cljs.core.__destructure_map(map__68455);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68455__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68455__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68455__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq68454){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68454));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69494 = arguments.length;
var i__5770__auto___69495 = (0);
while(true){
if((i__5770__auto___69495 < len__5769__auto___69494)){
args__5775__auto__.push((arguments[i__5770__auto___69495]));

var G__69496 = (i__5770__auto___69495 + (1));
i__5770__auto___69495 = G__69496;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68464 = conformed_args__66417__auto__;
var map__68464__$1 = cljs.core.__destructure_map(map__68464);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq68458){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68458));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69497 = arguments.length;
var i__5770__auto___69498 = (0);
while(true){
if((i__5770__auto___69498 < len__5769__auto___69497)){
args__5775__auto__.push((arguments[i__5770__auto___69498]));

var G__69499 = (i__5770__auto___69498 + (1));
i__5770__auto___69498 = G__69499;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68468 = conformed_args__66417__auto__;
var map__68468__$1 = cljs.core.__destructure_map(map__68468);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq68466){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68466));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69500 = arguments.length;
var i__5770__auto___69501 = (0);
while(true){
if((i__5770__auto___69501 < len__5769__auto___69500)){
args__5775__auto__.push((arguments[i__5770__auto___69501]));

var G__69502 = (i__5770__auto___69501 + (1));
i__5770__auto___69501 = G__69502;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68475 = conformed_args__66417__auto__;
var map__68475__$1 = cljs.core.__destructure_map(map__68475);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq68473){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68473));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69503 = arguments.length;
var i__5770__auto___69504 = (0);
while(true){
if((i__5770__auto___69504 < len__5769__auto___69503)){
args__5775__auto__.push((arguments[i__5770__auto___69504]));

var G__69505 = (i__5770__auto___69504 + (1));
i__5770__auto___69504 = G__69505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68481 = conformed_args__66417__auto__;
var map__68481__$1 = cljs.core.__destructure_map(map__68481);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq68477){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69506 = arguments.length;
var i__5770__auto___69507 = (0);
while(true){
if((i__5770__auto___69507 < len__5769__auto___69506)){
args__5775__auto__.push((arguments[i__5770__auto___69507]));

var G__69508 = (i__5770__auto___69507 + (1));
i__5770__auto___69507 = G__69508;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68487 = conformed_args__66417__auto__;
var map__68487__$1 = cljs.core.__destructure_map(map__68487);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq68486){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68486));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69509 = arguments.length;
var i__5770__auto___69510 = (0);
while(true){
if((i__5770__auto___69510 < len__5769__auto___69509)){
args__5775__auto__.push((arguments[i__5770__auto___69510]));

var G__69511 = (i__5770__auto___69510 + (1));
i__5770__auto___69510 = G__69511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68492 = conformed_args__66417__auto__;
var map__68492__$1 = cljs.core.__destructure_map(map__68492);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq68490){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68490));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69512 = arguments.length;
var i__5770__auto___69513 = (0);
while(true){
if((i__5770__auto___69513 < len__5769__auto___69512)){
args__5775__auto__.push((arguments[i__5770__auto___69513]));

var G__69514 = (i__5770__auto___69513 + (1));
i__5770__auto___69513 = G__69514;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68502 = conformed_args__66417__auto__;
var map__68502__$1 = cljs.core.__destructure_map(map__68502);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq68494){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68494));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69515 = arguments.length;
var i__5770__auto___69516 = (0);
while(true){
if((i__5770__auto___69516 < len__5769__auto___69515)){
args__5775__auto__.push((arguments[i__5770__auto___69516]));

var G__69517 = (i__5770__auto___69516 + (1));
i__5770__auto___69516 = G__69517;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68516 = conformed_args__66417__auto__;
var map__68516__$1 = cljs.core.__destructure_map(map__68516);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq68509){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68509));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69518 = arguments.length;
var i__5770__auto___69519 = (0);
while(true){
if((i__5770__auto___69519 < len__5769__auto___69518)){
args__5775__auto__.push((arguments[i__5770__auto___69519]));

var G__69520 = (i__5770__auto___69519 + (1));
i__5770__auto___69519 = G__69520;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68525 = conformed_args__66417__auto__;
var map__68525__$1 = cljs.core.__destructure_map(map__68525);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq68524){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68524));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69521 = arguments.length;
var i__5770__auto___69522 = (0);
while(true){
if((i__5770__auto___69522 < len__5769__auto___69521)){
args__5775__auto__.push((arguments[i__5770__auto___69522]));

var G__69523 = (i__5770__auto___69522 + (1));
i__5770__auto___69522 = G__69523;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68535 = conformed_args__66417__auto__;
var map__68535__$1 = cljs.core.__destructure_map(map__68535);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq68531){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69524 = arguments.length;
var i__5770__auto___69525 = (0);
while(true){
if((i__5770__auto___69525 < len__5769__auto___69524)){
args__5775__auto__.push((arguments[i__5770__auto___69525]));

var G__69526 = (i__5770__auto___69525 + (1));
i__5770__auto___69525 = G__69526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68543 = conformed_args__66417__auto__;
var map__68543__$1 = cljs.core.__destructure_map(map__68543);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq68539){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69527 = arguments.length;
var i__5770__auto___69528 = (0);
while(true){
if((i__5770__auto___69528 < len__5769__auto___69527)){
args__5775__auto__.push((arguments[i__5770__auto___69528]));

var G__69529 = (i__5770__auto___69528 + (1));
i__5770__auto___69528 = G__69529;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68556 = conformed_args__66417__auto__;
var map__68556__$1 = cljs.core.__destructure_map(map__68556);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq68553){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68553));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69530 = arguments.length;
var i__5770__auto___69531 = (0);
while(true){
if((i__5770__auto___69531 < len__5769__auto___69530)){
args__5775__auto__.push((arguments[i__5770__auto___69531]));

var G__69532 = (i__5770__auto___69531 + (1));
i__5770__auto___69531 = G__69532;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68558 = conformed_args__66417__auto__;
var map__68558__$1 = cljs.core.__destructure_map(map__68558);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq68557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69533 = arguments.length;
var i__5770__auto___69534 = (0);
while(true){
if((i__5770__auto___69534 < len__5769__auto___69533)){
args__5775__auto__.push((arguments[i__5770__auto___69534]));

var G__69535 = (i__5770__auto___69534 + (1));
i__5770__auto___69534 = G__69535;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68564 = conformed_args__66417__auto__;
var map__68564__$1 = cljs.core.__destructure_map(map__68564);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq68561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68561));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69536 = arguments.length;
var i__5770__auto___69537 = (0);
while(true){
if((i__5770__auto___69537 < len__5769__auto___69536)){
args__5775__auto__.push((arguments[i__5770__auto___69537]));

var G__69538 = (i__5770__auto___69537 + (1));
i__5770__auto___69537 = G__69538;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68584 = conformed_args__66417__auto__;
var map__68584__$1 = cljs.core.__destructure_map(map__68584);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq68571){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68571));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69539 = arguments.length;
var i__5770__auto___69540 = (0);
while(true){
if((i__5770__auto___69540 < len__5769__auto___69539)){
args__5775__auto__.push((arguments[i__5770__auto___69540]));

var G__69541 = (i__5770__auto___69540 + (1));
i__5770__auto___69540 = G__69541;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68586 = conformed_args__66417__auto__;
var map__68586__$1 = cljs.core.__destructure_map(map__68586);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq68585){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69542 = arguments.length;
var i__5770__auto___69543 = (0);
while(true){
if((i__5770__auto___69543 < len__5769__auto___69542)){
args__5775__auto__.push((arguments[i__5770__auto___69543]));

var G__69544 = (i__5770__auto___69543 + (1));
i__5770__auto___69543 = G__69544;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68593 = conformed_args__66417__auto__;
var map__68593__$1 = cljs.core.__destructure_map(map__68593);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68593__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68593__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68593__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq68590){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68590));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69545 = arguments.length;
var i__5770__auto___69546 = (0);
while(true){
if((i__5770__auto___69546 < len__5769__auto___69545)){
args__5775__auto__.push((arguments[i__5770__auto___69546]));

var G__69547 = (i__5770__auto___69546 + (1));
i__5770__auto___69546 = G__69547;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68597 = conformed_args__66417__auto__;
var map__68597__$1 = cljs.core.__destructure_map(map__68597);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq68595){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69548 = arguments.length;
var i__5770__auto___69549 = (0);
while(true){
if((i__5770__auto___69549 < len__5769__auto___69548)){
args__5775__auto__.push((arguments[i__5770__auto___69549]));

var G__69550 = (i__5770__auto___69549 + (1));
i__5770__auto___69549 = G__69550;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68600 = conformed_args__66417__auto__;
var map__68600__$1 = cljs.core.__destructure_map(map__68600);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq68598){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68598));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69551 = arguments.length;
var i__5770__auto___69552 = (0);
while(true){
if((i__5770__auto___69552 < len__5769__auto___69551)){
args__5775__auto__.push((arguments[i__5770__auto___69552]));

var G__69553 = (i__5770__auto___69552 + (1));
i__5770__auto___69552 = G__69553;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68604 = conformed_args__66417__auto__;
var map__68604__$1 = cljs.core.__destructure_map(map__68604);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq68602){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68602));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69554 = arguments.length;
var i__5770__auto___69555 = (0);
while(true){
if((i__5770__auto___69555 < len__5769__auto___69554)){
args__5775__auto__.push((arguments[i__5770__auto___69555]));

var G__69556 = (i__5770__auto___69555 + (1));
i__5770__auto___69555 = G__69556;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68613 = conformed_args__66417__auto__;
var map__68613__$1 = cljs.core.__destructure_map(map__68613);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq68607){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69557 = arguments.length;
var i__5770__auto___69558 = (0);
while(true){
if((i__5770__auto___69558 < len__5769__auto___69557)){
args__5775__auto__.push((arguments[i__5770__auto___69558]));

var G__69559 = (i__5770__auto___69558 + (1));
i__5770__auto___69558 = G__69559;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68621 = conformed_args__66417__auto__;
var map__68621__$1 = cljs.core.__destructure_map(map__68621);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq68615){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68615));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69560 = arguments.length;
var i__5770__auto___69561 = (0);
while(true){
if((i__5770__auto___69561 < len__5769__auto___69560)){
args__5775__auto__.push((arguments[i__5770__auto___69561]));

var G__69562 = (i__5770__auto___69561 + (1));
i__5770__auto___69561 = G__69562;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68628 = conformed_args__66417__auto__;
var map__68628__$1 = cljs.core.__destructure_map(map__68628);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq68624){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68624));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69563 = arguments.length;
var i__5770__auto___69564 = (0);
while(true){
if((i__5770__auto___69564 < len__5769__auto___69563)){
args__5775__auto__.push((arguments[i__5770__auto___69564]));

var G__69565 = (i__5770__auto___69564 + (1));
i__5770__auto___69564 = G__69565;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68635 = conformed_args__66417__auto__;
var map__68635__$1 = cljs.core.__destructure_map(map__68635);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq68632){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68632));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69566 = arguments.length;
var i__5770__auto___69567 = (0);
while(true){
if((i__5770__auto___69567 < len__5769__auto___69566)){
args__5775__auto__.push((arguments[i__5770__auto___69567]));

var G__69568 = (i__5770__auto___69567 + (1));
i__5770__auto___69567 = G__69568;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68644 = conformed_args__66417__auto__;
var map__68644__$1 = cljs.core.__destructure_map(map__68644);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68644__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68644__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68644__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq68643){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68643));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69569 = arguments.length;
var i__5770__auto___69570 = (0);
while(true){
if((i__5770__auto___69570 < len__5769__auto___69569)){
args__5775__auto__.push((arguments[i__5770__auto___69570]));

var G__69571 = (i__5770__auto___69570 + (1));
i__5770__auto___69570 = G__69571;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68649 = conformed_args__66417__auto__;
var map__68649__$1 = cljs.core.__destructure_map(map__68649);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq68646){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68646));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69572 = arguments.length;
var i__5770__auto___69573 = (0);
while(true){
if((i__5770__auto___69573 < len__5769__auto___69572)){
args__5775__auto__.push((arguments[i__5770__auto___69573]));

var G__69574 = (i__5770__auto___69573 + (1));
i__5770__auto___69573 = G__69574;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68656 = conformed_args__66417__auto__;
var map__68656__$1 = cljs.core.__destructure_map(map__68656);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq68652){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68652));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69575 = arguments.length;
var i__5770__auto___69576 = (0);
while(true){
if((i__5770__auto___69576 < len__5769__auto___69575)){
args__5775__auto__.push((arguments[i__5770__auto___69576]));

var G__69577 = (i__5770__auto___69576 + (1));
i__5770__auto___69576 = G__69577;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68659 = conformed_args__66417__auto__;
var map__68659__$1 = cljs.core.__destructure_map(map__68659);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq68658){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69579 = arguments.length;
var i__5770__auto___69580 = (0);
while(true){
if((i__5770__auto___69580 < len__5769__auto___69579)){
args__5775__auto__.push((arguments[i__5770__auto___69580]));

var G__69581 = (i__5770__auto___69580 + (1));
i__5770__auto___69580 = G__69581;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68663 = conformed_args__66417__auto__;
var map__68663__$1 = cljs.core.__destructure_map(map__68663);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq68660){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68660));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69586 = arguments.length;
var i__5770__auto___69587 = (0);
while(true){
if((i__5770__auto___69587 < len__5769__auto___69586)){
args__5775__auto__.push((arguments[i__5770__auto___69587]));

var G__69588 = (i__5770__auto___69587 + (1));
i__5770__auto___69587 = G__69588;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68671 = conformed_args__66417__auto__;
var map__68671__$1 = cljs.core.__destructure_map(map__68671);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq68668){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69589 = arguments.length;
var i__5770__auto___69590 = (0);
while(true){
if((i__5770__auto___69590 < len__5769__auto___69589)){
args__5775__auto__.push((arguments[i__5770__auto___69590]));

var G__69591 = (i__5770__auto___69590 + (1));
i__5770__auto___69590 = G__69591;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68677 = conformed_args__66417__auto__;
var map__68677__$1 = cljs.core.__destructure_map(map__68677);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq68675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69592 = arguments.length;
var i__5770__auto___69593 = (0);
while(true){
if((i__5770__auto___69593 < len__5769__auto___69592)){
args__5775__auto__.push((arguments[i__5770__auto___69593]));

var G__69594 = (i__5770__auto___69593 + (1));
i__5770__auto___69593 = G__69594;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68683 = conformed_args__66417__auto__;
var map__68683__$1 = cljs.core.__destructure_map(map__68683);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq68680){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69595 = arguments.length;
var i__5770__auto___69596 = (0);
while(true){
if((i__5770__auto___69596 < len__5769__auto___69595)){
args__5775__auto__.push((arguments[i__5770__auto___69596]));

var G__69597 = (i__5770__auto___69596 + (1));
i__5770__auto___69596 = G__69597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68689 = conformed_args__66417__auto__;
var map__68689__$1 = cljs.core.__destructure_map(map__68689);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68689__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68689__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq68684){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69600 = arguments.length;
var i__5770__auto___69601 = (0);
while(true){
if((i__5770__auto___69601 < len__5769__auto___69600)){
args__5775__auto__.push((arguments[i__5770__auto___69601]));

var G__69602 = (i__5770__auto___69601 + (1));
i__5770__auto___69601 = G__69602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68696 = conformed_args__66417__auto__;
var map__68696__$1 = cljs.core.__destructure_map(map__68696);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq68691){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68691));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69604 = arguments.length;
var i__5770__auto___69605 = (0);
while(true){
if((i__5770__auto___69605 < len__5769__auto___69604)){
args__5775__auto__.push((arguments[i__5770__auto___69605]));

var G__69606 = (i__5770__auto___69605 + (1));
i__5770__auto___69605 = G__69606;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68701 = conformed_args__66417__auto__;
var map__68701__$1 = cljs.core.__destructure_map(map__68701);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq68697){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68697));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69607 = arguments.length;
var i__5770__auto___69608 = (0);
while(true){
if((i__5770__auto___69608 < len__5769__auto___69607)){
args__5775__auto__.push((arguments[i__5770__auto___69608]));

var G__69609 = (i__5770__auto___69608 + (1));
i__5770__auto___69608 = G__69609;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68708 = conformed_args__66417__auto__;
var map__68708__$1 = cljs.core.__destructure_map(map__68708);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq68703){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69610 = arguments.length;
var i__5770__auto___69611 = (0);
while(true){
if((i__5770__auto___69611 < len__5769__auto___69610)){
args__5775__auto__.push((arguments[i__5770__auto___69611]));

var G__69612 = (i__5770__auto___69611 + (1));
i__5770__auto___69611 = G__69612;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68716 = conformed_args__66417__auto__;
var map__68716__$1 = cljs.core.__destructure_map(map__68716);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq68712){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68712));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69614 = arguments.length;
var i__5770__auto___69615 = (0);
while(true){
if((i__5770__auto___69615 < len__5769__auto___69614)){
args__5775__auto__.push((arguments[i__5770__auto___69615]));

var G__69616 = (i__5770__auto___69615 + (1));
i__5770__auto___69615 = G__69616;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68730 = conformed_args__66417__auto__;
var map__68730__$1 = cljs.core.__destructure_map(map__68730);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq68725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69617 = arguments.length;
var i__5770__auto___69618 = (0);
while(true){
if((i__5770__auto___69618 < len__5769__auto___69617)){
args__5775__auto__.push((arguments[i__5770__auto___69618]));

var G__69619 = (i__5770__auto___69618 + (1));
i__5770__auto___69618 = G__69619;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68740 = conformed_args__66417__auto__;
var map__68740__$1 = cljs.core.__destructure_map(map__68740);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq68739){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68739));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69620 = arguments.length;
var i__5770__auto___69621 = (0);
while(true){
if((i__5770__auto___69621 < len__5769__auto___69620)){
args__5775__auto__.push((arguments[i__5770__auto___69621]));

var G__69622 = (i__5770__auto___69621 + (1));
i__5770__auto___69621 = G__69622;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68751 = conformed_args__66417__auto__;
var map__68751__$1 = cljs.core.__destructure_map(map__68751);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq68743){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69623 = arguments.length;
var i__5770__auto___69624 = (0);
while(true){
if((i__5770__auto___69624 < len__5769__auto___69623)){
args__5775__auto__.push((arguments[i__5770__auto___69624]));

var G__69625 = (i__5770__auto___69624 + (1));
i__5770__auto___69624 = G__69625;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68757 = conformed_args__66417__auto__;
var map__68757__$1 = cljs.core.__destructure_map(map__68757);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq68753){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68753));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69626 = arguments.length;
var i__5770__auto___69627 = (0);
while(true){
if((i__5770__auto___69627 < len__5769__auto___69626)){
args__5775__auto__.push((arguments[i__5770__auto___69627]));

var G__69628 = (i__5770__auto___69627 + (1));
i__5770__auto___69627 = G__69628;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68768 = conformed_args__66417__auto__;
var map__68768__$1 = cljs.core.__destructure_map(map__68768);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq68763){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68763));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69629 = arguments.length;
var i__5770__auto___69630 = (0);
while(true){
if((i__5770__auto___69630 < len__5769__auto___69629)){
args__5775__auto__.push((arguments[i__5770__auto___69630]));

var G__69631 = (i__5770__auto___69630 + (1));
i__5770__auto___69630 = G__69631;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68791 = conformed_args__66417__auto__;
var map__68791__$1 = cljs.core.__destructure_map(map__68791);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq68780){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68780));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69632 = arguments.length;
var i__5770__auto___69633 = (0);
while(true){
if((i__5770__auto___69633 < len__5769__auto___69632)){
args__5775__auto__.push((arguments[i__5770__auto___69633]));

var G__69634 = (i__5770__auto___69633 + (1));
i__5770__auto___69633 = G__69634;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68795 = conformed_args__66417__auto__;
var map__68795__$1 = cljs.core.__destructure_map(map__68795);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq68792){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68792));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69635 = arguments.length;
var i__5770__auto___69636 = (0);
while(true){
if((i__5770__auto___69636 < len__5769__auto___69635)){
args__5775__auto__.push((arguments[i__5770__auto___69636]));

var G__69637 = (i__5770__auto___69636 + (1));
i__5770__auto___69636 = G__69637;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68805 = conformed_args__66417__auto__;
var map__68805__$1 = cljs.core.__destructure_map(map__68805);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq68800){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69638 = arguments.length;
var i__5770__auto___69639 = (0);
while(true){
if((i__5770__auto___69639 < len__5769__auto___69638)){
args__5775__auto__.push((arguments[i__5770__auto___69639]));

var G__69640 = (i__5770__auto___69639 + (1));
i__5770__auto___69639 = G__69640;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68809 = conformed_args__66417__auto__;
var map__68809__$1 = cljs.core.__destructure_map(map__68809);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq68806){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68806));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69641 = arguments.length;
var i__5770__auto___69642 = (0);
while(true){
if((i__5770__auto___69642 < len__5769__auto___69641)){
args__5775__auto__.push((arguments[i__5770__auto___69642]));

var G__69643 = (i__5770__auto___69642 + (1));
i__5770__auto___69642 = G__69643;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68820 = conformed_args__66417__auto__;
var map__68820__$1 = cljs.core.__destructure_map(map__68820);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq68811){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68811));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69644 = arguments.length;
var i__5770__auto___69645 = (0);
while(true){
if((i__5770__auto___69645 < len__5769__auto___69644)){
args__5775__auto__.push((arguments[i__5770__auto___69645]));

var G__69646 = (i__5770__auto___69645 + (1));
i__5770__auto___69645 = G__69646;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68822 = conformed_args__66417__auto__;
var map__68822__$1 = cljs.core.__destructure_map(map__68822);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq68821){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68821));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69647 = arguments.length;
var i__5770__auto___69648 = (0);
while(true){
if((i__5770__auto___69648 < len__5769__auto___69647)){
args__5775__auto__.push((arguments[i__5770__auto___69648]));

var G__69649 = (i__5770__auto___69648 + (1));
i__5770__auto___69648 = G__69649;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68833 = conformed_args__66417__auto__;
var map__68833__$1 = cljs.core.__destructure_map(map__68833);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq68829){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68829));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69650 = arguments.length;
var i__5770__auto___69651 = (0);
while(true){
if((i__5770__auto___69651 < len__5769__auto___69650)){
args__5775__auto__.push((arguments[i__5770__auto___69651]));

var G__69652 = (i__5770__auto___69651 + (1));
i__5770__auto___69651 = G__69652;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68845 = conformed_args__66417__auto__;
var map__68845__$1 = cljs.core.__destructure_map(map__68845);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq68840){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69653 = arguments.length;
var i__5770__auto___69654 = (0);
while(true){
if((i__5770__auto___69654 < len__5769__auto___69653)){
args__5775__auto__.push((arguments[i__5770__auto___69654]));

var G__69655 = (i__5770__auto___69654 + (1));
i__5770__auto___69654 = G__69655;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68858 = conformed_args__66417__auto__;
var map__68858__$1 = cljs.core.__destructure_map(map__68858);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq68850){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68850));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69656 = arguments.length;
var i__5770__auto___69657 = (0);
while(true){
if((i__5770__auto___69657 < len__5769__auto___69656)){
args__5775__auto__.push((arguments[i__5770__auto___69657]));

var G__69658 = (i__5770__auto___69657 + (1));
i__5770__auto___69657 = G__69658;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68863 = conformed_args__66417__auto__;
var map__68863__$1 = cljs.core.__destructure_map(map__68863);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq68859){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68859));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69659 = arguments.length;
var i__5770__auto___69660 = (0);
while(true){
if((i__5770__auto___69660 < len__5769__auto___69659)){
args__5775__auto__.push((arguments[i__5770__auto___69660]));

var G__69661 = (i__5770__auto___69660 + (1));
i__5770__auto___69660 = G__69661;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68872 = conformed_args__66417__auto__;
var map__68872__$1 = cljs.core.__destructure_map(map__68872);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq68871){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68871));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69662 = arguments.length;
var i__5770__auto___69663 = (0);
while(true){
if((i__5770__auto___69663 < len__5769__auto___69662)){
args__5775__auto__.push((arguments[i__5770__auto___69663]));

var G__69664 = (i__5770__auto___69663 + (1));
i__5770__auto___69663 = G__69664;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68880 = conformed_args__66417__auto__;
var map__68880__$1 = cljs.core.__destructure_map(map__68880);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq68875){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68875));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69665 = arguments.length;
var i__5770__auto___69666 = (0);
while(true){
if((i__5770__auto___69666 < len__5769__auto___69665)){
args__5775__auto__.push((arguments[i__5770__auto___69666]));

var G__69667 = (i__5770__auto___69666 + (1));
i__5770__auto___69666 = G__69667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68884 = conformed_args__66417__auto__;
var map__68884__$1 = cljs.core.__destructure_map(map__68884);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq68882){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68882));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69668 = arguments.length;
var i__5770__auto___69669 = (0);
while(true){
if((i__5770__auto___69669 < len__5769__auto___69668)){
args__5775__auto__.push((arguments[i__5770__auto___69669]));

var G__69670 = (i__5770__auto___69669 + (1));
i__5770__auto___69669 = G__69670;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68893 = conformed_args__66417__auto__;
var map__68893__$1 = cljs.core.__destructure_map(map__68893);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq68889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68889));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69671 = arguments.length;
var i__5770__auto___69672 = (0);
while(true){
if((i__5770__auto___69672 < len__5769__auto___69671)){
args__5775__auto__.push((arguments[i__5770__auto___69672]));

var G__69673 = (i__5770__auto___69672 + (1));
i__5770__auto___69672 = G__69673;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68904 = conformed_args__66417__auto__;
var map__68904__$1 = cljs.core.__destructure_map(map__68904);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68904__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68904__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68904__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq68903){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68903));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69674 = arguments.length;
var i__5770__auto___69675 = (0);
while(true){
if((i__5770__auto___69675 < len__5769__auto___69674)){
args__5775__auto__.push((arguments[i__5770__auto___69675]));

var G__69676 = (i__5770__auto___69675 + (1));
i__5770__auto___69675 = G__69676;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68908 = conformed_args__66417__auto__;
var map__68908__$1 = cljs.core.__destructure_map(map__68908);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68908__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68908__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68908__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq68905){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68905));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69677 = arguments.length;
var i__5770__auto___69678 = (0);
while(true){
if((i__5770__auto___69678 < len__5769__auto___69677)){
args__5775__auto__.push((arguments[i__5770__auto___69678]));

var G__69679 = (i__5770__auto___69678 + (1));
i__5770__auto___69678 = G__69679;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68913 = conformed_args__66417__auto__;
var map__68913__$1 = cljs.core.__destructure_map(map__68913);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq68911){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68911));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69680 = arguments.length;
var i__5770__auto___69681 = (0);
while(true){
if((i__5770__auto___69681 < len__5769__auto___69680)){
args__5775__auto__.push((arguments[i__5770__auto___69681]));

var G__69682 = (i__5770__auto___69681 + (1));
i__5770__auto___69681 = G__69682;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68919 = conformed_args__66417__auto__;
var map__68919__$1 = cljs.core.__destructure_map(map__68919);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq68916){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69683 = arguments.length;
var i__5770__auto___69684 = (0);
while(true){
if((i__5770__auto___69684 < len__5769__auto___69683)){
args__5775__auto__.push((arguments[i__5770__auto___69684]));

var G__69685 = (i__5770__auto___69684 + (1));
i__5770__auto___69684 = G__69685;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68923 = conformed_args__66417__auto__;
var map__68923__$1 = cljs.core.__destructure_map(map__68923);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq68922){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68922));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69686 = arguments.length;
var i__5770__auto___69687 = (0);
while(true){
if((i__5770__auto___69687 < len__5769__auto___69686)){
args__5775__auto__.push((arguments[i__5770__auto___69687]));

var G__69688 = (i__5770__auto___69687 + (1));
i__5770__auto___69687 = G__69688;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68937 = conformed_args__66417__auto__;
var map__68937__$1 = cljs.core.__destructure_map(map__68937);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq68932){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68932));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69689 = arguments.length;
var i__5770__auto___69690 = (0);
while(true){
if((i__5770__auto___69690 < len__5769__auto___69689)){
args__5775__auto__.push((arguments[i__5770__auto___69690]));

var G__69691 = (i__5770__auto___69690 + (1));
i__5770__auto___69690 = G__69691;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68939 = conformed_args__66417__auto__;
var map__68939__$1 = cljs.core.__destructure_map(map__68939);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq68938){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68938));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69692 = arguments.length;
var i__5770__auto___69693 = (0);
while(true){
if((i__5770__auto___69693 < len__5769__auto___69692)){
args__5775__auto__.push((arguments[i__5770__auto___69693]));

var G__69694 = (i__5770__auto___69693 + (1));
i__5770__auto___69693 = G__69694;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68945 = conformed_args__66417__auto__;
var map__68945__$1 = cljs.core.__destructure_map(map__68945);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq68944){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68944));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69695 = arguments.length;
var i__5770__auto___69696 = (0);
while(true){
if((i__5770__auto___69696 < len__5769__auto___69695)){
args__5775__auto__.push((arguments[i__5770__auto___69696]));

var G__69697 = (i__5770__auto___69696 + (1));
i__5770__auto___69696 = G__69697;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68951 = conformed_args__66417__auto__;
var map__68951__$1 = cljs.core.__destructure_map(map__68951);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq68950){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68950));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69698 = arguments.length;
var i__5770__auto___69699 = (0);
while(true){
if((i__5770__auto___69699 < len__5769__auto___69698)){
args__5775__auto__.push((arguments[i__5770__auto___69699]));

var G__69700 = (i__5770__auto___69699 + (1));
i__5770__auto___69699 = G__69700;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68957 = conformed_args__66417__auto__;
var map__68957__$1 = cljs.core.__destructure_map(map__68957);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq68956){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68956));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69701 = arguments.length;
var i__5770__auto___69702 = (0);
while(true){
if((i__5770__auto___69702 < len__5769__auto___69701)){
args__5775__auto__.push((arguments[i__5770__auto___69702]));

var G__69703 = (i__5770__auto___69702 + (1));
i__5770__auto___69702 = G__69703;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68962 = conformed_args__66417__auto__;
var map__68962__$1 = cljs.core.__destructure_map(map__68962);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq68958){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68958));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69704 = arguments.length;
var i__5770__auto___69705 = (0);
while(true){
if((i__5770__auto___69705 < len__5769__auto___69704)){
args__5775__auto__.push((arguments[i__5770__auto___69705]));

var G__69706 = (i__5770__auto___69705 + (1));
i__5770__auto___69705 = G__69706;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68968 = conformed_args__66417__auto__;
var map__68968__$1 = cljs.core.__destructure_map(map__68968);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq68967){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68967));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69707 = arguments.length;
var i__5770__auto___69708 = (0);
while(true){
if((i__5770__auto___69708 < len__5769__auto___69707)){
args__5775__auto__.push((arguments[i__5770__auto___69708]));

var G__69709 = (i__5770__auto___69708 + (1));
i__5770__auto___69708 = G__69709;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68972 = conformed_args__66417__auto__;
var map__68972__$1 = cljs.core.__destructure_map(map__68972);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq68971){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68971));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69710 = arguments.length;
var i__5770__auto___69711 = (0);
while(true){
if((i__5770__auto___69711 < len__5769__auto___69710)){
args__5775__auto__.push((arguments[i__5770__auto___69711]));

var G__69712 = (i__5770__auto___69711 + (1));
i__5770__auto___69711 = G__69712;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68978 = conformed_args__66417__auto__;
var map__68978__$1 = cljs.core.__destructure_map(map__68978);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68978__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68978__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq68976){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69713 = arguments.length;
var i__5770__auto___69714 = (0);
while(true){
if((i__5770__auto___69714 < len__5769__auto___69713)){
args__5775__auto__.push((arguments[i__5770__auto___69714]));

var G__69715 = (i__5770__auto___69714 + (1));
i__5770__auto___69714 = G__69715;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68980 = conformed_args__66417__auto__;
var map__68980__$1 = cljs.core.__destructure_map(map__68980);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq68979){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68979));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69716 = arguments.length;
var i__5770__auto___69717 = (0);
while(true){
if((i__5770__auto___69717 < len__5769__auto___69716)){
args__5775__auto__.push((arguments[i__5770__auto___69717]));

var G__69718 = (i__5770__auto___69717 + (1));
i__5770__auto___69717 = G__69718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68989 = conformed_args__66417__auto__;
var map__68989__$1 = cljs.core.__destructure_map(map__68989);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq68986){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69719 = arguments.length;
var i__5770__auto___69720 = (0);
while(true){
if((i__5770__auto___69720 < len__5769__auto___69719)){
args__5775__auto__.push((arguments[i__5770__auto___69720]));

var G__69721 = (i__5770__auto___69720 + (1));
i__5770__auto___69720 = G__69721;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68994 = conformed_args__66417__auto__;
var map__68994__$1 = cljs.core.__destructure_map(map__68994);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68994__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68994__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68994__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq68992){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68992));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69722 = arguments.length;
var i__5770__auto___69723 = (0);
while(true){
if((i__5770__auto___69723 < len__5769__auto___69722)){
args__5775__auto__.push((arguments[i__5770__auto___69723]));

var G__69724 = (i__5770__auto___69723 + (1));
i__5770__auto___69723 = G__69724;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__68998 = conformed_args__66417__auto__;
var map__68998__$1 = cljs.core.__destructure_map(map__68998);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq68997){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68997));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69725 = arguments.length;
var i__5770__auto___69726 = (0);
while(true){
if((i__5770__auto___69726 < len__5769__auto___69725)){
args__5775__auto__.push((arguments[i__5770__auto___69726]));

var G__69727 = (i__5770__auto___69726 + (1));
i__5770__auto___69726 = G__69727;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69003 = conformed_args__66417__auto__;
var map__69003__$1 = cljs.core.__destructure_map(map__69003);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq69000){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69728 = arguments.length;
var i__5770__auto___69729 = (0);
while(true){
if((i__5770__auto___69729 < len__5769__auto___69728)){
args__5775__auto__.push((arguments[i__5770__auto___69729]));

var G__69730 = (i__5770__auto___69729 + (1));
i__5770__auto___69729 = G__69730;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69006 = conformed_args__66417__auto__;
var map__69006__$1 = cljs.core.__destructure_map(map__69006);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69006__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69006__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69006__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq69005){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69005));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69731 = arguments.length;
var i__5770__auto___69732 = (0);
while(true){
if((i__5770__auto___69732 < len__5769__auto___69731)){
args__5775__auto__.push((arguments[i__5770__auto___69732]));

var G__69733 = (i__5770__auto___69732 + (1));
i__5770__auto___69732 = G__69733;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69040 = conformed_args__66417__auto__;
var map__69040__$1 = cljs.core.__destructure_map(map__69040);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq69010){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69734 = arguments.length;
var i__5770__auto___69735 = (0);
while(true){
if((i__5770__auto___69735 < len__5769__auto___69734)){
args__5775__auto__.push((arguments[i__5770__auto___69735]));

var G__69736 = (i__5770__auto___69735 + (1));
i__5770__auto___69735 = G__69736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69078 = conformed_args__66417__auto__;
var map__69078__$1 = cljs.core.__destructure_map(map__69078);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq69069){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69069));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69737 = arguments.length;
var i__5770__auto___69738 = (0);
while(true){
if((i__5770__auto___69738 < len__5769__auto___69737)){
args__5775__auto__.push((arguments[i__5770__auto___69738]));

var G__69739 = (i__5770__auto___69738 + (1));
i__5770__auto___69738 = G__69739;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69085 = conformed_args__66417__auto__;
var map__69085__$1 = cljs.core.__destructure_map(map__69085);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq69084){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69084));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69740 = arguments.length;
var i__5770__auto___69741 = (0);
while(true){
if((i__5770__auto___69741 < len__5769__auto___69740)){
args__5775__auto__.push((arguments[i__5770__auto___69741]));

var G__69742 = (i__5770__auto___69741 + (1));
i__5770__auto___69741 = G__69742;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69088 = conformed_args__66417__auto__;
var map__69088__$1 = cljs.core.__destructure_map(map__69088);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq69087){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69743 = arguments.length;
var i__5770__auto___69744 = (0);
while(true){
if((i__5770__auto___69744 < len__5769__auto___69743)){
args__5775__auto__.push((arguments[i__5770__auto___69744]));

var G__69745 = (i__5770__auto___69744 + (1));
i__5770__auto___69744 = G__69745;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69090 = conformed_args__66417__auto__;
var map__69090__$1 = cljs.core.__destructure_map(map__69090);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq69089){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69089));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69746 = arguments.length;
var i__5770__auto___69747 = (0);
while(true){
if((i__5770__auto___69747 < len__5769__auto___69746)){
args__5775__auto__.push((arguments[i__5770__auto___69747]));

var G__69748 = (i__5770__auto___69747 + (1));
i__5770__auto___69747 = G__69748;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69092 = conformed_args__66417__auto__;
var map__69092__$1 = cljs.core.__destructure_map(map__69092);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq69091){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69091));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69750 = arguments.length;
var i__5770__auto___69751 = (0);
while(true){
if((i__5770__auto___69751 < len__5769__auto___69750)){
args__5775__auto__.push((arguments[i__5770__auto___69751]));

var G__69752 = (i__5770__auto___69751 + (1));
i__5770__auto___69751 = G__69752;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69094 = conformed_args__66417__auto__;
var map__69094__$1 = cljs.core.__destructure_map(map__69094);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq69093){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69093));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69753 = arguments.length;
var i__5770__auto___69754 = (0);
while(true){
if((i__5770__auto___69754 < len__5769__auto___69753)){
args__5775__auto__.push((arguments[i__5770__auto___69754]));

var G__69755 = (i__5770__auto___69754 + (1));
i__5770__auto___69754 = G__69755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69096 = conformed_args__66417__auto__;
var map__69096__$1 = cljs.core.__destructure_map(map__69096);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69096__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69096__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69096__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq69095){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69095));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69756 = arguments.length;
var i__5770__auto___69757 = (0);
while(true){
if((i__5770__auto___69757 < len__5769__auto___69756)){
args__5775__auto__.push((arguments[i__5770__auto___69757]));

var G__69758 = (i__5770__auto___69757 + (1));
i__5770__auto___69757 = G__69758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69098 = conformed_args__66417__auto__;
var map__69098__$1 = cljs.core.__destructure_map(map__69098);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq69097){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69097));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69760 = arguments.length;
var i__5770__auto___69761 = (0);
while(true){
if((i__5770__auto___69761 < len__5769__auto___69760)){
args__5775__auto__.push((arguments[i__5770__auto___69761]));

var G__69762 = (i__5770__auto___69761 + (1));
i__5770__auto___69761 = G__69762;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69100 = conformed_args__66417__auto__;
var map__69100__$1 = cljs.core.__destructure_map(map__69100);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq69099){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69099));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69763 = arguments.length;
var i__5770__auto___69764 = (0);
while(true){
if((i__5770__auto___69764 < len__5769__auto___69763)){
args__5775__auto__.push((arguments[i__5770__auto___69764]));

var G__69765 = (i__5770__auto___69764 + (1));
i__5770__auto___69764 = G__69765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69102 = conformed_args__66417__auto__;
var map__69102__$1 = cljs.core.__destructure_map(map__69102);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69102__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69102__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69102__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq69101){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69101));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69766 = arguments.length;
var i__5770__auto___69767 = (0);
while(true){
if((i__5770__auto___69767 < len__5769__auto___69766)){
args__5775__auto__.push((arguments[i__5770__auto___69767]));

var G__69768 = (i__5770__auto___69767 + (1));
i__5770__auto___69767 = G__69768;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69104 = conformed_args__66417__auto__;
var map__69104__$1 = cljs.core.__destructure_map(map__69104);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq69103){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69103));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69769 = arguments.length;
var i__5770__auto___69770 = (0);
while(true){
if((i__5770__auto___69770 < len__5769__auto___69769)){
args__5775__auto__.push((arguments[i__5770__auto___69770]));

var G__69771 = (i__5770__auto___69770 + (1));
i__5770__auto___69770 = G__69771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69106 = conformed_args__66417__auto__;
var map__69106__$1 = cljs.core.__destructure_map(map__69106);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq69105){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69105));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69772 = arguments.length;
var i__5770__auto___69773 = (0);
while(true){
if((i__5770__auto___69773 < len__5769__auto___69772)){
args__5775__auto__.push((arguments[i__5770__auto___69773]));

var G__69774 = (i__5770__auto___69773 + (1));
i__5770__auto___69773 = G__69774;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69108 = conformed_args__66417__auto__;
var map__69108__$1 = cljs.core.__destructure_map(map__69108);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq69107){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69107));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69775 = arguments.length;
var i__5770__auto___69776 = (0);
while(true){
if((i__5770__auto___69776 < len__5769__auto___69775)){
args__5775__auto__.push((arguments[i__5770__auto___69776]));

var G__69777 = (i__5770__auto___69776 + (1));
i__5770__auto___69776 = G__69777;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69110 = conformed_args__66417__auto__;
var map__69110__$1 = cljs.core.__destructure_map(map__69110);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq69109){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69109));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69778 = arguments.length;
var i__5770__auto___69779 = (0);
while(true){
if((i__5770__auto___69779 < len__5769__auto___69778)){
args__5775__auto__.push((arguments[i__5770__auto___69779]));

var G__69780 = (i__5770__auto___69779 + (1));
i__5770__auto___69779 = G__69780;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69112 = conformed_args__66417__auto__;
var map__69112__$1 = cljs.core.__destructure_map(map__69112);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69112__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69112__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69112__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq69111){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69111));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69781 = arguments.length;
var i__5770__auto___69782 = (0);
while(true){
if((i__5770__auto___69782 < len__5769__auto___69781)){
args__5775__auto__.push((arguments[i__5770__auto___69782]));

var G__69783 = (i__5770__auto___69782 + (1));
i__5770__auto___69782 = G__69783;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69114 = conformed_args__66417__auto__;
var map__69114__$1 = cljs.core.__destructure_map(map__69114);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq69113){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69113));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69784 = arguments.length;
var i__5770__auto___69785 = (0);
while(true){
if((i__5770__auto___69785 < len__5769__auto___69784)){
args__5775__auto__.push((arguments[i__5770__auto___69785]));

var G__69786 = (i__5770__auto___69785 + (1));
i__5770__auto___69785 = G__69786;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69116 = conformed_args__66417__auto__;
var map__69116__$1 = cljs.core.__destructure_map(map__69116);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq69115){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69115));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69787 = arguments.length;
var i__5770__auto___69788 = (0);
while(true){
if((i__5770__auto___69788 < len__5769__auto___69787)){
args__5775__auto__.push((arguments[i__5770__auto___69788]));

var G__69789 = (i__5770__auto___69788 + (1));
i__5770__auto___69788 = G__69789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69118 = conformed_args__66417__auto__;
var map__69118__$1 = cljs.core.__destructure_map(map__69118);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq69117){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69117));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69790 = arguments.length;
var i__5770__auto___69791 = (0);
while(true){
if((i__5770__auto___69791 < len__5769__auto___69790)){
args__5775__auto__.push((arguments[i__5770__auto___69791]));

var G__69792 = (i__5770__auto___69791 + (1));
i__5770__auto___69791 = G__69792;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69120 = conformed_args__66417__auto__;
var map__69120__$1 = cljs.core.__destructure_map(map__69120);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69120__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69120__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69120__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq69119){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69119));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69793 = arguments.length;
var i__5770__auto___69794 = (0);
while(true){
if((i__5770__auto___69794 < len__5769__auto___69793)){
args__5775__auto__.push((arguments[i__5770__auto___69794]));

var G__69795 = (i__5770__auto___69794 + (1));
i__5770__auto___69794 = G__69795;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__66417__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__69122 = conformed_args__66417__auto__;
var map__69122__$1 = cljs.core.__destructure_map(map__69122);
var children__66419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__66418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__66420__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__66419__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__66419__auto__);
var attrs_value__66421__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__66418__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__66421__auto__], null),children__66419__auto____$1),css__66420__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq69121){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69121));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
