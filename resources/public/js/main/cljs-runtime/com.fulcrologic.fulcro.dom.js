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
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__56738){
var vec__56739 = p__56738;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56739,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56739,(1),null);
var pair = vec__56739;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__56742){
var vec__56743 = p__56742;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56743,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56743,(1),null);
var pair = vec__56743;
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
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__56750){
var vec__56752 = p__56750;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56752,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56752,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__56755 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56755,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__56755;
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
var G__56765 = arguments.length;
switch (G__56765) {
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
var G__56766 = component.refs;
var G__56766__$1 = (((G__56766 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__56766,name));
if((G__56766__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__56766__$1);
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
var G__56767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__56768 = (function (){var G__56769 = r;
if((G__56769 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__56769);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__56768) : ref.call(null,G__56768));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__56767) : factory.call(null,G__56767));
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
var G__56774 = arguments.length;
switch (G__56774) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___58207 = arguments.length;
var i__5770__auto___58208 = (0);
while(true){
if((i__5770__auto___58208 < len__5769__auto___58207)){
args_arr__5794__auto__.push((arguments[i__5770__auto___58208]));

var G__58209 = (i__5770__auto___58208 + (1));
i__5770__auto___58208 = G__58209;
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
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq56771){
var G__56772 = cljs.core.first(seq56771);
var seq56771__$1 = cljs.core.next(seq56771);
var G__56773 = cljs.core.first(seq56771__$1);
var seq56771__$2 = cljs.core.next(seq56771__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56772,G__56773,seq56771__$2);
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
var G__56809 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56809) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__56809));
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

var x56812_58210 = ctor.prototype;
(x56812_58210.onChange = (function (event){
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

(x56812_58210.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__56811_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__56811_SHARP_);
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
}),null)),null,1663045983,null);
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

(x56812_58210.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__58211__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__58211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58212__i = 0, G__58212__a = new Array(arguments.length -  0);
while (G__58212__i < G__58212__a.length) {G__58212__a[G__58212__i] = arguments[G__58212__i + 0]; ++G__58212__i;}
  args = new cljs.core.IndexedSeq(G__58212__a,0,null);
} 
return G__58211__delegate.call(this,args);};
G__58211.cljs$lang$maxFixedArity = 0;
G__58211.cljs$lang$applyTo = (function (arglist__58213){
var args = cljs.core.seq(arglist__58213);
return G__58211__delegate(args);
});
G__58211.cljs$core$IFn$_invoke$arity$variadic = G__58211__delegate;
return G__58211;
})()
;
return (function() { 
var G__58214__delegate = function (props,children){
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
var G__58214 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__58215__i = 0, G__58215__a = new Array(arguments.length -  1);
while (G__58215__i < G__58215__a.length) {G__58215__a[G__58215__i] = arguments[G__58215__i + 1]; ++G__58215__i;}
  children = new cljs.core.IndexedSeq(G__58215__a,0,null);
} 
return G__58214__delegate.call(this,props,children);};
G__58214.cljs$lang$maxFixedArity = 1;
G__58214.cljs$lang$applyTo = (function (arglist__58216){
var props = cljs.core.first(arglist__58216);
var children = cljs.core.rest(arglist__58216);
return G__58214__delegate(props,children);
});
G__58214.cljs$core$IFn$_invoke$arity$variadic = G__58214__delegate;
return G__58214;
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
var G__56824 = tag;
switch (G__56824) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56824)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__56826 = arguments.length;
switch (G__56826) {
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
var vec__56827 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__56828 = cljs.core.seq(vec__56827);
var first__56829 = cljs.core.first(seq__56828);
var seq__56828__$1 = cljs.core.next(seq__56828);
var head = first__56829;
var tail = seq__56828__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__56830 = (function (){var G__56831 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56831,tail);

return G__56831;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56830) : f.call(null,G__56830));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__56832 = (function (){var G__56833 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56833,args);

return G__56833;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56832) : f.call(null,G__56832));
} else {
if(cljs.core.object_QMARK_(head)){
var G__56834 = (function (){var G__56835 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56835,tail);

return G__56835;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56834) : f.call(null,G__56834));
} else {
if(cljs.core.map_QMARK_(head)){
var G__56836 = (function (){var G__56837 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__56837,tail);

return G__56837;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56836) : f.call(null,G__56836));
} else {
var G__56839 = (function (){var G__56840 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56840,args);

return G__56840;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56839) : f.call(null,G__56839));

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
var G__56845 = arguments.length;
switch (G__56845) {
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
var vec__56847 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__56848 = cljs.core.seq(vec__56847);
var first__56849 = cljs.core.first(seq__56848);
var seq__56848__$1 = cljs.core.next(seq__56848);
var head = first__56849;
var tail = seq__56848__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56851 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56851,tail);

return G__56851;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56852 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56852,args);

return G__56852;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56853 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56853,tail);

return G__56853;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56856 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__56856,tail);

return G__56856;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56857 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56857,args);

return G__56857;
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
var len__5769__auto___58220 = arguments.length;
var i__5770__auto___58221 = (0);
while(true){
if((i__5770__auto___58221 < len__5769__auto___58220)){
args__5775__auto__.push((arguments[i__5770__auto___58221]));

var G__58222 = (i__5770__auto___58221 + (1));
i__5770__auto___58221 = G__58222;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56872 = conformed_args__55444__auto__;
var map__56872__$1 = cljs.core.__destructure_map(map__56872);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq56866){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56866));
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
var len__5769__auto___58223 = arguments.length;
var i__5770__auto___58224 = (0);
while(true){
if((i__5770__auto___58224 < len__5769__auto___58223)){
args__5775__auto__.push((arguments[i__5770__auto___58224]));

var G__58225 = (i__5770__auto___58224 + (1));
i__5770__auto___58224 = G__58225;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56876 = conformed_args__55444__auto__;
var map__56876__$1 = cljs.core.__destructure_map(map__56876);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq56874){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56874));
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
var len__5769__auto___58226 = arguments.length;
var i__5770__auto___58227 = (0);
while(true){
if((i__5770__auto___58227 < len__5769__auto___58226)){
args__5775__auto__.push((arguments[i__5770__auto___58227]));

var G__58228 = (i__5770__auto___58227 + (1));
i__5770__auto___58227 = G__58228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56884 = conformed_args__55444__auto__;
var map__56884__$1 = cljs.core.__destructure_map(map__56884);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq56878){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56878));
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
var len__5769__auto___58229 = arguments.length;
var i__5770__auto___58230 = (0);
while(true){
if((i__5770__auto___58230 < len__5769__auto___58229)){
args__5775__auto__.push((arguments[i__5770__auto___58230]));

var G__58231 = (i__5770__auto___58230 + (1));
i__5770__auto___58230 = G__58231;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56887 = conformed_args__55444__auto__;
var map__56887__$1 = cljs.core.__destructure_map(map__56887);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq56886){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56886));
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
var len__5769__auto___58232 = arguments.length;
var i__5770__auto___58233 = (0);
while(true){
if((i__5770__auto___58233 < len__5769__auto___58232)){
args__5775__auto__.push((arguments[i__5770__auto___58233]));

var G__58234 = (i__5770__auto___58233 + (1));
i__5770__auto___58233 = G__58234;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56889 = conformed_args__55444__auto__;
var map__56889__$1 = cljs.core.__destructure_map(map__56889);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq56888){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56888));
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
var len__5769__auto___58235 = arguments.length;
var i__5770__auto___58236 = (0);
while(true){
if((i__5770__auto___58236 < len__5769__auto___58235)){
args__5775__auto__.push((arguments[i__5770__auto___58236]));

var G__58237 = (i__5770__auto___58236 + (1));
i__5770__auto___58236 = G__58237;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56891 = conformed_args__55444__auto__;
var map__56891__$1 = cljs.core.__destructure_map(map__56891);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq56890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56890));
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
var len__5769__auto___58238 = arguments.length;
var i__5770__auto___58239 = (0);
while(true){
if((i__5770__auto___58239 < len__5769__auto___58238)){
args__5775__auto__.push((arguments[i__5770__auto___58239]));

var G__58240 = (i__5770__auto___58239 + (1));
i__5770__auto___58239 = G__58240;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56893 = conformed_args__55444__auto__;
var map__56893__$1 = cljs.core.__destructure_map(map__56893);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq56892){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56892));
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
var len__5769__auto___58241 = arguments.length;
var i__5770__auto___58242 = (0);
while(true){
if((i__5770__auto___58242 < len__5769__auto___58241)){
args__5775__auto__.push((arguments[i__5770__auto___58242]));

var G__58243 = (i__5770__auto___58242 + (1));
i__5770__auto___58242 = G__58243;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56898 = conformed_args__55444__auto__;
var map__56898__$1 = cljs.core.__destructure_map(map__56898);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq56895){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56895));
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
var len__5769__auto___58245 = arguments.length;
var i__5770__auto___58246 = (0);
while(true){
if((i__5770__auto___58246 < len__5769__auto___58245)){
args__5775__auto__.push((arguments[i__5770__auto___58246]));

var G__58247 = (i__5770__auto___58246 + (1));
i__5770__auto___58246 = G__58247;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56905 = conformed_args__55444__auto__;
var map__56905__$1 = cljs.core.__destructure_map(map__56905);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq56900){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56900));
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
var len__5769__auto___58249 = arguments.length;
var i__5770__auto___58250 = (0);
while(true){
if((i__5770__auto___58250 < len__5769__auto___58249)){
args__5775__auto__.push((arguments[i__5770__auto___58250]));

var G__58251 = (i__5770__auto___58250 + (1));
i__5770__auto___58250 = G__58251;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56907 = conformed_args__55444__auto__;
var map__56907__$1 = cljs.core.__destructure_map(map__56907);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq56906){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56906));
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
var len__5769__auto___58252 = arguments.length;
var i__5770__auto___58253 = (0);
while(true){
if((i__5770__auto___58253 < len__5769__auto___58252)){
args__5775__auto__.push((arguments[i__5770__auto___58253]));

var G__58254 = (i__5770__auto___58253 + (1));
i__5770__auto___58253 = G__58254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56922 = conformed_args__55444__auto__;
var map__56922__$1 = cljs.core.__destructure_map(map__56922);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq56912){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56912));
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
var len__5769__auto___58255 = arguments.length;
var i__5770__auto___58256 = (0);
while(true){
if((i__5770__auto___58256 < len__5769__auto___58255)){
args__5775__auto__.push((arguments[i__5770__auto___58256]));

var G__58257 = (i__5770__auto___58256 + (1));
i__5770__auto___58256 = G__58257;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56930 = conformed_args__55444__auto__;
var map__56930__$1 = cljs.core.__destructure_map(map__56930);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq56923){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56923));
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
var len__5769__auto___58259 = arguments.length;
var i__5770__auto___58260 = (0);
while(true){
if((i__5770__auto___58260 < len__5769__auto___58259)){
args__5775__auto__.push((arguments[i__5770__auto___58260]));

var G__58261 = (i__5770__auto___58260 + (1));
i__5770__auto___58260 = G__58261;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56932 = conformed_args__55444__auto__;
var map__56932__$1 = cljs.core.__destructure_map(map__56932);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq56931){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56931));
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
var len__5769__auto___58262 = arguments.length;
var i__5770__auto___58263 = (0);
while(true){
if((i__5770__auto___58263 < len__5769__auto___58262)){
args__5775__auto__.push((arguments[i__5770__auto___58263]));

var G__58264 = (i__5770__auto___58263 + (1));
i__5770__auto___58263 = G__58264;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56945 = conformed_args__55444__auto__;
var map__56945__$1 = cljs.core.__destructure_map(map__56945);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq56939){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56939));
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
var len__5769__auto___58265 = arguments.length;
var i__5770__auto___58266 = (0);
while(true){
if((i__5770__auto___58266 < len__5769__auto___58265)){
args__5775__auto__.push((arguments[i__5770__auto___58266]));

var G__58267 = (i__5770__auto___58266 + (1));
i__5770__auto___58266 = G__58267;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56958 = conformed_args__55444__auto__;
var map__56958__$1 = cljs.core.__destructure_map(map__56958);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq56954){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56954));
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
var len__5769__auto___58268 = arguments.length;
var i__5770__auto___58269 = (0);
while(true){
if((i__5770__auto___58269 < len__5769__auto___58268)){
args__5775__auto__.push((arguments[i__5770__auto___58269]));

var G__58270 = (i__5770__auto___58269 + (1));
i__5770__auto___58269 = G__58270;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56972 = conformed_args__55444__auto__;
var map__56972__$1 = cljs.core.__destructure_map(map__56972);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq56965){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56965));
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
var len__5769__auto___58271 = arguments.length;
var i__5770__auto___58272 = (0);
while(true){
if((i__5770__auto___58272 < len__5769__auto___58271)){
args__5775__auto__.push((arguments[i__5770__auto___58272]));

var G__58273 = (i__5770__auto___58272 + (1));
i__5770__auto___58272 = G__58273;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56986 = conformed_args__55444__auto__;
var map__56986__$1 = cljs.core.__destructure_map(map__56986);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq56975){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56975));
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
var len__5769__auto___58274 = arguments.length;
var i__5770__auto___58275 = (0);
while(true){
if((i__5770__auto___58275 < len__5769__auto___58274)){
args__5775__auto__.push((arguments[i__5770__auto___58275]));

var G__58276 = (i__5770__auto___58275 + (1));
i__5770__auto___58275 = G__58276;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56997 = conformed_args__55444__auto__;
var map__56997__$1 = cljs.core.__destructure_map(map__56997);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq56992){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56992));
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
var len__5769__auto___58277 = arguments.length;
var i__5770__auto___58278 = (0);
while(true){
if((i__5770__auto___58278 < len__5769__auto___58277)){
args__5775__auto__.push((arguments[i__5770__auto___58278]));

var G__58279 = (i__5770__auto___58278 + (1));
i__5770__auto___58278 = G__58279;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57003 = conformed_args__55444__auto__;
var map__57003__$1 = cljs.core.__destructure_map(map__57003);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq56998){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56998));
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
var len__5769__auto___58280 = arguments.length;
var i__5770__auto___58281 = (0);
while(true){
if((i__5770__auto___58281 < len__5769__auto___58280)){
args__5775__auto__.push((arguments[i__5770__auto___58281]));

var G__58282 = (i__5770__auto___58281 + (1));
i__5770__auto___58281 = G__58282;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57005 = conformed_args__55444__auto__;
var map__57005__$1 = cljs.core.__destructure_map(map__57005);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq57004){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57004));
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
var len__5769__auto___58283 = arguments.length;
var i__5770__auto___58284 = (0);
while(true){
if((i__5770__auto___58284 < len__5769__auto___58283)){
args__5775__auto__.push((arguments[i__5770__auto___58284]));

var G__58285 = (i__5770__auto___58284 + (1));
i__5770__auto___58284 = G__58285;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57009 = conformed_args__55444__auto__;
var map__57009__$1 = cljs.core.__destructure_map(map__57009);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq57007){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57007));
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
var len__5769__auto___58288 = arguments.length;
var i__5770__auto___58289 = (0);
while(true){
if((i__5770__auto___58289 < len__5769__auto___58288)){
args__5775__auto__.push((arguments[i__5770__auto___58289]));

var G__58290 = (i__5770__auto___58289 + (1));
i__5770__auto___58289 = G__58290;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57014 = conformed_args__55444__auto__;
var map__57014__$1 = cljs.core.__destructure_map(map__57014);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57014__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57014__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57014__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq57013){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57013));
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
var len__5769__auto___58293 = arguments.length;
var i__5770__auto___58294 = (0);
while(true){
if((i__5770__auto___58294 < len__5769__auto___58293)){
args__5775__auto__.push((arguments[i__5770__auto___58294]));

var G__58295 = (i__5770__auto___58294 + (1));
i__5770__auto___58294 = G__58295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57028 = conformed_args__55444__auto__;
var map__57028__$1 = cljs.core.__destructure_map(map__57028);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57028__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57028__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57028__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq57015){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57015));
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
var len__5769__auto___58296 = arguments.length;
var i__5770__auto___58297 = (0);
while(true){
if((i__5770__auto___58297 < len__5769__auto___58296)){
args__5775__auto__.push((arguments[i__5770__auto___58297]));

var G__58298 = (i__5770__auto___58297 + (1));
i__5770__auto___58297 = G__58298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57073 = conformed_args__55444__auto__;
var map__57073__$1 = cljs.core.__destructure_map(map__57073);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq57047){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57047));
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
var len__5769__auto___58299 = arguments.length;
var i__5770__auto___58300 = (0);
while(true){
if((i__5770__auto___58300 < len__5769__auto___58299)){
args__5775__auto__.push((arguments[i__5770__auto___58300]));

var G__58301 = (i__5770__auto___58300 + (1));
i__5770__auto___58300 = G__58301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57090 = conformed_args__55444__auto__;
var map__57090__$1 = cljs.core.__destructure_map(map__57090);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq57089){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57089));
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
var len__5769__auto___58302 = arguments.length;
var i__5770__auto___58303 = (0);
while(true){
if((i__5770__auto___58303 < len__5769__auto___58302)){
args__5775__auto__.push((arguments[i__5770__auto___58303]));

var G__58304 = (i__5770__auto___58303 + (1));
i__5770__auto___58303 = G__58304;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57161 = conformed_args__55444__auto__;
var map__57161__$1 = cljs.core.__destructure_map(map__57161);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq57147){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57147));
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
var len__5769__auto___58306 = arguments.length;
var i__5770__auto___58307 = (0);
while(true){
if((i__5770__auto___58307 < len__5769__auto___58306)){
args__5775__auto__.push((arguments[i__5770__auto___58307]));

var G__58308 = (i__5770__auto___58307 + (1));
i__5770__auto___58307 = G__58308;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57163 = conformed_args__55444__auto__;
var map__57163__$1 = cljs.core.__destructure_map(map__57163);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq57162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57162));
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
var len__5769__auto___58309 = arguments.length;
var i__5770__auto___58310 = (0);
while(true){
if((i__5770__auto___58310 < len__5769__auto___58309)){
args__5775__auto__.push((arguments[i__5770__auto___58310]));

var G__58311 = (i__5770__auto___58310 + (1));
i__5770__auto___58310 = G__58311;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57165 = conformed_args__55444__auto__;
var map__57165__$1 = cljs.core.__destructure_map(map__57165);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq57164){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57164));
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
var len__5769__auto___58312 = arguments.length;
var i__5770__auto___58313 = (0);
while(true){
if((i__5770__auto___58313 < len__5769__auto___58312)){
args__5775__auto__.push((arguments[i__5770__auto___58313]));

var G__58314 = (i__5770__auto___58313 + (1));
i__5770__auto___58313 = G__58314;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57167 = conformed_args__55444__auto__;
var map__57167__$1 = cljs.core.__destructure_map(map__57167);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq57166){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57166));
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
var len__5769__auto___58315 = arguments.length;
var i__5770__auto___58316 = (0);
while(true){
if((i__5770__auto___58316 < len__5769__auto___58315)){
args__5775__auto__.push((arguments[i__5770__auto___58316]));

var G__58317 = (i__5770__auto___58316 + (1));
i__5770__auto___58316 = G__58317;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57169 = conformed_args__55444__auto__;
var map__57169__$1 = cljs.core.__destructure_map(map__57169);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq57168){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57168));
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
var len__5769__auto___58318 = arguments.length;
var i__5770__auto___58319 = (0);
while(true){
if((i__5770__auto___58319 < len__5769__auto___58318)){
args__5775__auto__.push((arguments[i__5770__auto___58319]));

var G__58320 = (i__5770__auto___58319 + (1));
i__5770__auto___58319 = G__58320;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57171 = conformed_args__55444__auto__;
var map__57171__$1 = cljs.core.__destructure_map(map__57171);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq57170){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57170));
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
var len__5769__auto___58321 = arguments.length;
var i__5770__auto___58322 = (0);
while(true){
if((i__5770__auto___58322 < len__5769__auto___58321)){
args__5775__auto__.push((arguments[i__5770__auto___58322]));

var G__58323 = (i__5770__auto___58322 + (1));
i__5770__auto___58322 = G__58323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57173 = conformed_args__55444__auto__;
var map__57173__$1 = cljs.core.__destructure_map(map__57173);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq57172){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57172));
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
var len__5769__auto___58324 = arguments.length;
var i__5770__auto___58325 = (0);
while(true){
if((i__5770__auto___58325 < len__5769__auto___58324)){
args__5775__auto__.push((arguments[i__5770__auto___58325]));

var G__58326 = (i__5770__auto___58325 + (1));
i__5770__auto___58325 = G__58326;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57175 = conformed_args__55444__auto__;
var map__57175__$1 = cljs.core.__destructure_map(map__57175);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq57174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57174));
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
var len__5769__auto___58327 = arguments.length;
var i__5770__auto___58328 = (0);
while(true){
if((i__5770__auto___58328 < len__5769__auto___58327)){
args__5775__auto__.push((arguments[i__5770__auto___58328]));

var G__58329 = (i__5770__auto___58328 + (1));
i__5770__auto___58328 = G__58329;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57177 = conformed_args__55444__auto__;
var map__57177__$1 = cljs.core.__destructure_map(map__57177);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq57176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57176));
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
var len__5769__auto___58330 = arguments.length;
var i__5770__auto___58331 = (0);
while(true){
if((i__5770__auto___58331 < len__5769__auto___58330)){
args__5775__auto__.push((arguments[i__5770__auto___58331]));

var G__58332 = (i__5770__auto___58331 + (1));
i__5770__auto___58331 = G__58332;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57183 = conformed_args__55444__auto__;
var map__57183__$1 = cljs.core.__destructure_map(map__57183);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq57178){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57178));
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
var len__5769__auto___58333 = arguments.length;
var i__5770__auto___58334 = (0);
while(true){
if((i__5770__auto___58334 < len__5769__auto___58333)){
args__5775__auto__.push((arguments[i__5770__auto___58334]));

var G__58335 = (i__5770__auto___58334 + (1));
i__5770__auto___58334 = G__58335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57195 = conformed_args__55444__auto__;
var map__57195__$1 = cljs.core.__destructure_map(map__57195);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq57188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57188));
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
var len__5769__auto___58336 = arguments.length;
var i__5770__auto___58337 = (0);
while(true){
if((i__5770__auto___58337 < len__5769__auto___58336)){
args__5775__auto__.push((arguments[i__5770__auto___58337]));

var G__58338 = (i__5770__auto___58337 + (1));
i__5770__auto___58337 = G__58338;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57211 = conformed_args__55444__auto__;
var map__57211__$1 = cljs.core.__destructure_map(map__57211);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq57204){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57204));
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
var len__5769__auto___58339 = arguments.length;
var i__5770__auto___58340 = (0);
while(true){
if((i__5770__auto___58340 < len__5769__auto___58339)){
args__5775__auto__.push((arguments[i__5770__auto___58340]));

var G__58341 = (i__5770__auto___58340 + (1));
i__5770__auto___58340 = G__58341;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57213 = conformed_args__55444__auto__;
var map__57213__$1 = cljs.core.__destructure_map(map__57213);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq57212){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57212));
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
var len__5769__auto___58342 = arguments.length;
var i__5770__auto___58343 = (0);
while(true){
if((i__5770__auto___58343 < len__5769__auto___58342)){
args__5775__auto__.push((arguments[i__5770__auto___58343]));

var G__58344 = (i__5770__auto___58343 + (1));
i__5770__auto___58343 = G__58344;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57215 = conformed_args__55444__auto__;
var map__57215__$1 = cljs.core.__destructure_map(map__57215);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq57214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57214));
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
var len__5769__auto___58345 = arguments.length;
var i__5770__auto___58346 = (0);
while(true){
if((i__5770__auto___58346 < len__5769__auto___58345)){
args__5775__auto__.push((arguments[i__5770__auto___58346]));

var G__58347 = (i__5770__auto___58346 + (1));
i__5770__auto___58346 = G__58347;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57221 = conformed_args__55444__auto__;
var map__57221__$1 = cljs.core.__destructure_map(map__57221);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq57218){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57218));
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
var len__5769__auto___58348 = arguments.length;
var i__5770__auto___58349 = (0);
while(true){
if((i__5770__auto___58349 < len__5769__auto___58348)){
args__5775__auto__.push((arguments[i__5770__auto___58349]));

var G__58350 = (i__5770__auto___58349 + (1));
i__5770__auto___58349 = G__58350;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57229 = conformed_args__55444__auto__;
var map__57229__$1 = cljs.core.__destructure_map(map__57229);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq57228){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57228));
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
var len__5769__auto___58351 = arguments.length;
var i__5770__auto___58352 = (0);
while(true){
if((i__5770__auto___58352 < len__5769__auto___58351)){
args__5775__auto__.push((arguments[i__5770__auto___58352]));

var G__58353 = (i__5770__auto___58352 + (1));
i__5770__auto___58352 = G__58353;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57237 = conformed_args__55444__auto__;
var map__57237__$1 = cljs.core.__destructure_map(map__57237);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq57233){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57233));
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
var len__5769__auto___58354 = arguments.length;
var i__5770__auto___58355 = (0);
while(true){
if((i__5770__auto___58355 < len__5769__auto___58354)){
args__5775__auto__.push((arguments[i__5770__auto___58355]));

var G__58356 = (i__5770__auto___58355 + (1));
i__5770__auto___58355 = G__58356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57243 = conformed_args__55444__auto__;
var map__57243__$1 = cljs.core.__destructure_map(map__57243);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq57238){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57238));
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
var len__5769__auto___58357 = arguments.length;
var i__5770__auto___58358 = (0);
while(true){
if((i__5770__auto___58358 < len__5769__auto___58357)){
args__5775__auto__.push((arguments[i__5770__auto___58358]));

var G__58359 = (i__5770__auto___58358 + (1));
i__5770__auto___58358 = G__58359;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57248 = conformed_args__55444__auto__;
var map__57248__$1 = cljs.core.__destructure_map(map__57248);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq57247){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57247));
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
var len__5769__auto___58360 = arguments.length;
var i__5770__auto___58361 = (0);
while(true){
if((i__5770__auto___58361 < len__5769__auto___58360)){
args__5775__auto__.push((arguments[i__5770__auto___58361]));

var G__58362 = (i__5770__auto___58361 + (1));
i__5770__auto___58361 = G__58362;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57252 = conformed_args__55444__auto__;
var map__57252__$1 = cljs.core.__destructure_map(map__57252);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57252__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57252__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq57250){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57250));
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
var len__5769__auto___58363 = arguments.length;
var i__5770__auto___58364 = (0);
while(true){
if((i__5770__auto___58364 < len__5769__auto___58363)){
args__5775__auto__.push((arguments[i__5770__auto___58364]));

var G__58365 = (i__5770__auto___58364 + (1));
i__5770__auto___58364 = G__58365;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57255 = conformed_args__55444__auto__;
var map__57255__$1 = cljs.core.__destructure_map(map__57255);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq57254){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57254));
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
var len__5769__auto___58366 = arguments.length;
var i__5770__auto___58367 = (0);
while(true){
if((i__5770__auto___58367 < len__5769__auto___58366)){
args__5775__auto__.push((arguments[i__5770__auto___58367]));

var G__58368 = (i__5770__auto___58367 + (1));
i__5770__auto___58367 = G__58368;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57259 = conformed_args__55444__auto__;
var map__57259__$1 = cljs.core.__destructure_map(map__57259);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq57258){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57258));
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
var len__5769__auto___58369 = arguments.length;
var i__5770__auto___58370 = (0);
while(true){
if((i__5770__auto___58370 < len__5769__auto___58369)){
args__5775__auto__.push((arguments[i__5770__auto___58370]));

var G__58371 = (i__5770__auto___58370 + (1));
i__5770__auto___58370 = G__58371;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57266 = conformed_args__55444__auto__;
var map__57266__$1 = cljs.core.__destructure_map(map__57266);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq57262){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57262));
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
var len__5769__auto___58372 = arguments.length;
var i__5770__auto___58373 = (0);
while(true){
if((i__5770__auto___58373 < len__5769__auto___58372)){
args__5775__auto__.push((arguments[i__5770__auto___58373]));

var G__58374 = (i__5770__auto___58373 + (1));
i__5770__auto___58373 = G__58374;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57270 = conformed_args__55444__auto__;
var map__57270__$1 = cljs.core.__destructure_map(map__57270);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57270__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57270__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57270__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq57267){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57267));
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
var len__5769__auto___58375 = arguments.length;
var i__5770__auto___58376 = (0);
while(true){
if((i__5770__auto___58376 < len__5769__auto___58375)){
args__5775__auto__.push((arguments[i__5770__auto___58376]));

var G__58377 = (i__5770__auto___58376 + (1));
i__5770__auto___58376 = G__58377;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57273 = conformed_args__55444__auto__;
var map__57273__$1 = cljs.core.__destructure_map(map__57273);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq57271){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57271));
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
var len__5769__auto___58378 = arguments.length;
var i__5770__auto___58379 = (0);
while(true){
if((i__5770__auto___58379 < len__5769__auto___58378)){
args__5775__auto__.push((arguments[i__5770__auto___58379]));

var G__58380 = (i__5770__auto___58379 + (1));
i__5770__auto___58379 = G__58380;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57279 = conformed_args__55444__auto__;
var map__57279__$1 = cljs.core.__destructure_map(map__57279);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq57278){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57278));
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
var len__5769__auto___58381 = arguments.length;
var i__5770__auto___58382 = (0);
while(true){
if((i__5770__auto___58382 < len__5769__auto___58381)){
args__5775__auto__.push((arguments[i__5770__auto___58382]));

var G__58383 = (i__5770__auto___58382 + (1));
i__5770__auto___58382 = G__58383;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57285 = conformed_args__55444__auto__;
var map__57285__$1 = cljs.core.__destructure_map(map__57285);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq57281){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57281));
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
var len__5769__auto___58384 = arguments.length;
var i__5770__auto___58385 = (0);
while(true){
if((i__5770__auto___58385 < len__5769__auto___58384)){
args__5775__auto__.push((arguments[i__5770__auto___58385]));

var G__58386 = (i__5770__auto___58385 + (1));
i__5770__auto___58385 = G__58386;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57289 = conformed_args__55444__auto__;
var map__57289__$1 = cljs.core.__destructure_map(map__57289);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq57288){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57288));
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
var len__5769__auto___58387 = arguments.length;
var i__5770__auto___58388 = (0);
while(true){
if((i__5770__auto___58388 < len__5769__auto___58387)){
args__5775__auto__.push((arguments[i__5770__auto___58388]));

var G__58389 = (i__5770__auto___58388 + (1));
i__5770__auto___58388 = G__58389;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57291 = conformed_args__55444__auto__;
var map__57291__$1 = cljs.core.__destructure_map(map__57291);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57291__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57291__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq57290){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57290));
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
var len__5769__auto___58390 = arguments.length;
var i__5770__auto___58391 = (0);
while(true){
if((i__5770__auto___58391 < len__5769__auto___58390)){
args__5775__auto__.push((arguments[i__5770__auto___58391]));

var G__58392 = (i__5770__auto___58391 + (1));
i__5770__auto___58391 = G__58392;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57293 = conformed_args__55444__auto__;
var map__57293__$1 = cljs.core.__destructure_map(map__57293);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq57292){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57292));
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
var len__5769__auto___58393 = arguments.length;
var i__5770__auto___58394 = (0);
while(true){
if((i__5770__auto___58394 < len__5769__auto___58393)){
args__5775__auto__.push((arguments[i__5770__auto___58394]));

var G__58395 = (i__5770__auto___58394 + (1));
i__5770__auto___58394 = G__58395;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57302 = conformed_args__55444__auto__;
var map__57302__$1 = cljs.core.__destructure_map(map__57302);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq57297){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57297));
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
var len__5769__auto___58396 = arguments.length;
var i__5770__auto___58397 = (0);
while(true){
if((i__5770__auto___58397 < len__5769__auto___58396)){
args__5775__auto__.push((arguments[i__5770__auto___58397]));

var G__58398 = (i__5770__auto___58397 + (1));
i__5770__auto___58397 = G__58398;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57310 = conformed_args__55444__auto__;
var map__57310__$1 = cljs.core.__destructure_map(map__57310);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq57305){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57305));
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
var len__5769__auto___58399 = arguments.length;
var i__5770__auto___58400 = (0);
while(true){
if((i__5770__auto___58400 < len__5769__auto___58399)){
args__5775__auto__.push((arguments[i__5770__auto___58400]));

var G__58401 = (i__5770__auto___58400 + (1));
i__5770__auto___58400 = G__58401;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57320 = conformed_args__55444__auto__;
var map__57320__$1 = cljs.core.__destructure_map(map__57320);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq57316){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57316));
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
var len__5769__auto___58403 = arguments.length;
var i__5770__auto___58404 = (0);
while(true){
if((i__5770__auto___58404 < len__5769__auto___58403)){
args__5775__auto__.push((arguments[i__5770__auto___58404]));

var G__58405 = (i__5770__auto___58404 + (1));
i__5770__auto___58404 = G__58405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57325 = conformed_args__55444__auto__;
var map__57325__$1 = cljs.core.__destructure_map(map__57325);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq57323){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57323));
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
var len__5769__auto___58409 = arguments.length;
var i__5770__auto___58410 = (0);
while(true){
if((i__5770__auto___58410 < len__5769__auto___58409)){
args__5775__auto__.push((arguments[i__5770__auto___58410]));

var G__58411 = (i__5770__auto___58410 + (1));
i__5770__auto___58410 = G__58411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57329 = conformed_args__55444__auto__;
var map__57329__$1 = cljs.core.__destructure_map(map__57329);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq57327){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57327));
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
var len__5769__auto___58413 = arguments.length;
var i__5770__auto___58414 = (0);
while(true){
if((i__5770__auto___58414 < len__5769__auto___58413)){
args__5775__auto__.push((arguments[i__5770__auto___58414]));

var G__58415 = (i__5770__auto___58414 + (1));
i__5770__auto___58414 = G__58415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57341 = conformed_args__55444__auto__;
var map__57341__$1 = cljs.core.__destructure_map(map__57341);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq57334){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57334));
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
var len__5769__auto___58416 = arguments.length;
var i__5770__auto___58417 = (0);
while(true){
if((i__5770__auto___58417 < len__5769__auto___58416)){
args__5775__auto__.push((arguments[i__5770__auto___58417]));

var G__58418 = (i__5770__auto___58417 + (1));
i__5770__auto___58417 = G__58418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57347 = conformed_args__55444__auto__;
var map__57347__$1 = cljs.core.__destructure_map(map__57347);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq57345){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57345));
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
var len__5769__auto___58419 = arguments.length;
var i__5770__auto___58420 = (0);
while(true){
if((i__5770__auto___58420 < len__5769__auto___58419)){
args__5775__auto__.push((arguments[i__5770__auto___58420]));

var G__58421 = (i__5770__auto___58420 + (1));
i__5770__auto___58420 = G__58421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57352 = conformed_args__55444__auto__;
var map__57352__$1 = cljs.core.__destructure_map(map__57352);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq57350){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57350));
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
var len__5769__auto___58424 = arguments.length;
var i__5770__auto___58425 = (0);
while(true){
if((i__5770__auto___58425 < len__5769__auto___58424)){
args__5775__auto__.push((arguments[i__5770__auto___58425]));

var G__58426 = (i__5770__auto___58425 + (1));
i__5770__auto___58425 = G__58426;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57367 = conformed_args__55444__auto__;
var map__57367__$1 = cljs.core.__destructure_map(map__57367);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq57366){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57366));
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
var len__5769__auto___58428 = arguments.length;
var i__5770__auto___58429 = (0);
while(true){
if((i__5770__auto___58429 < len__5769__auto___58428)){
args__5775__auto__.push((arguments[i__5770__auto___58429]));

var G__58430 = (i__5770__auto___58429 + (1));
i__5770__auto___58429 = G__58430;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57371 = conformed_args__55444__auto__;
var map__57371__$1 = cljs.core.__destructure_map(map__57371);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq57370){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57370));
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
var len__5769__auto___58432 = arguments.length;
var i__5770__auto___58433 = (0);
while(true){
if((i__5770__auto___58433 < len__5769__auto___58432)){
args__5775__auto__.push((arguments[i__5770__auto___58433]));

var G__58434 = (i__5770__auto___58433 + (1));
i__5770__auto___58433 = G__58434;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57379 = conformed_args__55444__auto__;
var map__57379__$1 = cljs.core.__destructure_map(map__57379);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq57374){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57374));
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
var len__5769__auto___58435 = arguments.length;
var i__5770__auto___58436 = (0);
while(true){
if((i__5770__auto___58436 < len__5769__auto___58435)){
args__5775__auto__.push((arguments[i__5770__auto___58436]));

var G__58437 = (i__5770__auto___58436 + (1));
i__5770__auto___58436 = G__58437;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57391 = conformed_args__55444__auto__;
var map__57391__$1 = cljs.core.__destructure_map(map__57391);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq57387){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57387));
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
var len__5769__auto___58439 = arguments.length;
var i__5770__auto___58440 = (0);
while(true){
if((i__5770__auto___58440 < len__5769__auto___58439)){
args__5775__auto__.push((arguments[i__5770__auto___58440]));

var G__58441 = (i__5770__auto___58440 + (1));
i__5770__auto___58440 = G__58441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57399 = conformed_args__55444__auto__;
var map__57399__$1 = cljs.core.__destructure_map(map__57399);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57399__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57399__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57399__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq57392){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57392));
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
var len__5769__auto___58442 = arguments.length;
var i__5770__auto___58443 = (0);
while(true){
if((i__5770__auto___58443 < len__5769__auto___58442)){
args__5775__auto__.push((arguments[i__5770__auto___58443]));

var G__58444 = (i__5770__auto___58443 + (1));
i__5770__auto___58443 = G__58444;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57414 = conformed_args__55444__auto__;
var map__57414__$1 = cljs.core.__destructure_map(map__57414);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq57404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57404));
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
var len__5769__auto___58445 = arguments.length;
var i__5770__auto___58446 = (0);
while(true){
if((i__5770__auto___58446 < len__5769__auto___58445)){
args__5775__auto__.push((arguments[i__5770__auto___58446]));

var G__58447 = (i__5770__auto___58446 + (1));
i__5770__auto___58446 = G__58447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57422 = conformed_args__55444__auto__;
var map__57422__$1 = cljs.core.__destructure_map(map__57422);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq57421){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57421));
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
var len__5769__auto___58448 = arguments.length;
var i__5770__auto___58449 = (0);
while(true){
if((i__5770__auto___58449 < len__5769__auto___58448)){
args__5775__auto__.push((arguments[i__5770__auto___58449]));

var G__58450 = (i__5770__auto___58449 + (1));
i__5770__auto___58449 = G__58450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57432 = conformed_args__55444__auto__;
var map__57432__$1 = cljs.core.__destructure_map(map__57432);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq57426){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57426));
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
var len__5769__auto___58451 = arguments.length;
var i__5770__auto___58452 = (0);
while(true){
if((i__5770__auto___58452 < len__5769__auto___58451)){
args__5775__auto__.push((arguments[i__5770__auto___58452]));

var G__58453 = (i__5770__auto___58452 + (1));
i__5770__auto___58452 = G__58453;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57436 = conformed_args__55444__auto__;
var map__57436__$1 = cljs.core.__destructure_map(map__57436);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq57433){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57433));
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
var len__5769__auto___58454 = arguments.length;
var i__5770__auto___58455 = (0);
while(true){
if((i__5770__auto___58455 < len__5769__auto___58454)){
args__5775__auto__.push((arguments[i__5770__auto___58455]));

var G__58456 = (i__5770__auto___58455 + (1));
i__5770__auto___58455 = G__58456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57444 = conformed_args__55444__auto__;
var map__57444__$1 = cljs.core.__destructure_map(map__57444);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq57443){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57443));
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
var len__5769__auto___58457 = arguments.length;
var i__5770__auto___58458 = (0);
while(true){
if((i__5770__auto___58458 < len__5769__auto___58457)){
args__5775__auto__.push((arguments[i__5770__auto___58458]));

var G__58459 = (i__5770__auto___58458 + (1));
i__5770__auto___58458 = G__58459;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57451 = conformed_args__55444__auto__;
var map__57451__$1 = cljs.core.__destructure_map(map__57451);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq57447){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57447));
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
var len__5769__auto___58460 = arguments.length;
var i__5770__auto___58461 = (0);
while(true){
if((i__5770__auto___58461 < len__5769__auto___58460)){
args__5775__auto__.push((arguments[i__5770__auto___58461]));

var G__58462 = (i__5770__auto___58461 + (1));
i__5770__auto___58461 = G__58462;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57456 = conformed_args__55444__auto__;
var map__57456__$1 = cljs.core.__destructure_map(map__57456);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq57454){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57454));
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
var len__5769__auto___58463 = arguments.length;
var i__5770__auto___58464 = (0);
while(true){
if((i__5770__auto___58464 < len__5769__auto___58463)){
args__5775__auto__.push((arguments[i__5770__auto___58464]));

var G__58465 = (i__5770__auto___58464 + (1));
i__5770__auto___58464 = G__58465;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57464 = conformed_args__55444__auto__;
var map__57464__$1 = cljs.core.__destructure_map(map__57464);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq57459){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57459));
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
var len__5769__auto___58466 = arguments.length;
var i__5770__auto___58467 = (0);
while(true){
if((i__5770__auto___58467 < len__5769__auto___58466)){
args__5775__auto__.push((arguments[i__5770__auto___58467]));

var G__58468 = (i__5770__auto___58467 + (1));
i__5770__auto___58467 = G__58468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57469 = conformed_args__55444__auto__;
var map__57469__$1 = cljs.core.__destructure_map(map__57469);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq57467){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57467));
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
var len__5769__auto___58469 = arguments.length;
var i__5770__auto___58470 = (0);
while(true){
if((i__5770__auto___58470 < len__5769__auto___58469)){
args__5775__auto__.push((arguments[i__5770__auto___58470]));

var G__58471 = (i__5770__auto___58470 + (1));
i__5770__auto___58470 = G__58471;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57476 = conformed_args__55444__auto__;
var map__57476__$1 = cljs.core.__destructure_map(map__57476);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq57470){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57470));
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
var len__5769__auto___58472 = arguments.length;
var i__5770__auto___58473 = (0);
while(true){
if((i__5770__auto___58473 < len__5769__auto___58472)){
args__5775__auto__.push((arguments[i__5770__auto___58473]));

var G__58474 = (i__5770__auto___58473 + (1));
i__5770__auto___58473 = G__58474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57495 = conformed_args__55444__auto__;
var map__57495__$1 = cljs.core.__destructure_map(map__57495);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq57487){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57487));
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
var len__5769__auto___58475 = arguments.length;
var i__5770__auto___58476 = (0);
while(true){
if((i__5770__auto___58476 < len__5769__auto___58475)){
args__5775__auto__.push((arguments[i__5770__auto___58476]));

var G__58477 = (i__5770__auto___58476 + (1));
i__5770__auto___58476 = G__58477;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57507 = conformed_args__55444__auto__;
var map__57507__$1 = cljs.core.__destructure_map(map__57507);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq57501){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57501));
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
var len__5769__auto___58478 = arguments.length;
var i__5770__auto___58479 = (0);
while(true){
if((i__5770__auto___58479 < len__5769__auto___58478)){
args__5775__auto__.push((arguments[i__5770__auto___58479]));

var G__58480 = (i__5770__auto___58479 + (1));
i__5770__auto___58479 = G__58480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57515 = conformed_args__55444__auto__;
var map__57515__$1 = cljs.core.__destructure_map(map__57515);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq57511){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57511));
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
var len__5769__auto___58481 = arguments.length;
var i__5770__auto___58482 = (0);
while(true){
if((i__5770__auto___58482 < len__5769__auto___58481)){
args__5775__auto__.push((arguments[i__5770__auto___58482]));

var G__58483 = (i__5770__auto___58482 + (1));
i__5770__auto___58482 = G__58483;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57530 = conformed_args__55444__auto__;
var map__57530__$1 = cljs.core.__destructure_map(map__57530);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq57522){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57522));
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
var len__5769__auto___58484 = arguments.length;
var i__5770__auto___58485 = (0);
while(true){
if((i__5770__auto___58485 < len__5769__auto___58484)){
args__5775__auto__.push((arguments[i__5770__auto___58485]));

var G__58486 = (i__5770__auto___58485 + (1));
i__5770__auto___58485 = G__58486;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57533 = conformed_args__55444__auto__;
var map__57533__$1 = cljs.core.__destructure_map(map__57533);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57533__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57533__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq57532){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57532));
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
var len__5769__auto___58487 = arguments.length;
var i__5770__auto___58488 = (0);
while(true){
if((i__5770__auto___58488 < len__5769__auto___58487)){
args__5775__auto__.push((arguments[i__5770__auto___58488]));

var G__58489 = (i__5770__auto___58488 + (1));
i__5770__auto___58488 = G__58489;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57538 = conformed_args__55444__auto__;
var map__57538__$1 = cljs.core.__destructure_map(map__57538);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq57536){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57536));
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
var len__5769__auto___58490 = arguments.length;
var i__5770__auto___58491 = (0);
while(true){
if((i__5770__auto___58491 < len__5769__auto___58490)){
args__5775__auto__.push((arguments[i__5770__auto___58491]));

var G__58492 = (i__5770__auto___58491 + (1));
i__5770__auto___58491 = G__58492;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57559 = conformed_args__55444__auto__;
var map__57559__$1 = cljs.core.__destructure_map(map__57559);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq57546){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57546));
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
var len__5769__auto___58493 = arguments.length;
var i__5770__auto___58494 = (0);
while(true){
if((i__5770__auto___58494 < len__5769__auto___58493)){
args__5775__auto__.push((arguments[i__5770__auto___58494]));

var G__58495 = (i__5770__auto___58494 + (1));
i__5770__auto___58494 = G__58495;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57564 = conformed_args__55444__auto__;
var map__57564__$1 = cljs.core.__destructure_map(map__57564);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq57560){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57560));
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
var len__5769__auto___58496 = arguments.length;
var i__5770__auto___58497 = (0);
while(true){
if((i__5770__auto___58497 < len__5769__auto___58496)){
args__5775__auto__.push((arguments[i__5770__auto___58497]));

var G__58498 = (i__5770__auto___58497 + (1));
i__5770__auto___58497 = G__58498;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57569 = conformed_args__55444__auto__;
var map__57569__$1 = cljs.core.__destructure_map(map__57569);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq57567){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57567));
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
var len__5769__auto___58499 = arguments.length;
var i__5770__auto___58500 = (0);
while(true){
if((i__5770__auto___58500 < len__5769__auto___58499)){
args__5775__auto__.push((arguments[i__5770__auto___58500]));

var G__58501 = (i__5770__auto___58500 + (1));
i__5770__auto___58500 = G__58501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57573 = conformed_args__55444__auto__;
var map__57573__$1 = cljs.core.__destructure_map(map__57573);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq57571){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57571));
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
var len__5769__auto___58502 = arguments.length;
var i__5770__auto___58503 = (0);
while(true){
if((i__5770__auto___58503 < len__5769__auto___58502)){
args__5775__auto__.push((arguments[i__5770__auto___58503]));

var G__58504 = (i__5770__auto___58503 + (1));
i__5770__auto___58503 = G__58504;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57577 = conformed_args__55444__auto__;
var map__57577__$1 = cljs.core.__destructure_map(map__57577);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq57575){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57575));
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
var len__5769__auto___58505 = arguments.length;
var i__5770__auto___58506 = (0);
while(true){
if((i__5770__auto___58506 < len__5769__auto___58505)){
args__5775__auto__.push((arguments[i__5770__auto___58506]));

var G__58507 = (i__5770__auto___58506 + (1));
i__5770__auto___58506 = G__58507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57586 = conformed_args__55444__auto__;
var map__57586__$1 = cljs.core.__destructure_map(map__57586);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq57583){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57583));
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
var len__5769__auto___58508 = arguments.length;
var i__5770__auto___58509 = (0);
while(true){
if((i__5770__auto___58509 < len__5769__auto___58508)){
args__5775__auto__.push((arguments[i__5770__auto___58509]));

var G__58510 = (i__5770__auto___58509 + (1));
i__5770__auto___58509 = G__58510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57596 = conformed_args__55444__auto__;
var map__57596__$1 = cljs.core.__destructure_map(map__57596);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq57593){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57593));
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
var len__5769__auto___58511 = arguments.length;
var i__5770__auto___58512 = (0);
while(true){
if((i__5770__auto___58512 < len__5769__auto___58511)){
args__5775__auto__.push((arguments[i__5770__auto___58512]));

var G__58513 = (i__5770__auto___58512 + (1));
i__5770__auto___58512 = G__58513;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57604 = conformed_args__55444__auto__;
var map__57604__$1 = cljs.core.__destructure_map(map__57604);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq57598){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57598));
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
var len__5769__auto___58514 = arguments.length;
var i__5770__auto___58515 = (0);
while(true){
if((i__5770__auto___58515 < len__5769__auto___58514)){
args__5775__auto__.push((arguments[i__5770__auto___58515]));

var G__58516 = (i__5770__auto___58515 + (1));
i__5770__auto___58515 = G__58516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57615 = conformed_args__55444__auto__;
var map__57615__$1 = cljs.core.__destructure_map(map__57615);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq57607){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57607));
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
var len__5769__auto___58517 = arguments.length;
var i__5770__auto___58518 = (0);
while(true){
if((i__5770__auto___58518 < len__5769__auto___58517)){
args__5775__auto__.push((arguments[i__5770__auto___58518]));

var G__58519 = (i__5770__auto___58518 + (1));
i__5770__auto___58518 = G__58519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57618 = conformed_args__55444__auto__;
var map__57618__$1 = cljs.core.__destructure_map(map__57618);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq57617){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57617));
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
var len__5769__auto___58520 = arguments.length;
var i__5770__auto___58521 = (0);
while(true){
if((i__5770__auto___58521 < len__5769__auto___58520)){
args__5775__auto__.push((arguments[i__5770__auto___58521]));

var G__58522 = (i__5770__auto___58521 + (1));
i__5770__auto___58521 = G__58522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57624 = conformed_args__55444__auto__;
var map__57624__$1 = cljs.core.__destructure_map(map__57624);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq57619){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57619));
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
var len__5769__auto___58523 = arguments.length;
var i__5770__auto___58524 = (0);
while(true){
if((i__5770__auto___58524 < len__5769__auto___58523)){
args__5775__auto__.push((arguments[i__5770__auto___58524]));

var G__58525 = (i__5770__auto___58524 + (1));
i__5770__auto___58524 = G__58525;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57630 = conformed_args__55444__auto__;
var map__57630__$1 = cljs.core.__destructure_map(map__57630);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq57629){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57629));
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
var len__5769__auto___58526 = arguments.length;
var i__5770__auto___58527 = (0);
while(true){
if((i__5770__auto___58527 < len__5769__auto___58526)){
args__5775__auto__.push((arguments[i__5770__auto___58527]));

var G__58528 = (i__5770__auto___58527 + (1));
i__5770__auto___58527 = G__58528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57638 = conformed_args__55444__auto__;
var map__57638__$1 = cljs.core.__destructure_map(map__57638);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq57633){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57633));
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
var len__5769__auto___58529 = arguments.length;
var i__5770__auto___58530 = (0);
while(true){
if((i__5770__auto___58530 < len__5769__auto___58529)){
args__5775__auto__.push((arguments[i__5770__auto___58530]));

var G__58531 = (i__5770__auto___58530 + (1));
i__5770__auto___58530 = G__58531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57643 = conformed_args__55444__auto__;
var map__57643__$1 = cljs.core.__destructure_map(map__57643);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq57641){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57641));
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
var len__5769__auto___58532 = arguments.length;
var i__5770__auto___58533 = (0);
while(true){
if((i__5770__auto___58533 < len__5769__auto___58532)){
args__5775__auto__.push((arguments[i__5770__auto___58533]));

var G__58534 = (i__5770__auto___58533 + (1));
i__5770__auto___58533 = G__58534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57650 = conformed_args__55444__auto__;
var map__57650__$1 = cljs.core.__destructure_map(map__57650);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq57647){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57647));
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
var len__5769__auto___58535 = arguments.length;
var i__5770__auto___58536 = (0);
while(true){
if((i__5770__auto___58536 < len__5769__auto___58535)){
args__5775__auto__.push((arguments[i__5770__auto___58536]));

var G__58537 = (i__5770__auto___58536 + (1));
i__5770__auto___58536 = G__58537;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57658 = conformed_args__55444__auto__;
var map__57658__$1 = cljs.core.__destructure_map(map__57658);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq57653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57653));
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
var len__5769__auto___58538 = arguments.length;
var i__5770__auto___58539 = (0);
while(true){
if((i__5770__auto___58539 < len__5769__auto___58538)){
args__5775__auto__.push((arguments[i__5770__auto___58539]));

var G__58540 = (i__5770__auto___58539 + (1));
i__5770__auto___58539 = G__58540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57665 = conformed_args__55444__auto__;
var map__57665__$1 = cljs.core.__destructure_map(map__57665);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq57660){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57660));
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
var len__5769__auto___58541 = arguments.length;
var i__5770__auto___58542 = (0);
while(true){
if((i__5770__auto___58542 < len__5769__auto___58541)){
args__5775__auto__.push((arguments[i__5770__auto___58542]));

var G__58543 = (i__5770__auto___58542 + (1));
i__5770__auto___58542 = G__58543;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57671 = conformed_args__55444__auto__;
var map__57671__$1 = cljs.core.__destructure_map(map__57671);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq57669){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57669));
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
var len__5769__auto___58544 = arguments.length;
var i__5770__auto___58545 = (0);
while(true){
if((i__5770__auto___58545 < len__5769__auto___58544)){
args__5775__auto__.push((arguments[i__5770__auto___58545]));

var G__58546 = (i__5770__auto___58545 + (1));
i__5770__auto___58545 = G__58546;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57680 = conformed_args__55444__auto__;
var map__57680__$1 = cljs.core.__destructure_map(map__57680);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq57677){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57677));
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
var len__5769__auto___58547 = arguments.length;
var i__5770__auto___58548 = (0);
while(true){
if((i__5770__auto___58548 < len__5769__auto___58547)){
args__5775__auto__.push((arguments[i__5770__auto___58548]));

var G__58549 = (i__5770__auto___58548 + (1));
i__5770__auto___58548 = G__58549;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57697 = conformed_args__55444__auto__;
var map__57697__$1 = cljs.core.__destructure_map(map__57697);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq57692){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57692));
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
var len__5769__auto___58550 = arguments.length;
var i__5770__auto___58551 = (0);
while(true){
if((i__5770__auto___58551 < len__5769__auto___58550)){
args__5775__auto__.push((arguments[i__5770__auto___58551]));

var G__58552 = (i__5770__auto___58551 + (1));
i__5770__auto___58551 = G__58552;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57708 = conformed_args__55444__auto__;
var map__57708__$1 = cljs.core.__destructure_map(map__57708);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq57706){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57706));
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
var len__5769__auto___58553 = arguments.length;
var i__5770__auto___58554 = (0);
while(true){
if((i__5770__auto___58554 < len__5769__auto___58553)){
args__5775__auto__.push((arguments[i__5770__auto___58554]));

var G__58555 = (i__5770__auto___58554 + (1));
i__5770__auto___58554 = G__58555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57719 = conformed_args__55444__auto__;
var map__57719__$1 = cljs.core.__destructure_map(map__57719);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq57716){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57716));
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
var len__5769__auto___58556 = arguments.length;
var i__5770__auto___58557 = (0);
while(true){
if((i__5770__auto___58557 < len__5769__auto___58556)){
args__5775__auto__.push((arguments[i__5770__auto___58557]));

var G__58558 = (i__5770__auto___58557 + (1));
i__5770__auto___58557 = G__58558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57729 = conformed_args__55444__auto__;
var map__57729__$1 = cljs.core.__destructure_map(map__57729);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq57723){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57723));
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
var len__5769__auto___58559 = arguments.length;
var i__5770__auto___58560 = (0);
while(true){
if((i__5770__auto___58560 < len__5769__auto___58559)){
args__5775__auto__.push((arguments[i__5770__auto___58560]));

var G__58561 = (i__5770__auto___58560 + (1));
i__5770__auto___58560 = G__58561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57746 = conformed_args__55444__auto__;
var map__57746__$1 = cljs.core.__destructure_map(map__57746);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq57735){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57735));
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
var len__5769__auto___58563 = arguments.length;
var i__5770__auto___58564 = (0);
while(true){
if((i__5770__auto___58564 < len__5769__auto___58563)){
args__5775__auto__.push((arguments[i__5770__auto___58564]));

var G__58565 = (i__5770__auto___58564 + (1));
i__5770__auto___58564 = G__58565;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57758 = conformed_args__55444__auto__;
var map__57758__$1 = cljs.core.__destructure_map(map__57758);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq57757){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57757));
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
var len__5769__auto___58566 = arguments.length;
var i__5770__auto___58567 = (0);
while(true){
if((i__5770__auto___58567 < len__5769__auto___58566)){
args__5775__auto__.push((arguments[i__5770__auto___58567]));

var G__58568 = (i__5770__auto___58567 + (1));
i__5770__auto___58567 = G__58568;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57762 = conformed_args__55444__auto__;
var map__57762__$1 = cljs.core.__destructure_map(map__57762);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq57761){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57761));
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
var len__5769__auto___58569 = arguments.length;
var i__5770__auto___58570 = (0);
while(true){
if((i__5770__auto___58570 < len__5769__auto___58569)){
args__5775__auto__.push((arguments[i__5770__auto___58570]));

var G__58571 = (i__5770__auto___58570 + (1));
i__5770__auto___58570 = G__58571;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57772 = conformed_args__55444__auto__;
var map__57772__$1 = cljs.core.__destructure_map(map__57772);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq57767){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57767));
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
var len__5769__auto___58572 = arguments.length;
var i__5770__auto___58573 = (0);
while(true){
if((i__5770__auto___58573 < len__5769__auto___58572)){
args__5775__auto__.push((arguments[i__5770__auto___58573]));

var G__58574 = (i__5770__auto___58573 + (1));
i__5770__auto___58573 = G__58574;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57781 = conformed_args__55444__auto__;
var map__57781__$1 = cljs.core.__destructure_map(map__57781);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq57775){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57775));
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
var len__5769__auto___58576 = arguments.length;
var i__5770__auto___58577 = (0);
while(true){
if((i__5770__auto___58577 < len__5769__auto___58576)){
args__5775__auto__.push((arguments[i__5770__auto___58577]));

var G__58578 = (i__5770__auto___58577 + (1));
i__5770__auto___58577 = G__58578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57789 = conformed_args__55444__auto__;
var map__57789__$1 = cljs.core.__destructure_map(map__57789);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq57786){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57786));
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
var len__5769__auto___58579 = arguments.length;
var i__5770__auto___58580 = (0);
while(true){
if((i__5770__auto___58580 < len__5769__auto___58579)){
args__5775__auto__.push((arguments[i__5770__auto___58580]));

var G__58581 = (i__5770__auto___58580 + (1));
i__5770__auto___58580 = G__58581;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57808 = conformed_args__55444__auto__;
var map__57808__$1 = cljs.core.__destructure_map(map__57808);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq57797){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57797));
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
var len__5769__auto___58582 = arguments.length;
var i__5770__auto___58583 = (0);
while(true){
if((i__5770__auto___58583 < len__5769__auto___58582)){
args__5775__auto__.push((arguments[i__5770__auto___58583]));

var G__58584 = (i__5770__auto___58583 + (1));
i__5770__auto___58583 = G__58584;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57821 = conformed_args__55444__auto__;
var map__57821__$1 = cljs.core.__destructure_map(map__57821);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq57814){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57814));
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
var len__5769__auto___58585 = arguments.length;
var i__5770__auto___58586 = (0);
while(true){
if((i__5770__auto___58586 < len__5769__auto___58585)){
args__5775__auto__.push((arguments[i__5770__auto___58586]));

var G__58587 = (i__5770__auto___58586 + (1));
i__5770__auto___58586 = G__58587;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57833 = conformed_args__55444__auto__;
var map__57833__$1 = cljs.core.__destructure_map(map__57833);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq57829){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57829));
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
var len__5769__auto___58588 = arguments.length;
var i__5770__auto___58589 = (0);
while(true){
if((i__5770__auto___58589 < len__5769__auto___58588)){
args__5775__auto__.push((arguments[i__5770__auto___58589]));

var G__58590 = (i__5770__auto___58589 + (1));
i__5770__auto___58589 = G__58590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57841 = conformed_args__55444__auto__;
var map__57841__$1 = cljs.core.__destructure_map(map__57841);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq57836){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57836));
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
var len__5769__auto___58591 = arguments.length;
var i__5770__auto___58592 = (0);
while(true){
if((i__5770__auto___58592 < len__5769__auto___58591)){
args__5775__auto__.push((arguments[i__5770__auto___58592]));

var G__58593 = (i__5770__auto___58592 + (1));
i__5770__auto___58592 = G__58593;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57849 = conformed_args__55444__auto__;
var map__57849__$1 = cljs.core.__destructure_map(map__57849);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq57844){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57844));
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
var len__5769__auto___58594 = arguments.length;
var i__5770__auto___58595 = (0);
while(true){
if((i__5770__auto___58595 < len__5769__auto___58594)){
args__5775__auto__.push((arguments[i__5770__auto___58595]));

var G__58596 = (i__5770__auto___58595 + (1));
i__5770__auto___58595 = G__58596;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57858 = conformed_args__55444__auto__;
var map__57858__$1 = cljs.core.__destructure_map(map__57858);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq57853){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57853));
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
var len__5769__auto___58597 = arguments.length;
var i__5770__auto___58598 = (0);
while(true){
if((i__5770__auto___58598 < len__5769__auto___58597)){
args__5775__auto__.push((arguments[i__5770__auto___58598]));

var G__58599 = (i__5770__auto___58598 + (1));
i__5770__auto___58598 = G__58599;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57865 = conformed_args__55444__auto__;
var map__57865__$1 = cljs.core.__destructure_map(map__57865);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq57864){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57864));
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
var len__5769__auto___58600 = arguments.length;
var i__5770__auto___58601 = (0);
while(true){
if((i__5770__auto___58601 < len__5769__auto___58600)){
args__5775__auto__.push((arguments[i__5770__auto___58601]));

var G__58602 = (i__5770__auto___58601 + (1));
i__5770__auto___58601 = G__58602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57867 = conformed_args__55444__auto__;
var map__57867__$1 = cljs.core.__destructure_map(map__57867);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq57866){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57866));
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
var len__5769__auto___58603 = arguments.length;
var i__5770__auto___58604 = (0);
while(true){
if((i__5770__auto___58604 < len__5769__auto___58603)){
args__5775__auto__.push((arguments[i__5770__auto___58604]));

var G__58605 = (i__5770__auto___58604 + (1));
i__5770__auto___58604 = G__58605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57871 = conformed_args__55444__auto__;
var map__57871__$1 = cljs.core.__destructure_map(map__57871);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq57868){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57868));
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
var len__5769__auto___58606 = arguments.length;
var i__5770__auto___58607 = (0);
while(true){
if((i__5770__auto___58607 < len__5769__auto___58606)){
args__5775__auto__.push((arguments[i__5770__auto___58607]));

var G__58608 = (i__5770__auto___58607 + (1));
i__5770__auto___58607 = G__58608;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57878 = conformed_args__55444__auto__;
var map__57878__$1 = cljs.core.__destructure_map(map__57878);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq57874){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57874));
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
var len__5769__auto___58609 = arguments.length;
var i__5770__auto___58610 = (0);
while(true){
if((i__5770__auto___58610 < len__5769__auto___58609)){
args__5775__auto__.push((arguments[i__5770__auto___58610]));

var G__58611 = (i__5770__auto___58610 + (1));
i__5770__auto___58610 = G__58611;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57884 = conformed_args__55444__auto__;
var map__57884__$1 = cljs.core.__destructure_map(map__57884);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq57880){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57880));
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
var len__5769__auto___58612 = arguments.length;
var i__5770__auto___58613 = (0);
while(true){
if((i__5770__auto___58613 < len__5769__auto___58612)){
args__5775__auto__.push((arguments[i__5770__auto___58613]));

var G__58614 = (i__5770__auto___58613 + (1));
i__5770__auto___58613 = G__58614;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57887 = conformed_args__55444__auto__;
var map__57887__$1 = cljs.core.__destructure_map(map__57887);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq57885){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57885));
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
var len__5769__auto___58615 = arguments.length;
var i__5770__auto___58616 = (0);
while(true){
if((i__5770__auto___58616 < len__5769__auto___58615)){
args__5775__auto__.push((arguments[i__5770__auto___58616]));

var G__58617 = (i__5770__auto___58616 + (1));
i__5770__auto___58616 = G__58617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57900 = conformed_args__55444__auto__;
var map__57900__$1 = cljs.core.__destructure_map(map__57900);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq57899){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57899));
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
var len__5769__auto___58618 = arguments.length;
var i__5770__auto___58619 = (0);
while(true){
if((i__5770__auto___58619 < len__5769__auto___58618)){
args__5775__auto__.push((arguments[i__5770__auto___58619]));

var G__58620 = (i__5770__auto___58619 + (1));
i__5770__auto___58619 = G__58620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57906 = conformed_args__55444__auto__;
var map__57906__$1 = cljs.core.__destructure_map(map__57906);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq57901){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57901));
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
var len__5769__auto___58621 = arguments.length;
var i__5770__auto___58622 = (0);
while(true){
if((i__5770__auto___58622 < len__5769__auto___58621)){
args__5775__auto__.push((arguments[i__5770__auto___58622]));

var G__58623 = (i__5770__auto___58622 + (1));
i__5770__auto___58622 = G__58623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57912 = conformed_args__55444__auto__;
var map__57912__$1 = cljs.core.__destructure_map(map__57912);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq57907){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57907));
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
var len__5769__auto___58624 = arguments.length;
var i__5770__auto___58625 = (0);
while(true){
if((i__5770__auto___58625 < len__5769__auto___58624)){
args__5775__auto__.push((arguments[i__5770__auto___58625]));

var G__58626 = (i__5770__auto___58625 + (1));
i__5770__auto___58625 = G__58626;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57914 = conformed_args__55444__auto__;
var map__57914__$1 = cljs.core.__destructure_map(map__57914);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq57913){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57913));
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
var len__5769__auto___58627 = arguments.length;
var i__5770__auto___58628 = (0);
while(true){
if((i__5770__auto___58628 < len__5769__auto___58627)){
args__5775__auto__.push((arguments[i__5770__auto___58628]));

var G__58629 = (i__5770__auto___58628 + (1));
i__5770__auto___58628 = G__58629;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57920 = conformed_args__55444__auto__;
var map__57920__$1 = cljs.core.__destructure_map(map__57920);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq57919){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57919));
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
var len__5769__auto___58630 = arguments.length;
var i__5770__auto___58631 = (0);
while(true){
if((i__5770__auto___58631 < len__5769__auto___58630)){
args__5775__auto__.push((arguments[i__5770__auto___58631]));

var G__58632 = (i__5770__auto___58631 + (1));
i__5770__auto___58631 = G__58632;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57924 = conformed_args__55444__auto__;
var map__57924__$1 = cljs.core.__destructure_map(map__57924);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq57921){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57921));
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
var len__5769__auto___58633 = arguments.length;
var i__5770__auto___58634 = (0);
while(true){
if((i__5770__auto___58634 < len__5769__auto___58633)){
args__5775__auto__.push((arguments[i__5770__auto___58634]));

var G__58635 = (i__5770__auto___58634 + (1));
i__5770__auto___58634 = G__58635;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57931 = conformed_args__55444__auto__;
var map__57931__$1 = cljs.core.__destructure_map(map__57931);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq57930){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57930));
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
var len__5769__auto___58636 = arguments.length;
var i__5770__auto___58637 = (0);
while(true){
if((i__5770__auto___58637 < len__5769__auto___58636)){
args__5775__auto__.push((arguments[i__5770__auto___58637]));

var G__58638 = (i__5770__auto___58637 + (1));
i__5770__auto___58637 = G__58638;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57935 = conformed_args__55444__auto__;
var map__57935__$1 = cljs.core.__destructure_map(map__57935);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq57932){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57932));
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
var len__5769__auto___58639 = arguments.length;
var i__5770__auto___58640 = (0);
while(true){
if((i__5770__auto___58640 < len__5769__auto___58639)){
args__5775__auto__.push((arguments[i__5770__auto___58640]));

var G__58641 = (i__5770__auto___58640 + (1));
i__5770__auto___58640 = G__58641;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57940 = conformed_args__55444__auto__;
var map__57940__$1 = cljs.core.__destructure_map(map__57940);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57940__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57940__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57940__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq57939){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57939));
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
var len__5769__auto___58642 = arguments.length;
var i__5770__auto___58643 = (0);
while(true){
if((i__5770__auto___58643 < len__5769__auto___58642)){
args__5775__auto__.push((arguments[i__5770__auto___58643]));

var G__58644 = (i__5770__auto___58643 + (1));
i__5770__auto___58643 = G__58644;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57943 = conformed_args__55444__auto__;
var map__57943__$1 = cljs.core.__destructure_map(map__57943);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq57942){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57942));
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
var len__5769__auto___58645 = arguments.length;
var i__5770__auto___58646 = (0);
while(true){
if((i__5770__auto___58646 < len__5769__auto___58645)){
args__5775__auto__.push((arguments[i__5770__auto___58646]));

var G__58647 = (i__5770__auto___58646 + (1));
i__5770__auto___58646 = G__58647;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57952 = conformed_args__55444__auto__;
var map__57952__$1 = cljs.core.__destructure_map(map__57952);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq57948){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57948));
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
var len__5769__auto___58648 = arguments.length;
var i__5770__auto___58649 = (0);
while(true){
if((i__5770__auto___58649 < len__5769__auto___58648)){
args__5775__auto__.push((arguments[i__5770__auto___58649]));

var G__58650 = (i__5770__auto___58649 + (1));
i__5770__auto___58649 = G__58650;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57956 = conformed_args__55444__auto__;
var map__57956__$1 = cljs.core.__destructure_map(map__57956);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq57953){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57953));
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
var len__5769__auto___58651 = arguments.length;
var i__5770__auto___58652 = (0);
while(true){
if((i__5770__auto___58652 < len__5769__auto___58651)){
args__5775__auto__.push((arguments[i__5770__auto___58652]));

var G__58653 = (i__5770__auto___58652 + (1));
i__5770__auto___58652 = G__58653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57961 = conformed_args__55444__auto__;
var map__57961__$1 = cljs.core.__destructure_map(map__57961);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq57960){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57960));
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
var len__5769__auto___58654 = arguments.length;
var i__5770__auto___58655 = (0);
while(true){
if((i__5770__auto___58655 < len__5769__auto___58654)){
args__5775__auto__.push((arguments[i__5770__auto___58655]));

var G__58656 = (i__5770__auto___58655 + (1));
i__5770__auto___58655 = G__58656;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57964 = conformed_args__55444__auto__;
var map__57964__$1 = cljs.core.__destructure_map(map__57964);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq57962){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57962));
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
var len__5769__auto___58657 = arguments.length;
var i__5770__auto___58658 = (0);
while(true){
if((i__5770__auto___58658 < len__5769__auto___58657)){
args__5775__auto__.push((arguments[i__5770__auto___58658]));

var G__58659 = (i__5770__auto___58658 + (1));
i__5770__auto___58658 = G__58659;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57969 = conformed_args__55444__auto__;
var map__57969__$1 = cljs.core.__destructure_map(map__57969);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57969__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57969__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57969__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq57967){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57967));
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
var len__5769__auto___58660 = arguments.length;
var i__5770__auto___58661 = (0);
while(true){
if((i__5770__auto___58661 < len__5769__auto___58660)){
args__5775__auto__.push((arguments[i__5770__auto___58661]));

var G__58662 = (i__5770__auto___58661 + (1));
i__5770__auto___58661 = G__58662;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57974 = conformed_args__55444__auto__;
var map__57974__$1 = cljs.core.__destructure_map(map__57974);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq57970){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57970));
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
var len__5769__auto___58663 = arguments.length;
var i__5770__auto___58664 = (0);
while(true){
if((i__5770__auto___58664 < len__5769__auto___58663)){
args__5775__auto__.push((arguments[i__5770__auto___58664]));

var G__58665 = (i__5770__auto___58664 + (1));
i__5770__auto___58664 = G__58665;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58033 = conformed_args__55444__auto__;
var map__58033__$1 = cljs.core.__destructure_map(map__58033);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq58004){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58004));
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
var len__5769__auto___58666 = arguments.length;
var i__5770__auto___58667 = (0);
while(true){
if((i__5770__auto___58667 < len__5769__auto___58666)){
args__5775__auto__.push((arguments[i__5770__auto___58667]));

var G__58668 = (i__5770__auto___58667 + (1));
i__5770__auto___58667 = G__58668;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58048 = conformed_args__55444__auto__;
var map__58048__$1 = cljs.core.__destructure_map(map__58048);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58048__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58048__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq58046){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58046));
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
var len__5769__auto___58669 = arguments.length;
var i__5770__auto___58670 = (0);
while(true){
if((i__5770__auto___58670 < len__5769__auto___58669)){
args__5775__auto__.push((arguments[i__5770__auto___58670]));

var G__58671 = (i__5770__auto___58670 + (1));
i__5770__auto___58670 = G__58671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58051 = conformed_args__55444__auto__;
var map__58051__$1 = cljs.core.__destructure_map(map__58051);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq58049){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58049));
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
var len__5769__auto___58672 = arguments.length;
var i__5770__auto___58673 = (0);
while(true){
if((i__5770__auto___58673 < len__5769__auto___58672)){
args__5775__auto__.push((arguments[i__5770__auto___58673]));

var G__58674 = (i__5770__auto___58673 + (1));
i__5770__auto___58673 = G__58674;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58053 = conformed_args__55444__auto__;
var map__58053__$1 = cljs.core.__destructure_map(map__58053);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq58052){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58052));
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
var len__5769__auto___58675 = arguments.length;
var i__5770__auto___58676 = (0);
while(true){
if((i__5770__auto___58676 < len__5769__auto___58675)){
args__5775__auto__.push((arguments[i__5770__auto___58676]));

var G__58677 = (i__5770__auto___58676 + (1));
i__5770__auto___58676 = G__58677;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58055 = conformed_args__55444__auto__;
var map__58055__$1 = cljs.core.__destructure_map(map__58055);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq58054){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58054));
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
var len__5769__auto___58678 = arguments.length;
var i__5770__auto___58679 = (0);
while(true){
if((i__5770__auto___58679 < len__5769__auto___58678)){
args__5775__auto__.push((arguments[i__5770__auto___58679]));

var G__58680 = (i__5770__auto___58679 + (1));
i__5770__auto___58679 = G__58680;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58057 = conformed_args__55444__auto__;
var map__58057__$1 = cljs.core.__destructure_map(map__58057);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq58056){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58056));
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
var len__5769__auto___58681 = arguments.length;
var i__5770__auto___58682 = (0);
while(true){
if((i__5770__auto___58682 < len__5769__auto___58681)){
args__5775__auto__.push((arguments[i__5770__auto___58682]));

var G__58683 = (i__5770__auto___58682 + (1));
i__5770__auto___58682 = G__58683;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58059 = conformed_args__55444__auto__;
var map__58059__$1 = cljs.core.__destructure_map(map__58059);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq58058){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58058));
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
var len__5769__auto___58684 = arguments.length;
var i__5770__auto___58685 = (0);
while(true){
if((i__5770__auto___58685 < len__5769__auto___58684)){
args__5775__auto__.push((arguments[i__5770__auto___58685]));

var G__58686 = (i__5770__auto___58685 + (1));
i__5770__auto___58685 = G__58686;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58061 = conformed_args__55444__auto__;
var map__58061__$1 = cljs.core.__destructure_map(map__58061);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq58060){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58060));
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
var len__5769__auto___58687 = arguments.length;
var i__5770__auto___58688 = (0);
while(true){
if((i__5770__auto___58688 < len__5769__auto___58687)){
args__5775__auto__.push((arguments[i__5770__auto___58688]));

var G__58689 = (i__5770__auto___58688 + (1));
i__5770__auto___58688 = G__58689;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58063 = conformed_args__55444__auto__;
var map__58063__$1 = cljs.core.__destructure_map(map__58063);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq58062){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58062));
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
var len__5769__auto___58690 = arguments.length;
var i__5770__auto___58691 = (0);
while(true){
if((i__5770__auto___58691 < len__5769__auto___58690)){
args__5775__auto__.push((arguments[i__5770__auto___58691]));

var G__58692 = (i__5770__auto___58691 + (1));
i__5770__auto___58691 = G__58692;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58065 = conformed_args__55444__auto__;
var map__58065__$1 = cljs.core.__destructure_map(map__58065);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq58064){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58064));
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
var len__5769__auto___58693 = arguments.length;
var i__5770__auto___58694 = (0);
while(true){
if((i__5770__auto___58694 < len__5769__auto___58693)){
args__5775__auto__.push((arguments[i__5770__auto___58694]));

var G__58695 = (i__5770__auto___58694 + (1));
i__5770__auto___58694 = G__58695;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58067 = conformed_args__55444__auto__;
var map__58067__$1 = cljs.core.__destructure_map(map__58067);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq58066){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58066));
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
var len__5769__auto___58696 = arguments.length;
var i__5770__auto___58697 = (0);
while(true){
if((i__5770__auto___58697 < len__5769__auto___58696)){
args__5775__auto__.push((arguments[i__5770__auto___58697]));

var G__58698 = (i__5770__auto___58697 + (1));
i__5770__auto___58697 = G__58698;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58069 = conformed_args__55444__auto__;
var map__58069__$1 = cljs.core.__destructure_map(map__58069);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq58068){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58068));
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
var len__5769__auto___58699 = arguments.length;
var i__5770__auto___58700 = (0);
while(true){
if((i__5770__auto___58700 < len__5769__auto___58699)){
args__5775__auto__.push((arguments[i__5770__auto___58700]));

var G__58701 = (i__5770__auto___58700 + (1));
i__5770__auto___58700 = G__58701;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58071 = conformed_args__55444__auto__;
var map__58071__$1 = cljs.core.__destructure_map(map__58071);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq58070){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58070));
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
var len__5769__auto___58702 = arguments.length;
var i__5770__auto___58703 = (0);
while(true){
if((i__5770__auto___58703 < len__5769__auto___58702)){
args__5775__auto__.push((arguments[i__5770__auto___58703]));

var G__58704 = (i__5770__auto___58703 + (1));
i__5770__auto___58703 = G__58704;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58073 = conformed_args__55444__auto__;
var map__58073__$1 = cljs.core.__destructure_map(map__58073);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq58072){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58072));
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
var len__5769__auto___58705 = arguments.length;
var i__5770__auto___58706 = (0);
while(true){
if((i__5770__auto___58706 < len__5769__auto___58705)){
args__5775__auto__.push((arguments[i__5770__auto___58706]));

var G__58707 = (i__5770__auto___58706 + (1));
i__5770__auto___58706 = G__58707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58075 = conformed_args__55444__auto__;
var map__58075__$1 = cljs.core.__destructure_map(map__58075);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq58074){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58074));
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
var len__5769__auto___58708 = arguments.length;
var i__5770__auto___58709 = (0);
while(true){
if((i__5770__auto___58709 < len__5769__auto___58708)){
args__5775__auto__.push((arguments[i__5770__auto___58709]));

var G__58710 = (i__5770__auto___58709 + (1));
i__5770__auto___58709 = G__58710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58077 = conformed_args__55444__auto__;
var map__58077__$1 = cljs.core.__destructure_map(map__58077);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq58076){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58076));
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
var len__5769__auto___58711 = arguments.length;
var i__5770__auto___58712 = (0);
while(true){
if((i__5770__auto___58712 < len__5769__auto___58711)){
args__5775__auto__.push((arguments[i__5770__auto___58712]));

var G__58713 = (i__5770__auto___58712 + (1));
i__5770__auto___58712 = G__58713;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58079 = conformed_args__55444__auto__;
var map__58079__$1 = cljs.core.__destructure_map(map__58079);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq58078){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58078));
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
var len__5769__auto___58714 = arguments.length;
var i__5770__auto___58715 = (0);
while(true){
if((i__5770__auto___58715 < len__5769__auto___58714)){
args__5775__auto__.push((arguments[i__5770__auto___58715]));

var G__58716 = (i__5770__auto___58715 + (1));
i__5770__auto___58715 = G__58716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58081 = conformed_args__55444__auto__;
var map__58081__$1 = cljs.core.__destructure_map(map__58081);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq58080){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58080));
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
var len__5769__auto___58717 = arguments.length;
var i__5770__auto___58718 = (0);
while(true){
if((i__5770__auto___58718 < len__5769__auto___58717)){
args__5775__auto__.push((arguments[i__5770__auto___58718]));

var G__58719 = (i__5770__auto___58718 + (1));
i__5770__auto___58718 = G__58719;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58083 = conformed_args__55444__auto__;
var map__58083__$1 = cljs.core.__destructure_map(map__58083);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq58082){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58082));
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
var len__5769__auto___58720 = arguments.length;
var i__5770__auto___58721 = (0);
while(true){
if((i__5770__auto___58721 < len__5769__auto___58720)){
args__5775__auto__.push((arguments[i__5770__auto___58721]));

var G__58722 = (i__5770__auto___58721 + (1));
i__5770__auto___58721 = G__58722;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58085 = conformed_args__55444__auto__;
var map__58085__$1 = cljs.core.__destructure_map(map__58085);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq58084){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58084));
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
var len__5769__auto___58723 = arguments.length;
var i__5770__auto___58724 = (0);
while(true){
if((i__5770__auto___58724 < len__5769__auto___58723)){
args__5775__auto__.push((arguments[i__5770__auto___58724]));

var G__58725 = (i__5770__auto___58724 + (1));
i__5770__auto___58724 = G__58725;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58087 = conformed_args__55444__auto__;
var map__58087__$1 = cljs.core.__destructure_map(map__58087);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq58086){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58086));
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
var len__5769__auto___58726 = arguments.length;
var i__5770__auto___58727 = (0);
while(true){
if((i__5770__auto___58727 < len__5769__auto___58726)){
args__5775__auto__.push((arguments[i__5770__auto___58727]));

var G__58728 = (i__5770__auto___58727 + (1));
i__5770__auto___58727 = G__58728;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58089 = conformed_args__55444__auto__;
var map__58089__$1 = cljs.core.__destructure_map(map__58089);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58089__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58089__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58089__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq58088){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58088));
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
var len__5769__auto___58729 = arguments.length;
var i__5770__auto___58730 = (0);
while(true){
if((i__5770__auto___58730 < len__5769__auto___58729)){
args__5775__auto__.push((arguments[i__5770__auto___58730]));

var G__58731 = (i__5770__auto___58730 + (1));
i__5770__auto___58730 = G__58731;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58091 = conformed_args__55444__auto__;
var map__58091__$1 = cljs.core.__destructure_map(map__58091);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq58090){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58090));
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
var len__5769__auto___58732 = arguments.length;
var i__5770__auto___58733 = (0);
while(true){
if((i__5770__auto___58733 < len__5769__auto___58732)){
args__5775__auto__.push((arguments[i__5770__auto___58733]));

var G__58734 = (i__5770__auto___58733 + (1));
i__5770__auto___58733 = G__58734;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58093 = conformed_args__55444__auto__;
var map__58093__$1 = cljs.core.__destructure_map(map__58093);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq58092){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58092));
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
var len__5769__auto___58735 = arguments.length;
var i__5770__auto___58736 = (0);
while(true){
if((i__5770__auto___58736 < len__5769__auto___58735)){
args__5775__auto__.push((arguments[i__5770__auto___58736]));

var G__58737 = (i__5770__auto___58736 + (1));
i__5770__auto___58736 = G__58737;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58095 = conformed_args__55444__auto__;
var map__58095__$1 = cljs.core.__destructure_map(map__58095);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq58094){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58094));
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
var len__5769__auto___58738 = arguments.length;
var i__5770__auto___58739 = (0);
while(true){
if((i__5770__auto___58739 < len__5769__auto___58738)){
args__5775__auto__.push((arguments[i__5770__auto___58739]));

var G__58740 = (i__5770__auto___58739 + (1));
i__5770__auto___58739 = G__58740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58097 = conformed_args__55444__auto__;
var map__58097__$1 = cljs.core.__destructure_map(map__58097);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq58096){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58096));
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
var len__5769__auto___58741 = arguments.length;
var i__5770__auto___58742 = (0);
while(true){
if((i__5770__auto___58742 < len__5769__auto___58741)){
args__5775__auto__.push((arguments[i__5770__auto___58742]));

var G__58743 = (i__5770__auto___58742 + (1));
i__5770__auto___58742 = G__58743;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58099 = conformed_args__55444__auto__;
var map__58099__$1 = cljs.core.__destructure_map(map__58099);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq58098){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58098));
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
var len__5769__auto___58744 = arguments.length;
var i__5770__auto___58745 = (0);
while(true){
if((i__5770__auto___58745 < len__5769__auto___58744)){
args__5775__auto__.push((arguments[i__5770__auto___58745]));

var G__58746 = (i__5770__auto___58745 + (1));
i__5770__auto___58745 = G__58746;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58101 = conformed_args__55444__auto__;
var map__58101__$1 = cljs.core.__destructure_map(map__58101);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq58100){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58100));
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
var len__5769__auto___58747 = arguments.length;
var i__5770__auto___58748 = (0);
while(true){
if((i__5770__auto___58748 < len__5769__auto___58747)){
args__5775__auto__.push((arguments[i__5770__auto___58748]));

var G__58749 = (i__5770__auto___58748 + (1));
i__5770__auto___58748 = G__58749;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58103 = conformed_args__55444__auto__;
var map__58103__$1 = cljs.core.__destructure_map(map__58103);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq58102){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58102));
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
var len__5769__auto___58750 = arguments.length;
var i__5770__auto___58751 = (0);
while(true){
if((i__5770__auto___58751 < len__5769__auto___58750)){
args__5775__auto__.push((arguments[i__5770__auto___58751]));

var G__58752 = (i__5770__auto___58751 + (1));
i__5770__auto___58751 = G__58752;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58105 = conformed_args__55444__auto__;
var map__58105__$1 = cljs.core.__destructure_map(map__58105);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq58104){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58104));
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
var len__5769__auto___58753 = arguments.length;
var i__5770__auto___58754 = (0);
while(true){
if((i__5770__auto___58754 < len__5769__auto___58753)){
args__5775__auto__.push((arguments[i__5770__auto___58754]));

var G__58755 = (i__5770__auto___58754 + (1));
i__5770__auto___58754 = G__58755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58110 = conformed_args__55444__auto__;
var map__58110__$1 = cljs.core.__destructure_map(map__58110);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq58109){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58109));
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
var len__5769__auto___58756 = arguments.length;
var i__5770__auto___58757 = (0);
while(true){
if((i__5770__auto___58757 < len__5769__auto___58756)){
args__5775__auto__.push((arguments[i__5770__auto___58757]));

var G__58758 = (i__5770__auto___58757 + (1));
i__5770__auto___58757 = G__58758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58114 = conformed_args__55444__auto__;
var map__58114__$1 = cljs.core.__destructure_map(map__58114);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq58113){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58113));
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
var len__5769__auto___58759 = arguments.length;
var i__5770__auto___58760 = (0);
while(true){
if((i__5770__auto___58760 < len__5769__auto___58759)){
args__5775__auto__.push((arguments[i__5770__auto___58760]));

var G__58761 = (i__5770__auto___58760 + (1));
i__5770__auto___58760 = G__58761;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58116 = conformed_args__55444__auto__;
var map__58116__$1 = cljs.core.__destructure_map(map__58116);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq58115){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58115));
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
var len__5769__auto___58762 = arguments.length;
var i__5770__auto___58763 = (0);
while(true){
if((i__5770__auto___58763 < len__5769__auto___58762)){
args__5775__auto__.push((arguments[i__5770__auto___58763]));

var G__58764 = (i__5770__auto___58763 + (1));
i__5770__auto___58763 = G__58764;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58118 = conformed_args__55444__auto__;
var map__58118__$1 = cljs.core.__destructure_map(map__58118);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq58117){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58117));
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
var len__5769__auto___58765 = arguments.length;
var i__5770__auto___58766 = (0);
while(true){
if((i__5770__auto___58766 < len__5769__auto___58765)){
args__5775__auto__.push((arguments[i__5770__auto___58766]));

var G__58767 = (i__5770__auto___58766 + (1));
i__5770__auto___58766 = G__58767;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58124 = conformed_args__55444__auto__;
var map__58124__$1 = cljs.core.__destructure_map(map__58124);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq58122){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58122));
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
var len__5769__auto___58768 = arguments.length;
var i__5770__auto___58769 = (0);
while(true){
if((i__5770__auto___58769 < len__5769__auto___58768)){
args__5775__auto__.push((arguments[i__5770__auto___58769]));

var G__58770 = (i__5770__auto___58769 + (1));
i__5770__auto___58769 = G__58770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58137 = conformed_args__55444__auto__;
var map__58137__$1 = cljs.core.__destructure_map(map__58137);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq58130){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58130));
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
var len__5769__auto___58771 = arguments.length;
var i__5770__auto___58772 = (0);
while(true){
if((i__5770__auto___58772 < len__5769__auto___58771)){
args__5775__auto__.push((arguments[i__5770__auto___58772]));

var G__58773 = (i__5770__auto___58772 + (1));
i__5770__auto___58772 = G__58773;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58143 = conformed_args__55444__auto__;
var map__58143__$1 = cljs.core.__destructure_map(map__58143);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq58139){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58139));
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
var len__5769__auto___58774 = arguments.length;
var i__5770__auto___58775 = (0);
while(true){
if((i__5770__auto___58775 < len__5769__auto___58774)){
args__5775__auto__.push((arguments[i__5770__auto___58775]));

var G__58776 = (i__5770__auto___58775 + (1));
i__5770__auto___58775 = G__58776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58148 = conformed_args__55444__auto__;
var map__58148__$1 = cljs.core.__destructure_map(map__58148);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq58145){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58145));
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
var len__5769__auto___58777 = arguments.length;
var i__5770__auto___58778 = (0);
while(true){
if((i__5770__auto___58778 < len__5769__auto___58777)){
args__5775__auto__.push((arguments[i__5770__auto___58778]));

var G__58779 = (i__5770__auto___58778 + (1));
i__5770__auto___58778 = G__58779;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58153 = conformed_args__55444__auto__;
var map__58153__$1 = cljs.core.__destructure_map(map__58153);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq58150){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58150));
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
var len__5769__auto___58780 = arguments.length;
var i__5770__auto___58781 = (0);
while(true){
if((i__5770__auto___58781 < len__5769__auto___58780)){
args__5775__auto__.push((arguments[i__5770__auto___58781]));

var G__58782 = (i__5770__auto___58781 + (1));
i__5770__auto___58781 = G__58782;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58157 = conformed_args__55444__auto__;
var map__58157__$1 = cljs.core.__destructure_map(map__58157);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq58154){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58154));
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
var len__5769__auto___58783 = arguments.length;
var i__5770__auto___58784 = (0);
while(true){
if((i__5770__auto___58784 < len__5769__auto___58783)){
args__5775__auto__.push((arguments[i__5770__auto___58784]));

var G__58785 = (i__5770__auto___58784 + (1));
i__5770__auto___58784 = G__58785;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58160 = conformed_args__55444__auto__;
var map__58160__$1 = cljs.core.__destructure_map(map__58160);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq58158){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58158));
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
var len__5769__auto___58786 = arguments.length;
var i__5770__auto___58787 = (0);
while(true){
if((i__5770__auto___58787 < len__5769__auto___58786)){
args__5775__auto__.push((arguments[i__5770__auto___58787]));

var G__58788 = (i__5770__auto___58787 + (1));
i__5770__auto___58787 = G__58788;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58164 = conformed_args__55444__auto__;
var map__58164__$1 = cljs.core.__destructure_map(map__58164);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq58161){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58161));
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
var len__5769__auto___58789 = arguments.length;
var i__5770__auto___58790 = (0);
while(true){
if((i__5770__auto___58790 < len__5769__auto___58789)){
args__5775__auto__.push((arguments[i__5770__auto___58790]));

var G__58791 = (i__5770__auto___58790 + (1));
i__5770__auto___58790 = G__58791;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58168 = conformed_args__55444__auto__;
var map__58168__$1 = cljs.core.__destructure_map(map__58168);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq58167){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58167));
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
var len__5769__auto___58792 = arguments.length;
var i__5770__auto___58793 = (0);
while(true){
if((i__5770__auto___58793 < len__5769__auto___58792)){
args__5775__auto__.push((arguments[i__5770__auto___58793]));

var G__58794 = (i__5770__auto___58793 + (1));
i__5770__auto___58793 = G__58794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58172 = conformed_args__55444__auto__;
var map__58172__$1 = cljs.core.__destructure_map(map__58172);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq58171){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58171));
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
var len__5769__auto___58795 = arguments.length;
var i__5770__auto___58796 = (0);
while(true){
if((i__5770__auto___58796 < len__5769__auto___58795)){
args__5775__auto__.push((arguments[i__5770__auto___58796]));

var G__58797 = (i__5770__auto___58796 + (1));
i__5770__auto___58796 = G__58797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58176 = conformed_args__55444__auto__;
var map__58176__$1 = cljs.core.__destructure_map(map__58176);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq58174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58174));
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
var len__5769__auto___58798 = arguments.length;
var i__5770__auto___58799 = (0);
while(true){
if((i__5770__auto___58799 < len__5769__auto___58798)){
args__5775__auto__.push((arguments[i__5770__auto___58799]));

var G__58800 = (i__5770__auto___58799 + (1));
i__5770__auto___58799 = G__58800;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58178 = conformed_args__55444__auto__;
var map__58178__$1 = cljs.core.__destructure_map(map__58178);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq58177){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58177));
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
var len__5769__auto___58801 = arguments.length;
var i__5770__auto___58802 = (0);
while(true){
if((i__5770__auto___58802 < len__5769__auto___58801)){
args__5775__auto__.push((arguments[i__5770__auto___58802]));

var G__58803 = (i__5770__auto___58802 + (1));
i__5770__auto___58802 = G__58803;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58180 = conformed_args__55444__auto__;
var map__58180__$1 = cljs.core.__destructure_map(map__58180);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq58179){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58179));
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
var len__5769__auto___58804 = arguments.length;
var i__5770__auto___58805 = (0);
while(true){
if((i__5770__auto___58805 < len__5769__auto___58804)){
args__5775__auto__.push((arguments[i__5770__auto___58805]));

var G__58806 = (i__5770__auto___58805 + (1));
i__5770__auto___58805 = G__58806;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58182 = conformed_args__55444__auto__;
var map__58182__$1 = cljs.core.__destructure_map(map__58182);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq58181){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58181));
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
var len__5769__auto___58807 = arguments.length;
var i__5770__auto___58808 = (0);
while(true){
if((i__5770__auto___58808 < len__5769__auto___58807)){
args__5775__auto__.push((arguments[i__5770__auto___58808]));

var G__58809 = (i__5770__auto___58808 + (1));
i__5770__auto___58808 = G__58809;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58185 = conformed_args__55444__auto__;
var map__58185__$1 = cljs.core.__destructure_map(map__58185);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq58184){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58184));
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
var len__5769__auto___58810 = arguments.length;
var i__5770__auto___58811 = (0);
while(true){
if((i__5770__auto___58811 < len__5769__auto___58810)){
args__5775__auto__.push((arguments[i__5770__auto___58811]));

var G__58812 = (i__5770__auto___58811 + (1));
i__5770__auto___58811 = G__58812;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58187 = conformed_args__55444__auto__;
var map__58187__$1 = cljs.core.__destructure_map(map__58187);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq58186){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58186));
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
var len__5769__auto___58813 = arguments.length;
var i__5770__auto___58814 = (0);
while(true){
if((i__5770__auto___58814 < len__5769__auto___58813)){
args__5775__auto__.push((arguments[i__5770__auto___58814]));

var G__58815 = (i__5770__auto___58814 + (1));
i__5770__auto___58814 = G__58815;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58190 = conformed_args__55444__auto__;
var map__58190__$1 = cljs.core.__destructure_map(map__58190);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq58188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58188));
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
var len__5769__auto___58816 = arguments.length;
var i__5770__auto___58817 = (0);
while(true){
if((i__5770__auto___58817 < len__5769__auto___58816)){
args__5775__auto__.push((arguments[i__5770__auto___58817]));

var G__58818 = (i__5770__auto___58817 + (1));
i__5770__auto___58817 = G__58818;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58192 = conformed_args__55444__auto__;
var map__58192__$1 = cljs.core.__destructure_map(map__58192);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq58191){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58191));
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
var len__5769__auto___58819 = arguments.length;
var i__5770__auto___58820 = (0);
while(true){
if((i__5770__auto___58820 < len__5769__auto___58819)){
args__5775__auto__.push((arguments[i__5770__auto___58820]));

var G__58821 = (i__5770__auto___58820 + (1));
i__5770__auto___58820 = G__58821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58195 = conformed_args__55444__auto__;
var map__58195__$1 = cljs.core.__destructure_map(map__58195);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq58193){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58193));
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
var len__5769__auto___58822 = arguments.length;
var i__5770__auto___58823 = (0);
while(true){
if((i__5770__auto___58823 < len__5769__auto___58822)){
args__5775__auto__.push((arguments[i__5770__auto___58823]));

var G__58824 = (i__5770__auto___58823 + (1));
i__5770__auto___58823 = G__58824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58198 = conformed_args__55444__auto__;
var map__58198__$1 = cljs.core.__destructure_map(map__58198);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq58196){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58196));
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
var len__5769__auto___58825 = arguments.length;
var i__5770__auto___58826 = (0);
while(true){
if((i__5770__auto___58826 < len__5769__auto___58825)){
args__5775__auto__.push((arguments[i__5770__auto___58826]));

var G__58827 = (i__5770__auto___58826 + (1));
i__5770__auto___58826 = G__58827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58200 = conformed_args__55444__auto__;
var map__58200__$1 = cljs.core.__destructure_map(map__58200);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq58199){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58199));
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
var len__5769__auto___58828 = arguments.length;
var i__5770__auto___58829 = (0);
while(true){
if((i__5770__auto___58829 < len__5769__auto___58828)){
args__5775__auto__.push((arguments[i__5770__auto___58829]));

var G__58830 = (i__5770__auto___58829 + (1));
i__5770__auto___58829 = G__58830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58202 = conformed_args__55444__auto__;
var map__58202__$1 = cljs.core.__destructure_map(map__58202);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq58201){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58201));
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
var len__5769__auto___58831 = arguments.length;
var i__5770__auto___58832 = (0);
while(true){
if((i__5770__auto___58832 < len__5769__auto___58831)){
args__5775__auto__.push((arguments[i__5770__auto___58832]));

var G__58833 = (i__5770__auto___58832 + (1));
i__5770__auto___58832 = G__58833;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__55444__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58204 = conformed_args__55444__auto__;
var map__58204__$1 = cljs.core.__destructure_map(map__58204);
var css__55447__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58204__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__55445__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58204__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__55446__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58204__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__55446__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__55446__auto__);
var attrs_value__55448__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__55445__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__55448__auto__], null),children__55446__auto____$1),css__55447__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq58203){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58203));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
