goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46195 = arguments.length;
switch (G__46195) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46196 = (function (f,blockable,meta46197){
this.f = f;
this.blockable = blockable;
this.meta46197 = meta46197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46198,meta46197__$1){
var self__ = this;
var _46198__$1 = this;
return (new cljs.core.async.t_cljs$core$async46196(self__.f,self__.blockable,meta46197__$1));
}));

(cljs.core.async.t_cljs$core$async46196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46198){
var self__ = this;
var _46198__$1 = this;
return self__.meta46197;
}));

(cljs.core.async.t_cljs$core$async46196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46197","meta46197",-1960895992,null)], null);
}));

(cljs.core.async.t_cljs$core$async46196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46196");

(cljs.core.async.t_cljs$core$async46196.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46196.
 */
cljs.core.async.__GT_t_cljs$core$async46196 = (function cljs$core$async$__GT_t_cljs$core$async46196(f__$1,blockable__$1,meta46197){
return (new cljs.core.async.t_cljs$core$async46196(f__$1,blockable__$1,meta46197));
});

}

return (new cljs.core.async.t_cljs$core$async46196(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46201 = arguments.length;
switch (G__46201) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46203 = arguments.length;
switch (G__46203) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46210 = arguments.length;
switch (G__46210) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47667 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47667) : fn1.call(null,val_47667));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47667) : fn1.call(null,val_47667));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46226 = arguments.length;
switch (G__46226) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___47669 = n;
var x_47670 = (0);
while(true){
if((x_47670 < n__5636__auto___47669)){
(a[x_47670] = x_47670);

var G__47671 = (x_47670 + (1));
x_47670 = G__47671;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46246 = (function (flag,meta46247){
this.flag = flag;
this.meta46247 = meta46247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46248,meta46247__$1){
var self__ = this;
var _46248__$1 = this;
return (new cljs.core.async.t_cljs$core$async46246(self__.flag,meta46247__$1));
}));

(cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46248){
var self__ = this;
var _46248__$1 = this;
return self__.meta46247;
}));

(cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46247","meta46247",2125415863,null)], null);
}));

(cljs.core.async.t_cljs$core$async46246.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46246");

(cljs.core.async.t_cljs$core$async46246.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46246");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46246.
 */
cljs.core.async.__GT_t_cljs$core$async46246 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46246(flag__$1,meta46247){
return (new cljs.core.async.t_cljs$core$async46246(flag__$1,meta46247));
});

}

return (new cljs.core.async.t_cljs$core$async46246(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46258 = (function (flag,cb,meta46259){
this.flag = flag;
this.cb = cb;
this.meta46259 = meta46259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46260,meta46259__$1){
var self__ = this;
var _46260__$1 = this;
return (new cljs.core.async.t_cljs$core$async46258(self__.flag,self__.cb,meta46259__$1));
}));

(cljs.core.async.t_cljs$core$async46258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46260){
var self__ = this;
var _46260__$1 = this;
return self__.meta46259;
}));

(cljs.core.async.t_cljs$core$async46258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46259","meta46259",988920350,null)], null);
}));

(cljs.core.async.t_cljs$core$async46258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46258");

(cljs.core.async.t_cljs$core$async46258.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46258.
 */
cljs.core.async.__GT_t_cljs$core$async46258 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46258(flag__$1,cb__$1,meta46259){
return (new cljs.core.async.t_cljs$core$async46258(flag__$1,cb__$1,meta46259));
});

}

return (new cljs.core.async.t_cljs$core$async46258(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__46261_SHARP_){
var G__46263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46261_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46263) : fret.call(null,G__46263));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__46262_SHARP_){
var G__46264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46262_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46264) : fret.call(null,G__46264));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47672 = (i + (1));
i = G__47672;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47673 = arguments.length;
var i__5770__auto___47674 = (0);
while(true){
if((i__5770__auto___47674 < len__5769__auto___47673)){
args__5775__auto__.push((arguments[i__5770__auto___47674]));

var G__47675 = (i__5770__auto___47674 + (1));
i__5770__auto___47674 = G__47675;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46267){
var map__46268 = p__46267;
var map__46268__$1 = cljs.core.__destructure_map(map__46268);
var opts = map__46268__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46265){
var G__46266 = cljs.core.first(seq46265);
var seq46265__$1 = cljs.core.next(seq46265);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46266,seq46265__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46270 = arguments.length;
switch (G__46270) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46137__auto___47677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46294){
var state_val_46295 = (state_46294[(1)]);
if((state_val_46295 === (7))){
var inst_46290 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46296_47678 = state_46294__$1;
(statearr_46296_47678[(2)] = inst_46290);

(statearr_46296_47678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (1))){
var state_46294__$1 = state_46294;
var statearr_46297_47679 = state_46294__$1;
(statearr_46297_47679[(2)] = null);

(statearr_46297_47679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (4))){
var inst_46273 = (state_46294[(7)]);
var inst_46273__$1 = (state_46294[(2)]);
var inst_46274 = (inst_46273__$1 == null);
var state_46294__$1 = (function (){var statearr_46298 = state_46294;
(statearr_46298[(7)] = inst_46273__$1);

return statearr_46298;
})();
if(cljs.core.truth_(inst_46274)){
var statearr_46299_47680 = state_46294__$1;
(statearr_46299_47680[(1)] = (5));

} else {
var statearr_46300_47681 = state_46294__$1;
(statearr_46300_47681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (13))){
var state_46294__$1 = state_46294;
var statearr_46301_47682 = state_46294__$1;
(statearr_46301_47682[(2)] = null);

(statearr_46301_47682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (6))){
var inst_46273 = (state_46294[(7)]);
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46294__$1,(11),to,inst_46273);
} else {
if((state_val_46295 === (3))){
var inst_46292 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46294__$1,inst_46292);
} else {
if((state_val_46295 === (12))){
var state_46294__$1 = state_46294;
var statearr_46302_47683 = state_46294__$1;
(statearr_46302_47683[(2)] = null);

(statearr_46302_47683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (2))){
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46294__$1,(4),from);
} else {
if((state_val_46295 === (11))){
var inst_46283 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
if(cljs.core.truth_(inst_46283)){
var statearr_46303_47684 = state_46294__$1;
(statearr_46303_47684[(1)] = (12));

} else {
var statearr_46304_47685 = state_46294__$1;
(statearr_46304_47685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (9))){
var state_46294__$1 = state_46294;
var statearr_46305_47686 = state_46294__$1;
(statearr_46305_47686[(2)] = null);

(statearr_46305_47686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (5))){
var state_46294__$1 = state_46294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46306_47687 = state_46294__$1;
(statearr_46306_47687[(1)] = (8));

} else {
var statearr_46307_47688 = state_46294__$1;
(statearr_46307_47688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (14))){
var inst_46288 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46308_47689 = state_46294__$1;
(statearr_46308_47689[(2)] = inst_46288);

(statearr_46308_47689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (10))){
var inst_46280 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46309_47690 = state_46294__$1;
(statearr_46309_47690[(2)] = inst_46280);

(statearr_46309_47690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (8))){
var inst_46277 = cljs.core.async.close_BANG_(to);
var state_46294__$1 = state_46294;
var statearr_46310_47691 = state_46294__$1;
(statearr_46310_47691[(2)] = inst_46277);

(statearr_46310_47691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_46311 = [null,null,null,null,null,null,null,null];
(statearr_46311[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_46311[(1)] = (1));

return statearr_46311;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_46294){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46294);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46312){var ex__46070__auto__ = e46312;
var statearr_46313_47692 = state_46294;
(statearr_46313_47692[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46294[(4)]))){
var statearr_46314_47693 = state_46294;
(statearr_46314_47693[(1)] = cljs.core.first((state_46294[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47694 = state_46294;
state_46294 = G__47694;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_46294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_46294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46315 = f__46138__auto__();
(statearr_46315[(6)] = c__46137__auto___47677);

return statearr_46315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__46316){
var vec__46317 = p__46316;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46317,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46317,(1),null);
var job = vec__46317;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46137__auto___47695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46324){
var state_val_46325 = (state_46324[(1)]);
if((state_val_46325 === (1))){
var state_46324__$1 = state_46324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46324__$1,(2),res,v);
} else {
if((state_val_46325 === (2))){
var inst_46321 = (state_46324[(2)]);
var inst_46322 = cljs.core.async.close_BANG_(res);
var state_46324__$1 = (function (){var statearr_46326 = state_46324;
(statearr_46326[(7)] = inst_46321);

return statearr_46326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46324__$1,inst_46322);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0 = (function (){
var statearr_46327 = [null,null,null,null,null,null,null,null];
(statearr_46327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__);

(statearr_46327[(1)] = (1));

return statearr_46327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1 = (function (state_46324){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46324);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46328){var ex__46070__auto__ = e46328;
var statearr_46329_47696 = state_46324;
(statearr_46329_47696[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46324[(4)]))){
var statearr_46330_47697 = state_46324;
(statearr_46330_47697[(1)] = cljs.core.first((state_46324[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47698 = state_46324;
state_46324 = G__47698;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = function(state_46324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1.call(this,state_46324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46331 = f__46138__auto__();
(statearr_46331[(6)] = c__46137__auto___47695);

return statearr_46331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46332){
var vec__46333 = p__46332;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(1),null);
var job = vec__46333;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___47699 = n;
var __47700 = (0);
while(true){
if((__47700 < n__5636__auto___47699)){
var G__46336_47701 = type;
var G__46336_47702__$1 = (((G__46336_47701 instanceof cljs.core.Keyword))?G__46336_47701.fqn:null);
switch (G__46336_47702__$1) {
case "compute":
var c__46137__auto___47704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47700,c__46137__auto___47704,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async){
return (function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = ((function (__47700,c__46137__auto___47704,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async){
return (function (state_46349){
var state_val_46350 = (state_46349[(1)]);
if((state_val_46350 === (1))){
var state_46349__$1 = state_46349;
var statearr_46351_47705 = state_46349__$1;
(statearr_46351_47705[(2)] = null);

(statearr_46351_47705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (2))){
var state_46349__$1 = state_46349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46349__$1,(4),jobs);
} else {
if((state_val_46350 === (3))){
var inst_46347 = (state_46349[(2)]);
var state_46349__$1 = state_46349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46349__$1,inst_46347);
} else {
if((state_val_46350 === (4))){
var inst_46339 = (state_46349[(2)]);
var inst_46340 = process__$1(inst_46339);
var state_46349__$1 = state_46349;
if(cljs.core.truth_(inst_46340)){
var statearr_46352_47706 = state_46349__$1;
(statearr_46352_47706[(1)] = (5));

} else {
var statearr_46353_47707 = state_46349__$1;
(statearr_46353_47707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (5))){
var state_46349__$1 = state_46349;
var statearr_46354_47708 = state_46349__$1;
(statearr_46354_47708[(2)] = null);

(statearr_46354_47708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (6))){
var state_46349__$1 = state_46349;
var statearr_46355_47709 = state_46349__$1;
(statearr_46355_47709[(2)] = null);

(statearr_46355_47709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46350 === (7))){
var inst_46345 = (state_46349[(2)]);
var state_46349__$1 = state_46349;
var statearr_46356_47710 = state_46349__$1;
(statearr_46356_47710[(2)] = inst_46345);

(statearr_46356_47710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47700,c__46137__auto___47704,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async))
;
return ((function (__47700,switch__46066__auto__,c__46137__auto___47704,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0 = (function (){
var statearr_46357 = [null,null,null,null,null,null,null];
(statearr_46357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__);

(statearr_46357[(1)] = (1));

return statearr_46357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1 = (function (state_46349){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46349);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46358){var ex__46070__auto__ = e46358;
var statearr_46359_47711 = state_46349;
(statearr_46359_47711[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46349[(4)]))){
var statearr_46360_47712 = state_46349;
(statearr_46360_47712[(1)] = cljs.core.first((state_46349[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47713 = state_46349;
state_46349 = G__47713;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = function(state_46349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1.call(this,state_46349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__;
})()
;})(__47700,switch__46066__auto__,c__46137__auto___47704,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async))
})();
var state__46139__auto__ = (function (){var statearr_46361 = f__46138__auto__();
(statearr_46361[(6)] = c__46137__auto___47704);

return statearr_46361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
});})(__47700,c__46137__auto___47704,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async))
);


break;
case "async":
var c__46137__auto___47714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47700,c__46137__auto___47714,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async){
return (function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = ((function (__47700,c__46137__auto___47714,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async){
return (function (state_46374){
var state_val_46375 = (state_46374[(1)]);
if((state_val_46375 === (1))){
var state_46374__$1 = state_46374;
var statearr_46376_47715 = state_46374__$1;
(statearr_46376_47715[(2)] = null);

(statearr_46376_47715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (2))){
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46374__$1,(4),jobs);
} else {
if((state_val_46375 === (3))){
var inst_46372 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46374__$1,inst_46372);
} else {
if((state_val_46375 === (4))){
var inst_46364 = (state_46374[(2)]);
var inst_46365 = async(inst_46364);
var state_46374__$1 = state_46374;
if(cljs.core.truth_(inst_46365)){
var statearr_46377_47716 = state_46374__$1;
(statearr_46377_47716[(1)] = (5));

} else {
var statearr_46378_47717 = state_46374__$1;
(statearr_46378_47717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (5))){
var state_46374__$1 = state_46374;
var statearr_46379_47718 = state_46374__$1;
(statearr_46379_47718[(2)] = null);

(statearr_46379_47718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (6))){
var state_46374__$1 = state_46374;
var statearr_46380_47719 = state_46374__$1;
(statearr_46380_47719[(2)] = null);

(statearr_46380_47719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (7))){
var inst_46370 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
var statearr_46381_47720 = state_46374__$1;
(statearr_46381_47720[(2)] = inst_46370);

(statearr_46381_47720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47700,c__46137__auto___47714,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async))
;
return ((function (__47700,switch__46066__auto__,c__46137__auto___47714,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0 = (function (){
var statearr_46382 = [null,null,null,null,null,null,null];
(statearr_46382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__);

(statearr_46382[(1)] = (1));

return statearr_46382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1 = (function (state_46374){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46374);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46383){var ex__46070__auto__ = e46383;
var statearr_46384_47721 = state_46374;
(statearr_46384_47721[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46374[(4)]))){
var statearr_46385_47722 = state_46374;
(statearr_46385_47722[(1)] = cljs.core.first((state_46374[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47723 = state_46374;
state_46374 = G__47723;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = function(state_46374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1.call(this,state_46374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__;
})()
;})(__47700,switch__46066__auto__,c__46137__auto___47714,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async))
})();
var state__46139__auto__ = (function (){var statearr_46386 = f__46138__auto__();
(statearr_46386[(6)] = c__46137__auto___47714);

return statearr_46386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
});})(__47700,c__46137__auto___47714,G__46336_47701,G__46336_47702__$1,n__5636__auto___47699,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46336_47702__$1)].join('')));

}

var G__47724 = (__47700 + (1));
__47700 = G__47724;
continue;
} else {
}
break;
}

var c__46137__auto___47725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46408){
var state_val_46409 = (state_46408[(1)]);
if((state_val_46409 === (7))){
var inst_46404 = (state_46408[(2)]);
var state_46408__$1 = state_46408;
var statearr_46410_47726 = state_46408__$1;
(statearr_46410_47726[(2)] = inst_46404);

(statearr_46410_47726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46409 === (1))){
var state_46408__$1 = state_46408;
var statearr_46411_47727 = state_46408__$1;
(statearr_46411_47727[(2)] = null);

(statearr_46411_47727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46409 === (4))){
var inst_46389 = (state_46408[(7)]);
var inst_46389__$1 = (state_46408[(2)]);
var inst_46390 = (inst_46389__$1 == null);
var state_46408__$1 = (function (){var statearr_46412 = state_46408;
(statearr_46412[(7)] = inst_46389__$1);

return statearr_46412;
})();
if(cljs.core.truth_(inst_46390)){
var statearr_46413_47728 = state_46408__$1;
(statearr_46413_47728[(1)] = (5));

} else {
var statearr_46414_47729 = state_46408__$1;
(statearr_46414_47729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46409 === (6))){
var inst_46389 = (state_46408[(7)]);
var inst_46394 = (state_46408[(8)]);
var inst_46394__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46396 = [inst_46389,inst_46394__$1];
var inst_46397 = (new cljs.core.PersistentVector(null,2,(5),inst_46395,inst_46396,null));
var state_46408__$1 = (function (){var statearr_46415 = state_46408;
(statearr_46415[(8)] = inst_46394__$1);

return statearr_46415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46408__$1,(8),jobs,inst_46397);
} else {
if((state_val_46409 === (3))){
var inst_46406 = (state_46408[(2)]);
var state_46408__$1 = state_46408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46408__$1,inst_46406);
} else {
if((state_val_46409 === (2))){
var state_46408__$1 = state_46408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46408__$1,(4),from);
} else {
if((state_val_46409 === (9))){
var inst_46401 = (state_46408[(2)]);
var state_46408__$1 = (function (){var statearr_46416 = state_46408;
(statearr_46416[(9)] = inst_46401);

return statearr_46416;
})();
var statearr_46417_47730 = state_46408__$1;
(statearr_46417_47730[(2)] = null);

(statearr_46417_47730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46409 === (5))){
var inst_46392 = cljs.core.async.close_BANG_(jobs);
var state_46408__$1 = state_46408;
var statearr_46418_47731 = state_46408__$1;
(statearr_46418_47731[(2)] = inst_46392);

(statearr_46418_47731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46409 === (8))){
var inst_46394 = (state_46408[(8)]);
var inst_46399 = (state_46408[(2)]);
var state_46408__$1 = (function (){var statearr_46419 = state_46408;
(statearr_46419[(10)] = inst_46399);

return statearr_46419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46408__$1,(9),results,inst_46394);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0 = (function (){
var statearr_46420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__);

(statearr_46420[(1)] = (1));

return statearr_46420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1 = (function (state_46408){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46408);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46421){var ex__46070__auto__ = e46421;
var statearr_46422_47732 = state_46408;
(statearr_46422_47732[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46408[(4)]))){
var statearr_46423_47733 = state_46408;
(statearr_46423_47733[(1)] = cljs.core.first((state_46408[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47734 = state_46408;
state_46408 = G__47734;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = function(state_46408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1.call(this,state_46408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46424 = f__46138__auto__();
(statearr_46424[(6)] = c__46137__auto___47725);

return statearr_46424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


var c__46137__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46462){
var state_val_46463 = (state_46462[(1)]);
if((state_val_46463 === (7))){
var inst_46458 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46464_47762 = state_46462__$1;
(statearr_46464_47762[(2)] = inst_46458);

(statearr_46464_47762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (20))){
var state_46462__$1 = state_46462;
var statearr_46465_47763 = state_46462__$1;
(statearr_46465_47763[(2)] = null);

(statearr_46465_47763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (1))){
var state_46462__$1 = state_46462;
var statearr_46466_47764 = state_46462__$1;
(statearr_46466_47764[(2)] = null);

(statearr_46466_47764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (4))){
var inst_46427 = (state_46462[(7)]);
var inst_46427__$1 = (state_46462[(2)]);
var inst_46428 = (inst_46427__$1 == null);
var state_46462__$1 = (function (){var statearr_46467 = state_46462;
(statearr_46467[(7)] = inst_46427__$1);

return statearr_46467;
})();
if(cljs.core.truth_(inst_46428)){
var statearr_46468_47766 = state_46462__$1;
(statearr_46468_47766[(1)] = (5));

} else {
var statearr_46469_47767 = state_46462__$1;
(statearr_46469_47767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (15))){
var inst_46440 = (state_46462[(8)]);
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46462__$1,(18),to,inst_46440);
} else {
if((state_val_46463 === (21))){
var inst_46453 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46470_47768 = state_46462__$1;
(statearr_46470_47768[(2)] = inst_46453);

(statearr_46470_47768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (13))){
var inst_46455 = (state_46462[(2)]);
var state_46462__$1 = (function (){var statearr_46471 = state_46462;
(statearr_46471[(9)] = inst_46455);

return statearr_46471;
})();
var statearr_46472_47770 = state_46462__$1;
(statearr_46472_47770[(2)] = null);

(statearr_46472_47770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (6))){
var inst_46427 = (state_46462[(7)]);
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46462__$1,(11),inst_46427);
} else {
if((state_val_46463 === (17))){
var inst_46448 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
if(cljs.core.truth_(inst_46448)){
var statearr_46473_47773 = state_46462__$1;
(statearr_46473_47773[(1)] = (19));

} else {
var statearr_46474_47775 = state_46462__$1;
(statearr_46474_47775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (3))){
var inst_46460 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46462__$1,inst_46460);
} else {
if((state_val_46463 === (12))){
var inst_46437 = (state_46462[(10)]);
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46462__$1,(14),inst_46437);
} else {
if((state_val_46463 === (2))){
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46462__$1,(4),results);
} else {
if((state_val_46463 === (19))){
var state_46462__$1 = state_46462;
var statearr_46475_47780 = state_46462__$1;
(statearr_46475_47780[(2)] = null);

(statearr_46475_47780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (11))){
var inst_46437 = (state_46462[(2)]);
var state_46462__$1 = (function (){var statearr_46476 = state_46462;
(statearr_46476[(10)] = inst_46437);

return statearr_46476;
})();
var statearr_46477_47782 = state_46462__$1;
(statearr_46477_47782[(2)] = null);

(statearr_46477_47782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (9))){
var state_46462__$1 = state_46462;
var statearr_46478_47784 = state_46462__$1;
(statearr_46478_47784[(2)] = null);

(statearr_46478_47784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (5))){
var state_46462__$1 = state_46462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46479_47786 = state_46462__$1;
(statearr_46479_47786[(1)] = (8));

} else {
var statearr_46480_47787 = state_46462__$1;
(statearr_46480_47787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (14))){
var inst_46440 = (state_46462[(8)]);
var inst_46442 = (state_46462[(11)]);
var inst_46440__$1 = (state_46462[(2)]);
var inst_46441 = (inst_46440__$1 == null);
var inst_46442__$1 = cljs.core.not(inst_46441);
var state_46462__$1 = (function (){var statearr_46481 = state_46462;
(statearr_46481[(8)] = inst_46440__$1);

(statearr_46481[(11)] = inst_46442__$1);

return statearr_46481;
})();
if(inst_46442__$1){
var statearr_46482_47790 = state_46462__$1;
(statearr_46482_47790[(1)] = (15));

} else {
var statearr_46483_47791 = state_46462__$1;
(statearr_46483_47791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (16))){
var inst_46442 = (state_46462[(11)]);
var state_46462__$1 = state_46462;
var statearr_46484_47794 = state_46462__$1;
(statearr_46484_47794[(2)] = inst_46442);

(statearr_46484_47794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (10))){
var inst_46434 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46485_47796 = state_46462__$1;
(statearr_46485_47796[(2)] = inst_46434);

(statearr_46485_47796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (18))){
var inst_46445 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46486_47798 = state_46462__$1;
(statearr_46486_47798[(2)] = inst_46445);

(statearr_46486_47798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46463 === (8))){
var inst_46431 = cljs.core.async.close_BANG_(to);
var state_46462__$1 = state_46462;
var statearr_46487_47800 = state_46462__$1;
(statearr_46487_47800[(2)] = inst_46431);

(statearr_46487_47800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0 = (function (){
var statearr_46488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__);

(statearr_46488[(1)] = (1));

return statearr_46488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1 = (function (state_46462){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46462);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46489){var ex__46070__auto__ = e46489;
var statearr_46490_47804 = state_46462;
(statearr_46490_47804[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46462[(4)]))){
var statearr_46491_47806 = state_46462;
(statearr_46491_47806[(1)] = cljs.core.first((state_46462[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47807 = state_46462;
state_46462 = G__47807;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__ = function(state_46462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1.call(this,state_46462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46492 = f__46138__auto__();
(statearr_46492[(6)] = c__46137__auto__);

return statearr_46492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

return c__46137__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46494 = arguments.length;
switch (G__46494) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46496 = arguments.length;
switch (G__46496) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46498 = arguments.length;
switch (G__46498) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46137__auto___47815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46524){
var state_val_46525 = (state_46524[(1)]);
if((state_val_46525 === (7))){
var inst_46520 = (state_46524[(2)]);
var state_46524__$1 = state_46524;
var statearr_46526_47818 = state_46524__$1;
(statearr_46526_47818[(2)] = inst_46520);

(statearr_46526_47818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (1))){
var state_46524__$1 = state_46524;
var statearr_46527_47819 = state_46524__$1;
(statearr_46527_47819[(2)] = null);

(statearr_46527_47819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (4))){
var inst_46501 = (state_46524[(7)]);
var inst_46501__$1 = (state_46524[(2)]);
var inst_46502 = (inst_46501__$1 == null);
var state_46524__$1 = (function (){var statearr_46528 = state_46524;
(statearr_46528[(7)] = inst_46501__$1);

return statearr_46528;
})();
if(cljs.core.truth_(inst_46502)){
var statearr_46529_47820 = state_46524__$1;
(statearr_46529_47820[(1)] = (5));

} else {
var statearr_46530_47821 = state_46524__$1;
(statearr_46530_47821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (13))){
var state_46524__$1 = state_46524;
var statearr_46531_47823 = state_46524__$1;
(statearr_46531_47823[(2)] = null);

(statearr_46531_47823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (6))){
var inst_46501 = (state_46524[(7)]);
var inst_46507 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46501) : p.call(null,inst_46501));
var state_46524__$1 = state_46524;
if(cljs.core.truth_(inst_46507)){
var statearr_46532_47825 = state_46524__$1;
(statearr_46532_47825[(1)] = (9));

} else {
var statearr_46533_47826 = state_46524__$1;
(statearr_46533_47826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (3))){
var inst_46522 = (state_46524[(2)]);
var state_46524__$1 = state_46524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46524__$1,inst_46522);
} else {
if((state_val_46525 === (12))){
var state_46524__$1 = state_46524;
var statearr_46534_47827 = state_46524__$1;
(statearr_46534_47827[(2)] = null);

(statearr_46534_47827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (2))){
var state_46524__$1 = state_46524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46524__$1,(4),ch);
} else {
if((state_val_46525 === (11))){
var inst_46501 = (state_46524[(7)]);
var inst_46511 = (state_46524[(2)]);
var state_46524__$1 = state_46524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46524__$1,(8),inst_46511,inst_46501);
} else {
if((state_val_46525 === (9))){
var state_46524__$1 = state_46524;
var statearr_46535_47828 = state_46524__$1;
(statearr_46535_47828[(2)] = tc);

(statearr_46535_47828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (5))){
var inst_46504 = cljs.core.async.close_BANG_(tc);
var inst_46505 = cljs.core.async.close_BANG_(fc);
var state_46524__$1 = (function (){var statearr_46536 = state_46524;
(statearr_46536[(8)] = inst_46504);

return statearr_46536;
})();
var statearr_46537_47832 = state_46524__$1;
(statearr_46537_47832[(2)] = inst_46505);

(statearr_46537_47832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (14))){
var inst_46518 = (state_46524[(2)]);
var state_46524__$1 = state_46524;
var statearr_46538_47834 = state_46524__$1;
(statearr_46538_47834[(2)] = inst_46518);

(statearr_46538_47834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (10))){
var state_46524__$1 = state_46524;
var statearr_46539_47835 = state_46524__$1;
(statearr_46539_47835[(2)] = fc);

(statearr_46539_47835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46525 === (8))){
var inst_46513 = (state_46524[(2)]);
var state_46524__$1 = state_46524;
if(cljs.core.truth_(inst_46513)){
var statearr_46540_47836 = state_46524__$1;
(statearr_46540_47836[(1)] = (12));

} else {
var statearr_46541_47837 = state_46524__$1;
(statearr_46541_47837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_46542 = [null,null,null,null,null,null,null,null,null];
(statearr_46542[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_46542[(1)] = (1));

return statearr_46542;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_46524){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46524);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46543){var ex__46070__auto__ = e46543;
var statearr_46544_47838 = state_46524;
(statearr_46544_47838[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46524[(4)]))){
var statearr_46545_47839 = state_46524;
(statearr_46545_47839[(1)] = cljs.core.first((state_46524[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47840 = state_46524;
state_46524 = G__47840;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_46524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_46524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46546 = f__46138__auto__();
(statearr_46546[(6)] = c__46137__auto___47815);

return statearr_46546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46137__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46568){
var state_val_46569 = (state_46568[(1)]);
if((state_val_46569 === (7))){
var inst_46564 = (state_46568[(2)]);
var state_46568__$1 = state_46568;
var statearr_46570_47844 = state_46568__$1;
(statearr_46570_47844[(2)] = inst_46564);

(statearr_46570_47844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46569 === (1))){
var inst_46547 = init;
var inst_46548 = inst_46547;
var state_46568__$1 = (function (){var statearr_46571 = state_46568;
(statearr_46571[(7)] = inst_46548);

return statearr_46571;
})();
var statearr_46572_47845 = state_46568__$1;
(statearr_46572_47845[(2)] = null);

(statearr_46572_47845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46569 === (4))){
var inst_46551 = (state_46568[(8)]);
var inst_46551__$1 = (state_46568[(2)]);
var inst_46552 = (inst_46551__$1 == null);
var state_46568__$1 = (function (){var statearr_46573 = state_46568;
(statearr_46573[(8)] = inst_46551__$1);

return statearr_46573;
})();
if(cljs.core.truth_(inst_46552)){
var statearr_46574_47848 = state_46568__$1;
(statearr_46574_47848[(1)] = (5));

} else {
var statearr_46575_47849 = state_46568__$1;
(statearr_46575_47849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46569 === (6))){
var inst_46548 = (state_46568[(7)]);
var inst_46551 = (state_46568[(8)]);
var inst_46555 = (state_46568[(9)]);
var inst_46555__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46548,inst_46551) : f.call(null,inst_46548,inst_46551));
var inst_46556 = cljs.core.reduced_QMARK_(inst_46555__$1);
var state_46568__$1 = (function (){var statearr_46576 = state_46568;
(statearr_46576[(9)] = inst_46555__$1);

return statearr_46576;
})();
if(inst_46556){
var statearr_46577_47852 = state_46568__$1;
(statearr_46577_47852[(1)] = (8));

} else {
var statearr_46578_47853 = state_46568__$1;
(statearr_46578_47853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46569 === (3))){
var inst_46566 = (state_46568[(2)]);
var state_46568__$1 = state_46568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46568__$1,inst_46566);
} else {
if((state_val_46569 === (2))){
var state_46568__$1 = state_46568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46568__$1,(4),ch);
} else {
if((state_val_46569 === (9))){
var inst_46555 = (state_46568[(9)]);
var inst_46548 = inst_46555;
var state_46568__$1 = (function (){var statearr_46579 = state_46568;
(statearr_46579[(7)] = inst_46548);

return statearr_46579;
})();
var statearr_46580_47858 = state_46568__$1;
(statearr_46580_47858[(2)] = null);

(statearr_46580_47858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46569 === (5))){
var inst_46548 = (state_46568[(7)]);
var state_46568__$1 = state_46568;
var statearr_46581_47859 = state_46568__$1;
(statearr_46581_47859[(2)] = inst_46548);

(statearr_46581_47859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46569 === (10))){
var inst_46562 = (state_46568[(2)]);
var state_46568__$1 = state_46568;
var statearr_46582_47860 = state_46568__$1;
(statearr_46582_47860[(2)] = inst_46562);

(statearr_46582_47860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46569 === (8))){
var inst_46555 = (state_46568[(9)]);
var inst_46558 = cljs.core.deref(inst_46555);
var state_46568__$1 = state_46568;
var statearr_46583_47861 = state_46568__$1;
(statearr_46583_47861[(2)] = inst_46558);

(statearr_46583_47861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46067__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46067__auto____0 = (function (){
var statearr_46584 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46584[(0)] = cljs$core$async$reduce_$_state_machine__46067__auto__);

(statearr_46584[(1)] = (1));

return statearr_46584;
});
var cljs$core$async$reduce_$_state_machine__46067__auto____1 = (function (state_46568){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46568);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46585){var ex__46070__auto__ = e46585;
var statearr_46586_47862 = state_46568;
(statearr_46586_47862[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46568[(4)]))){
var statearr_46587_47863 = state_46568;
(statearr_46587_47863[(1)] = cljs.core.first((state_46568[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47864 = state_46568;
state_46568 = G__47864;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46067__auto__ = function(state_46568){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46067__auto____1.call(this,state_46568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46067__auto____0;
cljs$core$async$reduce_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46067__auto____1;
return cljs$core$async$reduce_$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46588 = f__46138__auto__();
(statearr_46588[(6)] = c__46137__auto__);

return statearr_46588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

return c__46137__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46137__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46594){
var state_val_46595 = (state_46594[(1)]);
if((state_val_46595 === (1))){
var inst_46589 = cljs.core.async.reduce(f__$1,init,ch);
var state_46594__$1 = state_46594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46594__$1,(2),inst_46589);
} else {
if((state_val_46595 === (2))){
var inst_46591 = (state_46594[(2)]);
var inst_46592 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46591) : f__$1.call(null,inst_46591));
var state_46594__$1 = state_46594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46594__$1,inst_46592);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46067__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46067__auto____0 = (function (){
var statearr_46596 = [null,null,null,null,null,null,null];
(statearr_46596[(0)] = cljs$core$async$transduce_$_state_machine__46067__auto__);

(statearr_46596[(1)] = (1));

return statearr_46596;
});
var cljs$core$async$transduce_$_state_machine__46067__auto____1 = (function (state_46594){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46594);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46597){var ex__46070__auto__ = e46597;
var statearr_46598_47868 = state_46594;
(statearr_46598_47868[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46594[(4)]))){
var statearr_46599_47869 = state_46594;
(statearr_46599_47869[(1)] = cljs.core.first((state_46594[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47870 = state_46594;
state_46594 = G__47870;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46067__auto__ = function(state_46594){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46067__auto____1.call(this,state_46594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46067__auto____0;
cljs$core$async$transduce_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46067__auto____1;
return cljs$core$async$transduce_$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46600 = f__46138__auto__();
(statearr_46600[(6)] = c__46137__auto__);

return statearr_46600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

return c__46137__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46602 = arguments.length;
switch (G__46602) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46137__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46627){
var state_val_46628 = (state_46627[(1)]);
if((state_val_46628 === (7))){
var inst_46609 = (state_46627[(2)]);
var state_46627__$1 = state_46627;
var statearr_46629_47872 = state_46627__$1;
(statearr_46629_47872[(2)] = inst_46609);

(statearr_46629_47872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (1))){
var inst_46603 = cljs.core.seq(coll);
var inst_46604 = inst_46603;
var state_46627__$1 = (function (){var statearr_46630 = state_46627;
(statearr_46630[(7)] = inst_46604);

return statearr_46630;
})();
var statearr_46631_47876 = state_46627__$1;
(statearr_46631_47876[(2)] = null);

(statearr_46631_47876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (4))){
var inst_46604 = (state_46627[(7)]);
var inst_46607 = cljs.core.first(inst_46604);
var state_46627__$1 = state_46627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46627__$1,(7),ch,inst_46607);
} else {
if((state_val_46628 === (13))){
var inst_46621 = (state_46627[(2)]);
var state_46627__$1 = state_46627;
var statearr_46632_47881 = state_46627__$1;
(statearr_46632_47881[(2)] = inst_46621);

(statearr_46632_47881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (6))){
var inst_46612 = (state_46627[(2)]);
var state_46627__$1 = state_46627;
if(cljs.core.truth_(inst_46612)){
var statearr_46633_47882 = state_46627__$1;
(statearr_46633_47882[(1)] = (8));

} else {
var statearr_46634_47883 = state_46627__$1;
(statearr_46634_47883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (3))){
var inst_46625 = (state_46627[(2)]);
var state_46627__$1 = state_46627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46627__$1,inst_46625);
} else {
if((state_val_46628 === (12))){
var state_46627__$1 = state_46627;
var statearr_46635_47884 = state_46627__$1;
(statearr_46635_47884[(2)] = null);

(statearr_46635_47884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (2))){
var inst_46604 = (state_46627[(7)]);
var state_46627__$1 = state_46627;
if(cljs.core.truth_(inst_46604)){
var statearr_46636_47885 = state_46627__$1;
(statearr_46636_47885[(1)] = (4));

} else {
var statearr_46637_47886 = state_46627__$1;
(statearr_46637_47886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (11))){
var inst_46618 = cljs.core.async.close_BANG_(ch);
var state_46627__$1 = state_46627;
var statearr_46638_47888 = state_46627__$1;
(statearr_46638_47888[(2)] = inst_46618);

(statearr_46638_47888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (9))){
var state_46627__$1 = state_46627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46639_47889 = state_46627__$1;
(statearr_46639_47889[(1)] = (11));

} else {
var statearr_46640_47890 = state_46627__$1;
(statearr_46640_47890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (5))){
var inst_46604 = (state_46627[(7)]);
var state_46627__$1 = state_46627;
var statearr_46641_47891 = state_46627__$1;
(statearr_46641_47891[(2)] = inst_46604);

(statearr_46641_47891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (10))){
var inst_46623 = (state_46627[(2)]);
var state_46627__$1 = state_46627;
var statearr_46642_47892 = state_46627__$1;
(statearr_46642_47892[(2)] = inst_46623);

(statearr_46642_47892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (8))){
var inst_46604 = (state_46627[(7)]);
var inst_46614 = cljs.core.next(inst_46604);
var inst_46604__$1 = inst_46614;
var state_46627__$1 = (function (){var statearr_46643 = state_46627;
(statearr_46643[(7)] = inst_46604__$1);

return statearr_46643;
})();
var statearr_46644_47893 = state_46627__$1;
(statearr_46644_47893[(2)] = null);

(statearr_46644_47893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_46645 = [null,null,null,null,null,null,null,null];
(statearr_46645[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_46645[(1)] = (1));

return statearr_46645;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_46627){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46627);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46646){var ex__46070__auto__ = e46646;
var statearr_46647_47895 = state_46627;
(statearr_46647_47895[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46627[(4)]))){
var statearr_46648_47896 = state_46627;
(statearr_46648_47896[(1)] = cljs.core.first((state_46627[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47897 = state_46627;
state_46627 = G__47897;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_46627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_46627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46649 = f__46138__auto__();
(statearr_46649[(6)] = c__46137__auto__);

return statearr_46649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

return c__46137__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46651 = arguments.length;
switch (G__46651) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47902 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47902(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47903 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47903(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47904 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47904(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47905 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47905(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46652 = (function (ch,cs,meta46653){
this.ch = ch;
this.cs = cs;
this.meta46653 = meta46653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46654,meta46653__$1){
var self__ = this;
var _46654__$1 = this;
return (new cljs.core.async.t_cljs$core$async46652(self__.ch,self__.cs,meta46653__$1));
}));

(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46654){
var self__ = this;
var _46654__$1 = this;
return self__.meta46653;
}));

(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46652.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46653","meta46653",1669171110,null)], null);
}));

(cljs.core.async.t_cljs$core$async46652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46652");

(cljs.core.async.t_cljs$core$async46652.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46652.
 */
cljs.core.async.__GT_t_cljs$core$async46652 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46652(ch__$1,cs__$1,meta46653){
return (new cljs.core.async.t_cljs$core$async46652(ch__$1,cs__$1,meta46653));
});

}

return (new cljs.core.async.t_cljs$core$async46652(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46137__auto___47918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46787){
var state_val_46788 = (state_46787[(1)]);
if((state_val_46788 === (7))){
var inst_46783 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46789_47919 = state_46787__$1;
(statearr_46789_47919[(2)] = inst_46783);

(statearr_46789_47919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (20))){
var inst_46688 = (state_46787[(7)]);
var inst_46700 = cljs.core.first(inst_46688);
var inst_46701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46700,(0),null);
var inst_46702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46700,(1),null);
var state_46787__$1 = (function (){var statearr_46790 = state_46787;
(statearr_46790[(8)] = inst_46701);

return statearr_46790;
})();
if(cljs.core.truth_(inst_46702)){
var statearr_46791_47920 = state_46787__$1;
(statearr_46791_47920[(1)] = (22));

} else {
var statearr_46792_47921 = state_46787__$1;
(statearr_46792_47921[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (27))){
var inst_46730 = (state_46787[(9)]);
var inst_46732 = (state_46787[(10)]);
var inst_46737 = (state_46787[(11)]);
var inst_46657 = (state_46787[(12)]);
var inst_46737__$1 = cljs.core._nth(inst_46730,inst_46732);
var inst_46738 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46737__$1,inst_46657,done);
var state_46787__$1 = (function (){var statearr_46793 = state_46787;
(statearr_46793[(11)] = inst_46737__$1);

return statearr_46793;
})();
if(cljs.core.truth_(inst_46738)){
var statearr_46794_47922 = state_46787__$1;
(statearr_46794_47922[(1)] = (30));

} else {
var statearr_46795_47923 = state_46787__$1;
(statearr_46795_47923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (1))){
var state_46787__$1 = state_46787;
var statearr_46796_47924 = state_46787__$1;
(statearr_46796_47924[(2)] = null);

(statearr_46796_47924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (24))){
var inst_46688 = (state_46787[(7)]);
var inst_46707 = (state_46787[(2)]);
var inst_46708 = cljs.core.next(inst_46688);
var inst_46666 = inst_46708;
var inst_46667 = null;
var inst_46668 = (0);
var inst_46669 = (0);
var state_46787__$1 = (function (){var statearr_46797 = state_46787;
(statearr_46797[(13)] = inst_46707);

(statearr_46797[(14)] = inst_46666);

(statearr_46797[(15)] = inst_46667);

(statearr_46797[(16)] = inst_46668);

(statearr_46797[(17)] = inst_46669);

return statearr_46797;
})();
var statearr_46798_47925 = state_46787__$1;
(statearr_46798_47925[(2)] = null);

(statearr_46798_47925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (39))){
var state_46787__$1 = state_46787;
var statearr_46802_47926 = state_46787__$1;
(statearr_46802_47926[(2)] = null);

(statearr_46802_47926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (4))){
var inst_46657 = (state_46787[(12)]);
var inst_46657__$1 = (state_46787[(2)]);
var inst_46658 = (inst_46657__$1 == null);
var state_46787__$1 = (function (){var statearr_46803 = state_46787;
(statearr_46803[(12)] = inst_46657__$1);

return statearr_46803;
})();
if(cljs.core.truth_(inst_46658)){
var statearr_46804_47929 = state_46787__$1;
(statearr_46804_47929[(1)] = (5));

} else {
var statearr_46805_47930 = state_46787__$1;
(statearr_46805_47930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (15))){
var inst_46669 = (state_46787[(17)]);
var inst_46666 = (state_46787[(14)]);
var inst_46667 = (state_46787[(15)]);
var inst_46668 = (state_46787[(16)]);
var inst_46684 = (state_46787[(2)]);
var inst_46685 = (inst_46669 + (1));
var tmp46799 = inst_46667;
var tmp46800 = inst_46668;
var tmp46801 = inst_46666;
var inst_46666__$1 = tmp46801;
var inst_46667__$1 = tmp46799;
var inst_46668__$1 = tmp46800;
var inst_46669__$1 = inst_46685;
var state_46787__$1 = (function (){var statearr_46806 = state_46787;
(statearr_46806[(18)] = inst_46684);

(statearr_46806[(14)] = inst_46666__$1);

(statearr_46806[(15)] = inst_46667__$1);

(statearr_46806[(16)] = inst_46668__$1);

(statearr_46806[(17)] = inst_46669__$1);

return statearr_46806;
})();
var statearr_46807_47931 = state_46787__$1;
(statearr_46807_47931[(2)] = null);

(statearr_46807_47931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (21))){
var inst_46711 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46811_47934 = state_46787__$1;
(statearr_46811_47934[(2)] = inst_46711);

(statearr_46811_47934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (31))){
var inst_46737 = (state_46787[(11)]);
var inst_46741 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46737);
var state_46787__$1 = state_46787;
var statearr_46812_47939 = state_46787__$1;
(statearr_46812_47939[(2)] = inst_46741);

(statearr_46812_47939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (32))){
var inst_46732 = (state_46787[(10)]);
var inst_46729 = (state_46787[(19)]);
var inst_46730 = (state_46787[(9)]);
var inst_46731 = (state_46787[(20)]);
var inst_46743 = (state_46787[(2)]);
var inst_46744 = (inst_46732 + (1));
var tmp46808 = inst_46731;
var tmp46809 = inst_46730;
var tmp46810 = inst_46729;
var inst_46729__$1 = tmp46810;
var inst_46730__$1 = tmp46809;
var inst_46731__$1 = tmp46808;
var inst_46732__$1 = inst_46744;
var state_46787__$1 = (function (){var statearr_46813 = state_46787;
(statearr_46813[(21)] = inst_46743);

(statearr_46813[(19)] = inst_46729__$1);

(statearr_46813[(9)] = inst_46730__$1);

(statearr_46813[(20)] = inst_46731__$1);

(statearr_46813[(10)] = inst_46732__$1);

return statearr_46813;
})();
var statearr_46814_47943 = state_46787__$1;
(statearr_46814_47943[(2)] = null);

(statearr_46814_47943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (40))){
var inst_46756 = (state_46787[(22)]);
var inst_46760 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46756);
var state_46787__$1 = state_46787;
var statearr_46815_47945 = state_46787__$1;
(statearr_46815_47945[(2)] = inst_46760);

(statearr_46815_47945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (33))){
var inst_46747 = (state_46787[(23)]);
var inst_46749 = cljs.core.chunked_seq_QMARK_(inst_46747);
var state_46787__$1 = state_46787;
if(inst_46749){
var statearr_46816_47948 = state_46787__$1;
(statearr_46816_47948[(1)] = (36));

} else {
var statearr_46817_47950 = state_46787__$1;
(statearr_46817_47950[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (13))){
var inst_46678 = (state_46787[(24)]);
var inst_46681 = cljs.core.async.close_BANG_(inst_46678);
var state_46787__$1 = state_46787;
var statearr_46818_47951 = state_46787__$1;
(statearr_46818_47951[(2)] = inst_46681);

(statearr_46818_47951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (22))){
var inst_46701 = (state_46787[(8)]);
var inst_46704 = cljs.core.async.close_BANG_(inst_46701);
var state_46787__$1 = state_46787;
var statearr_46819_47953 = state_46787__$1;
(statearr_46819_47953[(2)] = inst_46704);

(statearr_46819_47953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (36))){
var inst_46747 = (state_46787[(23)]);
var inst_46751 = cljs.core.chunk_first(inst_46747);
var inst_46752 = cljs.core.chunk_rest(inst_46747);
var inst_46753 = cljs.core.count(inst_46751);
var inst_46729 = inst_46752;
var inst_46730 = inst_46751;
var inst_46731 = inst_46753;
var inst_46732 = (0);
var state_46787__$1 = (function (){var statearr_46820 = state_46787;
(statearr_46820[(19)] = inst_46729);

(statearr_46820[(9)] = inst_46730);

(statearr_46820[(20)] = inst_46731);

(statearr_46820[(10)] = inst_46732);

return statearr_46820;
})();
var statearr_46821_47955 = state_46787__$1;
(statearr_46821_47955[(2)] = null);

(statearr_46821_47955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (41))){
var inst_46747 = (state_46787[(23)]);
var inst_46762 = (state_46787[(2)]);
var inst_46763 = cljs.core.next(inst_46747);
var inst_46729 = inst_46763;
var inst_46730 = null;
var inst_46731 = (0);
var inst_46732 = (0);
var state_46787__$1 = (function (){var statearr_46822 = state_46787;
(statearr_46822[(25)] = inst_46762);

(statearr_46822[(19)] = inst_46729);

(statearr_46822[(9)] = inst_46730);

(statearr_46822[(20)] = inst_46731);

(statearr_46822[(10)] = inst_46732);

return statearr_46822;
})();
var statearr_46823_47962 = state_46787__$1;
(statearr_46823_47962[(2)] = null);

(statearr_46823_47962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (43))){
var state_46787__$1 = state_46787;
var statearr_46824_47963 = state_46787__$1;
(statearr_46824_47963[(2)] = null);

(statearr_46824_47963[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (29))){
var inst_46771 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46825_47964 = state_46787__$1;
(statearr_46825_47964[(2)] = inst_46771);

(statearr_46825_47964[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (44))){
var inst_46780 = (state_46787[(2)]);
var state_46787__$1 = (function (){var statearr_46826 = state_46787;
(statearr_46826[(26)] = inst_46780);

return statearr_46826;
})();
var statearr_46827_47965 = state_46787__$1;
(statearr_46827_47965[(2)] = null);

(statearr_46827_47965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (6))){
var inst_46721 = (state_46787[(27)]);
var inst_46720 = cljs.core.deref(cs);
var inst_46721__$1 = cljs.core.keys(inst_46720);
var inst_46722 = cljs.core.count(inst_46721__$1);
var inst_46723 = cljs.core.reset_BANG_(dctr,inst_46722);
var inst_46728 = cljs.core.seq(inst_46721__$1);
var inst_46729 = inst_46728;
var inst_46730 = null;
var inst_46731 = (0);
var inst_46732 = (0);
var state_46787__$1 = (function (){var statearr_46828 = state_46787;
(statearr_46828[(27)] = inst_46721__$1);

(statearr_46828[(28)] = inst_46723);

(statearr_46828[(19)] = inst_46729);

(statearr_46828[(9)] = inst_46730);

(statearr_46828[(20)] = inst_46731);

(statearr_46828[(10)] = inst_46732);

return statearr_46828;
})();
var statearr_46829_47966 = state_46787__$1;
(statearr_46829_47966[(2)] = null);

(statearr_46829_47966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (28))){
var inst_46729 = (state_46787[(19)]);
var inst_46747 = (state_46787[(23)]);
var inst_46747__$1 = cljs.core.seq(inst_46729);
var state_46787__$1 = (function (){var statearr_46830 = state_46787;
(statearr_46830[(23)] = inst_46747__$1);

return statearr_46830;
})();
if(inst_46747__$1){
var statearr_46831_47967 = state_46787__$1;
(statearr_46831_47967[(1)] = (33));

} else {
var statearr_46832_47968 = state_46787__$1;
(statearr_46832_47968[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (25))){
var inst_46732 = (state_46787[(10)]);
var inst_46731 = (state_46787[(20)]);
var inst_46734 = (inst_46732 < inst_46731);
var inst_46735 = inst_46734;
var state_46787__$1 = state_46787;
if(cljs.core.truth_(inst_46735)){
var statearr_46833_47969 = state_46787__$1;
(statearr_46833_47969[(1)] = (27));

} else {
var statearr_46834_47970 = state_46787__$1;
(statearr_46834_47970[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (34))){
var state_46787__$1 = state_46787;
var statearr_46835_47971 = state_46787__$1;
(statearr_46835_47971[(2)] = null);

(statearr_46835_47971[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (17))){
var state_46787__$1 = state_46787;
var statearr_46836_47978 = state_46787__$1;
(statearr_46836_47978[(2)] = null);

(statearr_46836_47978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (3))){
var inst_46785 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46787__$1,inst_46785);
} else {
if((state_val_46788 === (12))){
var inst_46716 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46837_47980 = state_46787__$1;
(statearr_46837_47980[(2)] = inst_46716);

(statearr_46837_47980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (2))){
var state_46787__$1 = state_46787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46787__$1,(4),ch);
} else {
if((state_val_46788 === (23))){
var state_46787__$1 = state_46787;
var statearr_46838_47984 = state_46787__$1;
(statearr_46838_47984[(2)] = null);

(statearr_46838_47984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (35))){
var inst_46769 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46839_47985 = state_46787__$1;
(statearr_46839_47985[(2)] = inst_46769);

(statearr_46839_47985[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (19))){
var inst_46688 = (state_46787[(7)]);
var inst_46692 = cljs.core.chunk_first(inst_46688);
var inst_46693 = cljs.core.chunk_rest(inst_46688);
var inst_46694 = cljs.core.count(inst_46692);
var inst_46666 = inst_46693;
var inst_46667 = inst_46692;
var inst_46668 = inst_46694;
var inst_46669 = (0);
var state_46787__$1 = (function (){var statearr_46840 = state_46787;
(statearr_46840[(14)] = inst_46666);

(statearr_46840[(15)] = inst_46667);

(statearr_46840[(16)] = inst_46668);

(statearr_46840[(17)] = inst_46669);

return statearr_46840;
})();
var statearr_46841_47987 = state_46787__$1;
(statearr_46841_47987[(2)] = null);

(statearr_46841_47987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (11))){
var inst_46666 = (state_46787[(14)]);
var inst_46688 = (state_46787[(7)]);
var inst_46688__$1 = cljs.core.seq(inst_46666);
var state_46787__$1 = (function (){var statearr_46842 = state_46787;
(statearr_46842[(7)] = inst_46688__$1);

return statearr_46842;
})();
if(inst_46688__$1){
var statearr_46843_47989 = state_46787__$1;
(statearr_46843_47989[(1)] = (16));

} else {
var statearr_46844_47990 = state_46787__$1;
(statearr_46844_47990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (9))){
var inst_46718 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46845_47992 = state_46787__$1;
(statearr_46845_47992[(2)] = inst_46718);

(statearr_46845_47992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (5))){
var inst_46664 = cljs.core.deref(cs);
var inst_46665 = cljs.core.seq(inst_46664);
var inst_46666 = inst_46665;
var inst_46667 = null;
var inst_46668 = (0);
var inst_46669 = (0);
var state_46787__$1 = (function (){var statearr_46846 = state_46787;
(statearr_46846[(14)] = inst_46666);

(statearr_46846[(15)] = inst_46667);

(statearr_46846[(16)] = inst_46668);

(statearr_46846[(17)] = inst_46669);

return statearr_46846;
})();
var statearr_46847_47993 = state_46787__$1;
(statearr_46847_47993[(2)] = null);

(statearr_46847_47993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (14))){
var state_46787__$1 = state_46787;
var statearr_46848_47998 = state_46787__$1;
(statearr_46848_47998[(2)] = null);

(statearr_46848_47998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (45))){
var inst_46777 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46849_48002 = state_46787__$1;
(statearr_46849_48002[(2)] = inst_46777);

(statearr_46849_48002[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (26))){
var inst_46721 = (state_46787[(27)]);
var inst_46773 = (state_46787[(2)]);
var inst_46774 = cljs.core.seq(inst_46721);
var state_46787__$1 = (function (){var statearr_46850 = state_46787;
(statearr_46850[(29)] = inst_46773);

return statearr_46850;
})();
if(inst_46774){
var statearr_46851_48003 = state_46787__$1;
(statearr_46851_48003[(1)] = (42));

} else {
var statearr_46852_48004 = state_46787__$1;
(statearr_46852_48004[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (16))){
var inst_46688 = (state_46787[(7)]);
var inst_46690 = cljs.core.chunked_seq_QMARK_(inst_46688);
var state_46787__$1 = state_46787;
if(inst_46690){
var statearr_46853_48010 = state_46787__$1;
(statearr_46853_48010[(1)] = (19));

} else {
var statearr_46854_48011 = state_46787__$1;
(statearr_46854_48011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (38))){
var inst_46766 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46855_48012 = state_46787__$1;
(statearr_46855_48012[(2)] = inst_46766);

(statearr_46855_48012[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (30))){
var state_46787__$1 = state_46787;
var statearr_46856_48018 = state_46787__$1;
(statearr_46856_48018[(2)] = null);

(statearr_46856_48018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (10))){
var inst_46667 = (state_46787[(15)]);
var inst_46669 = (state_46787[(17)]);
var inst_46677 = cljs.core._nth(inst_46667,inst_46669);
var inst_46678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46677,(0),null);
var inst_46679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46677,(1),null);
var state_46787__$1 = (function (){var statearr_46857 = state_46787;
(statearr_46857[(24)] = inst_46678);

return statearr_46857;
})();
if(cljs.core.truth_(inst_46679)){
var statearr_46858_48022 = state_46787__$1;
(statearr_46858_48022[(1)] = (13));

} else {
var statearr_46859_48023 = state_46787__$1;
(statearr_46859_48023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (18))){
var inst_46714 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46860_48024 = state_46787__$1;
(statearr_46860_48024[(2)] = inst_46714);

(statearr_46860_48024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (42))){
var state_46787__$1 = state_46787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46787__$1,(45),dchan);
} else {
if((state_val_46788 === (37))){
var inst_46747 = (state_46787[(23)]);
var inst_46756 = (state_46787[(22)]);
var inst_46657 = (state_46787[(12)]);
var inst_46756__$1 = cljs.core.first(inst_46747);
var inst_46757 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46756__$1,inst_46657,done);
var state_46787__$1 = (function (){var statearr_46861 = state_46787;
(statearr_46861[(22)] = inst_46756__$1);

return statearr_46861;
})();
if(cljs.core.truth_(inst_46757)){
var statearr_46862_48030 = state_46787__$1;
(statearr_46862_48030[(1)] = (39));

} else {
var statearr_46863_48031 = state_46787__$1;
(statearr_46863_48031[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (8))){
var inst_46669 = (state_46787[(17)]);
var inst_46668 = (state_46787[(16)]);
var inst_46671 = (inst_46669 < inst_46668);
var inst_46672 = inst_46671;
var state_46787__$1 = state_46787;
if(cljs.core.truth_(inst_46672)){
var statearr_46864_48035 = state_46787__$1;
(statearr_46864_48035[(1)] = (10));

} else {
var statearr_46865_48037 = state_46787__$1;
(statearr_46865_48037[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46067__auto__ = null;
var cljs$core$async$mult_$_state_machine__46067__auto____0 = (function (){
var statearr_46866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46866[(0)] = cljs$core$async$mult_$_state_machine__46067__auto__);

(statearr_46866[(1)] = (1));

return statearr_46866;
});
var cljs$core$async$mult_$_state_machine__46067__auto____1 = (function (state_46787){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46787);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46867){var ex__46070__auto__ = e46867;
var statearr_46868_48042 = state_46787;
(statearr_46868_48042[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46787[(4)]))){
var statearr_46869_48043 = state_46787;
(statearr_46869_48043[(1)] = cljs.core.first((state_46787[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48044 = state_46787;
state_46787 = G__48044;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46067__auto__ = function(state_46787){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46067__auto____1.call(this,state_46787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46067__auto____0;
cljs$core$async$mult_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46067__auto____1;
return cljs$core$async$mult_$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46870 = f__46138__auto__();
(statearr_46870[(6)] = c__46137__auto___47918);

return statearr_46870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46872 = arguments.length;
switch (G__46872) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48052 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48052(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48053 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48053(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48057 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48057(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48058 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48058(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48059 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48059(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48061 = arguments.length;
var i__5770__auto___48062 = (0);
while(true){
if((i__5770__auto___48062 < len__5769__auto___48061)){
args__5775__auto__.push((arguments[i__5770__auto___48062]));

var G__48063 = (i__5770__auto___48062 + (1));
i__5770__auto___48062 = G__48063;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46877){
var map__46878 = p__46877;
var map__46878__$1 = cljs.core.__destructure_map(map__46878);
var opts = map__46878__$1;
var statearr_46879_48064 = state;
(statearr_46879_48064[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46880_48065 = state;
(statearr_46880_48065[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_46881_48066 = state;
(statearr_46881_48066[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46873){
var G__46874 = cljs.core.first(seq46873);
var seq46873__$1 = cljs.core.next(seq46873);
var G__46875 = cljs.core.first(seq46873__$1);
var seq46873__$2 = cljs.core.next(seq46873__$1);
var G__46876 = cljs.core.first(seq46873__$2);
var seq46873__$3 = cljs.core.next(seq46873__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46874,G__46875,G__46876,seq46873__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46882 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46883){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46883 = meta46883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46884,meta46883__$1){
var self__ = this;
var _46884__$1 = this;
return (new cljs.core.async.t_cljs$core$async46882(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46883__$1));
}));

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46884){
var self__ = this;
var _46884__$1 = this;
return self__.meta46883;
}));

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46882.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46883","meta46883",-1506923976,null)], null);
}));

(cljs.core.async.t_cljs$core$async46882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46882");

(cljs.core.async.t_cljs$core$async46882.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46882.
 */
cljs.core.async.__GT_t_cljs$core$async46882 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46882(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46883){
return (new cljs.core.async.t_cljs$core$async46882(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46883));
});

}

return (new cljs.core.async.t_cljs$core$async46882(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46137__auto___48071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_46952){
var state_val_46953 = (state_46952[(1)]);
if((state_val_46953 === (7))){
var inst_46912 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
if(cljs.core.truth_(inst_46912)){
var statearr_46954_48072 = state_46952__$1;
(statearr_46954_48072[(1)] = (8));

} else {
var statearr_46955_48073 = state_46952__$1;
(statearr_46955_48073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (20))){
var inst_46905 = (state_46952[(7)]);
var state_46952__$1 = state_46952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46952__$1,(23),out,inst_46905);
} else {
if((state_val_46953 === (1))){
var inst_46888 = calc_state();
var inst_46889 = cljs.core.__destructure_map(inst_46888);
var inst_46890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46889,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46889,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46889,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46893 = inst_46888;
var state_46952__$1 = (function (){var statearr_46956 = state_46952;
(statearr_46956[(8)] = inst_46890);

(statearr_46956[(9)] = inst_46891);

(statearr_46956[(10)] = inst_46892);

(statearr_46956[(11)] = inst_46893);

return statearr_46956;
})();
var statearr_46957_48074 = state_46952__$1;
(statearr_46957_48074[(2)] = null);

(statearr_46957_48074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (24))){
var inst_46896 = (state_46952[(12)]);
var inst_46893 = inst_46896;
var state_46952__$1 = (function (){var statearr_46958 = state_46952;
(statearr_46958[(11)] = inst_46893);

return statearr_46958;
})();
var statearr_46959_48075 = state_46952__$1;
(statearr_46959_48075[(2)] = null);

(statearr_46959_48075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (4))){
var inst_46905 = (state_46952[(7)]);
var inst_46907 = (state_46952[(13)]);
var inst_46904 = (state_46952[(2)]);
var inst_46905__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46904,(0),null);
var inst_46906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46904,(1),null);
var inst_46907__$1 = (inst_46905__$1 == null);
var state_46952__$1 = (function (){var statearr_46960 = state_46952;
(statearr_46960[(7)] = inst_46905__$1);

(statearr_46960[(14)] = inst_46906);

(statearr_46960[(13)] = inst_46907__$1);

return statearr_46960;
})();
if(cljs.core.truth_(inst_46907__$1)){
var statearr_46961_48078 = state_46952__$1;
(statearr_46961_48078[(1)] = (5));

} else {
var statearr_46962_48079 = state_46952__$1;
(statearr_46962_48079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (15))){
var inst_46897 = (state_46952[(15)]);
var inst_46926 = (state_46952[(16)]);
var inst_46926__$1 = cljs.core.empty_QMARK_(inst_46897);
var state_46952__$1 = (function (){var statearr_46963 = state_46952;
(statearr_46963[(16)] = inst_46926__$1);

return statearr_46963;
})();
if(inst_46926__$1){
var statearr_46964_48083 = state_46952__$1;
(statearr_46964_48083[(1)] = (17));

} else {
var statearr_46965_48084 = state_46952__$1;
(statearr_46965_48084[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (21))){
var inst_46896 = (state_46952[(12)]);
var inst_46893 = inst_46896;
var state_46952__$1 = (function (){var statearr_46966 = state_46952;
(statearr_46966[(11)] = inst_46893);

return statearr_46966;
})();
var statearr_46967_48085 = state_46952__$1;
(statearr_46967_48085[(2)] = null);

(statearr_46967_48085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (13))){
var inst_46919 = (state_46952[(2)]);
var inst_46920 = calc_state();
var inst_46893 = inst_46920;
var state_46952__$1 = (function (){var statearr_46968 = state_46952;
(statearr_46968[(17)] = inst_46919);

(statearr_46968[(11)] = inst_46893);

return statearr_46968;
})();
var statearr_46969_48086 = state_46952__$1;
(statearr_46969_48086[(2)] = null);

(statearr_46969_48086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (22))){
var inst_46946 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
var statearr_46970_48087 = state_46952__$1;
(statearr_46970_48087[(2)] = inst_46946);

(statearr_46970_48087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (6))){
var inst_46906 = (state_46952[(14)]);
var inst_46910 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46906,change);
var state_46952__$1 = state_46952;
var statearr_46971_48089 = state_46952__$1;
(statearr_46971_48089[(2)] = inst_46910);

(statearr_46971_48089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (25))){
var state_46952__$1 = state_46952;
var statearr_46972_48090 = state_46952__$1;
(statearr_46972_48090[(2)] = null);

(statearr_46972_48090[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (17))){
var inst_46898 = (state_46952[(18)]);
var inst_46906 = (state_46952[(14)]);
var inst_46928 = (inst_46898.cljs$core$IFn$_invoke$arity$1 ? inst_46898.cljs$core$IFn$_invoke$arity$1(inst_46906) : inst_46898.call(null,inst_46906));
var inst_46929 = cljs.core.not(inst_46928);
var state_46952__$1 = state_46952;
var statearr_46973_48091 = state_46952__$1;
(statearr_46973_48091[(2)] = inst_46929);

(statearr_46973_48091[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (3))){
var inst_46950 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46952__$1,inst_46950);
} else {
if((state_val_46953 === (12))){
var state_46952__$1 = state_46952;
var statearr_46974_48092 = state_46952__$1;
(statearr_46974_48092[(2)] = null);

(statearr_46974_48092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (2))){
var inst_46893 = (state_46952[(11)]);
var inst_46896 = (state_46952[(12)]);
var inst_46896__$1 = cljs.core.__destructure_map(inst_46893);
var inst_46897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46896__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46896__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46896__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46952__$1 = (function (){var statearr_46975 = state_46952;
(statearr_46975[(12)] = inst_46896__$1);

(statearr_46975[(15)] = inst_46897);

(statearr_46975[(18)] = inst_46898);

return statearr_46975;
})();
return cljs.core.async.ioc_alts_BANG_(state_46952__$1,(4),inst_46899);
} else {
if((state_val_46953 === (23))){
var inst_46937 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
if(cljs.core.truth_(inst_46937)){
var statearr_46976_48093 = state_46952__$1;
(statearr_46976_48093[(1)] = (24));

} else {
var statearr_46977_48094 = state_46952__$1;
(statearr_46977_48094[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (19))){
var inst_46932 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
var statearr_46978_48096 = state_46952__$1;
(statearr_46978_48096[(2)] = inst_46932);

(statearr_46978_48096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (11))){
var inst_46906 = (state_46952[(14)]);
var inst_46916 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46906);
var state_46952__$1 = state_46952;
var statearr_46979_48098 = state_46952__$1;
(statearr_46979_48098[(2)] = inst_46916);

(statearr_46979_48098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (9))){
var inst_46897 = (state_46952[(15)]);
var inst_46906 = (state_46952[(14)]);
var inst_46923 = (state_46952[(19)]);
var inst_46923__$1 = (inst_46897.cljs$core$IFn$_invoke$arity$1 ? inst_46897.cljs$core$IFn$_invoke$arity$1(inst_46906) : inst_46897.call(null,inst_46906));
var state_46952__$1 = (function (){var statearr_46980 = state_46952;
(statearr_46980[(19)] = inst_46923__$1);

return statearr_46980;
})();
if(cljs.core.truth_(inst_46923__$1)){
var statearr_46981_48099 = state_46952__$1;
(statearr_46981_48099[(1)] = (14));

} else {
var statearr_46982_48100 = state_46952__$1;
(statearr_46982_48100[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (5))){
var inst_46907 = (state_46952[(13)]);
var state_46952__$1 = state_46952;
var statearr_46983_48101 = state_46952__$1;
(statearr_46983_48101[(2)] = inst_46907);

(statearr_46983_48101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (14))){
var inst_46923 = (state_46952[(19)]);
var state_46952__$1 = state_46952;
var statearr_46984_48102 = state_46952__$1;
(statearr_46984_48102[(2)] = inst_46923);

(statearr_46984_48102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (26))){
var inst_46942 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
var statearr_46985_48103 = state_46952__$1;
(statearr_46985_48103[(2)] = inst_46942);

(statearr_46985_48103[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (16))){
var inst_46934 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
if(cljs.core.truth_(inst_46934)){
var statearr_46986_48104 = state_46952__$1;
(statearr_46986_48104[(1)] = (20));

} else {
var statearr_46987_48105 = state_46952__$1;
(statearr_46987_48105[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (10))){
var inst_46948 = (state_46952[(2)]);
var state_46952__$1 = state_46952;
var statearr_46988_48106 = state_46952__$1;
(statearr_46988_48106[(2)] = inst_46948);

(statearr_46988_48106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (18))){
var inst_46926 = (state_46952[(16)]);
var state_46952__$1 = state_46952;
var statearr_46989_48107 = state_46952__$1;
(statearr_46989_48107[(2)] = inst_46926);

(statearr_46989_48107[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46953 === (8))){
var inst_46905 = (state_46952[(7)]);
var inst_46914 = (inst_46905 == null);
var state_46952__$1 = state_46952;
if(cljs.core.truth_(inst_46914)){
var statearr_46990_48108 = state_46952__$1;
(statearr_46990_48108[(1)] = (11));

} else {
var statearr_46991_48109 = state_46952__$1;
(statearr_46991_48109[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46067__auto__ = null;
var cljs$core$async$mix_$_state_machine__46067__auto____0 = (function (){
var statearr_46992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46992[(0)] = cljs$core$async$mix_$_state_machine__46067__auto__);

(statearr_46992[(1)] = (1));

return statearr_46992;
});
var cljs$core$async$mix_$_state_machine__46067__auto____1 = (function (state_46952){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_46952);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e46993){var ex__46070__auto__ = e46993;
var statearr_46994_48114 = state_46952;
(statearr_46994_48114[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_46952[(4)]))){
var statearr_46995_48115 = state_46952;
(statearr_46995_48115[(1)] = cljs.core.first((state_46952[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48116 = state_46952;
state_46952 = G__48116;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46067__auto__ = function(state_46952){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46067__auto____1.call(this,state_46952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46067__auto____0;
cljs$core$async$mix_$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46067__auto____1;
return cljs$core$async$mix_$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_46996 = f__46138__auto__();
(statearr_46996[(6)] = c__46137__auto___48071);

return statearr_46996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48121 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48121(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48125 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48125(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48136 = (function() {
var G__48137 = null;
var G__48137__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48137__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48137 = function(p,v){
switch(arguments.length){
case 1:
return G__48137__1.call(this,p);
case 2:
return G__48137__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48137.cljs$core$IFn$_invoke$arity$1 = G__48137__1;
G__48137.cljs$core$IFn$_invoke$arity$2 = G__48137__2;
return G__48137;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46998 = arguments.length;
switch (G__46998) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48136(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48136(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47001 = arguments.length;
switch (G__47001) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46999_SHARP_){
if(cljs.core.truth_((p1__46999_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46999_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46999_SHARP_.call(null,topic)))){
return p1__46999_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46999_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47002 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47003){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47003 = meta47003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47004,meta47003__$1){
var self__ = this;
var _47004__$1 = this;
return (new cljs.core.async.t_cljs$core$async47002(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47003__$1));
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47004){
var self__ = this;
var _47004__$1 = this;
return self__.meta47003;
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47003","meta47003",-1209798656,null)], null);
}));

(cljs.core.async.t_cljs$core$async47002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47002");

(cljs.core.async.t_cljs$core$async47002.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47002.
 */
cljs.core.async.__GT_t_cljs$core$async47002 = (function cljs$core$async$__GT_t_cljs$core$async47002(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47003){
return (new cljs.core.async.t_cljs$core$async47002(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47003));
});

}

return (new cljs.core.async.t_cljs$core$async47002(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46137__auto___48146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47076){
var state_val_47077 = (state_47076[(1)]);
if((state_val_47077 === (7))){
var inst_47072 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
var statearr_47078_48147 = state_47076__$1;
(statearr_47078_48147[(2)] = inst_47072);

(statearr_47078_48147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (20))){
var state_47076__$1 = state_47076;
var statearr_47079_48148 = state_47076__$1;
(statearr_47079_48148[(2)] = null);

(statearr_47079_48148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (1))){
var state_47076__$1 = state_47076;
var statearr_47080_48149 = state_47076__$1;
(statearr_47080_48149[(2)] = null);

(statearr_47080_48149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (24))){
var inst_47055 = (state_47076[(7)]);
var inst_47064 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47055);
var state_47076__$1 = state_47076;
var statearr_47081_48150 = state_47076__$1;
(statearr_47081_48150[(2)] = inst_47064);

(statearr_47081_48150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (4))){
var inst_47007 = (state_47076[(8)]);
var inst_47007__$1 = (state_47076[(2)]);
var inst_47008 = (inst_47007__$1 == null);
var state_47076__$1 = (function (){var statearr_47082 = state_47076;
(statearr_47082[(8)] = inst_47007__$1);

return statearr_47082;
})();
if(cljs.core.truth_(inst_47008)){
var statearr_47083_48151 = state_47076__$1;
(statearr_47083_48151[(1)] = (5));

} else {
var statearr_47084_48152 = state_47076__$1;
(statearr_47084_48152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (15))){
var inst_47049 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
var statearr_47085_48153 = state_47076__$1;
(statearr_47085_48153[(2)] = inst_47049);

(statearr_47085_48153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (21))){
var inst_47069 = (state_47076[(2)]);
var state_47076__$1 = (function (){var statearr_47086 = state_47076;
(statearr_47086[(9)] = inst_47069);

return statearr_47086;
})();
var statearr_47087_48160 = state_47076__$1;
(statearr_47087_48160[(2)] = null);

(statearr_47087_48160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (13))){
var inst_47031 = (state_47076[(10)]);
var inst_47033 = cljs.core.chunked_seq_QMARK_(inst_47031);
var state_47076__$1 = state_47076;
if(inst_47033){
var statearr_47088_48161 = state_47076__$1;
(statearr_47088_48161[(1)] = (16));

} else {
var statearr_47089_48162 = state_47076__$1;
(statearr_47089_48162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (22))){
var inst_47061 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
if(cljs.core.truth_(inst_47061)){
var statearr_47090_48163 = state_47076__$1;
(statearr_47090_48163[(1)] = (23));

} else {
var statearr_47091_48164 = state_47076__$1;
(statearr_47091_48164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (6))){
var inst_47007 = (state_47076[(8)]);
var inst_47055 = (state_47076[(7)]);
var inst_47057 = (state_47076[(11)]);
var inst_47055__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47007) : topic_fn.call(null,inst_47007));
var inst_47056 = cljs.core.deref(mults);
var inst_47057__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47056,inst_47055__$1);
var state_47076__$1 = (function (){var statearr_47092 = state_47076;
(statearr_47092[(7)] = inst_47055__$1);

(statearr_47092[(11)] = inst_47057__$1);

return statearr_47092;
})();
if(cljs.core.truth_(inst_47057__$1)){
var statearr_47093_48165 = state_47076__$1;
(statearr_47093_48165[(1)] = (19));

} else {
var statearr_47094_48166 = state_47076__$1;
(statearr_47094_48166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (25))){
var inst_47066 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
var statearr_47095_48167 = state_47076__$1;
(statearr_47095_48167[(2)] = inst_47066);

(statearr_47095_48167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (17))){
var inst_47031 = (state_47076[(10)]);
var inst_47040 = cljs.core.first(inst_47031);
var inst_47041 = cljs.core.async.muxch_STAR_(inst_47040);
var inst_47042 = cljs.core.async.close_BANG_(inst_47041);
var inst_47043 = cljs.core.next(inst_47031);
var inst_47017 = inst_47043;
var inst_47018 = null;
var inst_47019 = (0);
var inst_47020 = (0);
var state_47076__$1 = (function (){var statearr_47096 = state_47076;
(statearr_47096[(12)] = inst_47042);

(statearr_47096[(13)] = inst_47017);

(statearr_47096[(14)] = inst_47018);

(statearr_47096[(15)] = inst_47019);

(statearr_47096[(16)] = inst_47020);

return statearr_47096;
})();
var statearr_47097_48168 = state_47076__$1;
(statearr_47097_48168[(2)] = null);

(statearr_47097_48168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (3))){
var inst_47074 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47076__$1,inst_47074);
} else {
if((state_val_47077 === (12))){
var inst_47051 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
var statearr_47098_48169 = state_47076__$1;
(statearr_47098_48169[(2)] = inst_47051);

(statearr_47098_48169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (2))){
var state_47076__$1 = state_47076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47076__$1,(4),ch);
} else {
if((state_val_47077 === (23))){
var state_47076__$1 = state_47076;
var statearr_47099_48170 = state_47076__$1;
(statearr_47099_48170[(2)] = null);

(statearr_47099_48170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (19))){
var inst_47057 = (state_47076[(11)]);
var inst_47007 = (state_47076[(8)]);
var inst_47059 = cljs.core.async.muxch_STAR_(inst_47057);
var state_47076__$1 = state_47076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47076__$1,(22),inst_47059,inst_47007);
} else {
if((state_val_47077 === (11))){
var inst_47017 = (state_47076[(13)]);
var inst_47031 = (state_47076[(10)]);
var inst_47031__$1 = cljs.core.seq(inst_47017);
var state_47076__$1 = (function (){var statearr_47100 = state_47076;
(statearr_47100[(10)] = inst_47031__$1);

return statearr_47100;
})();
if(inst_47031__$1){
var statearr_47101_48177 = state_47076__$1;
(statearr_47101_48177[(1)] = (13));

} else {
var statearr_47102_48178 = state_47076__$1;
(statearr_47102_48178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (9))){
var inst_47053 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
var statearr_47103_48179 = state_47076__$1;
(statearr_47103_48179[(2)] = inst_47053);

(statearr_47103_48179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (5))){
var inst_47014 = cljs.core.deref(mults);
var inst_47015 = cljs.core.vals(inst_47014);
var inst_47016 = cljs.core.seq(inst_47015);
var inst_47017 = inst_47016;
var inst_47018 = null;
var inst_47019 = (0);
var inst_47020 = (0);
var state_47076__$1 = (function (){var statearr_47104 = state_47076;
(statearr_47104[(13)] = inst_47017);

(statearr_47104[(14)] = inst_47018);

(statearr_47104[(15)] = inst_47019);

(statearr_47104[(16)] = inst_47020);

return statearr_47104;
})();
var statearr_47105_48180 = state_47076__$1;
(statearr_47105_48180[(2)] = null);

(statearr_47105_48180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (14))){
var state_47076__$1 = state_47076;
var statearr_47109_48181 = state_47076__$1;
(statearr_47109_48181[(2)] = null);

(statearr_47109_48181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (16))){
var inst_47031 = (state_47076[(10)]);
var inst_47035 = cljs.core.chunk_first(inst_47031);
var inst_47036 = cljs.core.chunk_rest(inst_47031);
var inst_47037 = cljs.core.count(inst_47035);
var inst_47017 = inst_47036;
var inst_47018 = inst_47035;
var inst_47019 = inst_47037;
var inst_47020 = (0);
var state_47076__$1 = (function (){var statearr_47110 = state_47076;
(statearr_47110[(13)] = inst_47017);

(statearr_47110[(14)] = inst_47018);

(statearr_47110[(15)] = inst_47019);

(statearr_47110[(16)] = inst_47020);

return statearr_47110;
})();
var statearr_47111_48182 = state_47076__$1;
(statearr_47111_48182[(2)] = null);

(statearr_47111_48182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (10))){
var inst_47018 = (state_47076[(14)]);
var inst_47020 = (state_47076[(16)]);
var inst_47017 = (state_47076[(13)]);
var inst_47019 = (state_47076[(15)]);
var inst_47025 = cljs.core._nth(inst_47018,inst_47020);
var inst_47026 = cljs.core.async.muxch_STAR_(inst_47025);
var inst_47027 = cljs.core.async.close_BANG_(inst_47026);
var inst_47028 = (inst_47020 + (1));
var tmp47106 = inst_47018;
var tmp47107 = inst_47017;
var tmp47108 = inst_47019;
var inst_47017__$1 = tmp47107;
var inst_47018__$1 = tmp47106;
var inst_47019__$1 = tmp47108;
var inst_47020__$1 = inst_47028;
var state_47076__$1 = (function (){var statearr_47112 = state_47076;
(statearr_47112[(17)] = inst_47027);

(statearr_47112[(13)] = inst_47017__$1);

(statearr_47112[(14)] = inst_47018__$1);

(statearr_47112[(15)] = inst_47019__$1);

(statearr_47112[(16)] = inst_47020__$1);

return statearr_47112;
})();
var statearr_47113_48183 = state_47076__$1;
(statearr_47113_48183[(2)] = null);

(statearr_47113_48183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (18))){
var inst_47046 = (state_47076[(2)]);
var state_47076__$1 = state_47076;
var statearr_47114_48184 = state_47076__$1;
(statearr_47114_48184[(2)] = inst_47046);

(statearr_47114_48184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47077 === (8))){
var inst_47020 = (state_47076[(16)]);
var inst_47019 = (state_47076[(15)]);
var inst_47022 = (inst_47020 < inst_47019);
var inst_47023 = inst_47022;
var state_47076__$1 = state_47076;
if(cljs.core.truth_(inst_47023)){
var statearr_47115_48185 = state_47076__$1;
(statearr_47115_48185[(1)] = (10));

} else {
var statearr_47116_48186 = state_47076__$1;
(statearr_47116_48186[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47117[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47117[(1)] = (1));

return statearr_47117;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47076){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47076);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47118){var ex__46070__auto__ = e47118;
var statearr_47119_48187 = state_47076;
(statearr_47119_48187[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47076[(4)]))){
var statearr_47120_48188 = state_47076;
(statearr_47120_48188[(1)] = cljs.core.first((state_47076[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48189 = state_47076;
state_47076 = G__48189;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47121 = f__46138__auto__();
(statearr_47121[(6)] = c__46137__auto___48146);

return statearr_47121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47123 = arguments.length;
switch (G__47123) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47125 = arguments.length;
switch (G__47125) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47127 = arguments.length;
switch (G__47127) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__46137__auto___48193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47170){
var state_val_47171 = (state_47170[(1)]);
if((state_val_47171 === (7))){
var state_47170__$1 = state_47170;
var statearr_47172_48194 = state_47170__$1;
(statearr_47172_48194[(2)] = null);

(statearr_47172_48194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (1))){
var state_47170__$1 = state_47170;
var statearr_47173_48196 = state_47170__$1;
(statearr_47173_48196[(2)] = null);

(statearr_47173_48196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (4))){
var inst_47131 = (state_47170[(7)]);
var inst_47130 = (state_47170[(8)]);
var inst_47133 = (inst_47131 < inst_47130);
var state_47170__$1 = state_47170;
if(cljs.core.truth_(inst_47133)){
var statearr_47174_48197 = state_47170__$1;
(statearr_47174_48197[(1)] = (6));

} else {
var statearr_47175_48198 = state_47170__$1;
(statearr_47175_48198[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (15))){
var inst_47156 = (state_47170[(9)]);
var inst_47161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47156);
var state_47170__$1 = state_47170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47170__$1,(17),out,inst_47161);
} else {
if((state_val_47171 === (13))){
var inst_47156 = (state_47170[(9)]);
var inst_47156__$1 = (state_47170[(2)]);
var inst_47157 = cljs.core.some(cljs.core.nil_QMARK_,inst_47156__$1);
var state_47170__$1 = (function (){var statearr_47176 = state_47170;
(statearr_47176[(9)] = inst_47156__$1);

return statearr_47176;
})();
if(cljs.core.truth_(inst_47157)){
var statearr_47177_48203 = state_47170__$1;
(statearr_47177_48203[(1)] = (14));

} else {
var statearr_47178_48204 = state_47170__$1;
(statearr_47178_48204[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (6))){
var state_47170__$1 = state_47170;
var statearr_47179_48205 = state_47170__$1;
(statearr_47179_48205[(2)] = null);

(statearr_47179_48205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (17))){
var inst_47163 = (state_47170[(2)]);
var state_47170__$1 = (function (){var statearr_47181 = state_47170;
(statearr_47181[(10)] = inst_47163);

return statearr_47181;
})();
var statearr_47182_48206 = state_47170__$1;
(statearr_47182_48206[(2)] = null);

(statearr_47182_48206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (3))){
var inst_47168 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47170__$1,inst_47168);
} else {
if((state_val_47171 === (12))){
var _ = (function (){var statearr_47183 = state_47170;
(statearr_47183[(4)] = cljs.core.rest((state_47170[(4)])));

return statearr_47183;
})();
var state_47170__$1 = state_47170;
var ex47180 = (state_47170__$1[(2)]);
var statearr_47184_48207 = state_47170__$1;
(statearr_47184_48207[(5)] = ex47180);


if((ex47180 instanceof Object)){
var statearr_47185_48208 = state_47170__$1;
(statearr_47185_48208[(1)] = (11));

(statearr_47185_48208[(5)] = null);

} else {
throw ex47180;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (2))){
var inst_47129 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47130 = cnt;
var inst_47131 = (0);
var state_47170__$1 = (function (){var statearr_47186 = state_47170;
(statearr_47186[(11)] = inst_47129);

(statearr_47186[(8)] = inst_47130);

(statearr_47186[(7)] = inst_47131);

return statearr_47186;
})();
var statearr_47187_48209 = state_47170__$1;
(statearr_47187_48209[(2)] = null);

(statearr_47187_48209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (11))){
var inst_47135 = (state_47170[(2)]);
var inst_47136 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47170__$1 = (function (){var statearr_47188 = state_47170;
(statearr_47188[(12)] = inst_47135);

return statearr_47188;
})();
var statearr_47189_48210 = state_47170__$1;
(statearr_47189_48210[(2)] = inst_47136);

(statearr_47189_48210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (9))){
var inst_47131 = (state_47170[(7)]);
var _ = (function (){var statearr_47190 = state_47170;
(statearr_47190[(4)] = cljs.core.cons((12),(state_47170[(4)])));

return statearr_47190;
})();
var inst_47142 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47131) : chs__$1.call(null,inst_47131));
var inst_47143 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47131) : done.call(null,inst_47131));
var inst_47144 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47142,inst_47143);
var ___$1 = (function (){var statearr_47191 = state_47170;
(statearr_47191[(4)] = cljs.core.rest((state_47170[(4)])));

return statearr_47191;
})();
var state_47170__$1 = state_47170;
var statearr_47192_48211 = state_47170__$1;
(statearr_47192_48211[(2)] = inst_47144);

(statearr_47192_48211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (5))){
var inst_47154 = (state_47170[(2)]);
var state_47170__$1 = (function (){var statearr_47193 = state_47170;
(statearr_47193[(13)] = inst_47154);

return statearr_47193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47170__$1,(13),dchan);
} else {
if((state_val_47171 === (14))){
var inst_47159 = cljs.core.async.close_BANG_(out);
var state_47170__$1 = state_47170;
var statearr_47194_48212 = state_47170__$1;
(statearr_47194_48212[(2)] = inst_47159);

(statearr_47194_48212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (16))){
var inst_47166 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
var statearr_47195_48213 = state_47170__$1;
(statearr_47195_48213[(2)] = inst_47166);

(statearr_47195_48213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (10))){
var inst_47131 = (state_47170[(7)]);
var inst_47147 = (state_47170[(2)]);
var inst_47148 = (inst_47131 + (1));
var inst_47131__$1 = inst_47148;
var state_47170__$1 = (function (){var statearr_47196 = state_47170;
(statearr_47196[(14)] = inst_47147);

(statearr_47196[(7)] = inst_47131__$1);

return statearr_47196;
})();
var statearr_47197_48214 = state_47170__$1;
(statearr_47197_48214[(2)] = null);

(statearr_47197_48214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (8))){
var inst_47152 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
var statearr_47198_48216 = state_47170__$1;
(statearr_47198_48216[(2)] = inst_47152);

(statearr_47198_48216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47199[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47199[(1)] = (1));

return statearr_47199;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47170){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47170);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47200){var ex__46070__auto__ = e47200;
var statearr_47201_48218 = state_47170;
(statearr_47201_48218[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47170[(4)]))){
var statearr_47202_48219 = state_47170;
(statearr_47202_48219[(1)] = cljs.core.first((state_47170[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48220 = state_47170;
state_47170 = G__48220;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47203 = f__46138__auto__();
(statearr_47203[(6)] = c__46137__auto___48193);

return statearr_47203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47206 = arguments.length;
switch (G__47206) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46137__auto___48224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47238){
var state_val_47239 = (state_47238[(1)]);
if((state_val_47239 === (7))){
var inst_47217 = (state_47238[(7)]);
var inst_47218 = (state_47238[(8)]);
var inst_47217__$1 = (state_47238[(2)]);
var inst_47218__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47217__$1,(0),null);
var inst_47219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47217__$1,(1),null);
var inst_47220 = (inst_47218__$1 == null);
var state_47238__$1 = (function (){var statearr_47240 = state_47238;
(statearr_47240[(7)] = inst_47217__$1);

(statearr_47240[(8)] = inst_47218__$1);

(statearr_47240[(9)] = inst_47219);

return statearr_47240;
})();
if(cljs.core.truth_(inst_47220)){
var statearr_47241_48226 = state_47238__$1;
(statearr_47241_48226[(1)] = (8));

} else {
var statearr_47242_48227 = state_47238__$1;
(statearr_47242_48227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (1))){
var inst_47207 = cljs.core.vec(chs);
var inst_47208 = inst_47207;
var state_47238__$1 = (function (){var statearr_47243 = state_47238;
(statearr_47243[(10)] = inst_47208);

return statearr_47243;
})();
var statearr_47244_48228 = state_47238__$1;
(statearr_47244_48228[(2)] = null);

(statearr_47244_48228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (4))){
var inst_47208 = (state_47238[(10)]);
var state_47238__$1 = state_47238;
return cljs.core.async.ioc_alts_BANG_(state_47238__$1,(7),inst_47208);
} else {
if((state_val_47239 === (6))){
var inst_47234 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
var statearr_47245_48229 = state_47238__$1;
(statearr_47245_48229[(2)] = inst_47234);

(statearr_47245_48229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (3))){
var inst_47236 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47238__$1,inst_47236);
} else {
if((state_val_47239 === (2))){
var inst_47208 = (state_47238[(10)]);
var inst_47210 = cljs.core.count(inst_47208);
var inst_47211 = (inst_47210 > (0));
var state_47238__$1 = state_47238;
if(cljs.core.truth_(inst_47211)){
var statearr_47247_48230 = state_47238__$1;
(statearr_47247_48230[(1)] = (4));

} else {
var statearr_47248_48231 = state_47238__$1;
(statearr_47248_48231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (11))){
var inst_47208 = (state_47238[(10)]);
var inst_47227 = (state_47238[(2)]);
var tmp47246 = inst_47208;
var inst_47208__$1 = tmp47246;
var state_47238__$1 = (function (){var statearr_47249 = state_47238;
(statearr_47249[(11)] = inst_47227);

(statearr_47249[(10)] = inst_47208__$1);

return statearr_47249;
})();
var statearr_47250_48232 = state_47238__$1;
(statearr_47250_48232[(2)] = null);

(statearr_47250_48232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (9))){
var inst_47218 = (state_47238[(8)]);
var state_47238__$1 = state_47238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47238__$1,(11),out,inst_47218);
} else {
if((state_val_47239 === (5))){
var inst_47232 = cljs.core.async.close_BANG_(out);
var state_47238__$1 = state_47238;
var statearr_47251_48233 = state_47238__$1;
(statearr_47251_48233[(2)] = inst_47232);

(statearr_47251_48233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (10))){
var inst_47230 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
var statearr_47252_48234 = state_47238__$1;
(statearr_47252_48234[(2)] = inst_47230);

(statearr_47252_48234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (8))){
var inst_47208 = (state_47238[(10)]);
var inst_47217 = (state_47238[(7)]);
var inst_47218 = (state_47238[(8)]);
var inst_47219 = (state_47238[(9)]);
var inst_47222 = (function (){var cs = inst_47208;
var vec__47213 = inst_47217;
var v = inst_47218;
var c = inst_47219;
return (function (p1__47204_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47204_SHARP_);
});
})();
var inst_47223 = cljs.core.filterv(inst_47222,inst_47208);
var inst_47208__$1 = inst_47223;
var state_47238__$1 = (function (){var statearr_47253 = state_47238;
(statearr_47253[(10)] = inst_47208__$1);

return statearr_47253;
})();
var statearr_47254_48239 = state_47238__$1;
(statearr_47254_48239[(2)] = null);

(statearr_47254_48239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47255 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47255[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47255[(1)] = (1));

return statearr_47255;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47238){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47238);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47256){var ex__46070__auto__ = e47256;
var statearr_47257_48241 = state_47238;
(statearr_47257_48241[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47238[(4)]))){
var statearr_47258_48243 = state_47238;
(statearr_47258_48243[(1)] = cljs.core.first((state_47238[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48244 = state_47238;
state_47238 = G__48244;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47259 = f__46138__auto__();
(statearr_47259[(6)] = c__46137__auto___48224);

return statearr_47259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47261 = arguments.length;
switch (G__47261) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46137__auto___48246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47285){
var state_val_47286 = (state_47285[(1)]);
if((state_val_47286 === (7))){
var inst_47267 = (state_47285[(7)]);
var inst_47267__$1 = (state_47285[(2)]);
var inst_47268 = (inst_47267__$1 == null);
var inst_47269 = cljs.core.not(inst_47268);
var state_47285__$1 = (function (){var statearr_47287 = state_47285;
(statearr_47287[(7)] = inst_47267__$1);

return statearr_47287;
})();
if(inst_47269){
var statearr_47288_48247 = state_47285__$1;
(statearr_47288_48247[(1)] = (8));

} else {
var statearr_47289_48248 = state_47285__$1;
(statearr_47289_48248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (1))){
var inst_47262 = (0);
var state_47285__$1 = (function (){var statearr_47290 = state_47285;
(statearr_47290[(8)] = inst_47262);

return statearr_47290;
})();
var statearr_47291_48249 = state_47285__$1;
(statearr_47291_48249[(2)] = null);

(statearr_47291_48249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (4))){
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47285__$1,(7),ch);
} else {
if((state_val_47286 === (6))){
var inst_47280 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47292_48250 = state_47285__$1;
(statearr_47292_48250[(2)] = inst_47280);

(statearr_47292_48250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (3))){
var inst_47282 = (state_47285[(2)]);
var inst_47283 = cljs.core.async.close_BANG_(out);
var state_47285__$1 = (function (){var statearr_47293 = state_47285;
(statearr_47293[(9)] = inst_47282);

return statearr_47293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47285__$1,inst_47283);
} else {
if((state_val_47286 === (2))){
var inst_47262 = (state_47285[(8)]);
var inst_47264 = (inst_47262 < n);
var state_47285__$1 = state_47285;
if(cljs.core.truth_(inst_47264)){
var statearr_47294_48251 = state_47285__$1;
(statearr_47294_48251[(1)] = (4));

} else {
var statearr_47295_48252 = state_47285__$1;
(statearr_47295_48252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (11))){
var inst_47262 = (state_47285[(8)]);
var inst_47272 = (state_47285[(2)]);
var inst_47273 = (inst_47262 + (1));
var inst_47262__$1 = inst_47273;
var state_47285__$1 = (function (){var statearr_47296 = state_47285;
(statearr_47296[(10)] = inst_47272);

(statearr_47296[(8)] = inst_47262__$1);

return statearr_47296;
})();
var statearr_47297_48253 = state_47285__$1;
(statearr_47297_48253[(2)] = null);

(statearr_47297_48253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (9))){
var state_47285__$1 = state_47285;
var statearr_47298_48254 = state_47285__$1;
(statearr_47298_48254[(2)] = null);

(statearr_47298_48254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (5))){
var state_47285__$1 = state_47285;
var statearr_47299_48255 = state_47285__$1;
(statearr_47299_48255[(2)] = null);

(statearr_47299_48255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (10))){
var inst_47277 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47300_48256 = state_47285__$1;
(statearr_47300_48256[(2)] = inst_47277);

(statearr_47300_48256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (8))){
var inst_47267 = (state_47285[(7)]);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47285__$1,(11),out,inst_47267);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47301[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47301[(1)] = (1));

return statearr_47301;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47285){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47285);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47302){var ex__46070__auto__ = e47302;
var statearr_47303_48257 = state_47285;
(statearr_47303_48257[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47285[(4)]))){
var statearr_47304_48259 = state_47285;
(statearr_47304_48259[(1)] = cljs.core.first((state_47285[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48260 = state_47285;
state_47285 = G__48260;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47305 = f__46138__auto__();
(statearr_47305[(6)] = c__46137__auto___48246);

return statearr_47305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47307 = (function (f,ch,meta47308){
this.f = f;
this.ch = ch;
this.meta47308 = meta47308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47309,meta47308__$1){
var self__ = this;
var _47309__$1 = this;
return (new cljs.core.async.t_cljs$core$async47307(self__.f,self__.ch,meta47308__$1));
}));

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47309){
var self__ = this;
var _47309__$1 = this;
return self__.meta47308;
}));

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47310 = (function (f,ch,meta47308,_,fn1,meta47311){
this.f = f;
this.ch = ch;
this.meta47308 = meta47308;
this._ = _;
this.fn1 = fn1;
this.meta47311 = meta47311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47312,meta47311__$1){
var self__ = this;
var _47312__$1 = this;
return (new cljs.core.async.t_cljs$core$async47310(self__.f,self__.ch,self__.meta47308,self__._,self__.fn1,meta47311__$1));
}));

(cljs.core.async.t_cljs$core$async47310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47312){
var self__ = this;
var _47312__$1 = this;
return self__.meta47311;
}));

(cljs.core.async.t_cljs$core$async47310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47306_SHARP_){
var G__47313 = (((p1__47306_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47306_SHARP_) : self__.f.call(null,p1__47306_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47313) : f1.call(null,G__47313));
});
}));

(cljs.core.async.t_cljs$core$async47310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47308","meta47308",1071260676,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47307","cljs.core.async/t_cljs$core$async47307",197464141,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47311","meta47311",-1562424272,null)], null);
}));

(cljs.core.async.t_cljs$core$async47310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47310");

(cljs.core.async.t_cljs$core$async47310.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47310.
 */
cljs.core.async.__GT_t_cljs$core$async47310 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47310(f__$1,ch__$1,meta47308__$1,___$2,fn1__$1,meta47311){
return (new cljs.core.async.t_cljs$core$async47310(f__$1,ch__$1,meta47308__$1,___$2,fn1__$1,meta47311));
});

}

return (new cljs.core.async.t_cljs$core$async47310(self__.f,self__.ch,self__.meta47308,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47314 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47314) : self__.f.call(null,G__47314));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47308","meta47308",1071260676,null)], null);
}));

(cljs.core.async.t_cljs$core$async47307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47307");

(cljs.core.async.t_cljs$core$async47307.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47307.
 */
cljs.core.async.__GT_t_cljs$core$async47307 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47307(f__$1,ch__$1,meta47308){
return (new cljs.core.async.t_cljs$core$async47307(f__$1,ch__$1,meta47308));
});

}

return (new cljs.core.async.t_cljs$core$async47307(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47315 = (function (f,ch,meta47316){
this.f = f;
this.ch = ch;
this.meta47316 = meta47316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47317,meta47316__$1){
var self__ = this;
var _47317__$1 = this;
return (new cljs.core.async.t_cljs$core$async47315(self__.f,self__.ch,meta47316__$1));
}));

(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47317){
var self__ = this;
var _47317__$1 = this;
return self__.meta47316;
}));

(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47316","meta47316",-181601631,null)], null);
}));

(cljs.core.async.t_cljs$core$async47315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47315");

(cljs.core.async.t_cljs$core$async47315.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47315.
 */
cljs.core.async.__GT_t_cljs$core$async47315 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47315(f__$1,ch__$1,meta47316){
return (new cljs.core.async.t_cljs$core$async47315(f__$1,ch__$1,meta47316));
});

}

return (new cljs.core.async.t_cljs$core$async47315(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47318 = (function (p,ch,meta47319){
this.p = p;
this.ch = ch;
this.meta47319 = meta47319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47320,meta47319__$1){
var self__ = this;
var _47320__$1 = this;
return (new cljs.core.async.t_cljs$core$async47318(self__.p,self__.ch,meta47319__$1));
}));

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47320){
var self__ = this;
var _47320__$1 = this;
return self__.meta47319;
}));

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47319","meta47319",-1269221225,null)], null);
}));

(cljs.core.async.t_cljs$core$async47318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47318");

(cljs.core.async.t_cljs$core$async47318.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47318.
 */
cljs.core.async.__GT_t_cljs$core$async47318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47318(p__$1,ch__$1,meta47319){
return (new cljs.core.async.t_cljs$core$async47318(p__$1,ch__$1,meta47319));
});

}

return (new cljs.core.async.t_cljs$core$async47318(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47322 = arguments.length;
switch (G__47322) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46137__auto___48286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47343){
var state_val_47344 = (state_47343[(1)]);
if((state_val_47344 === (7))){
var inst_47339 = (state_47343[(2)]);
var state_47343__$1 = state_47343;
var statearr_47345_48287 = state_47343__$1;
(statearr_47345_48287[(2)] = inst_47339);

(statearr_47345_48287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (1))){
var state_47343__$1 = state_47343;
var statearr_47346_48289 = state_47343__$1;
(statearr_47346_48289[(2)] = null);

(statearr_47346_48289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (4))){
var inst_47325 = (state_47343[(7)]);
var inst_47325__$1 = (state_47343[(2)]);
var inst_47326 = (inst_47325__$1 == null);
var state_47343__$1 = (function (){var statearr_47347 = state_47343;
(statearr_47347[(7)] = inst_47325__$1);

return statearr_47347;
})();
if(cljs.core.truth_(inst_47326)){
var statearr_47348_48291 = state_47343__$1;
(statearr_47348_48291[(1)] = (5));

} else {
var statearr_47349_48292 = state_47343__$1;
(statearr_47349_48292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (6))){
var inst_47325 = (state_47343[(7)]);
var inst_47330 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47325) : p.call(null,inst_47325));
var state_47343__$1 = state_47343;
if(cljs.core.truth_(inst_47330)){
var statearr_47350_48293 = state_47343__$1;
(statearr_47350_48293[(1)] = (8));

} else {
var statearr_47351_48294 = state_47343__$1;
(statearr_47351_48294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (3))){
var inst_47341 = (state_47343[(2)]);
var state_47343__$1 = state_47343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47343__$1,inst_47341);
} else {
if((state_val_47344 === (2))){
var state_47343__$1 = state_47343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47343__$1,(4),ch);
} else {
if((state_val_47344 === (11))){
var inst_47333 = (state_47343[(2)]);
var state_47343__$1 = state_47343;
var statearr_47352_48295 = state_47343__$1;
(statearr_47352_48295[(2)] = inst_47333);

(statearr_47352_48295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (9))){
var state_47343__$1 = state_47343;
var statearr_47353_48296 = state_47343__$1;
(statearr_47353_48296[(2)] = null);

(statearr_47353_48296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (5))){
var inst_47328 = cljs.core.async.close_BANG_(out);
var state_47343__$1 = state_47343;
var statearr_47354_48297 = state_47343__$1;
(statearr_47354_48297[(2)] = inst_47328);

(statearr_47354_48297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (10))){
var inst_47336 = (state_47343[(2)]);
var state_47343__$1 = (function (){var statearr_47355 = state_47343;
(statearr_47355[(8)] = inst_47336);

return statearr_47355;
})();
var statearr_47356_48298 = state_47343__$1;
(statearr_47356_48298[(2)] = null);

(statearr_47356_48298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (8))){
var inst_47325 = (state_47343[(7)]);
var state_47343__$1 = state_47343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47343__$1,(11),out,inst_47325);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47357 = [null,null,null,null,null,null,null,null,null];
(statearr_47357[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47357[(1)] = (1));

return statearr_47357;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47343){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47343);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47358){var ex__46070__auto__ = e47358;
var statearr_47359_48299 = state_47343;
(statearr_47359_48299[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47343[(4)]))){
var statearr_47360_48300 = state_47343;
(statearr_47360_48300[(1)] = cljs.core.first((state_47343[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48301 = state_47343;
state_47343 = G__48301;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47361 = f__46138__auto__();
(statearr_47361[(6)] = c__46137__auto___48286);

return statearr_47361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47363 = arguments.length;
switch (G__47363) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46137__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47425){
var state_val_47426 = (state_47425[(1)]);
if((state_val_47426 === (7))){
var inst_47421 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
var statearr_47427_48303 = state_47425__$1;
(statearr_47427_48303[(2)] = inst_47421);

(statearr_47427_48303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (20))){
var inst_47391 = (state_47425[(7)]);
var inst_47402 = (state_47425[(2)]);
var inst_47403 = cljs.core.next(inst_47391);
var inst_47377 = inst_47403;
var inst_47378 = null;
var inst_47379 = (0);
var inst_47380 = (0);
var state_47425__$1 = (function (){var statearr_47428 = state_47425;
(statearr_47428[(8)] = inst_47402);

(statearr_47428[(9)] = inst_47377);

(statearr_47428[(10)] = inst_47378);

(statearr_47428[(11)] = inst_47379);

(statearr_47428[(12)] = inst_47380);

return statearr_47428;
})();
var statearr_47429_48304 = state_47425__$1;
(statearr_47429_48304[(2)] = null);

(statearr_47429_48304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (1))){
var state_47425__$1 = state_47425;
var statearr_47430_48309 = state_47425__$1;
(statearr_47430_48309[(2)] = null);

(statearr_47430_48309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (4))){
var inst_47366 = (state_47425[(13)]);
var inst_47366__$1 = (state_47425[(2)]);
var inst_47367 = (inst_47366__$1 == null);
var state_47425__$1 = (function (){var statearr_47431 = state_47425;
(statearr_47431[(13)] = inst_47366__$1);

return statearr_47431;
})();
if(cljs.core.truth_(inst_47367)){
var statearr_47432_48310 = state_47425__$1;
(statearr_47432_48310[(1)] = (5));

} else {
var statearr_47433_48311 = state_47425__$1;
(statearr_47433_48311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (15))){
var state_47425__$1 = state_47425;
var statearr_47437_48312 = state_47425__$1;
(statearr_47437_48312[(2)] = null);

(statearr_47437_48312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (21))){
var state_47425__$1 = state_47425;
var statearr_47438_48313 = state_47425__$1;
(statearr_47438_48313[(2)] = null);

(statearr_47438_48313[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (13))){
var inst_47380 = (state_47425[(12)]);
var inst_47377 = (state_47425[(9)]);
var inst_47378 = (state_47425[(10)]);
var inst_47379 = (state_47425[(11)]);
var inst_47387 = (state_47425[(2)]);
var inst_47388 = (inst_47380 + (1));
var tmp47434 = inst_47379;
var tmp47435 = inst_47377;
var tmp47436 = inst_47378;
var inst_47377__$1 = tmp47435;
var inst_47378__$1 = tmp47436;
var inst_47379__$1 = tmp47434;
var inst_47380__$1 = inst_47388;
var state_47425__$1 = (function (){var statearr_47439 = state_47425;
(statearr_47439[(14)] = inst_47387);

(statearr_47439[(9)] = inst_47377__$1);

(statearr_47439[(10)] = inst_47378__$1);

(statearr_47439[(11)] = inst_47379__$1);

(statearr_47439[(12)] = inst_47380__$1);

return statearr_47439;
})();
var statearr_47440_48314 = state_47425__$1;
(statearr_47440_48314[(2)] = null);

(statearr_47440_48314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (22))){
var state_47425__$1 = state_47425;
var statearr_47441_48315 = state_47425__$1;
(statearr_47441_48315[(2)] = null);

(statearr_47441_48315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (6))){
var inst_47366 = (state_47425[(13)]);
var inst_47375 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47366) : f.call(null,inst_47366));
var inst_47376 = cljs.core.seq(inst_47375);
var inst_47377 = inst_47376;
var inst_47378 = null;
var inst_47379 = (0);
var inst_47380 = (0);
var state_47425__$1 = (function (){var statearr_47442 = state_47425;
(statearr_47442[(9)] = inst_47377);

(statearr_47442[(10)] = inst_47378);

(statearr_47442[(11)] = inst_47379);

(statearr_47442[(12)] = inst_47380);

return statearr_47442;
})();
var statearr_47443_48316 = state_47425__$1;
(statearr_47443_48316[(2)] = null);

(statearr_47443_48316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (17))){
var inst_47391 = (state_47425[(7)]);
var inst_47395 = cljs.core.chunk_first(inst_47391);
var inst_47396 = cljs.core.chunk_rest(inst_47391);
var inst_47397 = cljs.core.count(inst_47395);
var inst_47377 = inst_47396;
var inst_47378 = inst_47395;
var inst_47379 = inst_47397;
var inst_47380 = (0);
var state_47425__$1 = (function (){var statearr_47444 = state_47425;
(statearr_47444[(9)] = inst_47377);

(statearr_47444[(10)] = inst_47378);

(statearr_47444[(11)] = inst_47379);

(statearr_47444[(12)] = inst_47380);

return statearr_47444;
})();
var statearr_47445_48317 = state_47425__$1;
(statearr_47445_48317[(2)] = null);

(statearr_47445_48317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (3))){
var inst_47423 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47425__$1,inst_47423);
} else {
if((state_val_47426 === (12))){
var inst_47411 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
var statearr_47446_48318 = state_47425__$1;
(statearr_47446_48318[(2)] = inst_47411);

(statearr_47446_48318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (2))){
var state_47425__$1 = state_47425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47425__$1,(4),in$);
} else {
if((state_val_47426 === (23))){
var inst_47419 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
var statearr_47447_48323 = state_47425__$1;
(statearr_47447_48323[(2)] = inst_47419);

(statearr_47447_48323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (19))){
var inst_47406 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
var statearr_47448_48324 = state_47425__$1;
(statearr_47448_48324[(2)] = inst_47406);

(statearr_47448_48324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (11))){
var inst_47377 = (state_47425[(9)]);
var inst_47391 = (state_47425[(7)]);
var inst_47391__$1 = cljs.core.seq(inst_47377);
var state_47425__$1 = (function (){var statearr_47449 = state_47425;
(statearr_47449[(7)] = inst_47391__$1);

return statearr_47449;
})();
if(inst_47391__$1){
var statearr_47450_48325 = state_47425__$1;
(statearr_47450_48325[(1)] = (14));

} else {
var statearr_47451_48326 = state_47425__$1;
(statearr_47451_48326[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (9))){
var inst_47413 = (state_47425[(2)]);
var inst_47414 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47425__$1 = (function (){var statearr_47452 = state_47425;
(statearr_47452[(15)] = inst_47413);

return statearr_47452;
})();
if(cljs.core.truth_(inst_47414)){
var statearr_47453_48327 = state_47425__$1;
(statearr_47453_48327[(1)] = (21));

} else {
var statearr_47454_48328 = state_47425__$1;
(statearr_47454_48328[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (5))){
var inst_47369 = cljs.core.async.close_BANG_(out);
var state_47425__$1 = state_47425;
var statearr_47455_48329 = state_47425__$1;
(statearr_47455_48329[(2)] = inst_47369);

(statearr_47455_48329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (14))){
var inst_47391 = (state_47425[(7)]);
var inst_47393 = cljs.core.chunked_seq_QMARK_(inst_47391);
var state_47425__$1 = state_47425;
if(inst_47393){
var statearr_47456_48330 = state_47425__$1;
(statearr_47456_48330[(1)] = (17));

} else {
var statearr_47457_48331 = state_47425__$1;
(statearr_47457_48331[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (16))){
var inst_47409 = (state_47425[(2)]);
var state_47425__$1 = state_47425;
var statearr_47458_48332 = state_47425__$1;
(statearr_47458_48332[(2)] = inst_47409);

(statearr_47458_48332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47426 === (10))){
var inst_47378 = (state_47425[(10)]);
var inst_47380 = (state_47425[(12)]);
var inst_47385 = cljs.core._nth(inst_47378,inst_47380);
var state_47425__$1 = state_47425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47425__$1,(13),out,inst_47385);
} else {
if((state_val_47426 === (18))){
var inst_47391 = (state_47425[(7)]);
var inst_47400 = cljs.core.first(inst_47391);
var state_47425__$1 = state_47425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47425__$1,(20),out,inst_47400);
} else {
if((state_val_47426 === (8))){
var inst_47380 = (state_47425[(12)]);
var inst_47379 = (state_47425[(11)]);
var inst_47382 = (inst_47380 < inst_47379);
var inst_47383 = inst_47382;
var state_47425__$1 = state_47425;
if(cljs.core.truth_(inst_47383)){
var statearr_47459_48334 = state_47425__$1;
(statearr_47459_48334[(1)] = (10));

} else {
var statearr_47460_48335 = state_47425__$1;
(statearr_47460_48335[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46067__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46067__auto____0 = (function (){
var statearr_47461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47461[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46067__auto__);

(statearr_47461[(1)] = (1));

return statearr_47461;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46067__auto____1 = (function (state_47425){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47425);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47462){var ex__46070__auto__ = e47462;
var statearr_47463_48336 = state_47425;
(statearr_47463_48336[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47425[(4)]))){
var statearr_47464_48337 = state_47425;
(statearr_47464_48337[(1)] = cljs.core.first((state_47425[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48338 = state_47425;
state_47425 = G__48338;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46067__auto__ = function(state_47425){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46067__auto____1.call(this,state_47425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46067__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46067__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47465 = f__46138__auto__();
(statearr_47465[(6)] = c__46137__auto__);

return statearr_47465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

return c__46137__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47467 = arguments.length;
switch (G__47467) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47469 = arguments.length;
switch (G__47469) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47471 = arguments.length;
switch (G__47471) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46137__auto___48343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47495){
var state_val_47496 = (state_47495[(1)]);
if((state_val_47496 === (7))){
var inst_47490 = (state_47495[(2)]);
var state_47495__$1 = state_47495;
var statearr_47497_48348 = state_47495__$1;
(statearr_47497_48348[(2)] = inst_47490);

(statearr_47497_48348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (1))){
var inst_47472 = null;
var state_47495__$1 = (function (){var statearr_47498 = state_47495;
(statearr_47498[(7)] = inst_47472);

return statearr_47498;
})();
var statearr_47499_48349 = state_47495__$1;
(statearr_47499_48349[(2)] = null);

(statearr_47499_48349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (4))){
var inst_47475 = (state_47495[(8)]);
var inst_47475__$1 = (state_47495[(2)]);
var inst_47476 = (inst_47475__$1 == null);
var inst_47477 = cljs.core.not(inst_47476);
var state_47495__$1 = (function (){var statearr_47500 = state_47495;
(statearr_47500[(8)] = inst_47475__$1);

return statearr_47500;
})();
if(inst_47477){
var statearr_47501_48350 = state_47495__$1;
(statearr_47501_48350[(1)] = (5));

} else {
var statearr_47502_48351 = state_47495__$1;
(statearr_47502_48351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (6))){
var state_47495__$1 = state_47495;
var statearr_47503_48352 = state_47495__$1;
(statearr_47503_48352[(2)] = null);

(statearr_47503_48352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (3))){
var inst_47492 = (state_47495[(2)]);
var inst_47493 = cljs.core.async.close_BANG_(out);
var state_47495__$1 = (function (){var statearr_47504 = state_47495;
(statearr_47504[(9)] = inst_47492);

return statearr_47504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47495__$1,inst_47493);
} else {
if((state_val_47496 === (2))){
var state_47495__$1 = state_47495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47495__$1,(4),ch);
} else {
if((state_val_47496 === (11))){
var inst_47475 = (state_47495[(8)]);
var inst_47484 = (state_47495[(2)]);
var inst_47472 = inst_47475;
var state_47495__$1 = (function (){var statearr_47505 = state_47495;
(statearr_47505[(10)] = inst_47484);

(statearr_47505[(7)] = inst_47472);

return statearr_47505;
})();
var statearr_47506_48353 = state_47495__$1;
(statearr_47506_48353[(2)] = null);

(statearr_47506_48353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (9))){
var inst_47475 = (state_47495[(8)]);
var state_47495__$1 = state_47495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47495__$1,(11),out,inst_47475);
} else {
if((state_val_47496 === (5))){
var inst_47475 = (state_47495[(8)]);
var inst_47472 = (state_47495[(7)]);
var inst_47479 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47475,inst_47472);
var state_47495__$1 = state_47495;
if(inst_47479){
var statearr_47508_48354 = state_47495__$1;
(statearr_47508_48354[(1)] = (8));

} else {
var statearr_47509_48355 = state_47495__$1;
(statearr_47509_48355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (10))){
var inst_47487 = (state_47495[(2)]);
var state_47495__$1 = state_47495;
var statearr_47510_48356 = state_47495__$1;
(statearr_47510_48356[(2)] = inst_47487);

(statearr_47510_48356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47496 === (8))){
var inst_47472 = (state_47495[(7)]);
var tmp47507 = inst_47472;
var inst_47472__$1 = tmp47507;
var state_47495__$1 = (function (){var statearr_47511 = state_47495;
(statearr_47511[(7)] = inst_47472__$1);

return statearr_47511;
})();
var statearr_47512_48357 = state_47495__$1;
(statearr_47512_48357[(2)] = null);

(statearr_47512_48357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47513[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47513[(1)] = (1));

return statearr_47513;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47495){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47495);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47514){var ex__46070__auto__ = e47514;
var statearr_47515_48358 = state_47495;
(statearr_47515_48358[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47495[(4)]))){
var statearr_47516_48359 = state_47495;
(statearr_47516_48359[(1)] = cljs.core.first((state_47495[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48360 = state_47495;
state_47495 = G__48360;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47517 = f__46138__auto__();
(statearr_47517[(6)] = c__46137__auto___48343);

return statearr_47517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47519 = arguments.length;
switch (G__47519) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46137__auto___48362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47557){
var state_val_47558 = (state_47557[(1)]);
if((state_val_47558 === (7))){
var inst_47553 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
var statearr_47559_48363 = state_47557__$1;
(statearr_47559_48363[(2)] = inst_47553);

(statearr_47559_48363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (1))){
var inst_47520 = (new Array(n));
var inst_47521 = inst_47520;
var inst_47522 = (0);
var state_47557__$1 = (function (){var statearr_47560 = state_47557;
(statearr_47560[(7)] = inst_47521);

(statearr_47560[(8)] = inst_47522);

return statearr_47560;
})();
var statearr_47561_48364 = state_47557__$1;
(statearr_47561_48364[(2)] = null);

(statearr_47561_48364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (4))){
var inst_47525 = (state_47557[(9)]);
var inst_47525__$1 = (state_47557[(2)]);
var inst_47526 = (inst_47525__$1 == null);
var inst_47527 = cljs.core.not(inst_47526);
var state_47557__$1 = (function (){var statearr_47562 = state_47557;
(statearr_47562[(9)] = inst_47525__$1);

return statearr_47562;
})();
if(inst_47527){
var statearr_47563_48365 = state_47557__$1;
(statearr_47563_48365[(1)] = (5));

} else {
var statearr_47564_48366 = state_47557__$1;
(statearr_47564_48366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (15))){
var inst_47547 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
var statearr_47565_48367 = state_47557__$1;
(statearr_47565_48367[(2)] = inst_47547);

(statearr_47565_48367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (13))){
var state_47557__$1 = state_47557;
var statearr_47566_48369 = state_47557__$1;
(statearr_47566_48369[(2)] = null);

(statearr_47566_48369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (6))){
var inst_47522 = (state_47557[(8)]);
var inst_47543 = (inst_47522 > (0));
var state_47557__$1 = state_47557;
if(cljs.core.truth_(inst_47543)){
var statearr_47567_48370 = state_47557__$1;
(statearr_47567_48370[(1)] = (12));

} else {
var statearr_47568_48371 = state_47557__$1;
(statearr_47568_48371[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (3))){
var inst_47555 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47557__$1,inst_47555);
} else {
if((state_val_47558 === (12))){
var inst_47521 = (state_47557[(7)]);
var inst_47545 = cljs.core.vec(inst_47521);
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47557__$1,(15),out,inst_47545);
} else {
if((state_val_47558 === (2))){
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47557__$1,(4),ch);
} else {
if((state_val_47558 === (11))){
var inst_47537 = (state_47557[(2)]);
var inst_47538 = (new Array(n));
var inst_47521 = inst_47538;
var inst_47522 = (0);
var state_47557__$1 = (function (){var statearr_47569 = state_47557;
(statearr_47569[(10)] = inst_47537);

(statearr_47569[(7)] = inst_47521);

(statearr_47569[(8)] = inst_47522);

return statearr_47569;
})();
var statearr_47570_48374 = state_47557__$1;
(statearr_47570_48374[(2)] = null);

(statearr_47570_48374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (9))){
var inst_47521 = (state_47557[(7)]);
var inst_47535 = cljs.core.vec(inst_47521);
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47557__$1,(11),out,inst_47535);
} else {
if((state_val_47558 === (5))){
var inst_47521 = (state_47557[(7)]);
var inst_47522 = (state_47557[(8)]);
var inst_47525 = (state_47557[(9)]);
var inst_47530 = (state_47557[(11)]);
var inst_47529 = (inst_47521[inst_47522] = inst_47525);
var inst_47530__$1 = (inst_47522 + (1));
var inst_47531 = (inst_47530__$1 < n);
var state_47557__$1 = (function (){var statearr_47571 = state_47557;
(statearr_47571[(12)] = inst_47529);

(statearr_47571[(11)] = inst_47530__$1);

return statearr_47571;
})();
if(cljs.core.truth_(inst_47531)){
var statearr_47572_48376 = state_47557__$1;
(statearr_47572_48376[(1)] = (8));

} else {
var statearr_47573_48377 = state_47557__$1;
(statearr_47573_48377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (14))){
var inst_47550 = (state_47557[(2)]);
var inst_47551 = cljs.core.async.close_BANG_(out);
var state_47557__$1 = (function (){var statearr_47575 = state_47557;
(statearr_47575[(13)] = inst_47550);

return statearr_47575;
})();
var statearr_47576_48378 = state_47557__$1;
(statearr_47576_48378[(2)] = inst_47551);

(statearr_47576_48378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (10))){
var inst_47541 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
var statearr_47577_48379 = state_47557__$1;
(statearr_47577_48379[(2)] = inst_47541);

(statearr_47577_48379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (8))){
var inst_47521 = (state_47557[(7)]);
var inst_47530 = (state_47557[(11)]);
var tmp47574 = inst_47521;
var inst_47521__$1 = tmp47574;
var inst_47522 = inst_47530;
var state_47557__$1 = (function (){var statearr_47578 = state_47557;
(statearr_47578[(7)] = inst_47521__$1);

(statearr_47578[(8)] = inst_47522);

return statearr_47578;
})();
var statearr_47579_48380 = state_47557__$1;
(statearr_47579_48380[(2)] = null);

(statearr_47579_48380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47580[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47580[(1)] = (1));

return statearr_47580;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47557){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47557);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47581){var ex__46070__auto__ = e47581;
var statearr_47582_48381 = state_47557;
(statearr_47582_48381[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47557[(4)]))){
var statearr_47583_48382 = state_47557;
(statearr_47583_48382[(1)] = cljs.core.first((state_47557[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48383 = state_47557;
state_47557 = G__48383;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47584 = f__46138__auto__();
(statearr_47584[(6)] = c__46137__auto___48362);

return statearr_47584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47586 = arguments.length;
switch (G__47586) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46137__auto___48385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47631){
var state_val_47632 = (state_47631[(1)]);
if((state_val_47632 === (7))){
var inst_47627 = (state_47631[(2)]);
var state_47631__$1 = state_47631;
var statearr_47633_48387 = state_47631__$1;
(statearr_47633_48387[(2)] = inst_47627);

(statearr_47633_48387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (1))){
var inst_47587 = [];
var inst_47588 = inst_47587;
var inst_47589 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47631__$1 = (function (){var statearr_47634 = state_47631;
(statearr_47634[(7)] = inst_47588);

(statearr_47634[(8)] = inst_47589);

return statearr_47634;
})();
var statearr_47635_48388 = state_47631__$1;
(statearr_47635_48388[(2)] = null);

(statearr_47635_48388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (4))){
var inst_47592 = (state_47631[(9)]);
var inst_47592__$1 = (state_47631[(2)]);
var inst_47593 = (inst_47592__$1 == null);
var inst_47594 = cljs.core.not(inst_47593);
var state_47631__$1 = (function (){var statearr_47636 = state_47631;
(statearr_47636[(9)] = inst_47592__$1);

return statearr_47636;
})();
if(inst_47594){
var statearr_47637_48389 = state_47631__$1;
(statearr_47637_48389[(1)] = (5));

} else {
var statearr_47638_48390 = state_47631__$1;
(statearr_47638_48390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (15))){
var inst_47588 = (state_47631[(7)]);
var inst_47619 = cljs.core.vec(inst_47588);
var state_47631__$1 = state_47631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47631__$1,(18),out,inst_47619);
} else {
if((state_val_47632 === (13))){
var inst_47614 = (state_47631[(2)]);
var state_47631__$1 = state_47631;
var statearr_47639_48391 = state_47631__$1;
(statearr_47639_48391[(2)] = inst_47614);

(statearr_47639_48391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (6))){
var inst_47588 = (state_47631[(7)]);
var inst_47616 = inst_47588.length;
var inst_47617 = (inst_47616 > (0));
var state_47631__$1 = state_47631;
if(cljs.core.truth_(inst_47617)){
var statearr_47640_48392 = state_47631__$1;
(statearr_47640_48392[(1)] = (15));

} else {
var statearr_47641_48393 = state_47631__$1;
(statearr_47641_48393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (17))){
var inst_47624 = (state_47631[(2)]);
var inst_47625 = cljs.core.async.close_BANG_(out);
var state_47631__$1 = (function (){var statearr_47642 = state_47631;
(statearr_47642[(10)] = inst_47624);

return statearr_47642;
})();
var statearr_47643_48394 = state_47631__$1;
(statearr_47643_48394[(2)] = inst_47625);

(statearr_47643_48394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (3))){
var inst_47629 = (state_47631[(2)]);
var state_47631__$1 = state_47631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47631__$1,inst_47629);
} else {
if((state_val_47632 === (12))){
var inst_47588 = (state_47631[(7)]);
var inst_47607 = cljs.core.vec(inst_47588);
var state_47631__$1 = state_47631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47631__$1,(14),out,inst_47607);
} else {
if((state_val_47632 === (2))){
var state_47631__$1 = state_47631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47631__$1,(4),ch);
} else {
if((state_val_47632 === (11))){
var inst_47588 = (state_47631[(7)]);
var inst_47592 = (state_47631[(9)]);
var inst_47596 = (state_47631[(11)]);
var inst_47604 = inst_47588.push(inst_47592);
var tmp47644 = inst_47588;
var inst_47588__$1 = tmp47644;
var inst_47589 = inst_47596;
var state_47631__$1 = (function (){var statearr_47645 = state_47631;
(statearr_47645[(12)] = inst_47604);

(statearr_47645[(7)] = inst_47588__$1);

(statearr_47645[(8)] = inst_47589);

return statearr_47645;
})();
var statearr_47646_48395 = state_47631__$1;
(statearr_47646_48395[(2)] = null);

(statearr_47646_48395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (9))){
var inst_47589 = (state_47631[(8)]);
var inst_47600 = cljs.core.keyword_identical_QMARK_(inst_47589,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47631__$1 = state_47631;
var statearr_47647_48400 = state_47631__$1;
(statearr_47647_48400[(2)] = inst_47600);

(statearr_47647_48400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (5))){
var inst_47592 = (state_47631[(9)]);
var inst_47596 = (state_47631[(11)]);
var inst_47589 = (state_47631[(8)]);
var inst_47597 = (state_47631[(13)]);
var inst_47596__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47592) : f.call(null,inst_47592));
var inst_47597__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47596__$1,inst_47589);
var state_47631__$1 = (function (){var statearr_47648 = state_47631;
(statearr_47648[(11)] = inst_47596__$1);

(statearr_47648[(13)] = inst_47597__$1);

return statearr_47648;
})();
if(inst_47597__$1){
var statearr_47649_48402 = state_47631__$1;
(statearr_47649_48402[(1)] = (8));

} else {
var statearr_47650_48403 = state_47631__$1;
(statearr_47650_48403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (14))){
var inst_47592 = (state_47631[(9)]);
var inst_47596 = (state_47631[(11)]);
var inst_47609 = (state_47631[(2)]);
var inst_47610 = [];
var inst_47611 = inst_47610.push(inst_47592);
var inst_47588 = inst_47610;
var inst_47589 = inst_47596;
var state_47631__$1 = (function (){var statearr_47651 = state_47631;
(statearr_47651[(14)] = inst_47609);

(statearr_47651[(15)] = inst_47611);

(statearr_47651[(7)] = inst_47588);

(statearr_47651[(8)] = inst_47589);

return statearr_47651;
})();
var statearr_47652_48404 = state_47631__$1;
(statearr_47652_48404[(2)] = null);

(statearr_47652_48404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (16))){
var state_47631__$1 = state_47631;
var statearr_47653_48405 = state_47631__$1;
(statearr_47653_48405[(2)] = null);

(statearr_47653_48405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (10))){
var inst_47602 = (state_47631[(2)]);
var state_47631__$1 = state_47631;
if(cljs.core.truth_(inst_47602)){
var statearr_47654_48406 = state_47631__$1;
(statearr_47654_48406[(1)] = (11));

} else {
var statearr_47655_48407 = state_47631__$1;
(statearr_47655_48407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (18))){
var inst_47621 = (state_47631[(2)]);
var state_47631__$1 = state_47631;
var statearr_47656_48408 = state_47631__$1;
(statearr_47656_48408[(2)] = inst_47621);

(statearr_47656_48408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47632 === (8))){
var inst_47597 = (state_47631[(13)]);
var state_47631__$1 = state_47631;
var statearr_47657_48409 = state_47631__$1;
(statearr_47657_48409[(2)] = inst_47597);

(statearr_47657_48409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46067__auto__ = null;
var cljs$core$async$state_machine__46067__auto____0 = (function (){
var statearr_47658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47658[(0)] = cljs$core$async$state_machine__46067__auto__);

(statearr_47658[(1)] = (1));

return statearr_47658;
});
var cljs$core$async$state_machine__46067__auto____1 = (function (state_47631){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47631);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47659){var ex__46070__auto__ = e47659;
var statearr_47660_48411 = state_47631;
(statearr_47660_48411[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47631[(4)]))){
var statearr_47661_48412 = state_47631;
(statearr_47661_48412[(1)] = cljs.core.first((state_47631[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48413 = state_47631;
state_47631 = G__48413;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
cljs$core$async$state_machine__46067__auto__ = function(state_47631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46067__auto____1.call(this,state_47631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46067__auto____0;
cljs$core$async$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46067__auto____1;
return cljs$core$async$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47662 = f__46138__auto__();
(statearr_47662[(6)] = c__46137__auto___48385);

return statearr_47662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
