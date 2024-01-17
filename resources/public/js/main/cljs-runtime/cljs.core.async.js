goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51917 = arguments.length;
switch (G__51917) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51918 = (function (f,blockable,meta51919){
this.f = f;
this.blockable = blockable;
this.meta51919 = meta51919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51920,meta51919__$1){
var self__ = this;
var _51920__$1 = this;
return (new cljs.core.async.t_cljs$core$async51918(self__.f,self__.blockable,meta51919__$1));
});

cljs.core.async.t_cljs$core$async51918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51920){
var self__ = this;
var _51920__$1 = this;
return self__.meta51919;
});

cljs.core.async.t_cljs$core$async51918.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51919","meta51919",-1633018601,null)], null);
});

cljs.core.async.t_cljs$core$async51918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51918";

cljs.core.async.t_cljs$core$async51918.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51918");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51918.
 */
cljs.core.async.__GT_t_cljs$core$async51918 = (function cljs$core$async$__GT_t_cljs$core$async51918(f__$1,blockable__$1,meta51919){
return (new cljs.core.async.t_cljs$core$async51918(f__$1,blockable__$1,meta51919));
});

}

return (new cljs.core.async.t_cljs$core$async51918(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__51923 = arguments.length;
switch (G__51923) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51925 = arguments.length;
switch (G__51925) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__51927 = arguments.length;
switch (G__51927) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53701 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53701) : fn1.call(null,val_53701));
} else {
cljs.core.async.impl.dispatch.run(((function (val_53701,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53701) : fn1.call(null,val_53701));
});})(val_53701,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__51929 = arguments.length;
switch (G__51929) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5802__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5802__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___53708 = n;
var x_53709 = (0);
while(true){
if((x_53709 < n__4607__auto___53708)){
(a[x_53709] = x_53709);

var G__53710 = (x_53709 + (1));
x_53709 = G__53710;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51930 = (function (flag,meta51931){
this.flag = flag;
this.meta51931 = meta51931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51932,meta51931__$1){
var self__ = this;
var _51932__$1 = this;
return (new cljs.core.async.t_cljs$core$async51930(self__.flag,meta51931__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51932){
var self__ = this;
var _51932__$1 = this;
return self__.meta51931;
});})(flag))
;

cljs.core.async.t_cljs$core$async51930.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51930.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51930.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51931","meta51931",-959807153,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51930";

cljs.core.async.t_cljs$core$async51930.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51930");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51930.
 */
cljs.core.async.__GT_t_cljs$core$async51930 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51930(flag__$1,meta51931){
return (new cljs.core.async.t_cljs$core$async51930(flag__$1,meta51931));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51930(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51933 = (function (flag,cb,meta51934){
this.flag = flag;
this.cb = cb;
this.meta51934 = meta51934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51935,meta51934__$1){
var self__ = this;
var _51935__$1 = this;
return (new cljs.core.async.t_cljs$core$async51933(self__.flag,self__.cb,meta51934__$1));
});

cljs.core.async.t_cljs$core$async51933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51935){
var self__ = this;
var _51935__$1 = this;
return self__.meta51934;
});

cljs.core.async.t_cljs$core$async51933.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async51933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51934","meta51934",-2116370381,null)], null);
});

cljs.core.async.t_cljs$core$async51933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51933";

cljs.core.async.t_cljs$core$async51933.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51933");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51933.
 */
cljs.core.async.__GT_t_cljs$core$async51933 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51933(flag__$1,cb__$1,meta51934){
return (new cljs.core.async.t_cljs$core$async51933(flag__$1,cb__$1,meta51934));
});

}

return (new cljs.core.async.t_cljs$core$async51933(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51936_SHARP_){
var G__51938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51936_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51938) : fret.call(null,G__51938));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51937_SHARP_){
var G__51939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51937_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51939) : fret.call(null,G__51939));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53737 = (i + (1));
i = G__53737;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___53741 = arguments.length;
var i__4731__auto___53744 = (0);
while(true){
if((i__4731__auto___53744 < len__4730__auto___53741)){
args__4736__auto__.push((arguments[i__4731__auto___53744]));

var G__53745 = (i__4731__auto___53744 + (1));
i__4731__auto___53744 = G__53745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51942){
var map__51943 = p__51942;
var map__51943__$1 = (((((!((map__51943 == null))))?(((((map__51943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51943):map__51943);
var opts = map__51943__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51940){
var G__51941 = cljs.core.first(seq51940);
var seq51940__$1 = cljs.core.next(seq51940);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51941,seq51940__$1);
});

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
var G__51946 = arguments.length;
switch (G__51946) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__51859__auto___53757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___53757){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___53757){
return (function (state_51970){
var state_val_51971 = (state_51970[(1)]);
if((state_val_51971 === (7))){
var inst_51966 = (state_51970[(2)]);
var state_51970__$1 = state_51970;
var statearr_51972_53761 = state_51970__$1;
(statearr_51972_53761[(2)] = inst_51966);

(statearr_51972_53761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (1))){
var state_51970__$1 = state_51970;
var statearr_51973_53763 = state_51970__$1;
(statearr_51973_53763[(2)] = null);

(statearr_51973_53763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (4))){
var inst_51949 = (state_51970[(7)]);
var inst_51949__$1 = (state_51970[(2)]);
var inst_51950 = (inst_51949__$1 == null);
var state_51970__$1 = (function (){var statearr_51974 = state_51970;
(statearr_51974[(7)] = inst_51949__$1);

return statearr_51974;
})();
if(cljs.core.truth_(inst_51950)){
var statearr_51975_53764 = state_51970__$1;
(statearr_51975_53764[(1)] = (5));

} else {
var statearr_51976_53766 = state_51970__$1;
(statearr_51976_53766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (13))){
var state_51970__$1 = state_51970;
var statearr_51977_53768 = state_51970__$1;
(statearr_51977_53768[(2)] = null);

(statearr_51977_53768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (6))){
var inst_51949 = (state_51970[(7)]);
var state_51970__$1 = state_51970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51970__$1,(11),to,inst_51949);
} else {
if((state_val_51971 === (3))){
var inst_51968 = (state_51970[(2)]);
var state_51970__$1 = state_51970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51970__$1,inst_51968);
} else {
if((state_val_51971 === (12))){
var state_51970__$1 = state_51970;
var statearr_51978_53771 = state_51970__$1;
(statearr_51978_53771[(2)] = null);

(statearr_51978_53771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (2))){
var state_51970__$1 = state_51970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51970__$1,(4),from);
} else {
if((state_val_51971 === (11))){
var inst_51959 = (state_51970[(2)]);
var state_51970__$1 = state_51970;
if(cljs.core.truth_(inst_51959)){
var statearr_51979_53772 = state_51970__$1;
(statearr_51979_53772[(1)] = (12));

} else {
var statearr_51980_53773 = state_51970__$1;
(statearr_51980_53773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (9))){
var state_51970__$1 = state_51970;
var statearr_51981_53774 = state_51970__$1;
(statearr_51981_53774[(2)] = null);

(statearr_51981_53774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (5))){
var state_51970__$1 = state_51970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51982_53775 = state_51970__$1;
(statearr_51982_53775[(1)] = (8));

} else {
var statearr_51983_53776 = state_51970__$1;
(statearr_51983_53776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (14))){
var inst_51964 = (state_51970[(2)]);
var state_51970__$1 = state_51970;
var statearr_51984_53777 = state_51970__$1;
(statearr_51984_53777[(2)] = inst_51964);

(statearr_51984_53777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (10))){
var inst_51956 = (state_51970[(2)]);
var state_51970__$1 = state_51970;
var statearr_51985_53779 = state_51970__$1;
(statearr_51985_53779[(2)] = inst_51956);

(statearr_51985_53779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51971 === (8))){
var inst_51953 = cljs.core.async.close_BANG_(to);
var state_51970__$1 = state_51970;
var statearr_51986_53782 = state_51970__$1;
(statearr_51986_53782[(2)] = inst_51953);

(statearr_51986_53782[(1)] = (10));


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
});})(c__51859__auto___53757))
;
return ((function (switch__51723__auto__,c__51859__auto___53757){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_51987 = [null,null,null,null,null,null,null,null];
(statearr_51987[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_51987[(1)] = (1));

return statearr_51987;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_51970){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_51970);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e51988){if((e51988 instanceof Object)){
var ex__51727__auto__ = e51988;
var statearr_51989_53787 = state_51970;
(statearr_51989_53787[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53789 = state_51970;
state_51970 = G__53789;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_51970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_51970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___53757))
})();
var state__51861__auto__ = (function (){var statearr_51990 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_51990[(6)] = c__51859__auto___53757);

return statearr_51990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___53757))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__51991){
var vec__51992 = p__51991;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51992,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51992,(1),null);
var job = vec__51992;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51859__auto___53794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___53794,res,vec__51992,v,p,job,jobs,results){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___53794,res,vec__51992,v,p,job,jobs,results){
return (function (state_51999){
var state_val_52000 = (state_51999[(1)]);
if((state_val_52000 === (1))){
var state_51999__$1 = state_51999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51999__$1,(2),res,v);
} else {
if((state_val_52000 === (2))){
var inst_51996 = (state_51999[(2)]);
var inst_51997 = cljs.core.async.close_BANG_(res);
var state_51999__$1 = (function (){var statearr_52001 = state_51999;
(statearr_52001[(7)] = inst_51996);

return statearr_52001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51999__$1,inst_51997);
} else {
return null;
}
}
});})(c__51859__auto___53794,res,vec__51992,v,p,job,jobs,results))
;
return ((function (switch__51723__auto__,c__51859__auto___53794,res,vec__51992,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0 = (function (){
var statearr_52002 = [null,null,null,null,null,null,null,null];
(statearr_52002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__);

(statearr_52002[(1)] = (1));

return statearr_52002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1 = (function (state_51999){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_51999);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52003){if((e52003 instanceof Object)){
var ex__51727__auto__ = e52003;
var statearr_52004_53798 = state_51999;
(statearr_52004_53798[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53799 = state_51999;
state_51999 = G__53799;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = function(state_51999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1.call(this,state_51999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___53794,res,vec__51992,v,p,job,jobs,results))
})();
var state__51861__auto__ = (function (){var statearr_52005 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52005[(6)] = c__51859__auto___53794);

return statearr_52005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___53794,res,vec__51992,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52006){
var vec__52007 = p__52006;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52007,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52007,(1),null);
var job = vec__52007;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___53811 = n;
var __53812 = (0);
while(true){
if((__53812 < n__4607__auto___53811)){
var G__52010_53813 = type;
var G__52010_53814__$1 = (((G__52010_53813 instanceof cljs.core.Keyword))?G__52010_53813.fqn:null);
switch (G__52010_53814__$1) {
case "compute":
var c__51859__auto___53816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53812,c__51859__auto___53816,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (__53812,c__51859__auto___53816,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async){
return (function (state_52023){
var state_val_52024 = (state_52023[(1)]);
if((state_val_52024 === (1))){
var state_52023__$1 = state_52023;
var statearr_52025_53821 = state_52023__$1;
(statearr_52025_53821[(2)] = null);

(statearr_52025_53821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (2))){
var state_52023__$1 = state_52023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52023__$1,(4),jobs);
} else {
if((state_val_52024 === (3))){
var inst_52021 = (state_52023[(2)]);
var state_52023__$1 = state_52023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52023__$1,inst_52021);
} else {
if((state_val_52024 === (4))){
var inst_52013 = (state_52023[(2)]);
var inst_52014 = process(inst_52013);
var state_52023__$1 = state_52023;
if(cljs.core.truth_(inst_52014)){
var statearr_52026_53822 = state_52023__$1;
(statearr_52026_53822[(1)] = (5));

} else {
var statearr_52027_53823 = state_52023__$1;
(statearr_52027_53823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (5))){
var state_52023__$1 = state_52023;
var statearr_52028_53824 = state_52023__$1;
(statearr_52028_53824[(2)] = null);

(statearr_52028_53824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (6))){
var state_52023__$1 = state_52023;
var statearr_52029_53825 = state_52023__$1;
(statearr_52029_53825[(2)] = null);

(statearr_52029_53825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (7))){
var inst_52019 = (state_52023[(2)]);
var state_52023__$1 = state_52023;
var statearr_52030_53826 = state_52023__$1;
(statearr_52030_53826[(2)] = inst_52019);

(statearr_52030_53826[(1)] = (3));


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
});})(__53812,c__51859__auto___53816,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async))
;
return ((function (__53812,switch__51723__auto__,c__51859__auto___53816,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0 = (function (){
var statearr_52031 = [null,null,null,null,null,null,null];
(statearr_52031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__);

(statearr_52031[(1)] = (1));

return statearr_52031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1 = (function (state_52023){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52023);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52032){if((e52032 instanceof Object)){
var ex__51727__auto__ = e52032;
var statearr_52033_53829 = state_52023;
(statearr_52033_53829[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53830 = state_52023;
state_52023 = G__53830;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = function(state_52023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1.call(this,state_52023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__;
})()
;})(__53812,switch__51723__auto__,c__51859__auto___53816,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async))
})();
var state__51861__auto__ = (function (){var statearr_52034 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52034[(6)] = c__51859__auto___53816);

return statearr_52034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(__53812,c__51859__auto___53816,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async))
);


break;
case "async":
var c__51859__auto___53833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53812,c__51859__auto___53833,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (__53812,c__51859__auto___53833,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async){
return (function (state_52047){
var state_val_52048 = (state_52047[(1)]);
if((state_val_52048 === (1))){
var state_52047__$1 = state_52047;
var statearr_52049_53837 = state_52047__$1;
(statearr_52049_53837[(2)] = null);

(statearr_52049_53837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (2))){
var state_52047__$1 = state_52047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52047__$1,(4),jobs);
} else {
if((state_val_52048 === (3))){
var inst_52045 = (state_52047[(2)]);
var state_52047__$1 = state_52047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52047__$1,inst_52045);
} else {
if((state_val_52048 === (4))){
var inst_52037 = (state_52047[(2)]);
var inst_52038 = async(inst_52037);
var state_52047__$1 = state_52047;
if(cljs.core.truth_(inst_52038)){
var statearr_52050_53839 = state_52047__$1;
(statearr_52050_53839[(1)] = (5));

} else {
var statearr_52051_53840 = state_52047__$1;
(statearr_52051_53840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (5))){
var state_52047__$1 = state_52047;
var statearr_52052_53841 = state_52047__$1;
(statearr_52052_53841[(2)] = null);

(statearr_52052_53841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (6))){
var state_52047__$1 = state_52047;
var statearr_52053_53842 = state_52047__$1;
(statearr_52053_53842[(2)] = null);

(statearr_52053_53842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (7))){
var inst_52043 = (state_52047[(2)]);
var state_52047__$1 = state_52047;
var statearr_52054_53843 = state_52047__$1;
(statearr_52054_53843[(2)] = inst_52043);

(statearr_52054_53843[(1)] = (3));


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
});})(__53812,c__51859__auto___53833,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async))
;
return ((function (__53812,switch__51723__auto__,c__51859__auto___53833,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0 = (function (){
var statearr_52055 = [null,null,null,null,null,null,null];
(statearr_52055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__);

(statearr_52055[(1)] = (1));

return statearr_52055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1 = (function (state_52047){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52047);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52056){if((e52056 instanceof Object)){
var ex__51727__auto__ = e52056;
var statearr_52057_53844 = state_52047;
(statearr_52057_53844[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53852 = state_52047;
state_52047 = G__53852;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = function(state_52047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1.call(this,state_52047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__;
})()
;})(__53812,switch__51723__auto__,c__51859__auto___53833,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async))
})();
var state__51861__auto__ = (function (){var statearr_52058 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52058[(6)] = c__51859__auto___53833);

return statearr_52058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(__53812,c__51859__auto___53833,G__52010_53813,G__52010_53814__$1,n__4607__auto___53811,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52010_53814__$1)].join('')));

}

var G__53856 = (__53812 + (1));
__53812 = G__53856;
continue;
} else {
}
break;
}

var c__51859__auto___53857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___53857,jobs,results,process,async){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___53857,jobs,results,process,async){
return (function (state_52080){
var state_val_52081 = (state_52080[(1)]);
if((state_val_52081 === (7))){
var inst_52076 = (state_52080[(2)]);
var state_52080__$1 = state_52080;
var statearr_52082_53860 = state_52080__$1;
(statearr_52082_53860[(2)] = inst_52076);

(statearr_52082_53860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52081 === (1))){
var state_52080__$1 = state_52080;
var statearr_52083_53863 = state_52080__$1;
(statearr_52083_53863[(2)] = null);

(statearr_52083_53863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52081 === (4))){
var inst_52061 = (state_52080[(7)]);
var inst_52061__$1 = (state_52080[(2)]);
var inst_52062 = (inst_52061__$1 == null);
var state_52080__$1 = (function (){var statearr_52084 = state_52080;
(statearr_52084[(7)] = inst_52061__$1);

return statearr_52084;
})();
if(cljs.core.truth_(inst_52062)){
var statearr_52085_53865 = state_52080__$1;
(statearr_52085_53865[(1)] = (5));

} else {
var statearr_52086_53866 = state_52080__$1;
(statearr_52086_53866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52081 === (6))){
var inst_52061 = (state_52080[(7)]);
var inst_52066 = (state_52080[(8)]);
var inst_52066__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52067 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52068 = [inst_52061,inst_52066__$1];
var inst_52069 = (new cljs.core.PersistentVector(null,2,(5),inst_52067,inst_52068,null));
var state_52080__$1 = (function (){var statearr_52087 = state_52080;
(statearr_52087[(8)] = inst_52066__$1);

return statearr_52087;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52080__$1,(8),jobs,inst_52069);
} else {
if((state_val_52081 === (3))){
var inst_52078 = (state_52080[(2)]);
var state_52080__$1 = state_52080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52080__$1,inst_52078);
} else {
if((state_val_52081 === (2))){
var state_52080__$1 = state_52080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52080__$1,(4),from);
} else {
if((state_val_52081 === (9))){
var inst_52073 = (state_52080[(2)]);
var state_52080__$1 = (function (){var statearr_52088 = state_52080;
(statearr_52088[(9)] = inst_52073);

return statearr_52088;
})();
var statearr_52089_53873 = state_52080__$1;
(statearr_52089_53873[(2)] = null);

(statearr_52089_53873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52081 === (5))){
var inst_52064 = cljs.core.async.close_BANG_(jobs);
var state_52080__$1 = state_52080;
var statearr_52090_53874 = state_52080__$1;
(statearr_52090_53874[(2)] = inst_52064);

(statearr_52090_53874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52081 === (8))){
var inst_52066 = (state_52080[(8)]);
var inst_52071 = (state_52080[(2)]);
var state_52080__$1 = (function (){var statearr_52091 = state_52080;
(statearr_52091[(10)] = inst_52071);

return statearr_52091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52080__$1,(9),results,inst_52066);
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
});})(c__51859__auto___53857,jobs,results,process,async))
;
return ((function (switch__51723__auto__,c__51859__auto___53857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0 = (function (){
var statearr_52092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__);

(statearr_52092[(1)] = (1));

return statearr_52092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1 = (function (state_52080){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52080);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52093){if((e52093 instanceof Object)){
var ex__51727__auto__ = e52093;
var statearr_52094_53878 = state_52080;
(statearr_52094_53878[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53882 = state_52080;
state_52080 = G__53882;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = function(state_52080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1.call(this,state_52080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___53857,jobs,results,process,async))
})();
var state__51861__auto__ = (function (){var statearr_52095 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52095[(6)] = c__51859__auto___53857);

return statearr_52095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___53857,jobs,results,process,async))
);


var c__51859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto__,jobs,results,process,async){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto__,jobs,results,process,async){
return (function (state_52133){
var state_val_52134 = (state_52133[(1)]);
if((state_val_52134 === (7))){
var inst_52129 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
var statearr_52135_53891 = state_52133__$1;
(statearr_52135_53891[(2)] = inst_52129);

(statearr_52135_53891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (20))){
var state_52133__$1 = state_52133;
var statearr_52136_53897 = state_52133__$1;
(statearr_52136_53897[(2)] = null);

(statearr_52136_53897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (1))){
var state_52133__$1 = state_52133;
var statearr_52137_53899 = state_52133__$1;
(statearr_52137_53899[(2)] = null);

(statearr_52137_53899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (4))){
var inst_52098 = (state_52133[(7)]);
var inst_52098__$1 = (state_52133[(2)]);
var inst_52099 = (inst_52098__$1 == null);
var state_52133__$1 = (function (){var statearr_52138 = state_52133;
(statearr_52138[(7)] = inst_52098__$1);

return statearr_52138;
})();
if(cljs.core.truth_(inst_52099)){
var statearr_52139_53903 = state_52133__$1;
(statearr_52139_53903[(1)] = (5));

} else {
var statearr_52140_53904 = state_52133__$1;
(statearr_52140_53904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (15))){
var inst_52111 = (state_52133[(8)]);
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52133__$1,(18),to,inst_52111);
} else {
if((state_val_52134 === (21))){
var inst_52124 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
var statearr_52141_53911 = state_52133__$1;
(statearr_52141_53911[(2)] = inst_52124);

(statearr_52141_53911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (13))){
var inst_52126 = (state_52133[(2)]);
var state_52133__$1 = (function (){var statearr_52142 = state_52133;
(statearr_52142[(9)] = inst_52126);

return statearr_52142;
})();
var statearr_52143_53915 = state_52133__$1;
(statearr_52143_53915[(2)] = null);

(statearr_52143_53915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (6))){
var inst_52098 = (state_52133[(7)]);
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52133__$1,(11),inst_52098);
} else {
if((state_val_52134 === (17))){
var inst_52119 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
if(cljs.core.truth_(inst_52119)){
var statearr_52144_53919 = state_52133__$1;
(statearr_52144_53919[(1)] = (19));

} else {
var statearr_52145_53920 = state_52133__$1;
(statearr_52145_53920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (3))){
var inst_52131 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52133__$1,inst_52131);
} else {
if((state_val_52134 === (12))){
var inst_52108 = (state_52133[(10)]);
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52133__$1,(14),inst_52108);
} else {
if((state_val_52134 === (2))){
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52133__$1,(4),results);
} else {
if((state_val_52134 === (19))){
var state_52133__$1 = state_52133;
var statearr_52146_53922 = state_52133__$1;
(statearr_52146_53922[(2)] = null);

(statearr_52146_53922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (11))){
var inst_52108 = (state_52133[(2)]);
var state_52133__$1 = (function (){var statearr_52147 = state_52133;
(statearr_52147[(10)] = inst_52108);

return statearr_52147;
})();
var statearr_52148_53925 = state_52133__$1;
(statearr_52148_53925[(2)] = null);

(statearr_52148_53925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (9))){
var state_52133__$1 = state_52133;
var statearr_52149_53927 = state_52133__$1;
(statearr_52149_53927[(2)] = null);

(statearr_52149_53927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (5))){
var state_52133__$1 = state_52133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52150_53929 = state_52133__$1;
(statearr_52150_53929[(1)] = (8));

} else {
var statearr_52151_53930 = state_52133__$1;
(statearr_52151_53930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (14))){
var inst_52113 = (state_52133[(11)]);
var inst_52111 = (state_52133[(8)]);
var inst_52111__$1 = (state_52133[(2)]);
var inst_52112 = (inst_52111__$1 == null);
var inst_52113__$1 = cljs.core.not(inst_52112);
var state_52133__$1 = (function (){var statearr_52152 = state_52133;
(statearr_52152[(11)] = inst_52113__$1);

(statearr_52152[(8)] = inst_52111__$1);

return statearr_52152;
})();
if(inst_52113__$1){
var statearr_52153_53932 = state_52133__$1;
(statearr_52153_53932[(1)] = (15));

} else {
var statearr_52154_53934 = state_52133__$1;
(statearr_52154_53934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (16))){
var inst_52113 = (state_52133[(11)]);
var state_52133__$1 = state_52133;
var statearr_52155_53938 = state_52133__$1;
(statearr_52155_53938[(2)] = inst_52113);

(statearr_52155_53938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (10))){
var inst_52105 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
var statearr_52156_53941 = state_52133__$1;
(statearr_52156_53941[(2)] = inst_52105);

(statearr_52156_53941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (18))){
var inst_52116 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
var statearr_52157_53942 = state_52133__$1;
(statearr_52157_53942[(2)] = inst_52116);

(statearr_52157_53942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (8))){
var inst_52102 = cljs.core.async.close_BANG_(to);
var state_52133__$1 = state_52133;
var statearr_52158_53945 = state_52133__$1;
(statearr_52158_53945[(2)] = inst_52102);

(statearr_52158_53945[(1)] = (10));


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
});})(c__51859__auto__,jobs,results,process,async))
;
return ((function (switch__51723__auto__,c__51859__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0 = (function (){
var statearr_52159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__);

(statearr_52159[(1)] = (1));

return statearr_52159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1 = (function (state_52133){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52133);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52160){if((e52160 instanceof Object)){
var ex__51727__auto__ = e52160;
var statearr_52161_53949 = state_52133;
(statearr_52161_53949[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53951 = state_52133;
state_52133 = G__53951;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__ = function(state_52133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1.call(this,state_52133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto__,jobs,results,process,async))
})();
var state__51861__auto__ = (function (){var statearr_52162 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52162[(6)] = c__51859__auto__);

return statearr_52162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto__,jobs,results,process,async))
);

return c__51859__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52164 = arguments.length;
switch (G__52164) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__52166 = arguments.length;
switch (G__52166) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__52168 = arguments.length;
switch (G__52168) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__51859__auto___53977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___53977,tc,fc){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___53977,tc,fc){
return (function (state_52194){
var state_val_52195 = (state_52194[(1)]);
if((state_val_52195 === (7))){
var inst_52190 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52196_53981 = state_52194__$1;
(statearr_52196_53981[(2)] = inst_52190);

(statearr_52196_53981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (1))){
var state_52194__$1 = state_52194;
var statearr_52197_53984 = state_52194__$1;
(statearr_52197_53984[(2)] = null);

(statearr_52197_53984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (4))){
var inst_52171 = (state_52194[(7)]);
var inst_52171__$1 = (state_52194[(2)]);
var inst_52172 = (inst_52171__$1 == null);
var state_52194__$1 = (function (){var statearr_52198 = state_52194;
(statearr_52198[(7)] = inst_52171__$1);

return statearr_52198;
})();
if(cljs.core.truth_(inst_52172)){
var statearr_52199_53987 = state_52194__$1;
(statearr_52199_53987[(1)] = (5));

} else {
var statearr_52200_53988 = state_52194__$1;
(statearr_52200_53988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (13))){
var state_52194__$1 = state_52194;
var statearr_52201_53989 = state_52194__$1;
(statearr_52201_53989[(2)] = null);

(statearr_52201_53989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (6))){
var inst_52171 = (state_52194[(7)]);
var inst_52177 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52171) : p.call(null,inst_52171));
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52177)){
var statearr_52202_53991 = state_52194__$1;
(statearr_52202_53991[(1)] = (9));

} else {
var statearr_52203_53992 = state_52194__$1;
(statearr_52203_53992[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (3))){
var inst_52192 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52194__$1,inst_52192);
} else {
if((state_val_52195 === (12))){
var state_52194__$1 = state_52194;
var statearr_52204_53994 = state_52194__$1;
(statearr_52204_53994[(2)] = null);

(statearr_52204_53994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (2))){
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52194__$1,(4),ch);
} else {
if((state_val_52195 === (11))){
var inst_52171 = (state_52194[(7)]);
var inst_52181 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52194__$1,(8),inst_52181,inst_52171);
} else {
if((state_val_52195 === (9))){
var state_52194__$1 = state_52194;
var statearr_52205_53998 = state_52194__$1;
(statearr_52205_53998[(2)] = tc);

(statearr_52205_53998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (5))){
var inst_52174 = cljs.core.async.close_BANG_(tc);
var inst_52175 = cljs.core.async.close_BANG_(fc);
var state_52194__$1 = (function (){var statearr_52206 = state_52194;
(statearr_52206[(8)] = inst_52174);

return statearr_52206;
})();
var statearr_52207_53999 = state_52194__$1;
(statearr_52207_53999[(2)] = inst_52175);

(statearr_52207_53999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (14))){
var inst_52188 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52208_54001 = state_52194__$1;
(statearr_52208_54001[(2)] = inst_52188);

(statearr_52208_54001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (10))){
var state_52194__$1 = state_52194;
var statearr_52209_54002 = state_52194__$1;
(statearr_52209_54002[(2)] = fc);

(statearr_52209_54002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (8))){
var inst_52183 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52183)){
var statearr_52210_54003 = state_52194__$1;
(statearr_52210_54003[(1)] = (12));

} else {
var statearr_52211_54005 = state_52194__$1;
(statearr_52211_54005[(1)] = (13));

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
});})(c__51859__auto___53977,tc,fc))
;
return ((function (switch__51723__auto__,c__51859__auto___53977,tc,fc){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_52212 = [null,null,null,null,null,null,null,null,null];
(statearr_52212[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_52212[(1)] = (1));

return statearr_52212;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_52194){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52194);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52213){if((e52213 instanceof Object)){
var ex__51727__auto__ = e52213;
var statearr_52214_54011 = state_52194;
(statearr_52214_54011[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54020 = state_52194;
state_52194 = G__54020;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_52194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_52194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___53977,tc,fc))
})();
var state__51861__auto__ = (function (){var statearr_52215 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52215[(6)] = c__51859__auto___53977);

return statearr_52215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___53977,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__51859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto__){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto__){
return (function (state_52236){
var state_val_52237 = (state_52236[(1)]);
if((state_val_52237 === (7))){
var inst_52232 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52238_54023 = state_52236__$1;
(statearr_52238_54023[(2)] = inst_52232);

(statearr_52238_54023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (1))){
var inst_52216 = init;
var state_52236__$1 = (function (){var statearr_52239 = state_52236;
(statearr_52239[(7)] = inst_52216);

return statearr_52239;
})();
var statearr_52240_54027 = state_52236__$1;
(statearr_52240_54027[(2)] = null);

(statearr_52240_54027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (4))){
var inst_52219 = (state_52236[(8)]);
var inst_52219__$1 = (state_52236[(2)]);
var inst_52220 = (inst_52219__$1 == null);
var state_52236__$1 = (function (){var statearr_52241 = state_52236;
(statearr_52241[(8)] = inst_52219__$1);

return statearr_52241;
})();
if(cljs.core.truth_(inst_52220)){
var statearr_52242_54029 = state_52236__$1;
(statearr_52242_54029[(1)] = (5));

} else {
var statearr_52243_54034 = state_52236__$1;
(statearr_52243_54034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (6))){
var inst_52223 = (state_52236[(9)]);
var inst_52216 = (state_52236[(7)]);
var inst_52219 = (state_52236[(8)]);
var inst_52223__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52216,inst_52219) : f.call(null,inst_52216,inst_52219));
var inst_52224 = cljs.core.reduced_QMARK_(inst_52223__$1);
var state_52236__$1 = (function (){var statearr_52244 = state_52236;
(statearr_52244[(9)] = inst_52223__$1);

return statearr_52244;
})();
if(inst_52224){
var statearr_52245_54035 = state_52236__$1;
(statearr_52245_54035[(1)] = (8));

} else {
var statearr_52246_54036 = state_52236__$1;
(statearr_52246_54036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (3))){
var inst_52234 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52236__$1,inst_52234);
} else {
if((state_val_52237 === (2))){
var state_52236__$1 = state_52236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52236__$1,(4),ch);
} else {
if((state_val_52237 === (9))){
var inst_52223 = (state_52236[(9)]);
var inst_52216 = inst_52223;
var state_52236__$1 = (function (){var statearr_52247 = state_52236;
(statearr_52247[(7)] = inst_52216);

return statearr_52247;
})();
var statearr_52248_54043 = state_52236__$1;
(statearr_52248_54043[(2)] = null);

(statearr_52248_54043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (5))){
var inst_52216 = (state_52236[(7)]);
var state_52236__$1 = state_52236;
var statearr_52249_54044 = state_52236__$1;
(statearr_52249_54044[(2)] = inst_52216);

(statearr_52249_54044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (10))){
var inst_52230 = (state_52236[(2)]);
var state_52236__$1 = state_52236;
var statearr_52250_54046 = state_52236__$1;
(statearr_52250_54046[(2)] = inst_52230);

(statearr_52250_54046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52237 === (8))){
var inst_52223 = (state_52236[(9)]);
var inst_52226 = cljs.core.deref(inst_52223);
var state_52236__$1 = state_52236;
var statearr_52251_54049 = state_52236__$1;
(statearr_52251_54049[(2)] = inst_52226);

(statearr_52251_54049[(1)] = (10));


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
});})(c__51859__auto__))
;
return ((function (switch__51723__auto__,c__51859__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__51724__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51724__auto____0 = (function (){
var statearr_52252 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52252[(0)] = cljs$core$async$reduce_$_state_machine__51724__auto__);

(statearr_52252[(1)] = (1));

return statearr_52252;
});
var cljs$core$async$reduce_$_state_machine__51724__auto____1 = (function (state_52236){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52236);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52253){if((e52253 instanceof Object)){
var ex__51727__auto__ = e52253;
var statearr_52254_54056 = state_52236;
(statearr_52254_54056[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54061 = state_52236;
state_52236 = G__54061;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51724__auto__ = function(state_52236){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51724__auto____1.call(this,state_52236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51724__auto____0;
cljs$core$async$reduce_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51724__auto____1;
return cljs$core$async$reduce_$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto__))
})();
var state__51861__auto__ = (function (){var statearr_52255 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52255[(6)] = c__51859__auto__);

return statearr_52255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto__))
);

return c__51859__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto__,f__$1){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto__,f__$1){
return (function (state_52261){
var state_val_52262 = (state_52261[(1)]);
if((state_val_52262 === (1))){
var inst_52256 = cljs.core.async.reduce(f__$1,init,ch);
var state_52261__$1 = state_52261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52261__$1,(2),inst_52256);
} else {
if((state_val_52262 === (2))){
var inst_52258 = (state_52261[(2)]);
var inst_52259 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52258) : f__$1.call(null,inst_52258));
var state_52261__$1 = state_52261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52261__$1,inst_52259);
} else {
return null;
}
}
});})(c__51859__auto__,f__$1))
;
return ((function (switch__51723__auto__,c__51859__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__51724__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51724__auto____0 = (function (){
var statearr_52263 = [null,null,null,null,null,null,null];
(statearr_52263[(0)] = cljs$core$async$transduce_$_state_machine__51724__auto__);

(statearr_52263[(1)] = (1));

return statearr_52263;
});
var cljs$core$async$transduce_$_state_machine__51724__auto____1 = (function (state_52261){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52261);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52264){if((e52264 instanceof Object)){
var ex__51727__auto__ = e52264;
var statearr_52265_54077 = state_52261;
(statearr_52265_54077[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54080 = state_52261;
state_52261 = G__54080;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51724__auto__ = function(state_52261){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51724__auto____1.call(this,state_52261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51724__auto____0;
cljs$core$async$transduce_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51724__auto____1;
return cljs$core$async$transduce_$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto__,f__$1))
})();
var state__51861__auto__ = (function (){var statearr_52266 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52266[(6)] = c__51859__auto__);

return statearr_52266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto__,f__$1))
);

return c__51859__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52268 = arguments.length;
switch (G__52268) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__51859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto__){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto__){
return (function (state_52293){
var state_val_52294 = (state_52293[(1)]);
if((state_val_52294 === (7))){
var inst_52275 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52295_54093 = state_52293__$1;
(statearr_52295_54093[(2)] = inst_52275);

(statearr_52295_54093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (1))){
var inst_52269 = cljs.core.seq(coll);
var inst_52270 = inst_52269;
var state_52293__$1 = (function (){var statearr_52296 = state_52293;
(statearr_52296[(7)] = inst_52270);

return statearr_52296;
})();
var statearr_52297_54099 = state_52293__$1;
(statearr_52297_54099[(2)] = null);

(statearr_52297_54099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (4))){
var inst_52270 = (state_52293[(7)]);
var inst_52273 = cljs.core.first(inst_52270);
var state_52293__$1 = state_52293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52293__$1,(7),ch,inst_52273);
} else {
if((state_val_52294 === (13))){
var inst_52287 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52298_54100 = state_52293__$1;
(statearr_52298_54100[(2)] = inst_52287);

(statearr_52298_54100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (6))){
var inst_52278 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
if(cljs.core.truth_(inst_52278)){
var statearr_52299_54101 = state_52293__$1;
(statearr_52299_54101[(1)] = (8));

} else {
var statearr_52300_54106 = state_52293__$1;
(statearr_52300_54106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (3))){
var inst_52291 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52293__$1,inst_52291);
} else {
if((state_val_52294 === (12))){
var state_52293__$1 = state_52293;
var statearr_52301_54110 = state_52293__$1;
(statearr_52301_54110[(2)] = null);

(statearr_52301_54110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (2))){
var inst_52270 = (state_52293[(7)]);
var state_52293__$1 = state_52293;
if(cljs.core.truth_(inst_52270)){
var statearr_52302_54114 = state_52293__$1;
(statearr_52302_54114[(1)] = (4));

} else {
var statearr_52303_54115 = state_52293__$1;
(statearr_52303_54115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (11))){
var inst_52284 = cljs.core.async.close_BANG_(ch);
var state_52293__$1 = state_52293;
var statearr_52304_54116 = state_52293__$1;
(statearr_52304_54116[(2)] = inst_52284);

(statearr_52304_54116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (9))){
var state_52293__$1 = state_52293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52305_54120 = state_52293__$1;
(statearr_52305_54120[(1)] = (11));

} else {
var statearr_52306_54124 = state_52293__$1;
(statearr_52306_54124[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (5))){
var inst_52270 = (state_52293[(7)]);
var state_52293__$1 = state_52293;
var statearr_52307_54125 = state_52293__$1;
(statearr_52307_54125[(2)] = inst_52270);

(statearr_52307_54125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (10))){
var inst_52289 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
var statearr_52308_54126 = state_52293__$1;
(statearr_52308_54126[(2)] = inst_52289);

(statearr_52308_54126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52294 === (8))){
var inst_52270 = (state_52293[(7)]);
var inst_52280 = cljs.core.next(inst_52270);
var inst_52270__$1 = inst_52280;
var state_52293__$1 = (function (){var statearr_52309 = state_52293;
(statearr_52309[(7)] = inst_52270__$1);

return statearr_52309;
})();
var statearr_52310_54133 = state_52293__$1;
(statearr_52310_54133[(2)] = null);

(statearr_52310_54133[(1)] = (2));


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
});})(c__51859__auto__))
;
return ((function (switch__51723__auto__,c__51859__auto__){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_52311 = [null,null,null,null,null,null,null,null];
(statearr_52311[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_52311[(1)] = (1));

return statearr_52311;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_52293){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52293);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52312){if((e52312 instanceof Object)){
var ex__51727__auto__ = e52312;
var statearr_52313_54142 = state_52293;
(statearr_52313_54142[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54143 = state_52293;
state_52293 = G__54143;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_52293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_52293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto__))
})();
var state__51861__auto__ = (function (){var statearr_52314 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52314[(6)] = c__51859__auto__);

return statearr_52314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto__))
);

return c__51859__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52315 = (function (ch,cs,meta52316){
this.ch = ch;
this.cs = cs;
this.meta52316 = meta52316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52317,meta52316__$1){
var self__ = this;
var _52317__$1 = this;
return (new cljs.core.async.t_cljs$core$async52315(self__.ch,self__.cs,meta52316__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52317){
var self__ = this;
var _52317__$1 = this;
return self__.meta52316;
});})(cs))
;

cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52315.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52315.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52316","meta52316",2036022181,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52315";

cljs.core.async.t_cljs$core$async52315.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52315");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52315.
 */
cljs.core.async.__GT_t_cljs$core$async52315 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52315(ch__$1,cs__$1,meta52316){
return (new cljs.core.async.t_cljs$core$async52315(ch__$1,cs__$1,meta52316));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52315(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__51859__auto___54160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54160,cs,m,dchan,dctr,done){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54160,cs,m,dchan,dctr,done){
return (function (state_52452){
var state_val_52453 = (state_52452[(1)]);
if((state_val_52453 === (7))){
var inst_52448 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52454_54162 = state_52452__$1;
(statearr_52454_54162[(2)] = inst_52448);

(statearr_52454_54162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (20))){
var inst_52351 = (state_52452[(7)]);
var inst_52363 = cljs.core.first(inst_52351);
var inst_52364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52363,(0),null);
var inst_52365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52363,(1),null);
var state_52452__$1 = (function (){var statearr_52455 = state_52452;
(statearr_52455[(8)] = inst_52364);

return statearr_52455;
})();
if(cljs.core.truth_(inst_52365)){
var statearr_52456_54166 = state_52452__$1;
(statearr_52456_54166[(1)] = (22));

} else {
var statearr_52457_54168 = state_52452__$1;
(statearr_52457_54168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (27))){
var inst_52320 = (state_52452[(9)]);
var inst_52400 = (state_52452[(10)]);
var inst_52395 = (state_52452[(11)]);
var inst_52393 = (state_52452[(12)]);
var inst_52400__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52393,inst_52395);
var inst_52401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52400__$1,inst_52320,done);
var state_52452__$1 = (function (){var statearr_52458 = state_52452;
(statearr_52458[(10)] = inst_52400__$1);

return statearr_52458;
})();
if(cljs.core.truth_(inst_52401)){
var statearr_52459_54170 = state_52452__$1;
(statearr_52459_54170[(1)] = (30));

} else {
var statearr_52460_54171 = state_52452__$1;
(statearr_52460_54171[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (1))){
var state_52452__$1 = state_52452;
var statearr_52461_54175 = state_52452__$1;
(statearr_52461_54175[(2)] = null);

(statearr_52461_54175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (24))){
var inst_52351 = (state_52452[(7)]);
var inst_52370 = (state_52452[(2)]);
var inst_52371 = cljs.core.next(inst_52351);
var inst_52329 = inst_52371;
var inst_52330 = null;
var inst_52331 = (0);
var inst_52332 = (0);
var state_52452__$1 = (function (){var statearr_52462 = state_52452;
(statearr_52462[(13)] = inst_52329);

(statearr_52462[(14)] = inst_52330);

(statearr_52462[(15)] = inst_52331);

(statearr_52462[(16)] = inst_52332);

(statearr_52462[(17)] = inst_52370);

return statearr_52462;
})();
var statearr_52463_54178 = state_52452__$1;
(statearr_52463_54178[(2)] = null);

(statearr_52463_54178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (39))){
var state_52452__$1 = state_52452;
var statearr_52467_54179 = state_52452__$1;
(statearr_52467_54179[(2)] = null);

(statearr_52467_54179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (4))){
var inst_52320 = (state_52452[(9)]);
var inst_52320__$1 = (state_52452[(2)]);
var inst_52321 = (inst_52320__$1 == null);
var state_52452__$1 = (function (){var statearr_52468 = state_52452;
(statearr_52468[(9)] = inst_52320__$1);

return statearr_52468;
})();
if(cljs.core.truth_(inst_52321)){
var statearr_52469_54181 = state_52452__$1;
(statearr_52469_54181[(1)] = (5));

} else {
var statearr_52470_54183 = state_52452__$1;
(statearr_52470_54183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (15))){
var inst_52329 = (state_52452[(13)]);
var inst_52330 = (state_52452[(14)]);
var inst_52331 = (state_52452[(15)]);
var inst_52332 = (state_52452[(16)]);
var inst_52347 = (state_52452[(2)]);
var inst_52348 = (inst_52332 + (1));
var tmp52464 = inst_52329;
var tmp52465 = inst_52330;
var tmp52466 = inst_52331;
var inst_52329__$1 = tmp52464;
var inst_52330__$1 = tmp52465;
var inst_52331__$1 = tmp52466;
var inst_52332__$1 = inst_52348;
var state_52452__$1 = (function (){var statearr_52471 = state_52452;
(statearr_52471[(13)] = inst_52329__$1);

(statearr_52471[(14)] = inst_52330__$1);

(statearr_52471[(18)] = inst_52347);

(statearr_52471[(15)] = inst_52331__$1);

(statearr_52471[(16)] = inst_52332__$1);

return statearr_52471;
})();
var statearr_52472_54185 = state_52452__$1;
(statearr_52472_54185[(2)] = null);

(statearr_52472_54185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (21))){
var inst_52374 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52476_54186 = state_52452__$1;
(statearr_52476_54186[(2)] = inst_52374);

(statearr_52476_54186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (31))){
var inst_52400 = (state_52452[(10)]);
var inst_52404 = done(null);
var inst_52405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52400);
var state_52452__$1 = (function (){var statearr_52477 = state_52452;
(statearr_52477[(19)] = inst_52404);

return statearr_52477;
})();
var statearr_52478_54187 = state_52452__$1;
(statearr_52478_54187[(2)] = inst_52405);

(statearr_52478_54187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (32))){
var inst_52392 = (state_52452[(20)]);
var inst_52394 = (state_52452[(21)]);
var inst_52395 = (state_52452[(11)]);
var inst_52393 = (state_52452[(12)]);
var inst_52407 = (state_52452[(2)]);
var inst_52408 = (inst_52395 + (1));
var tmp52473 = inst_52392;
var tmp52474 = inst_52394;
var tmp52475 = inst_52393;
var inst_52392__$1 = tmp52473;
var inst_52393__$1 = tmp52475;
var inst_52394__$1 = tmp52474;
var inst_52395__$1 = inst_52408;
var state_52452__$1 = (function (){var statearr_52479 = state_52452;
(statearr_52479[(20)] = inst_52392__$1);

(statearr_52479[(21)] = inst_52394__$1);

(statearr_52479[(22)] = inst_52407);

(statearr_52479[(11)] = inst_52395__$1);

(statearr_52479[(12)] = inst_52393__$1);

return statearr_52479;
})();
var statearr_52480_54190 = state_52452__$1;
(statearr_52480_54190[(2)] = null);

(statearr_52480_54190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (40))){
var inst_52420 = (state_52452[(23)]);
var inst_52424 = done(null);
var inst_52425 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52420);
var state_52452__$1 = (function (){var statearr_52481 = state_52452;
(statearr_52481[(24)] = inst_52424);

return statearr_52481;
})();
var statearr_52482_54195 = state_52452__$1;
(statearr_52482_54195[(2)] = inst_52425);

(statearr_52482_54195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (33))){
var inst_52411 = (state_52452[(25)]);
var inst_52413 = cljs.core.chunked_seq_QMARK_(inst_52411);
var state_52452__$1 = state_52452;
if(inst_52413){
var statearr_52483_54196 = state_52452__$1;
(statearr_52483_54196[(1)] = (36));

} else {
var statearr_52484_54199 = state_52452__$1;
(statearr_52484_54199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (13))){
var inst_52341 = (state_52452[(26)]);
var inst_52344 = cljs.core.async.close_BANG_(inst_52341);
var state_52452__$1 = state_52452;
var statearr_52485_54202 = state_52452__$1;
(statearr_52485_54202[(2)] = inst_52344);

(statearr_52485_54202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (22))){
var inst_52364 = (state_52452[(8)]);
var inst_52367 = cljs.core.async.close_BANG_(inst_52364);
var state_52452__$1 = state_52452;
var statearr_52486_54205 = state_52452__$1;
(statearr_52486_54205[(2)] = inst_52367);

(statearr_52486_54205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (36))){
var inst_52411 = (state_52452[(25)]);
var inst_52415 = cljs.core.chunk_first(inst_52411);
var inst_52416 = cljs.core.chunk_rest(inst_52411);
var inst_52417 = cljs.core.count(inst_52415);
var inst_52392 = inst_52416;
var inst_52393 = inst_52415;
var inst_52394 = inst_52417;
var inst_52395 = (0);
var state_52452__$1 = (function (){var statearr_52487 = state_52452;
(statearr_52487[(20)] = inst_52392);

(statearr_52487[(21)] = inst_52394);

(statearr_52487[(11)] = inst_52395);

(statearr_52487[(12)] = inst_52393);

return statearr_52487;
})();
var statearr_52488_54220 = state_52452__$1;
(statearr_52488_54220[(2)] = null);

(statearr_52488_54220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (41))){
var inst_52411 = (state_52452[(25)]);
var inst_52427 = (state_52452[(2)]);
var inst_52428 = cljs.core.next(inst_52411);
var inst_52392 = inst_52428;
var inst_52393 = null;
var inst_52394 = (0);
var inst_52395 = (0);
var state_52452__$1 = (function (){var statearr_52489 = state_52452;
(statearr_52489[(20)] = inst_52392);

(statearr_52489[(21)] = inst_52394);

(statearr_52489[(11)] = inst_52395);

(statearr_52489[(27)] = inst_52427);

(statearr_52489[(12)] = inst_52393);

return statearr_52489;
})();
var statearr_52490_54245 = state_52452__$1;
(statearr_52490_54245[(2)] = null);

(statearr_52490_54245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (43))){
var state_52452__$1 = state_52452;
var statearr_52491_54246 = state_52452__$1;
(statearr_52491_54246[(2)] = null);

(statearr_52491_54246[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (29))){
var inst_52436 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52492_54247 = state_52452__$1;
(statearr_52492_54247[(2)] = inst_52436);

(statearr_52492_54247[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (44))){
var inst_52445 = (state_52452[(2)]);
var state_52452__$1 = (function (){var statearr_52493 = state_52452;
(statearr_52493[(28)] = inst_52445);

return statearr_52493;
})();
var statearr_52494_54249 = state_52452__$1;
(statearr_52494_54249[(2)] = null);

(statearr_52494_54249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (6))){
var inst_52384 = (state_52452[(29)]);
var inst_52383 = cljs.core.deref(cs);
var inst_52384__$1 = cljs.core.keys(inst_52383);
var inst_52385 = cljs.core.count(inst_52384__$1);
var inst_52386 = cljs.core.reset_BANG_(dctr,inst_52385);
var inst_52391 = cljs.core.seq(inst_52384__$1);
var inst_52392 = inst_52391;
var inst_52393 = null;
var inst_52394 = (0);
var inst_52395 = (0);
var state_52452__$1 = (function (){var statearr_52495 = state_52452;
(statearr_52495[(29)] = inst_52384__$1);

(statearr_52495[(20)] = inst_52392);

(statearr_52495[(21)] = inst_52394);

(statearr_52495[(11)] = inst_52395);

(statearr_52495[(12)] = inst_52393);

(statearr_52495[(30)] = inst_52386);

return statearr_52495;
})();
var statearr_52496_54250 = state_52452__$1;
(statearr_52496_54250[(2)] = null);

(statearr_52496_54250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (28))){
var inst_52392 = (state_52452[(20)]);
var inst_52411 = (state_52452[(25)]);
var inst_52411__$1 = cljs.core.seq(inst_52392);
var state_52452__$1 = (function (){var statearr_52497 = state_52452;
(statearr_52497[(25)] = inst_52411__$1);

return statearr_52497;
})();
if(inst_52411__$1){
var statearr_52498_54254 = state_52452__$1;
(statearr_52498_54254[(1)] = (33));

} else {
var statearr_52499_54255 = state_52452__$1;
(statearr_52499_54255[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (25))){
var inst_52394 = (state_52452[(21)]);
var inst_52395 = (state_52452[(11)]);
var inst_52397 = (inst_52395 < inst_52394);
var inst_52398 = inst_52397;
var state_52452__$1 = state_52452;
if(cljs.core.truth_(inst_52398)){
var statearr_52500_54256 = state_52452__$1;
(statearr_52500_54256[(1)] = (27));

} else {
var statearr_52501_54257 = state_52452__$1;
(statearr_52501_54257[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (34))){
var state_52452__$1 = state_52452;
var statearr_52502_54258 = state_52452__$1;
(statearr_52502_54258[(2)] = null);

(statearr_52502_54258[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (17))){
var state_52452__$1 = state_52452;
var statearr_52503_54260 = state_52452__$1;
(statearr_52503_54260[(2)] = null);

(statearr_52503_54260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (3))){
var inst_52450 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52452__$1,inst_52450);
} else {
if((state_val_52453 === (12))){
var inst_52379 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52504_54268 = state_52452__$1;
(statearr_52504_54268[(2)] = inst_52379);

(statearr_52504_54268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (2))){
var state_52452__$1 = state_52452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52452__$1,(4),ch);
} else {
if((state_val_52453 === (23))){
var state_52452__$1 = state_52452;
var statearr_52505_54271 = state_52452__$1;
(statearr_52505_54271[(2)] = null);

(statearr_52505_54271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (35))){
var inst_52434 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52506_54272 = state_52452__$1;
(statearr_52506_54272[(2)] = inst_52434);

(statearr_52506_54272[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (19))){
var inst_52351 = (state_52452[(7)]);
var inst_52355 = cljs.core.chunk_first(inst_52351);
var inst_52356 = cljs.core.chunk_rest(inst_52351);
var inst_52357 = cljs.core.count(inst_52355);
var inst_52329 = inst_52356;
var inst_52330 = inst_52355;
var inst_52331 = inst_52357;
var inst_52332 = (0);
var state_52452__$1 = (function (){var statearr_52507 = state_52452;
(statearr_52507[(13)] = inst_52329);

(statearr_52507[(14)] = inst_52330);

(statearr_52507[(15)] = inst_52331);

(statearr_52507[(16)] = inst_52332);

return statearr_52507;
})();
var statearr_52508_54275 = state_52452__$1;
(statearr_52508_54275[(2)] = null);

(statearr_52508_54275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (11))){
var inst_52329 = (state_52452[(13)]);
var inst_52351 = (state_52452[(7)]);
var inst_52351__$1 = cljs.core.seq(inst_52329);
var state_52452__$1 = (function (){var statearr_52509 = state_52452;
(statearr_52509[(7)] = inst_52351__$1);

return statearr_52509;
})();
if(inst_52351__$1){
var statearr_52510_54277 = state_52452__$1;
(statearr_52510_54277[(1)] = (16));

} else {
var statearr_52511_54278 = state_52452__$1;
(statearr_52511_54278[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (9))){
var inst_52381 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52512_54280 = state_52452__$1;
(statearr_52512_54280[(2)] = inst_52381);

(statearr_52512_54280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (5))){
var inst_52327 = cljs.core.deref(cs);
var inst_52328 = cljs.core.seq(inst_52327);
var inst_52329 = inst_52328;
var inst_52330 = null;
var inst_52331 = (0);
var inst_52332 = (0);
var state_52452__$1 = (function (){var statearr_52513 = state_52452;
(statearr_52513[(13)] = inst_52329);

(statearr_52513[(14)] = inst_52330);

(statearr_52513[(15)] = inst_52331);

(statearr_52513[(16)] = inst_52332);

return statearr_52513;
})();
var statearr_52514_54281 = state_52452__$1;
(statearr_52514_54281[(2)] = null);

(statearr_52514_54281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (14))){
var state_52452__$1 = state_52452;
var statearr_52515_54282 = state_52452__$1;
(statearr_52515_54282[(2)] = null);

(statearr_52515_54282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (45))){
var inst_52442 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52516_54283 = state_52452__$1;
(statearr_52516_54283[(2)] = inst_52442);

(statearr_52516_54283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (26))){
var inst_52384 = (state_52452[(29)]);
var inst_52438 = (state_52452[(2)]);
var inst_52439 = cljs.core.seq(inst_52384);
var state_52452__$1 = (function (){var statearr_52517 = state_52452;
(statearr_52517[(31)] = inst_52438);

return statearr_52517;
})();
if(inst_52439){
var statearr_52518_54285 = state_52452__$1;
(statearr_52518_54285[(1)] = (42));

} else {
var statearr_52519_54286 = state_52452__$1;
(statearr_52519_54286[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (16))){
var inst_52351 = (state_52452[(7)]);
var inst_52353 = cljs.core.chunked_seq_QMARK_(inst_52351);
var state_52452__$1 = state_52452;
if(inst_52353){
var statearr_52520_54293 = state_52452__$1;
(statearr_52520_54293[(1)] = (19));

} else {
var statearr_52521_54294 = state_52452__$1;
(statearr_52521_54294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (38))){
var inst_52431 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52522_54295 = state_52452__$1;
(statearr_52522_54295[(2)] = inst_52431);

(statearr_52522_54295[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (30))){
var state_52452__$1 = state_52452;
var statearr_52523_54297 = state_52452__$1;
(statearr_52523_54297[(2)] = null);

(statearr_52523_54297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (10))){
var inst_52330 = (state_52452[(14)]);
var inst_52332 = (state_52452[(16)]);
var inst_52340 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52330,inst_52332);
var inst_52341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52340,(0),null);
var inst_52342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52340,(1),null);
var state_52452__$1 = (function (){var statearr_52524 = state_52452;
(statearr_52524[(26)] = inst_52341);

return statearr_52524;
})();
if(cljs.core.truth_(inst_52342)){
var statearr_52525_54299 = state_52452__$1;
(statearr_52525_54299[(1)] = (13));

} else {
var statearr_52526_54300 = state_52452__$1;
(statearr_52526_54300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (18))){
var inst_52377 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52527_54301 = state_52452__$1;
(statearr_52527_54301[(2)] = inst_52377);

(statearr_52527_54301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (42))){
var state_52452__$1 = state_52452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52452__$1,(45),dchan);
} else {
if((state_val_52453 === (37))){
var inst_52320 = (state_52452[(9)]);
var inst_52420 = (state_52452[(23)]);
var inst_52411 = (state_52452[(25)]);
var inst_52420__$1 = cljs.core.first(inst_52411);
var inst_52421 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52420__$1,inst_52320,done);
var state_52452__$1 = (function (){var statearr_52528 = state_52452;
(statearr_52528[(23)] = inst_52420__$1);

return statearr_52528;
})();
if(cljs.core.truth_(inst_52421)){
var statearr_52529_54302 = state_52452__$1;
(statearr_52529_54302[(1)] = (39));

} else {
var statearr_52530_54303 = state_52452__$1;
(statearr_52530_54303[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (8))){
var inst_52331 = (state_52452[(15)]);
var inst_52332 = (state_52452[(16)]);
var inst_52334 = (inst_52332 < inst_52331);
var inst_52335 = inst_52334;
var state_52452__$1 = state_52452;
if(cljs.core.truth_(inst_52335)){
var statearr_52531_54304 = state_52452__$1;
(statearr_52531_54304[(1)] = (10));

} else {
var statearr_52532_54305 = state_52452__$1;
(statearr_52532_54305[(1)] = (11));

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
});})(c__51859__auto___54160,cs,m,dchan,dctr,done))
;
return ((function (switch__51723__auto__,c__51859__auto___54160,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__51724__auto__ = null;
var cljs$core$async$mult_$_state_machine__51724__auto____0 = (function (){
var statearr_52533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52533[(0)] = cljs$core$async$mult_$_state_machine__51724__auto__);

(statearr_52533[(1)] = (1));

return statearr_52533;
});
var cljs$core$async$mult_$_state_machine__51724__auto____1 = (function (state_52452){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52452);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52534){if((e52534 instanceof Object)){
var ex__51727__auto__ = e52534;
var statearr_52535_54317 = state_52452;
(statearr_52535_54317[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52534;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54318 = state_52452;
state_52452 = G__54318;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51724__auto__ = function(state_52452){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51724__auto____1.call(this,state_52452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51724__auto____0;
cljs$core$async$mult_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51724__auto____1;
return cljs$core$async$mult_$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54160,cs,m,dchan,dctr,done))
})();
var state__51861__auto__ = (function (){var statearr_52536 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52536[(6)] = c__51859__auto___54160);

return statearr_52536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54160,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52538 = arguments.length;
switch (G__52538) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54324 = arguments.length;
var i__4731__auto___54326 = (0);
while(true){
if((i__4731__auto___54326 < len__4730__auto___54324)){
args__4736__auto__.push((arguments[i__4731__auto___54326]));

var G__54327 = (i__4731__auto___54326 + (1));
i__4731__auto___54326 = G__54327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52543){
var map__52544 = p__52543;
var map__52544__$1 = (((((!((map__52544 == null))))?(((((map__52544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52544):map__52544);
var opts = map__52544__$1;
var statearr_52546_54333 = state;
(statearr_52546_54333[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts(((function (map__52544,map__52544__$1,opts){
return (function (val){
var statearr_52547_54334 = state;
(statearr_52547_54334[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__52544,map__52544__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_52548_54335 = state;
(statearr_52548_54335[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52539){
var G__52540 = cljs.core.first(seq52539);
var seq52539__$1 = cljs.core.next(seq52539);
var G__52541 = cljs.core.first(seq52539__$1);
var seq52539__$2 = cljs.core.next(seq52539__$1);
var G__52542 = cljs.core.first(seq52539__$2);
var seq52539__$3 = cljs.core.next(seq52539__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52540,G__52541,G__52542,seq52539__$3);
});

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52549 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52550){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52550 = meta52550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52551,meta52550__$1){
var self__ = this;
var _52551__$1 = this;
return (new cljs.core.async.t_cljs$core$async52549(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52550__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52551){
var self__ = this;
var _52551__$1 = this;
return self__.meta52550;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52550","meta52550",1157589866,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52549";

cljs.core.async.t_cljs$core$async52549.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52549");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52549.
 */
cljs.core.async.__GT_t_cljs$core$async52549 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52549(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52550){
return (new cljs.core.async.t_cljs$core$async52549(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52550));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52549(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51859__auto___54355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52653){
var state_val_52654 = (state_52653[(1)]);
if((state_val_52654 === (7))){
var inst_52568 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
var statearr_52655_54357 = state_52653__$1;
(statearr_52655_54357[(2)] = inst_52568);

(statearr_52655_54357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (20))){
var inst_52580 = (state_52653[(7)]);
var state_52653__$1 = state_52653;
var statearr_52656_54358 = state_52653__$1;
(statearr_52656_54358[(2)] = inst_52580);

(statearr_52656_54358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (27))){
var state_52653__$1 = state_52653;
var statearr_52657_54359 = state_52653__$1;
(statearr_52657_54359[(2)] = null);

(statearr_52657_54359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (1))){
var inst_52555 = (state_52653[(8)]);
var inst_52555__$1 = calc_state();
var inst_52557 = (inst_52555__$1 == null);
var inst_52558 = cljs.core.not(inst_52557);
var state_52653__$1 = (function (){var statearr_52658 = state_52653;
(statearr_52658[(8)] = inst_52555__$1);

return statearr_52658;
})();
if(inst_52558){
var statearr_52659_54362 = state_52653__$1;
(statearr_52659_54362[(1)] = (2));

} else {
var statearr_52660_54363 = state_52653__$1;
(statearr_52660_54363[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (24))){
var inst_52604 = (state_52653[(9)]);
var inst_52627 = (state_52653[(10)]);
var inst_52613 = (state_52653[(11)]);
var inst_52627__$1 = (inst_52604.cljs$core$IFn$_invoke$arity$1 ? inst_52604.cljs$core$IFn$_invoke$arity$1(inst_52613) : inst_52604.call(null,inst_52613));
var state_52653__$1 = (function (){var statearr_52661 = state_52653;
(statearr_52661[(10)] = inst_52627__$1);

return statearr_52661;
})();
if(cljs.core.truth_(inst_52627__$1)){
var statearr_52662_54366 = state_52653__$1;
(statearr_52662_54366[(1)] = (29));

} else {
var statearr_52663_54367 = state_52653__$1;
(statearr_52663_54367[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (4))){
var inst_52571 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
if(cljs.core.truth_(inst_52571)){
var statearr_52664_54368 = state_52653__$1;
(statearr_52664_54368[(1)] = (8));

} else {
var statearr_52665_54369 = state_52653__$1;
(statearr_52665_54369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (15))){
var inst_52598 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
if(cljs.core.truth_(inst_52598)){
var statearr_52666_54370 = state_52653__$1;
(statearr_52666_54370[(1)] = (19));

} else {
var statearr_52667_54372 = state_52653__$1;
(statearr_52667_54372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (21))){
var inst_52603 = (state_52653[(12)]);
var inst_52603__$1 = (state_52653[(2)]);
var inst_52604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52603__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52603__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52603__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52653__$1 = (function (){var statearr_52668 = state_52653;
(statearr_52668[(12)] = inst_52603__$1);

(statearr_52668[(13)] = inst_52605);

(statearr_52668[(9)] = inst_52604);

return statearr_52668;
})();
return cljs.core.async.ioc_alts_BANG_(state_52653__$1,(22),inst_52606);
} else {
if((state_val_52654 === (31))){
var inst_52635 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
if(cljs.core.truth_(inst_52635)){
var statearr_52669_54375 = state_52653__$1;
(statearr_52669_54375[(1)] = (32));

} else {
var statearr_52670_54376 = state_52653__$1;
(statearr_52670_54376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (32))){
var inst_52612 = (state_52653[(14)]);
var state_52653__$1 = state_52653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52653__$1,(35),out,inst_52612);
} else {
if((state_val_52654 === (33))){
var inst_52603 = (state_52653[(12)]);
var inst_52580 = inst_52603;
var state_52653__$1 = (function (){var statearr_52671 = state_52653;
(statearr_52671[(7)] = inst_52580);

return statearr_52671;
})();
var statearr_52672_54381 = state_52653__$1;
(statearr_52672_54381[(2)] = null);

(statearr_52672_54381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (13))){
var inst_52580 = (state_52653[(7)]);
var inst_52587 = inst_52580.cljs$lang$protocol_mask$partition0$;
var inst_52588 = (inst_52587 & (64));
var inst_52589 = inst_52580.cljs$core$ISeq$;
var inst_52590 = (cljs.core.PROTOCOL_SENTINEL === inst_52589);
var inst_52591 = ((inst_52588) || (inst_52590));
var state_52653__$1 = state_52653;
if(cljs.core.truth_(inst_52591)){
var statearr_52673_54382 = state_52653__$1;
(statearr_52673_54382[(1)] = (16));

} else {
var statearr_52674_54383 = state_52653__$1;
(statearr_52674_54383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (22))){
var inst_52612 = (state_52653[(14)]);
var inst_52613 = (state_52653[(11)]);
var inst_52611 = (state_52653[(2)]);
var inst_52612__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52611,(0),null);
var inst_52613__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52611,(1),null);
var inst_52614 = (inst_52612__$1 == null);
var inst_52615 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52613__$1,change);
var inst_52616 = ((inst_52614) || (inst_52615));
var state_52653__$1 = (function (){var statearr_52675 = state_52653;
(statearr_52675[(14)] = inst_52612__$1);

(statearr_52675[(11)] = inst_52613__$1);

return statearr_52675;
})();
if(cljs.core.truth_(inst_52616)){
var statearr_52676_54384 = state_52653__$1;
(statearr_52676_54384[(1)] = (23));

} else {
var statearr_52677_54385 = state_52653__$1;
(statearr_52677_54385[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (36))){
var inst_52603 = (state_52653[(12)]);
var inst_52580 = inst_52603;
var state_52653__$1 = (function (){var statearr_52678 = state_52653;
(statearr_52678[(7)] = inst_52580);

return statearr_52678;
})();
var statearr_52679_54388 = state_52653__$1;
(statearr_52679_54388[(2)] = null);

(statearr_52679_54388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (29))){
var inst_52627 = (state_52653[(10)]);
var state_52653__$1 = state_52653;
var statearr_52680_54390 = state_52653__$1;
(statearr_52680_54390[(2)] = inst_52627);

(statearr_52680_54390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (6))){
var state_52653__$1 = state_52653;
var statearr_52681_54393 = state_52653__$1;
(statearr_52681_54393[(2)] = false);

(statearr_52681_54393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (28))){
var inst_52623 = (state_52653[(2)]);
var inst_52624 = calc_state();
var inst_52580 = inst_52624;
var state_52653__$1 = (function (){var statearr_52682 = state_52653;
(statearr_52682[(15)] = inst_52623);

(statearr_52682[(7)] = inst_52580);

return statearr_52682;
})();
var statearr_52683_54394 = state_52653__$1;
(statearr_52683_54394[(2)] = null);

(statearr_52683_54394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (25))){
var inst_52649 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
var statearr_52684_54395 = state_52653__$1;
(statearr_52684_54395[(2)] = inst_52649);

(statearr_52684_54395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (34))){
var inst_52647 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
var statearr_52685_54398 = state_52653__$1;
(statearr_52685_54398[(2)] = inst_52647);

(statearr_52685_54398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (17))){
var state_52653__$1 = state_52653;
var statearr_52686_54399 = state_52653__$1;
(statearr_52686_54399[(2)] = false);

(statearr_52686_54399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (3))){
var state_52653__$1 = state_52653;
var statearr_52687_54400 = state_52653__$1;
(statearr_52687_54400[(2)] = false);

(statearr_52687_54400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (12))){
var inst_52651 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52653__$1,inst_52651);
} else {
if((state_val_52654 === (2))){
var inst_52555 = (state_52653[(8)]);
var inst_52560 = inst_52555.cljs$lang$protocol_mask$partition0$;
var inst_52561 = (inst_52560 & (64));
var inst_52562 = inst_52555.cljs$core$ISeq$;
var inst_52563 = (cljs.core.PROTOCOL_SENTINEL === inst_52562);
var inst_52564 = ((inst_52561) || (inst_52563));
var state_52653__$1 = state_52653;
if(cljs.core.truth_(inst_52564)){
var statearr_52688_54401 = state_52653__$1;
(statearr_52688_54401[(1)] = (5));

} else {
var statearr_52689_54402 = state_52653__$1;
(statearr_52689_54402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (23))){
var inst_52612 = (state_52653[(14)]);
var inst_52618 = (inst_52612 == null);
var state_52653__$1 = state_52653;
if(cljs.core.truth_(inst_52618)){
var statearr_52690_54404 = state_52653__$1;
(statearr_52690_54404[(1)] = (26));

} else {
var statearr_52691_54405 = state_52653__$1;
(statearr_52691_54405[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (35))){
var inst_52638 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
if(cljs.core.truth_(inst_52638)){
var statearr_52692_54406 = state_52653__$1;
(statearr_52692_54406[(1)] = (36));

} else {
var statearr_52693_54407 = state_52653__$1;
(statearr_52693_54407[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (19))){
var inst_52580 = (state_52653[(7)]);
var inst_52600 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52580);
var state_52653__$1 = state_52653;
var statearr_52694_54408 = state_52653__$1;
(statearr_52694_54408[(2)] = inst_52600);

(statearr_52694_54408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (11))){
var inst_52580 = (state_52653[(7)]);
var inst_52584 = (inst_52580 == null);
var inst_52585 = cljs.core.not(inst_52584);
var state_52653__$1 = state_52653;
if(inst_52585){
var statearr_52695_54409 = state_52653__$1;
(statearr_52695_54409[(1)] = (13));

} else {
var statearr_52696_54410 = state_52653__$1;
(statearr_52696_54410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (9))){
var inst_52555 = (state_52653[(8)]);
var state_52653__$1 = state_52653;
var statearr_52697_54411 = state_52653__$1;
(statearr_52697_54411[(2)] = inst_52555);

(statearr_52697_54411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (5))){
var state_52653__$1 = state_52653;
var statearr_52698_54412 = state_52653__$1;
(statearr_52698_54412[(2)] = true);

(statearr_52698_54412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (14))){
var state_52653__$1 = state_52653;
var statearr_52699_54413 = state_52653__$1;
(statearr_52699_54413[(2)] = false);

(statearr_52699_54413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (26))){
var inst_52613 = (state_52653[(11)]);
var inst_52620 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52613);
var state_52653__$1 = state_52653;
var statearr_52700_54423 = state_52653__$1;
(statearr_52700_54423[(2)] = inst_52620);

(statearr_52700_54423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (16))){
var state_52653__$1 = state_52653;
var statearr_52701_54424 = state_52653__$1;
(statearr_52701_54424[(2)] = true);

(statearr_52701_54424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (38))){
var inst_52643 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
var statearr_52702_54425 = state_52653__$1;
(statearr_52702_54425[(2)] = inst_52643);

(statearr_52702_54425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (30))){
var inst_52605 = (state_52653[(13)]);
var inst_52604 = (state_52653[(9)]);
var inst_52613 = (state_52653[(11)]);
var inst_52630 = cljs.core.empty_QMARK_(inst_52604);
var inst_52631 = (inst_52605.cljs$core$IFn$_invoke$arity$1 ? inst_52605.cljs$core$IFn$_invoke$arity$1(inst_52613) : inst_52605.call(null,inst_52613));
var inst_52632 = cljs.core.not(inst_52631);
var inst_52633 = ((inst_52630) && (inst_52632));
var state_52653__$1 = state_52653;
var statearr_52703_54426 = state_52653__$1;
(statearr_52703_54426[(2)] = inst_52633);

(statearr_52703_54426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (10))){
var inst_52555 = (state_52653[(8)]);
var inst_52576 = (state_52653[(2)]);
var inst_52577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52576,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52576,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52576,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52580 = inst_52555;
var state_52653__$1 = (function (){var statearr_52704 = state_52653;
(statearr_52704[(16)] = inst_52577);

(statearr_52704[(17)] = inst_52579);

(statearr_52704[(18)] = inst_52578);

(statearr_52704[(7)] = inst_52580);

return statearr_52704;
})();
var statearr_52705_54427 = state_52653__$1;
(statearr_52705_54427[(2)] = null);

(statearr_52705_54427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (18))){
var inst_52595 = (state_52653[(2)]);
var state_52653__$1 = state_52653;
var statearr_52706_54428 = state_52653__$1;
(statearr_52706_54428[(2)] = inst_52595);

(statearr_52706_54428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (37))){
var state_52653__$1 = state_52653;
var statearr_52707_54429 = state_52653__$1;
(statearr_52707_54429[(2)] = null);

(statearr_52707_54429[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52654 === (8))){
var inst_52555 = (state_52653[(8)]);
var inst_52573 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52555);
var state_52653__$1 = state_52653;
var statearr_52708_54432 = state_52653__$1;
(statearr_52708_54432[(2)] = inst_52573);

(statearr_52708_54432[(1)] = (10));


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
});})(c__51859__auto___54355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__51723__auto__,c__51859__auto___54355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__51724__auto__ = null;
var cljs$core$async$mix_$_state_machine__51724__auto____0 = (function (){
var statearr_52709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52709[(0)] = cljs$core$async$mix_$_state_machine__51724__auto__);

(statearr_52709[(1)] = (1));

return statearr_52709;
});
var cljs$core$async$mix_$_state_machine__51724__auto____1 = (function (state_52653){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52653);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52710){if((e52710 instanceof Object)){
var ex__51727__auto__ = e52710;
var statearr_52711_54441 = state_52653;
(statearr_52711_54441[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54442 = state_52653;
state_52653 = G__54442;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51724__auto__ = function(state_52653){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51724__auto____1.call(this,state_52653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51724__auto____0;
cljs$core$async$mix_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51724__auto____1;
return cljs$core$async$mix_$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51861__auto__ = (function (){var statearr_52712 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52712[(6)] = c__51859__auto___54355);

return statearr_52712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54355,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52714 = arguments.length;
switch (G__52714) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__52717 = arguments.length;
switch (G__52717) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__52715_SHARP_){
if(cljs.core.truth_((p1__52715_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52715_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52715_SHARP_.call(null,topic)))){
return p1__52715_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52715_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52718 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52719){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52719 = meta52719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52720,meta52719__$1){
var self__ = this;
var _52720__$1 = this;
return (new cljs.core.async.t_cljs$core$async52718(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52719__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52720){
var self__ = this;
var _52720__$1 = this;
return self__.meta52719;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52719","meta52719",-1274090044,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52718";

cljs.core.async.t_cljs$core$async52718.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52718");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52718.
 */
cljs.core.async.__GT_t_cljs$core$async52718 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async52718(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52719){
return (new cljs.core.async.t_cljs$core$async52718(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52719));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async52718(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51859__auto___54475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54475,mults,ensure_mult,p){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54475,mults,ensure_mult,p){
return (function (state_52792){
var state_val_52793 = (state_52792[(1)]);
if((state_val_52793 === (7))){
var inst_52788 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
var statearr_52794_54476 = state_52792__$1;
(statearr_52794_54476[(2)] = inst_52788);

(statearr_52794_54476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (20))){
var state_52792__$1 = state_52792;
var statearr_52795_54477 = state_52792__$1;
(statearr_52795_54477[(2)] = null);

(statearr_52795_54477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (1))){
var state_52792__$1 = state_52792;
var statearr_52796_54478 = state_52792__$1;
(statearr_52796_54478[(2)] = null);

(statearr_52796_54478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (24))){
var inst_52771 = (state_52792[(7)]);
var inst_52780 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52771);
var state_52792__$1 = state_52792;
var statearr_52797_54479 = state_52792__$1;
(statearr_52797_54479[(2)] = inst_52780);

(statearr_52797_54479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (4))){
var inst_52723 = (state_52792[(8)]);
var inst_52723__$1 = (state_52792[(2)]);
var inst_52724 = (inst_52723__$1 == null);
var state_52792__$1 = (function (){var statearr_52798 = state_52792;
(statearr_52798[(8)] = inst_52723__$1);

return statearr_52798;
})();
if(cljs.core.truth_(inst_52724)){
var statearr_52799_54485 = state_52792__$1;
(statearr_52799_54485[(1)] = (5));

} else {
var statearr_52800_54486 = state_52792__$1;
(statearr_52800_54486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (15))){
var inst_52765 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
var statearr_52801_54487 = state_52792__$1;
(statearr_52801_54487[(2)] = inst_52765);

(statearr_52801_54487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (21))){
var inst_52785 = (state_52792[(2)]);
var state_52792__$1 = (function (){var statearr_52802 = state_52792;
(statearr_52802[(9)] = inst_52785);

return statearr_52802;
})();
var statearr_52803_54490 = state_52792__$1;
(statearr_52803_54490[(2)] = null);

(statearr_52803_54490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (13))){
var inst_52747 = (state_52792[(10)]);
var inst_52749 = cljs.core.chunked_seq_QMARK_(inst_52747);
var state_52792__$1 = state_52792;
if(inst_52749){
var statearr_52804_54491 = state_52792__$1;
(statearr_52804_54491[(1)] = (16));

} else {
var statearr_52805_54492 = state_52792__$1;
(statearr_52805_54492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (22))){
var inst_52777 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
if(cljs.core.truth_(inst_52777)){
var statearr_52806_54493 = state_52792__$1;
(statearr_52806_54493[(1)] = (23));

} else {
var statearr_52807_54494 = state_52792__$1;
(statearr_52807_54494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (6))){
var inst_52771 = (state_52792[(7)]);
var inst_52773 = (state_52792[(11)]);
var inst_52723 = (state_52792[(8)]);
var inst_52771__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52723) : topic_fn.call(null,inst_52723));
var inst_52772 = cljs.core.deref(mults);
var inst_52773__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52772,inst_52771__$1);
var state_52792__$1 = (function (){var statearr_52808 = state_52792;
(statearr_52808[(7)] = inst_52771__$1);

(statearr_52808[(11)] = inst_52773__$1);

return statearr_52808;
})();
if(cljs.core.truth_(inst_52773__$1)){
var statearr_52809_54501 = state_52792__$1;
(statearr_52809_54501[(1)] = (19));

} else {
var statearr_52810_54503 = state_52792__$1;
(statearr_52810_54503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (25))){
var inst_52782 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
var statearr_52811_54505 = state_52792__$1;
(statearr_52811_54505[(2)] = inst_52782);

(statearr_52811_54505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (17))){
var inst_52747 = (state_52792[(10)]);
var inst_52756 = cljs.core.first(inst_52747);
var inst_52757 = cljs.core.async.muxch_STAR_(inst_52756);
var inst_52758 = cljs.core.async.close_BANG_(inst_52757);
var inst_52759 = cljs.core.next(inst_52747);
var inst_52733 = inst_52759;
var inst_52734 = null;
var inst_52735 = (0);
var inst_52736 = (0);
var state_52792__$1 = (function (){var statearr_52812 = state_52792;
(statearr_52812[(12)] = inst_52758);

(statearr_52812[(13)] = inst_52733);

(statearr_52812[(14)] = inst_52736);

(statearr_52812[(15)] = inst_52734);

(statearr_52812[(16)] = inst_52735);

return statearr_52812;
})();
var statearr_52813_54507 = state_52792__$1;
(statearr_52813_54507[(2)] = null);

(statearr_52813_54507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (3))){
var inst_52790 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52792__$1,inst_52790);
} else {
if((state_val_52793 === (12))){
var inst_52767 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
var statearr_52814_54509 = state_52792__$1;
(statearr_52814_54509[(2)] = inst_52767);

(statearr_52814_54509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (2))){
var state_52792__$1 = state_52792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52792__$1,(4),ch);
} else {
if((state_val_52793 === (23))){
var state_52792__$1 = state_52792;
var statearr_52815_54511 = state_52792__$1;
(statearr_52815_54511[(2)] = null);

(statearr_52815_54511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (19))){
var inst_52773 = (state_52792[(11)]);
var inst_52723 = (state_52792[(8)]);
var inst_52775 = cljs.core.async.muxch_STAR_(inst_52773);
var state_52792__$1 = state_52792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52792__$1,(22),inst_52775,inst_52723);
} else {
if((state_val_52793 === (11))){
var inst_52747 = (state_52792[(10)]);
var inst_52733 = (state_52792[(13)]);
var inst_52747__$1 = cljs.core.seq(inst_52733);
var state_52792__$1 = (function (){var statearr_52816 = state_52792;
(statearr_52816[(10)] = inst_52747__$1);

return statearr_52816;
})();
if(inst_52747__$1){
var statearr_52817_54517 = state_52792__$1;
(statearr_52817_54517[(1)] = (13));

} else {
var statearr_52818_54518 = state_52792__$1;
(statearr_52818_54518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (9))){
var inst_52769 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
var statearr_52819_54519 = state_52792__$1;
(statearr_52819_54519[(2)] = inst_52769);

(statearr_52819_54519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (5))){
var inst_52730 = cljs.core.deref(mults);
var inst_52731 = cljs.core.vals(inst_52730);
var inst_52732 = cljs.core.seq(inst_52731);
var inst_52733 = inst_52732;
var inst_52734 = null;
var inst_52735 = (0);
var inst_52736 = (0);
var state_52792__$1 = (function (){var statearr_52820 = state_52792;
(statearr_52820[(13)] = inst_52733);

(statearr_52820[(14)] = inst_52736);

(statearr_52820[(15)] = inst_52734);

(statearr_52820[(16)] = inst_52735);

return statearr_52820;
})();
var statearr_52821_54520 = state_52792__$1;
(statearr_52821_54520[(2)] = null);

(statearr_52821_54520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (14))){
var state_52792__$1 = state_52792;
var statearr_52825_54521 = state_52792__$1;
(statearr_52825_54521[(2)] = null);

(statearr_52825_54521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (16))){
var inst_52747 = (state_52792[(10)]);
var inst_52751 = cljs.core.chunk_first(inst_52747);
var inst_52752 = cljs.core.chunk_rest(inst_52747);
var inst_52753 = cljs.core.count(inst_52751);
var inst_52733 = inst_52752;
var inst_52734 = inst_52751;
var inst_52735 = inst_52753;
var inst_52736 = (0);
var state_52792__$1 = (function (){var statearr_52826 = state_52792;
(statearr_52826[(13)] = inst_52733);

(statearr_52826[(14)] = inst_52736);

(statearr_52826[(15)] = inst_52734);

(statearr_52826[(16)] = inst_52735);

return statearr_52826;
})();
var statearr_52827_54522 = state_52792__$1;
(statearr_52827_54522[(2)] = null);

(statearr_52827_54522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (10))){
var inst_52733 = (state_52792[(13)]);
var inst_52736 = (state_52792[(14)]);
var inst_52734 = (state_52792[(15)]);
var inst_52735 = (state_52792[(16)]);
var inst_52741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52734,inst_52736);
var inst_52742 = cljs.core.async.muxch_STAR_(inst_52741);
var inst_52743 = cljs.core.async.close_BANG_(inst_52742);
var inst_52744 = (inst_52736 + (1));
var tmp52822 = inst_52733;
var tmp52823 = inst_52734;
var tmp52824 = inst_52735;
var inst_52733__$1 = tmp52822;
var inst_52734__$1 = tmp52823;
var inst_52735__$1 = tmp52824;
var inst_52736__$1 = inst_52744;
var state_52792__$1 = (function (){var statearr_52828 = state_52792;
(statearr_52828[(17)] = inst_52743);

(statearr_52828[(13)] = inst_52733__$1);

(statearr_52828[(14)] = inst_52736__$1);

(statearr_52828[(15)] = inst_52734__$1);

(statearr_52828[(16)] = inst_52735__$1);

return statearr_52828;
})();
var statearr_52829_54524 = state_52792__$1;
(statearr_52829_54524[(2)] = null);

(statearr_52829_54524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (18))){
var inst_52762 = (state_52792[(2)]);
var state_52792__$1 = state_52792;
var statearr_52830_54525 = state_52792__$1;
(statearr_52830_54525[(2)] = inst_52762);

(statearr_52830_54525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52793 === (8))){
var inst_52736 = (state_52792[(14)]);
var inst_52735 = (state_52792[(16)]);
var inst_52738 = (inst_52736 < inst_52735);
var inst_52739 = inst_52738;
var state_52792__$1 = state_52792;
if(cljs.core.truth_(inst_52739)){
var statearr_52831_54526 = state_52792__$1;
(statearr_52831_54526[(1)] = (10));

} else {
var statearr_52832_54527 = state_52792__$1;
(statearr_52832_54527[(1)] = (11));

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
});})(c__51859__auto___54475,mults,ensure_mult,p))
;
return ((function (switch__51723__auto__,c__51859__auto___54475,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_52833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52833[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_52833[(1)] = (1));

return statearr_52833;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_52792){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52792);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52834){if((e52834 instanceof Object)){
var ex__51727__auto__ = e52834;
var statearr_52835_54529 = state_52792;
(statearr_52835_54529[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54532 = state_52792;
state_52792 = G__54532;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_52792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_52792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54475,mults,ensure_mult,p))
})();
var state__51861__auto__ = (function (){var statearr_52836 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52836[(6)] = c__51859__auto___54475);

return statearr_52836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54475,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52838 = arguments.length;
switch (G__52838) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__52840 = arguments.length;
switch (G__52840) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__52842 = arguments.length;
switch (G__52842) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__51859__auto___54558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52881){
var state_val_52882 = (state_52881[(1)]);
if((state_val_52882 === (7))){
var state_52881__$1 = state_52881;
var statearr_52883_54559 = state_52881__$1;
(statearr_52883_54559[(2)] = null);

(statearr_52883_54559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (1))){
var state_52881__$1 = state_52881;
var statearr_52884_54561 = state_52881__$1;
(statearr_52884_54561[(2)] = null);

(statearr_52884_54561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (4))){
var inst_52845 = (state_52881[(7)]);
var inst_52847 = (inst_52845 < cnt);
var state_52881__$1 = state_52881;
if(cljs.core.truth_(inst_52847)){
var statearr_52885_54562 = state_52881__$1;
(statearr_52885_54562[(1)] = (6));

} else {
var statearr_52886_54563 = state_52881__$1;
(statearr_52886_54563[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (15))){
var inst_52877 = (state_52881[(2)]);
var state_52881__$1 = state_52881;
var statearr_52887_54564 = state_52881__$1;
(statearr_52887_54564[(2)] = inst_52877);

(statearr_52887_54564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (13))){
var inst_52870 = cljs.core.async.close_BANG_(out);
var state_52881__$1 = state_52881;
var statearr_52888_54566 = state_52881__$1;
(statearr_52888_54566[(2)] = inst_52870);

(statearr_52888_54566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (6))){
var state_52881__$1 = state_52881;
var statearr_52889_54567 = state_52881__$1;
(statearr_52889_54567[(2)] = null);

(statearr_52889_54567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (3))){
var inst_52879 = (state_52881[(2)]);
var state_52881__$1 = state_52881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52881__$1,inst_52879);
} else {
if((state_val_52882 === (12))){
var inst_52867 = (state_52881[(8)]);
var inst_52867__$1 = (state_52881[(2)]);
var inst_52868 = cljs.core.some(cljs.core.nil_QMARK_,inst_52867__$1);
var state_52881__$1 = (function (){var statearr_52894 = state_52881;
(statearr_52894[(8)] = inst_52867__$1);

return statearr_52894;
})();
if(cljs.core.truth_(inst_52868)){
var statearr_52895_54569 = state_52881__$1;
(statearr_52895_54569[(1)] = (13));

} else {
var statearr_52896_54570 = state_52881__$1;
(statearr_52896_54570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (2))){
var inst_52844 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52845 = (0);
var state_52881__$1 = (function (){var statearr_52897 = state_52881;
(statearr_52897[(7)] = inst_52845);

(statearr_52897[(9)] = inst_52844);

return statearr_52897;
})();
var statearr_52898_54572 = state_52881__$1;
(statearr_52898_54572[(2)] = null);

(statearr_52898_54572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (11))){
var inst_52845 = (state_52881[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52881,(10),Object,null,(9));
var inst_52854 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52845) : chs__$1.call(null,inst_52845));
var inst_52855 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52845) : done.call(null,inst_52845));
var inst_52856 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52854,inst_52855);
var state_52881__$1 = state_52881;
var statearr_52900_54577 = state_52881__$1;
(statearr_52900_54577[(2)] = inst_52856);


cljs.core.async.impl.ioc_helpers.process_exception(state_52881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (9))){
var inst_52845 = (state_52881[(7)]);
var inst_52858 = (state_52881[(2)]);
var inst_52859 = (inst_52845 + (1));
var inst_52845__$1 = inst_52859;
var state_52881__$1 = (function (){var statearr_52903 = state_52881;
(statearr_52903[(7)] = inst_52845__$1);

(statearr_52903[(10)] = inst_52858);

return statearr_52903;
})();
var statearr_52904_54579 = state_52881__$1;
(statearr_52904_54579[(2)] = null);

(statearr_52904_54579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (5))){
var inst_52865 = (state_52881[(2)]);
var state_52881__$1 = (function (){var statearr_52905 = state_52881;
(statearr_52905[(11)] = inst_52865);

return statearr_52905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52881__$1,(12),dchan);
} else {
if((state_val_52882 === (14))){
var inst_52867 = (state_52881[(8)]);
var inst_52872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52867);
var state_52881__$1 = state_52881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52881__$1,(16),out,inst_52872);
} else {
if((state_val_52882 === (16))){
var inst_52874 = (state_52881[(2)]);
var state_52881__$1 = (function (){var statearr_52906 = state_52881;
(statearr_52906[(12)] = inst_52874);

return statearr_52906;
})();
var statearr_52907_54580 = state_52881__$1;
(statearr_52907_54580[(2)] = null);

(statearr_52907_54580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (10))){
var inst_52849 = (state_52881[(2)]);
var inst_52850 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52881__$1 = (function (){var statearr_52909 = state_52881;
(statearr_52909[(13)] = inst_52849);

return statearr_52909;
})();
var statearr_52913_54582 = state_52881__$1;
(statearr_52913_54582[(2)] = inst_52850);


cljs.core.async.impl.ioc_helpers.process_exception(state_52881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52882 === (8))){
var inst_52863 = (state_52881[(2)]);
var state_52881__$1 = state_52881;
var statearr_52914_54583 = state_52881__$1;
(statearr_52914_54583[(2)] = inst_52863);

(statearr_52914_54583[(1)] = (5));


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
});})(c__51859__auto___54558,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__51723__auto__,c__51859__auto___54558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_52919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52919[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_52919[(1)] = (1));

return statearr_52919;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_52881){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52881);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e52923){if((e52923 instanceof Object)){
var ex__51727__auto__ = e52923;
var statearr_52924_54588 = state_52881;
(statearr_52924_54588[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54589 = state_52881;
state_52881 = G__54589;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_52881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_52881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54558,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51861__auto__ = (function (){var statearr_52929 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_52929[(6)] = c__51859__auto___54558);

return statearr_52929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54558,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52932 = arguments.length;
switch (G__52932) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51859__auto___54591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54591,out){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54591,out){
return (function (state_52977){
var state_val_52978 = (state_52977[(1)]);
if((state_val_52978 === (7))){
var inst_52948 = (state_52977[(7)]);
var inst_52947 = (state_52977[(8)]);
var inst_52947__$1 = (state_52977[(2)]);
var inst_52948__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52947__$1,(0),null);
var inst_52949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52947__$1,(1),null);
var inst_52950 = (inst_52948__$1 == null);
var state_52977__$1 = (function (){var statearr_52981 = state_52977;
(statearr_52981[(7)] = inst_52948__$1);

(statearr_52981[(9)] = inst_52949);

(statearr_52981[(8)] = inst_52947__$1);

return statearr_52981;
})();
if(cljs.core.truth_(inst_52950)){
var statearr_52982_54593 = state_52977__$1;
(statearr_52982_54593[(1)] = (8));

} else {
var statearr_52987_54594 = state_52977__$1;
(statearr_52987_54594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52978 === (1))){
var inst_52937 = cljs.core.vec(chs);
var inst_52938 = inst_52937;
var state_52977__$1 = (function (){var statearr_52989 = state_52977;
(statearr_52989[(10)] = inst_52938);

return statearr_52989;
})();
var statearr_52991_54595 = state_52977__$1;
(statearr_52991_54595[(2)] = null);

(statearr_52991_54595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52978 === (4))){
var inst_52938 = (state_52977[(10)]);
var state_52977__$1 = state_52977;
return cljs.core.async.ioc_alts_BANG_(state_52977__$1,(7),inst_52938);
} else {
if((state_val_52978 === (6))){
var inst_52969 = (state_52977[(2)]);
var state_52977__$1 = state_52977;
var statearr_52992_54596 = state_52977__$1;
(statearr_52992_54596[(2)] = inst_52969);

(statearr_52992_54596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52978 === (3))){
var inst_52971 = (state_52977[(2)]);
var state_52977__$1 = state_52977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52977__$1,inst_52971);
} else {
if((state_val_52978 === (2))){
var inst_52938 = (state_52977[(10)]);
var inst_52940 = cljs.core.count(inst_52938);
var inst_52941 = (inst_52940 > (0));
var state_52977__$1 = state_52977;
if(cljs.core.truth_(inst_52941)){
var statearr_53003_54597 = state_52977__$1;
(statearr_53003_54597[(1)] = (4));

} else {
var statearr_53004_54601 = state_52977__$1;
(statearr_53004_54601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52978 === (11))){
var inst_52938 = (state_52977[(10)]);
var inst_52962 = (state_52977[(2)]);
var tmp52993 = inst_52938;
var inst_52938__$1 = tmp52993;
var state_52977__$1 = (function (){var statearr_53005 = state_52977;
(statearr_53005[(10)] = inst_52938__$1);

(statearr_53005[(11)] = inst_52962);

return statearr_53005;
})();
var statearr_53006_54606 = state_52977__$1;
(statearr_53006_54606[(2)] = null);

(statearr_53006_54606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52978 === (9))){
var inst_52948 = (state_52977[(7)]);
var state_52977__$1 = state_52977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52977__$1,(11),out,inst_52948);
} else {
if((state_val_52978 === (5))){
var inst_52967 = cljs.core.async.close_BANG_(out);
var state_52977__$1 = state_52977;
var statearr_53014_54607 = state_52977__$1;
(statearr_53014_54607[(2)] = inst_52967);

(statearr_53014_54607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52978 === (10))){
var inst_52965 = (state_52977[(2)]);
var state_52977__$1 = state_52977;
var statearr_53015_54609 = state_52977__$1;
(statearr_53015_54609[(2)] = inst_52965);

(statearr_53015_54609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52978 === (8))){
var inst_52938 = (state_52977[(10)]);
var inst_52948 = (state_52977[(7)]);
var inst_52949 = (state_52977[(9)]);
var inst_52947 = (state_52977[(8)]);
var inst_52953 = (function (){var cs = inst_52938;
var vec__52943 = inst_52947;
var v = inst_52948;
var c = inst_52949;
return ((function (cs,vec__52943,v,c,inst_52938,inst_52948,inst_52949,inst_52947,state_val_52978,c__51859__auto___54591,out){
return (function (p1__52930_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52930_SHARP_);
});
;})(cs,vec__52943,v,c,inst_52938,inst_52948,inst_52949,inst_52947,state_val_52978,c__51859__auto___54591,out))
})();
var inst_52957 = cljs.core.filterv(inst_52953,inst_52938);
var inst_52938__$1 = inst_52957;
var state_52977__$1 = (function (){var statearr_53020 = state_52977;
(statearr_53020[(10)] = inst_52938__$1);

return statearr_53020;
})();
var statearr_53021_54610 = state_52977__$1;
(statearr_53021_54610[(2)] = null);

(statearr_53021_54610[(1)] = (2));


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
});})(c__51859__auto___54591,out))
;
return ((function (switch__51723__auto__,c__51859__auto___54591,out){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_53022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53022[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_53022[(1)] = (1));

return statearr_53022;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_52977){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_52977);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e53023){if((e53023 instanceof Object)){
var ex__51727__auto__ = e53023;
var statearr_53024_54612 = state_52977;
(statearr_53024_54612[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54613 = state_52977;
state_52977 = G__54613;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_52977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_52977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54591,out))
})();
var state__51861__auto__ = (function (){var statearr_53025 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_53025[(6)] = c__51859__auto___54591);

return statearr_53025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54591,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__53032 = arguments.length;
switch (G__53032) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51859__auto___54616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54616,out){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54616,out){
return (function (state_53082){
var state_val_53083 = (state_53082[(1)]);
if((state_val_53083 === (7))){
var inst_53046 = (state_53082[(7)]);
var inst_53046__$1 = (state_53082[(2)]);
var inst_53048 = (inst_53046__$1 == null);
var inst_53049 = cljs.core.not(inst_53048);
var state_53082__$1 = (function (){var statearr_53095 = state_53082;
(statearr_53095[(7)] = inst_53046__$1);

return statearr_53095;
})();
if(inst_53049){
var statearr_53096_54617 = state_53082__$1;
(statearr_53096_54617[(1)] = (8));

} else {
var statearr_53097_54618 = state_53082__$1;
(statearr_53097_54618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (1))){
var inst_53037 = (0);
var state_53082__$1 = (function (){var statearr_53099 = state_53082;
(statearr_53099[(8)] = inst_53037);

return statearr_53099;
})();
var statearr_53100_54619 = state_53082__$1;
(statearr_53100_54619[(2)] = null);

(statearr_53100_54619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (4))){
var state_53082__$1 = state_53082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53082__$1,(7),ch);
} else {
if((state_val_53083 === (6))){
var inst_53077 = (state_53082[(2)]);
var state_53082__$1 = state_53082;
var statearr_53102_54620 = state_53082__$1;
(statearr_53102_54620[(2)] = inst_53077);

(statearr_53102_54620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (3))){
var inst_53079 = (state_53082[(2)]);
var inst_53080 = cljs.core.async.close_BANG_(out);
var state_53082__$1 = (function (){var statearr_53103 = state_53082;
(statearr_53103[(9)] = inst_53079);

return statearr_53103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53082__$1,inst_53080);
} else {
if((state_val_53083 === (2))){
var inst_53037 = (state_53082[(8)]);
var inst_53039 = (inst_53037 < n);
var state_53082__$1 = state_53082;
if(cljs.core.truth_(inst_53039)){
var statearr_53105_54621 = state_53082__$1;
(statearr_53105_54621[(1)] = (4));

} else {
var statearr_53106_54622 = state_53082__$1;
(statearr_53106_54622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (11))){
var inst_53037 = (state_53082[(8)]);
var inst_53069 = (state_53082[(2)]);
var inst_53070 = (inst_53037 + (1));
var inst_53037__$1 = inst_53070;
var state_53082__$1 = (function (){var statearr_53108 = state_53082;
(statearr_53108[(10)] = inst_53069);

(statearr_53108[(8)] = inst_53037__$1);

return statearr_53108;
})();
var statearr_53111_54627 = state_53082__$1;
(statearr_53111_54627[(2)] = null);

(statearr_53111_54627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (9))){
var state_53082__$1 = state_53082;
var statearr_53112_54632 = state_53082__$1;
(statearr_53112_54632[(2)] = null);

(statearr_53112_54632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (5))){
var state_53082__$1 = state_53082;
var statearr_53114_54633 = state_53082__$1;
(statearr_53114_54633[(2)] = null);

(statearr_53114_54633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (10))){
var inst_53074 = (state_53082[(2)]);
var state_53082__$1 = state_53082;
var statearr_53116_54634 = state_53082__$1;
(statearr_53116_54634[(2)] = inst_53074);

(statearr_53116_54634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53083 === (8))){
var inst_53046 = (state_53082[(7)]);
var state_53082__$1 = state_53082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53082__$1,(11),out,inst_53046);
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
});})(c__51859__auto___54616,out))
;
return ((function (switch__51723__auto__,c__51859__auto___54616,out){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_53127 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53127[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_53127[(1)] = (1));

return statearr_53127;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_53082){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_53082);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e53128){if((e53128 instanceof Object)){
var ex__51727__auto__ = e53128;
var statearr_53132_54637 = state_53082;
(statearr_53132_54637[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54638 = state_53082;
state_53082 = G__54638;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_53082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_53082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54616,out))
})();
var state__51861__auto__ = (function (){var statearr_53138 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_53138[(6)] = c__51859__auto___54616);

return statearr_53138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54616,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53148 = (function (f,ch,meta53149){
this.f = f;
this.ch = ch;
this.meta53149 = meta53149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53150,meta53149__$1){
var self__ = this;
var _53150__$1 = this;
return (new cljs.core.async.t_cljs$core$async53148(self__.f,self__.ch,meta53149__$1));
});

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53150){
var self__ = this;
var _53150__$1 = this;
return self__.meta53149;
});

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53163 = (function (f,ch,meta53149,_,fn1,meta53164){
this.f = f;
this.ch = ch;
this.meta53149 = meta53149;
this._ = _;
this.fn1 = fn1;
this.meta53164 = meta53164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53165,meta53164__$1){
var self__ = this;
var _53165__$1 = this;
return (new cljs.core.async.t_cljs$core$async53163(self__.f,self__.ch,self__.meta53149,self__._,self__.fn1,meta53164__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53165){
var self__ = this;
var _53165__$1 = this;
return self__.meta53164;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53142_SHARP_){
var G__53179 = (((p1__53142_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53142_SHARP_) : self__.f.call(null,p1__53142_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53179) : f1.call(null,G__53179));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53163.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53149","meta53149",1609505183,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53148","cljs.core.async/t_cljs$core$async53148",802778900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53164","meta53164",-198521366,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53163";

cljs.core.async.t_cljs$core$async53163.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53163");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53163.
 */
cljs.core.async.__GT_t_cljs$core$async53163 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53163(f__$1,ch__$1,meta53149__$1,___$2,fn1__$1,meta53164){
return (new cljs.core.async.t_cljs$core$async53163(f__$1,ch__$1,meta53149__$1,___$2,fn1__$1,meta53164));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53163(self__.f,self__.ch,self__.meta53149,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53210 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53210) : self__.f.call(null,G__53210));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53149","meta53149",1609505183,null)], null);
});

cljs.core.async.t_cljs$core$async53148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53148";

cljs.core.async.t_cljs$core$async53148.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53148");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53148.
 */
cljs.core.async.__GT_t_cljs$core$async53148 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53148(f__$1,ch__$1,meta53149){
return (new cljs.core.async.t_cljs$core$async53148(f__$1,ch__$1,meta53149));
});

}

return (new cljs.core.async.t_cljs$core$async53148(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53230 = (function (f,ch,meta53231){
this.f = f;
this.ch = ch;
this.meta53231 = meta53231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53232,meta53231__$1){
var self__ = this;
var _53232__$1 = this;
return (new cljs.core.async.t_cljs$core$async53230(self__.f,self__.ch,meta53231__$1));
});

cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53232){
var self__ = this;
var _53232__$1 = this;
return self__.meta53231;
});

cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async53230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53231","meta53231",1379450530,null)], null);
});

cljs.core.async.t_cljs$core$async53230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53230";

cljs.core.async.t_cljs$core$async53230.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53230");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53230.
 */
cljs.core.async.__GT_t_cljs$core$async53230 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53230(f__$1,ch__$1,meta53231){
return (new cljs.core.async.t_cljs$core$async53230(f__$1,ch__$1,meta53231));
});

}

return (new cljs.core.async.t_cljs$core$async53230(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53254 = (function (p,ch,meta53255){
this.p = p;
this.ch = ch;
this.meta53255 = meta53255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53256,meta53255__$1){
var self__ = this;
var _53256__$1 = this;
return (new cljs.core.async.t_cljs$core$async53254(self__.p,self__.ch,meta53255__$1));
});

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53256){
var self__ = this;
var _53256__$1 = this;
return self__.meta53255;
});

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53255","meta53255",-694625855,null)], null);
});

cljs.core.async.t_cljs$core$async53254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53254";

cljs.core.async.t_cljs$core$async53254.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53254");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53254.
 */
cljs.core.async.__GT_t_cljs$core$async53254 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53254(p__$1,ch__$1,meta53255){
return (new cljs.core.async.t_cljs$core$async53254(p__$1,ch__$1,meta53255));
});

}

return (new cljs.core.async.t_cljs$core$async53254(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53292 = arguments.length;
switch (G__53292) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51859__auto___54647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54647,out){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54647,out){
return (function (state_53330){
var state_val_53331 = (state_53330[(1)]);
if((state_val_53331 === (7))){
var inst_53326 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
var statearr_53336_54648 = state_53330__$1;
(statearr_53336_54648[(2)] = inst_53326);

(statearr_53336_54648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (1))){
var state_53330__$1 = state_53330;
var statearr_53337_54652 = state_53330__$1;
(statearr_53337_54652[(2)] = null);

(statearr_53337_54652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (4))){
var inst_53312 = (state_53330[(7)]);
var inst_53312__$1 = (state_53330[(2)]);
var inst_53313 = (inst_53312__$1 == null);
var state_53330__$1 = (function (){var statearr_53340 = state_53330;
(statearr_53340[(7)] = inst_53312__$1);

return statearr_53340;
})();
if(cljs.core.truth_(inst_53313)){
var statearr_53341_54653 = state_53330__$1;
(statearr_53341_54653[(1)] = (5));

} else {
var statearr_53346_54654 = state_53330__$1;
(statearr_53346_54654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (6))){
var inst_53312 = (state_53330[(7)]);
var inst_53317 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53312) : p.call(null,inst_53312));
var state_53330__$1 = state_53330;
if(cljs.core.truth_(inst_53317)){
var statearr_53347_54659 = state_53330__$1;
(statearr_53347_54659[(1)] = (8));

} else {
var statearr_53356_54660 = state_53330__$1;
(statearr_53356_54660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (3))){
var inst_53328 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53330__$1,inst_53328);
} else {
if((state_val_53331 === (2))){
var state_53330__$1 = state_53330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53330__$1,(4),ch);
} else {
if((state_val_53331 === (11))){
var inst_53320 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
var statearr_53367_54664 = state_53330__$1;
(statearr_53367_54664[(2)] = inst_53320);

(statearr_53367_54664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (9))){
var state_53330__$1 = state_53330;
var statearr_53372_54665 = state_53330__$1;
(statearr_53372_54665[(2)] = null);

(statearr_53372_54665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (5))){
var inst_53315 = cljs.core.async.close_BANG_(out);
var state_53330__$1 = state_53330;
var statearr_53373_54666 = state_53330__$1;
(statearr_53373_54666[(2)] = inst_53315);

(statearr_53373_54666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (10))){
var inst_53323 = (state_53330[(2)]);
var state_53330__$1 = (function (){var statearr_53374 = state_53330;
(statearr_53374[(8)] = inst_53323);

return statearr_53374;
})();
var statearr_53375_54670 = state_53330__$1;
(statearr_53375_54670[(2)] = null);

(statearr_53375_54670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (8))){
var inst_53312 = (state_53330[(7)]);
var state_53330__$1 = state_53330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53330__$1,(11),out,inst_53312);
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
});})(c__51859__auto___54647,out))
;
return ((function (switch__51723__auto__,c__51859__auto___54647,out){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_53381 = [null,null,null,null,null,null,null,null,null];
(statearr_53381[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_53381[(1)] = (1));

return statearr_53381;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_53330){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_53330);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e53382){if((e53382 instanceof Object)){
var ex__51727__auto__ = e53382;
var statearr_53389_54674 = state_53330;
(statearr_53389_54674[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54675 = state_53330;
state_53330 = G__54675;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_53330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_53330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54647,out))
})();
var state__51861__auto__ = (function (){var statearr_53395 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_53395[(6)] = c__51859__auto___54647);

return statearr_53395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54647,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53397 = arguments.length;
switch (G__53397) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__51859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto__){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto__){
return (function (state_53460){
var state_val_53461 = (state_53460[(1)]);
if((state_val_53461 === (7))){
var inst_53456 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
var statearr_53462_54680 = state_53460__$1;
(statearr_53462_54680[(2)] = inst_53456);

(statearr_53462_54680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (20))){
var inst_53426 = (state_53460[(7)]);
var inst_53437 = (state_53460[(2)]);
var inst_53438 = cljs.core.next(inst_53426);
var inst_53412 = inst_53438;
var inst_53413 = null;
var inst_53414 = (0);
var inst_53415 = (0);
var state_53460__$1 = (function (){var statearr_53463 = state_53460;
(statearr_53463[(8)] = inst_53413);

(statearr_53463[(9)] = inst_53412);

(statearr_53463[(10)] = inst_53437);

(statearr_53463[(11)] = inst_53414);

(statearr_53463[(12)] = inst_53415);

return statearr_53463;
})();
var statearr_53464_54682 = state_53460__$1;
(statearr_53464_54682[(2)] = null);

(statearr_53464_54682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (1))){
var state_53460__$1 = state_53460;
var statearr_53465_54683 = state_53460__$1;
(statearr_53465_54683[(2)] = null);

(statearr_53465_54683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (4))){
var inst_53401 = (state_53460[(13)]);
var inst_53401__$1 = (state_53460[(2)]);
var inst_53402 = (inst_53401__$1 == null);
var state_53460__$1 = (function (){var statearr_53466 = state_53460;
(statearr_53466[(13)] = inst_53401__$1);

return statearr_53466;
})();
if(cljs.core.truth_(inst_53402)){
var statearr_53467_54684 = state_53460__$1;
(statearr_53467_54684[(1)] = (5));

} else {
var statearr_53468_54685 = state_53460__$1;
(statearr_53468_54685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (15))){
var state_53460__$1 = state_53460;
var statearr_53472_54686 = state_53460__$1;
(statearr_53472_54686[(2)] = null);

(statearr_53472_54686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (21))){
var state_53460__$1 = state_53460;
var statearr_53473_54696 = state_53460__$1;
(statearr_53473_54696[(2)] = null);

(statearr_53473_54696[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (13))){
var inst_53413 = (state_53460[(8)]);
var inst_53412 = (state_53460[(9)]);
var inst_53414 = (state_53460[(11)]);
var inst_53415 = (state_53460[(12)]);
var inst_53422 = (state_53460[(2)]);
var inst_53423 = (inst_53415 + (1));
var tmp53469 = inst_53413;
var tmp53470 = inst_53412;
var tmp53471 = inst_53414;
var inst_53412__$1 = tmp53470;
var inst_53413__$1 = tmp53469;
var inst_53414__$1 = tmp53471;
var inst_53415__$1 = inst_53423;
var state_53460__$1 = (function (){var statearr_53474 = state_53460;
(statearr_53474[(8)] = inst_53413__$1);

(statearr_53474[(9)] = inst_53412__$1);

(statearr_53474[(14)] = inst_53422);

(statearr_53474[(11)] = inst_53414__$1);

(statearr_53474[(12)] = inst_53415__$1);

return statearr_53474;
})();
var statearr_53475_54703 = state_53460__$1;
(statearr_53475_54703[(2)] = null);

(statearr_53475_54703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (22))){
var state_53460__$1 = state_53460;
var statearr_53477_54704 = state_53460__$1;
(statearr_53477_54704[(2)] = null);

(statearr_53477_54704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (6))){
var inst_53401 = (state_53460[(13)]);
var inst_53410 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53401) : f.call(null,inst_53401));
var inst_53411 = cljs.core.seq(inst_53410);
var inst_53412 = inst_53411;
var inst_53413 = null;
var inst_53414 = (0);
var inst_53415 = (0);
var state_53460__$1 = (function (){var statearr_53482 = state_53460;
(statearr_53482[(8)] = inst_53413);

(statearr_53482[(9)] = inst_53412);

(statearr_53482[(11)] = inst_53414);

(statearr_53482[(12)] = inst_53415);

return statearr_53482;
})();
var statearr_53483_54705 = state_53460__$1;
(statearr_53483_54705[(2)] = null);

(statearr_53483_54705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (17))){
var inst_53426 = (state_53460[(7)]);
var inst_53430 = cljs.core.chunk_first(inst_53426);
var inst_53431 = cljs.core.chunk_rest(inst_53426);
var inst_53432 = cljs.core.count(inst_53430);
var inst_53412 = inst_53431;
var inst_53413 = inst_53430;
var inst_53414 = inst_53432;
var inst_53415 = (0);
var state_53460__$1 = (function (){var statearr_53484 = state_53460;
(statearr_53484[(8)] = inst_53413);

(statearr_53484[(9)] = inst_53412);

(statearr_53484[(11)] = inst_53414);

(statearr_53484[(12)] = inst_53415);

return statearr_53484;
})();
var statearr_53485_54712 = state_53460__$1;
(statearr_53485_54712[(2)] = null);

(statearr_53485_54712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (3))){
var inst_53458 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53460__$1,inst_53458);
} else {
if((state_val_53461 === (12))){
var inst_53446 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
var statearr_53486_54713 = state_53460__$1;
(statearr_53486_54713[(2)] = inst_53446);

(statearr_53486_54713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (2))){
var state_53460__$1 = state_53460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53460__$1,(4),in$);
} else {
if((state_val_53461 === (23))){
var inst_53454 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
var statearr_53487_54714 = state_53460__$1;
(statearr_53487_54714[(2)] = inst_53454);

(statearr_53487_54714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (19))){
var inst_53441 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
var statearr_53488_54721 = state_53460__$1;
(statearr_53488_54721[(2)] = inst_53441);

(statearr_53488_54721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (11))){
var inst_53412 = (state_53460[(9)]);
var inst_53426 = (state_53460[(7)]);
var inst_53426__$1 = cljs.core.seq(inst_53412);
var state_53460__$1 = (function (){var statearr_53489 = state_53460;
(statearr_53489[(7)] = inst_53426__$1);

return statearr_53489;
})();
if(inst_53426__$1){
var statearr_53490_54722 = state_53460__$1;
(statearr_53490_54722[(1)] = (14));

} else {
var statearr_53491_54723 = state_53460__$1;
(statearr_53491_54723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (9))){
var inst_53448 = (state_53460[(2)]);
var inst_53449 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53460__$1 = (function (){var statearr_53496 = state_53460;
(statearr_53496[(15)] = inst_53448);

return statearr_53496;
})();
if(cljs.core.truth_(inst_53449)){
var statearr_53497_54724 = state_53460__$1;
(statearr_53497_54724[(1)] = (21));

} else {
var statearr_53498_54725 = state_53460__$1;
(statearr_53498_54725[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (5))){
var inst_53404 = cljs.core.async.close_BANG_(out);
var state_53460__$1 = state_53460;
var statearr_53499_54726 = state_53460__$1;
(statearr_53499_54726[(2)] = inst_53404);

(statearr_53499_54726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (14))){
var inst_53426 = (state_53460[(7)]);
var inst_53428 = cljs.core.chunked_seq_QMARK_(inst_53426);
var state_53460__$1 = state_53460;
if(inst_53428){
var statearr_53500_54727 = state_53460__$1;
(statearr_53500_54727[(1)] = (17));

} else {
var statearr_53501_54728 = state_53460__$1;
(statearr_53501_54728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (16))){
var inst_53444 = (state_53460[(2)]);
var state_53460__$1 = state_53460;
var statearr_53502_54729 = state_53460__$1;
(statearr_53502_54729[(2)] = inst_53444);

(statearr_53502_54729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53461 === (10))){
var inst_53413 = (state_53460[(8)]);
var inst_53415 = (state_53460[(12)]);
var inst_53420 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53413,inst_53415);
var state_53460__$1 = state_53460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53460__$1,(13),out,inst_53420);
} else {
if((state_val_53461 === (18))){
var inst_53426 = (state_53460[(7)]);
var inst_53435 = cljs.core.first(inst_53426);
var state_53460__$1 = state_53460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53460__$1,(20),out,inst_53435);
} else {
if((state_val_53461 === (8))){
var inst_53414 = (state_53460[(11)]);
var inst_53415 = (state_53460[(12)]);
var inst_53417 = (inst_53415 < inst_53414);
var inst_53418 = inst_53417;
var state_53460__$1 = state_53460;
if(cljs.core.truth_(inst_53418)){
var statearr_53503_54730 = state_53460__$1;
(statearr_53503_54730[(1)] = (10));

} else {
var statearr_53504_54731 = state_53460__$1;
(statearr_53504_54731[(1)] = (11));

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
});})(c__51859__auto__))
;
return ((function (switch__51723__auto__,c__51859__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51724__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51724__auto____0 = (function (){
var statearr_53505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53505[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51724__auto__);

(statearr_53505[(1)] = (1));

return statearr_53505;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51724__auto____1 = (function (state_53460){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_53460);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e53506){if((e53506 instanceof Object)){
var ex__51727__auto__ = e53506;
var statearr_53507_54738 = state_53460;
(statearr_53507_54738[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54739 = state_53460;
state_53460 = G__54739;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51724__auto__ = function(state_53460){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51724__auto____1.call(this,state_53460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51724__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51724__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto__))
})();
var state__51861__auto__ = (function (){var statearr_53508 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_53508[(6)] = c__51859__auto__);

return statearr_53508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto__))
);

return c__51859__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53510 = arguments.length;
switch (G__53510) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53512 = arguments.length;
switch (G__53512) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53514 = arguments.length;
switch (G__53514) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51859__auto___54746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54746,out){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54746,out){
return (function (state_53538){
var state_val_53539 = (state_53538[(1)]);
if((state_val_53539 === (7))){
var inst_53533 = (state_53538[(2)]);
var state_53538__$1 = state_53538;
var statearr_53540_54750 = state_53538__$1;
(statearr_53540_54750[(2)] = inst_53533);

(statearr_53540_54750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (1))){
var inst_53515 = null;
var state_53538__$1 = (function (){var statearr_53541 = state_53538;
(statearr_53541[(7)] = inst_53515);

return statearr_53541;
})();
var statearr_53542_54751 = state_53538__$1;
(statearr_53542_54751[(2)] = null);

(statearr_53542_54751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (4))){
var inst_53518 = (state_53538[(8)]);
var inst_53518__$1 = (state_53538[(2)]);
var inst_53519 = (inst_53518__$1 == null);
var inst_53520 = cljs.core.not(inst_53519);
var state_53538__$1 = (function (){var statearr_53543 = state_53538;
(statearr_53543[(8)] = inst_53518__$1);

return statearr_53543;
})();
if(inst_53520){
var statearr_53544_54754 = state_53538__$1;
(statearr_53544_54754[(1)] = (5));

} else {
var statearr_53545_54755 = state_53538__$1;
(statearr_53545_54755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (6))){
var state_53538__$1 = state_53538;
var statearr_53546_54756 = state_53538__$1;
(statearr_53546_54756[(2)] = null);

(statearr_53546_54756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (3))){
var inst_53535 = (state_53538[(2)]);
var inst_53536 = cljs.core.async.close_BANG_(out);
var state_53538__$1 = (function (){var statearr_53547 = state_53538;
(statearr_53547[(9)] = inst_53535);

return statearr_53547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53538__$1,inst_53536);
} else {
if((state_val_53539 === (2))){
var state_53538__$1 = state_53538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53538__$1,(4),ch);
} else {
if((state_val_53539 === (11))){
var inst_53518 = (state_53538[(8)]);
var inst_53527 = (state_53538[(2)]);
var inst_53515 = inst_53518;
var state_53538__$1 = (function (){var statearr_53548 = state_53538;
(statearr_53548[(7)] = inst_53515);

(statearr_53548[(10)] = inst_53527);

return statearr_53548;
})();
var statearr_53549_54757 = state_53538__$1;
(statearr_53549_54757[(2)] = null);

(statearr_53549_54757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (9))){
var inst_53518 = (state_53538[(8)]);
var state_53538__$1 = state_53538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53538__$1,(11),out,inst_53518);
} else {
if((state_val_53539 === (5))){
var inst_53515 = (state_53538[(7)]);
var inst_53518 = (state_53538[(8)]);
var inst_53522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53518,inst_53515);
var state_53538__$1 = state_53538;
if(inst_53522){
var statearr_53551_54758 = state_53538__$1;
(statearr_53551_54758[(1)] = (8));

} else {
var statearr_53552_54759 = state_53538__$1;
(statearr_53552_54759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (10))){
var inst_53530 = (state_53538[(2)]);
var state_53538__$1 = state_53538;
var statearr_53553_54760 = state_53538__$1;
(statearr_53553_54760[(2)] = inst_53530);

(statearr_53553_54760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (8))){
var inst_53515 = (state_53538[(7)]);
var tmp53550 = inst_53515;
var inst_53515__$1 = tmp53550;
var state_53538__$1 = (function (){var statearr_53554 = state_53538;
(statearr_53554[(7)] = inst_53515__$1);

return statearr_53554;
})();
var statearr_53555_54761 = state_53538__$1;
(statearr_53555_54761[(2)] = null);

(statearr_53555_54761[(1)] = (2));


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
});})(c__51859__auto___54746,out))
;
return ((function (switch__51723__auto__,c__51859__auto___54746,out){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_53556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53556[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_53556[(1)] = (1));

return statearr_53556;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_53538){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_53538);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e53557){if((e53557 instanceof Object)){
var ex__51727__auto__ = e53557;
var statearr_53558_54763 = state_53538;
(statearr_53558_54763[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54765 = state_53538;
state_53538 = G__54765;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_53538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_53538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54746,out))
})();
var state__51861__auto__ = (function (){var statearr_53559 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_53559[(6)] = c__51859__auto___54746);

return statearr_53559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54746,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53561 = arguments.length;
switch (G__53561) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51859__auto___54767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54767,out){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54767,out){
return (function (state_53599){
var state_val_53600 = (state_53599[(1)]);
if((state_val_53600 === (7))){
var inst_53595 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
var statearr_53601_54768 = state_53599__$1;
(statearr_53601_54768[(2)] = inst_53595);

(statearr_53601_54768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (1))){
var inst_53562 = (new Array(n));
var inst_53563 = inst_53562;
var inst_53564 = (0);
var state_53599__$1 = (function (){var statearr_53602 = state_53599;
(statearr_53602[(7)] = inst_53563);

(statearr_53602[(8)] = inst_53564);

return statearr_53602;
})();
var statearr_53603_54772 = state_53599__$1;
(statearr_53603_54772[(2)] = null);

(statearr_53603_54772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (4))){
var inst_53567 = (state_53599[(9)]);
var inst_53567__$1 = (state_53599[(2)]);
var inst_53568 = (inst_53567__$1 == null);
var inst_53569 = cljs.core.not(inst_53568);
var state_53599__$1 = (function (){var statearr_53604 = state_53599;
(statearr_53604[(9)] = inst_53567__$1);

return statearr_53604;
})();
if(inst_53569){
var statearr_53605_54779 = state_53599__$1;
(statearr_53605_54779[(1)] = (5));

} else {
var statearr_53606_54780 = state_53599__$1;
(statearr_53606_54780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (15))){
var inst_53589 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
var statearr_53607_54781 = state_53599__$1;
(statearr_53607_54781[(2)] = inst_53589);

(statearr_53607_54781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (13))){
var state_53599__$1 = state_53599;
var statearr_53608_54782 = state_53599__$1;
(statearr_53608_54782[(2)] = null);

(statearr_53608_54782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (6))){
var inst_53564 = (state_53599[(8)]);
var inst_53585 = (inst_53564 > (0));
var state_53599__$1 = state_53599;
if(cljs.core.truth_(inst_53585)){
var statearr_53609_54784 = state_53599__$1;
(statearr_53609_54784[(1)] = (12));

} else {
var statearr_53610_54785 = state_53599__$1;
(statearr_53610_54785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (3))){
var inst_53597 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53599__$1,inst_53597);
} else {
if((state_val_53600 === (12))){
var inst_53563 = (state_53599[(7)]);
var inst_53587 = cljs.core.vec(inst_53563);
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53599__$1,(15),out,inst_53587);
} else {
if((state_val_53600 === (2))){
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53599__$1,(4),ch);
} else {
if((state_val_53600 === (11))){
var inst_53579 = (state_53599[(2)]);
var inst_53580 = (new Array(n));
var inst_53563 = inst_53580;
var inst_53564 = (0);
var state_53599__$1 = (function (){var statearr_53611 = state_53599;
(statearr_53611[(10)] = inst_53579);

(statearr_53611[(7)] = inst_53563);

(statearr_53611[(8)] = inst_53564);

return statearr_53611;
})();
var statearr_53612_54790 = state_53599__$1;
(statearr_53612_54790[(2)] = null);

(statearr_53612_54790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (9))){
var inst_53563 = (state_53599[(7)]);
var inst_53577 = cljs.core.vec(inst_53563);
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53599__$1,(11),out,inst_53577);
} else {
if((state_val_53600 === (5))){
var inst_53572 = (state_53599[(11)]);
var inst_53567 = (state_53599[(9)]);
var inst_53563 = (state_53599[(7)]);
var inst_53564 = (state_53599[(8)]);
var inst_53571 = (inst_53563[inst_53564] = inst_53567);
var inst_53572__$1 = (inst_53564 + (1));
var inst_53573 = (inst_53572__$1 < n);
var state_53599__$1 = (function (){var statearr_53613 = state_53599;
(statearr_53613[(12)] = inst_53571);

(statearr_53613[(11)] = inst_53572__$1);

return statearr_53613;
})();
if(cljs.core.truth_(inst_53573)){
var statearr_53614_54791 = state_53599__$1;
(statearr_53614_54791[(1)] = (8));

} else {
var statearr_53615_54792 = state_53599__$1;
(statearr_53615_54792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (14))){
var inst_53592 = (state_53599[(2)]);
var inst_53593 = cljs.core.async.close_BANG_(out);
var state_53599__$1 = (function (){var statearr_53617 = state_53599;
(statearr_53617[(13)] = inst_53592);

return statearr_53617;
})();
var statearr_53618_54793 = state_53599__$1;
(statearr_53618_54793[(2)] = inst_53593);

(statearr_53618_54793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (10))){
var inst_53583 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
var statearr_53619_54794 = state_53599__$1;
(statearr_53619_54794[(2)] = inst_53583);

(statearr_53619_54794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (8))){
var inst_53572 = (state_53599[(11)]);
var inst_53563 = (state_53599[(7)]);
var tmp53616 = inst_53563;
var inst_53563__$1 = tmp53616;
var inst_53564 = inst_53572;
var state_53599__$1 = (function (){var statearr_53620 = state_53599;
(statearr_53620[(7)] = inst_53563__$1);

(statearr_53620[(8)] = inst_53564);

return statearr_53620;
})();
var statearr_53621_54795 = state_53599__$1;
(statearr_53621_54795[(2)] = null);

(statearr_53621_54795[(1)] = (2));


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
});})(c__51859__auto___54767,out))
;
return ((function (switch__51723__auto__,c__51859__auto___54767,out){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_53622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53622[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_53622[(1)] = (1));

return statearr_53622;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_53599){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_53599);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e53623){if((e53623 instanceof Object)){
var ex__51727__auto__ = e53623;
var statearr_53624_54796 = state_53599;
(statearr_53624_54796[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54797 = state_53599;
state_53599 = G__54797;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_53599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_53599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54767,out))
})();
var state__51861__auto__ = (function (){var statearr_53625 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_53625[(6)] = c__51859__auto___54767);

return statearr_53625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54767,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53627 = arguments.length;
switch (G__53627) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51859__auto___54799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___54799,out){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___54799,out){
return (function (state_53669){
var state_val_53670 = (state_53669[(1)]);
if((state_val_53670 === (7))){
var inst_53665 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
var statearr_53671_54800 = state_53669__$1;
(statearr_53671_54800[(2)] = inst_53665);

(statearr_53671_54800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (1))){
var inst_53628 = [];
var inst_53629 = inst_53628;
var inst_53630 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53669__$1 = (function (){var statearr_53672 = state_53669;
(statearr_53672[(7)] = inst_53629);

(statearr_53672[(8)] = inst_53630);

return statearr_53672;
})();
var statearr_53673_54802 = state_53669__$1;
(statearr_53673_54802[(2)] = null);

(statearr_53673_54802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (4))){
var inst_53633 = (state_53669[(9)]);
var inst_53633__$1 = (state_53669[(2)]);
var inst_53634 = (inst_53633__$1 == null);
var inst_53635 = cljs.core.not(inst_53634);
var state_53669__$1 = (function (){var statearr_53674 = state_53669;
(statearr_53674[(9)] = inst_53633__$1);

return statearr_53674;
})();
if(inst_53635){
var statearr_53675_54804 = state_53669__$1;
(statearr_53675_54804[(1)] = (5));

} else {
var statearr_53676_54805 = state_53669__$1;
(statearr_53676_54805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (15))){
var inst_53659 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
var statearr_53677_54806 = state_53669__$1;
(statearr_53677_54806[(2)] = inst_53659);

(statearr_53677_54806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (13))){
var state_53669__$1 = state_53669;
var statearr_53678_54808 = state_53669__$1;
(statearr_53678_54808[(2)] = null);

(statearr_53678_54808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (6))){
var inst_53629 = (state_53669[(7)]);
var inst_53654 = inst_53629.length;
var inst_53655 = (inst_53654 > (0));
var state_53669__$1 = state_53669;
if(cljs.core.truth_(inst_53655)){
var statearr_53679_54809 = state_53669__$1;
(statearr_53679_54809[(1)] = (12));

} else {
var statearr_53680_54811 = state_53669__$1;
(statearr_53680_54811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (3))){
var inst_53667 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53669__$1,inst_53667);
} else {
if((state_val_53670 === (12))){
var inst_53629 = (state_53669[(7)]);
var inst_53657 = cljs.core.vec(inst_53629);
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53669__$1,(15),out,inst_53657);
} else {
if((state_val_53670 === (2))){
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53669__$1,(4),ch);
} else {
if((state_val_53670 === (11))){
var inst_53637 = (state_53669[(10)]);
var inst_53633 = (state_53669[(9)]);
var inst_53647 = (state_53669[(2)]);
var inst_53648 = [];
var inst_53649 = inst_53648.push(inst_53633);
var inst_53629 = inst_53648;
var inst_53630 = inst_53637;
var state_53669__$1 = (function (){var statearr_53681 = state_53669;
(statearr_53681[(7)] = inst_53629);

(statearr_53681[(11)] = inst_53647);

(statearr_53681[(8)] = inst_53630);

(statearr_53681[(12)] = inst_53649);

return statearr_53681;
})();
var statearr_53682_54813 = state_53669__$1;
(statearr_53682_54813[(2)] = null);

(statearr_53682_54813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (9))){
var inst_53629 = (state_53669[(7)]);
var inst_53645 = cljs.core.vec(inst_53629);
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53669__$1,(11),out,inst_53645);
} else {
if((state_val_53670 === (5))){
var inst_53637 = (state_53669[(10)]);
var inst_53630 = (state_53669[(8)]);
var inst_53633 = (state_53669[(9)]);
var inst_53637__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53633) : f.call(null,inst_53633));
var inst_53638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53637__$1,inst_53630);
var inst_53639 = cljs.core.keyword_identical_QMARK_(inst_53630,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53640 = ((inst_53638) || (inst_53639));
var state_53669__$1 = (function (){var statearr_53683 = state_53669;
(statearr_53683[(10)] = inst_53637__$1);

return statearr_53683;
})();
if(cljs.core.truth_(inst_53640)){
var statearr_53684_54814 = state_53669__$1;
(statearr_53684_54814[(1)] = (8));

} else {
var statearr_53685_54816 = state_53669__$1;
(statearr_53685_54816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (14))){
var inst_53662 = (state_53669[(2)]);
var inst_53663 = cljs.core.async.close_BANG_(out);
var state_53669__$1 = (function (){var statearr_53687 = state_53669;
(statearr_53687[(13)] = inst_53662);

return statearr_53687;
})();
var statearr_53688_54817 = state_53669__$1;
(statearr_53688_54817[(2)] = inst_53663);

(statearr_53688_54817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (10))){
var inst_53652 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
var statearr_53689_54818 = state_53669__$1;
(statearr_53689_54818[(2)] = inst_53652);

(statearr_53689_54818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (8))){
var inst_53629 = (state_53669[(7)]);
var inst_53637 = (state_53669[(10)]);
var inst_53633 = (state_53669[(9)]);
var inst_53642 = inst_53629.push(inst_53633);
var tmp53686 = inst_53629;
var inst_53629__$1 = tmp53686;
var inst_53630 = inst_53637;
var state_53669__$1 = (function (){var statearr_53690 = state_53669;
(statearr_53690[(7)] = inst_53629__$1);

(statearr_53690[(14)] = inst_53642);

(statearr_53690[(8)] = inst_53630);

return statearr_53690;
})();
var statearr_53691_54819 = state_53669__$1;
(statearr_53691_54819[(2)] = null);

(statearr_53691_54819[(1)] = (2));


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
});})(c__51859__auto___54799,out))
;
return ((function (switch__51723__auto__,c__51859__auto___54799,out){
return (function() {
var cljs$core$async$state_machine__51724__auto__ = null;
var cljs$core$async$state_machine__51724__auto____0 = (function (){
var statearr_53692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53692[(0)] = cljs$core$async$state_machine__51724__auto__);

(statearr_53692[(1)] = (1));

return statearr_53692;
});
var cljs$core$async$state_machine__51724__auto____1 = (function (state_53669){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_53669);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e53693){if((e53693 instanceof Object)){
var ex__51727__auto__ = e53693;
var statearr_53694_54820 = state_53669;
(statearr_53694_54820[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54822 = state_53669;
state_53669 = G__54822;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
cljs$core$async$state_machine__51724__auto__ = function(state_53669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51724__auto____1.call(this,state_53669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51724__auto____0;
cljs$core$async$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51724__auto____1;
return cljs$core$async$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___54799,out))
})();
var state__51861__auto__ = (function (){var statearr_53695 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_53695[(6)] = c__51859__auto___54799);

return statearr_53695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___54799,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
