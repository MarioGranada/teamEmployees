import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { OperatorFunction } from 'rxjs';

/**
 * BaseStore provides a base class that wraps an injected `Store` instance and
 * re-implements a subset of its functionality. The purpose of this class is to
 * serve as a base for higher-order services that compose a `Store` instance
 * with actions and selectors in the form of action methods and selector
 * methods to expose to the rest of the application so that these elements
 * don't need to be wired up at each call site. Parts of this class,
 * specifically the `BaseStore#select` method and its overload signatures, are
 * very complicated due to the sophisticated nature of the functionality they
 * wrap, and should not be modified in any way unless absolutely necessary.
 * @summary Base class for store implementations.
 * @export
 * @abstract
 * @class BaseStore
 * @template T The type of the state wrapped by this store
 */
@Injectable()
export abstract class BaseStore<T> {
  /**
   * Creates an instance of BaseStore.
   * @param {Store<T>} store The store instance this BaseStore will operate on.
   * @memberof BaseStore
   */
  constructor(protected store: Store<T>) {}

  /**
   * Dispatches an action object to the store.
   * @param {Action} action
   * @memberof BaseStore
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  /**
   * Used to stitch together functional operators into a chain.
   * @returns {Store<T>} A Store of the Store's state.
   * @memberof BaseStore
   */
  pipe(): Store<T>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable.
   * @param {OperatorFunction<T, A>} op1 The operator.
   * @returns {Store<A>} The Store result of the operator having been
   *     called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A>(op1: OperatorFunction<T, A>): Store<A>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @returns {Store<B>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>
  ): Store<B>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @template C The value type of the result Observable of op3.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @param {OperatorFunction<B, C>} op3 The third operator.
   * @returns {Store<C>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B, C>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>
  ): Store<C>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @template C The value type of the result Observable of op3.
   * @template D The value type of the result Observable of op4.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @param {OperatorFunction<B, C>} op3 The third operator.
   * @param {OperatorFunction<C, D>} op4 The fourth operator.
   * @returns {Store<D>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B, C, D>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>
  ): Store<D>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @template C The value type of the result Observable of op3.
   * @template D The value type of the result Observable of op4.
   * @template E The value type of the result Observable of op5.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @param {OperatorFunction<B, C>} op3 The third operator.
   * @param {OperatorFunction<C, D>} op4 The fourth operator.
   * @param {OperatorFunction<D, E>} op5 The fifth operator.
   * @returns {Store<E>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B, C, D, E>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>
  ): Store<E>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @template C The value type of the result Observable of op3.
   * @template D The value type of the result Observable of op4.
   * @template E The value type of the result Observable of op5.
   * @template F The value type of the result Observable of op6.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @param {OperatorFunction<B, C>} op3 The third operator.
   * @param {OperatorFunction<C, D>} op4 The fourth operator.
   * @param {OperatorFunction<D, E>} op5 The fifth operator.
   * @param {OperatorFunction<E, F>} op6 The sixth operator.
   * @returns {Store<F>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B, C, D, E, F>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>
  ): Store<F>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @template C The value type of the result Observable of op3.
   * @template D The value type of the result Observable of op4.
   * @template E The value type of the result Observable of op5.
   * @template F The value type of the result Observable of op6.
   * @template G The value type of the result Observable of op7.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @param {OperatorFunction<B, C>} op3 The third operator.
   * @param {OperatorFunction<C, D>} op4 The fourth operator.
   * @param {OperatorFunction<D, E>} op5 The fifth operator.
   * @param {OperatorFunction<E, F>} op6 The sixth operator.
   * @param {OperatorFunction<F, G>} op7 The seventh operator.
   * @returns {Store<G>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B, C, D, E, F, G>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>
  ): Store<G>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @template C The value type of the result Observable of op3.
   * @template D The value type of the result Observable of op4.
   * @template E The value type of the result Observable of op5.
   * @template F The value type of the result Observable of op6.
   * @template G The value type of the result Observable of op7.
   * @template H The value type of the result Observable of op8.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @param {OperatorFunction<B, C>} op3 The third operator.
   * @param {OperatorFunction<C, D>} op4 The fourth operator.
   * @param {OperatorFunction<D, E>} op5 The fifth operator.
   * @param {OperatorFunction<E, F>} op6 The sixth operator.
   * @param {OperatorFunction<F, G>} op7 The seventh operator.
   * @param {OperatorFunction<G, H>} op8 The eighth operator.
   * @returns {Store<H>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B, C, D, E, F, G, H>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, H>
  ): Store<H>;
  /**
   * Used to stitch together functional operators into a chain.
   * @template A The value type of the result Observable of op1.
   * @template B The value type of the result Observable of op2.
   * @template C The value type of the result Observable of op3.
   * @template D The value type of the result Observable of op4.
   * @template E The value type of the result Observable of op5.
   * @template F The value type of the result Observable of op6.
   * @template G The value type of the result Observable of op7.
   * @template H The value type of the result Observable of op8.
   * @template I The value type of the result Observable of op9.
   * @param {OperatorFunction<T, A>} op1 The first operator.
   * @param {OperatorFunction<A, B>} op2 The second operator.
   * @param {OperatorFunction<B, C>} op3 The third operator.
   * @param {OperatorFunction<C, D>} op4 The fourth operator.
   * @param {OperatorFunction<D, E>} op5 The fifth operator.
   * @param {OperatorFunction<E, F>} op6 The sixth operator.
   * @param {OperatorFunction<F, G>} op7 The seventh operator.
   * @param {OperatorFunction<G, H>} op8 The eighth operator.
   * @param {OperatorFunction<H, I>} op9 The ninth operator.
   * @returns {Store<I>} The Store result of all of the operators
   *     having been called in the order they were passed in.
   * @memberof BaseStore
   */
  pipe<A, B, C, D, E, F, G, H, I>(
    op1: OperatorFunction<T, A>,
    op2: OperatorFunction<A, B>,
    op3: OperatorFunction<B, C>,
    op4: OperatorFunction<C, D>,
    op5: OperatorFunction<D, E>,
    op6: OperatorFunction<E, F>,
    op7: OperatorFunction<F, G>,
    op8: OperatorFunction<G, H>,
    op9: OperatorFunction<H, I>
  ): Store<I>;
  pipe<A, B, C, D, E, F, G, H, I>(
    op1?: OperatorFunction<T, A>,
    op2?: OperatorFunction<A, B>,
    op3?: OperatorFunction<B, C>,
    op4?: OperatorFunction<C, D>,
    op5?: OperatorFunction<D, E>,
    op6?: OperatorFunction<E, F>,
    op7?: OperatorFunction<F, G>,
    op8?: OperatorFunction<G, H>,
    op9?: OperatorFunction<H, I>
  ):
    | Store<T>
    | Store<A>
    | Store<B>
    | Store<C>
    | Store<D>
    | Store<E>
    | Store<F>
    | Store<G>
    | Store<H>
    | Store<I> {
    const args = [op1, op2, op3, op4, op5, op6, op7, op8, op9].filter(Boolean);

    return this.store.pipe.apply(this.store, args);
  }
}
