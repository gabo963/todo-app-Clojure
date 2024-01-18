goog.provide('com.fulcrologic.fulcro.components');
goog.require('cljs.core');
goog.require('goog.object');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('edn_query_language.core');
goog.require('cljs.spec.alpha');
goog.require('taoensso.timbre');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.raw.components');
goog.require('com.fulcrologic.guardrails.core');
goog.require('clojure.set');
com.fulcrologic.fulcro.components._STAR_app_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_parent_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_shared_STAR_ = null;
com.fulcrologic.fulcro.components.force_refresh = cljs.core.volatile_BANG_(false);
/**
 * When called this enables forced refresh for the given amount of time in ms. (Does nothing in CLJ)
 */
com.fulcrologic.fulcro.components.enable_forced_refresh_BANG_ = (function com$fulcrologic$fulcro$components$enable_forced_refresh_BANG_(ms){
cljs.core.vreset_BANG_(com.fulcrologic.fulcro.components.force_refresh,true);

return setTimeout((function (){
return cljs.core.vreset_BANG_(com.fulcrologic.fulcro.components.force_refresh,false);
}),ms);
});
/**
 * Returns true if a rendering request wants all components to render even if their props and state have not changed.
 */
com.fulcrologic.fulcro.components.force_refresh_QMARK_ = (function com$fulcrologic$fulcro$components$force_refresh_QMARK_(){
return cljs.core.deref(com.fulcrologic.fulcro.components.force_refresh);
});
/**
 * 
 *   [obj kvs]
 *   [obj kvs default]
 * 
 *   Like get-in, but for js objects, and in CLJC. In clj, it is just get-in. In cljs it is
 *   gobj/getValueByKeys.
 */
com.fulcrologic.fulcro.components.isoget_in = com.fulcrologic.fulcro.raw.components.isoget_in;
/**
 * 
 *   [obj k]
 *   [obj k default]
 * 
 *   Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.components.isoget = com.fulcrologic.fulcro.raw.components.isoget;
/**
 * 
 *   [k component-class]
 * 
 *   Add a component to Fulcro's component registry.  This is used by defsc to ensure that all Fulcro classes
 *   that have been compiled (transitively required) will be accessible for lookup by fully-qualified symbol/keyword.
 *   Not meant for public use, unless you're creating your own component macro that doesn't directly leverage defsc.
 */
com.fulcrologic.fulcro.components.register_component_BANG_ = com.fulcrologic.fulcro.raw.components.register_component_BANG_;
/**
 * Utility function that will force a lazy sequence of children (recursively) into realized
 *   vectors (React cannot deal with lazy seqs in production mode)
 */
com.fulcrologic.fulcro.components.force_children = (function com$fulcrologic$fulcro$components$force_children(x){
var G__55705 = x;
if(cljs.core.seq_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.force_children),G__55705);
} else {
return G__55705;
}
});
/**
 * 
 *   [props-a props-b]
 * 
 *   Returns whichever of the given Fulcro props were most recently generated according to `denormalization-time`. This
 *   is part of props 'tunnelling', an optimization to get updated props to instances without going through the root.
 */
com.fulcrologic.fulcro.components.newer_props = com.fulcrologic.fulcro.raw.components.newer_props;
/**
 * [x]
 * 
 * Returns true if the argument is a component. A component is defined as a *mounted component*.
 * This function returns false for component classes, and also returns false for the output of a Fulcro component factory.
 */
com.fulcrologic.fulcro.components.component_instance_QMARK_ = (function com$fulcrologic$fulcro$components$component_instance_QMARK_(x){
return com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(x);
});
/**
 * [x]
 * 
 * Returns true if the argument is a component instance.
 * 
 * DEPRECATED for terminology clarity. Use `component-instance?` instead.
 */
com.fulcrologic.fulcro.components.component_QMARK_ = com.fulcrologic.fulcro.components.component_instance_QMARK_;
/**
 * Returns true if the argument is a component class.
 */
com.fulcrologic.fulcro.components.component_class_QMARK_ = (function com$fulcrologic$fulcro$components$component_class_QMARK_(x){
return com.fulcrologic.fulcro.raw.components.component_class_QMARK_(x);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),com.fulcrologic.fulcro.components.component_class_QMARK_);
/**
 * [class]
 * 
 * Returns a string version of the given react component's name. Works on component instances and classes.
 */
com.fulcrologic.fulcro.components.component_name = com.fulcrologic.fulcro.raw.components.component_name;
/**
 * [class]
 * 
 * Returns the registry key for the given component class.
 */
com.fulcrologic.fulcro.components.class__GT_registry_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key;
/**
 * [classname]
 * 
 *   Look up the given component in Fulcro's global component registry. Will only be able to find components that have
 *   been (transitively) required by your application.
 * 
 *   `classname` can be a fully-qualified keyword or symbol.
 */
com.fulcrologic.fulcro.components.registry_key__GT_class = com.fulcrologic.fulcro.raw.components.registry_key__GT_class;
/**
 * 
 *   [props computed-map]
 * 
 *   Add computed properties to props. This will *replace* any pre-existing computed properties. Computed props are
 *   necessary when a parent component wishes to pass callbacks or other data to children that *have a query*. This
 *   is not necessary for "stateless" components, though it will work properly for both.
 * 
 *   Computed props are "remembered" so that a targeted update (which can only happen on a component with a query
 *   and ident) can use new props from the database without "losing" the computed props that were originally passed
 *   from the parent. If you pass things like callbacks through normal props, then targeted updates will seem to "lose
 *   track of" them.
 *   
 */
com.fulcrologic.fulcro.components.computed = com.fulcrologic.fulcro.raw.components.computed;
/**
 * [this-or-props]
 * [this-or-props k-or-ks]
 * 
 * Return the computed properties on a component or its props. Note that it requires that the normal properties are not nil.
 */
com.fulcrologic.fulcro.components.get_computed = com.fulcrologic.fulcro.raw.components.get_computed;
/**
 * Get any data (as a map) that props extensions have associated with the given Fulcro component. Extra props will
 *   be empty unless you've installed props-middleware (on your app) that sets them.
 */
com.fulcrologic.fulcro.components.get_extra_props = (function com$fulcrologic$fulcro$components$get_extra_props(this$){
var G__55712 = this$;
var G__55713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$extra_props","fulcro$extra_props",-499585470)], null);
var G__55714 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3(G__55712,G__55713,G__55714) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__55712,G__55713,G__55714));
});
/**
 * [this]
 * 
 * Return a component's props.
 */
com.fulcrologic.fulcro.components.props = com.fulcrologic.fulcro.raw.components.props;
/**
 * [this]
 * 
 * Get the sequence of react children of the given component.
 */
com.fulcrologic.fulcro.components.children = (function com$fulcrologic$fulcro$components$children(component){
var cs = goog.object.getValueByKeys(component,"props","children");
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
com.fulcrologic.fulcro.components.react_type = (function com$fulcrologic$fulcro$components$react_type(x){
return com.fulcrologic.fulcro.raw.components.component_type(x);
});
/**
 * [instance]
 * 
 * Returns the react type (component class) of the given React element (instance). Is identity if used on a class.
 */
com.fulcrologic.fulcro.components.get_class = com.fulcrologic.fulcro.raw.components.get_class;
/**
 * [component & ks]
 * 
 * Returns the map of options that was specified (via `defsc`) for the component class.
 */
com.fulcrologic.fulcro.components.component_options = com.fulcrologic.fulcro.raw.components.component_options;
/**
 * Returns true if the component has `option-key` declared in the component options map.
 */
com.fulcrologic.fulcro.components.has_feature_QMARK_ = (function com$fulcrologic$fulcro$components$has_feature_QMARK_(component,option_key){
return cljs.core.contains_QMARK_((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_options.call(null,component)),option_key);
});
/**
 * Returns true if the component has initial app state.
 */
com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_ = (function com$fulcrologic$fulcro$components$has_initial_app_state_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
});
/**
 * Returns true if the component has an ident
 */
com.fulcrologic.fulcro.components.has_ident_QMARK_ = (function com$fulcrologic$fulcro$components$has_ident_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"ident","ident",-742346));
});
/**
 * Returns true if the component has a query
 */
com.fulcrologic.fulcro.components.has_query_QMARK_ = (function com$fulcrologic$fulcro$components$has_query_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"query","query",-1288509510));
});
/**
 * Returns true if the component has a pre-merge
 */
com.fulcrologic.fulcro.components.has_pre_merge_QMARK_ = (function com$fulcrologic$fulcro$components$has_pre_merge_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148));
});
/**
 * Returns the ident that would be generated by the given component instance or class IF it was supplied props
 */
com.fulcrologic.fulcro.components.ident = (function com$fulcrologic$fulcro$components$ident(this$,props){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"ident","ident",-742346))){
var fexpr__55728 = (function (){var G__55729 = this$;
var G__55730 = new cljs.core.Keyword(null,"ident","ident",-742346);
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__55729,G__55730) : com.fulcrologic.fulcro.components.component_options.call(null,G__55729,G__55730));
})();
return (fexpr__55728.cljs$core$IFn$_invoke$arity$2 ? fexpr__55728.cljs$core$IFn$_invoke$arity$2(this$,props) : fexpr__55728.call(null,this$,props));
} else {
return null;
}
});
/**
 * Returns the STATIC query of the fgiven component
 */
com.fulcrologic.fulcro.components.query = (function com$fulcrologic$fulcro$components$query(this$){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"query","query",-1288509510))){
var fexpr__55734 = (function (){var G__55735 = this$;
var G__55736 = new cljs.core.Keyword(null,"query","query",-1288509510);
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__55735,G__55736) : com.fulcrologic.fulcro.components.component_options.call(null,G__55735,G__55736));
})();
return (fexpr__55734.cljs$core$IFn$_invoke$arity$1 ? fexpr__55734.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__55734.call(null,this$));
} else {
return null;
}
});
/**
 * Returns the initial state of component clz if it was passed the given params
 */
com.fulcrologic.fulcro.components.initial_state = (function com$fulcrologic$fulcro$components$initial_state(clz,params){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806))){
var fexpr__55743 = (function (){var G__55744 = clz;
var G__55745 = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806);
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__55744,G__55745) : com.fulcrologic.fulcro.components.component_options.call(null,G__55744,G__55745));
})();
return (fexpr__55743.cljs$core$IFn$_invoke$arity$1 ? fexpr__55743.cljs$core$IFn$_invoke$arity$1(params) : fexpr__55743.call(null,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.pre_merge = (function com$fulcrologic$fulcro$components$pre_merge(this$,data){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148))){
var fexpr__55749 = (function (){var G__55750 = this$;
var G__55751 = new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148);
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__55750,G__55751) : com.fulcrologic.fulcro.components.component_options.call(null,G__55750,G__55751));
})();
return (fexpr__55749.cljs$core$IFn$_invoke$arity$1 ? fexpr__55749.cljs$core$IFn$_invoke$arity$1(data) : fexpr__55749.call(null,data));
} else {
return null;
}
});
/**
 * Returns the depth of this from root.
 */
com.fulcrologic.fulcro.components.depth = (function com$fulcrologic$fulcro$components$depth(this$){
var p = (com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_parent.call(null,this$));
var depth = (0);
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return (depth < (1000));
} else {
return and__4120__auto__;
}
})())){
var G__56189 = (com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(p) : com.fulcrologic.fulcro.components.get_parent.call(null,p));
var G__56190 = (depth + (1));
p = G__56189;
depth = G__56190;
continue;
} else {
return depth;
}
break;
}
});
/**
 * GET a RAW react prop. Used internally. Safe in CLJC, but equivalent to `(gobj/getValueByKeys this "props" (name k)`.
 */
com.fulcrologic.fulcro.components.get_raw_react_prop = (function com$fulcrologic$fulcro$components$get_raw_react_prop(c,k){
var G__55753 = c;
var G__55754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),k], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__55753,G__55754) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__55753,G__55754));
});
/**
 * Attempt to coerce `x` to an app.  Legal inputs are a fulcro application, a mounted component,
 *   or an atom holding any of the above.
 */
com.fulcrologic.fulcro.components.any__GT_app = (function com$fulcrologic$fulcro$components$any__GT_app(x){
return com.fulcrologic.fulcro.raw.components.any__GT_app(x);
});
/**
 * Using raw react props/state returns the newest Fulcro props. This is part of "props tunneling", where component
 *   local state is leveraged as a communication mechanism of updated props directly to a component that has an ident.
 *   This function will return the correct version of props based on timestamps.
 */
com.fulcrologic.fulcro.components.raw__GT_newest_props = (function com$fulcrologic$fulcro$components$raw__GT_newest_props(raw_props,raw_state){
var next_props = goog.object.get(raw_props,"fulcro$value");
var opt_props = goog.object.get(raw_state,"fulcro$value");
return (com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2(next_props,opt_props) : com.fulcrologic.fulcro.components.newer_props.call(null,next_props,opt_props));
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn app options. NOTE: Shared props only update on root render and by explicit calls to
 * `app/update-shared!`.
 * 
 * This function attempts to rely on the dynamic var *shared* (first), but will make a best-effort of
 * finding shared props when run within a component's render or lifecycle. Passing your app will
 * ensure this returns the current shared props.
 */
com.fulcrologic.fulcro.components.shared = (function com$fulcrologic$fulcro$components$shared(var_args){
var G__55756 = arguments.length;
switch (G__55756) {
case 1:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1 = (function (comp_or_app){
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2(comp_or_app,cljs.core.PersistentVector.EMPTY);
});

com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2 = (function (comp_or_app,k_or_ks){
var shared = (function (){var G__55757 = com.fulcrologic.fulcro.components.any__GT_app(comp_or_app);
var G__55757__$1 = (((G__55757 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__55757));
var G__55757__$2 = (((G__55757__$1 == null))?null:cljs.core.deref(G__55757__$1));
if((G__55757__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157).cljs$core$IFn$_invoke$arity$1(G__55757__$2);
}
})();
var ks = (function (){var G__55758 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__55758],null));
} else {
return G__55758;
}
})();
var G__55759 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__55759,ks);
} else {
return G__55759;
}
});

com.fulcrologic.fulcro.components.shared.cljs$lang$maxFixedArity = 2;

var static_wrap_props_state_handler = (function com$fulcrologic$fulcro$components$static_wrap_props_state_handler(handler){
return (function (raw_props,raw_state){
var props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state);
var state = goog.object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(props,state) : handler.call(null,props,state));
});
});
var wrap_props_state_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_state_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_state_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_state_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props,raw_state){
var this$ = this;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):goog.object.get(raw_props,"fulcro$props"));
var state = goog.object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(this$,props,state) : handler.call(null,this$,props,state));
});
});
com$fulcrologic$fulcro$components$wrap_props_state_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_state_handler__1;
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_state_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_state_handler;
})()
;
var component_did_mount = (function com$fulcrologic$fulcro$components$component_did_mount(){
var this$ = this;
goog.object.set(this$,"fulcro$mounted",true);

var map__55821 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_options.call(null,this$));
var map__55821__$1 = (((((!((map__55821 == null))))?(((((map__55821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55821):map__55821);
var componentDidMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55821__$1,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
(index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));

if(cljs.core.truth_(componentDidMount)){
return (componentDidMount.cljs$core$IFn$_invoke$arity$1 ? componentDidMount.cljs$core$IFn$_invoke$arity$1(this$) : componentDidMount.call(null,this$));
} else {
return null;
}
});
var component_did_update = (function com$fulcrologic$fulcro$components$component_did_update(raw_prev_props,raw_prev_state,snapshot){
var this$ = this;
var map__55825 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_options.call(null,this$));
var map__55825__$1 = (((((!((map__55825 == null))))?(((((map__55825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55825):map__55825);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55825__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var componentDidUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55825__$1,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981));
var prev_state = goog.object.get(raw_prev_state,"fulcro$state");
var prev_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_prev_props,raw_prev_state);
if(cljs.core.truth_(componentDidUpdate)){
(componentDidUpdate.cljs$core$IFn$_invoke$arity$4 ? componentDidUpdate.cljs$core$IFn$_invoke$arity$4(this$,prev_props,prev_state,snapshot) : componentDidUpdate.call(null,this$,prev_props,prev_state,snapshot));
} else {
}

if(cljs.core.truth_(ident)){
var old_ident = (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(this$,prev_props) : ident.call(null,this$,prev_props));
var next_ident = (function (){var G__55827 = this$;
var G__55828 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(G__55827,G__55828) : ident.call(null,G__55827,G__55828));
})();
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_ident,next_ident)){
(drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(this$,old_ident) : drop_component_BANG_.call(null,this$,old_ident));

return (index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));
} else {
return null;
}
} else {
return null;
}
});
var should_component_update_QMARK_ = (function com$fulcrologic$fulcro$components$should_component_update_QMARK_(raw_next_props,raw_next_state){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.force_refresh_QMARK_())){
return true;
} else {
var this$ = this;
var current_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var next_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_next_props,raw_next_state);
var next_state = goog.object.get(raw_next_state,"fulcro$state");
var current_state = goog.object.getValueByKeys(this$,"state","fulcro$state");
var next_children = goog.object.get(raw_next_props,"children");
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_state,next_state)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.getValueByKeys(this$,"props","children"),next_children)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props,next_props)));
}
});
var wrap_props_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props){
var this$ = this;
var raw_state = this$.state;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):goog.object.get(raw_props,"fulcro$props"));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(this$,props) : handler.call(null,this$,props));
});
});
com$fulcrologic$fulcro$components$wrap_props_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_handler__1;
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_handler;
})()
;
var wrap_this = (function com$fulcrologic$fulcro$components$wrap_this(handler){
return (function() { 
var G__56211__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,this$,args);
};
var G__56211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56212__i = 0, G__56212__a = new Array(arguments.length -  0);
while (G__56212__i < G__56212__a.length) {G__56212__a[G__56212__i] = arguments[G__56212__i + 0]; ++G__56212__i;}
  args = new cljs.core.IndexedSeq(G__56212__a,0,null);
} 
return G__56211__delegate.call(this,args);};
G__56211.cljs$lang$maxFixedArity = 0;
G__56211.cljs$lang$applyTo = (function (arglist__56213){
var args = cljs.core.seq(arglist__56213);
return G__56211__delegate(args);
});
G__56211.cljs$core$IFn$_invoke$arity$variadic = G__56211__delegate;
return G__56211;
})()
;
});
var wrap_base_render = (function com$fulcrologic$fulcro$components$wrap_base_render(render){
return (function() { 
var G__56214__delegate = function (args){
var this$ = this;
var temp__5802__auto__ = com.fulcrologic.fulcro.components.any__GT_app(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var app__$1 = temp__5802__auto__;
var _STAR_app_STAR__orig_val__55833 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__55834 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__55835 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__55836 = app__$1;
var _STAR_shared_STAR__temp_val__55837 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(this$);
var _STAR_parent_STAR__temp_val__55838 = this$;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__55836;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55837;

com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55838;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render,this$,args);
}finally {com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55835;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55834;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__55833;
}} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.components",null,380,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5802__auto__,this$){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot find app on component!"], null);
});})(temp__5802__auto__,this$))
,null)),null,166310989,null);
}
};
var G__56214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56219__i = 0, G__56219__a = new Array(arguments.length -  0);
while (G__56219__i < G__56219__a.length) {G__56219__a[G__56219__i] = arguments[G__56219__i + 0]; ++G__56219__i;}
  args = new cljs.core.IndexedSeq(G__56219__a,0,null);
} 
return G__56214__delegate.call(this,args);};
G__56214.cljs$lang$maxFixedArity = 0;
G__56214.cljs$lang$applyTo = (function (arglist__56220){
var args = cljs.core.seq(arglist__56220);
return G__56214__delegate(args);
});
G__56214.cljs$core$IFn$_invoke$arity$variadic = G__56214__delegate;
return G__56214;
})()
;
});
var component_will_unmount = (function com$fulcrologic$fulcro$components$component_will_unmount(){
var this$ = this;
var map__55840 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_options.call(null,this$));
var map__55840__$1 = (((((!((map__55840 == null))))?(((((map__55840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55840):map__55840);
var componentWillUnmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55840__$1,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
if(cljs.core.truth_(componentWillUnmount)){
(componentWillUnmount.cljs$core$IFn$_invoke$arity$1 ? componentWillUnmount.cljs$core$IFn$_invoke$arity$1(this$) : componentWillUnmount.call(null,this$));
} else {
}

goog.object.set(this$,"fulcro$mounted",false);

return (drop_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : drop_component_BANG_.call(null,this$));
});
/**
 * Configure the given `cls` (a function) to act as a react component within the Fulcro ecosystem.
 * 
 *  cls - A js function (in clj, this is ignored)
 *  fqkw - A keyword that shares the exact fully-qualified name of the component class
 *  options - A component options map (no magic) containing things like `:query` and `:ident`.
 * 
 * 
 *  NOTE: the `options` map expects proper function signatures for:
 * 
 *  `:query` - (fn [this] ...)
 *  `:ident` - (fn [this props] ...)
 *  `:initial-state` - (fn [cls params] ...)
 * 
 *  Returns (and registers) a new react class.
 *  
 */
com.fulcrologic.fulcro.components.configure_component_BANG_ = (function com$fulcrologic$fulcro$components$configure_component_BANG_(cls,fqkw,options){
var map__55846 = options;
var map__55846__$1 = (((((!((map__55846 == null))))?(((((map__55846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55846):map__55846);
var initLocalState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
var componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619));
var componentDidCatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733));
var UNSAFE_componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910));
var getSnapshotBeforeUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184));
var UNSAFE_componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214));
var getDerivedStateFromProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739));
var getDerivedStateFromError = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477));
var componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974));
var shouldComponentUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932));
var UNSAFE_componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55846__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983));
var name = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(fqkw),cljs.core.name(fqkw)], null));
var js_instance_props = cljs.core.clj__GT_js((function (){var G__55852 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),component_did_mount,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),component_will_unmount,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),component_did_update,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(cljs.core.truth_(shouldComponentUpdate)?wrap_props_state_handler.cljs$core$IFn$_invoke$arity$1(shouldComponentUpdate):should_component_update_QMARK_),new cljs.core.Keyword(null,"fulcro$isComponent","fulcro$isComponent",2094954844),true,new cljs.core.Keyword(null,"type","type",1174270348),cls,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name], null);
var G__55852__$1 = (cljs.core.truth_(render)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852,new cljs.core.Keyword(null,"render","render",-1408033454),wrap_base_render(render)):G__55852);
var G__55852__$2 = (cljs.core.truth_(getSnapshotBeforeUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184),wrap_props_state_handler.cljs$core$IFn$_invoke$arity$1(getSnapshotBeforeUpdate)):G__55852__$1);
var G__55852__$3 = (cljs.core.truth_(componentDidCatch)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$2,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),wrap_this(componentDidCatch)):G__55852__$2);
var G__55852__$4 = (cljs.core.truth_(UNSAFE_componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$3,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910),wrap_this(UNSAFE_componentWillMount)):G__55852__$3);
var G__55852__$5 = (cljs.core.truth_(UNSAFE_componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$4,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214),wrap_props_state_handler.cljs$core$IFn$_invoke$arity$1(UNSAFE_componentWillUpdate)):G__55852__$4);
var G__55852__$6 = (cljs.core.truth_(UNSAFE_componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$5,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983),wrap_props_handler.cljs$core$IFn$_invoke$arity$1(UNSAFE_componentWillReceiveProps)):G__55852__$5);
var G__55852__$7 = (cljs.core.truth_(componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$6,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),wrap_this(componentWillMount)):G__55852__$6);
var G__55852__$8 = (cljs.core.truth_(componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$7,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),wrap_this(componentWillUpdate)):G__55852__$7);
var G__55852__$9 = (cljs.core.truth_(componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$8,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),wrap_props_handler.cljs$core$IFn$_invoke$arity$1(componentWillReceiveProps)):G__55852__$8);
if(cljs.core.truth_(initLocalState)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55852__$9,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),wrap_this(initLocalState));
} else {
return G__55852__$9;
}
})());
var statics = (function (){var G__55856 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,new cljs.core.Keyword(null,"fulcro$class","fulcro$class",-1213203837),cls,new cljs.core.Keyword(null,"cljs$lang$type","cljs$lang$type",2136418717),true,new cljs.core.Keyword(null,"cljs$lang$ctorStr","cljs$lang$ctorStr",1406571315),name,new cljs.core.Keyword(null,"cljs$lang$ctorPrWriter","cljs$lang$ctorPrWriter",-112192216),((function (map__55846,map__55846__$1,initLocalState,componentWillMount,componentDidCatch,UNSAFE_componentWillMount,getSnapshotBeforeUpdate,UNSAFE_componentWillUpdate,getDerivedStateFromProps,getDerivedStateFromError,componentWillReceiveProps,shouldComponentUpdate,render,componentWillUpdate,UNSAFE_componentWillReceiveProps,name,js_instance_props){
return (function (_,writer,___$1){
return cljs.core._write(writer,name);
});})(map__55846,map__55846__$1,initLocalState,componentWillMount,componentDidCatch,UNSAFE_componentWillMount,getSnapshotBeforeUpdate,UNSAFE_componentWillUpdate,getDerivedStateFromProps,getDerivedStateFromError,componentWillReceiveProps,shouldComponentUpdate,render,componentWillUpdate,UNSAFE_componentWillReceiveProps,name,js_instance_props))
], null);
var G__55856__$1 = (cljs.core.truth_(getDerivedStateFromError)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55856,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),((function (G__55856,map__55846,map__55846__$1,initLocalState,componentWillMount,componentDidCatch,UNSAFE_componentWillMount,getSnapshotBeforeUpdate,UNSAFE_componentWillUpdate,getDerivedStateFromProps,getDerivedStateFromError,componentWillReceiveProps,shouldComponentUpdate,render,componentWillUpdate,UNSAFE_componentWillReceiveProps,name,js_instance_props){
return (function (error){
var v = (getDerivedStateFromError.cljs$core$IFn$_invoke$arity$1 ? getDerivedStateFromError.cljs$core$IFn$_invoke$arity$1(error) : getDerivedStateFromError.call(null,error));
if(cljs.core.coll_QMARK_(v)){
return ({"fulcro$state": v});
} else {
return v;
}
});})(G__55856,map__55846,map__55846__$1,initLocalState,componentWillMount,componentDidCatch,UNSAFE_componentWillMount,getSnapshotBeforeUpdate,UNSAFE_componentWillUpdate,getDerivedStateFromProps,getDerivedStateFromError,componentWillReceiveProps,shouldComponentUpdate,render,componentWillUpdate,UNSAFE_componentWillReceiveProps,name,js_instance_props))
):G__55856);
if(cljs.core.truth_(getDerivedStateFromProps)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55856__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),static_wrap_props_state_handler(getDerivedStateFromProps));
} else {
return G__55856__$1;
}
})();
var G__55864_56247 = cls.prototype;
var G__55865_56248 = module$node_modules$react$index.Component.prototype;
var G__55866_56249 = js_instance_props;
var G__55867_56250 = ({"fulcro$options": options});
goog.object.extend(G__55864_56247,G__55865_56248,G__55866_56249,G__55867_56250);

var G__55868_56253 = cls;
var G__55869_56254 = cljs.core.clj__GT_js(statics);
var G__55870_56255 = ({"fulcro$options": options});
goog.object.extend(G__55868_56253,G__55869_56254,G__55870_56255);

goog.object.set(cls,"fulcro$registryKey",fqkw);

return (com.fulcrologic.fulcro.components.register_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.register_component_BANG_.cljs$core$IFn$_invoke$arity$2(fqkw,cls) : com.fulcrologic.fulcro.components.register_component_BANG_.call(null,fqkw,cls));
});
/**
 * Make a given `cls` (a plain fn) act like a a Fulcro component with the given component options map. Registers the
 *   new component in the component-registry. Component options MUST contain :componentName as be a fully-qualified
 *   keyword to name the component in the registry.
 * 
 *   component-options *must* include a unique `:componentName` (keyword) that will be used for registering the given
 *   function as the faux class in the component registry.
 */
com.fulcrologic.fulcro.components.add_hook_options_BANG_ = (function com$fulcrologic$fulcro$components$add_hook_options_BANG_(render_fn,component_options){
return com.fulcrologic.fulcro.raw.components.configure_anonymous_component_BANG_(render_fn,component_options);
});
/**
 * Allows you to use a plain function as a Fulcro-managed React hooks component.
 * 
 *   * `js-props` - The React js props from the parent.
 *   * `faux-class` - A Fulcro faux class, which is a fn that has had `add-options!` called on it.
 * 
 *   Returns a cljs vector containing `this` and fulcro `props`. You should *not* use the returned `this` directly,
 *   as it is a placeholder.
 * 
 *   Prefer `defsc` or `configure-hooks-component! over using this directly.`
 *   
 */
com.fulcrologic.fulcro.components.use_fulcro = (function com$fulcrologic$fulcro$components$use_fulcro(js_props,faux_class){
var app__$1 = (function (){var G__55878 = js_props;
var G__55879 = new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306);
return (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(G__55878,G__55879) : com.fulcrologic.fulcro.components.isoget.call(null,G__55878,G__55879));
})();
var tunnelled_props_state = (function (){var G__55880 = ({});
return module$node_modules$react$index.useState(G__55880);
})();
var js_set_tunnelled_props_BANG_ = (tunnelled_props_state[(1)]);
var map__55877 = (function (){var G__55881 = faux_class;
var G__55882 = new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811);
return (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(G__55881,G__55882) : com.fulcrologic.fulcro.components.isoget.call(null,G__55881,G__55882));
})();
var map__55877__$1 = (((((!((map__55877 == null))))?(((((map__55877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55877):map__55877);
var options = map__55877__$1;
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var faux_component_state = (function (){var G__55884 = ((function (app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident){
return (function (){
if(cljs.core.truth_(app__$1)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,482,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot create proper fulcro component, as *app* isn't bound.","This happens when something renders a Fulcro component outside of Fulcro's render context.","See `with-parent-context`.","See https://book.fulcrologic.com/#err-comp-app-not-bound"], null);
});})(app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident))
,null)),null,-2031837081,null);
}

var set_tunnelled_props_BANG_ = ((function (app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident){
return (function (updater){
var new_props = (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(null) : updater.call(null,null));
return (js_set_tunnelled_props_BANG_.cljs$core$IFn$_invoke$arity$1 ? js_set_tunnelled_props_BANG_.cljs$core$IFn$_invoke$arity$1(new_props) : js_set_tunnelled_props_BANG_.call(null,new_props));
});})(app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident))
;
return ({"setState": set_tunnelled_props_BANG_, "fulcro$isComponent": true, "fulcro$class": faux_class, "type": faux_class, "fulcro$options": options, "fulcro$mounted": false, "props": ({"fulcro$app": app__$1})});
});})(app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident))
;
return module$node_modules$react$index.useState(G__55884);
})();
var faux_component = (faux_component_state[(0)]);
var current_state = (tunnelled_props_state[(0)]["fulcro$value"]);
var props = (function (){var G__55887 = js_props;
var G__55888 = new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554);
return (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(G__55887,G__55888) : com.fulcrologic.fulcro.components.isoget.call(null,G__55887,G__55888));
})();
var children = (function (){var G__55889 = js_props;
var G__55890 = new cljs.core.Keyword(null,"children","children",-940561982);
return (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(G__55889,G__55890) : com.fulcrologic.fulcro.components.isoget.call(null,G__55889,G__55890));
})();
var current_props = (com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.newer_props.cljs$core$IFn$_invoke$arity$2(props,current_state) : com.fulcrologic.fulcro.components.newer_props.call(null,props,current_state));
var current_ident = (cljs.core.truth_(ident)?(ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(faux_class,current_props) : ident.call(null,faux_class,current_props)):null);
var shared_props = (cljs.core.truth_(app__$1)?com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__$1):null);
var G__55891_56261 = goog.object.get(faux_component,"props");
goog.object.set(G__55891_56261,"fulcro$shared",shared_props);

goog.object.set(G__55891_56261,"fulcro$value",current_props);

goog.object.set(G__55891_56261,"children",children);


var G__55892_56263 = ((function (app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident,faux_component_state,faux_component,current_state,props,children,current_props,current_ident,shared_props){
return (function (){
var original_ident = current_ident;
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
goog.object.set(faux_component,"fulcro$mounted",true);

(index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(faux_component) : index_component_BANG_.call(null,faux_component));

return ((function (original_ident,index_component_BANG_,drop_component_BANG_,app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident,faux_component_state,faux_component,current_state,props,children,current_props,current_ident,shared_props){
return (function (){
goog.object.set(faux_component,"fulcro$mounted",false);

return (drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(faux_component,original_ident) : drop_component_BANG_.call(null,faux_component,original_ident));
});
;})(original_ident,index_component_BANG_,drop_component_BANG_,app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident,faux_component_state,faux_component,current_state,props,children,current_props,current_ident,shared_props))
});})(app__$1,tunnelled_props_state,js_set_tunnelled_props_BANG_,map__55877,map__55877__$1,options,ident,faux_component_state,faux_component,current_state,props,children,current_props,current_ident,shared_props))
;
var G__55893_56264 = [cljs.core.second(current_ident)];
module$node_modules$react$index.useEffect(G__55892_56263,G__55893_56264);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [faux_component,current_props], null);
});
/**
 * Returns true if the given component instance is mounted on the DOM.
 */
com.fulcrologic.fulcro.components.mounted_QMARK_ = (function com$fulcrologic$fulcro$components$mounted_QMARK_(this$){
return goog.object.get(this$,"fulcro$mounted",false);
});
/**
 * Set React component-local state.  The `new-state` is actually merged with the existing state (as per React docs),
 *   but is wrapped so that cljs maps are used (instead of js objs).  `callback` is an optional callback that will be
 *   called as per the React docs on setState.
 */
com.fulcrologic.fulcro.components.set_state_BANG_ = (function com$fulcrologic$fulcro$components$set_state_BANG_(var_args){
var G__55897 = arguments.length;
switch (G__55897) {
case 3:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,callback){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(component))){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.object.get(prev_state,"fulcro$state"),new_state], 0))});
}),callback);
} else {
return null;
}
});

com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

com.fulcrologic.fulcro.components.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state. NOTE: This is Fulcro's wrapped component
 * local state. The low-level React state is as described in the React docs (e.g. `(.-state this)`).
 */
com.fulcrologic.fulcro.components.get_state = (function com$fulcrologic$fulcro$components$get_state(var_args){
var G__55905 = arguments.length;
switch (G__55905) {
case 1:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
var cst = goog.object.getValueByKeys(component,"state","fulcro$state");
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

com.fulcrologic.fulcro.components.get_state.cljs$lang$maxFixedArity = 2;

var update_fn_56273 = (function (component,f,args){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,goog.object.get(prev_state,"fulcro$state"),args)});
}));
});
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 * 
 *  This function affects a managed cljs map maintained in React state.  If you want to affect the low-level
 *  js state itself use React's own `.setState` directly on the component.
 */
com.fulcrologic.fulcro.components.update_state_BANG_ = ((function (update_fn_56273){
return (function com$fulcrologic$fulcro$components$update_state_BANG_(var_args){
var G__55914 = arguments.length;
switch (G__55914) {
case 2:
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___56275 = arguments.length;
var i__4731__auto___56277 = (0);
while(true){
if((i__4731__auto___56277 < len__4730__auto___56275)){
args_arr__4751__auto__.push((arguments[i__4731__auto___56277]));

var G__56278 = (i__4731__auto___56277 + (1));
i__4731__auto___56277 = G__56278;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});})(update_fn_56273))
;

com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (update_fn_56273){
return (function (component,f){
return update_fn_56273(component,f,cljs.core.PersistentVector.EMPTY);
});})(update_fn_56273))
;

com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = ((function (update_fn_56273){
return (function (component,f,args){
return update_fn_56273(component,f,args);
});})(update_fn_56273))
;

/** @this {Function} */
com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$applyTo = ((function (update_fn_56273){
return (function (seq55911){
var G__55912 = cljs.core.first(seq55911);
var seq55911__$1 = cljs.core.next(seq55911);
var G__55913 = cljs.core.first(seq55911__$1);
var seq55911__$2 = cljs.core.next(seq55911__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55912,G__55913,seq55911__$2);
});})(update_fn_56273))
;

com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * 
 *   [cls] [cls params]
 * 
 *   Get the declared :initial-state value for a component.
 */
com.fulcrologic.fulcro.components.get_initial_state = com.fulcrologic.fulcro.raw.components.get_initial_state;
/**
 * Returns true if the given initial state was returned from a call to get-initial-state. This is used by internal
 *   algorithms when interpreting initial state shorthand in `defsc`.
 */
com.fulcrologic.fulcro.components.computed_initial_state_QMARK_ = (function com$fulcrologic$fulcro$components$computed_initial_state_QMARK_(s){
var and__4120__auto__ = cljs.core.map_QMARK_(s);
if(and__4120__auto__){
var G__55925 = s;
var G__55925__$1 = (((G__55925 == null))?null:cljs.core.meta(G__55925));
if((G__55925__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(G__55925__$1);
}
} else {
return and__4120__auto__;
}
});
/**
 * 
 *   [x] [class props]
 * 
 *   Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
com.fulcrologic.fulcro.components.get_ident = com.fulcrologic.fulcro.raw.components.get_ident;
/**
 * CLJS-only.  When the `component` is mounted this will tunnel `new-props` to that component through React `setState`. If you're in
 *   an event handler, this means the tunnelling will be synchronous, and can be useful when updating props that could affect DOM
 *   inputs. This is typically used internally (see `transact!!`, and should generally not be used in applications unless it is a very advanced
 *   scenario and you've studied how this works. NOTE: You should `tick!` the application clock and bind *denormalize-time*
 *   when generating `new-props` so they are properly time-stamped by `db->tree`, or manually add time to `new-props`
 *   using `fdn/with-time` directly.
 */
com.fulcrologic.fulcro.components.tunnel_props_BANG_ = (function com$fulcrologic$fulcro$components$tunnel_props_BANG_(component,new_props){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(component))){
return component.setState((function (s){
return ({"fulcro$value": new_props});
}));
} else {
return null;
}
});
/**
 * Returns true if the given argument is a component factory.
 */
com.fulcrologic.fulcro.components.is_factory_QMARK_ = (function com$fulcrologic$fulcro$components$is_factory_QMARK_(class_or_factory){
return com.fulcrologic.fulcro.raw.components.is_factory_QMARK_(class_or_factory);
});
/**
 * [class qualifier]
 * 
 * Returns a string ID for the query of the given class with qualifier.
 */
com.fulcrologic.fulcro.components.query_id = com.fulcrologic.fulcro.raw.components.query_id;
com.fulcrologic.fulcro.components.denormalize_query = com.fulcrologic.fulcro.raw.components.denormalize_query;
com.fulcrologic.fulcro.components.get_query_by_id = com.fulcrologic.fulcro.raw.components.get_query_by_id;
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
com.fulcrologic.fulcro.components.get_query = (function com$fulcrologic$fulcro$components$get_query(var_args){
var G__55934 = arguments.length;
switch (G__55934) {
case 1:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,(function (){var or__4131__auto__ = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__55938 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__55938__$1 = (((G__55938 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__55938));
if((G__55938__$1 == null)){
return null;
} else {
return cljs.core.deref(G__55938__$1);
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})());
});

com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
return com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,state_map);
});

com.fulcrologic.fulcro.components.get_query.cljs$lang$maxFixedArity = 2;

/**
 * Build a component's initial state using the defsc initial-state-data from
 *   options, the children from options, and the params from the invocation of get-initial-state.
 */
com.fulcrologic.fulcro.components.make_state_map = (function com$fulcrologic$fulcro$components$make_state_map(initial_state,children_by_query_key,params){
var join_keys = cljs.core.set(cljs.core.keys(children_by_query_key));
var init_keys = cljs.core.set(cljs.core.keys(initial_state));
var is_child_QMARK_ = ((function (join_keys,init_keys){
return (function (k){
return cljs.core.contains_QMARK_(join_keys,k);
});})(join_keys,init_keys))
;
var value_of = ((function (join_keys,init_keys,is_child_QMARK_){
return (function com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_(p__55943){
var vec__55944 = p__55943;
var isk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55944,(0),null);
var isv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55944,(1),null);
var param_name = ((function (vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (v){
var and__4120__auto__ = (v instanceof cljs.core.Keyword);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v));
if(and__4120__auto____$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});})(vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_))
;
var substitute = ((function (param_name,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
var temp__5802__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5802__auto__)){
var k = temp__5802__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
return ele;
}
});})(param_name,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_))
;
var param_key = param_name(isv);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_by_query_key,isk);
if(cljs.core.truth_((function (){var and__4120__auto__ = param_key;
if(cljs.core.truth_(and__4120__auto__)){
return (!(param_exists_QMARK_));
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
if(((cljs.core.map_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(function (){var G__55949 = child_class;
var G__55950 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv));
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__55949,G__55950) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__55949,G__55950));
})()], null);
} else {
if(cljs.core.map_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv))], null);
} else {
if(((cljs.core.vector_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (m){
var G__55951 = child_class;
var G__55952 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,m));
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__55951,G__55952) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__55951,G__55952));
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_))
,isv)], null);
} else {
if(((cljs.core.vector_QMARK_(param_value)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (params__$1){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(params__$1))){
return params__$1;
} else {
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,params__$1) : com.fulcrologic.fulcro.components.get_initial_state.call(null,child_class,params__$1));
}
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_))
,param_value)], null);
} else {
if(cljs.core.vector_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
return substitute(ele);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__55944,isk,isv,join_keys,init_keys,is_child_QMARK_))
,isv)], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = param_key;
if(cljs.core.truth_(and__4120__auto__)){
return ((is_child_QMARK_(isk)) && (param_exists_QMARK_));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(param_value))?param_value:(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,param_value) : com.fulcrologic.fulcro.components.get_initial_state.call(null,child_class,param_value)))], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,isv], null);

}
}
}
}
}
}
}
}
});})(join_keys,init_keys,is_child_QMARK_))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(value_of,initial_state));
});
/**
 * Run `real-render`, possibly through :render-middleware configured on your app.
 */
com.fulcrologic.fulcro.components.wrapped_render = (function com$fulcrologic$fulcro$components$wrapped_render(this$,real_render){
var app__$1 = goog.object.getValueByKeys(this$,"props","fulcro$app");
var render_middleware = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-middleware","render-middleware",1183628797));
var _STAR_app_STAR__orig_val__55955 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_parent_STAR__orig_val__55956 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_shared_STAR__orig_val__55957 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__55958 = app__$1;
var _STAR_parent_STAR__temp_val__55959 = this$;
var _STAR_shared_STAR__temp_val__55960 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__$1);
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__55958;

com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55959;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55960;

try{if(cljs.core.truth_(render_middleware)){
return (render_middleware.cljs$core$IFn$_invoke$arity$2 ? render_middleware.cljs$core$IFn$_invoke$arity$2(this$,real_render) : render_middleware.call(null,this$,real_render));
} else {
return (real_render.cljs$core$IFn$_invoke$arity$0 ? real_render.cljs$core$IFn$_invoke$arity$0() : real_render.call(null));
}
}finally {com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55957;

com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55956;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__55955;
}});
/**
 * Configure a function `(f [this fulcro-props] ...)` to work properly as a hook-based react component. This can be
 *   used in leiu of `defsc` to create a component, where `options` is the (non-magic) map of component options
 *   (i.e. :query is a `(fn [this])`, not a vector).
 * 
 *   IMPORTANT: Your options must include `:componentName`, a fully-qualified keyword to use in the component registry.
 * 
 *   Returns a new function that wraps yours (to properly extract Fulcro props) and installs the proper Fulcro component
 *   options on the low-level function so that it will act properly when used within React as a hook-based component.
 * 
 *   (def MyComponent
 *  (configure-hooks-component!
 *    (fn [this props]
 *      (let [[v set-v!] (use-state this 0)
 *        (dom/div ...)))
 *    {:query ... :ident (fn [_ props] ...) :componentName ::MyComponent}))
 * 
 *   (def ui-my-component (comp/factory MyComponent {:keyfn :id})
 * 
 *   This can be used to easily generate dynamic components at runtime (as can `configure-component!`).
 *   
 */
com.fulcrologic.fulcro.components.configure_hooks_component_BANG_ = (function com$fulcrologic$fulcro$components$configure_hooks_component_BANG_(f,options){
var cls_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var js_fn = ((function (cls_atom){
return (function (js_props){
var vec__55965 = com.fulcrologic.fulcro.components.use_fulcro(js_props,cljs.core.deref(cls_atom));
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55965,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55965,(1),null);
return com.fulcrologic.fulcro.components.wrapped_render(this$,((function (vec__55965,this$,props,cls_atom){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
});})(vec__55965,this$,props,cls_atom))
);
});})(cls_atom))
;
cljs.core.reset_BANG_(cls_atom,js_fn);

return com.fulcrologic.fulcro.components.add_hook_options_BANG_(js_fn,options);
});
/**
 * Create a react element for a Fulcro class.  In CLJ this returns the same thing as a mounted instance, whereas in CLJS it is an
 *   element (which has yet to instantiate an instance).
 */
com.fulcrologic.fulcro.components.create_element = (function com$fulcrologic$fulcro$components$create_element(class$,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,class$,props,com.fulcrologic.fulcro.components.force_children(children));
});
/**
 * Create a factory constructor from a component class created with
 * defsc.
 */
com.fulcrologic.fulcro.components.factory = (function com$fulcrologic$fulcro$components$factory(var_args){
var G__55976 = arguments.length;
switch (G__55976) {
case 1:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__55978){
var map__55979 = p__55978;
var map__55979__$1 = (((((!((map__55979 == null))))?(((((map__55979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55979):map__55979);
var opts = map__55979__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55979__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55979__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
var qid = (com.fulcrologic.fulcro.components.query_id.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.query_id.cljs$core$IFn$_invoke$arity$2(class$,qualifier) : com.fulcrologic.fulcro.components.query_id.call(null,class$,qualifier));
return cljs.core.with_meta(((function (qid,map__55979,map__55979__$1,opts,keyfn,qualifier){
return (function() { 
var com$fulcrologic$fulcro$components$element_factory__delegate = function (props,children){
var key = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
var key__$1 = (cljs.core.truth_(key)?key:(cljs.core.truth_(keyfn)?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):null));
var parent = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var app__$1 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(app__$1)){
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__55982 = ref;
if((ref instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55982);
} else {
return G__55982;
}
})();
var props_middleware = (function (){var G__55983 = app__$1;
if((G__55983 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(G__55983,new cljs.core.Keyword(null,"props-middleware","props-middleware",358176739));
}
})();
var props__$1 = ({"fulcro$value": props, "fulcro$queryid": qid, "fulcro$parent": parent, "fulcro$app": app__$1});
var props__$2 = (cljs.core.truth_(props_middleware)?(props_middleware.cljs$core$IFn$_invoke$arity$2 ? props_middleware.cljs$core$IFn$_invoke$arity$2(class$,props__$1) : props_middleware.call(null,class$,props__$1)):props__$1);
if(cljs.core.truth_(key__$1)){
goog.object.set(props__$2,"key",key__$1);
} else {
}

if(cljs.core.truth_(ref__$1)){
goog.object.set(props__$2,"ref",ref__$1);
} else {
}

if(cljs.core.truth_(goog.DEBUG)){
if(((cljs.core.map_QMARK_(key__$1)) || (cljs.core.vector_QMARK_(key__$1)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,774,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["React key for ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$))," is not a simple scalar value. This could cause spurious component remounts. See https://book.fulcrologic.com/#warn-react-key-not-simple-scalar"], null);
});})(ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier))
,null)),null,1765272943,null);
} else {
}

if(typeof ref__$1 === 'string'){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,777,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String ref on ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$))," should be a function. See https://book.fulcrologic.com/#warn-string-ref-not-function"], null);
});})(ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier))
,null)),null,922624928,null);
} else {
}

if((((props__$2 == null)) || (cljs.core.not(goog.object.containsKey(props__$2,"fulcro$value"))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,780,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Props middleware seems to have corrupted props for ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$)),"See https://book.fulcrologic.com/#err-comp-props-middleware-corrupts"], null);
});})(ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier))
,null)),null,915657967,null);
} else {
}

if(cljs.core.truth_((function (){var G__55990 = goog.object.get(props__$2,"fulcro$value");
var fexpr__55989 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.PersistentArrayMap.EMPTY);
return (fexpr__55989.cljs$core$IFn$_invoke$arity$1 ? fexpr__55989.cljs$core$IFn$_invoke$arity$1(G__55990) : fexpr__55989.call(null,G__55990));
})())){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,783,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Props passed to",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.component_name.call(null,class$)),"are of the type",cljs.core.type__GT_str(cljs.core.type(goog.object.get(props__$2,"fulcro$value"))),"instead of a map. Perhaps you meant to `map` the component over the props? See https://book.fulcrologic.com/#err-comp-props-not-a-map"], null);
});})(ref,ref__$1,props_middleware,props__$1,props__$2,key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier))
,null)),null,990944846,null);
}
} else {
}

return com.fulcrologic.fulcro.components.create_element(class$,props__$2,children);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,788,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A Fulcro component was rendered outside of a parent context. This probably means you are using a library that has you pass rendering code to it as a lambda. Use `with-parent-context` to fix this. See https://book.fulcrologic.com/#err-comp-rendered-outside-parent-ctx"], null);
});})(key,key__$1,parent,app__$1,qid,map__55979,map__55979__$1,opts,keyfn,qualifier))
,null)),null,1962262879,null);

return cljs.core.PersistentVector.EMPTY;
}
};
var com$fulcrologic$fulcro$components$element_factory = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__56296__i = 0, G__56296__a = new Array(arguments.length -  1);
while (G__56296__i < G__56296__a.length) {G__56296__a[G__56296__i] = arguments[G__56296__i + 1]; ++G__56296__i;}
  children = new cljs.core.IndexedSeq(G__56296__a,0,null);
} 
return com$fulcrologic$fulcro$components$element_factory__delegate.call(this,props,children);};
com$fulcrologic$fulcro$components$element_factory.cljs$lang$maxFixedArity = 1;
com$fulcrologic$fulcro$components$element_factory.cljs$lang$applyTo = (function (arglist__56297){
var props = cljs.core.first(arglist__56297);
var children = cljs.core.rest(arglist__56297);
return com$fulcrologic$fulcro$components$element_factory__delegate(props,children);
});
com$fulcrologic$fulcro$components$element_factory.cljs$core$IFn$_invoke$arity$variadic = com$fulcrologic$fulcro$components$element_factory__delegate;
return com$fulcrologic$fulcro$components$element_factory;
})()
;})(qid,map__55979,map__55979__$1,opts,keyfn,qualifier))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),qid,new cljs.core.Keyword(null,"qualifier","qualifier",125841738),qualifier], null));
});

com.fulcrologic.fulcro.components.factory.cljs$lang$maxFixedArity = 2;

/**
 * Similar to factory, but returns a function with the signature
 *   [props computed & children] instead of default [props & children].
 *   This makes easier to send computed.
 */
com.fulcrologic.fulcro.components.computed_factory = (function com$fulcrologic$fulcro$components$computed_factory(var_args){
var G__55995 = arguments.length;
switch (G__55995) {
case 1:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,options){
var real_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,options);
return cljs.core.with_meta(((function (real_factory){
return (function() {
var G__56299 = null;
var G__56299__1 = (function (props){
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(props) : real_factory.call(null,props));
});
var G__56299__2 = (function (props,computed_props){
var G__55998 = (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(props,computed_props) : com.fulcrologic.fulcro.components.computed.call(null,props,computed_props));
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__55998) : real_factory.call(null,G__55998));
});
var G__56299__3 = (function() { 
var G__56300__delegate = function (props,computed_props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,(com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(props,computed_props) : com.fulcrologic.fulcro.components.computed.call(null,props,computed_props)),children);
};
var G__56300 = function (props,computed_props,var_args){
var children = null;
if (arguments.length > 2) {
var G__56301__i = 0, G__56301__a = new Array(arguments.length -  2);
while (G__56301__i < G__56301__a.length) {G__56301__a[G__56301__i] = arguments[G__56301__i + 2]; ++G__56301__i;}
  children = new cljs.core.IndexedSeq(G__56301__a,0,null);
} 
return G__56300__delegate.call(this,props,computed_props,children);};
G__56300.cljs$lang$maxFixedArity = 2;
G__56300.cljs$lang$applyTo = (function (arglist__56302){
var props = cljs.core.first(arglist__56302);
arglist__56302 = cljs.core.next(arglist__56302);
var computed_props = cljs.core.first(arglist__56302);
var children = cljs.core.rest(arglist__56302);
return G__56300__delegate(props,computed_props,children);
});
G__56300.cljs$core$IFn$_invoke$arity$variadic = G__56300__delegate;
return G__56300;
})()
;
G__56299 = function(props,computed_props,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return G__56299__1.call(this,props);
case 2:
return G__56299__2.call(this,props,computed_props);
default:
var G__56303 = null;
if (arguments.length > 2) {
var G__56304__i = 0, G__56304__a = new Array(arguments.length -  2);
while (G__56304__i < G__56304__a.length) {G__56304__a[G__56304__i] = arguments[G__56304__i + 2]; ++G__56304__i;}
G__56303 = new cljs.core.IndexedSeq(G__56304__a,0,null);
}
return G__56299__3.cljs$core$IFn$_invoke$arity$variadic(props,computed_props, G__56303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56299.cljs$lang$maxFixedArity = 2;
G__56299.cljs$lang$applyTo = G__56299__3.cljs$lang$applyTo;
G__56299.cljs$core$IFn$_invoke$arity$1 = G__56299__1;
G__56299.cljs$core$IFn$_invoke$arity$2 = G__56299__2;
G__56299.cljs$core$IFn$_invoke$arity$variadic = G__56299__3.cljs$core$IFn$_invoke$arity$variadic;
return G__56299;
})()
;})(real_factory))
,cljs.core.meta(real_factory));
});

com.fulcrologic.fulcro.components.computed_factory.cljs$lang$maxFixedArity = 2;

/**
 * Submit a transaction for processing.
 * 
 *   The underlying transaction system is pluggable, but the *default* supported options are:
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The ident of the component used to submit this transaction. This is set automatically if you use a component to call this function.
 *   - `:component` - React element. Set automatically if you call this function using a component.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 *   - `:abort-id` - An ID (you make up) that makes it possible (if the plugins you're using support it) to cancel
 *  the network portion of the transaction (assuming it has not already completed).
 *   - `:compressible?` - boolean. Check compressible-transact! docs.
 *   - `:synchronous?` - boolean. When turned on the transaction will run immediately on the calling thread. If run against
 *   a component then the props will be immediately tunneled back to the calling component, allowing for React (raw) input
 *   event handlers to behave as described in standard React Forms docs (uses setState behind the scenes). Any remote operations
 *   will still be queued as normal. Calling `transact!!` is a shorthand for this option. WARNING: ONLY the given component will
 *   be refreshed in the UI. If you have dependent data elsewhere in the UI you must either use `transact!` or schedule
 *   your own global render using `app/schedule-render!`.
 *   - `:after-render?` - Wait until the next render completes before allowing this transaction to run. This can be used
 *   when calling `transact!` from *within* another mutation to ensure that the effects of the current mutation finish
 *   before this transaction takes control of the CPU. This option defaults to `false`, but `defmutation` causes it to
 *   be set to true for any transactions run within mutation action sections. You can affect the default for this value
 *   in a dynamic scope by binding `rc/*after-render*` to true
 *   - `:parallel?` - Boolean. If true, the mutation(s) in the transaction will NOT go into a network queue, nor
 *  will it block later mutations or queries.
 * 
 *   You may add any additional keys to the option map (namespaced is ideal), and any value is legal in the options
 *   map, including functions. The options will appear in the `env` of all mutations run in the transaction as
 *   `:com.fulcrologic.fulcro.algorithms.tx-processing/options`. This is the preferred way of passing things like
 *   lambdas (if you wanted something like a callback) to mutations. Note that mutation symbols are perfectly legal
 *   as mutation *arguments*, so chaining mutations can already be done via the normal transaction mechanism, and
 *   callbacks, while sometimes necessary/useful, should be limited to usages where there is no other clean way
 *   to accomplish the goal.
 * 
 *   NOTE: This function calls the application's `tx!` function (which is configurable). Fulcro 2 'follow-on reads' are
 *   supported by the default version and are added to the `:refresh` entries. Your choice of rendering algorithm will
 *   influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.components.transact_BANG_ = (function com$fulcrologic$fulcro$components$transact_BANG_(var_args){
var G__56003 = arguments.length;
switch (G__56003) {
case 3:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_component,tx,options){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_component,tx,options);
});

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_or_comp,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_comp,tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.components.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Shorthand for exactly `(transact! component tx (merge options {:synchronous? true}))`.
 * 
 *   Runs a synchronous transaction, which is an optimized mode where the optimistic behaviors of the mutations in the
 *   transaction run on the calling thread, and new props are immediately made available to the calling component via
 *   "props tunneling" (a behind-the-scenes mechanism using js/setState).
 * 
 *   This mode is meant to be used in form input event handlers, since React is designed to only work properly with
 *   raw DOM inputs via component-local state. This prevents things like the cursor jumping to the end of inputs
 *   unexpectedly.
 * 
 *   WARNING: Using an `app` instead of a component in synchronous transactions makes no sense. You must pass a component
 *   that has an ident.
 * 
 *   If you're using this, you can also set the compiler option:
 * 
 *   ```
 *   :compiler-options {:external-config {:fulcro     {:wrap-inputs? false}}}
 *   ```
 * 
 *   to turn off Fulcro DOM's generation of wrapped inputs (which try to solve this problem in a less-effective way).
 * 
 *   WARNING: Synchronous rendering does *not* refresh the full UI, only the component.
 *   
 */
com.fulcrologic.fulcro.components.transact_BANG__BANG_ = (function com$fulcrologic$fulcro$components$transact_BANG__BANG_(var_args){
var G__56009 = arguments.length;
switch (G__56009) {
case 2:
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,tx,options){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,tx,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391),true], null)], 0)));
});

com.fulcrologic.fulcro.components.transact_BANG__BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Part of internal implementation of dynamic queries.
 */
com.fulcrologic.fulcro.components.link_element = com.fulcrologic.fulcro.raw.components.link_element;
/**
 * Part of internal implementation of dynamic queries.
 * 
 *   Determines if there are query elements in the `query` that need to be normalized. If so, it does so.
 * 
 *   Returns the new state map containing potentially-updated normalized queries.
 */
com.fulcrologic.fulcro.components.normalize_query_elements = com.fulcrologic.fulcro.raw.components.normalize_query_elements;
/**
 * Part of dyn query implementation. Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID.
 */
com.fulcrologic.fulcro.components.link_query = com.fulcrologic.fulcro.raw.components.link_query;
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added.  Part of dynamic query implementation.
 */
com.fulcrologic.fulcro.components.normalize_query = com.fulcrologic.fulcro.raw.components.normalize_query;
/**
 * Put a query in app state.
 * 
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
com.fulcrologic.fulcro.components.set_query_STAR_ = (function com$fulcrologic$fulcro$components$set_query_STAR_(state_map,class_or_factory,p__56017){
var map__56018 = p__56017;
var map__56018__$1 = (((((!((map__56018 == null))))?(((((map__56018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56018):map__56018);
var args = map__56018__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56018__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return com.fulcrologic.fulcro.raw.components.set_query_STAR_(state_map,class_or_factory,args);
});
/**
 * Public API for setting a dynamic query on a component. This function alters the query and rebuilds internal indexes.
 * 
 *   * `x` : is anything that any->app accepts.
 *   * `class-or-factory` : A component class or factory for that class (if using query qualifiers)
 *   * `opts` : A map with `query` and optionally `params` (substitutions on queries)
 *   
 */
com.fulcrologic.fulcro.components.set_query_BANG_ = (function com$fulcrologic$fulcro$components$set_query_BANG_(x,class_or_factory,p__56022){
var map__56023 = p__56022;
var map__56023__$1 = (((((!((map__56023 == null))))?(((((map__56023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56023):map__56023);
var opts = map__56023__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56023__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56023__$1,new cljs.core.Keyword(null,"params","params",710516235));
return com.fulcrologic.fulcro.raw.components.set_query_BANG_(x,class_or_factory,opts);
});
/**
 * Refresh the current dynamic queries in app state to reflect any updates to the static queries of the components.
 * 
 * This can be used at development time to update queries that have changed but that hot code reload does not
 * reflect (because there is a current saved query in state). This is *not* always what you want, since a component
 * may have a custom query whose prop-level elements are set to a particular thing on purpose.
 * 
 * An component that has `:preserve-dynamic-query? true` in its component options will be ignored by
 * this function.
 */
com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_ = (function com$fulcrologic$fulcro$components$refresh_dynamic_queries_BANG_(var_args){
var G__56029 = arguments.length;
switch (G__56029) {
case 3:
return com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,cls,force_QMARK_){
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,cls,force_QMARK_);
});

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app_ish){
return com.fulcrologic.fulcro.raw.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app_ish);
});

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Get all of the indexes from a component instance or app. See also `ident->any`, `class->any`, etc.
 */
com.fulcrologic.fulcro.components.get_indexes = (function com$fulcrologic$fulcro$components$get_indexes(x){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(x);
var G__56033 = app__$1;
var G__56033__$1 = (((G__56033 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__56033));
var G__56033__$2 = (((G__56033__$1 == null))?null:cljs.core.deref(G__56033__$1));
if((G__56033__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938).cljs$core$IFn$_invoke$arity$1(G__56033__$2);
}
});
/**
 * Return all on-screen component instances that are rendering the data for a given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_components = (function com$fulcrologic$fulcro$components$ident__GT_components(x,ident){
var G__56034 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__56034__$1 = (((G__56034 == null))?null:new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224).cljs$core$IFn$_invoke$arity$1(G__56034));
if((G__56034__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__56034__$1,ident);
}
});
/**
 * Return some (random) on-screen components that uses the given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_any = (function com$fulcrologic$fulcro$components$ident__GT_any(x,ident){
return cljs.core.first(com.fulcrologic.fulcro.components.ident__GT_components(x,ident));
});
/**
 * Get all component classes that query for the given prop.
 *   `x` can be anything `any->app` is ok with.
 * 
 *   Returns all classes that query for that prop (or ident)
 */
com.fulcrologic.fulcro.components.prop__GT_classes = (function com$fulcrologic$fulcro$components$prop__GT_classes(x,prop){
var G__56037 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__56037__$1 = (((G__56037 == null))?null:new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717).cljs$core$IFn$_invoke$arity$1(G__56037));
if((G__56037__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__56037__$1,prop);
}
});
/**
 * Get all of the on-screen component instances from the indexes that have the type of the component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_all = (function com$fulcrologic$fulcro$components$class__GT_all(x,class$){
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var G__56038 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__56038__$1 = (((G__56038 == null))?null:new cljs.core.Keyword(null,"class->components","class->components",436435919).cljs$core$IFn$_invoke$arity$1(G__56038));
if((G__56038__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__56038__$1,k);
}
});
/**
 * Get a (random) on-screen component instance from the indexes that has type of the given component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_any = (function com$fulcrologic$fulcro$components$class__GT_any(x,cls){
return cljs.core.first(com.fulcrologic.fulcro.components.class__GT_all(x,cls));
});
/**
 * Returns the current value of the state map via a component instance. Note that it is not safe to render
 *   arbitrary data from the state map since Fulcro will have no idea that it should refresh a component that
 *   does so; however, it is sometimes useful to look at the state map for information that doesn't
 *   change over time.
 */
com.fulcrologic.fulcro.components.component__GT_state_map = (function com$fulcrologic$fulcro$components$component__GT_state_map(this$){
var G__56040 = this$;
var G__56040__$1 = (((G__56040 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__56040));
var G__56040__$2 = (((G__56040__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__56040__$1));
if((G__56040__$2 == null)){
return null;
} else {
return cljs.core.deref(G__56040__$2);
}
});
/**
 * Wrap the props middleware such that `f` is called to get extra props that should be placed
 *   in the extra-props arg of the component.
 * 
 *   `handler` - (optional) The next item in the props middleware chain.
 *   `f` - A (fn [cls extra-props] new-extra-props)
 * 
 *   `f` will be passed the class being rendered and the current map of extra props. It should augment
 *   those and return a new version.
 */
com.fulcrologic.fulcro.components.wrap_update_extra_props = (function com$fulcrologic$fulcro$components$wrap_update_extra_props(var_args){
var G__56042 = arguments.length;
switch (G__56042) {
case 1:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (cls,raw_props){
var existing = (function (){var or__4131__auto__ = goog.object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
goog.object.set(raw_props,"fulcro$extra_props",new$);

return raw_props;
});
});

com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2 = (function (handler,f){
return (function (cls,raw_props){
var existing = (function (){var or__4131__auto__ = goog.object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
goog.object.set(raw_props,"fulcro$extra_props",new$);

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(cls,raw_props) : handler.call(null,cls,raw_props));
});
});

com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$lang$maxFixedArity = 2;

/**
 * Wraps children in a React.Fragment. Props are optional, like normal DOM elements.
 */
com.fulcrologic.fulcro.components.fragment = (function com$fulcrologic$fulcro$components$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56371 = arguments.length;
var i__4731__auto___56372 = (0);
while(true){
if((i__4731__auto___56372 < len__4730__auto___56371)){
args__4736__auto__.push((arguments[i__4731__auto___56372]));

var G__56379 = (i__4731__auto___56372 + (1));
i__4731__auto___56372 = G__56379;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__56053 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({}),args], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,module$node_modules$react$index.Fragment,cljs.core.clj__GT_js(props),com.fulcrologic.fulcro.components.force_children(children));
});

com.fulcrologic.fulcro.components.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.components.fragment.cljs$lang$applyTo = (function (seq56049){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56049));
});

/**
 * 
 *   DEPRECATED: Generally use `result-action` in mutations to chain sequences instead. This call is equivalent
 *   to `transact!` with an `:optimistic? false` option.
 * 
 *   Like `transact!`, but ensures each call completes (in a full-stack, pessimistic manner) before the next call starts
 *   in any way. Note that two calls of this function have no guaranteed relationship to each other. They could end up
 *   intermingled at runtime. The only guarantee is that for *a single call* to `ptransact!`, the calls in the given tx will run
 *   pessimistically (one at a time) in the order given. Follow-on reads in the given transaction will be repeated after each remote
 *   interaction.
 * 
 *   `component-or-app` a mounted component or the app
 *   `tx` the tx to run
 *   `ref` the ident (ref context) in which to run the transaction (including all deferrals)
 */
com.fulcrologic.fulcro.components.ptransact_BANG_ = (function com$fulcrologic$fulcro$components$ptransact_BANG_(var_args){
var G__56064 = arguments.length;
switch (G__56064) {
case 2:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component_or_app,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
});

com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component_or_app,ref,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
});

com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Identical to `transact!` with `:compressible? true` option. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable. This
 *   also compress the transactions in Fulcro Inspect.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling.
 */
com.fulcrologic.fulcro.components.compressible_transact_BANG_ = (function com$fulcrologic$fulcro$components$compressible_transact_BANG_(var_args){
var G__56066 = arguments.length;
switch (G__56066) {
case 2:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});

com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,ref,tx){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
});

com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Mainly for internal use and for use with `configure-component!`. Returns a constructor function which is usable
 * as the React Class for `configure-component!`. E.g.:
 * 
 * ```
 * (defonce MyClass (react-constructor (fn [this initial-props] fulcro-component-local-state)))
 * (configure-component! MyClass ::MyClass {:query ...})
 * ```
 * 
 * The argument is exactly the lambda you would normally pass to `initLocalState`.
 * 
 * This function returns a React-compatible constructor (a function that receives initial `js-props` and
 * sets up a js object as component local state). This is wrapped in Fulcro itself, thus this convenience function.
 * 
 */
com.fulcrologic.fulcro.components.react_constructor = (function com$fulcrologic$fulcro$components$react_constructor(init_state){
return (function (js_props){
var this$ = this;
if(cljs.core.truth_(init_state)){
this$.state = ({"fulcro$state": (function (){var G__56089 = this$;
var G__56090 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(js_props,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,js_props,"fulcro$value"));
return (init_state.cljs$core$IFn$_invoke$arity$2 ? init_state.cljs$core$IFn$_invoke$arity$2(G__56089,G__56090) : init_state.call(null,G__56089,G__56090));
})()});
} else {
this$.state = ({"fulcro$state": cljs.core.PersistentArrayMap.EMPTY});
}

return null;
});
});
var hot_reload_cache_56397 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Create a Fulcro stateful component. Calling this will overwrite whatever is currently in the registry. You MAY
 *   supply shortcut notation for query and ident.
 * 
 *   :query - A vector, map (for unions), or (fn [this]).
 *   :ident - A keyword, vector, or (fn [this props])
 *   :initial-state - A (fn [params] )
 * 
 *   The `render-fn` is a `(fn [this props])`.
 *  
 */
com.fulcrologic.fulcro.components.sc = ((function (hot_reload_cache_56397){
return (function com$fulcrologic$fulcro$components$sc(registry_key,p__56104,render_fn){
var map__56105 = p__56104;
var map__56105__$1 = (((((!((map__56105 == null))))?(((((map__56105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56105):map__56105);
var component_options = map__56105__$1;
var use_hooks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56105__$1,new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56105__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56105__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
if(cljs.core.qualified_keyword_QMARK_(registry_key)){
} else {
throw (new Error(["Assert failed: ","The registry key must be a qualified keyword.","\n","(qualified-keyword? registry-key)"].join('')));
}

var render_fn__$1 = (cljs.core.truth_(use_hooks_QMARK_)?((function (map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function com$fulcrologic$fulcro$components$sc_$_render_fn_STAR_(this$,props){
return com.fulcrologic.fulcro.components.wrapped_render(this$,((function (map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function (){
if(cljs.core.truth_(render_fn)){
var _STAR_app_STAR__orig_val__56113 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__56114 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__56115 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__56116 = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__56119 = this$;
var G__56120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__56119,G__56120) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__56119,G__56120));
}
})();
var _STAR_shared_STAR__temp_val__56117 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__56125 = this$;
var G__56126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__56125,G__56126) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__56125,G__56126));
}
})());
var _STAR_parent_STAR__temp_val__56118 = this$;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__56116;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56117;

com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56118;

try{return (render_fn.cljs$core$IFn$_invoke$arity$2 ? render_fn.cljs$core$IFn$_invoke$arity$2(this$,props) : render_fn.call(null,this$,props));
}finally {com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56115;

com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56114;

com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__56113;
}} else {
return null;
}
});})(map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
);
});})(map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
:((function (map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function com$fulcrologic$fulcro$components$sc_$_render_fn_STAR_(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,((function (map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function (){
if(cljs.core.truth_(render_fn)){
var G__56131 = this$;
var G__56132 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (render_fn.cljs$core$IFn$_invoke$arity$2 ? render_fn.cljs$core$IFn$_invoke$arity$2(G__56131,G__56132) : render_fn.call(null,G__56131,G__56132));
} else {
return null;
}
});})(map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
);
});})(map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
);
var options = (function (){var G__56133 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(component_options,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),registry_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"render","render",-1408033454),render_fn__$1], 0));
var G__56133__$1 = (((!(cljs.core.fn_QMARK_(query))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56133,new cljs.core.Keyword(null,"query","query",-1288509510),((function (G__56133,render_fn__$1,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function (_){
return query;
});})(G__56133,render_fn__$1,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
):G__56133);
var G__56133__$2 = (((ident instanceof cljs.core.Keyword))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56133__$1,new cljs.core.Keyword(null,"ident","ident",-742346),((function (G__56133,G__56133__$1,render_fn__$1,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function (_,p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,ident)], null);
});})(G__56133,G__56133__$1,render_fn__$1,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
):G__56133__$1);
if(cljs.core.vector_QMARK_(ident)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56133__$2,new cljs.core.Keyword(null,"ident","ident",-742346),((function (G__56133,G__56133__$1,G__56133__$2,render_fn__$1,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function (_,p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(ident),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,cljs.core.second(ident))], null);
});})(G__56133,G__56133__$1,G__56133__$2,render_fn__$1,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
);
} else {
return G__56133__$2;
}
})();
if(cljs.core.truth_(use_hooks_QMARK_)){
var wrapped_hook = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hot_reload_cache_56397),registry_key);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,render_fn__$1,options,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397){
return (function com$fulcrologic$fulcro$components$sc_$_wrapped_hook_STAR_(js_props){
var vec__56141 = com.fulcrologic.fulcro.components.use_fulcro(js_props,com$fulcrologic$fulcro$components$sc_$_wrapped_hook_STAR_);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56141,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56141,(1),null);
return (render_fn__$1.cljs$core$IFn$_invoke$arity$2 ? render_fn__$1.cljs$core$IFn$_invoke$arity$2(this$,props) : render_fn__$1.call(null,this$,props));
});
;})(or__4131__auto__,render_fn__$1,options,map__56105,map__56105__$1,component_options,use_hooks_QMARK_,query,ident,hot_reload_cache_56397))
}
})();
if(cljs.core.truth_(goog.DEBUG)){
hot_reload_cache_56397.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hot_reload_cache_56397.cljs$core$IDeref$_deref$arity$1(null),registry_key,wrapped_hook));
} else {
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(wrapped_hook,options);

return wrapped_hook;
} else {
var constructor$ = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hot_reload_cache_56397),registry_key);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component_options,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}
})();
if(cljs.core.truth_(goog.DEBUG)){
hot_reload_cache_56397.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hot_reload_cache_56397.cljs$core$IDeref$_deref$arity$1(null),registry_key,constructor$));
} else {
}

return com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,registry_key,options);
}
});})(hot_reload_cache_56397))
;
com.fulcrologic.fulcro.components.external_config = com.fulcrologic.fulcro.raw.components.external_config;
/**
 * Request that the given subtree starting a component be refreshed from the app database without re-rendering any parent. This
 *   is a synchronous call that will tunnel the props to the given component via an internal call to React setState.
 */
com.fulcrologic.fulcro.components.refresh_component_BANG_ = (function com$fulcrologic$fulcro$components$refresh_component_BANG_(component){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component)))){
var prior_computed = (function (){var or__4131__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.get_computed.call(null,component));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__56152 = com.fulcrologic.fulcro.components.any__GT_app(component);
var map__56152__$1 = (((((!((map__56152 == null))))?(((((map__56152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56152):map__56152);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56152__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56152__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_map = cljs.core.deref(state_atom);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437),cljs.core.inc);

var ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.get_ident.call(null,component));
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
var ui_props = (function (){var G__56155 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident),state_map);
var G__56156 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__56155,G__56156) : com.fulcrologic.fulcro.components.computed.call(null,G__56155,G__56156));
})();
return com.fulcrologic.fulcro.components.tunnel_props_BANG_(component,ui_props);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,1590,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot re-render a non-component. See https://book.fulcrologic.com/#err-comp-cannot-rerender-non-comp"], null);
}),null)),null,-159729663,null);
}
});
/**
 * Returns the nth parent of `this` (a React element). The optional `n` can be 0 (the immediate parent) or any positive
 *   integer. If this walks past root then this function returns nil.
 */
com.fulcrologic.fulcro.components.get_parent = (function com$fulcrologic$fulcro$components$get_parent(var_args){
var G__56161 = arguments.length;
switch (G__56161) {
case 2:
return com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$2 = (function (this$,n){
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(this$)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot get parent. First argument is not a component instance.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),this$], null));
}

var element = this$;
var level = n;
while(true){
var result = (function (){var G__56163 = element;
var G__56164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$parent","fulcro$parent",798142831)], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__56163,G__56164) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__56163,G__56164));
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = result;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.pos_int_QMARK_(level);
} else {
return and__4120__auto__;
}
})())){
var G__56456 = result;
var G__56457 = (level - (1));
element = G__56456;
level = G__56457;
continue;
} else {
return result;
}
break;
}
});

com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$2(this$,(0));
});

com.fulcrologic.fulcro.components.get_parent.cljs$lang$maxFixedArity = 2;

/**
 * Walks the complete list of components in the component registry and looks for problems. Used during dev mode to
 * detect common problems that can cause runtime misbehavior.
 */
com.fulcrologic.fulcro.components.check_component_registry_BANG_ = com.fulcrologic.fulcro.raw.components.check_component_registry_BANG_;
/**
 * [c] [c state-map]
 * 
 * Returns true if c has a union query.
 */
com.fulcrologic.fulcro.components.union_component_QMARK_ = com.fulcrologic.fulcro.raw.components.union_component_QMARK_;
/**
 * [instance]
 * [cls-or-instance props]
 * [cls-or-instance props state-map]
 * 
 * Gets the child component class of the given Union component that should be used for the specific entity (props) supplied.
 */
com.fulcrologic.fulcro.components.union_child_for_props = com.fulcrologic.fulcro.raw.components.union_child_for_props;
/**
 * [query]
 * 
 * Return the component class that was used to generate a given query. e.g. `( = (query->component (get-query Component)) Component)`.
 */
com.fulcrologic.fulcro.components.query__GT_component = com.fulcrologic.fulcro.raw.components.query__GT_component;
/**
 * Equivalent to React.memo, but compares Fulcro props instead of shallow js ones.
 */
com.fulcrologic.fulcro.components.memo = (function com$fulcrologic$fulcro$components$memo(ComponentClass){
var fulcro_props_equal_QMARK_ = (function com$fulcrologic$fulcro$components$memo_$_fulcro_props_equal_QMARK_(old_props,new_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__56174 = old_props;
var G__56175 = new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554);
return (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(G__56174,G__56175) : com.fulcrologic.fulcro.components.isoget.call(null,G__56174,G__56175));
})(),(function (){var G__56176 = new_props;
var G__56177 = new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554);
return (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(G__56176,G__56177) : com.fulcrologic.fulcro.components.isoget.call(null,G__56176,G__56177));
})());
});
return module$node_modules$react$index.memo(ComponentClass,fulcro_props_equal_QMARK_);
});
/**
 * Returns a map from registry key (keyword) to the fulcro components that have registered. Registration is
 * automatic for many of the component generation facilities (macros) as long as they were assigned a registry
 * name.
 */
com.fulcrologic.fulcro.components.registered_components = com.fulcrologic.fulcro.raw.components.registered_components;

//# sourceMappingURL=com.fulcrologic.fulcro.components.js.map
