goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51379 = coll;
var G__51380 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51379,G__51380) : shadow.dom.lazy_native_coll_seq.call(null,G__51379,G__51380));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__51426 = arguments.length;
switch (G__51426) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__51439 = arguments.length;
switch (G__51439) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__51451 = arguments.length;
switch (G__51451) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__51472 = arguments.length;
switch (G__51472) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__51487 = arguments.length;
switch (G__51487) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__51491 = document;
var G__51492 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51491,G__51492);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__51493 = shadow.dom.dom_node(parent);
var G__51494 = shadow.dom.dom_node(el);
return goog.dom.contains(G__51493,G__51494);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__51496 = shadow.dom.dom_node(el);
var G__51497 = cls;
return goog.dom.classlist.add(G__51496,G__51497);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__51498 = shadow.dom.dom_node(el);
var G__51499 = cls;
return goog.dom.classlist.remove(G__51498,G__51499);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51506 = arguments.length;
switch (G__51506) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__51507 = shadow.dom.dom_node(el);
var G__51508 = cls;
return goog.dom.classlist.toggle(G__51507,G__51508);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51518){if((e51518 instanceof Object)){
var e = e51518;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51518;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51520 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51521 = null;
var count__51522 = (0);
var i__51523 = (0);
while(true){
if((i__51523 < count__51522)){
var el = chunk__51521.cljs$core$IIndexed$_nth$arity$2(null,i__51523);
var handler_51937__$1 = ((function (seq__51520,chunk__51521,count__51522,i__51523,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51520,chunk__51521,count__51522,i__51523,el))
;
var G__51543_51938 = el;
var G__51544_51939 = cljs.core.name(ev);
var G__51545_51940 = handler_51937__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51543_51938,G__51544_51939,G__51545_51940) : shadow.dom.dom_listen.call(null,G__51543_51938,G__51544_51939,G__51545_51940));


var G__51941 = seq__51520;
var G__51942 = chunk__51521;
var G__51943 = count__51522;
var G__51944 = (i__51523 + (1));
seq__51520 = G__51941;
chunk__51521 = G__51942;
count__51522 = G__51943;
i__51523 = G__51944;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51520);
if(temp__5804__auto__){
var seq__51520__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51520__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51520__$1);
var G__51945 = cljs.core.chunk_rest(seq__51520__$1);
var G__51946 = c__4550__auto__;
var G__51947 = cljs.core.count(c__4550__auto__);
var G__51948 = (0);
seq__51520 = G__51945;
chunk__51521 = G__51946;
count__51522 = G__51947;
i__51523 = G__51948;
continue;
} else {
var el = cljs.core.first(seq__51520__$1);
var handler_51949__$1 = ((function (seq__51520,chunk__51521,count__51522,i__51523,el,seq__51520__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51520,chunk__51521,count__51522,i__51523,el,seq__51520__$1,temp__5804__auto__))
;
var G__51548_51950 = el;
var G__51549_51951 = cljs.core.name(ev);
var G__51550_51952 = handler_51949__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51548_51950,G__51549_51951,G__51550_51952) : shadow.dom.dom_listen.call(null,G__51548_51950,G__51549_51951,G__51550_51952));


var G__51953 = cljs.core.next(seq__51520__$1);
var G__51954 = null;
var G__51955 = (0);
var G__51956 = (0);
seq__51520 = G__51953;
chunk__51521 = G__51954;
count__51522 = G__51955;
i__51523 = G__51956;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51554 = arguments.length;
switch (G__51554) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__51561 = shadow.dom.dom_node(el);
var G__51562 = cljs.core.name(ev);
var G__51563 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51561,G__51562,G__51563) : shadow.dom.dom_listen.call(null,G__51561,G__51562,G__51563));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__51567 = shadow.dom.dom_node(el);
var G__51568 = cljs.core.name(ev);
var G__51569 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__51567,G__51568,G__51569) : shadow.dom.dom_listen_remove.call(null,G__51567,G__51568,G__51569));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51570 = cljs.core.seq(events);
var chunk__51571 = null;
var count__51572 = (0);
var i__51573 = (0);
while(true){
if((i__51573 < count__51572)){
var vec__51584 = chunk__51571.cljs$core$IIndexed$_nth$arity$2(null,i__51573);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51584,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51958 = seq__51570;
var G__51959 = chunk__51571;
var G__51960 = count__51572;
var G__51961 = (i__51573 + (1));
seq__51570 = G__51958;
chunk__51571 = G__51959;
count__51572 = G__51960;
i__51573 = G__51961;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51570);
if(temp__5804__auto__){
var seq__51570__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51570__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51570__$1);
var G__51962 = cljs.core.chunk_rest(seq__51570__$1);
var G__51963 = c__4550__auto__;
var G__51964 = cljs.core.count(c__4550__auto__);
var G__51965 = (0);
seq__51570 = G__51962;
chunk__51571 = G__51963;
count__51572 = G__51964;
i__51573 = G__51965;
continue;
} else {
var vec__51589 = cljs.core.first(seq__51570__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51589,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51966 = cljs.core.next(seq__51570__$1);
var G__51967 = null;
var G__51968 = (0);
var G__51969 = (0);
seq__51570 = G__51966;
chunk__51571 = G__51967;
count__51572 = G__51968;
i__51573 = G__51969;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51595 = cljs.core.seq(styles);
var chunk__51596 = null;
var count__51597 = (0);
var i__51598 = (0);
while(true){
if((i__51598 < count__51597)){
var vec__51615 = chunk__51596.cljs$core$IIndexed$_nth$arity$2(null,i__51598);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51615,(1),null);
var G__51620_51970 = dom;
var G__51621_51971 = cljs.core.name(k);
var G__51622_51972 = (((v == null))?"":v);
goog.style.setStyle(G__51620_51970,G__51621_51971,G__51622_51972);


var G__51973 = seq__51595;
var G__51974 = chunk__51596;
var G__51975 = count__51597;
var G__51976 = (i__51598 + (1));
seq__51595 = G__51973;
chunk__51596 = G__51974;
count__51597 = G__51975;
i__51598 = G__51976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51595);
if(temp__5804__auto__){
var seq__51595__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51595__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51595__$1);
var G__51977 = cljs.core.chunk_rest(seq__51595__$1);
var G__51978 = c__4550__auto__;
var G__51979 = cljs.core.count(c__4550__auto__);
var G__51980 = (0);
seq__51595 = G__51977;
chunk__51596 = G__51978;
count__51597 = G__51979;
i__51598 = G__51980;
continue;
} else {
var vec__51623 = cljs.core.first(seq__51595__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51623,(1),null);
var G__51626_51981 = dom;
var G__51627_51982 = cljs.core.name(k);
var G__51628_51983 = (((v == null))?"":v);
goog.style.setStyle(G__51626_51981,G__51627_51982,G__51628_51983);


var G__51984 = cljs.core.next(seq__51595__$1);
var G__51985 = null;
var G__51986 = (0);
var G__51987 = (0);
seq__51595 = G__51984;
chunk__51596 = G__51985;
count__51597 = G__51986;
i__51598 = G__51987;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51634_51988 = key;
var G__51634_51989__$1 = (((G__51634_51988 instanceof cljs.core.Keyword))?G__51634_51988.fqn:null);
switch (G__51634_51989__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51991 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_51991,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_51991,"aria-");
}
})())){
el.setAttribute(ks_51991,value);
} else {
(el[ks_51991] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__51637 = shadow.dom.dom_node(el);
var G__51638 = cls;
return goog.dom.classlist.contains(G__51637,G__51638);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51646){
var map__51648 = p__51646;
var map__51648__$1 = (((((!((map__51648 == null))))?(((((map__51648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51648):map__51648);
var props = map__51648__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51648__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51652 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51652,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51652,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51652,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51656 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51656,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51656;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51659 = arguments.length;
switch (G__51659) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51660){
var vec__51661 = p__51660;
var seq__51662 = cljs.core.seq(vec__51661);
var first__51663 = cljs.core.first(seq__51662);
var seq__51662__$1 = cljs.core.next(seq__51662);
var nn = first__51663;
var first__51663__$1 = cljs.core.first(seq__51662__$1);
var seq__51662__$2 = cljs.core.next(seq__51662__$1);
var np = first__51663__$1;
var nc = seq__51662__$2;
var node = vec__51661;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51664 = nn;
var G__51665 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51664,G__51665) : create_fn.call(null,G__51664,G__51665));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51667 = nn;
var G__51668 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51667,G__51668) : create_fn.call(null,G__51667,G__51668));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51669 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(1),null);
var seq__51672_51994 = cljs.core.seq(node_children);
var chunk__51673_51995 = null;
var count__51674_51996 = (0);
var i__51675_51997 = (0);
while(true){
if((i__51675_51997 < count__51674_51996)){
var child_struct_52001 = chunk__51673_51995.cljs$core$IIndexed$_nth$arity$2(null,i__51675_51997);
var children_52002 = shadow.dom.dom_node(child_struct_52001);
if(cljs.core.seq_QMARK_(children_52002)){
var seq__51688_52003 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52002));
var chunk__51690_52004 = null;
var count__51691_52005 = (0);
var i__51692_52006 = (0);
while(true){
if((i__51692_52006 < count__51691_52005)){
var child_52007 = chunk__51690_52004.cljs$core$IIndexed$_nth$arity$2(null,i__51692_52006);
if(cljs.core.truth_(child_52007)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52007);


var G__52008 = seq__51688_52003;
var G__52009 = chunk__51690_52004;
var G__52010 = count__51691_52005;
var G__52011 = (i__51692_52006 + (1));
seq__51688_52003 = G__52008;
chunk__51690_52004 = G__52009;
count__51691_52005 = G__52010;
i__51692_52006 = G__52011;
continue;
} else {
var G__52012 = seq__51688_52003;
var G__52013 = chunk__51690_52004;
var G__52014 = count__51691_52005;
var G__52015 = (i__51692_52006 + (1));
seq__51688_52003 = G__52012;
chunk__51690_52004 = G__52013;
count__51691_52005 = G__52014;
i__51692_52006 = G__52015;
continue;
}
} else {
var temp__5804__auto___52016 = cljs.core.seq(seq__51688_52003);
if(temp__5804__auto___52016){
var seq__51688_52018__$1 = temp__5804__auto___52016;
if(cljs.core.chunked_seq_QMARK_(seq__51688_52018__$1)){
var c__4550__auto___52019 = cljs.core.chunk_first(seq__51688_52018__$1);
var G__52023 = cljs.core.chunk_rest(seq__51688_52018__$1);
var G__52024 = c__4550__auto___52019;
var G__52025 = cljs.core.count(c__4550__auto___52019);
var G__52026 = (0);
seq__51688_52003 = G__52023;
chunk__51690_52004 = G__52024;
count__51691_52005 = G__52025;
i__51692_52006 = G__52026;
continue;
} else {
var child_52027 = cljs.core.first(seq__51688_52018__$1);
if(cljs.core.truth_(child_52027)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52027);


var G__52028 = cljs.core.next(seq__51688_52018__$1);
var G__52029 = null;
var G__52030 = (0);
var G__52031 = (0);
seq__51688_52003 = G__52028;
chunk__51690_52004 = G__52029;
count__51691_52005 = G__52030;
i__51692_52006 = G__52031;
continue;
} else {
var G__52032 = cljs.core.next(seq__51688_52018__$1);
var G__52033 = null;
var G__52034 = (0);
var G__52035 = (0);
seq__51688_52003 = G__52032;
chunk__51690_52004 = G__52033;
count__51691_52005 = G__52034;
i__51692_52006 = G__52035;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52002);
}


var G__52036 = seq__51672_51994;
var G__52037 = chunk__51673_51995;
var G__52038 = count__51674_51996;
var G__52039 = (i__51675_51997 + (1));
seq__51672_51994 = G__52036;
chunk__51673_51995 = G__52037;
count__51674_51996 = G__52038;
i__51675_51997 = G__52039;
continue;
} else {
var temp__5804__auto___52040 = cljs.core.seq(seq__51672_51994);
if(temp__5804__auto___52040){
var seq__51672_52041__$1 = temp__5804__auto___52040;
if(cljs.core.chunked_seq_QMARK_(seq__51672_52041__$1)){
var c__4550__auto___52042 = cljs.core.chunk_first(seq__51672_52041__$1);
var G__52043 = cljs.core.chunk_rest(seq__51672_52041__$1);
var G__52044 = c__4550__auto___52042;
var G__52045 = cljs.core.count(c__4550__auto___52042);
var G__52046 = (0);
seq__51672_51994 = G__52043;
chunk__51673_51995 = G__52044;
count__51674_51996 = G__52045;
i__51675_51997 = G__52046;
continue;
} else {
var child_struct_52047 = cljs.core.first(seq__51672_52041__$1);
var children_52048 = shadow.dom.dom_node(child_struct_52047);
if(cljs.core.seq_QMARK_(children_52048)){
var seq__51702_52049 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52048));
var chunk__51704_52050 = null;
var count__51705_52051 = (0);
var i__51706_52052 = (0);
while(true){
if((i__51706_52052 < count__51705_52051)){
var child_52053 = chunk__51704_52050.cljs$core$IIndexed$_nth$arity$2(null,i__51706_52052);
if(cljs.core.truth_(child_52053)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52053);


var G__52054 = seq__51702_52049;
var G__52055 = chunk__51704_52050;
var G__52056 = count__51705_52051;
var G__52057 = (i__51706_52052 + (1));
seq__51702_52049 = G__52054;
chunk__51704_52050 = G__52055;
count__51705_52051 = G__52056;
i__51706_52052 = G__52057;
continue;
} else {
var G__52058 = seq__51702_52049;
var G__52059 = chunk__51704_52050;
var G__52060 = count__51705_52051;
var G__52061 = (i__51706_52052 + (1));
seq__51702_52049 = G__52058;
chunk__51704_52050 = G__52059;
count__51705_52051 = G__52060;
i__51706_52052 = G__52061;
continue;
}
} else {
var temp__5804__auto___52062__$1 = cljs.core.seq(seq__51702_52049);
if(temp__5804__auto___52062__$1){
var seq__51702_52064__$1 = temp__5804__auto___52062__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51702_52064__$1)){
var c__4550__auto___52066 = cljs.core.chunk_first(seq__51702_52064__$1);
var G__52067 = cljs.core.chunk_rest(seq__51702_52064__$1);
var G__52068 = c__4550__auto___52066;
var G__52069 = cljs.core.count(c__4550__auto___52066);
var G__52070 = (0);
seq__51702_52049 = G__52067;
chunk__51704_52050 = G__52068;
count__51705_52051 = G__52069;
i__51706_52052 = G__52070;
continue;
} else {
var child_52072 = cljs.core.first(seq__51702_52064__$1);
if(cljs.core.truth_(child_52072)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52072);


var G__52073 = cljs.core.next(seq__51702_52064__$1);
var G__52074 = null;
var G__52075 = (0);
var G__52076 = (0);
seq__51702_52049 = G__52073;
chunk__51704_52050 = G__52074;
count__51705_52051 = G__52075;
i__51706_52052 = G__52076;
continue;
} else {
var G__52077 = cljs.core.next(seq__51702_52064__$1);
var G__52078 = null;
var G__52079 = (0);
var G__52080 = (0);
seq__51702_52049 = G__52077;
chunk__51704_52050 = G__52078;
count__51705_52051 = G__52079;
i__51706_52052 = G__52080;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52048);
}


var G__52081 = cljs.core.next(seq__51672_52041__$1);
var G__52082 = null;
var G__52083 = (0);
var G__52084 = (0);
seq__51672_51994 = G__52081;
chunk__51673_51995 = G__52082;
count__51674_51996 = G__52083;
i__51675_51997 = G__52084;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__51710 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__51710);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51716 = cljs.core.seq(node);
var chunk__51717 = null;
var count__51718 = (0);
var i__51719 = (0);
while(true){
if((i__51719 < count__51718)){
var n = chunk__51717.cljs$core$IIndexed$_nth$arity$2(null,i__51719);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52085 = seq__51716;
var G__52086 = chunk__51717;
var G__52087 = count__51718;
var G__52088 = (i__51719 + (1));
seq__51716 = G__52085;
chunk__51717 = G__52086;
count__51718 = G__52087;
i__51719 = G__52088;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51716);
if(temp__5804__auto__){
var seq__51716__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51716__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51716__$1);
var G__52089 = cljs.core.chunk_rest(seq__51716__$1);
var G__52090 = c__4550__auto__;
var G__52091 = cljs.core.count(c__4550__auto__);
var G__52092 = (0);
seq__51716 = G__52089;
chunk__51717 = G__52090;
count__51718 = G__52091;
i__51719 = G__52092;
continue;
} else {
var n = cljs.core.first(seq__51716__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52093 = cljs.core.next(seq__51716__$1);
var G__52094 = null;
var G__52095 = (0);
var G__52096 = (0);
seq__51716 = G__52093;
chunk__51717 = G__52094;
count__51718 = G__52095;
i__51719 = G__52096;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__51735 = shadow.dom.dom_node(new$);
var G__51736 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__51735,G__51736);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51738 = arguments.length;
switch (G__51738) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51749 = arguments.length;
switch (G__51749) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51751 = arguments.length;
switch (G__51751) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52103 = arguments.length;
var i__4731__auto___52104 = (0);
while(true){
if((i__4731__auto___52104 < len__4730__auto___52103)){
args__4736__auto__.push((arguments[i__4731__auto___52104]));

var G__52105 = (i__4731__auto___52104 + (1));
i__4731__auto___52104 = G__52105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51754_52106 = cljs.core.seq(nodes);
var chunk__51755_52107 = null;
var count__51756_52108 = (0);
var i__51757_52109 = (0);
while(true){
if((i__51757_52109 < count__51756_52108)){
var node_52110 = chunk__51755_52107.cljs$core$IIndexed$_nth$arity$2(null,i__51757_52109);
fragment.appendChild(shadow.dom._to_dom(node_52110));


var G__52111 = seq__51754_52106;
var G__52112 = chunk__51755_52107;
var G__52113 = count__51756_52108;
var G__52114 = (i__51757_52109 + (1));
seq__51754_52106 = G__52111;
chunk__51755_52107 = G__52112;
count__51756_52108 = G__52113;
i__51757_52109 = G__52114;
continue;
} else {
var temp__5804__auto___52115 = cljs.core.seq(seq__51754_52106);
if(temp__5804__auto___52115){
var seq__51754_52116__$1 = temp__5804__auto___52115;
if(cljs.core.chunked_seq_QMARK_(seq__51754_52116__$1)){
var c__4550__auto___52117 = cljs.core.chunk_first(seq__51754_52116__$1);
var G__52118 = cljs.core.chunk_rest(seq__51754_52116__$1);
var G__52119 = c__4550__auto___52117;
var G__52120 = cljs.core.count(c__4550__auto___52117);
var G__52121 = (0);
seq__51754_52106 = G__52118;
chunk__51755_52107 = G__52119;
count__51756_52108 = G__52120;
i__51757_52109 = G__52121;
continue;
} else {
var node_52122 = cljs.core.first(seq__51754_52116__$1);
fragment.appendChild(shadow.dom._to_dom(node_52122));


var G__52123 = cljs.core.next(seq__51754_52116__$1);
var G__52124 = null;
var G__52125 = (0);
var G__52126 = (0);
seq__51754_52106 = G__52123;
chunk__51755_52107 = G__52124;
count__51756_52108 = G__52125;
i__51757_52109 = G__52126;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq51752){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51752));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51758_52127 = cljs.core.seq(scripts);
var chunk__51759_52128 = null;
var count__51760_52129 = (0);
var i__51761_52130 = (0);
while(true){
if((i__51761_52130 < count__51760_52129)){
var vec__51768_52131 = chunk__51759_52128.cljs$core$IIndexed$_nth$arity$2(null,i__51761_52130);
var script_tag_52132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51768_52131,(0),null);
var script_body_52133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51768_52131,(1),null);
eval(script_body_52133);


var G__52135 = seq__51758_52127;
var G__52136 = chunk__51759_52128;
var G__52137 = count__51760_52129;
var G__52138 = (i__51761_52130 + (1));
seq__51758_52127 = G__52135;
chunk__51759_52128 = G__52136;
count__51760_52129 = G__52137;
i__51761_52130 = G__52138;
continue;
} else {
var temp__5804__auto___52139 = cljs.core.seq(seq__51758_52127);
if(temp__5804__auto___52139){
var seq__51758_52140__$1 = temp__5804__auto___52139;
if(cljs.core.chunked_seq_QMARK_(seq__51758_52140__$1)){
var c__4550__auto___52141 = cljs.core.chunk_first(seq__51758_52140__$1);
var G__52142 = cljs.core.chunk_rest(seq__51758_52140__$1);
var G__52143 = c__4550__auto___52141;
var G__52144 = cljs.core.count(c__4550__auto___52141);
var G__52145 = (0);
seq__51758_52127 = G__52142;
chunk__51759_52128 = G__52143;
count__51760_52129 = G__52144;
i__51761_52130 = G__52145;
continue;
} else {
var vec__51771_52146 = cljs.core.first(seq__51758_52140__$1);
var script_tag_52147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51771_52146,(0),null);
var script_body_52148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51771_52146,(1),null);
eval(script_body_52148);


var G__52149 = cljs.core.next(seq__51758_52140__$1);
var G__52150 = null;
var G__52151 = (0);
var G__52152 = (0);
seq__51758_52127 = G__52149;
chunk__51759_52128 = G__52150;
count__51760_52129 = G__52151;
i__51761_52130 = G__52152;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__51774){
var vec__51775 = p__51774;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__51778 = shadow.dom.dom_node(el);
var G__51779 = cls;
return goog.dom.getAncestorByClass(G__51778,G__51779);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51781 = arguments.length;
switch (G__51781) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__51782 = shadow.dom.dom_node(el);
var G__51783 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__51782,G__51783);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__51784 = shadow.dom.dom_node(el);
var G__51785 = cljs.core.name(tag);
var G__51786 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__51784,G__51785,G__51786);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__51787 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__51787);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__51788 = shadow.dom.dom_node(dom);
var G__51789 = value;
return goog.dom.forms.setValue(G__51788,G__51789);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51790 = cljs.core.seq(style_keys);
var chunk__51791 = null;
var count__51792 = (0);
var i__51793 = (0);
while(true){
if((i__51793 < count__51792)){
var it = chunk__51791.cljs$core$IIndexed$_nth$arity$2(null,i__51793);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52160 = seq__51790;
var G__52161 = chunk__51791;
var G__52162 = count__51792;
var G__52163 = (i__51793 + (1));
seq__51790 = G__52160;
chunk__51791 = G__52161;
count__51792 = G__52162;
i__51793 = G__52163;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51790);
if(temp__5804__auto__){
var seq__51790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51790__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51790__$1);
var G__52164 = cljs.core.chunk_rest(seq__51790__$1);
var G__52165 = c__4550__auto__;
var G__52166 = cljs.core.count(c__4550__auto__);
var G__52167 = (0);
seq__51790 = G__52164;
chunk__51791 = G__52165;
count__51792 = G__52166;
i__51793 = G__52167;
continue;
} else {
var it = cljs.core.first(seq__51790__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52168 = cljs.core.next(seq__51790__$1);
var G__52169 = null;
var G__52170 = (0);
var G__52171 = (0);
seq__51790 = G__52168;
chunk__51791 = G__52169;
count__51792 = G__52170;
i__51793 = G__52171;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k51795,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__51799 = k51795;
var G__51799__$1 = (((G__51799 instanceof cljs.core.Keyword))?G__51799.fqn:null);
switch (G__51799__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51795,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__51800){
var vec__51801 = p__51800;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51801,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51801,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51794){
var self__ = this;
var G__51794__$1 = this;
return (new cljs.core.RecordIter((0),G__51794__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__51804 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__51804(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51796,other51797){
var self__ = this;
var this51796__$1 = this;
return (((!((other51797 == null)))) && ((this51796__$1.constructor === other51797.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51796__$1.x,other51797.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51796__$1.y,other51797.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51796__$1.__extmap,other51797.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__51794){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__51805 = cljs.core.keyword_identical_QMARK_;
var expr__51806 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__51808 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__51809 = expr__51806;
return (pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(G__51808,G__51809) : pred__51805.call(null,G__51808,G__51809));
})())){
return (new shadow.dom.Coordinate(G__51794,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51810 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__51811 = expr__51806;
return (pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(G__51810,G__51811) : pred__51805.call(null,G__51810,G__51811));
})())){
return (new shadow.dom.Coordinate(self__.x,G__51794,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__51794),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__51794){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51794,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51798){
var extmap__4424__auto__ = (function (){var G__51812 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51798,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51798)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51812);
} else {
return G__51812;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51798),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51798),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__51813 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__51813);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__51814 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__51814);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__51815 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__51815);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k51817,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__51821 = k51817;
var G__51821__$1 = (((G__51821 instanceof cljs.core.Keyword))?G__51821.fqn:null);
switch (G__51821__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51817,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__51822){
var vec__51823 = p__51822;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51823,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51823,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51816){
var self__ = this;
var G__51816__$1 = this;
return (new cljs.core.RecordIter((0),G__51816__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__51826 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__51826(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51818,other51819){
var self__ = this;
var this51818__$1 = this;
return (((!((other51819 == null)))) && ((this51818__$1.constructor === other51819.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51818__$1.w,other51819.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51818__$1.h,other51819.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51818__$1.__extmap,other51819.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__51816){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__51827 = cljs.core.keyword_identical_QMARK_;
var expr__51828 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__51830 = new cljs.core.Keyword(null,"w","w",354169001);
var G__51831 = expr__51828;
return (pred__51827.cljs$core$IFn$_invoke$arity$2 ? pred__51827.cljs$core$IFn$_invoke$arity$2(G__51830,G__51831) : pred__51827.call(null,G__51830,G__51831));
})())){
return (new shadow.dom.Size(G__51816,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__51832 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__51833 = expr__51828;
return (pred__51827.cljs$core$IFn$_invoke$arity$2 ? pred__51827.cljs$core$IFn$_invoke$arity$2(G__51832,G__51833) : pred__51827.call(null,G__51832,G__51833));
})())){
return (new shadow.dom.Size(self__.w,G__51816,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__51816),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__51816){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51816,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51820){
var extmap__4424__auto__ = (function (){var G__51834 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51820,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51820)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51834);
} else {
return G__51834;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51820),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51820),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__51835 = shadow.dom.dom_node(el);
return goog.style.getSize(G__51835);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__52223 = (i + (1));
var G__52224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52223;
ret = G__52224;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51840){
var vec__51841 = p__51840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51841,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51845 = arguments.length;
switch (G__51845) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__51846_52232 = new_node;
var G__51847_52233 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__51846_52232,G__51847_52233);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__51848_52234 = new_node;
var G__51849_52235 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__51848_52234,G__51849_52235);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52236 = ps;
var G__52237 = (i + (1));
el__$1 = G__52236;
i = G__52237;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__51850 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__51850);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__51851 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__51851);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__51852 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__51852);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51853 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51853,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51853,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51853,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51856_52244 = cljs.core.seq(props);
var chunk__51857_52245 = null;
var count__51858_52246 = (0);
var i__51859_52247 = (0);
while(true){
if((i__51859_52247 < count__51858_52246)){
var vec__51866_52248 = chunk__51857_52245.cljs$core$IIndexed$_nth$arity$2(null,i__51859_52247);
var k_52249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51866_52248,(0),null);
var v_52250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51866_52248,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_52249);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52249),v_52250);


var G__52254 = seq__51856_52244;
var G__52255 = chunk__51857_52245;
var G__52256 = count__51858_52246;
var G__52257 = (i__51859_52247 + (1));
seq__51856_52244 = G__52254;
chunk__51857_52245 = G__52255;
count__51858_52246 = G__52256;
i__51859_52247 = G__52257;
continue;
} else {
var temp__5804__auto___52258 = cljs.core.seq(seq__51856_52244);
if(temp__5804__auto___52258){
var seq__51856_52259__$1 = temp__5804__auto___52258;
if(cljs.core.chunked_seq_QMARK_(seq__51856_52259__$1)){
var c__4550__auto___52260 = cljs.core.chunk_first(seq__51856_52259__$1);
var G__52261 = cljs.core.chunk_rest(seq__51856_52259__$1);
var G__52262 = c__4550__auto___52260;
var G__52263 = cljs.core.count(c__4550__auto___52260);
var G__52264 = (0);
seq__51856_52244 = G__52261;
chunk__51857_52245 = G__52262;
count__51858_52246 = G__52263;
i__51859_52247 = G__52264;
continue;
} else {
var vec__51869_52265 = cljs.core.first(seq__51856_52259__$1);
var k_52266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869_52265,(0),null);
var v_52267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51869_52265,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_52266);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52266),v_52267);


var G__52268 = cljs.core.next(seq__51856_52259__$1);
var G__52269 = null;
var G__52270 = (0);
var G__52271 = (0);
seq__51856_52244 = G__52268;
chunk__51857_52245 = G__52269;
count__51858_52246 = G__52270;
i__51859_52247 = G__52271;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51873 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873,(1),null);
var seq__51876_52275 = cljs.core.seq(node_children);
var chunk__51878_52276 = null;
var count__51879_52277 = (0);
var i__51880_52278 = (0);
while(true){
if((i__51880_52278 < count__51879_52277)){
var child_struct_52279 = chunk__51878_52276.cljs$core$IIndexed$_nth$arity$2(null,i__51880_52278);
if((!((child_struct_52279 == null)))){
if(typeof child_struct_52279 === 'string'){
var text_52280 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52280),child_struct_52279].join(''));
} else {
var children_52281 = shadow.dom.svg_node(child_struct_52279);
if(cljs.core.seq_QMARK_(children_52281)){
var seq__51894_52282 = cljs.core.seq(children_52281);
var chunk__51896_52283 = null;
var count__51897_52284 = (0);
var i__51898_52285 = (0);
while(true){
if((i__51898_52285 < count__51897_52284)){
var child_52286 = chunk__51896_52283.cljs$core$IIndexed$_nth$arity$2(null,i__51898_52285);
if(cljs.core.truth_(child_52286)){
node.appendChild(child_52286);


var G__52287 = seq__51894_52282;
var G__52288 = chunk__51896_52283;
var G__52289 = count__51897_52284;
var G__52290 = (i__51898_52285 + (1));
seq__51894_52282 = G__52287;
chunk__51896_52283 = G__52288;
count__51897_52284 = G__52289;
i__51898_52285 = G__52290;
continue;
} else {
var G__52291 = seq__51894_52282;
var G__52292 = chunk__51896_52283;
var G__52293 = count__51897_52284;
var G__52294 = (i__51898_52285 + (1));
seq__51894_52282 = G__52291;
chunk__51896_52283 = G__52292;
count__51897_52284 = G__52293;
i__51898_52285 = G__52294;
continue;
}
} else {
var temp__5804__auto___52295 = cljs.core.seq(seq__51894_52282);
if(temp__5804__auto___52295){
var seq__51894_52296__$1 = temp__5804__auto___52295;
if(cljs.core.chunked_seq_QMARK_(seq__51894_52296__$1)){
var c__4550__auto___52297 = cljs.core.chunk_first(seq__51894_52296__$1);
var G__52298 = cljs.core.chunk_rest(seq__51894_52296__$1);
var G__52299 = c__4550__auto___52297;
var G__52300 = cljs.core.count(c__4550__auto___52297);
var G__52301 = (0);
seq__51894_52282 = G__52298;
chunk__51896_52283 = G__52299;
count__51897_52284 = G__52300;
i__51898_52285 = G__52301;
continue;
} else {
var child_52302 = cljs.core.first(seq__51894_52296__$1);
if(cljs.core.truth_(child_52302)){
node.appendChild(child_52302);


var G__52303 = cljs.core.next(seq__51894_52296__$1);
var G__52304 = null;
var G__52305 = (0);
var G__52306 = (0);
seq__51894_52282 = G__52303;
chunk__51896_52283 = G__52304;
count__51897_52284 = G__52305;
i__51898_52285 = G__52306;
continue;
} else {
var G__52307 = cljs.core.next(seq__51894_52296__$1);
var G__52308 = null;
var G__52309 = (0);
var G__52310 = (0);
seq__51894_52282 = G__52307;
chunk__51896_52283 = G__52308;
count__51897_52284 = G__52309;
i__51898_52285 = G__52310;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52281);
}
}


var G__52311 = seq__51876_52275;
var G__52312 = chunk__51878_52276;
var G__52313 = count__51879_52277;
var G__52314 = (i__51880_52278 + (1));
seq__51876_52275 = G__52311;
chunk__51878_52276 = G__52312;
count__51879_52277 = G__52313;
i__51880_52278 = G__52314;
continue;
} else {
var G__52315 = seq__51876_52275;
var G__52316 = chunk__51878_52276;
var G__52317 = count__51879_52277;
var G__52318 = (i__51880_52278 + (1));
seq__51876_52275 = G__52315;
chunk__51878_52276 = G__52316;
count__51879_52277 = G__52317;
i__51880_52278 = G__52318;
continue;
}
} else {
var temp__5804__auto___52319 = cljs.core.seq(seq__51876_52275);
if(temp__5804__auto___52319){
var seq__51876_52320__$1 = temp__5804__auto___52319;
if(cljs.core.chunked_seq_QMARK_(seq__51876_52320__$1)){
var c__4550__auto___52321 = cljs.core.chunk_first(seq__51876_52320__$1);
var G__52322 = cljs.core.chunk_rest(seq__51876_52320__$1);
var G__52323 = c__4550__auto___52321;
var G__52324 = cljs.core.count(c__4550__auto___52321);
var G__52325 = (0);
seq__51876_52275 = G__52322;
chunk__51878_52276 = G__52323;
count__51879_52277 = G__52324;
i__51880_52278 = G__52325;
continue;
} else {
var child_struct_52326 = cljs.core.first(seq__51876_52320__$1);
if((!((child_struct_52326 == null)))){
if(typeof child_struct_52326 === 'string'){
var text_52327 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52327),child_struct_52326].join(''));
} else {
var children_52328 = shadow.dom.svg_node(child_struct_52326);
if(cljs.core.seq_QMARK_(children_52328)){
var seq__51900_52329 = cljs.core.seq(children_52328);
var chunk__51902_52330 = null;
var count__51903_52331 = (0);
var i__51904_52332 = (0);
while(true){
if((i__51904_52332 < count__51903_52331)){
var child_52333 = chunk__51902_52330.cljs$core$IIndexed$_nth$arity$2(null,i__51904_52332);
if(cljs.core.truth_(child_52333)){
node.appendChild(child_52333);


var G__52334 = seq__51900_52329;
var G__52335 = chunk__51902_52330;
var G__52336 = count__51903_52331;
var G__52337 = (i__51904_52332 + (1));
seq__51900_52329 = G__52334;
chunk__51902_52330 = G__52335;
count__51903_52331 = G__52336;
i__51904_52332 = G__52337;
continue;
} else {
var G__52340 = seq__51900_52329;
var G__52341 = chunk__51902_52330;
var G__52342 = count__51903_52331;
var G__52343 = (i__51904_52332 + (1));
seq__51900_52329 = G__52340;
chunk__51902_52330 = G__52341;
count__51903_52331 = G__52342;
i__51904_52332 = G__52343;
continue;
}
} else {
var temp__5804__auto___52344__$1 = cljs.core.seq(seq__51900_52329);
if(temp__5804__auto___52344__$1){
var seq__51900_52345__$1 = temp__5804__auto___52344__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51900_52345__$1)){
var c__4550__auto___52346 = cljs.core.chunk_first(seq__51900_52345__$1);
var G__52348 = cljs.core.chunk_rest(seq__51900_52345__$1);
var G__52349 = c__4550__auto___52346;
var G__52350 = cljs.core.count(c__4550__auto___52346);
var G__52351 = (0);
seq__51900_52329 = G__52348;
chunk__51902_52330 = G__52349;
count__51903_52331 = G__52350;
i__51904_52332 = G__52351;
continue;
} else {
var child_52353 = cljs.core.first(seq__51900_52345__$1);
if(cljs.core.truth_(child_52353)){
node.appendChild(child_52353);


var G__52354 = cljs.core.next(seq__51900_52345__$1);
var G__52355 = null;
var G__52356 = (0);
var G__52357 = (0);
seq__51900_52329 = G__52354;
chunk__51902_52330 = G__52355;
count__51903_52331 = G__52356;
i__51904_52332 = G__52357;
continue;
} else {
var G__52358 = cljs.core.next(seq__51900_52345__$1);
var G__52359 = null;
var G__52360 = (0);
var G__52361 = (0);
seq__51900_52329 = G__52358;
chunk__51902_52330 = G__52359;
count__51903_52331 = G__52360;
i__51904_52332 = G__52361;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52328);
}
}


var G__52362 = cljs.core.next(seq__51876_52320__$1);
var G__52363 = null;
var G__52364 = (0);
var G__52365 = (0);
seq__51876_52275 = G__52362;
chunk__51878_52276 = G__52363;
count__51879_52277 = G__52364;
i__51880_52278 = G__52365;
continue;
} else {
var G__52366 = cljs.core.next(seq__51876_52320__$1);
var G__52367 = null;
var G__52368 = (0);
var G__52369 = (0);
seq__51876_52275 = G__52366;
chunk__51878_52276 = G__52367;
count__51879_52277 = G__52368;
i__51880_52278 = G__52369;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__51906_52370 = shadow.dom._to_svg;
var G__51907_52371 = "string";
var G__51908_52372 = ((function (G__51906_52370,G__51907_52371){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__51906_52370,G__51907_52371))
;
goog.object.set(G__51906_52370,G__51907_52371,G__51908_52372);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__51909_52377 = shadow.dom._to_svg;
var G__51910_52378 = "null";
var G__51911_52379 = ((function (G__51909_52377,G__51910_52378){
return (function (_){
return null;
});})(G__51909_52377,G__51910_52378))
;
goog.object.set(G__51909_52377,G__51910_52378,G__51911_52379);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52383 = arguments.length;
var i__4731__auto___52384 = (0);
while(true){
if((i__4731__auto___52384 < len__4730__auto___52383)){
args__4736__auto__.push((arguments[i__4731__auto___52384]));

var G__52385 = (i__4731__auto___52384 + (1));
i__4731__auto___52384 = G__52385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq51912){
var G__51913 = cljs.core.first(seq51912);
var seq51912__$1 = cljs.core.next(seq51912);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51913,seq51912__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51915 = arguments.length;
switch (G__51915) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__51916_52390 = shadow.dom.dom_node(el);
var G__51917_52391 = cljs.core.name(event);
var G__51918_52392 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__51916_52390,G__51917_52391,G__51918_52392) : shadow.dom.dom_listen.call(null,G__51916_52390,G__51917_52391,G__51918_52392));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__42006__auto___52393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___52393,buf,chan,event_fn){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___52393,buf,chan,event_fn){
return (function (state_51923){
var state_val_51924 = (state_51923[(1)]);
if((state_val_51924 === (1))){
var state_51923__$1 = state_51923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51923__$1,(2),once_or_cleanup);
} else {
if((state_val_51924 === (2))){
var inst_51920 = (state_51923[(2)]);
var inst_51921 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51923__$1 = (function (){var statearr_51925 = state_51923;
(statearr_51925[(7)] = inst_51920);

return statearr_51925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51923__$1,inst_51921);
} else {
return null;
}
}
});})(c__42006__auto___52393,buf,chan,event_fn))
;
return ((function (switch__41732__auto__,c__42006__auto___52393,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__41733__auto__ = null;
var shadow$dom$state_machine__41733__auto____0 = (function (){
var statearr_51926 = [null,null,null,null,null,null,null,null];
(statearr_51926[(0)] = shadow$dom$state_machine__41733__auto__);

(statearr_51926[(1)] = (1));

return statearr_51926;
});
var shadow$dom$state_machine__41733__auto____1 = (function (state_51923){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_51923);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e51927){var ex__41736__auto__ = e51927;
var statearr_51928_52397 = state_51923;
(statearr_51928_52397[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_51923[(4)]))){
var statearr_51929_52398 = state_51923;
(statearr_51929_52398[(1)] = cljs.core.first((state_51923[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52399 = state_51923;
state_51923 = G__52399;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
shadow$dom$state_machine__41733__auto__ = function(state_51923){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41733__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41733__auto____1.call(this,state_51923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41733__auto____0;
shadow$dom$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41733__auto____1;
return shadow$dom$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___52393,buf,chan,event_fn))
})();
var state__42008__auto__ = (function (){var statearr_51930 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_51930[(6)] = c__42006__auto___52393);

return statearr_51930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___52393,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
