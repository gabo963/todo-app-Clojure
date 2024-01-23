goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54461 = arguments.length;
switch (G__54461) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54462 = (function (f,blockable,meta54463){
this.f = f;
this.blockable = blockable;
this.meta54463 = meta54463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54464,meta54463__$1){
var self__ = this;
var _54464__$1 = this;
return (new cljs.core.async.t_cljs$core$async54462(self__.f,self__.blockable,meta54463__$1));
}));

(cljs.core.async.t_cljs$core$async54462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54464){
var self__ = this;
var _54464__$1 = this;
return self__.meta54463;
}));

(cljs.core.async.t_cljs$core$async54462.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54462.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54463","meta54463",-413491156,null)], null);
}));

(cljs.core.async.t_cljs$core$async54462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54462");

(cljs.core.async.t_cljs$core$async54462.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54462.
 */
cljs.core.async.__GT_t_cljs$core$async54462 = (function cljs$core$async$__GT_t_cljs$core$async54462(f__$1,blockable__$1,meta54463){
return (new cljs.core.async.t_cljs$core$async54462(f__$1,blockable__$1,meta54463));
});

}

return (new cljs.core.async.t_cljs$core$async54462(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54471 = arguments.length;
switch (G__54471) {
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
var G__54475 = arguments.length;
switch (G__54475) {
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
var G__54478 = arguments.length;
switch (G__54478) {
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
var val_56476 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56476) : fn1.call(null,val_56476));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56476) : fn1.call(null,val_56476));
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
var G__54480 = arguments.length;
switch (G__54480) {
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
var n__5636__auto___56484 = n;
var x_56485 = (0);
while(true){
if((x_56485 < n__5636__auto___56484)){
(a[x_56485] = x_56485);

var G__56486 = (x_56485 + (1));
x_56485 = G__56486;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54486 = (function (flag,meta54487){
this.flag = flag;
this.meta54487 = meta54487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54488,meta54487__$1){
var self__ = this;
var _54488__$1 = this;
return (new cljs.core.async.t_cljs$core$async54486(self__.flag,meta54487__$1));
}));

(cljs.core.async.t_cljs$core$async54486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54488){
var self__ = this;
var _54488__$1 = this;
return self__.meta54487;
}));

(cljs.core.async.t_cljs$core$async54486.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54487","meta54487",-277729760,null)], null);
}));

(cljs.core.async.t_cljs$core$async54486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54486");

(cljs.core.async.t_cljs$core$async54486.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54486.
 */
cljs.core.async.__GT_t_cljs$core$async54486 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54486(flag__$1,meta54487){
return (new cljs.core.async.t_cljs$core$async54486(flag__$1,meta54487));
});

}

return (new cljs.core.async.t_cljs$core$async54486(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54497 = (function (flag,cb,meta54498){
this.flag = flag;
this.cb = cb;
this.meta54498 = meta54498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54499,meta54498__$1){
var self__ = this;
var _54499__$1 = this;
return (new cljs.core.async.t_cljs$core$async54497(self__.flag,self__.cb,meta54498__$1));
}));

(cljs.core.async.t_cljs$core$async54497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54499){
var self__ = this;
var _54499__$1 = this;
return self__.meta54498;
}));

(cljs.core.async.t_cljs$core$async54497.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54498","meta54498",-1898391560,null)], null);
}));

(cljs.core.async.t_cljs$core$async54497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54497");

(cljs.core.async.t_cljs$core$async54497.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54497.
 */
cljs.core.async.__GT_t_cljs$core$async54497 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54497(flag__$1,cb__$1,meta54498){
return (new cljs.core.async.t_cljs$core$async54497(flag__$1,cb__$1,meta54498));
});

}

return (new cljs.core.async.t_cljs$core$async54497(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54500_SHARP_){
var G__54502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54500_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54502) : fret.call(null,G__54502));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54501_SHARP_){
var G__54503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54501_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54503) : fret.call(null,G__54503));
});})(i,idx,port,wport,flag,n,idxs,priority))
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
var G__56498 = (i + (1));
i = G__56498;
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
var len__5769__auto___56501 = arguments.length;
var i__5770__auto___56502 = (0);
while(true){
if((i__5770__auto___56502 < len__5769__auto___56501)){
args__5775__auto__.push((arguments[i__5770__auto___56502]));

var G__56503 = (i__5770__auto___56502 + (1));
i__5770__auto___56502 = G__56503;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54506){
var map__54507 = p__54506;
var map__54507__$1 = cljs.core.__destructure_map(map__54507);
var opts = map__54507__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54504){
var G__54505 = cljs.core.first(seq54504);
var seq54504__$1 = cljs.core.next(seq54504);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54505,seq54504__$1);
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
var G__54509 = arguments.length;
switch (G__54509) {
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
var c__54341__auto___56509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54552){
var state_val_54553 = (state_54552[(1)]);
if((state_val_54553 === (7))){
var inst_54548 = (state_54552[(2)]);
var state_54552__$1 = state_54552;
var statearr_54556_56510 = state_54552__$1;
(statearr_54556_56510[(2)] = inst_54548);

(statearr_54556_56510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (1))){
var state_54552__$1 = state_54552;
var statearr_54557_56511 = state_54552__$1;
(statearr_54557_56511[(2)] = null);

(statearr_54557_56511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (4))){
var inst_54525 = (state_54552[(7)]);
var inst_54525__$1 = (state_54552[(2)]);
var inst_54532 = (inst_54525__$1 == null);
var state_54552__$1 = (function (){var statearr_54558 = state_54552;
(statearr_54558[(7)] = inst_54525__$1);

return statearr_54558;
})();
if(cljs.core.truth_(inst_54532)){
var statearr_54559_56512 = state_54552__$1;
(statearr_54559_56512[(1)] = (5));

} else {
var statearr_54560_56513 = state_54552__$1;
(statearr_54560_56513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (13))){
var state_54552__$1 = state_54552;
var statearr_54569_56514 = state_54552__$1;
(statearr_54569_56514[(2)] = null);

(statearr_54569_56514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (6))){
var inst_54525 = (state_54552[(7)]);
var state_54552__$1 = state_54552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54552__$1,(11),to,inst_54525);
} else {
if((state_val_54553 === (3))){
var inst_54550 = (state_54552[(2)]);
var state_54552__$1 = state_54552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54552__$1,inst_54550);
} else {
if((state_val_54553 === (12))){
var state_54552__$1 = state_54552;
var statearr_54571_56515 = state_54552__$1;
(statearr_54571_56515[(2)] = null);

(statearr_54571_56515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (2))){
var state_54552__$1 = state_54552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54552__$1,(4),from);
} else {
if((state_val_54553 === (11))){
var inst_54541 = (state_54552[(2)]);
var state_54552__$1 = state_54552;
if(cljs.core.truth_(inst_54541)){
var statearr_54572_56516 = state_54552__$1;
(statearr_54572_56516[(1)] = (12));

} else {
var statearr_54573_56517 = state_54552__$1;
(statearr_54573_56517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (9))){
var state_54552__$1 = state_54552;
var statearr_54576_56518 = state_54552__$1;
(statearr_54576_56518[(2)] = null);

(statearr_54576_56518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (5))){
var state_54552__$1 = state_54552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54577_56519 = state_54552__$1;
(statearr_54577_56519[(1)] = (8));

} else {
var statearr_54578_56520 = state_54552__$1;
(statearr_54578_56520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (14))){
var inst_54546 = (state_54552[(2)]);
var state_54552__$1 = state_54552;
var statearr_54579_56521 = state_54552__$1;
(statearr_54579_56521[(2)] = inst_54546);

(statearr_54579_56521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (10))){
var inst_54538 = (state_54552[(2)]);
var state_54552__$1 = state_54552;
var statearr_54580_56522 = state_54552__$1;
(statearr_54580_56522[(2)] = inst_54538);

(statearr_54580_56522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54553 === (8))){
var inst_54535 = cljs.core.async.close_BANG_(to);
var state_54552__$1 = state_54552;
var statearr_54581_56524 = state_54552__$1;
(statearr_54581_56524[(2)] = inst_54535);

(statearr_54581_56524[(1)] = (10));


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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_54584 = [null,null,null,null,null,null,null,null];
(statearr_54584[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_54584[(1)] = (1));

return statearr_54584;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_54552){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54552);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54585){var ex__54003__auto__ = e54585;
var statearr_54587_56525 = state_54552;
(statearr_54587_56525[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54552[(4)]))){
var statearr_54589_56526 = state_54552;
(statearr_54589_56526[(1)] = cljs.core.first((state_54552[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56527 = state_54552;
state_54552 = G__56527;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_54552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_54552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54596 = f__54342__auto__();
(statearr_54596[(6)] = c__54341__auto___56509);

return statearr_54596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
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
var process__$1 = (function (p__54599){
var vec__54601 = p__54599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54601,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54601,(1),null);
var job = vec__54601;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54341__auto___56528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54610){
var state_val_54611 = (state_54610[(1)]);
if((state_val_54611 === (1))){
var state_54610__$1 = state_54610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54610__$1,(2),res,v);
} else {
if((state_val_54611 === (2))){
var inst_54607 = (state_54610[(2)]);
var inst_54608 = cljs.core.async.close_BANG_(res);
var state_54610__$1 = (function (){var statearr_54612 = state_54610;
(statearr_54612[(7)] = inst_54607);

return statearr_54612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54610__$1,inst_54608);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0 = (function (){
var statearr_54613 = [null,null,null,null,null,null,null,null];
(statearr_54613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__);

(statearr_54613[(1)] = (1));

return statearr_54613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1 = (function (state_54610){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54610);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54614){var ex__54003__auto__ = e54614;
var statearr_54615_56529 = state_54610;
(statearr_54615_56529[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54610[(4)]))){
var statearr_54625_56530 = state_54610;
(statearr_54625_56530[(1)] = cljs.core.first((state_54610[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56531 = state_54610;
state_54610 = G__56531;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = function(state_54610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1.call(this,state_54610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54626 = f__54342__auto__();
(statearr_54626[(6)] = c__54341__auto___56528);

return statearr_54626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54627){
var vec__54628 = p__54627;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54628,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54628,(1),null);
var job = vec__54628;
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
var n__5636__auto___56532 = n;
var __56533 = (0);
while(true){
if((__56533 < n__5636__auto___56532)){
var G__54631_56534 = type;
var G__54631_56535__$1 = (((G__54631_56534 instanceof cljs.core.Keyword))?G__54631_56534.fqn:null);
switch (G__54631_56535__$1) {
case "compute":
var c__54341__auto___56539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56533,c__54341__auto___56539,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async){
return (function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = ((function (__56533,c__54341__auto___56539,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async){
return (function (state_54644){
var state_val_54645 = (state_54644[(1)]);
if((state_val_54645 === (1))){
var state_54644__$1 = state_54644;
var statearr_54646_56540 = state_54644__$1;
(statearr_54646_56540[(2)] = null);

(statearr_54646_56540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54645 === (2))){
var state_54644__$1 = state_54644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54644__$1,(4),jobs);
} else {
if((state_val_54645 === (3))){
var inst_54642 = (state_54644[(2)]);
var state_54644__$1 = state_54644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54644__$1,inst_54642);
} else {
if((state_val_54645 === (4))){
var inst_54634 = (state_54644[(2)]);
var inst_54635 = process__$1(inst_54634);
var state_54644__$1 = state_54644;
if(cljs.core.truth_(inst_54635)){
var statearr_54647_56541 = state_54644__$1;
(statearr_54647_56541[(1)] = (5));

} else {
var statearr_54648_56542 = state_54644__$1;
(statearr_54648_56542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54645 === (5))){
var state_54644__$1 = state_54644;
var statearr_54649_56544 = state_54644__$1;
(statearr_54649_56544[(2)] = null);

(statearr_54649_56544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54645 === (6))){
var state_54644__$1 = state_54644;
var statearr_54650_56545 = state_54644__$1;
(statearr_54650_56545[(2)] = null);

(statearr_54650_56545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54645 === (7))){
var inst_54640 = (state_54644[(2)]);
var state_54644__$1 = state_54644;
var statearr_54651_56546 = state_54644__$1;
(statearr_54651_56546[(2)] = inst_54640);

(statearr_54651_56546[(1)] = (3));


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
});})(__56533,c__54341__auto___56539,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async))
;
return ((function (__56533,switch__53999__auto__,c__54341__auto___56539,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0 = (function (){
var statearr_54652 = [null,null,null,null,null,null,null];
(statearr_54652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__);

(statearr_54652[(1)] = (1));

return statearr_54652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1 = (function (state_54644){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54644);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54653){var ex__54003__auto__ = e54653;
var statearr_54654_56547 = state_54644;
(statearr_54654_56547[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54644[(4)]))){
var statearr_54655_56548 = state_54644;
(statearr_54655_56548[(1)] = cljs.core.first((state_54644[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56549 = state_54644;
state_54644 = G__56549;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = function(state_54644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1.call(this,state_54644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__;
})()
;})(__56533,switch__53999__auto__,c__54341__auto___56539,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async))
})();
var state__54343__auto__ = (function (){var statearr_54656 = f__54342__auto__();
(statearr_54656[(6)] = c__54341__auto___56539);

return statearr_54656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
});})(__56533,c__54341__auto___56539,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async))
);


break;
case "async":
var c__54341__auto___56550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56533,c__54341__auto___56550,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async){
return (function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = ((function (__56533,c__54341__auto___56550,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async){
return (function (state_54669){
var state_val_54670 = (state_54669[(1)]);
if((state_val_54670 === (1))){
var state_54669__$1 = state_54669;
var statearr_54671_56551 = state_54669__$1;
(statearr_54671_56551[(2)] = null);

(statearr_54671_56551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (2))){
var state_54669__$1 = state_54669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54669__$1,(4),jobs);
} else {
if((state_val_54670 === (3))){
var inst_54667 = (state_54669[(2)]);
var state_54669__$1 = state_54669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54669__$1,inst_54667);
} else {
if((state_val_54670 === (4))){
var inst_54659 = (state_54669[(2)]);
var inst_54660 = async(inst_54659);
var state_54669__$1 = state_54669;
if(cljs.core.truth_(inst_54660)){
var statearr_54672_56552 = state_54669__$1;
(statearr_54672_56552[(1)] = (5));

} else {
var statearr_54673_56553 = state_54669__$1;
(statearr_54673_56553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (5))){
var state_54669__$1 = state_54669;
var statearr_54674_56554 = state_54669__$1;
(statearr_54674_56554[(2)] = null);

(statearr_54674_56554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (6))){
var state_54669__$1 = state_54669;
var statearr_54675_56555 = state_54669__$1;
(statearr_54675_56555[(2)] = null);

(statearr_54675_56555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54670 === (7))){
var inst_54665 = (state_54669[(2)]);
var state_54669__$1 = state_54669;
var statearr_54676_56557 = state_54669__$1;
(statearr_54676_56557[(2)] = inst_54665);

(statearr_54676_56557[(1)] = (3));


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
});})(__56533,c__54341__auto___56550,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async))
;
return ((function (__56533,switch__53999__auto__,c__54341__auto___56550,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0 = (function (){
var statearr_54677 = [null,null,null,null,null,null,null];
(statearr_54677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__);

(statearr_54677[(1)] = (1));

return statearr_54677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1 = (function (state_54669){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54669);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54678){var ex__54003__auto__ = e54678;
var statearr_54679_56561 = state_54669;
(statearr_54679_56561[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54669[(4)]))){
var statearr_54680_56564 = state_54669;
(statearr_54680_56564[(1)] = cljs.core.first((state_54669[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56567 = state_54669;
state_54669 = G__56567;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = function(state_54669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1.call(this,state_54669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__;
})()
;})(__56533,switch__53999__auto__,c__54341__auto___56550,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async))
})();
var state__54343__auto__ = (function (){var statearr_54681 = f__54342__auto__();
(statearr_54681[(6)] = c__54341__auto___56550);

return statearr_54681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
});})(__56533,c__54341__auto___56550,G__54631_56534,G__54631_56535__$1,n__5636__auto___56532,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54631_56535__$1)].join('')));

}

var G__56568 = (__56533 + (1));
__56533 = G__56568;
continue;
} else {
}
break;
}

var c__54341__auto___56569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54703){
var state_val_54704 = (state_54703[(1)]);
if((state_val_54704 === (7))){
var inst_54699 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
var statearr_54705_56570 = state_54703__$1;
(statearr_54705_56570[(2)] = inst_54699);

(statearr_54705_56570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (1))){
var state_54703__$1 = state_54703;
var statearr_54706_56571 = state_54703__$1;
(statearr_54706_56571[(2)] = null);

(statearr_54706_56571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (4))){
var inst_54684 = (state_54703[(7)]);
var inst_54684__$1 = (state_54703[(2)]);
var inst_54685 = (inst_54684__$1 == null);
var state_54703__$1 = (function (){var statearr_54707 = state_54703;
(statearr_54707[(7)] = inst_54684__$1);

return statearr_54707;
})();
if(cljs.core.truth_(inst_54685)){
var statearr_54708_56574 = state_54703__$1;
(statearr_54708_56574[(1)] = (5));

} else {
var statearr_54709_56575 = state_54703__$1;
(statearr_54709_56575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (6))){
var inst_54689 = (state_54703[(8)]);
var inst_54684 = (state_54703[(7)]);
var inst_54689__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54690 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54691 = [inst_54684,inst_54689__$1];
var inst_54692 = (new cljs.core.PersistentVector(null,2,(5),inst_54690,inst_54691,null));
var state_54703__$1 = (function (){var statearr_54710 = state_54703;
(statearr_54710[(8)] = inst_54689__$1);

return statearr_54710;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54703__$1,(8),jobs,inst_54692);
} else {
if((state_val_54704 === (3))){
var inst_54701 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54703__$1,inst_54701);
} else {
if((state_val_54704 === (2))){
var state_54703__$1 = state_54703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54703__$1,(4),from);
} else {
if((state_val_54704 === (9))){
var inst_54696 = (state_54703[(2)]);
var state_54703__$1 = (function (){var statearr_54711 = state_54703;
(statearr_54711[(9)] = inst_54696);

return statearr_54711;
})();
var statearr_54712_56577 = state_54703__$1;
(statearr_54712_56577[(2)] = null);

(statearr_54712_56577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (5))){
var inst_54687 = cljs.core.async.close_BANG_(jobs);
var state_54703__$1 = state_54703;
var statearr_54713_56582 = state_54703__$1;
(statearr_54713_56582[(2)] = inst_54687);

(statearr_54713_56582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (8))){
var inst_54689 = (state_54703[(8)]);
var inst_54694 = (state_54703[(2)]);
var state_54703__$1 = (function (){var statearr_54714 = state_54703;
(statearr_54714[(10)] = inst_54694);

return statearr_54714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54703__$1,(9),results,inst_54689);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0 = (function (){
var statearr_54715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54715[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__);

(statearr_54715[(1)] = (1));

return statearr_54715;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1 = (function (state_54703){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54703);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54716){var ex__54003__auto__ = e54716;
var statearr_54717_56583 = state_54703;
(statearr_54717_56583[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54703[(4)]))){
var statearr_54718_56584 = state_54703;
(statearr_54718_56584[(1)] = cljs.core.first((state_54703[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56585 = state_54703;
state_54703 = G__56585;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = function(state_54703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1.call(this,state_54703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54719 = f__54342__auto__();
(statearr_54719[(6)] = c__54341__auto___56569);

return statearr_54719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));


var c__54341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54757){
var state_val_54758 = (state_54757[(1)]);
if((state_val_54758 === (7))){
var inst_54753 = (state_54757[(2)]);
var state_54757__$1 = state_54757;
var statearr_54759_56586 = state_54757__$1;
(statearr_54759_56586[(2)] = inst_54753);

(statearr_54759_56586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (20))){
var state_54757__$1 = state_54757;
var statearr_54760_56587 = state_54757__$1;
(statearr_54760_56587[(2)] = null);

(statearr_54760_56587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (1))){
var state_54757__$1 = state_54757;
var statearr_54761_56588 = state_54757__$1;
(statearr_54761_56588[(2)] = null);

(statearr_54761_56588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (4))){
var inst_54722 = (state_54757[(7)]);
var inst_54722__$1 = (state_54757[(2)]);
var inst_54723 = (inst_54722__$1 == null);
var state_54757__$1 = (function (){var statearr_54762 = state_54757;
(statearr_54762[(7)] = inst_54722__$1);

return statearr_54762;
})();
if(cljs.core.truth_(inst_54723)){
var statearr_54763_56589 = state_54757__$1;
(statearr_54763_56589[(1)] = (5));

} else {
var statearr_54764_56590 = state_54757__$1;
(statearr_54764_56590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (15))){
var inst_54735 = (state_54757[(8)]);
var state_54757__$1 = state_54757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54757__$1,(18),to,inst_54735);
} else {
if((state_val_54758 === (21))){
var inst_54748 = (state_54757[(2)]);
var state_54757__$1 = state_54757;
var statearr_54765_56592 = state_54757__$1;
(statearr_54765_56592[(2)] = inst_54748);

(statearr_54765_56592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (13))){
var inst_54750 = (state_54757[(2)]);
var state_54757__$1 = (function (){var statearr_54766 = state_54757;
(statearr_54766[(9)] = inst_54750);

return statearr_54766;
})();
var statearr_54767_56593 = state_54757__$1;
(statearr_54767_56593[(2)] = null);

(statearr_54767_56593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (6))){
var inst_54722 = (state_54757[(7)]);
var state_54757__$1 = state_54757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54757__$1,(11),inst_54722);
} else {
if((state_val_54758 === (17))){
var inst_54743 = (state_54757[(2)]);
var state_54757__$1 = state_54757;
if(cljs.core.truth_(inst_54743)){
var statearr_54768_56594 = state_54757__$1;
(statearr_54768_56594[(1)] = (19));

} else {
var statearr_54769_56595 = state_54757__$1;
(statearr_54769_56595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (3))){
var inst_54755 = (state_54757[(2)]);
var state_54757__$1 = state_54757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54757__$1,inst_54755);
} else {
if((state_val_54758 === (12))){
var inst_54732 = (state_54757[(10)]);
var state_54757__$1 = state_54757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54757__$1,(14),inst_54732);
} else {
if((state_val_54758 === (2))){
var state_54757__$1 = state_54757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54757__$1,(4),results);
} else {
if((state_val_54758 === (19))){
var state_54757__$1 = state_54757;
var statearr_54770_56596 = state_54757__$1;
(statearr_54770_56596[(2)] = null);

(statearr_54770_56596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (11))){
var inst_54732 = (state_54757[(2)]);
var state_54757__$1 = (function (){var statearr_54771 = state_54757;
(statearr_54771[(10)] = inst_54732);

return statearr_54771;
})();
var statearr_54772_56597 = state_54757__$1;
(statearr_54772_56597[(2)] = null);

(statearr_54772_56597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (9))){
var state_54757__$1 = state_54757;
var statearr_54773_56598 = state_54757__$1;
(statearr_54773_56598[(2)] = null);

(statearr_54773_56598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (5))){
var state_54757__$1 = state_54757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54774_56599 = state_54757__$1;
(statearr_54774_56599[(1)] = (8));

} else {
var statearr_54775_56600 = state_54757__$1;
(statearr_54775_56600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (14))){
var inst_54737 = (state_54757[(11)]);
var inst_54735 = (state_54757[(8)]);
var inst_54735__$1 = (state_54757[(2)]);
var inst_54736 = (inst_54735__$1 == null);
var inst_54737__$1 = cljs.core.not(inst_54736);
var state_54757__$1 = (function (){var statearr_54776 = state_54757;
(statearr_54776[(11)] = inst_54737__$1);

(statearr_54776[(8)] = inst_54735__$1);

return statearr_54776;
})();
if(inst_54737__$1){
var statearr_54777_56601 = state_54757__$1;
(statearr_54777_56601[(1)] = (15));

} else {
var statearr_54778_56602 = state_54757__$1;
(statearr_54778_56602[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (16))){
var inst_54737 = (state_54757[(11)]);
var state_54757__$1 = state_54757;
var statearr_54779_56603 = state_54757__$1;
(statearr_54779_56603[(2)] = inst_54737);

(statearr_54779_56603[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (10))){
var inst_54729 = (state_54757[(2)]);
var state_54757__$1 = state_54757;
var statearr_54780_56604 = state_54757__$1;
(statearr_54780_56604[(2)] = inst_54729);

(statearr_54780_56604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (18))){
var inst_54740 = (state_54757[(2)]);
var state_54757__$1 = state_54757;
var statearr_54781_56605 = state_54757__$1;
(statearr_54781_56605[(2)] = inst_54740);

(statearr_54781_56605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54758 === (8))){
var inst_54726 = cljs.core.async.close_BANG_(to);
var state_54757__$1 = state_54757;
var statearr_54782_56606 = state_54757__$1;
(statearr_54782_56606[(2)] = inst_54726);

(statearr_54782_56606[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0 = (function (){
var statearr_54783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__);

(statearr_54783[(1)] = (1));

return statearr_54783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1 = (function (state_54757){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54757);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54784){var ex__54003__auto__ = e54784;
var statearr_54785_56607 = state_54757;
(statearr_54785_56607[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54757[(4)]))){
var statearr_54786_56608 = state_54757;
(statearr_54786_56608[(1)] = cljs.core.first((state_54757[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56609 = state_54757;
state_54757 = G__56609;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__ = function(state_54757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1.call(this,state_54757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54787 = f__54342__auto__();
(statearr_54787[(6)] = c__54341__auto__);

return statearr_54787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));

return c__54341__auto__;
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
var G__54789 = arguments.length;
switch (G__54789) {
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
var G__54791 = arguments.length;
switch (G__54791) {
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
var G__54793 = arguments.length;
switch (G__54793) {
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
var c__54341__auto___56616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54819){
var state_val_54820 = (state_54819[(1)]);
if((state_val_54820 === (7))){
var inst_54815 = (state_54819[(2)]);
var state_54819__$1 = state_54819;
var statearr_54821_56617 = state_54819__$1;
(statearr_54821_56617[(2)] = inst_54815);

(statearr_54821_56617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (1))){
var state_54819__$1 = state_54819;
var statearr_54822_56618 = state_54819__$1;
(statearr_54822_56618[(2)] = null);

(statearr_54822_56618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (4))){
var inst_54796 = (state_54819[(7)]);
var inst_54796__$1 = (state_54819[(2)]);
var inst_54797 = (inst_54796__$1 == null);
var state_54819__$1 = (function (){var statearr_54823 = state_54819;
(statearr_54823[(7)] = inst_54796__$1);

return statearr_54823;
})();
if(cljs.core.truth_(inst_54797)){
var statearr_54824_56619 = state_54819__$1;
(statearr_54824_56619[(1)] = (5));

} else {
var statearr_54825_56620 = state_54819__$1;
(statearr_54825_56620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (13))){
var state_54819__$1 = state_54819;
var statearr_54826_56621 = state_54819__$1;
(statearr_54826_56621[(2)] = null);

(statearr_54826_56621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (6))){
var inst_54796 = (state_54819[(7)]);
var inst_54802 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54796) : p.call(null,inst_54796));
var state_54819__$1 = state_54819;
if(cljs.core.truth_(inst_54802)){
var statearr_54827_56622 = state_54819__$1;
(statearr_54827_56622[(1)] = (9));

} else {
var statearr_54828_56623 = state_54819__$1;
(statearr_54828_56623[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (3))){
var inst_54817 = (state_54819[(2)]);
var state_54819__$1 = state_54819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54819__$1,inst_54817);
} else {
if((state_val_54820 === (12))){
var state_54819__$1 = state_54819;
var statearr_54829_56624 = state_54819__$1;
(statearr_54829_56624[(2)] = null);

(statearr_54829_56624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (2))){
var state_54819__$1 = state_54819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54819__$1,(4),ch);
} else {
if((state_val_54820 === (11))){
var inst_54796 = (state_54819[(7)]);
var inst_54806 = (state_54819[(2)]);
var state_54819__$1 = state_54819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54819__$1,(8),inst_54806,inst_54796);
} else {
if((state_val_54820 === (9))){
var state_54819__$1 = state_54819;
var statearr_54830_56625 = state_54819__$1;
(statearr_54830_56625[(2)] = tc);

(statearr_54830_56625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (5))){
var inst_54799 = cljs.core.async.close_BANG_(tc);
var inst_54800 = cljs.core.async.close_BANG_(fc);
var state_54819__$1 = (function (){var statearr_54831 = state_54819;
(statearr_54831[(8)] = inst_54799);

return statearr_54831;
})();
var statearr_54832_56626 = state_54819__$1;
(statearr_54832_56626[(2)] = inst_54800);

(statearr_54832_56626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (14))){
var inst_54813 = (state_54819[(2)]);
var state_54819__$1 = state_54819;
var statearr_54833_56627 = state_54819__$1;
(statearr_54833_56627[(2)] = inst_54813);

(statearr_54833_56627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (10))){
var state_54819__$1 = state_54819;
var statearr_54834_56628 = state_54819__$1;
(statearr_54834_56628[(2)] = fc);

(statearr_54834_56628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54820 === (8))){
var inst_54808 = (state_54819[(2)]);
var state_54819__$1 = state_54819;
if(cljs.core.truth_(inst_54808)){
var statearr_54835_56629 = state_54819__$1;
(statearr_54835_56629[(1)] = (12));

} else {
var statearr_54836_56630 = state_54819__$1;
(statearr_54836_56630[(1)] = (13));

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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_54837 = [null,null,null,null,null,null,null,null,null];
(statearr_54837[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_54837[(1)] = (1));

return statearr_54837;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_54819){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54819);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54838){var ex__54003__auto__ = e54838;
var statearr_54839_56631 = state_54819;
(statearr_54839_56631[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54819[(4)]))){
var statearr_54840_56632 = state_54819;
(statearr_54840_56632[(1)] = cljs.core.first((state_54819[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56633 = state_54819;
state_54819 = G__56633;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_54819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_54819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54841 = f__54342__auto__();
(statearr_54841[(6)] = c__54341__auto___56616);

return statearr_54841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
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
var c__54341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54863){
var state_val_54864 = (state_54863[(1)]);
if((state_val_54864 === (7))){
var inst_54859 = (state_54863[(2)]);
var state_54863__$1 = state_54863;
var statearr_54865_56635 = state_54863__$1;
(statearr_54865_56635[(2)] = inst_54859);

(statearr_54865_56635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54864 === (1))){
var inst_54842 = init;
var inst_54843 = inst_54842;
var state_54863__$1 = (function (){var statearr_54866 = state_54863;
(statearr_54866[(7)] = inst_54843);

return statearr_54866;
})();
var statearr_54867_56637 = state_54863__$1;
(statearr_54867_56637[(2)] = null);

(statearr_54867_56637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54864 === (4))){
var inst_54846 = (state_54863[(8)]);
var inst_54846__$1 = (state_54863[(2)]);
var inst_54847 = (inst_54846__$1 == null);
var state_54863__$1 = (function (){var statearr_54868 = state_54863;
(statearr_54868[(8)] = inst_54846__$1);

return statearr_54868;
})();
if(cljs.core.truth_(inst_54847)){
var statearr_54869_56638 = state_54863__$1;
(statearr_54869_56638[(1)] = (5));

} else {
var statearr_54870_56639 = state_54863__$1;
(statearr_54870_56639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54864 === (6))){
var inst_54850 = (state_54863[(9)]);
var inst_54843 = (state_54863[(7)]);
var inst_54846 = (state_54863[(8)]);
var inst_54850__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54843,inst_54846) : f.call(null,inst_54843,inst_54846));
var inst_54851 = cljs.core.reduced_QMARK_(inst_54850__$1);
var state_54863__$1 = (function (){var statearr_54872 = state_54863;
(statearr_54872[(9)] = inst_54850__$1);

return statearr_54872;
})();
if(inst_54851){
var statearr_54873_56640 = state_54863__$1;
(statearr_54873_56640[(1)] = (8));

} else {
var statearr_54875_56641 = state_54863__$1;
(statearr_54875_56641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54864 === (3))){
var inst_54861 = (state_54863[(2)]);
var state_54863__$1 = state_54863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54863__$1,inst_54861);
} else {
if((state_val_54864 === (2))){
var state_54863__$1 = state_54863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54863__$1,(4),ch);
} else {
if((state_val_54864 === (9))){
var inst_54850 = (state_54863[(9)]);
var inst_54843 = inst_54850;
var state_54863__$1 = (function (){var statearr_54876 = state_54863;
(statearr_54876[(7)] = inst_54843);

return statearr_54876;
})();
var statearr_54877_56642 = state_54863__$1;
(statearr_54877_56642[(2)] = null);

(statearr_54877_56642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54864 === (5))){
var inst_54843 = (state_54863[(7)]);
var state_54863__$1 = state_54863;
var statearr_54878_56643 = state_54863__$1;
(statearr_54878_56643[(2)] = inst_54843);

(statearr_54878_56643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54864 === (10))){
var inst_54857 = (state_54863[(2)]);
var state_54863__$1 = state_54863;
var statearr_54879_56644 = state_54863__$1;
(statearr_54879_56644[(2)] = inst_54857);

(statearr_54879_56644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54864 === (8))){
var inst_54850 = (state_54863[(9)]);
var inst_54853 = cljs.core.deref(inst_54850);
var state_54863__$1 = state_54863;
var statearr_54880_56645 = state_54863__$1;
(statearr_54880_56645[(2)] = inst_54853);

(statearr_54880_56645[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54000__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54000__auto____0 = (function (){
var statearr_54883 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54883[(0)] = cljs$core$async$reduce_$_state_machine__54000__auto__);

(statearr_54883[(1)] = (1));

return statearr_54883;
});
var cljs$core$async$reduce_$_state_machine__54000__auto____1 = (function (state_54863){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54863);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54884){var ex__54003__auto__ = e54884;
var statearr_54885_56646 = state_54863;
(statearr_54885_56646[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54863[(4)]))){
var statearr_54886_56647 = state_54863;
(statearr_54886_56647[(1)] = cljs.core.first((state_54863[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56648 = state_54863;
state_54863 = G__56648;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54000__auto__ = function(state_54863){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54000__auto____1.call(this,state_54863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54000__auto____0;
cljs$core$async$reduce_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54000__auto____1;
return cljs$core$async$reduce_$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54887 = f__54342__auto__();
(statearr_54887[(6)] = c__54341__auto__);

return statearr_54887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));

return c__54341__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54894){
var state_val_54895 = (state_54894[(1)]);
if((state_val_54895 === (1))){
var inst_54889 = cljs.core.async.reduce(f__$1,init,ch);
var state_54894__$1 = state_54894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54894__$1,(2),inst_54889);
} else {
if((state_val_54895 === (2))){
var inst_54891 = (state_54894[(2)]);
var inst_54892 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54891) : f__$1.call(null,inst_54891));
var state_54894__$1 = state_54894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54894__$1,inst_54892);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54000__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54000__auto____0 = (function (){
var statearr_54897 = [null,null,null,null,null,null,null];
(statearr_54897[(0)] = cljs$core$async$transduce_$_state_machine__54000__auto__);

(statearr_54897[(1)] = (1));

return statearr_54897;
});
var cljs$core$async$transduce_$_state_machine__54000__auto____1 = (function (state_54894){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54894);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54898){var ex__54003__auto__ = e54898;
var statearr_54899_56650 = state_54894;
(statearr_54899_56650[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54894[(4)]))){
var statearr_54906_56651 = state_54894;
(statearr_54906_56651[(1)] = cljs.core.first((state_54894[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56652 = state_54894;
state_54894 = G__56652;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54000__auto__ = function(state_54894){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54000__auto____1.call(this,state_54894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54000__auto____0;
cljs$core$async$transduce_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54000__auto____1;
return cljs$core$async$transduce_$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54907 = f__54342__auto__();
(statearr_54907[(6)] = c__54341__auto__);

return statearr_54907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));

return c__54341__auto__;
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
var G__54909 = arguments.length;
switch (G__54909) {
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
var c__54341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_54934){
var state_val_54935 = (state_54934[(1)]);
if((state_val_54935 === (7))){
var inst_54916 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54936_56654 = state_54934__$1;
(statearr_54936_56654[(2)] = inst_54916);

(statearr_54936_56654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (1))){
var inst_54910 = cljs.core.seq(coll);
var inst_54911 = inst_54910;
var state_54934__$1 = (function (){var statearr_54937 = state_54934;
(statearr_54937[(7)] = inst_54911);

return statearr_54937;
})();
var statearr_54938_56655 = state_54934__$1;
(statearr_54938_56655[(2)] = null);

(statearr_54938_56655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (4))){
var inst_54911 = (state_54934[(7)]);
var inst_54914 = cljs.core.first(inst_54911);
var state_54934__$1 = state_54934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54934__$1,(7),ch,inst_54914);
} else {
if((state_val_54935 === (13))){
var inst_54928 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54939_56656 = state_54934__$1;
(statearr_54939_56656[(2)] = inst_54928);

(statearr_54939_56656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (6))){
var inst_54919 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
if(cljs.core.truth_(inst_54919)){
var statearr_54940_56657 = state_54934__$1;
(statearr_54940_56657[(1)] = (8));

} else {
var statearr_54941_56658 = state_54934__$1;
(statearr_54941_56658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (3))){
var inst_54932 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54934__$1,inst_54932);
} else {
if((state_val_54935 === (12))){
var state_54934__$1 = state_54934;
var statearr_54942_56659 = state_54934__$1;
(statearr_54942_56659[(2)] = null);

(statearr_54942_56659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (2))){
var inst_54911 = (state_54934[(7)]);
var state_54934__$1 = state_54934;
if(cljs.core.truth_(inst_54911)){
var statearr_54943_56660 = state_54934__$1;
(statearr_54943_56660[(1)] = (4));

} else {
var statearr_54944_56662 = state_54934__$1;
(statearr_54944_56662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (11))){
var inst_54925 = cljs.core.async.close_BANG_(ch);
var state_54934__$1 = state_54934;
var statearr_54945_56663 = state_54934__$1;
(statearr_54945_56663[(2)] = inst_54925);

(statearr_54945_56663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (9))){
var state_54934__$1 = state_54934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54946_56664 = state_54934__$1;
(statearr_54946_56664[(1)] = (11));

} else {
var statearr_54947_56665 = state_54934__$1;
(statearr_54947_56665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (5))){
var inst_54911 = (state_54934[(7)]);
var state_54934__$1 = state_54934;
var statearr_54948_56666 = state_54934__$1;
(statearr_54948_56666[(2)] = inst_54911);

(statearr_54948_56666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (10))){
var inst_54930 = (state_54934[(2)]);
var state_54934__$1 = state_54934;
var statearr_54949_56667 = state_54934__$1;
(statearr_54949_56667[(2)] = inst_54930);

(statearr_54949_56667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54935 === (8))){
var inst_54911 = (state_54934[(7)]);
var inst_54921 = cljs.core.next(inst_54911);
var inst_54911__$1 = inst_54921;
var state_54934__$1 = (function (){var statearr_54950 = state_54934;
(statearr_54950[(7)] = inst_54911__$1);

return statearr_54950;
})();
var statearr_54951_56669 = state_54934__$1;
(statearr_54951_56669[(2)] = null);

(statearr_54951_56669[(1)] = (2));


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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_54952 = [null,null,null,null,null,null,null,null];
(statearr_54952[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_54952[(1)] = (1));

return statearr_54952;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_54934){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_54934);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e54953){var ex__54003__auto__ = e54953;
var statearr_54954_56670 = state_54934;
(statearr_54954_56670[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_54934[(4)]))){
var statearr_54955_56671 = state_54934;
(statearr_54955_56671[(1)] = cljs.core.first((state_54934[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56672 = state_54934;
state_54934 = G__56672;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_54934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_54934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_54956 = f__54342__auto__();
(statearr_54956[(6)] = c__54341__auto__);

return statearr_54956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));

return c__54341__auto__;
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
var G__54958 = arguments.length;
switch (G__54958) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_56689 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_56689(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56690 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_56690(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56691 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_56691(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56692 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_56692(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54970 = (function (ch,cs,meta54971){
this.ch = ch;
this.cs = cs;
this.meta54971 = meta54971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54972,meta54971__$1){
var self__ = this;
var _54972__$1 = this;
return (new cljs.core.async.t_cljs$core$async54970(self__.ch,self__.cs,meta54971__$1));
}));

(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54972){
var self__ = this;
var _54972__$1 = this;
return self__.meta54971;
}));

(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54970.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54971","meta54971",360824406,null)], null);
}));

(cljs.core.async.t_cljs$core$async54970.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54970");

(cljs.core.async.t_cljs$core$async54970.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54970");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54970.
 */
cljs.core.async.__GT_t_cljs$core$async54970 = (function cljs$core$async$mult_$___GT_t_cljs$core$async54970(ch__$1,cs__$1,meta54971){
return (new cljs.core.async.t_cljs$core$async54970(ch__$1,cs__$1,meta54971));
});

}

return (new cljs.core.async.t_cljs$core$async54970(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__54341__auto___56696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_55145){
var state_val_55146 = (state_55145[(1)]);
if((state_val_55146 === (7))){
var inst_55140 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55155_56697 = state_55145__$1;
(statearr_55155_56697[(2)] = inst_55140);

(statearr_55155_56697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (20))){
var inst_55016 = (state_55145[(7)]);
var inst_55032 = cljs.core.first(inst_55016);
var inst_55033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55032,(0),null);
var inst_55034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55032,(1),null);
var state_55145__$1 = (function (){var statearr_55157 = state_55145;
(statearr_55157[(8)] = inst_55033);

return statearr_55157;
})();
if(cljs.core.truth_(inst_55034)){
var statearr_55159_56698 = state_55145__$1;
(statearr_55159_56698[(1)] = (22));

} else {
var statearr_55160_56699 = state_55145__$1;
(statearr_55160_56699[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (27))){
var inst_55064 = (state_55145[(9)]);
var inst_54980 = (state_55145[(10)]);
var inst_55073 = (state_55145[(11)]);
var inst_55062 = (state_55145[(12)]);
var inst_55073__$1 = cljs.core._nth(inst_55062,inst_55064);
var inst_55074 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55073__$1,inst_54980,done);
var state_55145__$1 = (function (){var statearr_55162 = state_55145;
(statearr_55162[(11)] = inst_55073__$1);

return statearr_55162;
})();
if(cljs.core.truth_(inst_55074)){
var statearr_55163_56700 = state_55145__$1;
(statearr_55163_56700[(1)] = (30));

} else {
var statearr_55164_56701 = state_55145__$1;
(statearr_55164_56701[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (1))){
var state_55145__$1 = state_55145;
var statearr_55165_56702 = state_55145__$1;
(statearr_55165_56702[(2)] = null);

(statearr_55165_56702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (24))){
var inst_55016 = (state_55145[(7)]);
var inst_55039 = (state_55145[(2)]);
var inst_55040 = cljs.core.next(inst_55016);
var inst_54989 = inst_55040;
var inst_54990 = null;
var inst_54991 = (0);
var inst_54992 = (0);
var state_55145__$1 = (function (){var statearr_55166 = state_55145;
(statearr_55166[(13)] = inst_54991);

(statearr_55166[(14)] = inst_55039);

(statearr_55166[(15)] = inst_54989);

(statearr_55166[(16)] = inst_54990);

(statearr_55166[(17)] = inst_54992);

return statearr_55166;
})();
var statearr_55167_56703 = state_55145__$1;
(statearr_55167_56703[(2)] = null);

(statearr_55167_56703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (39))){
var state_55145__$1 = state_55145;
var statearr_55176_56704 = state_55145__$1;
(statearr_55176_56704[(2)] = null);

(statearr_55176_56704[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (4))){
var inst_54980 = (state_55145[(10)]);
var inst_54980__$1 = (state_55145[(2)]);
var inst_54981 = (inst_54980__$1 == null);
var state_55145__$1 = (function (){var statearr_55177 = state_55145;
(statearr_55177[(10)] = inst_54980__$1);

return statearr_55177;
})();
if(cljs.core.truth_(inst_54981)){
var statearr_55178_56705 = state_55145__$1;
(statearr_55178_56705[(1)] = (5));

} else {
var statearr_55179_56706 = state_55145__$1;
(statearr_55179_56706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (15))){
var inst_54991 = (state_55145[(13)]);
var inst_54989 = (state_55145[(15)]);
var inst_54990 = (state_55145[(16)]);
var inst_54992 = (state_55145[(17)]);
var inst_55012 = (state_55145[(2)]);
var inst_55013 = (inst_54992 + (1));
var tmp55173 = inst_54991;
var tmp55174 = inst_54989;
var tmp55175 = inst_54990;
var inst_54989__$1 = tmp55174;
var inst_54990__$1 = tmp55175;
var inst_54991__$1 = tmp55173;
var inst_54992__$1 = inst_55013;
var state_55145__$1 = (function (){var statearr_55180 = state_55145;
(statearr_55180[(13)] = inst_54991__$1);

(statearr_55180[(15)] = inst_54989__$1);

(statearr_55180[(16)] = inst_54990__$1);

(statearr_55180[(18)] = inst_55012);

(statearr_55180[(17)] = inst_54992__$1);

return statearr_55180;
})();
var statearr_55181_56707 = state_55145__$1;
(statearr_55181_56707[(2)] = null);

(statearr_55181_56707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (21))){
var inst_55043 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55185_56708 = state_55145__$1;
(statearr_55185_56708[(2)] = inst_55043);

(statearr_55185_56708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (31))){
var inst_55073 = (state_55145[(11)]);
var inst_55083 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55073);
var state_55145__$1 = state_55145;
var statearr_55186_56709 = state_55145__$1;
(statearr_55186_56709[(2)] = inst_55083);

(statearr_55186_56709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (32))){
var inst_55064 = (state_55145[(9)]);
var inst_55061 = (state_55145[(19)]);
var inst_55063 = (state_55145[(20)]);
var inst_55062 = (state_55145[(12)]);
var inst_55085 = (state_55145[(2)]);
var inst_55086 = (inst_55064 + (1));
var tmp55182 = inst_55061;
var tmp55183 = inst_55063;
var tmp55184 = inst_55062;
var inst_55061__$1 = tmp55182;
var inst_55062__$1 = tmp55184;
var inst_55063__$1 = tmp55183;
var inst_55064__$1 = inst_55086;
var state_55145__$1 = (function (){var statearr_55187 = state_55145;
(statearr_55187[(21)] = inst_55085);

(statearr_55187[(9)] = inst_55064__$1);

(statearr_55187[(19)] = inst_55061__$1);

(statearr_55187[(20)] = inst_55063__$1);

(statearr_55187[(12)] = inst_55062__$1);

return statearr_55187;
})();
var statearr_55188_56710 = state_55145__$1;
(statearr_55188_56710[(2)] = null);

(statearr_55188_56710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (40))){
var inst_55113 = (state_55145[(22)]);
var inst_55117 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55113);
var state_55145__$1 = state_55145;
var statearr_55189_56711 = state_55145__$1;
(statearr_55189_56711[(2)] = inst_55117);

(statearr_55189_56711[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (33))){
var inst_55102 = (state_55145[(23)]);
var inst_55104 = cljs.core.chunked_seq_QMARK_(inst_55102);
var state_55145__$1 = state_55145;
if(inst_55104){
var statearr_55190_56712 = state_55145__$1;
(statearr_55190_56712[(1)] = (36));

} else {
var statearr_55191_56713 = state_55145__$1;
(statearr_55191_56713[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (13))){
var inst_55001 = (state_55145[(24)]);
var inst_55009 = cljs.core.async.close_BANG_(inst_55001);
var state_55145__$1 = state_55145;
var statearr_55192_56714 = state_55145__$1;
(statearr_55192_56714[(2)] = inst_55009);

(statearr_55192_56714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (22))){
var inst_55033 = (state_55145[(8)]);
var inst_55036 = cljs.core.async.close_BANG_(inst_55033);
var state_55145__$1 = state_55145;
var statearr_55193_56715 = state_55145__$1;
(statearr_55193_56715[(2)] = inst_55036);

(statearr_55193_56715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (36))){
var inst_55102 = (state_55145[(23)]);
var inst_55106 = cljs.core.chunk_first(inst_55102);
var inst_55108 = cljs.core.chunk_rest(inst_55102);
var inst_55109 = cljs.core.count(inst_55106);
var inst_55061 = inst_55108;
var inst_55062 = inst_55106;
var inst_55063 = inst_55109;
var inst_55064 = (0);
var state_55145__$1 = (function (){var statearr_55194 = state_55145;
(statearr_55194[(9)] = inst_55064);

(statearr_55194[(19)] = inst_55061);

(statearr_55194[(20)] = inst_55063);

(statearr_55194[(12)] = inst_55062);

return statearr_55194;
})();
var statearr_55195_56716 = state_55145__$1;
(statearr_55195_56716[(2)] = null);

(statearr_55195_56716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (41))){
var inst_55102 = (state_55145[(23)]);
var inst_55119 = (state_55145[(2)]);
var inst_55120 = cljs.core.next(inst_55102);
var inst_55061 = inst_55120;
var inst_55062 = null;
var inst_55063 = (0);
var inst_55064 = (0);
var state_55145__$1 = (function (){var statearr_55200 = state_55145;
(statearr_55200[(9)] = inst_55064);

(statearr_55200[(19)] = inst_55061);

(statearr_55200[(25)] = inst_55119);

(statearr_55200[(20)] = inst_55063);

(statearr_55200[(12)] = inst_55062);

return statearr_55200;
})();
var statearr_55202_56717 = state_55145__$1;
(statearr_55202_56717[(2)] = null);

(statearr_55202_56717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (43))){
var state_55145__$1 = state_55145;
var statearr_55203_56718 = state_55145__$1;
(statearr_55203_56718[(2)] = null);

(statearr_55203_56718[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (29))){
var inst_55128 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55204_56720 = state_55145__$1;
(statearr_55204_56720[(2)] = inst_55128);

(statearr_55204_56720[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (44))){
var inst_55137 = (state_55145[(2)]);
var state_55145__$1 = (function (){var statearr_55208 = state_55145;
(statearr_55208[(26)] = inst_55137);

return statearr_55208;
})();
var statearr_55210_56722 = state_55145__$1;
(statearr_55210_56722[(2)] = null);

(statearr_55210_56722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (6))){
var inst_55053 = (state_55145[(27)]);
var inst_55052 = cljs.core.deref(cs);
var inst_55053__$1 = cljs.core.keys(inst_55052);
var inst_55054 = cljs.core.count(inst_55053__$1);
var inst_55055 = cljs.core.reset_BANG_(dctr,inst_55054);
var inst_55060 = cljs.core.seq(inst_55053__$1);
var inst_55061 = inst_55060;
var inst_55062 = null;
var inst_55063 = (0);
var inst_55064 = (0);
var state_55145__$1 = (function (){var statearr_55211 = state_55145;
(statearr_55211[(28)] = inst_55055);

(statearr_55211[(27)] = inst_55053__$1);

(statearr_55211[(9)] = inst_55064);

(statearr_55211[(19)] = inst_55061);

(statearr_55211[(20)] = inst_55063);

(statearr_55211[(12)] = inst_55062);

return statearr_55211;
})();
var statearr_55212_56724 = state_55145__$1;
(statearr_55212_56724[(2)] = null);

(statearr_55212_56724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (28))){
var inst_55061 = (state_55145[(19)]);
var inst_55102 = (state_55145[(23)]);
var inst_55102__$1 = cljs.core.seq(inst_55061);
var state_55145__$1 = (function (){var statearr_55213 = state_55145;
(statearr_55213[(23)] = inst_55102__$1);

return statearr_55213;
})();
if(inst_55102__$1){
var statearr_55214_56726 = state_55145__$1;
(statearr_55214_56726[(1)] = (33));

} else {
var statearr_55215_56727 = state_55145__$1;
(statearr_55215_56727[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (25))){
var inst_55064 = (state_55145[(9)]);
var inst_55063 = (state_55145[(20)]);
var inst_55070 = (inst_55064 < inst_55063);
var inst_55071 = inst_55070;
var state_55145__$1 = state_55145;
if(cljs.core.truth_(inst_55071)){
var statearr_55216_56728 = state_55145__$1;
(statearr_55216_56728[(1)] = (27));

} else {
var statearr_55217_56729 = state_55145__$1;
(statearr_55217_56729[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (34))){
var state_55145__$1 = state_55145;
var statearr_55218_56730 = state_55145__$1;
(statearr_55218_56730[(2)] = null);

(statearr_55218_56730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (17))){
var state_55145__$1 = state_55145;
var statearr_55221_56734 = state_55145__$1;
(statearr_55221_56734[(2)] = null);

(statearr_55221_56734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (3))){
var inst_55142 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55145__$1,inst_55142);
} else {
if((state_val_55146 === (12))){
var inst_55048 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55222_56735 = state_55145__$1;
(statearr_55222_56735[(2)] = inst_55048);

(statearr_55222_56735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (2))){
var state_55145__$1 = state_55145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55145__$1,(4),ch);
} else {
if((state_val_55146 === (23))){
var state_55145__$1 = state_55145;
var statearr_55223_56736 = state_55145__$1;
(statearr_55223_56736[(2)] = null);

(statearr_55223_56736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (35))){
var inst_55126 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55224_56737 = state_55145__$1;
(statearr_55224_56737[(2)] = inst_55126);

(statearr_55224_56737[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (19))){
var inst_55016 = (state_55145[(7)]);
var inst_55020 = cljs.core.chunk_first(inst_55016);
var inst_55021 = cljs.core.chunk_rest(inst_55016);
var inst_55022 = cljs.core.count(inst_55020);
var inst_54989 = inst_55021;
var inst_54990 = inst_55020;
var inst_54991 = inst_55022;
var inst_54992 = (0);
var state_55145__$1 = (function (){var statearr_55225 = state_55145;
(statearr_55225[(13)] = inst_54991);

(statearr_55225[(15)] = inst_54989);

(statearr_55225[(16)] = inst_54990);

(statearr_55225[(17)] = inst_54992);

return statearr_55225;
})();
var statearr_55226_56738 = state_55145__$1;
(statearr_55226_56738[(2)] = null);

(statearr_55226_56738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (11))){
var inst_54989 = (state_55145[(15)]);
var inst_55016 = (state_55145[(7)]);
var inst_55016__$1 = cljs.core.seq(inst_54989);
var state_55145__$1 = (function (){var statearr_55227 = state_55145;
(statearr_55227[(7)] = inst_55016__$1);

return statearr_55227;
})();
if(inst_55016__$1){
var statearr_55228_56740 = state_55145__$1;
(statearr_55228_56740[(1)] = (16));

} else {
var statearr_55229_56741 = state_55145__$1;
(statearr_55229_56741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (9))){
var inst_55050 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55230_56743 = state_55145__$1;
(statearr_55230_56743[(2)] = inst_55050);

(statearr_55230_56743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (5))){
var inst_54987 = cljs.core.deref(cs);
var inst_54988 = cljs.core.seq(inst_54987);
var inst_54989 = inst_54988;
var inst_54990 = null;
var inst_54991 = (0);
var inst_54992 = (0);
var state_55145__$1 = (function (){var statearr_55231 = state_55145;
(statearr_55231[(13)] = inst_54991);

(statearr_55231[(15)] = inst_54989);

(statearr_55231[(16)] = inst_54990);

(statearr_55231[(17)] = inst_54992);

return statearr_55231;
})();
var statearr_55232_56746 = state_55145__$1;
(statearr_55232_56746[(2)] = null);

(statearr_55232_56746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (14))){
var state_55145__$1 = state_55145;
var statearr_55233_56747 = state_55145__$1;
(statearr_55233_56747[(2)] = null);

(statearr_55233_56747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (45))){
var inst_55134 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55234_56748 = state_55145__$1;
(statearr_55234_56748[(2)] = inst_55134);

(statearr_55234_56748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (26))){
var inst_55053 = (state_55145[(27)]);
var inst_55130 = (state_55145[(2)]);
var inst_55131 = cljs.core.seq(inst_55053);
var state_55145__$1 = (function (){var statearr_55235 = state_55145;
(statearr_55235[(29)] = inst_55130);

return statearr_55235;
})();
if(inst_55131){
var statearr_55236_56749 = state_55145__$1;
(statearr_55236_56749[(1)] = (42));

} else {
var statearr_55237_56750 = state_55145__$1;
(statearr_55237_56750[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (16))){
var inst_55016 = (state_55145[(7)]);
var inst_55018 = cljs.core.chunked_seq_QMARK_(inst_55016);
var state_55145__$1 = state_55145;
if(inst_55018){
var statearr_55238_56751 = state_55145__$1;
(statearr_55238_56751[(1)] = (19));

} else {
var statearr_55239_56752 = state_55145__$1;
(statearr_55239_56752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (38))){
var inst_55123 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55240_56753 = state_55145__$1;
(statearr_55240_56753[(2)] = inst_55123);

(statearr_55240_56753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (30))){
var state_55145__$1 = state_55145;
var statearr_55241_56754 = state_55145__$1;
(statearr_55241_56754[(2)] = null);

(statearr_55241_56754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (10))){
var inst_54990 = (state_55145[(16)]);
var inst_54992 = (state_55145[(17)]);
var inst_55000 = cljs.core._nth(inst_54990,inst_54992);
var inst_55001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55000,(0),null);
var inst_55006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55000,(1),null);
var state_55145__$1 = (function (){var statearr_55242 = state_55145;
(statearr_55242[(24)] = inst_55001);

return statearr_55242;
})();
if(cljs.core.truth_(inst_55006)){
var statearr_55243_56755 = state_55145__$1;
(statearr_55243_56755[(1)] = (13));

} else {
var statearr_55244_56756 = state_55145__$1;
(statearr_55244_56756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (18))){
var inst_55046 = (state_55145[(2)]);
var state_55145__$1 = state_55145;
var statearr_55245_56758 = state_55145__$1;
(statearr_55245_56758[(2)] = inst_55046);

(statearr_55245_56758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (42))){
var state_55145__$1 = state_55145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55145__$1,(45),dchan);
} else {
if((state_val_55146 === (37))){
var inst_55113 = (state_55145[(22)]);
var inst_55102 = (state_55145[(23)]);
var inst_54980 = (state_55145[(10)]);
var inst_55113__$1 = cljs.core.first(inst_55102);
var inst_55114 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55113__$1,inst_54980,done);
var state_55145__$1 = (function (){var statearr_55248 = state_55145;
(statearr_55248[(22)] = inst_55113__$1);

return statearr_55248;
})();
if(cljs.core.truth_(inst_55114)){
var statearr_55249_56759 = state_55145__$1;
(statearr_55249_56759[(1)] = (39));

} else {
var statearr_55250_56760 = state_55145__$1;
(statearr_55250_56760[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55146 === (8))){
var inst_54991 = (state_55145[(13)]);
var inst_54992 = (state_55145[(17)]);
var inst_54994 = (inst_54992 < inst_54991);
var inst_54995 = inst_54994;
var state_55145__$1 = state_55145;
if(cljs.core.truth_(inst_54995)){
var statearr_55251_56761 = state_55145__$1;
(statearr_55251_56761[(1)] = (10));

} else {
var statearr_55252_56762 = state_55145__$1;
(statearr_55252_56762[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54000__auto__ = null;
var cljs$core$async$mult_$_state_machine__54000__auto____0 = (function (){
var statearr_55257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55257[(0)] = cljs$core$async$mult_$_state_machine__54000__auto__);

(statearr_55257[(1)] = (1));

return statearr_55257;
});
var cljs$core$async$mult_$_state_machine__54000__auto____1 = (function (state_55145){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_55145);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e55259){var ex__54003__auto__ = e55259;
var statearr_55260_56763 = state_55145;
(statearr_55260_56763[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_55145[(4)]))){
var statearr_55261_56764 = state_55145;
(statearr_55261_56764[(1)] = cljs.core.first((state_55145[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56765 = state_55145;
state_55145 = G__56765;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54000__auto__ = function(state_55145){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54000__auto____1.call(this,state_55145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54000__auto____0;
cljs$core$async$mult_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54000__auto____1;
return cljs$core$async$mult_$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_55262 = f__54342__auto__();
(statearr_55262[(6)] = c__54341__auto___56696);

return statearr_55262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
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
var G__55264 = arguments.length;
switch (G__55264) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56769 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56769(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56770 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56770(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56771 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56771(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56772 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56772(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56773 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56773(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56776 = arguments.length;
var i__5770__auto___56777 = (0);
while(true){
if((i__5770__auto___56777 < len__5769__auto___56776)){
args__5775__auto__.push((arguments[i__5770__auto___56777]));

var G__56778 = (i__5770__auto___56777 + (1));
i__5770__auto___56777 = G__56778;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55301){
var map__55302 = p__55301;
var map__55302__$1 = cljs.core.__destructure_map(map__55302);
var opts = map__55302__$1;
var statearr_55303_56779 = state;
(statearr_55303_56779[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55304_56784 = state;
(statearr_55304_56784[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_55305_56785 = state;
(statearr_55305_56785[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55293){
var G__55294 = cljs.core.first(seq55293);
var seq55293__$1 = cljs.core.next(seq55293);
var G__55295 = cljs.core.first(seq55293__$1);
var seq55293__$2 = cljs.core.next(seq55293__$1);
var G__55296 = cljs.core.first(seq55293__$2);
var seq55293__$3 = cljs.core.next(seq55293__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55294,G__55295,G__55296,seq55293__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55316 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55317){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55317 = meta55317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55318,meta55317__$1){
var self__ = this;
var _55318__$1 = this;
return (new cljs.core.async.t_cljs$core$async55316(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55317__$1));
}));

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55318){
var self__ = this;
var _55318__$1 = this;
return self__.meta55317;
}));

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55316.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55317","meta55317",2046647246,null)], null);
}));

(cljs.core.async.t_cljs$core$async55316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55316");

(cljs.core.async.t_cljs$core$async55316.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55316.
 */
cljs.core.async.__GT_t_cljs$core$async55316 = (function cljs$core$async$mix_$___GT_t_cljs$core$async55316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55317){
return (new cljs.core.async.t_cljs$core$async55316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55317));
});

}

return (new cljs.core.async.t_cljs$core$async55316(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54341__auto___56794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_55387){
var state_val_55388 = (state_55387[(1)]);
if((state_val_55388 === (7))){
var inst_55346 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
if(cljs.core.truth_(inst_55346)){
var statearr_55390_56797 = state_55387__$1;
(statearr_55390_56797[(1)] = (8));

} else {
var statearr_55391_56798 = state_55387__$1;
(statearr_55391_56798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (20))){
var inst_55339 = (state_55387[(7)]);
var state_55387__$1 = state_55387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55387__$1,(23),out,inst_55339);
} else {
if((state_val_55388 === (1))){
var inst_55322 = calc_state();
var inst_55323 = cljs.core.__destructure_map(inst_55322);
var inst_55324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55323,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55323,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55323,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55327 = inst_55322;
var state_55387__$1 = (function (){var statearr_55392 = state_55387;
(statearr_55392[(8)] = inst_55326);

(statearr_55392[(9)] = inst_55324);

(statearr_55392[(10)] = inst_55327);

(statearr_55392[(11)] = inst_55325);

return statearr_55392;
})();
var statearr_55394_56799 = state_55387__$1;
(statearr_55394_56799[(2)] = null);

(statearr_55394_56799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (24))){
var inst_55330 = (state_55387[(12)]);
var inst_55327 = inst_55330;
var state_55387__$1 = (function (){var statearr_55397 = state_55387;
(statearr_55397[(10)] = inst_55327);

return statearr_55397;
})();
var statearr_55398_56800 = state_55387__$1;
(statearr_55398_56800[(2)] = null);

(statearr_55398_56800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (4))){
var inst_55341 = (state_55387[(13)]);
var inst_55339 = (state_55387[(7)]);
var inst_55338 = (state_55387[(2)]);
var inst_55339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55338,(0),null);
var inst_55340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55338,(1),null);
var inst_55341__$1 = (inst_55339__$1 == null);
var state_55387__$1 = (function (){var statearr_55400 = state_55387;
(statearr_55400[(13)] = inst_55341__$1);

(statearr_55400[(7)] = inst_55339__$1);

(statearr_55400[(14)] = inst_55340);

return statearr_55400;
})();
if(cljs.core.truth_(inst_55341__$1)){
var statearr_55401_56801 = state_55387__$1;
(statearr_55401_56801[(1)] = (5));

} else {
var statearr_55402_56802 = state_55387__$1;
(statearr_55402_56802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (15))){
var inst_55331 = (state_55387[(15)]);
var inst_55360 = (state_55387[(16)]);
var inst_55360__$1 = cljs.core.empty_QMARK_(inst_55331);
var state_55387__$1 = (function (){var statearr_55404 = state_55387;
(statearr_55404[(16)] = inst_55360__$1);

return statearr_55404;
})();
if(inst_55360__$1){
var statearr_55405_56803 = state_55387__$1;
(statearr_55405_56803[(1)] = (17));

} else {
var statearr_55406_56804 = state_55387__$1;
(statearr_55406_56804[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (21))){
var inst_55330 = (state_55387[(12)]);
var inst_55327 = inst_55330;
var state_55387__$1 = (function (){var statearr_55407 = state_55387;
(statearr_55407[(10)] = inst_55327);

return statearr_55407;
})();
var statearr_55408_56805 = state_55387__$1;
(statearr_55408_56805[(2)] = null);

(statearr_55408_56805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (13))){
var inst_55353 = (state_55387[(2)]);
var inst_55354 = calc_state();
var inst_55327 = inst_55354;
var state_55387__$1 = (function (){var statearr_55409 = state_55387;
(statearr_55409[(10)] = inst_55327);

(statearr_55409[(17)] = inst_55353);

return statearr_55409;
})();
var statearr_55410_56806 = state_55387__$1;
(statearr_55410_56806[(2)] = null);

(statearr_55410_56806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (22))){
var inst_55380 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
var statearr_55411_56807 = state_55387__$1;
(statearr_55411_56807[(2)] = inst_55380);

(statearr_55411_56807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (6))){
var inst_55340 = (state_55387[(14)]);
var inst_55344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55340,change);
var state_55387__$1 = state_55387;
var statearr_55413_56808 = state_55387__$1;
(statearr_55413_56808[(2)] = inst_55344);

(statearr_55413_56808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (25))){
var state_55387__$1 = state_55387;
var statearr_55414_56809 = state_55387__$1;
(statearr_55414_56809[(2)] = null);

(statearr_55414_56809[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (17))){
var inst_55332 = (state_55387[(18)]);
var inst_55340 = (state_55387[(14)]);
var inst_55362 = (inst_55332.cljs$core$IFn$_invoke$arity$1 ? inst_55332.cljs$core$IFn$_invoke$arity$1(inst_55340) : inst_55332.call(null,inst_55340));
var inst_55363 = cljs.core.not(inst_55362);
var state_55387__$1 = state_55387;
var statearr_55415_56810 = state_55387__$1;
(statearr_55415_56810[(2)] = inst_55363);

(statearr_55415_56810[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (3))){
var inst_55384 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55387__$1,inst_55384);
} else {
if((state_val_55388 === (12))){
var state_55387__$1 = state_55387;
var statearr_55416_56811 = state_55387__$1;
(statearr_55416_56811[(2)] = null);

(statearr_55416_56811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (2))){
var inst_55330 = (state_55387[(12)]);
var inst_55327 = (state_55387[(10)]);
var inst_55330__$1 = cljs.core.__destructure_map(inst_55327);
var inst_55331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55330__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55330__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55330__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55387__$1 = (function (){var statearr_55429 = state_55387;
(statearr_55429[(18)] = inst_55332);

(statearr_55429[(15)] = inst_55331);

(statearr_55429[(12)] = inst_55330__$1);

return statearr_55429;
})();
return cljs.core.async.ioc_alts_BANG_(state_55387__$1,(4),inst_55333);
} else {
if((state_val_55388 === (23))){
var inst_55371 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
if(cljs.core.truth_(inst_55371)){
var statearr_55439_56813 = state_55387__$1;
(statearr_55439_56813[(1)] = (24));

} else {
var statearr_55440_56814 = state_55387__$1;
(statearr_55440_56814[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (19))){
var inst_55366 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
var statearr_55441_56817 = state_55387__$1;
(statearr_55441_56817[(2)] = inst_55366);

(statearr_55441_56817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (11))){
var inst_55340 = (state_55387[(14)]);
var inst_55350 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55340);
var state_55387__$1 = state_55387;
var statearr_55443_56820 = state_55387__$1;
(statearr_55443_56820[(2)] = inst_55350);

(statearr_55443_56820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (9))){
var inst_55357 = (state_55387[(19)]);
var inst_55331 = (state_55387[(15)]);
var inst_55340 = (state_55387[(14)]);
var inst_55357__$1 = (inst_55331.cljs$core$IFn$_invoke$arity$1 ? inst_55331.cljs$core$IFn$_invoke$arity$1(inst_55340) : inst_55331.call(null,inst_55340));
var state_55387__$1 = (function (){var statearr_55445 = state_55387;
(statearr_55445[(19)] = inst_55357__$1);

return statearr_55445;
})();
if(cljs.core.truth_(inst_55357__$1)){
var statearr_55446_56822 = state_55387__$1;
(statearr_55446_56822[(1)] = (14));

} else {
var statearr_55447_56823 = state_55387__$1;
(statearr_55447_56823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (5))){
var inst_55341 = (state_55387[(13)]);
var state_55387__$1 = state_55387;
var statearr_55448_56824 = state_55387__$1;
(statearr_55448_56824[(2)] = inst_55341);

(statearr_55448_56824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (14))){
var inst_55357 = (state_55387[(19)]);
var state_55387__$1 = state_55387;
var statearr_55450_56825 = state_55387__$1;
(statearr_55450_56825[(2)] = inst_55357);

(statearr_55450_56825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (26))){
var inst_55376 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
var statearr_55453_56826 = state_55387__$1;
(statearr_55453_56826[(2)] = inst_55376);

(statearr_55453_56826[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (16))){
var inst_55368 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
if(cljs.core.truth_(inst_55368)){
var statearr_55454_56827 = state_55387__$1;
(statearr_55454_56827[(1)] = (20));

} else {
var statearr_55455_56828 = state_55387__$1;
(statearr_55455_56828[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (10))){
var inst_55382 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
var statearr_55456_56829 = state_55387__$1;
(statearr_55456_56829[(2)] = inst_55382);

(statearr_55456_56829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (18))){
var inst_55360 = (state_55387[(16)]);
var state_55387__$1 = state_55387;
var statearr_55457_56830 = state_55387__$1;
(statearr_55457_56830[(2)] = inst_55360);

(statearr_55457_56830[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (8))){
var inst_55339 = (state_55387[(7)]);
var inst_55348 = (inst_55339 == null);
var state_55387__$1 = state_55387;
if(cljs.core.truth_(inst_55348)){
var statearr_55458_56831 = state_55387__$1;
(statearr_55458_56831[(1)] = (11));

} else {
var statearr_55459_56832 = state_55387__$1;
(statearr_55459_56832[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54000__auto__ = null;
var cljs$core$async$mix_$_state_machine__54000__auto____0 = (function (){
var statearr_55460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55460[(0)] = cljs$core$async$mix_$_state_machine__54000__auto__);

(statearr_55460[(1)] = (1));

return statearr_55460;
});
var cljs$core$async$mix_$_state_machine__54000__auto____1 = (function (state_55387){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_55387);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e55461){var ex__54003__auto__ = e55461;
var statearr_55462_56833 = state_55387;
(statearr_55462_56833[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_55387[(4)]))){
var statearr_55463_56834 = state_55387;
(statearr_55463_56834[(1)] = cljs.core.first((state_55387[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56835 = state_55387;
state_55387 = G__56835;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54000__auto__ = function(state_55387){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54000__auto____1.call(this,state_55387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54000__auto____0;
cljs$core$async$mix_$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54000__auto____1;
return cljs$core$async$mix_$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_55464 = f__54342__auto__();
(statearr_55464[(6)] = c__54341__auto___56794);

return statearr_55464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56836 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56836(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56843 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56843(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56844 = (function() {
var G__56845 = null;
var G__56845__1 = (function (p){
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
var G__56845__2 = (function (p,v){
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
G__56845 = function(p,v){
switch(arguments.length){
case 1:
return G__56845__1.call(this,p);
case 2:
return G__56845__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56845.cljs$core$IFn$_invoke$arity$1 = G__56845__1;
G__56845.cljs$core$IFn$_invoke$arity$2 = G__56845__2;
return G__56845;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55476 = arguments.length;
switch (G__55476) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56844(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56844(p,v);
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
var G__55484 = arguments.length;
switch (G__55484) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55482_SHARP_){
if(cljs.core.truth_((p1__55482_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55482_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55482_SHARP_.call(null,topic)))){
return p1__55482_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55482_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55488 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55489){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55489 = meta55489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55490,meta55489__$1){
var self__ = this;
var _55490__$1 = this;
return (new cljs.core.async.t_cljs$core$async55488(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55489__$1));
}));

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55490){
var self__ = this;
var _55490__$1 = this;
return self__.meta55489;
}));

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55489","meta55489",-309402179,null)], null);
}));

(cljs.core.async.t_cljs$core$async55488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55488");

(cljs.core.async.t_cljs$core$async55488.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55488.
 */
cljs.core.async.__GT_t_cljs$core$async55488 = (function cljs$core$async$__GT_t_cljs$core$async55488(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55489){
return (new cljs.core.async.t_cljs$core$async55488(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55489));
});

}

return (new cljs.core.async.t_cljs$core$async55488(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54341__auto___56850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_55578){
var state_val_55579 = (state_55578[(1)]);
if((state_val_55579 === (7))){
var inst_55574 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
var statearr_55580_56851 = state_55578__$1;
(statearr_55580_56851[(2)] = inst_55574);

(statearr_55580_56851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (20))){
var state_55578__$1 = state_55578;
var statearr_55585_56852 = state_55578__$1;
(statearr_55585_56852[(2)] = null);

(statearr_55585_56852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (1))){
var state_55578__$1 = state_55578;
var statearr_55586_56853 = state_55578__$1;
(statearr_55586_56853[(2)] = null);

(statearr_55586_56853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (24))){
var inst_55557 = (state_55578[(7)]);
var inst_55566 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55557);
var state_55578__$1 = state_55578;
var statearr_55587_56854 = state_55578__$1;
(statearr_55587_56854[(2)] = inst_55566);

(statearr_55587_56854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (4))){
var inst_55507 = (state_55578[(8)]);
var inst_55507__$1 = (state_55578[(2)]);
var inst_55508 = (inst_55507__$1 == null);
var state_55578__$1 = (function (){var statearr_55588 = state_55578;
(statearr_55588[(8)] = inst_55507__$1);

return statearr_55588;
})();
if(cljs.core.truth_(inst_55508)){
var statearr_55589_56856 = state_55578__$1;
(statearr_55589_56856[(1)] = (5));

} else {
var statearr_55591_56857 = state_55578__$1;
(statearr_55591_56857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (15))){
var inst_55551 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
var statearr_55593_56859 = state_55578__$1;
(statearr_55593_56859[(2)] = inst_55551);

(statearr_55593_56859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (21))){
var inst_55571 = (state_55578[(2)]);
var state_55578__$1 = (function (){var statearr_55594 = state_55578;
(statearr_55594[(9)] = inst_55571);

return statearr_55594;
})();
var statearr_55595_56860 = state_55578__$1;
(statearr_55595_56860[(2)] = null);

(statearr_55595_56860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (13))){
var inst_55531 = (state_55578[(10)]);
var inst_55533 = cljs.core.chunked_seq_QMARK_(inst_55531);
var state_55578__$1 = state_55578;
if(inst_55533){
var statearr_55596_56861 = state_55578__$1;
(statearr_55596_56861[(1)] = (16));

} else {
var statearr_55597_56862 = state_55578__$1;
(statearr_55597_56862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (22))){
var inst_55563 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
if(cljs.core.truth_(inst_55563)){
var statearr_55598_56863 = state_55578__$1;
(statearr_55598_56863[(1)] = (23));

} else {
var statearr_55599_56864 = state_55578__$1;
(statearr_55599_56864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (6))){
var inst_55507 = (state_55578[(8)]);
var inst_55557 = (state_55578[(7)]);
var inst_55559 = (state_55578[(11)]);
var inst_55557__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55507) : topic_fn.call(null,inst_55507));
var inst_55558 = cljs.core.deref(mults);
var inst_55559__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55558,inst_55557__$1);
var state_55578__$1 = (function (){var statearr_55604 = state_55578;
(statearr_55604[(7)] = inst_55557__$1);

(statearr_55604[(11)] = inst_55559__$1);

return statearr_55604;
})();
if(cljs.core.truth_(inst_55559__$1)){
var statearr_55605_56865 = state_55578__$1;
(statearr_55605_56865[(1)] = (19));

} else {
var statearr_55606_56866 = state_55578__$1;
(statearr_55606_56866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (25))){
var inst_55568 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
var statearr_55607_56867 = state_55578__$1;
(statearr_55607_56867[(2)] = inst_55568);

(statearr_55607_56867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (17))){
var inst_55531 = (state_55578[(10)]);
var inst_55542 = cljs.core.first(inst_55531);
var inst_55543 = cljs.core.async.muxch_STAR_(inst_55542);
var inst_55544 = cljs.core.async.close_BANG_(inst_55543);
var inst_55545 = cljs.core.next(inst_55531);
var inst_55517 = inst_55545;
var inst_55518 = null;
var inst_55519 = (0);
var inst_55520 = (0);
var state_55578__$1 = (function (){var statearr_55608 = state_55578;
(statearr_55608[(12)] = inst_55517);

(statearr_55608[(13)] = inst_55544);

(statearr_55608[(14)] = inst_55518);

(statearr_55608[(15)] = inst_55520);

(statearr_55608[(16)] = inst_55519);

return statearr_55608;
})();
var statearr_55610_56868 = state_55578__$1;
(statearr_55610_56868[(2)] = null);

(statearr_55610_56868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (3))){
var inst_55576 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55578__$1,inst_55576);
} else {
if((state_val_55579 === (12))){
var inst_55553 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
var statearr_55612_56869 = state_55578__$1;
(statearr_55612_56869[(2)] = inst_55553);

(statearr_55612_56869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (2))){
var state_55578__$1 = state_55578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55578__$1,(4),ch);
} else {
if((state_val_55579 === (23))){
var state_55578__$1 = state_55578;
var statearr_55613_56870 = state_55578__$1;
(statearr_55613_56870[(2)] = null);

(statearr_55613_56870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (19))){
var inst_55507 = (state_55578[(8)]);
var inst_55559 = (state_55578[(11)]);
var inst_55561 = cljs.core.async.muxch_STAR_(inst_55559);
var state_55578__$1 = state_55578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55578__$1,(22),inst_55561,inst_55507);
} else {
if((state_val_55579 === (11))){
var inst_55517 = (state_55578[(12)]);
var inst_55531 = (state_55578[(10)]);
var inst_55531__$1 = cljs.core.seq(inst_55517);
var state_55578__$1 = (function (){var statearr_55614 = state_55578;
(statearr_55614[(10)] = inst_55531__$1);

return statearr_55614;
})();
if(inst_55531__$1){
var statearr_55615_56871 = state_55578__$1;
(statearr_55615_56871[(1)] = (13));

} else {
var statearr_55616_56872 = state_55578__$1;
(statearr_55616_56872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (9))){
var inst_55555 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
var statearr_55618_56873 = state_55578__$1;
(statearr_55618_56873[(2)] = inst_55555);

(statearr_55618_56873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (5))){
var inst_55514 = cljs.core.deref(mults);
var inst_55515 = cljs.core.vals(inst_55514);
var inst_55516 = cljs.core.seq(inst_55515);
var inst_55517 = inst_55516;
var inst_55518 = null;
var inst_55519 = (0);
var inst_55520 = (0);
var state_55578__$1 = (function (){var statearr_55622 = state_55578;
(statearr_55622[(12)] = inst_55517);

(statearr_55622[(14)] = inst_55518);

(statearr_55622[(15)] = inst_55520);

(statearr_55622[(16)] = inst_55519);

return statearr_55622;
})();
var statearr_55623_56874 = state_55578__$1;
(statearr_55623_56874[(2)] = null);

(statearr_55623_56874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (14))){
var state_55578__$1 = state_55578;
var statearr_55628_56875 = state_55578__$1;
(statearr_55628_56875[(2)] = null);

(statearr_55628_56875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (16))){
var inst_55531 = (state_55578[(10)]);
var inst_55536 = cljs.core.chunk_first(inst_55531);
var inst_55537 = cljs.core.chunk_rest(inst_55531);
var inst_55538 = cljs.core.count(inst_55536);
var inst_55517 = inst_55537;
var inst_55518 = inst_55536;
var inst_55519 = inst_55538;
var inst_55520 = (0);
var state_55578__$1 = (function (){var statearr_55630 = state_55578;
(statearr_55630[(12)] = inst_55517);

(statearr_55630[(14)] = inst_55518);

(statearr_55630[(15)] = inst_55520);

(statearr_55630[(16)] = inst_55519);

return statearr_55630;
})();
var statearr_55631_56878 = state_55578__$1;
(statearr_55631_56878[(2)] = null);

(statearr_55631_56878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (10))){
var inst_55517 = (state_55578[(12)]);
var inst_55518 = (state_55578[(14)]);
var inst_55520 = (state_55578[(15)]);
var inst_55519 = (state_55578[(16)]);
var inst_55525 = cljs.core._nth(inst_55518,inst_55520);
var inst_55526 = cljs.core.async.muxch_STAR_(inst_55525);
var inst_55527 = cljs.core.async.close_BANG_(inst_55526);
var inst_55528 = (inst_55520 + (1));
var tmp55624 = inst_55517;
var tmp55625 = inst_55518;
var tmp55626 = inst_55519;
var inst_55517__$1 = tmp55624;
var inst_55518__$1 = tmp55625;
var inst_55519__$1 = tmp55626;
var inst_55520__$1 = inst_55528;
var state_55578__$1 = (function (){var statearr_55632 = state_55578;
(statearr_55632[(12)] = inst_55517__$1);

(statearr_55632[(14)] = inst_55518__$1);

(statearr_55632[(17)] = inst_55527);

(statearr_55632[(15)] = inst_55520__$1);

(statearr_55632[(16)] = inst_55519__$1);

return statearr_55632;
})();
var statearr_55636_56879 = state_55578__$1;
(statearr_55636_56879[(2)] = null);

(statearr_55636_56879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (18))){
var inst_55548 = (state_55578[(2)]);
var state_55578__$1 = state_55578;
var statearr_55637_56880 = state_55578__$1;
(statearr_55637_56880[(2)] = inst_55548);

(statearr_55637_56880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55579 === (8))){
var inst_55520 = (state_55578[(15)]);
var inst_55519 = (state_55578[(16)]);
var inst_55522 = (inst_55520 < inst_55519);
var inst_55523 = inst_55522;
var state_55578__$1 = state_55578;
if(cljs.core.truth_(inst_55523)){
var statearr_55641_56881 = state_55578__$1;
(statearr_55641_56881[(1)] = (10));

} else {
var statearr_55642_56882 = state_55578__$1;
(statearr_55642_56882[(1)] = (11));

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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_55644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55644[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_55644[(1)] = (1));

return statearr_55644;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_55578){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_55578);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e55646){var ex__54003__auto__ = e55646;
var statearr_55647_56883 = state_55578;
(statearr_55647_56883[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_55578[(4)]))){
var statearr_55648_56884 = state_55578;
(statearr_55648_56884[(1)] = cljs.core.first((state_55578[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56885 = state_55578;
state_55578 = G__56885;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_55578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_55578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_55649 = f__54342__auto__();
(statearr_55649[(6)] = c__54341__auto___56850);

return statearr_55649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
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
var G__55651 = arguments.length;
switch (G__55651) {
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
var G__55653 = arguments.length;
switch (G__55653) {
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
var G__55655 = arguments.length;
switch (G__55655) {
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
var c__54341__auto___56891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_55711){
var state_val_55712 = (state_55711[(1)]);
if((state_val_55712 === (7))){
var state_55711__$1 = state_55711;
var statearr_55714_56892 = state_55711__$1;
(statearr_55714_56892[(2)] = null);

(statearr_55714_56892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (1))){
var state_55711__$1 = state_55711;
var statearr_55715_56893 = state_55711__$1;
(statearr_55715_56893[(2)] = null);

(statearr_55715_56893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (4))){
var inst_55658 = (state_55711[(7)]);
var inst_55659 = (state_55711[(8)]);
var inst_55661 = (inst_55659 < inst_55658);
var state_55711__$1 = state_55711;
if(cljs.core.truth_(inst_55661)){
var statearr_55716_56894 = state_55711__$1;
(statearr_55716_56894[(1)] = (6));

} else {
var statearr_55717_56895 = state_55711__$1;
(statearr_55717_56895[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (15))){
var inst_55697 = (state_55711[(9)]);
var inst_55702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55697);
var state_55711__$1 = state_55711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55711__$1,(17),out,inst_55702);
} else {
if((state_val_55712 === (13))){
var inst_55697 = (state_55711[(9)]);
var inst_55697__$1 = (state_55711[(2)]);
var inst_55698 = cljs.core.some(cljs.core.nil_QMARK_,inst_55697__$1);
var state_55711__$1 = (function (){var statearr_55718 = state_55711;
(statearr_55718[(9)] = inst_55697__$1);

return statearr_55718;
})();
if(cljs.core.truth_(inst_55698)){
var statearr_55719_56897 = state_55711__$1;
(statearr_55719_56897[(1)] = (14));

} else {
var statearr_55720_56898 = state_55711__$1;
(statearr_55720_56898[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (6))){
var state_55711__$1 = state_55711;
var statearr_55721_56899 = state_55711__$1;
(statearr_55721_56899[(2)] = null);

(statearr_55721_56899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (17))){
var inst_55704 = (state_55711[(2)]);
var state_55711__$1 = (function (){var statearr_55725 = state_55711;
(statearr_55725[(10)] = inst_55704);

return statearr_55725;
})();
var statearr_55726_56900 = state_55711__$1;
(statearr_55726_56900[(2)] = null);

(statearr_55726_56900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (3))){
var inst_55709 = (state_55711[(2)]);
var state_55711__$1 = state_55711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55711__$1,inst_55709);
} else {
if((state_val_55712 === (12))){
var _ = (function (){var statearr_55727 = state_55711;
(statearr_55727[(4)] = cljs.core.rest((state_55711[(4)])));

return statearr_55727;
})();
var state_55711__$1 = state_55711;
var ex55723 = (state_55711__$1[(2)]);
var statearr_55728_56901 = state_55711__$1;
(statearr_55728_56901[(5)] = ex55723);


if((ex55723 instanceof Object)){
var statearr_55729_56902 = state_55711__$1;
(statearr_55729_56902[(1)] = (11));

(statearr_55729_56902[(5)] = null);

} else {
throw ex55723;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (2))){
var inst_55657 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55658 = cnt;
var inst_55659 = (0);
var state_55711__$1 = (function (){var statearr_55732 = state_55711;
(statearr_55732[(7)] = inst_55658);

(statearr_55732[(11)] = inst_55657);

(statearr_55732[(8)] = inst_55659);

return statearr_55732;
})();
var statearr_55733_56903 = state_55711__$1;
(statearr_55733_56903[(2)] = null);

(statearr_55733_56903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (11))){
var inst_55675 = (state_55711[(2)]);
var inst_55677 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55711__$1 = (function (){var statearr_55734 = state_55711;
(statearr_55734[(12)] = inst_55675);

return statearr_55734;
})();
var statearr_55735_56904 = state_55711__$1;
(statearr_55735_56904[(2)] = inst_55677);

(statearr_55735_56904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (9))){
var inst_55659 = (state_55711[(8)]);
var _ = (function (){var statearr_55736 = state_55711;
(statearr_55736[(4)] = cljs.core.cons((12),(state_55711[(4)])));

return statearr_55736;
})();
var inst_55683 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55659) : chs__$1.call(null,inst_55659));
var inst_55684 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55659) : done.call(null,inst_55659));
var inst_55685 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55683,inst_55684);
var ___$1 = (function (){var statearr_55737 = state_55711;
(statearr_55737[(4)] = cljs.core.rest((state_55711[(4)])));

return statearr_55737;
})();
var state_55711__$1 = state_55711;
var statearr_55738_56905 = state_55711__$1;
(statearr_55738_56905[(2)] = inst_55685);

(statearr_55738_56905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (5))){
var inst_55695 = (state_55711[(2)]);
var state_55711__$1 = (function (){var statearr_55739 = state_55711;
(statearr_55739[(13)] = inst_55695);

return statearr_55739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55711__$1,(13),dchan);
} else {
if((state_val_55712 === (14))){
var inst_55700 = cljs.core.async.close_BANG_(out);
var state_55711__$1 = state_55711;
var statearr_55740_56906 = state_55711__$1;
(statearr_55740_56906[(2)] = inst_55700);

(statearr_55740_56906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (16))){
var inst_55707 = (state_55711[(2)]);
var state_55711__$1 = state_55711;
var statearr_55741_56907 = state_55711__$1;
(statearr_55741_56907[(2)] = inst_55707);

(statearr_55741_56907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (10))){
var inst_55659 = (state_55711[(8)]);
var inst_55688 = (state_55711[(2)]);
var inst_55689 = (inst_55659 + (1));
var inst_55659__$1 = inst_55689;
var state_55711__$1 = (function (){var statearr_55742 = state_55711;
(statearr_55742[(14)] = inst_55688);

(statearr_55742[(8)] = inst_55659__$1);

return statearr_55742;
})();
var statearr_55743_56908 = state_55711__$1;
(statearr_55743_56908[(2)] = null);

(statearr_55743_56908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55712 === (8))){
var inst_55693 = (state_55711[(2)]);
var state_55711__$1 = state_55711;
var statearr_55744_56909 = state_55711__$1;
(statearr_55744_56909[(2)] = inst_55693);

(statearr_55744_56909[(1)] = (5));


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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_55747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55747[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_55747[(1)] = (1));

return statearr_55747;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_55711){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_55711);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e55748){var ex__54003__auto__ = e55748;
var statearr_55749_56910 = state_55711;
(statearr_55749_56910[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_55711[(4)]))){
var statearr_55750_56911 = state_55711;
(statearr_55750_56911[(1)] = cljs.core.first((state_55711[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56912 = state_55711;
state_55711 = G__56912;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_55711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_55711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_55751 = f__54342__auto__();
(statearr_55751[(6)] = c__54341__auto___56891);

return statearr_55751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
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
var G__55760 = arguments.length;
switch (G__55760) {
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
var c__54341__auto___56915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_55811){
var state_val_55812 = (state_55811[(1)]);
if((state_val_55812 === (7))){
var inst_55783 = (state_55811[(7)]);
var inst_55781 = (state_55811[(8)]);
var inst_55781__$1 = (state_55811[(2)]);
var inst_55783__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55781__$1,(0),null);
var inst_55784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55781__$1,(1),null);
var inst_55785 = (inst_55783__$1 == null);
var state_55811__$1 = (function (){var statearr_55813 = state_55811;
(statearr_55813[(9)] = inst_55784);

(statearr_55813[(7)] = inst_55783__$1);

(statearr_55813[(8)] = inst_55781__$1);

return statearr_55813;
})();
if(cljs.core.truth_(inst_55785)){
var statearr_55814_56916 = state_55811__$1;
(statearr_55814_56916[(1)] = (8));

} else {
var statearr_55815_56917 = state_55811__$1;
(statearr_55815_56917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55812 === (1))){
var inst_55767 = cljs.core.vec(chs);
var inst_55768 = inst_55767;
var state_55811__$1 = (function (){var statearr_55816 = state_55811;
(statearr_55816[(10)] = inst_55768);

return statearr_55816;
})();
var statearr_55817_56918 = state_55811__$1;
(statearr_55817_56918[(2)] = null);

(statearr_55817_56918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55812 === (4))){
var inst_55768 = (state_55811[(10)]);
var state_55811__$1 = state_55811;
return cljs.core.async.ioc_alts_BANG_(state_55811__$1,(7),inst_55768);
} else {
if((state_val_55812 === (6))){
var inst_55807 = (state_55811[(2)]);
var state_55811__$1 = state_55811;
var statearr_55818_56919 = state_55811__$1;
(statearr_55818_56919[(2)] = inst_55807);

(statearr_55818_56919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55812 === (3))){
var inst_55809 = (state_55811[(2)]);
var state_55811__$1 = state_55811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55811__$1,inst_55809);
} else {
if((state_val_55812 === (2))){
var inst_55768 = (state_55811[(10)]);
var inst_55770 = cljs.core.count(inst_55768);
var inst_55771 = (inst_55770 > (0));
var state_55811__$1 = state_55811;
if(cljs.core.truth_(inst_55771)){
var statearr_55822_56920 = state_55811__$1;
(statearr_55822_56920[(1)] = (4));

} else {
var statearr_55823_56921 = state_55811__$1;
(statearr_55823_56921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55812 === (11))){
var inst_55768 = (state_55811[(10)]);
var inst_55800 = (state_55811[(2)]);
var tmp55819 = inst_55768;
var inst_55768__$1 = tmp55819;
var state_55811__$1 = (function (){var statearr_55824 = state_55811;
(statearr_55824[(10)] = inst_55768__$1);

(statearr_55824[(11)] = inst_55800);

return statearr_55824;
})();
var statearr_55825_56923 = state_55811__$1;
(statearr_55825_56923[(2)] = null);

(statearr_55825_56923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55812 === (9))){
var inst_55783 = (state_55811[(7)]);
var state_55811__$1 = state_55811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55811__$1,(11),out,inst_55783);
} else {
if((state_val_55812 === (5))){
var inst_55805 = cljs.core.async.close_BANG_(out);
var state_55811__$1 = state_55811;
var statearr_55827_56925 = state_55811__$1;
(statearr_55827_56925[(2)] = inst_55805);

(statearr_55827_56925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55812 === (10))){
var inst_55803 = (state_55811[(2)]);
var state_55811__$1 = state_55811;
var statearr_55828_56926 = state_55811__$1;
(statearr_55828_56926[(2)] = inst_55803);

(statearr_55828_56926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55812 === (8))){
var inst_55784 = (state_55811[(9)]);
var inst_55768 = (state_55811[(10)]);
var inst_55783 = (state_55811[(7)]);
var inst_55781 = (state_55811[(8)]);
var inst_55787 = (function (){var cs = inst_55768;
var vec__55777 = inst_55781;
var v = inst_55783;
var c = inst_55784;
return (function (p1__55753_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55753_SHARP_);
});
})();
var inst_55788 = cljs.core.filterv(inst_55787,inst_55768);
var inst_55768__$1 = inst_55788;
var state_55811__$1 = (function (){var statearr_55829 = state_55811;
(statearr_55829[(10)] = inst_55768__$1);

return statearr_55829;
})();
var statearr_55830_56928 = state_55811__$1;
(statearr_55830_56928[(2)] = null);

(statearr_55830_56928[(1)] = (2));


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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_55831 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55831[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_55831[(1)] = (1));

return statearr_55831;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_55811){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_55811);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e55832){var ex__54003__auto__ = e55832;
var statearr_55833_56929 = state_55811;
(statearr_55833_56929[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_55811[(4)]))){
var statearr_55834_56930 = state_55811;
(statearr_55834_56930[(1)] = cljs.core.first((state_55811[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56931 = state_55811;
state_55811 = G__56931;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_55811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_55811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_55837 = f__54342__auto__();
(statearr_55837[(6)] = c__54341__auto___56915);

return statearr_55837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
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
var G__55845 = arguments.length;
switch (G__55845) {
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
var c__54341__auto___56933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_55872){
var state_val_55873 = (state_55872[(1)]);
if((state_val_55873 === (7))){
var inst_55853 = (state_55872[(7)]);
var inst_55853__$1 = (state_55872[(2)]);
var inst_55854 = (inst_55853__$1 == null);
var inst_55855 = cljs.core.not(inst_55854);
var state_55872__$1 = (function (){var statearr_55875 = state_55872;
(statearr_55875[(7)] = inst_55853__$1);

return statearr_55875;
})();
if(inst_55855){
var statearr_55876_56934 = state_55872__$1;
(statearr_55876_56934[(1)] = (8));

} else {
var statearr_55877_56935 = state_55872__$1;
(statearr_55877_56935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (1))){
var inst_55848 = (0);
var state_55872__$1 = (function (){var statearr_55878 = state_55872;
(statearr_55878[(8)] = inst_55848);

return statearr_55878;
})();
var statearr_55879_56936 = state_55872__$1;
(statearr_55879_56936[(2)] = null);

(statearr_55879_56936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (4))){
var state_55872__$1 = state_55872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55872__$1,(7),ch);
} else {
if((state_val_55873 === (6))){
var inst_55866 = (state_55872[(2)]);
var state_55872__$1 = state_55872;
var statearr_55880_56937 = state_55872__$1;
(statearr_55880_56937[(2)] = inst_55866);

(statearr_55880_56937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (3))){
var inst_55868 = (state_55872[(2)]);
var inst_55869 = cljs.core.async.close_BANG_(out);
var state_55872__$1 = (function (){var statearr_55883 = state_55872;
(statearr_55883[(9)] = inst_55868);

return statearr_55883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55872__$1,inst_55869);
} else {
if((state_val_55873 === (2))){
var inst_55848 = (state_55872[(8)]);
var inst_55850 = (inst_55848 < n);
var state_55872__$1 = state_55872;
if(cljs.core.truth_(inst_55850)){
var statearr_55885_56938 = state_55872__$1;
(statearr_55885_56938[(1)] = (4));

} else {
var statearr_55886_56939 = state_55872__$1;
(statearr_55886_56939[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (11))){
var inst_55848 = (state_55872[(8)]);
var inst_55858 = (state_55872[(2)]);
var inst_55859 = (inst_55848 + (1));
var inst_55848__$1 = inst_55859;
var state_55872__$1 = (function (){var statearr_55887 = state_55872;
(statearr_55887[(10)] = inst_55858);

(statearr_55887[(8)] = inst_55848__$1);

return statearr_55887;
})();
var statearr_55888_56943 = state_55872__$1;
(statearr_55888_56943[(2)] = null);

(statearr_55888_56943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (9))){
var state_55872__$1 = state_55872;
var statearr_55889_56944 = state_55872__$1;
(statearr_55889_56944[(2)] = null);

(statearr_55889_56944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (5))){
var state_55872__$1 = state_55872;
var statearr_55896_56945 = state_55872__$1;
(statearr_55896_56945[(2)] = null);

(statearr_55896_56945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (10))){
var inst_55863 = (state_55872[(2)]);
var state_55872__$1 = state_55872;
var statearr_55897_56946 = state_55872__$1;
(statearr_55897_56946[(2)] = inst_55863);

(statearr_55897_56946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (8))){
var inst_55853 = (state_55872[(7)]);
var state_55872__$1 = state_55872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55872__$1,(11),out,inst_55853);
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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_55898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55898[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_55898[(1)] = (1));

return statearr_55898;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_55872){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_55872);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e55899){var ex__54003__auto__ = e55899;
var statearr_55900_56947 = state_55872;
(statearr_55900_56947[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_55872[(4)]))){
var statearr_55901_56948 = state_55872;
(statearr_55901_56948[(1)] = cljs.core.first((state_55872[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56949 = state_55872;
state_55872 = G__56949;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_55872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_55872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_55902 = f__54342__auto__();
(statearr_55902[(6)] = c__54341__auto___56933);

return statearr_55902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55904 = (function (f,ch,meta55905){
this.f = f;
this.ch = ch;
this.meta55905 = meta55905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55906,meta55905__$1){
var self__ = this;
var _55906__$1 = this;
return (new cljs.core.async.t_cljs$core$async55904(self__.f,self__.ch,meta55905__$1));
}));

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55906){
var self__ = this;
var _55906__$1 = this;
return self__.meta55905;
}));

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55912 = (function (f,ch,meta55905,_,fn1,meta55913){
this.f = f;
this.ch = ch;
this.meta55905 = meta55905;
this._ = _;
this.fn1 = fn1;
this.meta55913 = meta55913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55914,meta55913__$1){
var self__ = this;
var _55914__$1 = this;
return (new cljs.core.async.t_cljs$core$async55912(self__.f,self__.ch,self__.meta55905,self__._,self__.fn1,meta55913__$1));
}));

(cljs.core.async.t_cljs$core$async55912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55914){
var self__ = this;
var _55914__$1 = this;
return self__.meta55913;
}));

(cljs.core.async.t_cljs$core$async55912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55903_SHARP_){
var G__55915 = (((p1__55903_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55903_SHARP_) : self__.f.call(null,p1__55903_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55915) : f1.call(null,G__55915));
});
}));

(cljs.core.async.t_cljs$core$async55912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55905","meta55905",-1767969225,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55904","cljs.core.async/t_cljs$core$async55904",1888051028,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55913","meta55913",-505790893,null)], null);
}));

(cljs.core.async.t_cljs$core$async55912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55912");

(cljs.core.async.t_cljs$core$async55912.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55912.
 */
cljs.core.async.__GT_t_cljs$core$async55912 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55912(f__$1,ch__$1,meta55905__$1,___$2,fn1__$1,meta55913){
return (new cljs.core.async.t_cljs$core$async55912(f__$1,ch__$1,meta55905__$1,___$2,fn1__$1,meta55913));
});

}

return (new cljs.core.async.t_cljs$core$async55912(self__.f,self__.ch,self__.meta55905,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55922 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55922) : self__.f.call(null,G__55922));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55905","meta55905",-1767969225,null)], null);
}));

(cljs.core.async.t_cljs$core$async55904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55904");

(cljs.core.async.t_cljs$core$async55904.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55904.
 */
cljs.core.async.__GT_t_cljs$core$async55904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55904(f__$1,ch__$1,meta55905){
return (new cljs.core.async.t_cljs$core$async55904(f__$1,ch__$1,meta55905));
});

}

return (new cljs.core.async.t_cljs$core$async55904(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55923 = (function (f,ch,meta55924){
this.f = f;
this.ch = ch;
this.meta55924 = meta55924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55925,meta55924__$1){
var self__ = this;
var _55925__$1 = this;
return (new cljs.core.async.t_cljs$core$async55923(self__.f,self__.ch,meta55924__$1));
}));

(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55925){
var self__ = this;
var _55925__$1 = this;
return self__.meta55924;
}));

(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55924","meta55924",-1691518510,null)], null);
}));

(cljs.core.async.t_cljs$core$async55923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55923");

(cljs.core.async.t_cljs$core$async55923.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55923.
 */
cljs.core.async.__GT_t_cljs$core$async55923 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55923(f__$1,ch__$1,meta55924){
return (new cljs.core.async.t_cljs$core$async55923(f__$1,ch__$1,meta55924));
});

}

return (new cljs.core.async.t_cljs$core$async55923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55932 = (function (p,ch,meta55933){
this.p = p;
this.ch = ch;
this.meta55933 = meta55933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55934,meta55933__$1){
var self__ = this;
var _55934__$1 = this;
return (new cljs.core.async.t_cljs$core$async55932(self__.p,self__.ch,meta55933__$1));
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55934){
var self__ = this;
var _55934__$1 = this;
return self__.meta55933;
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55933","meta55933",-574734888,null)], null);
}));

(cljs.core.async.t_cljs$core$async55932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55932");

(cljs.core.async.t_cljs$core$async55932.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55932.
 */
cljs.core.async.__GT_t_cljs$core$async55932 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55932(p__$1,ch__$1,meta55933){
return (new cljs.core.async.t_cljs$core$async55932(p__$1,ch__$1,meta55933));
});

}

return (new cljs.core.async.t_cljs$core$async55932(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55948 = arguments.length;
switch (G__55948) {
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
var c__54341__auto___56953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_55969){
var state_val_55970 = (state_55969[(1)]);
if((state_val_55970 === (7))){
var inst_55965 = (state_55969[(2)]);
var state_55969__$1 = state_55969;
var statearr_55973_56954 = state_55969__$1;
(statearr_55973_56954[(2)] = inst_55965);

(statearr_55973_56954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (1))){
var state_55969__$1 = state_55969;
var statearr_55974_56955 = state_55969__$1;
(statearr_55974_56955[(2)] = null);

(statearr_55974_56955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (4))){
var inst_55951 = (state_55969[(7)]);
var inst_55951__$1 = (state_55969[(2)]);
var inst_55952 = (inst_55951__$1 == null);
var state_55969__$1 = (function (){var statearr_55975 = state_55969;
(statearr_55975[(7)] = inst_55951__$1);

return statearr_55975;
})();
if(cljs.core.truth_(inst_55952)){
var statearr_55976_56956 = state_55969__$1;
(statearr_55976_56956[(1)] = (5));

} else {
var statearr_55977_56957 = state_55969__$1;
(statearr_55977_56957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (6))){
var inst_55951 = (state_55969[(7)]);
var inst_55956 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55951) : p.call(null,inst_55951));
var state_55969__$1 = state_55969;
if(cljs.core.truth_(inst_55956)){
var statearr_55978_56959 = state_55969__$1;
(statearr_55978_56959[(1)] = (8));

} else {
var statearr_55979_56960 = state_55969__$1;
(statearr_55979_56960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (3))){
var inst_55967 = (state_55969[(2)]);
var state_55969__$1 = state_55969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55969__$1,inst_55967);
} else {
if((state_val_55970 === (2))){
var state_55969__$1 = state_55969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55969__$1,(4),ch);
} else {
if((state_val_55970 === (11))){
var inst_55959 = (state_55969[(2)]);
var state_55969__$1 = state_55969;
var statearr_55984_56961 = state_55969__$1;
(statearr_55984_56961[(2)] = inst_55959);

(statearr_55984_56961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (9))){
var state_55969__$1 = state_55969;
var statearr_56004_56962 = state_55969__$1;
(statearr_56004_56962[(2)] = null);

(statearr_56004_56962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (5))){
var inst_55954 = cljs.core.async.close_BANG_(out);
var state_55969__$1 = state_55969;
var statearr_56009_56964 = state_55969__$1;
(statearr_56009_56964[(2)] = inst_55954);

(statearr_56009_56964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (10))){
var inst_55962 = (state_55969[(2)]);
var state_55969__$1 = (function (){var statearr_56010 = state_55969;
(statearr_56010[(8)] = inst_55962);

return statearr_56010;
})();
var statearr_56011_56965 = state_55969__$1;
(statearr_56011_56965[(2)] = null);

(statearr_56011_56965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (8))){
var inst_55951 = (state_55969[(7)]);
var state_55969__$1 = state_55969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55969__$1,(11),out,inst_55951);
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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_56013 = [null,null,null,null,null,null,null,null,null];
(statearr_56013[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_56013[(1)] = (1));

return statearr_56013;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_55969){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_55969);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e56017){var ex__54003__auto__ = e56017;
var statearr_56021_56966 = state_55969;
(statearr_56021_56966[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_55969[(4)]))){
var statearr_56024_56967 = state_55969;
(statearr_56024_56967[(1)] = cljs.core.first((state_55969[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56968 = state_55969;
state_55969 = G__56968;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_55969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_55969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_56032 = f__54342__auto__();
(statearr_56032[(6)] = c__54341__auto___56953);

return statearr_56032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__56036 = arguments.length;
switch (G__56036) {
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
var c__54341__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_56100){
var state_val_56101 = (state_56100[(1)]);
if((state_val_56101 === (7))){
var inst_56096 = (state_56100[(2)]);
var state_56100__$1 = state_56100;
var statearr_56104_56970 = state_56100__$1;
(statearr_56104_56970[(2)] = inst_56096);

(statearr_56104_56970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (20))){
var inst_56066 = (state_56100[(7)]);
var inst_56077 = (state_56100[(2)]);
var inst_56078 = cljs.core.next(inst_56066);
var inst_56052 = inst_56078;
var inst_56053 = null;
var inst_56054 = (0);
var inst_56055 = (0);
var state_56100__$1 = (function (){var statearr_56105 = state_56100;
(statearr_56105[(8)] = inst_56052);

(statearr_56105[(9)] = inst_56054);

(statearr_56105[(10)] = inst_56055);

(statearr_56105[(11)] = inst_56077);

(statearr_56105[(12)] = inst_56053);

return statearr_56105;
})();
var statearr_56106_56971 = state_56100__$1;
(statearr_56106_56971[(2)] = null);

(statearr_56106_56971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (1))){
var state_56100__$1 = state_56100;
var statearr_56107_56972 = state_56100__$1;
(statearr_56107_56972[(2)] = null);

(statearr_56107_56972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (4))){
var inst_56041 = (state_56100[(13)]);
var inst_56041__$1 = (state_56100[(2)]);
var inst_56042 = (inst_56041__$1 == null);
var state_56100__$1 = (function (){var statearr_56108 = state_56100;
(statearr_56108[(13)] = inst_56041__$1);

return statearr_56108;
})();
if(cljs.core.truth_(inst_56042)){
var statearr_56110_56973 = state_56100__$1;
(statearr_56110_56973[(1)] = (5));

} else {
var statearr_56111_56974 = state_56100__$1;
(statearr_56111_56974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (15))){
var state_56100__$1 = state_56100;
var statearr_56116_56975 = state_56100__$1;
(statearr_56116_56975[(2)] = null);

(statearr_56116_56975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (21))){
var state_56100__$1 = state_56100;
var statearr_56117_56976 = state_56100__$1;
(statearr_56117_56976[(2)] = null);

(statearr_56117_56976[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (13))){
var inst_56052 = (state_56100[(8)]);
var inst_56054 = (state_56100[(9)]);
var inst_56055 = (state_56100[(10)]);
var inst_56053 = (state_56100[(12)]);
var inst_56062 = (state_56100[(2)]);
var inst_56063 = (inst_56055 + (1));
var tmp56113 = inst_56052;
var tmp56114 = inst_56054;
var tmp56115 = inst_56053;
var inst_56052__$1 = tmp56113;
var inst_56053__$1 = tmp56115;
var inst_56054__$1 = tmp56114;
var inst_56055__$1 = inst_56063;
var state_56100__$1 = (function (){var statearr_56118 = state_56100;
(statearr_56118[(8)] = inst_56052__$1);

(statearr_56118[(9)] = inst_56054__$1);

(statearr_56118[(14)] = inst_56062);

(statearr_56118[(10)] = inst_56055__$1);

(statearr_56118[(12)] = inst_56053__$1);

return statearr_56118;
})();
var statearr_56119_56977 = state_56100__$1;
(statearr_56119_56977[(2)] = null);

(statearr_56119_56977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (22))){
var state_56100__$1 = state_56100;
var statearr_56121_56978 = state_56100__$1;
(statearr_56121_56978[(2)] = null);

(statearr_56121_56978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (6))){
var inst_56041 = (state_56100[(13)]);
var inst_56050 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56041) : f.call(null,inst_56041));
var inst_56051 = cljs.core.seq(inst_56050);
var inst_56052 = inst_56051;
var inst_56053 = null;
var inst_56054 = (0);
var inst_56055 = (0);
var state_56100__$1 = (function (){var statearr_56123 = state_56100;
(statearr_56123[(8)] = inst_56052);

(statearr_56123[(9)] = inst_56054);

(statearr_56123[(10)] = inst_56055);

(statearr_56123[(12)] = inst_56053);

return statearr_56123;
})();
var statearr_56124_56979 = state_56100__$1;
(statearr_56124_56979[(2)] = null);

(statearr_56124_56979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (17))){
var inst_56066 = (state_56100[(7)]);
var inst_56070 = cljs.core.chunk_first(inst_56066);
var inst_56071 = cljs.core.chunk_rest(inst_56066);
var inst_56072 = cljs.core.count(inst_56070);
var inst_56052 = inst_56071;
var inst_56053 = inst_56070;
var inst_56054 = inst_56072;
var inst_56055 = (0);
var state_56100__$1 = (function (){var statearr_56125 = state_56100;
(statearr_56125[(8)] = inst_56052);

(statearr_56125[(9)] = inst_56054);

(statearr_56125[(10)] = inst_56055);

(statearr_56125[(12)] = inst_56053);

return statearr_56125;
})();
var statearr_56126_56980 = state_56100__$1;
(statearr_56126_56980[(2)] = null);

(statearr_56126_56980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (3))){
var inst_56098 = (state_56100[(2)]);
var state_56100__$1 = state_56100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56100__$1,inst_56098);
} else {
if((state_val_56101 === (12))){
var inst_56086 = (state_56100[(2)]);
var state_56100__$1 = state_56100;
var statearr_56127_56981 = state_56100__$1;
(statearr_56127_56981[(2)] = inst_56086);

(statearr_56127_56981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (2))){
var state_56100__$1 = state_56100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56100__$1,(4),in$);
} else {
if((state_val_56101 === (23))){
var inst_56094 = (state_56100[(2)]);
var state_56100__$1 = state_56100;
var statearr_56128_56983 = state_56100__$1;
(statearr_56128_56983[(2)] = inst_56094);

(statearr_56128_56983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (19))){
var inst_56081 = (state_56100[(2)]);
var state_56100__$1 = state_56100;
var statearr_56130_56985 = state_56100__$1;
(statearr_56130_56985[(2)] = inst_56081);

(statearr_56130_56985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (11))){
var inst_56052 = (state_56100[(8)]);
var inst_56066 = (state_56100[(7)]);
var inst_56066__$1 = cljs.core.seq(inst_56052);
var state_56100__$1 = (function (){var statearr_56132 = state_56100;
(statearr_56132[(7)] = inst_56066__$1);

return statearr_56132;
})();
if(inst_56066__$1){
var statearr_56133_56986 = state_56100__$1;
(statearr_56133_56986[(1)] = (14));

} else {
var statearr_56134_56987 = state_56100__$1;
(statearr_56134_56987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (9))){
var inst_56088 = (state_56100[(2)]);
var inst_56089 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_56100__$1 = (function (){var statearr_56136 = state_56100;
(statearr_56136[(15)] = inst_56088);

return statearr_56136;
})();
if(cljs.core.truth_(inst_56089)){
var statearr_56138_56988 = state_56100__$1;
(statearr_56138_56988[(1)] = (21));

} else {
var statearr_56139_56989 = state_56100__$1;
(statearr_56139_56989[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (5))){
var inst_56044 = cljs.core.async.close_BANG_(out);
var state_56100__$1 = state_56100;
var statearr_56140_56990 = state_56100__$1;
(statearr_56140_56990[(2)] = inst_56044);

(statearr_56140_56990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (14))){
var inst_56066 = (state_56100[(7)]);
var inst_56068 = cljs.core.chunked_seq_QMARK_(inst_56066);
var state_56100__$1 = state_56100;
if(inst_56068){
var statearr_56142_56991 = state_56100__$1;
(statearr_56142_56991[(1)] = (17));

} else {
var statearr_56143_56992 = state_56100__$1;
(statearr_56143_56992[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (16))){
var inst_56084 = (state_56100[(2)]);
var state_56100__$1 = state_56100;
var statearr_56144_56994 = state_56100__$1;
(statearr_56144_56994[(2)] = inst_56084);

(statearr_56144_56994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56101 === (10))){
var inst_56055 = (state_56100[(10)]);
var inst_56053 = (state_56100[(12)]);
var inst_56060 = cljs.core._nth(inst_56053,inst_56055);
var state_56100__$1 = state_56100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56100__$1,(13),out,inst_56060);
} else {
if((state_val_56101 === (18))){
var inst_56066 = (state_56100[(7)]);
var inst_56075 = cljs.core.first(inst_56066);
var state_56100__$1 = state_56100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56100__$1,(20),out,inst_56075);
} else {
if((state_val_56101 === (8))){
var inst_56054 = (state_56100[(9)]);
var inst_56055 = (state_56100[(10)]);
var inst_56057 = (inst_56055 < inst_56054);
var inst_56058 = inst_56057;
var state_56100__$1 = state_56100;
if(cljs.core.truth_(inst_56058)){
var statearr_56149_56995 = state_56100__$1;
(statearr_56149_56995[(1)] = (10));

} else {
var statearr_56150_56996 = state_56100__$1;
(statearr_56150_56996[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54000__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54000__auto____0 = (function (){
var statearr_56155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56155[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54000__auto__);

(statearr_56155[(1)] = (1));

return statearr_56155;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54000__auto____1 = (function (state_56100){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_56100);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e56156){var ex__54003__auto__ = e56156;
var statearr_56157_56998 = state_56100;
(statearr_56157_56998[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_56100[(4)]))){
var statearr_56159_56999 = state_56100;
(statearr_56159_56999[(1)] = cljs.core.first((state_56100[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57000 = state_56100;
state_56100 = G__57000;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54000__auto__ = function(state_56100){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54000__auto____1.call(this,state_56100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54000__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54000__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_56162 = f__54342__auto__();
(statearr_56162[(6)] = c__54341__auto__);

return statearr_56162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));

return c__54341__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__56169 = arguments.length;
switch (G__56169) {
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
var G__56175 = arguments.length;
switch (G__56175) {
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
var G__56183 = arguments.length;
switch (G__56183) {
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
var c__54341__auto___57004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_56209){
var state_val_56210 = (state_56209[(1)]);
if((state_val_56210 === (7))){
var inst_56204 = (state_56209[(2)]);
var state_56209__$1 = state_56209;
var statearr_56212_57005 = state_56209__$1;
(statearr_56212_57005[(2)] = inst_56204);

(statearr_56212_57005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (1))){
var inst_56186 = null;
var state_56209__$1 = (function (){var statearr_56213 = state_56209;
(statearr_56213[(7)] = inst_56186);

return statearr_56213;
})();
var statearr_56214_57006 = state_56209__$1;
(statearr_56214_57006[(2)] = null);

(statearr_56214_57006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (4))){
var inst_56189 = (state_56209[(8)]);
var inst_56189__$1 = (state_56209[(2)]);
var inst_56190 = (inst_56189__$1 == null);
var inst_56191 = cljs.core.not(inst_56190);
var state_56209__$1 = (function (){var statearr_56216 = state_56209;
(statearr_56216[(8)] = inst_56189__$1);

return statearr_56216;
})();
if(inst_56191){
var statearr_56218_57007 = state_56209__$1;
(statearr_56218_57007[(1)] = (5));

} else {
var statearr_56219_57008 = state_56209__$1;
(statearr_56219_57008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (6))){
var state_56209__$1 = state_56209;
var statearr_56220_57009 = state_56209__$1;
(statearr_56220_57009[(2)] = null);

(statearr_56220_57009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (3))){
var inst_56206 = (state_56209[(2)]);
var inst_56207 = cljs.core.async.close_BANG_(out);
var state_56209__$1 = (function (){var statearr_56221 = state_56209;
(statearr_56221[(9)] = inst_56206);

return statearr_56221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56209__$1,inst_56207);
} else {
if((state_val_56210 === (2))){
var state_56209__$1 = state_56209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56209__$1,(4),ch);
} else {
if((state_val_56210 === (11))){
var inst_56189 = (state_56209[(8)]);
var inst_56198 = (state_56209[(2)]);
var inst_56186 = inst_56189;
var state_56209__$1 = (function (){var statearr_56223 = state_56209;
(statearr_56223[(10)] = inst_56198);

(statearr_56223[(7)] = inst_56186);

return statearr_56223;
})();
var statearr_56224_57010 = state_56209__$1;
(statearr_56224_57010[(2)] = null);

(statearr_56224_57010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (9))){
var inst_56189 = (state_56209[(8)]);
var state_56209__$1 = state_56209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56209__$1,(11),out,inst_56189);
} else {
if((state_val_56210 === (5))){
var inst_56186 = (state_56209[(7)]);
var inst_56189 = (state_56209[(8)]);
var inst_56193 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56189,inst_56186);
var state_56209__$1 = state_56209;
if(inst_56193){
var statearr_56226_57011 = state_56209__$1;
(statearr_56226_57011[(1)] = (8));

} else {
var statearr_56227_57012 = state_56209__$1;
(statearr_56227_57012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (10))){
var inst_56201 = (state_56209[(2)]);
var state_56209__$1 = state_56209;
var statearr_56229_57013 = state_56209__$1;
(statearr_56229_57013[(2)] = inst_56201);

(statearr_56229_57013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56210 === (8))){
var inst_56186 = (state_56209[(7)]);
var tmp56225 = inst_56186;
var inst_56186__$1 = tmp56225;
var state_56209__$1 = (function (){var statearr_56230 = state_56209;
(statearr_56230[(7)] = inst_56186__$1);

return statearr_56230;
})();
var statearr_56231_57014 = state_56209__$1;
(statearr_56231_57014[(2)] = null);

(statearr_56231_57014[(1)] = (2));


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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_56232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56232[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_56232[(1)] = (1));

return statearr_56232;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_56209){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_56209);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e56237){var ex__54003__auto__ = e56237;
var statearr_56238_57015 = state_56209;
(statearr_56238_57015[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_56209[(4)]))){
var statearr_56239_57016 = state_56209;
(statearr_56239_57016[(1)] = cljs.core.first((state_56209[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57017 = state_56209;
state_56209 = G__57017;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_56209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_56209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_56245 = f__54342__auto__();
(statearr_56245[(6)] = c__54341__auto___57004);

return statearr_56245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56247 = arguments.length;
switch (G__56247) {
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
var c__54341__auto___57019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_56287){
var state_val_56288 = (state_56287[(1)]);
if((state_val_56288 === (7))){
var inst_56281 = (state_56287[(2)]);
var state_56287__$1 = state_56287;
var statearr_56290_57020 = state_56287__$1;
(statearr_56290_57020[(2)] = inst_56281);

(statearr_56290_57020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (1))){
var inst_56248 = (new Array(n));
var inst_56249 = inst_56248;
var inst_56250 = (0);
var state_56287__$1 = (function (){var statearr_56291 = state_56287;
(statearr_56291[(7)] = inst_56250);

(statearr_56291[(8)] = inst_56249);

return statearr_56291;
})();
var statearr_56292_57021 = state_56287__$1;
(statearr_56292_57021[(2)] = null);

(statearr_56292_57021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (4))){
var inst_56253 = (state_56287[(9)]);
var inst_56253__$1 = (state_56287[(2)]);
var inst_56254 = (inst_56253__$1 == null);
var inst_56255 = cljs.core.not(inst_56254);
var state_56287__$1 = (function (){var statearr_56293 = state_56287;
(statearr_56293[(9)] = inst_56253__$1);

return statearr_56293;
})();
if(inst_56255){
var statearr_56294_57022 = state_56287__$1;
(statearr_56294_57022[(1)] = (5));

} else {
var statearr_56295_57023 = state_56287__$1;
(statearr_56295_57023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (15))){
var inst_56275 = (state_56287[(2)]);
var state_56287__$1 = state_56287;
var statearr_56296_57024 = state_56287__$1;
(statearr_56296_57024[(2)] = inst_56275);

(statearr_56296_57024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (13))){
var state_56287__$1 = state_56287;
var statearr_56297_57025 = state_56287__$1;
(statearr_56297_57025[(2)] = null);

(statearr_56297_57025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (6))){
var inst_56250 = (state_56287[(7)]);
var inst_56271 = (inst_56250 > (0));
var state_56287__$1 = state_56287;
if(cljs.core.truth_(inst_56271)){
var statearr_56299_57026 = state_56287__$1;
(statearr_56299_57026[(1)] = (12));

} else {
var statearr_56300_57027 = state_56287__$1;
(statearr_56300_57027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (3))){
var inst_56283 = (state_56287[(2)]);
var state_56287__$1 = state_56287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56287__$1,inst_56283);
} else {
if((state_val_56288 === (12))){
var inst_56249 = (state_56287[(8)]);
var inst_56273 = cljs.core.vec(inst_56249);
var state_56287__$1 = state_56287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56287__$1,(15),out,inst_56273);
} else {
if((state_val_56288 === (2))){
var state_56287__$1 = state_56287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56287__$1,(4),ch);
} else {
if((state_val_56288 === (11))){
var inst_56265 = (state_56287[(2)]);
var inst_56266 = (new Array(n));
var inst_56249 = inst_56266;
var inst_56250 = (0);
var state_56287__$1 = (function (){var statearr_56301 = state_56287;
(statearr_56301[(7)] = inst_56250);

(statearr_56301[(10)] = inst_56265);

(statearr_56301[(8)] = inst_56249);

return statearr_56301;
})();
var statearr_56302_57028 = state_56287__$1;
(statearr_56302_57028[(2)] = null);

(statearr_56302_57028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (9))){
var inst_56249 = (state_56287[(8)]);
var inst_56263 = cljs.core.vec(inst_56249);
var state_56287__$1 = state_56287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56287__$1,(11),out,inst_56263);
} else {
if((state_val_56288 === (5))){
var inst_56258 = (state_56287[(11)]);
var inst_56250 = (state_56287[(7)]);
var inst_56253 = (state_56287[(9)]);
var inst_56249 = (state_56287[(8)]);
var inst_56257 = (inst_56249[inst_56250] = inst_56253);
var inst_56258__$1 = (inst_56250 + (1));
var inst_56259 = (inst_56258__$1 < n);
var state_56287__$1 = (function (){var statearr_56303 = state_56287;
(statearr_56303[(11)] = inst_56258__$1);

(statearr_56303[(12)] = inst_56257);

return statearr_56303;
})();
if(cljs.core.truth_(inst_56259)){
var statearr_56306_57029 = state_56287__$1;
(statearr_56306_57029[(1)] = (8));

} else {
var statearr_56307_57030 = state_56287__$1;
(statearr_56307_57030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (14))){
var inst_56278 = (state_56287[(2)]);
var inst_56279 = cljs.core.async.close_BANG_(out);
var state_56287__$1 = (function (){var statearr_56315 = state_56287;
(statearr_56315[(13)] = inst_56278);

return statearr_56315;
})();
var statearr_56316_57031 = state_56287__$1;
(statearr_56316_57031[(2)] = inst_56279);

(statearr_56316_57031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (10))){
var inst_56269 = (state_56287[(2)]);
var state_56287__$1 = state_56287;
var statearr_56317_57037 = state_56287__$1;
(statearr_56317_57037[(2)] = inst_56269);

(statearr_56317_57037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56288 === (8))){
var inst_56258 = (state_56287[(11)]);
var inst_56249 = (state_56287[(8)]);
var tmp56314 = inst_56249;
var inst_56249__$1 = tmp56314;
var inst_56250 = inst_56258;
var state_56287__$1 = (function (){var statearr_56320 = state_56287;
(statearr_56320[(7)] = inst_56250);

(statearr_56320[(8)] = inst_56249__$1);

return statearr_56320;
})();
var statearr_56322_57052 = state_56287__$1;
(statearr_56322_57052[(2)] = null);

(statearr_56322_57052[(1)] = (2));


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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_56323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56323[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_56323[(1)] = (1));

return statearr_56323;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_56287){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_56287);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e56324){var ex__54003__auto__ = e56324;
var statearr_56325_57062 = state_56287;
(statearr_56325_57062[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_56287[(4)]))){
var statearr_56326_57063 = state_56287;
(statearr_56326_57063[(1)] = cljs.core.first((state_56287[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57064 = state_56287;
state_56287 = G__57064;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_56287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_56287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_56327 = f__54342__auto__();
(statearr_56327[(6)] = c__54341__auto___57019);

return statearr_56327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56329 = arguments.length;
switch (G__56329) {
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
var c__54341__auto___57067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54342__auto__ = (function (){var switch__53999__auto__ = (function (state_56396){
var state_val_56397 = (state_56396[(1)]);
if((state_val_56397 === (7))){
var inst_56392 = (state_56396[(2)]);
var state_56396__$1 = state_56396;
var statearr_56403_57068 = state_56396__$1;
(statearr_56403_57068[(2)] = inst_56392);

(statearr_56403_57068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (1))){
var inst_56337 = [];
var inst_56338 = inst_56337;
var inst_56339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56396__$1 = (function (){var statearr_56404 = state_56396;
(statearr_56404[(7)] = inst_56338);

(statearr_56404[(8)] = inst_56339);

return statearr_56404;
})();
var statearr_56405_57070 = state_56396__$1;
(statearr_56405_57070[(2)] = null);

(statearr_56405_57070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (4))){
var inst_56348 = (state_56396[(9)]);
var inst_56348__$1 = (state_56396[(2)]);
var inst_56349 = (inst_56348__$1 == null);
var inst_56350 = cljs.core.not(inst_56349);
var state_56396__$1 = (function (){var statearr_56407 = state_56396;
(statearr_56407[(9)] = inst_56348__$1);

return statearr_56407;
})();
if(inst_56350){
var statearr_56408_57074 = state_56396__$1;
(statearr_56408_57074[(1)] = (5));

} else {
var statearr_56409_57075 = state_56396__$1;
(statearr_56409_57075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (15))){
var inst_56338 = (state_56396[(7)]);
var inst_56384 = cljs.core.vec(inst_56338);
var state_56396__$1 = state_56396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56396__$1,(18),out,inst_56384);
} else {
if((state_val_56397 === (13))){
var inst_56377 = (state_56396[(2)]);
var state_56396__$1 = state_56396;
var statearr_56410_57078 = state_56396__$1;
(statearr_56410_57078[(2)] = inst_56377);

(statearr_56410_57078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (6))){
var inst_56338 = (state_56396[(7)]);
var inst_56379 = inst_56338.length;
var inst_56380 = (inst_56379 > (0));
var state_56396__$1 = state_56396;
if(cljs.core.truth_(inst_56380)){
var statearr_56411_57081 = state_56396__$1;
(statearr_56411_57081[(1)] = (15));

} else {
var statearr_56412_57082 = state_56396__$1;
(statearr_56412_57082[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (17))){
var inst_56389 = (state_56396[(2)]);
var inst_56390 = cljs.core.async.close_BANG_(out);
var state_56396__$1 = (function (){var statearr_56413 = state_56396;
(statearr_56413[(10)] = inst_56389);

return statearr_56413;
})();
var statearr_56414_57084 = state_56396__$1;
(statearr_56414_57084[(2)] = inst_56390);

(statearr_56414_57084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (3))){
var inst_56394 = (state_56396[(2)]);
var state_56396__$1 = state_56396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56396__$1,inst_56394);
} else {
if((state_val_56397 === (12))){
var inst_56338 = (state_56396[(7)]);
var inst_56369 = cljs.core.vec(inst_56338);
var state_56396__$1 = state_56396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56396__$1,(14),out,inst_56369);
} else {
if((state_val_56397 === (2))){
var state_56396__$1 = state_56396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56396__$1,(4),ch);
} else {
if((state_val_56397 === (11))){
var inst_56348 = (state_56396[(9)]);
var inst_56352 = (state_56396[(11)]);
var inst_56338 = (state_56396[(7)]);
var inst_56365 = inst_56338.push(inst_56348);
var tmp56415 = inst_56338;
var inst_56338__$1 = tmp56415;
var inst_56339 = inst_56352;
var state_56396__$1 = (function (){var statearr_56418 = state_56396;
(statearr_56418[(7)] = inst_56338__$1);

(statearr_56418[(8)] = inst_56339);

(statearr_56418[(12)] = inst_56365);

return statearr_56418;
})();
var statearr_56419_57092 = state_56396__$1;
(statearr_56419_57092[(2)] = null);

(statearr_56419_57092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (9))){
var inst_56339 = (state_56396[(8)]);
var inst_56361 = cljs.core.keyword_identical_QMARK_(inst_56339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_56396__$1 = state_56396;
var statearr_56420_57099 = state_56396__$1;
(statearr_56420_57099[(2)] = inst_56361);

(statearr_56420_57099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (5))){
var inst_56348 = (state_56396[(9)]);
var inst_56352 = (state_56396[(11)]);
var inst_56356 = (state_56396[(13)]);
var inst_56339 = (state_56396[(8)]);
var inst_56352__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56348) : f.call(null,inst_56348));
var inst_56356__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56352__$1,inst_56339);
var state_56396__$1 = (function (){var statearr_56421 = state_56396;
(statearr_56421[(11)] = inst_56352__$1);

(statearr_56421[(13)] = inst_56356__$1);

return statearr_56421;
})();
if(inst_56356__$1){
var statearr_56422_57100 = state_56396__$1;
(statearr_56422_57100[(1)] = (8));

} else {
var statearr_56423_57101 = state_56396__$1;
(statearr_56423_57101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (14))){
var inst_56348 = (state_56396[(9)]);
var inst_56352 = (state_56396[(11)]);
var inst_56371 = (state_56396[(2)]);
var inst_56373 = [];
var inst_56374 = inst_56373.push(inst_56348);
var inst_56338 = inst_56373;
var inst_56339 = inst_56352;
var state_56396__$1 = (function (){var statearr_56424 = state_56396;
(statearr_56424[(14)] = inst_56371);

(statearr_56424[(15)] = inst_56374);

(statearr_56424[(7)] = inst_56338);

(statearr_56424[(8)] = inst_56339);

return statearr_56424;
})();
var statearr_56425_57104 = state_56396__$1;
(statearr_56425_57104[(2)] = null);

(statearr_56425_57104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (16))){
var state_56396__$1 = state_56396;
var statearr_56426_57106 = state_56396__$1;
(statearr_56426_57106[(2)] = null);

(statearr_56426_57106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (10))){
var inst_56363 = (state_56396[(2)]);
var state_56396__$1 = state_56396;
if(cljs.core.truth_(inst_56363)){
var statearr_56428_57108 = state_56396__$1;
(statearr_56428_57108[(1)] = (11));

} else {
var statearr_56429_57109 = state_56396__$1;
(statearr_56429_57109[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (18))){
var inst_56386 = (state_56396[(2)]);
var state_56396__$1 = state_56396;
var statearr_56430_57110 = state_56396__$1;
(statearr_56430_57110[(2)] = inst_56386);

(statearr_56430_57110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56397 === (8))){
var inst_56356 = (state_56396[(13)]);
var state_56396__$1 = state_56396;
var statearr_56432_57111 = state_56396__$1;
(statearr_56432_57111[(2)] = inst_56356);

(statearr_56432_57111[(1)] = (10));


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
var cljs$core$async$state_machine__54000__auto__ = null;
var cljs$core$async$state_machine__54000__auto____0 = (function (){
var statearr_56434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56434[(0)] = cljs$core$async$state_machine__54000__auto__);

(statearr_56434[(1)] = (1));

return statearr_56434;
});
var cljs$core$async$state_machine__54000__auto____1 = (function (state_56396){
while(true){
var ret_value__54001__auto__ = (function (){try{while(true){
var result__54002__auto__ = switch__53999__auto__(state_56396);
if(cljs.core.keyword_identical_QMARK_(result__54002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54002__auto__;
}
break;
}
}catch (e56435){var ex__54003__auto__ = e56435;
var statearr_56436_57113 = state_56396;
(statearr_56436_57113[(2)] = ex__54003__auto__);


if(cljs.core.seq((state_56396[(4)]))){
var statearr_56437_57114 = state_56396;
(statearr_56437_57114[(1)] = cljs.core.first((state_56396[(4)])));

} else {
throw ex__54003__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57115 = state_56396;
state_56396 = G__57115;
continue;
} else {
return ret_value__54001__auto__;
}
break;
}
});
cljs$core$async$state_machine__54000__auto__ = function(state_56396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54000__auto____1.call(this,state_56396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54000__auto____0;
cljs$core$async$state_machine__54000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54000__auto____1;
return cljs$core$async$state_machine__54000__auto__;
})()
})();
var state__54343__auto__ = (function (){var statearr_56438 = f__54342__auto__();
(statearr_56438[(6)] = c__54341__auto___57067);

return statearr_56438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54343__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
