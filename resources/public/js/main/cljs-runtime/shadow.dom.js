goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_58590 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_58590(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_58595 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_58595(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58219 = coll;
var G__58220 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58219,G__58220) : shadow.dom.lazy_native_coll_seq.call(null,G__58219,G__58220));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

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
var G__58223 = arguments.length;
switch (G__58223) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58225 = arguments.length;
switch (G__58225) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58227 = arguments.length;
switch (G__58227) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58229 = arguments.length;
switch (G__58229) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58231 = arguments.length;
switch (G__58231) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58233 = arguments.length;
switch (G__58233) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58234){if((e58234 instanceof Object)){
var e = e58234;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58234;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58235 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58236 = null;
var count__58237 = (0);
var i__58238 = (0);
while(true){
if((i__58238 < count__58237)){
var el = chunk__58236.cljs$core$IIndexed$_nth$arity$2(null,i__58238);
var handler_58608__$1 = ((function (seq__58235,chunk__58236,count__58237,i__58238,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58235,chunk__58236,count__58237,i__58238,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58608__$1);


var G__58609 = seq__58235;
var G__58610 = chunk__58236;
var G__58611 = count__58237;
var G__58612 = (i__58238 + (1));
seq__58235 = G__58609;
chunk__58236 = G__58610;
count__58237 = G__58611;
i__58238 = G__58612;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58235);
if(temp__5804__auto__){
var seq__58235__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58235__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58235__$1);
var G__58613 = cljs.core.chunk_rest(seq__58235__$1);
var G__58614 = c__5568__auto__;
var G__58615 = cljs.core.count(c__5568__auto__);
var G__58616 = (0);
seq__58235 = G__58613;
chunk__58236 = G__58614;
count__58237 = G__58615;
i__58238 = G__58616;
continue;
} else {
var el = cljs.core.first(seq__58235__$1);
var handler_58617__$1 = ((function (seq__58235,chunk__58236,count__58237,i__58238,el,seq__58235__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58235,chunk__58236,count__58237,i__58238,el,seq__58235__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58617__$1);


var G__58618 = cljs.core.next(seq__58235__$1);
var G__58619 = null;
var G__58620 = (0);
var G__58621 = (0);
seq__58235 = G__58618;
chunk__58236 = G__58619;
count__58237 = G__58620;
i__58238 = G__58621;
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
var G__58240 = arguments.length;
switch (G__58240) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58241 = cljs.core.seq(events);
var chunk__58242 = null;
var count__58243 = (0);
var i__58244 = (0);
while(true){
if((i__58244 < count__58243)){
var vec__58251 = chunk__58242.cljs$core$IIndexed$_nth$arity$2(null,i__58244);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58251,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58251,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58625 = seq__58241;
var G__58626 = chunk__58242;
var G__58627 = count__58243;
var G__58628 = (i__58244 + (1));
seq__58241 = G__58625;
chunk__58242 = G__58626;
count__58243 = G__58627;
i__58244 = G__58628;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58241);
if(temp__5804__auto__){
var seq__58241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58241__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58241__$1);
var G__58629 = cljs.core.chunk_rest(seq__58241__$1);
var G__58630 = c__5568__auto__;
var G__58631 = cljs.core.count(c__5568__auto__);
var G__58632 = (0);
seq__58241 = G__58629;
chunk__58242 = G__58630;
count__58243 = G__58631;
i__58244 = G__58632;
continue;
} else {
var vec__58254 = cljs.core.first(seq__58241__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58254,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58633 = cljs.core.next(seq__58241__$1);
var G__58634 = null;
var G__58635 = (0);
var G__58636 = (0);
seq__58241 = G__58633;
chunk__58242 = G__58634;
count__58243 = G__58635;
i__58244 = G__58636;
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
var seq__58257 = cljs.core.seq(styles);
var chunk__58258 = null;
var count__58259 = (0);
var i__58260 = (0);
while(true){
if((i__58260 < count__58259)){
var vec__58267 = chunk__58258.cljs$core$IIndexed$_nth$arity$2(null,i__58260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58267,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58638 = seq__58257;
var G__58639 = chunk__58258;
var G__58640 = count__58259;
var G__58641 = (i__58260 + (1));
seq__58257 = G__58638;
chunk__58258 = G__58639;
count__58259 = G__58640;
i__58260 = G__58641;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58257);
if(temp__5804__auto__){
var seq__58257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58257__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58257__$1);
var G__58642 = cljs.core.chunk_rest(seq__58257__$1);
var G__58643 = c__5568__auto__;
var G__58644 = cljs.core.count(c__5568__auto__);
var G__58645 = (0);
seq__58257 = G__58642;
chunk__58258 = G__58643;
count__58259 = G__58644;
i__58260 = G__58645;
continue;
} else {
var vec__58270 = cljs.core.first(seq__58257__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58270,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58646 = cljs.core.next(seq__58257__$1);
var G__58647 = null;
var G__58648 = (0);
var G__58649 = (0);
seq__58257 = G__58646;
chunk__58258 = G__58647;
count__58259 = G__58648;
i__58260 = G__58649;
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
var G__58273_58651 = key;
var G__58273_58652__$1 = (((G__58273_58651 instanceof cljs.core.Keyword))?G__58273_58651.fqn:null);
switch (G__58273_58652__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_58656 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_58656,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_58656,"aria-");
}
})())){
el.setAttribute(ks_58656,value);
} else {
(el[ks_58656] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58274){
var map__58275 = p__58274;
var map__58275__$1 = cljs.core.__destructure_map(map__58275);
var props = map__58275__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58276 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58276,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58276,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58276,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58279 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58279,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58279;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58281 = arguments.length;
switch (G__58281) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
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
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
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
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58282){
var vec__58283 = p__58282;
var seq__58284 = cljs.core.seq(vec__58283);
var first__58285 = cljs.core.first(seq__58284);
var seq__58284__$1 = cljs.core.next(seq__58284);
var nn = first__58285;
var first__58285__$1 = cljs.core.first(seq__58284__$1);
var seq__58284__$2 = cljs.core.next(seq__58284__$1);
var np = first__58285__$1;
var nc = seq__58284__$2;
var node = vec__58283;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58286 = nn;
var G__58287 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58286,G__58287) : create_fn.call(null,G__58286,G__58287));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58288 = nn;
var G__58289 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58288,G__58289) : create_fn.call(null,G__58288,G__58289));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58290 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58290,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58290,(1),null);
var seq__58293_58663 = cljs.core.seq(node_children);
var chunk__58294_58664 = null;
var count__58295_58665 = (0);
var i__58296_58666 = (0);
while(true){
if((i__58296_58666 < count__58295_58665)){
var child_struct_58667 = chunk__58294_58664.cljs$core$IIndexed$_nth$arity$2(null,i__58296_58666);
var children_58668 = shadow.dom.dom_node(child_struct_58667);
if(cljs.core.seq_QMARK_(children_58668)){
var seq__58309_58669 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58668));
var chunk__58311_58670 = null;
var count__58312_58671 = (0);
var i__58313_58672 = (0);
while(true){
if((i__58313_58672 < count__58312_58671)){
var child_58673 = chunk__58311_58670.cljs$core$IIndexed$_nth$arity$2(null,i__58313_58672);
if(cljs.core.truth_(child_58673)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58673);


var G__58674 = seq__58309_58669;
var G__58675 = chunk__58311_58670;
var G__58676 = count__58312_58671;
var G__58677 = (i__58313_58672 + (1));
seq__58309_58669 = G__58674;
chunk__58311_58670 = G__58675;
count__58312_58671 = G__58676;
i__58313_58672 = G__58677;
continue;
} else {
var G__58678 = seq__58309_58669;
var G__58679 = chunk__58311_58670;
var G__58680 = count__58312_58671;
var G__58681 = (i__58313_58672 + (1));
seq__58309_58669 = G__58678;
chunk__58311_58670 = G__58679;
count__58312_58671 = G__58680;
i__58313_58672 = G__58681;
continue;
}
} else {
var temp__5804__auto___58682 = cljs.core.seq(seq__58309_58669);
if(temp__5804__auto___58682){
var seq__58309_58683__$1 = temp__5804__auto___58682;
if(cljs.core.chunked_seq_QMARK_(seq__58309_58683__$1)){
var c__5568__auto___58684 = cljs.core.chunk_first(seq__58309_58683__$1);
var G__58685 = cljs.core.chunk_rest(seq__58309_58683__$1);
var G__58686 = c__5568__auto___58684;
var G__58687 = cljs.core.count(c__5568__auto___58684);
var G__58688 = (0);
seq__58309_58669 = G__58685;
chunk__58311_58670 = G__58686;
count__58312_58671 = G__58687;
i__58313_58672 = G__58688;
continue;
} else {
var child_58689 = cljs.core.first(seq__58309_58683__$1);
if(cljs.core.truth_(child_58689)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58689);


var G__58690 = cljs.core.next(seq__58309_58683__$1);
var G__58691 = null;
var G__58692 = (0);
var G__58693 = (0);
seq__58309_58669 = G__58690;
chunk__58311_58670 = G__58691;
count__58312_58671 = G__58692;
i__58313_58672 = G__58693;
continue;
} else {
var G__58694 = cljs.core.next(seq__58309_58683__$1);
var G__58695 = null;
var G__58696 = (0);
var G__58697 = (0);
seq__58309_58669 = G__58694;
chunk__58311_58670 = G__58695;
count__58312_58671 = G__58696;
i__58313_58672 = G__58697;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58668);
}


var G__58698 = seq__58293_58663;
var G__58699 = chunk__58294_58664;
var G__58700 = count__58295_58665;
var G__58701 = (i__58296_58666 + (1));
seq__58293_58663 = G__58698;
chunk__58294_58664 = G__58699;
count__58295_58665 = G__58700;
i__58296_58666 = G__58701;
continue;
} else {
var temp__5804__auto___58702 = cljs.core.seq(seq__58293_58663);
if(temp__5804__auto___58702){
var seq__58293_58703__$1 = temp__5804__auto___58702;
if(cljs.core.chunked_seq_QMARK_(seq__58293_58703__$1)){
var c__5568__auto___58704 = cljs.core.chunk_first(seq__58293_58703__$1);
var G__58705 = cljs.core.chunk_rest(seq__58293_58703__$1);
var G__58706 = c__5568__auto___58704;
var G__58707 = cljs.core.count(c__5568__auto___58704);
var G__58708 = (0);
seq__58293_58663 = G__58705;
chunk__58294_58664 = G__58706;
count__58295_58665 = G__58707;
i__58296_58666 = G__58708;
continue;
} else {
var child_struct_58709 = cljs.core.first(seq__58293_58703__$1);
var children_58710 = shadow.dom.dom_node(child_struct_58709);
if(cljs.core.seq_QMARK_(children_58710)){
var seq__58315_58711 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58710));
var chunk__58317_58712 = null;
var count__58318_58713 = (0);
var i__58319_58714 = (0);
while(true){
if((i__58319_58714 < count__58318_58713)){
var child_58715 = chunk__58317_58712.cljs$core$IIndexed$_nth$arity$2(null,i__58319_58714);
if(cljs.core.truth_(child_58715)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58715);


var G__58716 = seq__58315_58711;
var G__58717 = chunk__58317_58712;
var G__58718 = count__58318_58713;
var G__58719 = (i__58319_58714 + (1));
seq__58315_58711 = G__58716;
chunk__58317_58712 = G__58717;
count__58318_58713 = G__58718;
i__58319_58714 = G__58719;
continue;
} else {
var G__58720 = seq__58315_58711;
var G__58721 = chunk__58317_58712;
var G__58722 = count__58318_58713;
var G__58723 = (i__58319_58714 + (1));
seq__58315_58711 = G__58720;
chunk__58317_58712 = G__58721;
count__58318_58713 = G__58722;
i__58319_58714 = G__58723;
continue;
}
} else {
var temp__5804__auto___58724__$1 = cljs.core.seq(seq__58315_58711);
if(temp__5804__auto___58724__$1){
var seq__58315_58725__$1 = temp__5804__auto___58724__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58315_58725__$1)){
var c__5568__auto___58726 = cljs.core.chunk_first(seq__58315_58725__$1);
var G__58727 = cljs.core.chunk_rest(seq__58315_58725__$1);
var G__58728 = c__5568__auto___58726;
var G__58729 = cljs.core.count(c__5568__auto___58726);
var G__58730 = (0);
seq__58315_58711 = G__58727;
chunk__58317_58712 = G__58728;
count__58318_58713 = G__58729;
i__58319_58714 = G__58730;
continue;
} else {
var child_58731 = cljs.core.first(seq__58315_58725__$1);
if(cljs.core.truth_(child_58731)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58731);


var G__58732 = cljs.core.next(seq__58315_58725__$1);
var G__58733 = null;
var G__58734 = (0);
var G__58735 = (0);
seq__58315_58711 = G__58732;
chunk__58317_58712 = G__58733;
count__58318_58713 = G__58734;
i__58319_58714 = G__58735;
continue;
} else {
var G__58736 = cljs.core.next(seq__58315_58725__$1);
var G__58737 = null;
var G__58738 = (0);
var G__58739 = (0);
seq__58315_58711 = G__58736;
chunk__58317_58712 = G__58737;
count__58318_58713 = G__58738;
i__58319_58714 = G__58739;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58710);
}


var G__58740 = cljs.core.next(seq__58293_58703__$1);
var G__58741 = null;
var G__58742 = (0);
var G__58743 = (0);
seq__58293_58663 = G__58740;
chunk__58294_58664 = G__58741;
count__58295_58665 = G__58742;
i__58296_58666 = G__58743;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58322 = cljs.core.seq(node);
var chunk__58323 = null;
var count__58324 = (0);
var i__58325 = (0);
while(true){
if((i__58325 < count__58324)){
var n = chunk__58323.cljs$core$IIndexed$_nth$arity$2(null,i__58325);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58744 = seq__58322;
var G__58745 = chunk__58323;
var G__58746 = count__58324;
var G__58747 = (i__58325 + (1));
seq__58322 = G__58744;
chunk__58323 = G__58745;
count__58324 = G__58746;
i__58325 = G__58747;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58322);
if(temp__5804__auto__){
var seq__58322__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58322__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58322__$1);
var G__58748 = cljs.core.chunk_rest(seq__58322__$1);
var G__58749 = c__5568__auto__;
var G__58750 = cljs.core.count(c__5568__auto__);
var G__58751 = (0);
seq__58322 = G__58748;
chunk__58323 = G__58749;
count__58324 = G__58750;
i__58325 = G__58751;
continue;
} else {
var n = cljs.core.first(seq__58322__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58752 = cljs.core.next(seq__58322__$1);
var G__58753 = null;
var G__58754 = (0);
var G__58755 = (0);
seq__58322 = G__58752;
chunk__58323 = G__58753;
count__58324 = G__58754;
i__58325 = G__58755;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58327 = arguments.length;
switch (G__58327) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58329 = arguments.length;
switch (G__58329) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__58331 = arguments.length;
switch (G__58331) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58760 = arguments.length;
var i__5770__auto___58761 = (0);
while(true){
if((i__5770__auto___58761 < len__5769__auto___58760)){
args__5775__auto__.push((arguments[i__5770__auto___58761]));

var G__58762 = (i__5770__auto___58761 + (1));
i__5770__auto___58761 = G__58762;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58335_58763 = cljs.core.seq(nodes);
var chunk__58336_58764 = null;
var count__58337_58765 = (0);
var i__58338_58766 = (0);
while(true){
if((i__58338_58766 < count__58337_58765)){
var node_58767 = chunk__58336_58764.cljs$core$IIndexed$_nth$arity$2(null,i__58338_58766);
fragment.appendChild(shadow.dom._to_dom(node_58767));


var G__58768 = seq__58335_58763;
var G__58769 = chunk__58336_58764;
var G__58770 = count__58337_58765;
var G__58771 = (i__58338_58766 + (1));
seq__58335_58763 = G__58768;
chunk__58336_58764 = G__58769;
count__58337_58765 = G__58770;
i__58338_58766 = G__58771;
continue;
} else {
var temp__5804__auto___58772 = cljs.core.seq(seq__58335_58763);
if(temp__5804__auto___58772){
var seq__58335_58773__$1 = temp__5804__auto___58772;
if(cljs.core.chunked_seq_QMARK_(seq__58335_58773__$1)){
var c__5568__auto___58774 = cljs.core.chunk_first(seq__58335_58773__$1);
var G__58775 = cljs.core.chunk_rest(seq__58335_58773__$1);
var G__58776 = c__5568__auto___58774;
var G__58777 = cljs.core.count(c__5568__auto___58774);
var G__58778 = (0);
seq__58335_58763 = G__58775;
chunk__58336_58764 = G__58776;
count__58337_58765 = G__58777;
i__58338_58766 = G__58778;
continue;
} else {
var node_58779 = cljs.core.first(seq__58335_58773__$1);
fragment.appendChild(shadow.dom._to_dom(node_58779));


var G__58780 = cljs.core.next(seq__58335_58773__$1);
var G__58781 = null;
var G__58782 = (0);
var G__58783 = (0);
seq__58335_58763 = G__58780;
chunk__58336_58764 = G__58781;
count__58337_58765 = G__58782;
i__58338_58766 = G__58783;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58333){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58333));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58341_58784 = cljs.core.seq(scripts);
var chunk__58342_58785 = null;
var count__58343_58786 = (0);
var i__58344_58787 = (0);
while(true){
if((i__58344_58787 < count__58343_58786)){
var vec__58351_58788 = chunk__58342_58785.cljs$core$IIndexed$_nth$arity$2(null,i__58344_58787);
var script_tag_58789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58351_58788,(0),null);
var script_body_58790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58351_58788,(1),null);
eval(script_body_58790);


var G__58791 = seq__58341_58784;
var G__58792 = chunk__58342_58785;
var G__58793 = count__58343_58786;
var G__58794 = (i__58344_58787 + (1));
seq__58341_58784 = G__58791;
chunk__58342_58785 = G__58792;
count__58343_58786 = G__58793;
i__58344_58787 = G__58794;
continue;
} else {
var temp__5804__auto___58795 = cljs.core.seq(seq__58341_58784);
if(temp__5804__auto___58795){
var seq__58341_58796__$1 = temp__5804__auto___58795;
if(cljs.core.chunked_seq_QMARK_(seq__58341_58796__$1)){
var c__5568__auto___58797 = cljs.core.chunk_first(seq__58341_58796__$1);
var G__58798 = cljs.core.chunk_rest(seq__58341_58796__$1);
var G__58799 = c__5568__auto___58797;
var G__58800 = cljs.core.count(c__5568__auto___58797);
var G__58801 = (0);
seq__58341_58784 = G__58798;
chunk__58342_58785 = G__58799;
count__58343_58786 = G__58800;
i__58344_58787 = G__58801;
continue;
} else {
var vec__58354_58802 = cljs.core.first(seq__58341_58796__$1);
var script_tag_58803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58354_58802,(0),null);
var script_body_58804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58354_58802,(1),null);
eval(script_body_58804);


var G__58805 = cljs.core.next(seq__58341_58796__$1);
var G__58806 = null;
var G__58807 = (0);
var G__58808 = (0);
seq__58341_58784 = G__58805;
chunk__58342_58785 = G__58806;
count__58343_58786 = G__58807;
i__58344_58787 = G__58808;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58357){
var vec__58358 = p__58357;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58362 = arguments.length;
switch (G__58362) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__58364 = cljs.core.seq(style_keys);
var chunk__58365 = null;
var count__58366 = (0);
var i__58367 = (0);
while(true){
if((i__58367 < count__58366)){
var it = chunk__58365.cljs$core$IIndexed$_nth$arity$2(null,i__58367);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58810 = seq__58364;
var G__58811 = chunk__58365;
var G__58812 = count__58366;
var G__58813 = (i__58367 + (1));
seq__58364 = G__58810;
chunk__58365 = G__58811;
count__58366 = G__58812;
i__58367 = G__58813;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58364);
if(temp__5804__auto__){
var seq__58364__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58364__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58364__$1);
var G__58814 = cljs.core.chunk_rest(seq__58364__$1);
var G__58815 = c__5568__auto__;
var G__58816 = cljs.core.count(c__5568__auto__);
var G__58817 = (0);
seq__58364 = G__58814;
chunk__58365 = G__58815;
count__58366 = G__58816;
i__58367 = G__58817;
continue;
} else {
var it = cljs.core.first(seq__58364__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58818 = cljs.core.next(seq__58364__$1);
var G__58819 = null;
var G__58820 = (0);
var G__58821 = (0);
seq__58364 = G__58818;
chunk__58365 = G__58819;
count__58366 = G__58820;
i__58367 = G__58821;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k58370,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__58375 = k58370;
var G__58375__$1 = (((G__58375 instanceof cljs.core.Keyword))?G__58375.fqn:null);
switch (G__58375__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58370,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__58376){
var vec__58378 = p__58376;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58378,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58378,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58369){
var self__ = this;
var G__58369__$1 = this;
return (new cljs.core.RecordIter((0),G__58369__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58371,other58372){
var self__ = this;
var this58371__$1 = this;
return (((!((other58372 == null)))) && ((((this58371__$1.constructor === other58372.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58371__$1.x,other58372.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58371__$1.y,other58372.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58371__$1.__extmap,other58372.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k58370){
var self__ = this;
var this__5350__auto____$1 = this;
var G__58393 = k58370;
var G__58393__$1 = (((G__58393 instanceof cljs.core.Keyword))?G__58393.fqn:null);
switch (G__58393__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58370);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__58369){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__58396 = cljs.core.keyword_identical_QMARK_;
var expr__58397 = k__5352__auto__;
if(cljs.core.truth_((pred__58396.cljs$core$IFn$_invoke$arity$2 ? pred__58396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58397) : pred__58396.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58397)))){
return (new shadow.dom.Coordinate(G__58369,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58396.cljs$core$IFn$_invoke$arity$2 ? pred__58396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58397) : pred__58396.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58397)))){
return (new shadow.dom.Coordinate(self__.x,G__58369,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__58369),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__58369){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58369,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58373){
var extmap__5385__auto__ = (function (){var G__58407 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58373,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58373)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58407);
} else {
return G__58407;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58373),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58373),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k58415,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__58426 = k58415;
var G__58426__$1 = (((G__58426 instanceof cljs.core.Keyword))?G__58426.fqn:null);
switch (G__58426__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58415,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__58431){
var vec__58434 = p__58431;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58434,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58434,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58414){
var self__ = this;
var G__58414__$1 = this;
return (new cljs.core.RecordIter((0),G__58414__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58416,other58417){
var self__ = this;
var this58416__$1 = this;
return (((!((other58417 == null)))) && ((((this58416__$1.constructor === other58417.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58416__$1.w,other58417.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58416__$1.h,other58417.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58416__$1.__extmap,other58417.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k58415){
var self__ = this;
var this__5350__auto____$1 = this;
var G__58448 = k58415;
var G__58448__$1 = (((G__58448 instanceof cljs.core.Keyword))?G__58448.fqn:null);
switch (G__58448__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58415);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__58414){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__58450 = cljs.core.keyword_identical_QMARK_;
var expr__58451 = k__5352__auto__;
if(cljs.core.truth_((pred__58450.cljs$core$IFn$_invoke$arity$2 ? pred__58450.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58451) : pred__58450.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58451)))){
return (new shadow.dom.Size(G__58414,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58450.cljs$core$IFn$_invoke$arity$2 ? pred__58450.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58451) : pred__58450.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58451)))){
return (new shadow.dom.Size(self__.w,G__58414,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__58414),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__58414){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58414,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58421){
var extmap__5385__auto__ = (function (){var G__58460 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58421,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58421)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58460);
} else {
return G__58460;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58421),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58421),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__58861 = (i + (1));
var G__58862 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58861;
ret = G__58862;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58476){
var vec__58479 = p__58476;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58492 = arguments.length;
switch (G__58492) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

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
var G__58868 = ps;
var G__58869 = (i + (1));
el__$1 = G__58868;
i = G__58869;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58500 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58500,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58500,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58500,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58503_58872 = cljs.core.seq(props);
var chunk__58504_58873 = null;
var count__58505_58874 = (0);
var i__58506_58875 = (0);
while(true){
if((i__58506_58875 < count__58505_58874)){
var vec__58513_58876 = chunk__58504_58873.cljs$core$IIndexed$_nth$arity$2(null,i__58506_58875);
var k_58877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58513_58876,(0),null);
var v_58878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58513_58876,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_58877);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58877),v_58878);


var G__58879 = seq__58503_58872;
var G__58880 = chunk__58504_58873;
var G__58881 = count__58505_58874;
var G__58882 = (i__58506_58875 + (1));
seq__58503_58872 = G__58879;
chunk__58504_58873 = G__58880;
count__58505_58874 = G__58881;
i__58506_58875 = G__58882;
continue;
} else {
var temp__5804__auto___58883 = cljs.core.seq(seq__58503_58872);
if(temp__5804__auto___58883){
var seq__58503_58884__$1 = temp__5804__auto___58883;
if(cljs.core.chunked_seq_QMARK_(seq__58503_58884__$1)){
var c__5568__auto___58885 = cljs.core.chunk_first(seq__58503_58884__$1);
var G__58886 = cljs.core.chunk_rest(seq__58503_58884__$1);
var G__58887 = c__5568__auto___58885;
var G__58888 = cljs.core.count(c__5568__auto___58885);
var G__58889 = (0);
seq__58503_58872 = G__58886;
chunk__58504_58873 = G__58887;
count__58505_58874 = G__58888;
i__58506_58875 = G__58889;
continue;
} else {
var vec__58516_58890 = cljs.core.first(seq__58503_58884__$1);
var k_58891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58516_58890,(0),null);
var v_58892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58516_58890,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_58891);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58891),v_58892);


var G__58893 = cljs.core.next(seq__58503_58884__$1);
var G__58894 = null;
var G__58895 = (0);
var G__58896 = (0);
seq__58503_58872 = G__58893;
chunk__58504_58873 = G__58894;
count__58505_58874 = G__58895;
i__58506_58875 = G__58896;
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
var vec__58520 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58520,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58520,(1),null);
var seq__58523_58897 = cljs.core.seq(node_children);
var chunk__58525_58898 = null;
var count__58526_58899 = (0);
var i__58527_58900 = (0);
while(true){
if((i__58527_58900 < count__58526_58899)){
var child_struct_58901 = chunk__58525_58898.cljs$core$IIndexed$_nth$arity$2(null,i__58527_58900);
if((!((child_struct_58901 == null)))){
if(typeof child_struct_58901 === 'string'){
var text_58903 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58903),child_struct_58901].join(''));
} else {
var children_58904 = shadow.dom.svg_node(child_struct_58901);
if(cljs.core.seq_QMARK_(children_58904)){
var seq__58541_58905 = cljs.core.seq(children_58904);
var chunk__58543_58906 = null;
var count__58544_58907 = (0);
var i__58545_58908 = (0);
while(true){
if((i__58545_58908 < count__58544_58907)){
var child_58909 = chunk__58543_58906.cljs$core$IIndexed$_nth$arity$2(null,i__58545_58908);
if(cljs.core.truth_(child_58909)){
node.appendChild(child_58909);


var G__58910 = seq__58541_58905;
var G__58911 = chunk__58543_58906;
var G__58912 = count__58544_58907;
var G__58913 = (i__58545_58908 + (1));
seq__58541_58905 = G__58910;
chunk__58543_58906 = G__58911;
count__58544_58907 = G__58912;
i__58545_58908 = G__58913;
continue;
} else {
var G__58914 = seq__58541_58905;
var G__58915 = chunk__58543_58906;
var G__58916 = count__58544_58907;
var G__58917 = (i__58545_58908 + (1));
seq__58541_58905 = G__58914;
chunk__58543_58906 = G__58915;
count__58544_58907 = G__58916;
i__58545_58908 = G__58917;
continue;
}
} else {
var temp__5804__auto___58918 = cljs.core.seq(seq__58541_58905);
if(temp__5804__auto___58918){
var seq__58541_58919__$1 = temp__5804__auto___58918;
if(cljs.core.chunked_seq_QMARK_(seq__58541_58919__$1)){
var c__5568__auto___58920 = cljs.core.chunk_first(seq__58541_58919__$1);
var G__58921 = cljs.core.chunk_rest(seq__58541_58919__$1);
var G__58922 = c__5568__auto___58920;
var G__58923 = cljs.core.count(c__5568__auto___58920);
var G__58924 = (0);
seq__58541_58905 = G__58921;
chunk__58543_58906 = G__58922;
count__58544_58907 = G__58923;
i__58545_58908 = G__58924;
continue;
} else {
var child_58925 = cljs.core.first(seq__58541_58919__$1);
if(cljs.core.truth_(child_58925)){
node.appendChild(child_58925);


var G__58926 = cljs.core.next(seq__58541_58919__$1);
var G__58927 = null;
var G__58928 = (0);
var G__58929 = (0);
seq__58541_58905 = G__58926;
chunk__58543_58906 = G__58927;
count__58544_58907 = G__58928;
i__58545_58908 = G__58929;
continue;
} else {
var G__58930 = cljs.core.next(seq__58541_58919__$1);
var G__58931 = null;
var G__58932 = (0);
var G__58933 = (0);
seq__58541_58905 = G__58930;
chunk__58543_58906 = G__58931;
count__58544_58907 = G__58932;
i__58545_58908 = G__58933;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58904);
}
}


var G__58934 = seq__58523_58897;
var G__58935 = chunk__58525_58898;
var G__58936 = count__58526_58899;
var G__58937 = (i__58527_58900 + (1));
seq__58523_58897 = G__58934;
chunk__58525_58898 = G__58935;
count__58526_58899 = G__58936;
i__58527_58900 = G__58937;
continue;
} else {
var G__58938 = seq__58523_58897;
var G__58939 = chunk__58525_58898;
var G__58940 = count__58526_58899;
var G__58941 = (i__58527_58900 + (1));
seq__58523_58897 = G__58938;
chunk__58525_58898 = G__58939;
count__58526_58899 = G__58940;
i__58527_58900 = G__58941;
continue;
}
} else {
var temp__5804__auto___58942 = cljs.core.seq(seq__58523_58897);
if(temp__5804__auto___58942){
var seq__58523_58944__$1 = temp__5804__auto___58942;
if(cljs.core.chunked_seq_QMARK_(seq__58523_58944__$1)){
var c__5568__auto___58945 = cljs.core.chunk_first(seq__58523_58944__$1);
var G__58946 = cljs.core.chunk_rest(seq__58523_58944__$1);
var G__58947 = c__5568__auto___58945;
var G__58948 = cljs.core.count(c__5568__auto___58945);
var G__58949 = (0);
seq__58523_58897 = G__58946;
chunk__58525_58898 = G__58947;
count__58526_58899 = G__58948;
i__58527_58900 = G__58949;
continue;
} else {
var child_struct_58950 = cljs.core.first(seq__58523_58944__$1);
if((!((child_struct_58950 == null)))){
if(typeof child_struct_58950 === 'string'){
var text_58951 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58951),child_struct_58950].join(''));
} else {
var children_58952 = shadow.dom.svg_node(child_struct_58950);
if(cljs.core.seq_QMARK_(children_58952)){
var seq__58547_58953 = cljs.core.seq(children_58952);
var chunk__58549_58954 = null;
var count__58550_58955 = (0);
var i__58551_58956 = (0);
while(true){
if((i__58551_58956 < count__58550_58955)){
var child_58957 = chunk__58549_58954.cljs$core$IIndexed$_nth$arity$2(null,i__58551_58956);
if(cljs.core.truth_(child_58957)){
node.appendChild(child_58957);


var G__58958 = seq__58547_58953;
var G__58959 = chunk__58549_58954;
var G__58960 = count__58550_58955;
var G__58961 = (i__58551_58956 + (1));
seq__58547_58953 = G__58958;
chunk__58549_58954 = G__58959;
count__58550_58955 = G__58960;
i__58551_58956 = G__58961;
continue;
} else {
var G__58962 = seq__58547_58953;
var G__58963 = chunk__58549_58954;
var G__58964 = count__58550_58955;
var G__58965 = (i__58551_58956 + (1));
seq__58547_58953 = G__58962;
chunk__58549_58954 = G__58963;
count__58550_58955 = G__58964;
i__58551_58956 = G__58965;
continue;
}
} else {
var temp__5804__auto___58966__$1 = cljs.core.seq(seq__58547_58953);
if(temp__5804__auto___58966__$1){
var seq__58547_58967__$1 = temp__5804__auto___58966__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58547_58967__$1)){
var c__5568__auto___58968 = cljs.core.chunk_first(seq__58547_58967__$1);
var G__58969 = cljs.core.chunk_rest(seq__58547_58967__$1);
var G__58970 = c__5568__auto___58968;
var G__58971 = cljs.core.count(c__5568__auto___58968);
var G__58972 = (0);
seq__58547_58953 = G__58969;
chunk__58549_58954 = G__58970;
count__58550_58955 = G__58971;
i__58551_58956 = G__58972;
continue;
} else {
var child_58973 = cljs.core.first(seq__58547_58967__$1);
if(cljs.core.truth_(child_58973)){
node.appendChild(child_58973);


var G__58974 = cljs.core.next(seq__58547_58967__$1);
var G__58975 = null;
var G__58976 = (0);
var G__58977 = (0);
seq__58547_58953 = G__58974;
chunk__58549_58954 = G__58975;
count__58550_58955 = G__58976;
i__58551_58956 = G__58977;
continue;
} else {
var G__58978 = cljs.core.next(seq__58547_58967__$1);
var G__58979 = null;
var G__58980 = (0);
var G__58981 = (0);
seq__58547_58953 = G__58978;
chunk__58549_58954 = G__58979;
count__58550_58955 = G__58980;
i__58551_58956 = G__58981;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58952);
}
}


var G__58982 = cljs.core.next(seq__58523_58944__$1);
var G__58983 = null;
var G__58984 = (0);
var G__58985 = (0);
seq__58523_58897 = G__58982;
chunk__58525_58898 = G__58983;
count__58526_58899 = G__58984;
i__58527_58900 = G__58985;
continue;
} else {
var G__58986 = cljs.core.next(seq__58523_58944__$1);
var G__58987 = null;
var G__58988 = (0);
var G__58989 = (0);
seq__58523_58897 = G__58986;
chunk__58525_58898 = G__58987;
count__58526_58899 = G__58988;
i__58527_58900 = G__58989;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58990 = arguments.length;
var i__5770__auto___58991 = (0);
while(true){
if((i__5770__auto___58991 < len__5769__auto___58990)){
args__5775__auto__.push((arguments[i__5770__auto___58991]));

var G__58992 = (i__5770__auto___58991 + (1));
i__5770__auto___58991 = G__58992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58553){
var G__58554 = cljs.core.first(seq58553);
var seq58553__$1 = cljs.core.next(seq58553);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58554,seq58553__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58556 = arguments.length;
switch (G__58556) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__54341__auto___58994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_58562){
var state_val_58563 = (state_58562[(1)]);
if((state_val_58563 === (1))){
var state_58562__$1 = state_58562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58562__$1,(2),once_or_cleanup);
} else {
if((state_val_58563 === (2))){
var inst_58559 = (state_58562[(2)]);
var inst_58560 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58562__$1 = (function (){var statearr_58566 = state_58562;
(statearr_58566[(7)] = inst_58559);

return statearr_58566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58562__$1,inst_58560);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__54000__auto__ = null;
var shadow$dom$state_machine__54000__auto____0 = (function (){
var statearr_58567 = [null,null,null,null,null,null,null,null];
(statearr_58567[(0)] = shadow$dom$state_machine__54000__auto__);

(statearr_58567[(1)] = (1));

return statearr_58567;
});
var shadow$dom$state_machine__54000__auto____1 = (function (state_58562){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_58562);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e58568){var ex__54003__auto__ = e58568;
var statearr_58569_58995 = state_58562;
(statearr_58569_58995[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_58562[(4)]))){
var statearr_58570_58996 = state_58562;
(statearr_58570_58996[(1)] = cljs.core.first((state_58562[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58998 = state_58562;
state_58562 = G__58998;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
shadow$dom$state_machine__54000__auto__ = function(state_58562){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__54000__auto____0.call(this);
case 1:
return shadow$dom$state_machine__54000__auto____1.call(this,state_58562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__54000__auto____0;
shadow$dom$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__54000__auto____1;
return shadow$dom$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_58573 = f__54342__auto__();
(statearr_58573[(6)] = c__54341__auto___58994);

return statearr_58573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
