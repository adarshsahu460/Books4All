
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model DonorBook
 * 
 */
export type DonorBook = $Result.DefaultSelection<Prisma.$DonorBookPayload>
/**
 * Model ClientBook
 * 
 */
export type ClientBook = $Result.DefaultSelection<Prisma.$ClientBookPayload>
/**
 * Model TransactionTable
 * 
 */
export type TransactionTable = $Result.DefaultSelection<Prisma.$TransactionTablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserInfos
 * const userInfos = await prisma.userInfo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserInfos
   * const userInfos = await prisma.userInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donorBook`: Exposes CRUD operations for the **DonorBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonorBooks
    * const donorBooks = await prisma.donorBook.findMany()
    * ```
    */
  get donorBook(): Prisma.DonorBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientBook`: Exposes CRUD operations for the **ClientBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientBooks
    * const clientBooks = await prisma.clientBook.findMany()
    * ```
    */
  get clientBook(): Prisma.ClientBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionTable`: Exposes CRUD operations for the **TransactionTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionTables
    * const transactionTables = await prisma.transactionTable.findMany()
    * ```
    */
  get transactionTable(): Prisma.TransactionTableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserInfo: 'UserInfo',
    DonorBook: 'DonorBook',
    ClientBook: 'ClientBook',
    TransactionTable: 'TransactionTable'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userInfo" | "donorBook" | "clientBook" | "transactionTable"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      DonorBook: {
        payload: Prisma.$DonorBookPayload<ExtArgs>
        fields: Prisma.DonorBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>
          }
          findFirst: {
            args: Prisma.DonorBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>
          }
          findMany: {
            args: Prisma.DonorBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>[]
          }
          create: {
            args: Prisma.DonorBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>
          }
          createMany: {
            args: Prisma.DonorBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>[]
          }
          delete: {
            args: Prisma.DonorBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>
          }
          update: {
            args: Prisma.DonorBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>
          }
          deleteMany: {
            args: Prisma.DonorBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>[]
          }
          upsert: {
            args: Prisma.DonorBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorBookPayload>
          }
          aggregate: {
            args: Prisma.DonorBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonorBook>
          }
          groupBy: {
            args: Prisma.DonorBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorBookCountArgs<ExtArgs>
            result: $Utils.Optional<DonorBookCountAggregateOutputType> | number
          }
        }
      }
      ClientBook: {
        payload: Prisma.$ClientBookPayload<ExtArgs>
        fields: Prisma.ClientBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>
          }
          findFirst: {
            args: Prisma.ClientBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>
          }
          findMany: {
            args: Prisma.ClientBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>[]
          }
          create: {
            args: Prisma.ClientBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>
          }
          createMany: {
            args: Prisma.ClientBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>[]
          }
          delete: {
            args: Prisma.ClientBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>
          }
          update: {
            args: Prisma.ClientBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>
          }
          deleteMany: {
            args: Prisma.ClientBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>[]
          }
          upsert: {
            args: Prisma.ClientBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientBookPayload>
          }
          aggregate: {
            args: Prisma.ClientBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientBook>
          }
          groupBy: {
            args: Prisma.ClientBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientBookCountArgs<ExtArgs>
            result: $Utils.Optional<ClientBookCountAggregateOutputType> | number
          }
        }
      }
      TransactionTable: {
        payload: Prisma.$TransactionTablePayload<ExtArgs>
        fields: Prisma.TransactionTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>
          }
          findFirst: {
            args: Prisma.TransactionTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>
          }
          findMany: {
            args: Prisma.TransactionTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>[]
          }
          create: {
            args: Prisma.TransactionTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>
          }
          createMany: {
            args: Prisma.TransactionTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionTableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>[]
          }
          delete: {
            args: Prisma.TransactionTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>
          }
          update: {
            args: Prisma.TransactionTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>
          }
          deleteMany: {
            args: Prisma.TransactionTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionTableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>[]
          }
          upsert: {
            args: Prisma.TransactionTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTablePayload>
          }
          aggregate: {
            args: Prisma.TransactionTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionTable>
          }
          groupBy: {
            args: Prisma.TransactionTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionTableCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionTableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userInfo?: UserInfoOmit
    donorBook?: DonorBookOmit
    clientBook?: ClientBookOmit
    transactionTable?: TransactionTableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserInfoCountOutputType
   */

  export type UserInfoCountOutputType = {
    donated: number
    requested: number
    transactionsCompleted: number
  }

  export type UserInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donated?: boolean | UserInfoCountOutputTypeCountDonatedArgs
    requested?: boolean | UserInfoCountOutputTypeCountRequestedArgs
    transactionsCompleted?: boolean | UserInfoCountOutputTypeCountTransactionsCompletedArgs
  }

  // Custom InputTypes
  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfoCountOutputType
     */
    select?: UserInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountDonatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorBookWhereInput
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountRequestedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientBookWhereInput
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountTransactionsCompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTableWhereInput
  }


  /**
   * Count Type DonorBookCountOutputType
   */

  export type DonorBookCountOutputType = {
    transactions: number
  }

  export type DonorBookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | DonorBookCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * DonorBookCountOutputType without action
   */
  export type DonorBookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBookCountOutputType
     */
    select?: DonorBookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonorBookCountOutputType without action
   */
  export type DonorBookCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTableWhereInput
  }


  /**
   * Count Type ClientBookCountOutputType
   */

  export type ClientBookCountOutputType = {
    transactions: number
  }

  export type ClientBookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ClientBookCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ClientBookCountOutputType without action
   */
  export type ClientBookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBookCountOutputType
     */
    select?: ClientBookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientBookCountOutputType without action
   */
  export type ClientBookCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    password: string | null
    email: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    type: string | null
  }

  export type UserInfoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    password: string | null
    email: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    type: string | null
  }

  export type UserInfoCountAggregateOutputType = {
    id: number
    name: number
    address: number
    password: number
    email: number
    latitude: number
    longitude: number
    phone: number
    type: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type UserInfoSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type UserInfoMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    password?: true
    email?: true
    latitude?: true
    longitude?: true
    phone?: true
    type?: true
  }

  export type UserInfoMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    password?: true
    email?: true
    latitude?: true
    longitude?: true
    phone?: true
    type?: true
  }

  export type UserInfoCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    password?: true
    email?: true
    latitude?: true
    longitude?: true
    phone?: true
    type?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    id: number
    name: string
    address: string
    password: string
    email: string
    latitude: number | null
    longitude: number | null
    phone: string
    type: string
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    password?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    type?: boolean
    donated?: boolean | UserInfo$donatedArgs<ExtArgs>
    requested?: boolean | UserInfo$requestedArgs<ExtArgs>
    transactionsCompleted?: boolean | UserInfo$transactionsCompletedArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    password?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    type?: boolean
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    password?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    type?: boolean
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    password?: boolean
    email?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    type?: boolean
  }

  export type UserInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "password" | "email" | "latitude" | "longitude" | "phone" | "type", ExtArgs["result"]["userInfo"]>
  export type UserInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donated?: boolean | UserInfo$donatedArgs<ExtArgs>
    requested?: boolean | UserInfo$requestedArgs<ExtArgs>
    transactionsCompleted?: boolean | UserInfo$transactionsCompletedArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {
      donated: Prisma.$DonorBookPayload<ExtArgs>[]
      requested: Prisma.$ClientBookPayload<ExtArgs>[]
      transactionsCompleted: Prisma.$TransactionTablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      password: string
      email: string
      latitude: number | null
      longitude: number | null
      phone: string
      type: string
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserInfos and returns the data saved in the database.
     * @param {UserInfoCreateManyAndReturnArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserInfos and only return the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos and returns the data updated in the database.
     * @param {UserInfoUpdateManyAndReturnArgs} args - Arguments to update many UserInfos.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserInfos and only return the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, UserInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donated<T extends UserInfo$donatedArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$donatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requested<T extends UserInfo$requestedArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$requestedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionsCompleted<T extends UserInfo$transactionsCompletedArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$transactionsCompletedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserInfo model
   */ 
  interface UserInfoFieldRefs {
    readonly id: FieldRef<"UserInfo", 'Int'>
    readonly name: FieldRef<"UserInfo", 'String'>
    readonly address: FieldRef<"UserInfo", 'String'>
    readonly password: FieldRef<"UserInfo", 'String'>
    readonly email: FieldRef<"UserInfo", 'String'>
    readonly latitude: FieldRef<"UserInfo", 'Float'>
    readonly longitude: FieldRef<"UserInfo", 'Float'>
    readonly phone: FieldRef<"UserInfo", 'String'>
    readonly type: FieldRef<"UserInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInfo createManyAndReturn
   */
  export type UserInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo updateManyAndReturn
   */
  export type UserInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to delete.
     */
    limit?: number
  }

  /**
   * UserInfo.donated
   */
  export type UserInfo$donatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    where?: DonorBookWhereInput
    orderBy?: DonorBookOrderByWithRelationInput | DonorBookOrderByWithRelationInput[]
    cursor?: DonorBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonorBookScalarFieldEnum | DonorBookScalarFieldEnum[]
  }

  /**
   * UserInfo.requested
   */
  export type UserInfo$requestedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    where?: ClientBookWhereInput
    orderBy?: ClientBookOrderByWithRelationInput | ClientBookOrderByWithRelationInput[]
    cursor?: ClientBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientBookScalarFieldEnum | ClientBookScalarFieldEnum[]
  }

  /**
   * UserInfo.transactionsCompleted
   */
  export type UserInfo$transactionsCompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    where?: TransactionTableWhereInput
    orderBy?: TransactionTableOrderByWithRelationInput | TransactionTableOrderByWithRelationInput[]
    cursor?: TransactionTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionTableScalarFieldEnum | TransactionTableScalarFieldEnum[]
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
  }


  /**
   * Model DonorBook
   */

  export type AggregateDonorBook = {
    _count: DonorBookCountAggregateOutputType | null
    _avg: DonorBookAvgAggregateOutputType | null
    _sum: DonorBookSumAggregateOutputType | null
    _min: DonorBookMinAggregateOutputType | null
    _max: DonorBookMaxAggregateOutputType | null
  }

  export type DonorBookAvgAggregateOutputType = {
    id: number | null
    D_id: number | null
    qty: number | null
    age: number | null
  }

  export type DonorBookSumAggregateOutputType = {
    id: number | null
    D_id: number | null
    qty: number | null
    age: number | null
  }

  export type DonorBookMinAggregateOutputType = {
    id: number | null
    D_id: number | null
    ISBN: string | null
    qty: number | null
    age: number | null
    category: string | null
    book_name: string | null
    img_link: string | null
  }

  export type DonorBookMaxAggregateOutputType = {
    id: number | null
    D_id: number | null
    ISBN: string | null
    qty: number | null
    age: number | null
    category: string | null
    book_name: string | null
    img_link: string | null
  }

  export type DonorBookCountAggregateOutputType = {
    id: number
    D_id: number
    ISBN: number
    qty: number
    age: number
    category: number
    book_name: number
    img_link: number
    _all: number
  }


  export type DonorBookAvgAggregateInputType = {
    id?: true
    D_id?: true
    qty?: true
    age?: true
  }

  export type DonorBookSumAggregateInputType = {
    id?: true
    D_id?: true
    qty?: true
    age?: true
  }

  export type DonorBookMinAggregateInputType = {
    id?: true
    D_id?: true
    ISBN?: true
    qty?: true
    age?: true
    category?: true
    book_name?: true
    img_link?: true
  }

  export type DonorBookMaxAggregateInputType = {
    id?: true
    D_id?: true
    ISBN?: true
    qty?: true
    age?: true
    category?: true
    book_name?: true
    img_link?: true
  }

  export type DonorBookCountAggregateInputType = {
    id?: true
    D_id?: true
    ISBN?: true
    qty?: true
    age?: true
    category?: true
    book_name?: true
    img_link?: true
    _all?: true
  }

  export type DonorBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorBook to aggregate.
     */
    where?: DonorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorBooks to fetch.
     */
    orderBy?: DonorBookOrderByWithRelationInput | DonorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonorBooks
    **/
    _count?: true | DonorBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonorBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonorBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorBookMaxAggregateInputType
  }

  export type GetDonorBookAggregateType<T extends DonorBookAggregateArgs> = {
        [P in keyof T & keyof AggregateDonorBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonorBook[P]>
      : GetScalarType<T[P], AggregateDonorBook[P]>
  }




  export type DonorBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorBookWhereInput
    orderBy?: DonorBookOrderByWithAggregationInput | DonorBookOrderByWithAggregationInput[]
    by: DonorBookScalarFieldEnum[] | DonorBookScalarFieldEnum
    having?: DonorBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorBookCountAggregateInputType | true
    _avg?: DonorBookAvgAggregateInputType
    _sum?: DonorBookSumAggregateInputType
    _min?: DonorBookMinAggregateInputType
    _max?: DonorBookMaxAggregateInputType
  }

  export type DonorBookGroupByOutputType = {
    id: number
    D_id: number
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link: string | null
    _count: DonorBookCountAggregateOutputType | null
    _avg: DonorBookAvgAggregateOutputType | null
    _sum: DonorBookSumAggregateOutputType | null
    _min: DonorBookMinAggregateOutputType | null
    _max: DonorBookMaxAggregateOutputType | null
  }

  type GetDonorBookGroupByPayload<T extends DonorBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorBookGroupByOutputType[P]>
            : GetScalarType<T[P], DonorBookGroupByOutputType[P]>
        }
      >
    >


  export type DonorBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D_id?: boolean
    ISBN?: boolean
    qty?: boolean
    age?: boolean
    category?: boolean
    book_name?: boolean
    img_link?: boolean
    donor?: boolean | UserInfoDefaultArgs<ExtArgs>
    transactions?: boolean | DonorBook$transactionsArgs<ExtArgs>
    _count?: boolean | DonorBookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donorBook"]>

  export type DonorBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D_id?: boolean
    ISBN?: boolean
    qty?: boolean
    age?: boolean
    category?: boolean
    book_name?: boolean
    img_link?: boolean
    donor?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donorBook"]>

  export type DonorBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D_id?: boolean
    ISBN?: boolean
    qty?: boolean
    age?: boolean
    category?: boolean
    book_name?: boolean
    img_link?: boolean
    donor?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donorBook"]>

  export type DonorBookSelectScalar = {
    id?: boolean
    D_id?: boolean
    ISBN?: boolean
    qty?: boolean
    age?: boolean
    category?: boolean
    book_name?: boolean
    img_link?: boolean
  }

  export type DonorBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "D_id" | "ISBN" | "qty" | "age" | "category" | "book_name" | "img_link", ExtArgs["result"]["donorBook"]>
  export type DonorBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserInfoDefaultArgs<ExtArgs>
    transactions?: boolean | DonorBook$transactionsArgs<ExtArgs>
    _count?: boolean | DonorBookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonorBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserInfoDefaultArgs<ExtArgs>
  }
  export type DonorBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserInfoDefaultArgs<ExtArgs>
  }

  export type $DonorBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonorBook"
    objects: {
      donor: Prisma.$UserInfoPayload<ExtArgs>
      transactions: Prisma.$TransactionTablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      D_id: number
      ISBN: string
      qty: number
      age: number
      category: string
      book_name: string
      img_link: string | null
    }, ExtArgs["result"]["donorBook"]>
    composites: {}
  }

  type DonorBookGetPayload<S extends boolean | null | undefined | DonorBookDefaultArgs> = $Result.GetResult<Prisma.$DonorBookPayload, S>

  type DonorBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorBookCountAggregateInputType | true
    }

  export interface DonorBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonorBook'], meta: { name: 'DonorBook' } }
    /**
     * Find zero or one DonorBook that matches the filter.
     * @param {DonorBookFindUniqueArgs} args - Arguments to find a DonorBook
     * @example
     * // Get one DonorBook
     * const donorBook = await prisma.donorBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorBookFindUniqueArgs>(args: SelectSubset<T, DonorBookFindUniqueArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonorBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorBookFindUniqueOrThrowArgs} args - Arguments to find a DonorBook
     * @example
     * // Get one DonorBook
     * const donorBook = await prisma.donorBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorBookFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonorBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorBookFindFirstArgs} args - Arguments to find a DonorBook
     * @example
     * // Get one DonorBook
     * const donorBook = await prisma.donorBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorBookFindFirstArgs>(args?: SelectSubset<T, DonorBookFindFirstArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonorBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorBookFindFirstOrThrowArgs} args - Arguments to find a DonorBook
     * @example
     * // Get one DonorBook
     * const donorBook = await prisma.donorBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorBookFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonorBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonorBooks
     * const donorBooks = await prisma.donorBook.findMany()
     * 
     * // Get first 10 DonorBooks
     * const donorBooks = await prisma.donorBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorBookWithIdOnly = await prisma.donorBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorBookFindManyArgs>(args?: SelectSubset<T, DonorBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonorBook.
     * @param {DonorBookCreateArgs} args - Arguments to create a DonorBook.
     * @example
     * // Create one DonorBook
     * const DonorBook = await prisma.donorBook.create({
     *   data: {
     *     // ... data to create a DonorBook
     *   }
     * })
     * 
     */
    create<T extends DonorBookCreateArgs>(args: SelectSubset<T, DonorBookCreateArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonorBooks.
     * @param {DonorBookCreateManyArgs} args - Arguments to create many DonorBooks.
     * @example
     * // Create many DonorBooks
     * const donorBook = await prisma.donorBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorBookCreateManyArgs>(args?: SelectSubset<T, DonorBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonorBooks and returns the data saved in the database.
     * @param {DonorBookCreateManyAndReturnArgs} args - Arguments to create many DonorBooks.
     * @example
     * // Create many DonorBooks
     * const donorBook = await prisma.donorBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonorBooks and only return the `id`
     * const donorBookWithIdOnly = await prisma.donorBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorBookCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonorBook.
     * @param {DonorBookDeleteArgs} args - Arguments to delete one DonorBook.
     * @example
     * // Delete one DonorBook
     * const DonorBook = await prisma.donorBook.delete({
     *   where: {
     *     // ... filter to delete one DonorBook
     *   }
     * })
     * 
     */
    delete<T extends DonorBookDeleteArgs>(args: SelectSubset<T, DonorBookDeleteArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonorBook.
     * @param {DonorBookUpdateArgs} args - Arguments to update one DonorBook.
     * @example
     * // Update one DonorBook
     * const donorBook = await prisma.donorBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorBookUpdateArgs>(args: SelectSubset<T, DonorBookUpdateArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonorBooks.
     * @param {DonorBookDeleteManyArgs} args - Arguments to filter DonorBooks to delete.
     * @example
     * // Delete a few DonorBooks
     * const { count } = await prisma.donorBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorBookDeleteManyArgs>(args?: SelectSubset<T, DonorBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonorBooks
     * const donorBook = await prisma.donorBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorBookUpdateManyArgs>(args: SelectSubset<T, DonorBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonorBooks and returns the data updated in the database.
     * @param {DonorBookUpdateManyAndReturnArgs} args - Arguments to update many DonorBooks.
     * @example
     * // Update many DonorBooks
     * const donorBook = await prisma.donorBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonorBooks and only return the `id`
     * const donorBookWithIdOnly = await prisma.donorBook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonorBookUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonorBook.
     * @param {DonorBookUpsertArgs} args - Arguments to update or create a DonorBook.
     * @example
     * // Update or create a DonorBook
     * const donorBook = await prisma.donorBook.upsert({
     *   create: {
     *     // ... data to create a DonorBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonorBook we want to update
     *   }
     * })
     */
    upsert<T extends DonorBookUpsertArgs>(args: SelectSubset<T, DonorBookUpsertArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorBookCountArgs} args - Arguments to filter DonorBooks to count.
     * @example
     * // Count the number of DonorBooks
     * const count = await prisma.donorBook.count({
     *   where: {
     *     // ... the filter for the DonorBooks we want to count
     *   }
     * })
    **/
    count<T extends DonorBookCountArgs>(
      args?: Subset<T, DonorBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonorBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonorBookAggregateArgs>(args: Subset<T, DonorBookAggregateArgs>): Prisma.PrismaPromise<GetDonorBookAggregateType<T>>

    /**
     * Group by DonorBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonorBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorBookGroupByArgs['orderBy'] }
        : { orderBy?: DonorBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonorBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonorBook model
   */
  readonly fields: DonorBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonorBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends DonorBook$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, DonorBook$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonorBook model
   */ 
  interface DonorBookFieldRefs {
    readonly id: FieldRef<"DonorBook", 'Int'>
    readonly D_id: FieldRef<"DonorBook", 'Int'>
    readonly ISBN: FieldRef<"DonorBook", 'String'>
    readonly qty: FieldRef<"DonorBook", 'Int'>
    readonly age: FieldRef<"DonorBook", 'Int'>
    readonly category: FieldRef<"DonorBook", 'String'>
    readonly book_name: FieldRef<"DonorBook", 'String'>
    readonly img_link: FieldRef<"DonorBook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DonorBook findUnique
   */
  export type DonorBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * Filter, which DonorBook to fetch.
     */
    where: DonorBookWhereUniqueInput
  }

  /**
   * DonorBook findUniqueOrThrow
   */
  export type DonorBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * Filter, which DonorBook to fetch.
     */
    where: DonorBookWhereUniqueInput
  }

  /**
   * DonorBook findFirst
   */
  export type DonorBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * Filter, which DonorBook to fetch.
     */
    where?: DonorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorBooks to fetch.
     */
    orderBy?: DonorBookOrderByWithRelationInput | DonorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorBooks.
     */
    cursor?: DonorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorBooks.
     */
    distinct?: DonorBookScalarFieldEnum | DonorBookScalarFieldEnum[]
  }

  /**
   * DonorBook findFirstOrThrow
   */
  export type DonorBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * Filter, which DonorBook to fetch.
     */
    where?: DonorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorBooks to fetch.
     */
    orderBy?: DonorBookOrderByWithRelationInput | DonorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonorBooks.
     */
    cursor?: DonorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonorBooks.
     */
    distinct?: DonorBookScalarFieldEnum | DonorBookScalarFieldEnum[]
  }

  /**
   * DonorBook findMany
   */
  export type DonorBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * Filter, which DonorBooks to fetch.
     */
    where?: DonorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonorBooks to fetch.
     */
    orderBy?: DonorBookOrderByWithRelationInput | DonorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonorBooks.
     */
    cursor?: DonorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonorBooks.
     */
    skip?: number
    distinct?: DonorBookScalarFieldEnum | DonorBookScalarFieldEnum[]
  }

  /**
   * DonorBook create
   */
  export type DonorBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * The data needed to create a DonorBook.
     */
    data: XOR<DonorBookCreateInput, DonorBookUncheckedCreateInput>
  }

  /**
   * DonorBook createMany
   */
  export type DonorBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonorBooks.
     */
    data: DonorBookCreateManyInput | DonorBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonorBook createManyAndReturn
   */
  export type DonorBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * The data used to create many DonorBooks.
     */
    data: DonorBookCreateManyInput | DonorBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorBook update
   */
  export type DonorBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * The data needed to update a DonorBook.
     */
    data: XOR<DonorBookUpdateInput, DonorBookUncheckedUpdateInput>
    /**
     * Choose, which DonorBook to update.
     */
    where: DonorBookWhereUniqueInput
  }

  /**
   * DonorBook updateMany
   */
  export type DonorBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonorBooks.
     */
    data: XOR<DonorBookUpdateManyMutationInput, DonorBookUncheckedUpdateManyInput>
    /**
     * Filter which DonorBooks to update
     */
    where?: DonorBookWhereInput
    /**
     * Limit how many DonorBooks to update.
     */
    limit?: number
  }

  /**
   * DonorBook updateManyAndReturn
   */
  export type DonorBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * The data used to update DonorBooks.
     */
    data: XOR<DonorBookUpdateManyMutationInput, DonorBookUncheckedUpdateManyInput>
    /**
     * Filter which DonorBooks to update
     */
    where?: DonorBookWhereInput
    /**
     * Limit how many DonorBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonorBook upsert
   */
  export type DonorBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * The filter to search for the DonorBook to update in case it exists.
     */
    where: DonorBookWhereUniqueInput
    /**
     * In case the DonorBook found by the `where` argument doesn't exist, create a new DonorBook with this data.
     */
    create: XOR<DonorBookCreateInput, DonorBookUncheckedCreateInput>
    /**
     * In case the DonorBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorBookUpdateInput, DonorBookUncheckedUpdateInput>
  }

  /**
   * DonorBook delete
   */
  export type DonorBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
    /**
     * Filter which DonorBook to delete.
     */
    where: DonorBookWhereUniqueInput
  }

  /**
   * DonorBook deleteMany
   */
  export type DonorBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonorBooks to delete
     */
    where?: DonorBookWhereInput
    /**
     * Limit how many DonorBooks to delete.
     */
    limit?: number
  }

  /**
   * DonorBook.transactions
   */
  export type DonorBook$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    where?: TransactionTableWhereInput
    orderBy?: TransactionTableOrderByWithRelationInput | TransactionTableOrderByWithRelationInput[]
    cursor?: TransactionTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionTableScalarFieldEnum | TransactionTableScalarFieldEnum[]
  }

  /**
   * DonorBook without action
   */
  export type DonorBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorBook
     */
    select?: DonorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonorBook
     */
    omit?: DonorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonorBookInclude<ExtArgs> | null
  }


  /**
   * Model ClientBook
   */

  export type AggregateClientBook = {
    _count: ClientBookCountAggregateOutputType | null
    _avg: ClientBookAvgAggregateOutputType | null
    _sum: ClientBookSumAggregateOutputType | null
    _min: ClientBookMinAggregateOutputType | null
    _max: ClientBookMaxAggregateOutputType | null
  }

  export type ClientBookAvgAggregateOutputType = {
    id: number | null
    C_id: number | null
    qty: number | null
  }

  export type ClientBookSumAggregateOutputType = {
    id: number | null
    C_id: number | null
    qty: number | null
  }

  export type ClientBookMinAggregateOutputType = {
    id: number | null
    C_id: number | null
    ISBN: string | null
    qty: number | null
  }

  export type ClientBookMaxAggregateOutputType = {
    id: number | null
    C_id: number | null
    ISBN: string | null
    qty: number | null
  }

  export type ClientBookCountAggregateOutputType = {
    id: number
    C_id: number
    ISBN: number
    qty: number
    _all: number
  }


  export type ClientBookAvgAggregateInputType = {
    id?: true
    C_id?: true
    qty?: true
  }

  export type ClientBookSumAggregateInputType = {
    id?: true
    C_id?: true
    qty?: true
  }

  export type ClientBookMinAggregateInputType = {
    id?: true
    C_id?: true
    ISBN?: true
    qty?: true
  }

  export type ClientBookMaxAggregateInputType = {
    id?: true
    C_id?: true
    ISBN?: true
    qty?: true
  }

  export type ClientBookCountAggregateInputType = {
    id?: true
    C_id?: true
    ISBN?: true
    qty?: true
    _all?: true
  }

  export type ClientBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientBook to aggregate.
     */
    where?: ClientBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientBooks to fetch.
     */
    orderBy?: ClientBookOrderByWithRelationInput | ClientBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientBooks
    **/
    _count?: true | ClientBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientBookMaxAggregateInputType
  }

  export type GetClientBookAggregateType<T extends ClientBookAggregateArgs> = {
        [P in keyof T & keyof AggregateClientBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientBook[P]>
      : GetScalarType<T[P], AggregateClientBook[P]>
  }




  export type ClientBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientBookWhereInput
    orderBy?: ClientBookOrderByWithAggregationInput | ClientBookOrderByWithAggregationInput[]
    by: ClientBookScalarFieldEnum[] | ClientBookScalarFieldEnum
    having?: ClientBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientBookCountAggregateInputType | true
    _avg?: ClientBookAvgAggregateInputType
    _sum?: ClientBookSumAggregateInputType
    _min?: ClientBookMinAggregateInputType
    _max?: ClientBookMaxAggregateInputType
  }

  export type ClientBookGroupByOutputType = {
    id: number
    C_id: number
    ISBN: string
    qty: number
    _count: ClientBookCountAggregateOutputType | null
    _avg: ClientBookAvgAggregateOutputType | null
    _sum: ClientBookSumAggregateOutputType | null
    _min: ClientBookMinAggregateOutputType | null
    _max: ClientBookMaxAggregateOutputType | null
  }

  type GetClientBookGroupByPayload<T extends ClientBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientBookGroupByOutputType[P]>
            : GetScalarType<T[P], ClientBookGroupByOutputType[P]>
        }
      >
    >


  export type ClientBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_id?: boolean
    ISBN?: boolean
    qty?: boolean
    client?: boolean | UserInfoDefaultArgs<ExtArgs>
    transactions?: boolean | ClientBook$transactionsArgs<ExtArgs>
    _count?: boolean | ClientBookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientBook"]>

  export type ClientBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_id?: boolean
    ISBN?: boolean
    qty?: boolean
    client?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientBook"]>

  export type ClientBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_id?: boolean
    ISBN?: boolean
    qty?: boolean
    client?: boolean | UserInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientBook"]>

  export type ClientBookSelectScalar = {
    id?: boolean
    C_id?: boolean
    ISBN?: boolean
    qty?: boolean
  }

  export type ClientBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "C_id" | "ISBN" | "qty", ExtArgs["result"]["clientBook"]>
  export type ClientBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserInfoDefaultArgs<ExtArgs>
    transactions?: boolean | ClientBook$transactionsArgs<ExtArgs>
    _count?: boolean | ClientBookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserInfoDefaultArgs<ExtArgs>
  }
  export type ClientBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserInfoDefaultArgs<ExtArgs>
  }

  export type $ClientBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientBook"
    objects: {
      client: Prisma.$UserInfoPayload<ExtArgs>
      transactions: Prisma.$TransactionTablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      C_id: number
      ISBN: string
      qty: number
    }, ExtArgs["result"]["clientBook"]>
    composites: {}
  }

  type ClientBookGetPayload<S extends boolean | null | undefined | ClientBookDefaultArgs> = $Result.GetResult<Prisma.$ClientBookPayload, S>

  type ClientBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientBookCountAggregateInputType | true
    }

  export interface ClientBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientBook'], meta: { name: 'ClientBook' } }
    /**
     * Find zero or one ClientBook that matches the filter.
     * @param {ClientBookFindUniqueArgs} args - Arguments to find a ClientBook
     * @example
     * // Get one ClientBook
     * const clientBook = await prisma.clientBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientBookFindUniqueArgs>(args: SelectSubset<T, ClientBookFindUniqueArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientBookFindUniqueOrThrowArgs} args - Arguments to find a ClientBook
     * @example
     * // Get one ClientBook
     * const clientBook = await prisma.clientBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientBookFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientBookFindFirstArgs} args - Arguments to find a ClientBook
     * @example
     * // Get one ClientBook
     * const clientBook = await prisma.clientBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientBookFindFirstArgs>(args?: SelectSubset<T, ClientBookFindFirstArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientBookFindFirstOrThrowArgs} args - Arguments to find a ClientBook
     * @example
     * // Get one ClientBook
     * const clientBook = await prisma.clientBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientBookFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientBooks
     * const clientBooks = await prisma.clientBook.findMany()
     * 
     * // Get first 10 ClientBooks
     * const clientBooks = await prisma.clientBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientBookWithIdOnly = await prisma.clientBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientBookFindManyArgs>(args?: SelectSubset<T, ClientBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientBook.
     * @param {ClientBookCreateArgs} args - Arguments to create a ClientBook.
     * @example
     * // Create one ClientBook
     * const ClientBook = await prisma.clientBook.create({
     *   data: {
     *     // ... data to create a ClientBook
     *   }
     * })
     * 
     */
    create<T extends ClientBookCreateArgs>(args: SelectSubset<T, ClientBookCreateArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientBooks.
     * @param {ClientBookCreateManyArgs} args - Arguments to create many ClientBooks.
     * @example
     * // Create many ClientBooks
     * const clientBook = await prisma.clientBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientBookCreateManyArgs>(args?: SelectSubset<T, ClientBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientBooks and returns the data saved in the database.
     * @param {ClientBookCreateManyAndReturnArgs} args - Arguments to create many ClientBooks.
     * @example
     * // Create many ClientBooks
     * const clientBook = await prisma.clientBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientBooks and only return the `id`
     * const clientBookWithIdOnly = await prisma.clientBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientBookCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientBook.
     * @param {ClientBookDeleteArgs} args - Arguments to delete one ClientBook.
     * @example
     * // Delete one ClientBook
     * const ClientBook = await prisma.clientBook.delete({
     *   where: {
     *     // ... filter to delete one ClientBook
     *   }
     * })
     * 
     */
    delete<T extends ClientBookDeleteArgs>(args: SelectSubset<T, ClientBookDeleteArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientBook.
     * @param {ClientBookUpdateArgs} args - Arguments to update one ClientBook.
     * @example
     * // Update one ClientBook
     * const clientBook = await prisma.clientBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientBookUpdateArgs>(args: SelectSubset<T, ClientBookUpdateArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientBooks.
     * @param {ClientBookDeleteManyArgs} args - Arguments to filter ClientBooks to delete.
     * @example
     * // Delete a few ClientBooks
     * const { count } = await prisma.clientBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientBookDeleteManyArgs>(args?: SelectSubset<T, ClientBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientBooks
     * const clientBook = await prisma.clientBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientBookUpdateManyArgs>(args: SelectSubset<T, ClientBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientBooks and returns the data updated in the database.
     * @param {ClientBookUpdateManyAndReturnArgs} args - Arguments to update many ClientBooks.
     * @example
     * // Update many ClientBooks
     * const clientBook = await prisma.clientBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientBooks and only return the `id`
     * const clientBookWithIdOnly = await prisma.clientBook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientBookUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientBook.
     * @param {ClientBookUpsertArgs} args - Arguments to update or create a ClientBook.
     * @example
     * // Update or create a ClientBook
     * const clientBook = await prisma.clientBook.upsert({
     *   create: {
     *     // ... data to create a ClientBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientBook we want to update
     *   }
     * })
     */
    upsert<T extends ClientBookUpsertArgs>(args: SelectSubset<T, ClientBookUpsertArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientBookCountArgs} args - Arguments to filter ClientBooks to count.
     * @example
     * // Count the number of ClientBooks
     * const count = await prisma.clientBook.count({
     *   where: {
     *     // ... the filter for the ClientBooks we want to count
     *   }
     * })
    **/
    count<T extends ClientBookCountArgs>(
      args?: Subset<T, ClientBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientBookAggregateArgs>(args: Subset<T, ClientBookAggregateArgs>): Prisma.PrismaPromise<GetClientBookAggregateType<T>>

    /**
     * Group by ClientBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientBookGroupByArgs['orderBy'] }
        : { orderBy?: ClientBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientBook model
   */
  readonly fields: ClientBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends ClientBook$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, ClientBook$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientBook model
   */ 
  interface ClientBookFieldRefs {
    readonly id: FieldRef<"ClientBook", 'Int'>
    readonly C_id: FieldRef<"ClientBook", 'Int'>
    readonly ISBN: FieldRef<"ClientBook", 'String'>
    readonly qty: FieldRef<"ClientBook", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClientBook findUnique
   */
  export type ClientBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * Filter, which ClientBook to fetch.
     */
    where: ClientBookWhereUniqueInput
  }

  /**
   * ClientBook findUniqueOrThrow
   */
  export type ClientBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * Filter, which ClientBook to fetch.
     */
    where: ClientBookWhereUniqueInput
  }

  /**
   * ClientBook findFirst
   */
  export type ClientBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * Filter, which ClientBook to fetch.
     */
    where?: ClientBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientBooks to fetch.
     */
    orderBy?: ClientBookOrderByWithRelationInput | ClientBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientBooks.
     */
    cursor?: ClientBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientBooks.
     */
    distinct?: ClientBookScalarFieldEnum | ClientBookScalarFieldEnum[]
  }

  /**
   * ClientBook findFirstOrThrow
   */
  export type ClientBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * Filter, which ClientBook to fetch.
     */
    where?: ClientBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientBooks to fetch.
     */
    orderBy?: ClientBookOrderByWithRelationInput | ClientBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientBooks.
     */
    cursor?: ClientBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientBooks.
     */
    distinct?: ClientBookScalarFieldEnum | ClientBookScalarFieldEnum[]
  }

  /**
   * ClientBook findMany
   */
  export type ClientBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * Filter, which ClientBooks to fetch.
     */
    where?: ClientBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientBooks to fetch.
     */
    orderBy?: ClientBookOrderByWithRelationInput | ClientBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientBooks.
     */
    cursor?: ClientBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientBooks.
     */
    skip?: number
    distinct?: ClientBookScalarFieldEnum | ClientBookScalarFieldEnum[]
  }

  /**
   * ClientBook create
   */
  export type ClientBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientBook.
     */
    data: XOR<ClientBookCreateInput, ClientBookUncheckedCreateInput>
  }

  /**
   * ClientBook createMany
   */
  export type ClientBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientBooks.
     */
    data: ClientBookCreateManyInput | ClientBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientBook createManyAndReturn
   */
  export type ClientBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * The data used to create many ClientBooks.
     */
    data: ClientBookCreateManyInput | ClientBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientBook update
   */
  export type ClientBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientBook.
     */
    data: XOR<ClientBookUpdateInput, ClientBookUncheckedUpdateInput>
    /**
     * Choose, which ClientBook to update.
     */
    where: ClientBookWhereUniqueInput
  }

  /**
   * ClientBook updateMany
   */
  export type ClientBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientBooks.
     */
    data: XOR<ClientBookUpdateManyMutationInput, ClientBookUncheckedUpdateManyInput>
    /**
     * Filter which ClientBooks to update
     */
    where?: ClientBookWhereInput
    /**
     * Limit how many ClientBooks to update.
     */
    limit?: number
  }

  /**
   * ClientBook updateManyAndReturn
   */
  export type ClientBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * The data used to update ClientBooks.
     */
    data: XOR<ClientBookUpdateManyMutationInput, ClientBookUncheckedUpdateManyInput>
    /**
     * Filter which ClientBooks to update
     */
    where?: ClientBookWhereInput
    /**
     * Limit how many ClientBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientBook upsert
   */
  export type ClientBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientBook to update in case it exists.
     */
    where: ClientBookWhereUniqueInput
    /**
     * In case the ClientBook found by the `where` argument doesn't exist, create a new ClientBook with this data.
     */
    create: XOR<ClientBookCreateInput, ClientBookUncheckedCreateInput>
    /**
     * In case the ClientBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientBookUpdateInput, ClientBookUncheckedUpdateInput>
  }

  /**
   * ClientBook delete
   */
  export type ClientBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
    /**
     * Filter which ClientBook to delete.
     */
    where: ClientBookWhereUniqueInput
  }

  /**
   * ClientBook deleteMany
   */
  export type ClientBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientBooks to delete
     */
    where?: ClientBookWhereInput
    /**
     * Limit how many ClientBooks to delete.
     */
    limit?: number
  }

  /**
   * ClientBook.transactions
   */
  export type ClientBook$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    where?: TransactionTableWhereInput
    orderBy?: TransactionTableOrderByWithRelationInput | TransactionTableOrderByWithRelationInput[]
    cursor?: TransactionTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionTableScalarFieldEnum | TransactionTableScalarFieldEnum[]
  }

  /**
   * ClientBook without action
   */
  export type ClientBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientBook
     */
    select?: ClientBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientBook
     */
    omit?: ClientBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientBookInclude<ExtArgs> | null
  }


  /**
   * Model TransactionTable
   */

  export type AggregateTransactionTable = {
    _count: TransactionTableCountAggregateOutputType | null
    _avg: TransactionTableAvgAggregateOutputType | null
    _sum: TransactionTableSumAggregateOutputType | null
    _min: TransactionTableMinAggregateOutputType | null
    _max: TransactionTableMaxAggregateOutputType | null
  }

  export type TransactionTableAvgAggregateOutputType = {
    id: number | null
    donorBookId: number | null
    clientBookId: number | null
    NGO_id: number | null
    qty: number | null
  }

  export type TransactionTableSumAggregateOutputType = {
    id: number | null
    donorBookId: number | null
    clientBookId: number | null
    NGO_id: number | null
    qty: number | null
  }

  export type TransactionTableMinAggregateOutputType = {
    id: number | null
    donorBookId: number | null
    clientBookId: number | null
    NGO_id: number | null
    qty: number | null
    status: string | null
  }

  export type TransactionTableMaxAggregateOutputType = {
    id: number | null
    donorBookId: number | null
    clientBookId: number | null
    NGO_id: number | null
    qty: number | null
    status: string | null
  }

  export type TransactionTableCountAggregateOutputType = {
    id: number
    donorBookId: number
    clientBookId: number
    NGO_id: number
    qty: number
    status: number
    _all: number
  }


  export type TransactionTableAvgAggregateInputType = {
    id?: true
    donorBookId?: true
    clientBookId?: true
    NGO_id?: true
    qty?: true
  }

  export type TransactionTableSumAggregateInputType = {
    id?: true
    donorBookId?: true
    clientBookId?: true
    NGO_id?: true
    qty?: true
  }

  export type TransactionTableMinAggregateInputType = {
    id?: true
    donorBookId?: true
    clientBookId?: true
    NGO_id?: true
    qty?: true
    status?: true
  }

  export type TransactionTableMaxAggregateInputType = {
    id?: true
    donorBookId?: true
    clientBookId?: true
    NGO_id?: true
    qty?: true
    status?: true
  }

  export type TransactionTableCountAggregateInputType = {
    id?: true
    donorBookId?: true
    clientBookId?: true
    NGO_id?: true
    qty?: true
    status?: true
    _all?: true
  }

  export type TransactionTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTable to aggregate.
     */
    where?: TransactionTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTables to fetch.
     */
    orderBy?: TransactionTableOrderByWithRelationInput | TransactionTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionTables
    **/
    _count?: true | TransactionTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionTableMaxAggregateInputType
  }

  export type GetTransactionTableAggregateType<T extends TransactionTableAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionTable[P]>
      : GetScalarType<T[P], AggregateTransactionTable[P]>
  }




  export type TransactionTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTableWhereInput
    orderBy?: TransactionTableOrderByWithAggregationInput | TransactionTableOrderByWithAggregationInput[]
    by: TransactionTableScalarFieldEnum[] | TransactionTableScalarFieldEnum
    having?: TransactionTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionTableCountAggregateInputType | true
    _avg?: TransactionTableAvgAggregateInputType
    _sum?: TransactionTableSumAggregateInputType
    _min?: TransactionTableMinAggregateInputType
    _max?: TransactionTableMaxAggregateInputType
  }

  export type TransactionTableGroupByOutputType = {
    id: number
    donorBookId: number
    clientBookId: number
    NGO_id: number
    qty: number
    status: string
    _count: TransactionTableCountAggregateOutputType | null
    _avg: TransactionTableAvgAggregateOutputType | null
    _sum: TransactionTableSumAggregateOutputType | null
    _min: TransactionTableMinAggregateOutputType | null
    _max: TransactionTableMaxAggregateOutputType | null
  }

  type GetTransactionTableGroupByPayload<T extends TransactionTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTableGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTableGroupByOutputType[P]>
        }
      >
    >


  export type TransactionTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorBookId?: boolean
    clientBookId?: boolean
    NGO_id?: boolean
    qty?: boolean
    status?: boolean
    ngo?: boolean | UserInfoDefaultArgs<ExtArgs>
    donorBook?: boolean | DonorBookDefaultArgs<ExtArgs>
    clientBook?: boolean | ClientBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTable"]>

  export type TransactionTableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorBookId?: boolean
    clientBookId?: boolean
    NGO_id?: boolean
    qty?: boolean
    status?: boolean
    ngo?: boolean | UserInfoDefaultArgs<ExtArgs>
    donorBook?: boolean | DonorBookDefaultArgs<ExtArgs>
    clientBook?: boolean | ClientBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTable"]>

  export type TransactionTableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorBookId?: boolean
    clientBookId?: boolean
    NGO_id?: boolean
    qty?: boolean
    status?: boolean
    ngo?: boolean | UserInfoDefaultArgs<ExtArgs>
    donorBook?: boolean | DonorBookDefaultArgs<ExtArgs>
    clientBook?: boolean | ClientBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionTable"]>

  export type TransactionTableSelectScalar = {
    id?: boolean
    donorBookId?: boolean
    clientBookId?: boolean
    NGO_id?: boolean
    qty?: boolean
    status?: boolean
  }

  export type TransactionTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donorBookId" | "clientBookId" | "NGO_id" | "qty" | "status", ExtArgs["result"]["transactionTable"]>
  export type TransactionTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | UserInfoDefaultArgs<ExtArgs>
    donorBook?: boolean | DonorBookDefaultArgs<ExtArgs>
    clientBook?: boolean | ClientBookDefaultArgs<ExtArgs>
  }
  export type TransactionTableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | UserInfoDefaultArgs<ExtArgs>
    donorBook?: boolean | DonorBookDefaultArgs<ExtArgs>
    clientBook?: boolean | ClientBookDefaultArgs<ExtArgs>
  }
  export type TransactionTableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ngo?: boolean | UserInfoDefaultArgs<ExtArgs>
    donorBook?: boolean | DonorBookDefaultArgs<ExtArgs>
    clientBook?: boolean | ClientBookDefaultArgs<ExtArgs>
  }

  export type $TransactionTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionTable"
    objects: {
      ngo: Prisma.$UserInfoPayload<ExtArgs>
      donorBook: Prisma.$DonorBookPayload<ExtArgs>
      clientBook: Prisma.$ClientBookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      donorBookId: number
      clientBookId: number
      NGO_id: number
      qty: number
      status: string
    }, ExtArgs["result"]["transactionTable"]>
    composites: {}
  }

  type TransactionTableGetPayload<S extends boolean | null | undefined | TransactionTableDefaultArgs> = $Result.GetResult<Prisma.$TransactionTablePayload, S>

  type TransactionTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionTableCountAggregateInputType | true
    }

  export interface TransactionTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionTable'], meta: { name: 'TransactionTable' } }
    /**
     * Find zero or one TransactionTable that matches the filter.
     * @param {TransactionTableFindUniqueArgs} args - Arguments to find a TransactionTable
     * @example
     * // Get one TransactionTable
     * const transactionTable = await prisma.transactionTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionTableFindUniqueArgs>(args: SelectSubset<T, TransactionTableFindUniqueArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionTableFindUniqueOrThrowArgs} args - Arguments to find a TransactionTable
     * @example
     * // Get one TransactionTable
     * const transactionTable = await prisma.transactionTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionTableFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTableFindFirstArgs} args - Arguments to find a TransactionTable
     * @example
     * // Get one TransactionTable
     * const transactionTable = await prisma.transactionTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionTableFindFirstArgs>(args?: SelectSubset<T, TransactionTableFindFirstArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTableFindFirstOrThrowArgs} args - Arguments to find a TransactionTable
     * @example
     * // Get one TransactionTable
     * const transactionTable = await prisma.transactionTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionTableFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionTables
     * const transactionTables = await prisma.transactionTable.findMany()
     * 
     * // Get first 10 TransactionTables
     * const transactionTables = await prisma.transactionTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionTableWithIdOnly = await prisma.transactionTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionTableFindManyArgs>(args?: SelectSubset<T, TransactionTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionTable.
     * @param {TransactionTableCreateArgs} args - Arguments to create a TransactionTable.
     * @example
     * // Create one TransactionTable
     * const TransactionTable = await prisma.transactionTable.create({
     *   data: {
     *     // ... data to create a TransactionTable
     *   }
     * })
     * 
     */
    create<T extends TransactionTableCreateArgs>(args: SelectSubset<T, TransactionTableCreateArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionTables.
     * @param {TransactionTableCreateManyArgs} args - Arguments to create many TransactionTables.
     * @example
     * // Create many TransactionTables
     * const transactionTable = await prisma.transactionTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionTableCreateManyArgs>(args?: SelectSubset<T, TransactionTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionTables and returns the data saved in the database.
     * @param {TransactionTableCreateManyAndReturnArgs} args - Arguments to create many TransactionTables.
     * @example
     * // Create many TransactionTables
     * const transactionTable = await prisma.transactionTable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionTables and only return the `id`
     * const transactionTableWithIdOnly = await prisma.transactionTable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionTableCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionTable.
     * @param {TransactionTableDeleteArgs} args - Arguments to delete one TransactionTable.
     * @example
     * // Delete one TransactionTable
     * const TransactionTable = await prisma.transactionTable.delete({
     *   where: {
     *     // ... filter to delete one TransactionTable
     *   }
     * })
     * 
     */
    delete<T extends TransactionTableDeleteArgs>(args: SelectSubset<T, TransactionTableDeleteArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionTable.
     * @param {TransactionTableUpdateArgs} args - Arguments to update one TransactionTable.
     * @example
     * // Update one TransactionTable
     * const transactionTable = await prisma.transactionTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionTableUpdateArgs>(args: SelectSubset<T, TransactionTableUpdateArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionTables.
     * @param {TransactionTableDeleteManyArgs} args - Arguments to filter TransactionTables to delete.
     * @example
     * // Delete a few TransactionTables
     * const { count } = await prisma.transactionTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionTableDeleteManyArgs>(args?: SelectSubset<T, TransactionTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionTables
     * const transactionTable = await prisma.transactionTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionTableUpdateManyArgs>(args: SelectSubset<T, TransactionTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTables and returns the data updated in the database.
     * @param {TransactionTableUpdateManyAndReturnArgs} args - Arguments to update many TransactionTables.
     * @example
     * // Update many TransactionTables
     * const transactionTable = await prisma.transactionTable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionTables and only return the `id`
     * const transactionTableWithIdOnly = await prisma.transactionTable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionTableUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionTableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionTable.
     * @param {TransactionTableUpsertArgs} args - Arguments to update or create a TransactionTable.
     * @example
     * // Update or create a TransactionTable
     * const transactionTable = await prisma.transactionTable.upsert({
     *   create: {
     *     // ... data to create a TransactionTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionTable we want to update
     *   }
     * })
     */
    upsert<T extends TransactionTableUpsertArgs>(args: SelectSubset<T, TransactionTableUpsertArgs<ExtArgs>>): Prisma__TransactionTableClient<$Result.GetResult<Prisma.$TransactionTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTableCountArgs} args - Arguments to filter TransactionTables to count.
     * @example
     * // Count the number of TransactionTables
     * const count = await prisma.transactionTable.count({
     *   where: {
     *     // ... the filter for the TransactionTables we want to count
     *   }
     * })
    **/
    count<T extends TransactionTableCountArgs>(
      args?: Subset<T, TransactionTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionTableAggregateArgs>(args: Subset<T, TransactionTableAggregateArgs>): Prisma.PrismaPromise<GetTransactionTableAggregateType<T>>

    /**
     * Group by TransactionTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionTableGroupByArgs['orderBy'] }
        : { orderBy?: TransactionTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionTable model
   */
  readonly fields: TransactionTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ngo<T extends UserInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserInfoDefaultArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donorBook<T extends DonorBookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonorBookDefaultArgs<ExtArgs>>): Prisma__DonorBookClient<$Result.GetResult<Prisma.$DonorBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clientBook<T extends ClientBookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientBookDefaultArgs<ExtArgs>>): Prisma__ClientBookClient<$Result.GetResult<Prisma.$ClientBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionTable model
   */ 
  interface TransactionTableFieldRefs {
    readonly id: FieldRef<"TransactionTable", 'Int'>
    readonly donorBookId: FieldRef<"TransactionTable", 'Int'>
    readonly clientBookId: FieldRef<"TransactionTable", 'Int'>
    readonly NGO_id: FieldRef<"TransactionTable", 'Int'>
    readonly qty: FieldRef<"TransactionTable", 'Int'>
    readonly status: FieldRef<"TransactionTable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionTable findUnique
   */
  export type TransactionTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTable to fetch.
     */
    where: TransactionTableWhereUniqueInput
  }

  /**
   * TransactionTable findUniqueOrThrow
   */
  export type TransactionTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTable to fetch.
     */
    where: TransactionTableWhereUniqueInput
  }

  /**
   * TransactionTable findFirst
   */
  export type TransactionTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTable to fetch.
     */
    where?: TransactionTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTables to fetch.
     */
    orderBy?: TransactionTableOrderByWithRelationInput | TransactionTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTables.
     */
    cursor?: TransactionTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTables.
     */
    distinct?: TransactionTableScalarFieldEnum | TransactionTableScalarFieldEnum[]
  }

  /**
   * TransactionTable findFirstOrThrow
   */
  export type TransactionTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTable to fetch.
     */
    where?: TransactionTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTables to fetch.
     */
    orderBy?: TransactionTableOrderByWithRelationInput | TransactionTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTables.
     */
    cursor?: TransactionTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTables.
     */
    distinct?: TransactionTableScalarFieldEnum | TransactionTableScalarFieldEnum[]
  }

  /**
   * TransactionTable findMany
   */
  export type TransactionTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTables to fetch.
     */
    where?: TransactionTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTables to fetch.
     */
    orderBy?: TransactionTableOrderByWithRelationInput | TransactionTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionTables.
     */
    cursor?: TransactionTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTables.
     */
    skip?: number
    distinct?: TransactionTableScalarFieldEnum | TransactionTableScalarFieldEnum[]
  }

  /**
   * TransactionTable create
   */
  export type TransactionTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionTable.
     */
    data: XOR<TransactionTableCreateInput, TransactionTableUncheckedCreateInput>
  }

  /**
   * TransactionTable createMany
   */
  export type TransactionTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionTables.
     */
    data: TransactionTableCreateManyInput | TransactionTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionTable createManyAndReturn
   */
  export type TransactionTableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionTables.
     */
    data: TransactionTableCreateManyInput | TransactionTableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionTable update
   */
  export type TransactionTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionTable.
     */
    data: XOR<TransactionTableUpdateInput, TransactionTableUncheckedUpdateInput>
    /**
     * Choose, which TransactionTable to update.
     */
    where: TransactionTableWhereUniqueInput
  }

  /**
   * TransactionTable updateMany
   */
  export type TransactionTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionTables.
     */
    data: XOR<TransactionTableUpdateManyMutationInput, TransactionTableUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTables to update
     */
    where?: TransactionTableWhereInput
    /**
     * Limit how many TransactionTables to update.
     */
    limit?: number
  }

  /**
   * TransactionTable updateManyAndReturn
   */
  export type TransactionTableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * The data used to update TransactionTables.
     */
    data: XOR<TransactionTableUpdateManyMutationInput, TransactionTableUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTables to update
     */
    where?: TransactionTableWhereInput
    /**
     * Limit how many TransactionTables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionTable upsert
   */
  export type TransactionTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionTable to update in case it exists.
     */
    where: TransactionTableWhereUniqueInput
    /**
     * In case the TransactionTable found by the `where` argument doesn't exist, create a new TransactionTable with this data.
     */
    create: XOR<TransactionTableCreateInput, TransactionTableUncheckedCreateInput>
    /**
     * In case the TransactionTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionTableUpdateInput, TransactionTableUncheckedUpdateInput>
  }

  /**
   * TransactionTable delete
   */
  export type TransactionTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
    /**
     * Filter which TransactionTable to delete.
     */
    where: TransactionTableWhereUniqueInput
  }

  /**
   * TransactionTable deleteMany
   */
  export type TransactionTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTables to delete
     */
    where?: TransactionTableWhereInput
    /**
     * Limit how many TransactionTables to delete.
     */
    limit?: number
  }

  /**
   * TransactionTable without action
   */
  export type TransactionTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTable
     */
    select?: TransactionTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionTable
     */
    omit?: TransactionTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTableInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserInfoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    password: 'password',
    email: 'email',
    latitude: 'latitude',
    longitude: 'longitude',
    phone: 'phone',
    type: 'type'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const DonorBookScalarFieldEnum: {
    id: 'id',
    D_id: 'D_id',
    ISBN: 'ISBN',
    qty: 'qty',
    age: 'age',
    category: 'category',
    book_name: 'book_name',
    img_link: 'img_link'
  };

  export type DonorBookScalarFieldEnum = (typeof DonorBookScalarFieldEnum)[keyof typeof DonorBookScalarFieldEnum]


  export const ClientBookScalarFieldEnum: {
    id: 'id',
    C_id: 'C_id',
    ISBN: 'ISBN',
    qty: 'qty'
  };

  export type ClientBookScalarFieldEnum = (typeof ClientBookScalarFieldEnum)[keyof typeof ClientBookScalarFieldEnum]


  export const TransactionTableScalarFieldEnum: {
    id: 'id',
    donorBookId: 'donorBookId',
    clientBookId: 'clientBookId',
    NGO_id: 'NGO_id',
    qty: 'qty',
    status: 'status'
  };

  export type TransactionTableScalarFieldEnum = (typeof TransactionTableScalarFieldEnum)[keyof typeof TransactionTableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    id?: IntFilter<"UserInfo"> | number
    name?: StringFilter<"UserInfo"> | string
    address?: StringFilter<"UserInfo"> | string
    password?: StringFilter<"UserInfo"> | string
    email?: StringFilter<"UserInfo"> | string
    latitude?: FloatNullableFilter<"UserInfo"> | number | null
    longitude?: FloatNullableFilter<"UserInfo"> | number | null
    phone?: StringFilter<"UserInfo"> | string
    type?: StringFilter<"UserInfo"> | string
    donated?: DonorBookListRelationFilter
    requested?: ClientBookListRelationFilter
    transactionsCompleted?: TransactionTableListRelationFilter
  }

  export type UserInfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    password?: SortOrder
    email?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrder
    type?: SortOrder
    donated?: DonorBookOrderByRelationAggregateInput
    requested?: ClientBookOrderByRelationAggregateInput
    transactionsCompleted?: TransactionTableOrderByRelationAggregateInput
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    name?: StringFilter<"UserInfo"> | string
    address?: StringFilter<"UserInfo"> | string
    password?: StringFilter<"UserInfo"> | string
    latitude?: FloatNullableFilter<"UserInfo"> | number | null
    longitude?: FloatNullableFilter<"UserInfo"> | number | null
    phone?: StringFilter<"UserInfo"> | string
    type?: StringFilter<"UserInfo"> | string
    donated?: DonorBookListRelationFilter
    requested?: ClientBookListRelationFilter
    transactionsCompleted?: TransactionTableListRelationFilter
  }, "id" | "email">

  export type UserInfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    password?: SortOrder
    email?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrder
    type?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserInfo"> | number
    name?: StringWithAggregatesFilter<"UserInfo"> | string
    address?: StringWithAggregatesFilter<"UserInfo"> | string
    password?: StringWithAggregatesFilter<"UserInfo"> | string
    email?: StringWithAggregatesFilter<"UserInfo"> | string
    latitude?: FloatNullableWithAggregatesFilter<"UserInfo"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"UserInfo"> | number | null
    phone?: StringWithAggregatesFilter<"UserInfo"> | string
    type?: StringWithAggregatesFilter<"UserInfo"> | string
  }

  export type DonorBookWhereInput = {
    AND?: DonorBookWhereInput | DonorBookWhereInput[]
    OR?: DonorBookWhereInput[]
    NOT?: DonorBookWhereInput | DonorBookWhereInput[]
    id?: IntFilter<"DonorBook"> | number
    D_id?: IntFilter<"DonorBook"> | number
    ISBN?: StringFilter<"DonorBook"> | string
    qty?: IntFilter<"DonorBook"> | number
    age?: IntFilter<"DonorBook"> | number
    category?: StringFilter<"DonorBook"> | string
    book_name?: StringFilter<"DonorBook"> | string
    img_link?: StringNullableFilter<"DonorBook"> | string | null
    donor?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    transactions?: TransactionTableListRelationFilter
  }

  export type DonorBookOrderByWithRelationInput = {
    id?: SortOrder
    D_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
    age?: SortOrder
    category?: SortOrder
    book_name?: SortOrder
    img_link?: SortOrderInput | SortOrder
    donor?: UserInfoOrderByWithRelationInput
    transactions?: TransactionTableOrderByRelationAggregateInput
  }

  export type DonorBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonorBookWhereInput | DonorBookWhereInput[]
    OR?: DonorBookWhereInput[]
    NOT?: DonorBookWhereInput | DonorBookWhereInput[]
    D_id?: IntFilter<"DonorBook"> | number
    ISBN?: StringFilter<"DonorBook"> | string
    qty?: IntFilter<"DonorBook"> | number
    age?: IntFilter<"DonorBook"> | number
    category?: StringFilter<"DonorBook"> | string
    book_name?: StringFilter<"DonorBook"> | string
    img_link?: StringNullableFilter<"DonorBook"> | string | null
    donor?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    transactions?: TransactionTableListRelationFilter
  }, "id">

  export type DonorBookOrderByWithAggregationInput = {
    id?: SortOrder
    D_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
    age?: SortOrder
    category?: SortOrder
    book_name?: SortOrder
    img_link?: SortOrderInput | SortOrder
    _count?: DonorBookCountOrderByAggregateInput
    _avg?: DonorBookAvgOrderByAggregateInput
    _max?: DonorBookMaxOrderByAggregateInput
    _min?: DonorBookMinOrderByAggregateInput
    _sum?: DonorBookSumOrderByAggregateInput
  }

  export type DonorBookScalarWhereWithAggregatesInput = {
    AND?: DonorBookScalarWhereWithAggregatesInput | DonorBookScalarWhereWithAggregatesInput[]
    OR?: DonorBookScalarWhereWithAggregatesInput[]
    NOT?: DonorBookScalarWhereWithAggregatesInput | DonorBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DonorBook"> | number
    D_id?: IntWithAggregatesFilter<"DonorBook"> | number
    ISBN?: StringWithAggregatesFilter<"DonorBook"> | string
    qty?: IntWithAggregatesFilter<"DonorBook"> | number
    age?: IntWithAggregatesFilter<"DonorBook"> | number
    category?: StringWithAggregatesFilter<"DonorBook"> | string
    book_name?: StringWithAggregatesFilter<"DonorBook"> | string
    img_link?: StringNullableWithAggregatesFilter<"DonorBook"> | string | null
  }

  export type ClientBookWhereInput = {
    AND?: ClientBookWhereInput | ClientBookWhereInput[]
    OR?: ClientBookWhereInput[]
    NOT?: ClientBookWhereInput | ClientBookWhereInput[]
    id?: IntFilter<"ClientBook"> | number
    C_id?: IntFilter<"ClientBook"> | number
    ISBN?: StringFilter<"ClientBook"> | string
    qty?: IntFilter<"ClientBook"> | number
    client?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    transactions?: TransactionTableListRelationFilter
  }

  export type ClientBookOrderByWithRelationInput = {
    id?: SortOrder
    C_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
    client?: UserInfoOrderByWithRelationInput
    transactions?: TransactionTableOrderByRelationAggregateInput
  }

  export type ClientBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientBookWhereInput | ClientBookWhereInput[]
    OR?: ClientBookWhereInput[]
    NOT?: ClientBookWhereInput | ClientBookWhereInput[]
    C_id?: IntFilter<"ClientBook"> | number
    ISBN?: StringFilter<"ClientBook"> | string
    qty?: IntFilter<"ClientBook"> | number
    client?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    transactions?: TransactionTableListRelationFilter
  }, "id">

  export type ClientBookOrderByWithAggregationInput = {
    id?: SortOrder
    C_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
    _count?: ClientBookCountOrderByAggregateInput
    _avg?: ClientBookAvgOrderByAggregateInput
    _max?: ClientBookMaxOrderByAggregateInput
    _min?: ClientBookMinOrderByAggregateInput
    _sum?: ClientBookSumOrderByAggregateInput
  }

  export type ClientBookScalarWhereWithAggregatesInput = {
    AND?: ClientBookScalarWhereWithAggregatesInput | ClientBookScalarWhereWithAggregatesInput[]
    OR?: ClientBookScalarWhereWithAggregatesInput[]
    NOT?: ClientBookScalarWhereWithAggregatesInput | ClientBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClientBook"> | number
    C_id?: IntWithAggregatesFilter<"ClientBook"> | number
    ISBN?: StringWithAggregatesFilter<"ClientBook"> | string
    qty?: IntWithAggregatesFilter<"ClientBook"> | number
  }

  export type TransactionTableWhereInput = {
    AND?: TransactionTableWhereInput | TransactionTableWhereInput[]
    OR?: TransactionTableWhereInput[]
    NOT?: TransactionTableWhereInput | TransactionTableWhereInput[]
    id?: IntFilter<"TransactionTable"> | number
    donorBookId?: IntFilter<"TransactionTable"> | number
    clientBookId?: IntFilter<"TransactionTable"> | number
    NGO_id?: IntFilter<"TransactionTable"> | number
    qty?: IntFilter<"TransactionTable"> | number
    status?: StringFilter<"TransactionTable"> | string
    ngo?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    donorBook?: XOR<DonorBookScalarRelationFilter, DonorBookWhereInput>
    clientBook?: XOR<ClientBookScalarRelationFilter, ClientBookWhereInput>
  }

  export type TransactionTableOrderByWithRelationInput = {
    id?: SortOrder
    donorBookId?: SortOrder
    clientBookId?: SortOrder
    NGO_id?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    ngo?: UserInfoOrderByWithRelationInput
    donorBook?: DonorBookOrderByWithRelationInput
    clientBook?: ClientBookOrderByWithRelationInput
  }

  export type TransactionTableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionTableWhereInput | TransactionTableWhereInput[]
    OR?: TransactionTableWhereInput[]
    NOT?: TransactionTableWhereInput | TransactionTableWhereInput[]
    donorBookId?: IntFilter<"TransactionTable"> | number
    clientBookId?: IntFilter<"TransactionTable"> | number
    NGO_id?: IntFilter<"TransactionTable"> | number
    qty?: IntFilter<"TransactionTable"> | number
    status?: StringFilter<"TransactionTable"> | string
    ngo?: XOR<UserInfoScalarRelationFilter, UserInfoWhereInput>
    donorBook?: XOR<DonorBookScalarRelationFilter, DonorBookWhereInput>
    clientBook?: XOR<ClientBookScalarRelationFilter, ClientBookWhereInput>
  }, "id">

  export type TransactionTableOrderByWithAggregationInput = {
    id?: SortOrder
    donorBookId?: SortOrder
    clientBookId?: SortOrder
    NGO_id?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    _count?: TransactionTableCountOrderByAggregateInput
    _avg?: TransactionTableAvgOrderByAggregateInput
    _max?: TransactionTableMaxOrderByAggregateInput
    _min?: TransactionTableMinOrderByAggregateInput
    _sum?: TransactionTableSumOrderByAggregateInput
  }

  export type TransactionTableScalarWhereWithAggregatesInput = {
    AND?: TransactionTableScalarWhereWithAggregatesInput | TransactionTableScalarWhereWithAggregatesInput[]
    OR?: TransactionTableScalarWhereWithAggregatesInput[]
    NOT?: TransactionTableScalarWhereWithAggregatesInput | TransactionTableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionTable"> | number
    donorBookId?: IntWithAggregatesFilter<"TransactionTable"> | number
    clientBookId?: IntWithAggregatesFilter<"TransactionTable"> | number
    NGO_id?: IntWithAggregatesFilter<"TransactionTable"> | number
    qty?: IntWithAggregatesFilter<"TransactionTable"> | number
    status?: StringWithAggregatesFilter<"TransactionTable"> | string
  }

  export type UserInfoCreateInput = {
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    donated?: DonorBookCreateNestedManyWithoutDonorInput
    requested?: ClientBookCreateNestedManyWithoutClientInput
    transactionsCompleted?: TransactionTableCreateNestedManyWithoutNgoInput
  }

  export type UserInfoUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    donated?: DonorBookUncheckedCreateNestedManyWithoutDonorInput
    requested?: ClientBookUncheckedCreateNestedManyWithoutClientInput
    transactionsCompleted?: TransactionTableUncheckedCreateNestedManyWithoutNgoInput
  }

  export type UserInfoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    donated?: DonorBookUpdateManyWithoutDonorNestedInput
    requested?: ClientBookUpdateManyWithoutClientNestedInput
    transactionsCompleted?: TransactionTableUpdateManyWithoutNgoNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    donated?: DonorBookUncheckedUpdateManyWithoutDonorNestedInput
    requested?: ClientBookUncheckedUpdateManyWithoutClientNestedInput
    transactionsCompleted?: TransactionTableUncheckedUpdateManyWithoutNgoNestedInput
  }

  export type UserInfoCreateManyInput = {
    id?: number
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
  }

  export type UserInfoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type DonorBookCreateInput = {
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
    donor: UserInfoCreateNestedOneWithoutDonatedInput
    transactions?: TransactionTableCreateNestedManyWithoutDonorBookInput
  }

  export type DonorBookUncheckedCreateInput = {
    id?: number
    D_id: number
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
    transactions?: TransactionTableUncheckedCreateNestedManyWithoutDonorBookInput
  }

  export type DonorBookUpdateInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    donor?: UserInfoUpdateOneRequiredWithoutDonatedNestedInput
    transactions?: TransactionTableUpdateManyWithoutDonorBookNestedInput
  }

  export type DonorBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    D_id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionTableUncheckedUpdateManyWithoutDonorBookNestedInput
  }

  export type DonorBookCreateManyInput = {
    id?: number
    D_id: number
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
  }

  export type DonorBookUpdateManyMutationInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonorBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    D_id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientBookCreateInput = {
    ISBN: string
    qty: number
    client: UserInfoCreateNestedOneWithoutRequestedInput
    transactions?: TransactionTableCreateNestedManyWithoutClientBookInput
  }

  export type ClientBookUncheckedCreateInput = {
    id?: number
    C_id: number
    ISBN: string
    qty: number
    transactions?: TransactionTableUncheckedCreateNestedManyWithoutClientBookInput
  }

  export type ClientBookUpdateInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    client?: UserInfoUpdateOneRequiredWithoutRequestedNestedInput
    transactions?: TransactionTableUpdateManyWithoutClientBookNestedInput
  }

  export type ClientBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionTableUncheckedUpdateManyWithoutClientBookNestedInput
  }

  export type ClientBookCreateManyInput = {
    id?: number
    C_id: number
    ISBN: string
    qty: number
  }

  export type ClientBookUpdateManyMutationInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type ClientBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionTableCreateInput = {
    qty: number
    status?: string
    ngo: UserInfoCreateNestedOneWithoutTransactionsCompletedInput
    donorBook: DonorBookCreateNestedOneWithoutTransactionsInput
    clientBook: ClientBookCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionTableUncheckedCreateInput = {
    id?: number
    donorBookId: number
    clientBookId: number
    NGO_id: number
    qty: number
    status?: string
  }

  export type TransactionTableUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ngo?: UserInfoUpdateOneRequiredWithoutTransactionsCompletedNestedInput
    donorBook?: DonorBookUpdateOneRequiredWithoutTransactionsNestedInput
    clientBook?: ClientBookUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionTableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorBookId?: IntFieldUpdateOperationsInput | number
    clientBookId?: IntFieldUpdateOperationsInput | number
    NGO_id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTableCreateManyInput = {
    id?: number
    donorBookId: number
    clientBookId: number
    NGO_id: number
    qty: number
    status?: string
  }

  export type TransactionTableUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorBookId?: IntFieldUpdateOperationsInput | number
    clientBookId?: IntFieldUpdateOperationsInput | number
    NGO_id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DonorBookListRelationFilter = {
    every?: DonorBookWhereInput
    some?: DonorBookWhereInput
    none?: DonorBookWhereInput
  }

  export type ClientBookListRelationFilter = {
    every?: ClientBookWhereInput
    some?: ClientBookWhereInput
    none?: ClientBookWhereInput
  }

  export type TransactionTableListRelationFilter = {
    every?: TransactionTableWhereInput
    some?: TransactionTableWhereInput
    none?: TransactionTableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DonorBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    password?: SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    type?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    password?: SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    type?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    password?: SortOrder
    email?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    type?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserInfoScalarRelationFilter = {
    is?: UserInfoWhereInput
    isNot?: UserInfoWhereInput
  }

  export type DonorBookCountOrderByAggregateInput = {
    id?: SortOrder
    D_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
    age?: SortOrder
    category?: SortOrder
    book_name?: SortOrder
    img_link?: SortOrder
  }

  export type DonorBookAvgOrderByAggregateInput = {
    id?: SortOrder
    D_id?: SortOrder
    qty?: SortOrder
    age?: SortOrder
  }

  export type DonorBookMaxOrderByAggregateInput = {
    id?: SortOrder
    D_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
    age?: SortOrder
    category?: SortOrder
    book_name?: SortOrder
    img_link?: SortOrder
  }

  export type DonorBookMinOrderByAggregateInput = {
    id?: SortOrder
    D_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
    age?: SortOrder
    category?: SortOrder
    book_name?: SortOrder
    img_link?: SortOrder
  }

  export type DonorBookSumOrderByAggregateInput = {
    id?: SortOrder
    D_id?: SortOrder
    qty?: SortOrder
    age?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClientBookCountOrderByAggregateInput = {
    id?: SortOrder
    C_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
  }

  export type ClientBookAvgOrderByAggregateInput = {
    id?: SortOrder
    C_id?: SortOrder
    qty?: SortOrder
  }

  export type ClientBookMaxOrderByAggregateInput = {
    id?: SortOrder
    C_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
  }

  export type ClientBookMinOrderByAggregateInput = {
    id?: SortOrder
    C_id?: SortOrder
    ISBN?: SortOrder
    qty?: SortOrder
  }

  export type ClientBookSumOrderByAggregateInput = {
    id?: SortOrder
    C_id?: SortOrder
    qty?: SortOrder
  }

  export type DonorBookScalarRelationFilter = {
    is?: DonorBookWhereInput
    isNot?: DonorBookWhereInput
  }

  export type ClientBookScalarRelationFilter = {
    is?: ClientBookWhereInput
    isNot?: ClientBookWhereInput
  }

  export type TransactionTableCountOrderByAggregateInput = {
    id?: SortOrder
    donorBookId?: SortOrder
    clientBookId?: SortOrder
    NGO_id?: SortOrder
    qty?: SortOrder
    status?: SortOrder
  }

  export type TransactionTableAvgOrderByAggregateInput = {
    id?: SortOrder
    donorBookId?: SortOrder
    clientBookId?: SortOrder
    NGO_id?: SortOrder
    qty?: SortOrder
  }

  export type TransactionTableMaxOrderByAggregateInput = {
    id?: SortOrder
    donorBookId?: SortOrder
    clientBookId?: SortOrder
    NGO_id?: SortOrder
    qty?: SortOrder
    status?: SortOrder
  }

  export type TransactionTableMinOrderByAggregateInput = {
    id?: SortOrder
    donorBookId?: SortOrder
    clientBookId?: SortOrder
    NGO_id?: SortOrder
    qty?: SortOrder
    status?: SortOrder
  }

  export type TransactionTableSumOrderByAggregateInput = {
    id?: SortOrder
    donorBookId?: SortOrder
    clientBookId?: SortOrder
    NGO_id?: SortOrder
    qty?: SortOrder
  }

  export type DonorBookCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonorBookCreateWithoutDonorInput, DonorBookUncheckedCreateWithoutDonorInput> | DonorBookCreateWithoutDonorInput[] | DonorBookUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorBookCreateOrConnectWithoutDonorInput | DonorBookCreateOrConnectWithoutDonorInput[]
    createMany?: DonorBookCreateManyDonorInputEnvelope
    connect?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
  }

  export type ClientBookCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientBookCreateWithoutClientInput, ClientBookUncheckedCreateWithoutClientInput> | ClientBookCreateWithoutClientInput[] | ClientBookUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientBookCreateOrConnectWithoutClientInput | ClientBookCreateOrConnectWithoutClientInput[]
    createMany?: ClientBookCreateManyClientInputEnvelope
    connect?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
  }

  export type TransactionTableCreateNestedManyWithoutNgoInput = {
    create?: XOR<TransactionTableCreateWithoutNgoInput, TransactionTableUncheckedCreateWithoutNgoInput> | TransactionTableCreateWithoutNgoInput[] | TransactionTableUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutNgoInput | TransactionTableCreateOrConnectWithoutNgoInput[]
    createMany?: TransactionTableCreateManyNgoInputEnvelope
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
  }

  export type DonorBookUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonorBookCreateWithoutDonorInput, DonorBookUncheckedCreateWithoutDonorInput> | DonorBookCreateWithoutDonorInput[] | DonorBookUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorBookCreateOrConnectWithoutDonorInput | DonorBookCreateOrConnectWithoutDonorInput[]
    createMany?: DonorBookCreateManyDonorInputEnvelope
    connect?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
  }

  export type ClientBookUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientBookCreateWithoutClientInput, ClientBookUncheckedCreateWithoutClientInput> | ClientBookCreateWithoutClientInput[] | ClientBookUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientBookCreateOrConnectWithoutClientInput | ClientBookCreateOrConnectWithoutClientInput[]
    createMany?: ClientBookCreateManyClientInputEnvelope
    connect?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
  }

  export type TransactionTableUncheckedCreateNestedManyWithoutNgoInput = {
    create?: XOR<TransactionTableCreateWithoutNgoInput, TransactionTableUncheckedCreateWithoutNgoInput> | TransactionTableCreateWithoutNgoInput[] | TransactionTableUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutNgoInput | TransactionTableCreateOrConnectWithoutNgoInput[]
    createMany?: TransactionTableCreateManyNgoInputEnvelope
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DonorBookUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonorBookCreateWithoutDonorInput, DonorBookUncheckedCreateWithoutDonorInput> | DonorBookCreateWithoutDonorInput[] | DonorBookUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorBookCreateOrConnectWithoutDonorInput | DonorBookCreateOrConnectWithoutDonorInput[]
    upsert?: DonorBookUpsertWithWhereUniqueWithoutDonorInput | DonorBookUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonorBookCreateManyDonorInputEnvelope
    set?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    disconnect?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    delete?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    connect?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    update?: DonorBookUpdateWithWhereUniqueWithoutDonorInput | DonorBookUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonorBookUpdateManyWithWhereWithoutDonorInput | DonorBookUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonorBookScalarWhereInput | DonorBookScalarWhereInput[]
  }

  export type ClientBookUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientBookCreateWithoutClientInput, ClientBookUncheckedCreateWithoutClientInput> | ClientBookCreateWithoutClientInput[] | ClientBookUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientBookCreateOrConnectWithoutClientInput | ClientBookCreateOrConnectWithoutClientInput[]
    upsert?: ClientBookUpsertWithWhereUniqueWithoutClientInput | ClientBookUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientBookCreateManyClientInputEnvelope
    set?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    disconnect?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    delete?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    connect?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    update?: ClientBookUpdateWithWhereUniqueWithoutClientInput | ClientBookUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientBookUpdateManyWithWhereWithoutClientInput | ClientBookUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientBookScalarWhereInput | ClientBookScalarWhereInput[]
  }

  export type TransactionTableUpdateManyWithoutNgoNestedInput = {
    create?: XOR<TransactionTableCreateWithoutNgoInput, TransactionTableUncheckedCreateWithoutNgoInput> | TransactionTableCreateWithoutNgoInput[] | TransactionTableUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutNgoInput | TransactionTableCreateOrConnectWithoutNgoInput[]
    upsert?: TransactionTableUpsertWithWhereUniqueWithoutNgoInput | TransactionTableUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: TransactionTableCreateManyNgoInputEnvelope
    set?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    disconnect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    delete?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    update?: TransactionTableUpdateWithWhereUniqueWithoutNgoInput | TransactionTableUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: TransactionTableUpdateManyWithWhereWithoutNgoInput | TransactionTableUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DonorBookUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonorBookCreateWithoutDonorInput, DonorBookUncheckedCreateWithoutDonorInput> | DonorBookCreateWithoutDonorInput[] | DonorBookUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonorBookCreateOrConnectWithoutDonorInput | DonorBookCreateOrConnectWithoutDonorInput[]
    upsert?: DonorBookUpsertWithWhereUniqueWithoutDonorInput | DonorBookUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonorBookCreateManyDonorInputEnvelope
    set?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    disconnect?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    delete?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    connect?: DonorBookWhereUniqueInput | DonorBookWhereUniqueInput[]
    update?: DonorBookUpdateWithWhereUniqueWithoutDonorInput | DonorBookUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonorBookUpdateManyWithWhereWithoutDonorInput | DonorBookUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonorBookScalarWhereInput | DonorBookScalarWhereInput[]
  }

  export type ClientBookUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientBookCreateWithoutClientInput, ClientBookUncheckedCreateWithoutClientInput> | ClientBookCreateWithoutClientInput[] | ClientBookUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientBookCreateOrConnectWithoutClientInput | ClientBookCreateOrConnectWithoutClientInput[]
    upsert?: ClientBookUpsertWithWhereUniqueWithoutClientInput | ClientBookUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientBookCreateManyClientInputEnvelope
    set?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    disconnect?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    delete?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    connect?: ClientBookWhereUniqueInput | ClientBookWhereUniqueInput[]
    update?: ClientBookUpdateWithWhereUniqueWithoutClientInput | ClientBookUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientBookUpdateManyWithWhereWithoutClientInput | ClientBookUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientBookScalarWhereInput | ClientBookScalarWhereInput[]
  }

  export type TransactionTableUncheckedUpdateManyWithoutNgoNestedInput = {
    create?: XOR<TransactionTableCreateWithoutNgoInput, TransactionTableUncheckedCreateWithoutNgoInput> | TransactionTableCreateWithoutNgoInput[] | TransactionTableUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutNgoInput | TransactionTableCreateOrConnectWithoutNgoInput[]
    upsert?: TransactionTableUpsertWithWhereUniqueWithoutNgoInput | TransactionTableUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: TransactionTableCreateManyNgoInputEnvelope
    set?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    disconnect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    delete?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    update?: TransactionTableUpdateWithWhereUniqueWithoutNgoInput | TransactionTableUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: TransactionTableUpdateManyWithWhereWithoutNgoInput | TransactionTableUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
  }

  export type UserInfoCreateNestedOneWithoutDonatedInput = {
    create?: XOR<UserInfoCreateWithoutDonatedInput, UserInfoUncheckedCreateWithoutDonatedInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutDonatedInput
    connect?: UserInfoWhereUniqueInput
  }

  export type TransactionTableCreateNestedManyWithoutDonorBookInput = {
    create?: XOR<TransactionTableCreateWithoutDonorBookInput, TransactionTableUncheckedCreateWithoutDonorBookInput> | TransactionTableCreateWithoutDonorBookInput[] | TransactionTableUncheckedCreateWithoutDonorBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutDonorBookInput | TransactionTableCreateOrConnectWithoutDonorBookInput[]
    createMany?: TransactionTableCreateManyDonorBookInputEnvelope
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
  }

  export type TransactionTableUncheckedCreateNestedManyWithoutDonorBookInput = {
    create?: XOR<TransactionTableCreateWithoutDonorBookInput, TransactionTableUncheckedCreateWithoutDonorBookInput> | TransactionTableCreateWithoutDonorBookInput[] | TransactionTableUncheckedCreateWithoutDonorBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutDonorBookInput | TransactionTableCreateOrConnectWithoutDonorBookInput[]
    createMany?: TransactionTableCreateManyDonorBookInputEnvelope
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserInfoUpdateOneRequiredWithoutDonatedNestedInput = {
    create?: XOR<UserInfoCreateWithoutDonatedInput, UserInfoUncheckedCreateWithoutDonatedInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutDonatedInput
    upsert?: UserInfoUpsertWithoutDonatedInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutDonatedInput, UserInfoUpdateWithoutDonatedInput>, UserInfoUncheckedUpdateWithoutDonatedInput>
  }

  export type TransactionTableUpdateManyWithoutDonorBookNestedInput = {
    create?: XOR<TransactionTableCreateWithoutDonorBookInput, TransactionTableUncheckedCreateWithoutDonorBookInput> | TransactionTableCreateWithoutDonorBookInput[] | TransactionTableUncheckedCreateWithoutDonorBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutDonorBookInput | TransactionTableCreateOrConnectWithoutDonorBookInput[]
    upsert?: TransactionTableUpsertWithWhereUniqueWithoutDonorBookInput | TransactionTableUpsertWithWhereUniqueWithoutDonorBookInput[]
    createMany?: TransactionTableCreateManyDonorBookInputEnvelope
    set?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    disconnect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    delete?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    update?: TransactionTableUpdateWithWhereUniqueWithoutDonorBookInput | TransactionTableUpdateWithWhereUniqueWithoutDonorBookInput[]
    updateMany?: TransactionTableUpdateManyWithWhereWithoutDonorBookInput | TransactionTableUpdateManyWithWhereWithoutDonorBookInput[]
    deleteMany?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
  }

  export type TransactionTableUncheckedUpdateManyWithoutDonorBookNestedInput = {
    create?: XOR<TransactionTableCreateWithoutDonorBookInput, TransactionTableUncheckedCreateWithoutDonorBookInput> | TransactionTableCreateWithoutDonorBookInput[] | TransactionTableUncheckedCreateWithoutDonorBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutDonorBookInput | TransactionTableCreateOrConnectWithoutDonorBookInput[]
    upsert?: TransactionTableUpsertWithWhereUniqueWithoutDonorBookInput | TransactionTableUpsertWithWhereUniqueWithoutDonorBookInput[]
    createMany?: TransactionTableCreateManyDonorBookInputEnvelope
    set?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    disconnect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    delete?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    update?: TransactionTableUpdateWithWhereUniqueWithoutDonorBookInput | TransactionTableUpdateWithWhereUniqueWithoutDonorBookInput[]
    updateMany?: TransactionTableUpdateManyWithWhereWithoutDonorBookInput | TransactionTableUpdateManyWithWhereWithoutDonorBookInput[]
    deleteMany?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
  }

  export type UserInfoCreateNestedOneWithoutRequestedInput = {
    create?: XOR<UserInfoCreateWithoutRequestedInput, UserInfoUncheckedCreateWithoutRequestedInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutRequestedInput
    connect?: UserInfoWhereUniqueInput
  }

  export type TransactionTableCreateNestedManyWithoutClientBookInput = {
    create?: XOR<TransactionTableCreateWithoutClientBookInput, TransactionTableUncheckedCreateWithoutClientBookInput> | TransactionTableCreateWithoutClientBookInput[] | TransactionTableUncheckedCreateWithoutClientBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutClientBookInput | TransactionTableCreateOrConnectWithoutClientBookInput[]
    createMany?: TransactionTableCreateManyClientBookInputEnvelope
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
  }

  export type TransactionTableUncheckedCreateNestedManyWithoutClientBookInput = {
    create?: XOR<TransactionTableCreateWithoutClientBookInput, TransactionTableUncheckedCreateWithoutClientBookInput> | TransactionTableCreateWithoutClientBookInput[] | TransactionTableUncheckedCreateWithoutClientBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutClientBookInput | TransactionTableCreateOrConnectWithoutClientBookInput[]
    createMany?: TransactionTableCreateManyClientBookInputEnvelope
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
  }

  export type UserInfoUpdateOneRequiredWithoutRequestedNestedInput = {
    create?: XOR<UserInfoCreateWithoutRequestedInput, UserInfoUncheckedCreateWithoutRequestedInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutRequestedInput
    upsert?: UserInfoUpsertWithoutRequestedInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutRequestedInput, UserInfoUpdateWithoutRequestedInput>, UserInfoUncheckedUpdateWithoutRequestedInput>
  }

  export type TransactionTableUpdateManyWithoutClientBookNestedInput = {
    create?: XOR<TransactionTableCreateWithoutClientBookInput, TransactionTableUncheckedCreateWithoutClientBookInput> | TransactionTableCreateWithoutClientBookInput[] | TransactionTableUncheckedCreateWithoutClientBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutClientBookInput | TransactionTableCreateOrConnectWithoutClientBookInput[]
    upsert?: TransactionTableUpsertWithWhereUniqueWithoutClientBookInput | TransactionTableUpsertWithWhereUniqueWithoutClientBookInput[]
    createMany?: TransactionTableCreateManyClientBookInputEnvelope
    set?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    disconnect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    delete?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    update?: TransactionTableUpdateWithWhereUniqueWithoutClientBookInput | TransactionTableUpdateWithWhereUniqueWithoutClientBookInput[]
    updateMany?: TransactionTableUpdateManyWithWhereWithoutClientBookInput | TransactionTableUpdateManyWithWhereWithoutClientBookInput[]
    deleteMany?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
  }

  export type TransactionTableUncheckedUpdateManyWithoutClientBookNestedInput = {
    create?: XOR<TransactionTableCreateWithoutClientBookInput, TransactionTableUncheckedCreateWithoutClientBookInput> | TransactionTableCreateWithoutClientBookInput[] | TransactionTableUncheckedCreateWithoutClientBookInput[]
    connectOrCreate?: TransactionTableCreateOrConnectWithoutClientBookInput | TransactionTableCreateOrConnectWithoutClientBookInput[]
    upsert?: TransactionTableUpsertWithWhereUniqueWithoutClientBookInput | TransactionTableUpsertWithWhereUniqueWithoutClientBookInput[]
    createMany?: TransactionTableCreateManyClientBookInputEnvelope
    set?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    disconnect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    delete?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    connect?: TransactionTableWhereUniqueInput | TransactionTableWhereUniqueInput[]
    update?: TransactionTableUpdateWithWhereUniqueWithoutClientBookInput | TransactionTableUpdateWithWhereUniqueWithoutClientBookInput[]
    updateMany?: TransactionTableUpdateManyWithWhereWithoutClientBookInput | TransactionTableUpdateManyWithWhereWithoutClientBookInput[]
    deleteMany?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
  }

  export type UserInfoCreateNestedOneWithoutTransactionsCompletedInput = {
    create?: XOR<UserInfoCreateWithoutTransactionsCompletedInput, UserInfoUncheckedCreateWithoutTransactionsCompletedInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutTransactionsCompletedInput
    connect?: UserInfoWhereUniqueInput
  }

  export type DonorBookCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<DonorBookCreateWithoutTransactionsInput, DonorBookUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DonorBookCreateOrConnectWithoutTransactionsInput
    connect?: DonorBookWhereUniqueInput
  }

  export type ClientBookCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ClientBookCreateWithoutTransactionsInput, ClientBookUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClientBookCreateOrConnectWithoutTransactionsInput
    connect?: ClientBookWhereUniqueInput
  }

  export type UserInfoUpdateOneRequiredWithoutTransactionsCompletedNestedInput = {
    create?: XOR<UserInfoCreateWithoutTransactionsCompletedInput, UserInfoUncheckedCreateWithoutTransactionsCompletedInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutTransactionsCompletedInput
    upsert?: UserInfoUpsertWithoutTransactionsCompletedInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutTransactionsCompletedInput, UserInfoUpdateWithoutTransactionsCompletedInput>, UserInfoUncheckedUpdateWithoutTransactionsCompletedInput>
  }

  export type DonorBookUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<DonorBookCreateWithoutTransactionsInput, DonorBookUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DonorBookCreateOrConnectWithoutTransactionsInput
    upsert?: DonorBookUpsertWithoutTransactionsInput
    connect?: DonorBookWhereUniqueInput
    update?: XOR<XOR<DonorBookUpdateToOneWithWhereWithoutTransactionsInput, DonorBookUpdateWithoutTransactionsInput>, DonorBookUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClientBookUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ClientBookCreateWithoutTransactionsInput, ClientBookUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClientBookCreateOrConnectWithoutTransactionsInput
    upsert?: ClientBookUpsertWithoutTransactionsInput
    connect?: ClientBookWhereUniqueInput
    update?: XOR<XOR<ClientBookUpdateToOneWithWhereWithoutTransactionsInput, ClientBookUpdateWithoutTransactionsInput>, ClientBookUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DonorBookCreateWithoutDonorInput = {
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
    transactions?: TransactionTableCreateNestedManyWithoutDonorBookInput
  }

  export type DonorBookUncheckedCreateWithoutDonorInput = {
    id?: number
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
    transactions?: TransactionTableUncheckedCreateNestedManyWithoutDonorBookInput
  }

  export type DonorBookCreateOrConnectWithoutDonorInput = {
    where: DonorBookWhereUniqueInput
    create: XOR<DonorBookCreateWithoutDonorInput, DonorBookUncheckedCreateWithoutDonorInput>
  }

  export type DonorBookCreateManyDonorInputEnvelope = {
    data: DonorBookCreateManyDonorInput | DonorBookCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type ClientBookCreateWithoutClientInput = {
    ISBN: string
    qty: number
    transactions?: TransactionTableCreateNestedManyWithoutClientBookInput
  }

  export type ClientBookUncheckedCreateWithoutClientInput = {
    id?: number
    ISBN: string
    qty: number
    transactions?: TransactionTableUncheckedCreateNestedManyWithoutClientBookInput
  }

  export type ClientBookCreateOrConnectWithoutClientInput = {
    where: ClientBookWhereUniqueInput
    create: XOR<ClientBookCreateWithoutClientInput, ClientBookUncheckedCreateWithoutClientInput>
  }

  export type ClientBookCreateManyClientInputEnvelope = {
    data: ClientBookCreateManyClientInput | ClientBookCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TransactionTableCreateWithoutNgoInput = {
    qty: number
    status?: string
    donorBook: DonorBookCreateNestedOneWithoutTransactionsInput
    clientBook: ClientBookCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionTableUncheckedCreateWithoutNgoInput = {
    id?: number
    donorBookId: number
    clientBookId: number
    qty: number
    status?: string
  }

  export type TransactionTableCreateOrConnectWithoutNgoInput = {
    where: TransactionTableWhereUniqueInput
    create: XOR<TransactionTableCreateWithoutNgoInput, TransactionTableUncheckedCreateWithoutNgoInput>
  }

  export type TransactionTableCreateManyNgoInputEnvelope = {
    data: TransactionTableCreateManyNgoInput | TransactionTableCreateManyNgoInput[]
    skipDuplicates?: boolean
  }

  export type DonorBookUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonorBookWhereUniqueInput
    update: XOR<DonorBookUpdateWithoutDonorInput, DonorBookUncheckedUpdateWithoutDonorInput>
    create: XOR<DonorBookCreateWithoutDonorInput, DonorBookUncheckedCreateWithoutDonorInput>
  }

  export type DonorBookUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonorBookWhereUniqueInput
    data: XOR<DonorBookUpdateWithoutDonorInput, DonorBookUncheckedUpdateWithoutDonorInput>
  }

  export type DonorBookUpdateManyWithWhereWithoutDonorInput = {
    where: DonorBookScalarWhereInput
    data: XOR<DonorBookUpdateManyMutationInput, DonorBookUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonorBookScalarWhereInput = {
    AND?: DonorBookScalarWhereInput | DonorBookScalarWhereInput[]
    OR?: DonorBookScalarWhereInput[]
    NOT?: DonorBookScalarWhereInput | DonorBookScalarWhereInput[]
    id?: IntFilter<"DonorBook"> | number
    D_id?: IntFilter<"DonorBook"> | number
    ISBN?: StringFilter<"DonorBook"> | string
    qty?: IntFilter<"DonorBook"> | number
    age?: IntFilter<"DonorBook"> | number
    category?: StringFilter<"DonorBook"> | string
    book_name?: StringFilter<"DonorBook"> | string
    img_link?: StringNullableFilter<"DonorBook"> | string | null
  }

  export type ClientBookUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientBookWhereUniqueInput
    update: XOR<ClientBookUpdateWithoutClientInput, ClientBookUncheckedUpdateWithoutClientInput>
    create: XOR<ClientBookCreateWithoutClientInput, ClientBookUncheckedCreateWithoutClientInput>
  }

  export type ClientBookUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientBookWhereUniqueInput
    data: XOR<ClientBookUpdateWithoutClientInput, ClientBookUncheckedUpdateWithoutClientInput>
  }

  export type ClientBookUpdateManyWithWhereWithoutClientInput = {
    where: ClientBookScalarWhereInput
    data: XOR<ClientBookUpdateManyMutationInput, ClientBookUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientBookScalarWhereInput = {
    AND?: ClientBookScalarWhereInput | ClientBookScalarWhereInput[]
    OR?: ClientBookScalarWhereInput[]
    NOT?: ClientBookScalarWhereInput | ClientBookScalarWhereInput[]
    id?: IntFilter<"ClientBook"> | number
    C_id?: IntFilter<"ClientBook"> | number
    ISBN?: StringFilter<"ClientBook"> | string
    qty?: IntFilter<"ClientBook"> | number
  }

  export type TransactionTableUpsertWithWhereUniqueWithoutNgoInput = {
    where: TransactionTableWhereUniqueInput
    update: XOR<TransactionTableUpdateWithoutNgoInput, TransactionTableUncheckedUpdateWithoutNgoInput>
    create: XOR<TransactionTableCreateWithoutNgoInput, TransactionTableUncheckedCreateWithoutNgoInput>
  }

  export type TransactionTableUpdateWithWhereUniqueWithoutNgoInput = {
    where: TransactionTableWhereUniqueInput
    data: XOR<TransactionTableUpdateWithoutNgoInput, TransactionTableUncheckedUpdateWithoutNgoInput>
  }

  export type TransactionTableUpdateManyWithWhereWithoutNgoInput = {
    where: TransactionTableScalarWhereInput
    data: XOR<TransactionTableUpdateManyMutationInput, TransactionTableUncheckedUpdateManyWithoutNgoInput>
  }

  export type TransactionTableScalarWhereInput = {
    AND?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
    OR?: TransactionTableScalarWhereInput[]
    NOT?: TransactionTableScalarWhereInput | TransactionTableScalarWhereInput[]
    id?: IntFilter<"TransactionTable"> | number
    donorBookId?: IntFilter<"TransactionTable"> | number
    clientBookId?: IntFilter<"TransactionTable"> | number
    NGO_id?: IntFilter<"TransactionTable"> | number
    qty?: IntFilter<"TransactionTable"> | number
    status?: StringFilter<"TransactionTable"> | string
  }

  export type UserInfoCreateWithoutDonatedInput = {
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    requested?: ClientBookCreateNestedManyWithoutClientInput
    transactionsCompleted?: TransactionTableCreateNestedManyWithoutNgoInput
  }

  export type UserInfoUncheckedCreateWithoutDonatedInput = {
    id?: number
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    requested?: ClientBookUncheckedCreateNestedManyWithoutClientInput
    transactionsCompleted?: TransactionTableUncheckedCreateNestedManyWithoutNgoInput
  }

  export type UserInfoCreateOrConnectWithoutDonatedInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutDonatedInput, UserInfoUncheckedCreateWithoutDonatedInput>
  }

  export type TransactionTableCreateWithoutDonorBookInput = {
    qty: number
    status?: string
    ngo: UserInfoCreateNestedOneWithoutTransactionsCompletedInput
    clientBook: ClientBookCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionTableUncheckedCreateWithoutDonorBookInput = {
    id?: number
    clientBookId: number
    NGO_id: number
    qty: number
    status?: string
  }

  export type TransactionTableCreateOrConnectWithoutDonorBookInput = {
    where: TransactionTableWhereUniqueInput
    create: XOR<TransactionTableCreateWithoutDonorBookInput, TransactionTableUncheckedCreateWithoutDonorBookInput>
  }

  export type TransactionTableCreateManyDonorBookInputEnvelope = {
    data: TransactionTableCreateManyDonorBookInput | TransactionTableCreateManyDonorBookInput[]
    skipDuplicates?: boolean
  }

  export type UserInfoUpsertWithoutDonatedInput = {
    update: XOR<UserInfoUpdateWithoutDonatedInput, UserInfoUncheckedUpdateWithoutDonatedInput>
    create: XOR<UserInfoCreateWithoutDonatedInput, UserInfoUncheckedCreateWithoutDonatedInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutDonatedInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutDonatedInput, UserInfoUncheckedUpdateWithoutDonatedInput>
  }

  export type UserInfoUpdateWithoutDonatedInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    requested?: ClientBookUpdateManyWithoutClientNestedInput
    transactionsCompleted?: TransactionTableUpdateManyWithoutNgoNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutDonatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    requested?: ClientBookUncheckedUpdateManyWithoutClientNestedInput
    transactionsCompleted?: TransactionTableUncheckedUpdateManyWithoutNgoNestedInput
  }

  export type TransactionTableUpsertWithWhereUniqueWithoutDonorBookInput = {
    where: TransactionTableWhereUniqueInput
    update: XOR<TransactionTableUpdateWithoutDonorBookInput, TransactionTableUncheckedUpdateWithoutDonorBookInput>
    create: XOR<TransactionTableCreateWithoutDonorBookInput, TransactionTableUncheckedCreateWithoutDonorBookInput>
  }

  export type TransactionTableUpdateWithWhereUniqueWithoutDonorBookInput = {
    where: TransactionTableWhereUniqueInput
    data: XOR<TransactionTableUpdateWithoutDonorBookInput, TransactionTableUncheckedUpdateWithoutDonorBookInput>
  }

  export type TransactionTableUpdateManyWithWhereWithoutDonorBookInput = {
    where: TransactionTableScalarWhereInput
    data: XOR<TransactionTableUpdateManyMutationInput, TransactionTableUncheckedUpdateManyWithoutDonorBookInput>
  }

  export type UserInfoCreateWithoutRequestedInput = {
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    donated?: DonorBookCreateNestedManyWithoutDonorInput
    transactionsCompleted?: TransactionTableCreateNestedManyWithoutNgoInput
  }

  export type UserInfoUncheckedCreateWithoutRequestedInput = {
    id?: number
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    donated?: DonorBookUncheckedCreateNestedManyWithoutDonorInput
    transactionsCompleted?: TransactionTableUncheckedCreateNestedManyWithoutNgoInput
  }

  export type UserInfoCreateOrConnectWithoutRequestedInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutRequestedInput, UserInfoUncheckedCreateWithoutRequestedInput>
  }

  export type TransactionTableCreateWithoutClientBookInput = {
    qty: number
    status?: string
    ngo: UserInfoCreateNestedOneWithoutTransactionsCompletedInput
    donorBook: DonorBookCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionTableUncheckedCreateWithoutClientBookInput = {
    id?: number
    donorBookId: number
    NGO_id: number
    qty: number
    status?: string
  }

  export type TransactionTableCreateOrConnectWithoutClientBookInput = {
    where: TransactionTableWhereUniqueInput
    create: XOR<TransactionTableCreateWithoutClientBookInput, TransactionTableUncheckedCreateWithoutClientBookInput>
  }

  export type TransactionTableCreateManyClientBookInputEnvelope = {
    data: TransactionTableCreateManyClientBookInput | TransactionTableCreateManyClientBookInput[]
    skipDuplicates?: boolean
  }

  export type UserInfoUpsertWithoutRequestedInput = {
    update: XOR<UserInfoUpdateWithoutRequestedInput, UserInfoUncheckedUpdateWithoutRequestedInput>
    create: XOR<UserInfoCreateWithoutRequestedInput, UserInfoUncheckedCreateWithoutRequestedInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutRequestedInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutRequestedInput, UserInfoUncheckedUpdateWithoutRequestedInput>
  }

  export type UserInfoUpdateWithoutRequestedInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    donated?: DonorBookUpdateManyWithoutDonorNestedInput
    transactionsCompleted?: TransactionTableUpdateManyWithoutNgoNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutRequestedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    donated?: DonorBookUncheckedUpdateManyWithoutDonorNestedInput
    transactionsCompleted?: TransactionTableUncheckedUpdateManyWithoutNgoNestedInput
  }

  export type TransactionTableUpsertWithWhereUniqueWithoutClientBookInput = {
    where: TransactionTableWhereUniqueInput
    update: XOR<TransactionTableUpdateWithoutClientBookInput, TransactionTableUncheckedUpdateWithoutClientBookInput>
    create: XOR<TransactionTableCreateWithoutClientBookInput, TransactionTableUncheckedCreateWithoutClientBookInput>
  }

  export type TransactionTableUpdateWithWhereUniqueWithoutClientBookInput = {
    where: TransactionTableWhereUniqueInput
    data: XOR<TransactionTableUpdateWithoutClientBookInput, TransactionTableUncheckedUpdateWithoutClientBookInput>
  }

  export type TransactionTableUpdateManyWithWhereWithoutClientBookInput = {
    where: TransactionTableScalarWhereInput
    data: XOR<TransactionTableUpdateManyMutationInput, TransactionTableUncheckedUpdateManyWithoutClientBookInput>
  }

  export type UserInfoCreateWithoutTransactionsCompletedInput = {
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    donated?: DonorBookCreateNestedManyWithoutDonorInput
    requested?: ClientBookCreateNestedManyWithoutClientInput
  }

  export type UserInfoUncheckedCreateWithoutTransactionsCompletedInput = {
    id?: number
    name: string
    address: string
    password: string
    email: string
    latitude?: number | null
    longitude?: number | null
    phone: string
    type: string
    donated?: DonorBookUncheckedCreateNestedManyWithoutDonorInput
    requested?: ClientBookUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserInfoCreateOrConnectWithoutTransactionsCompletedInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutTransactionsCompletedInput, UserInfoUncheckedCreateWithoutTransactionsCompletedInput>
  }

  export type DonorBookCreateWithoutTransactionsInput = {
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
    donor: UserInfoCreateNestedOneWithoutDonatedInput
  }

  export type DonorBookUncheckedCreateWithoutTransactionsInput = {
    id?: number
    D_id: number
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
  }

  export type DonorBookCreateOrConnectWithoutTransactionsInput = {
    where: DonorBookWhereUniqueInput
    create: XOR<DonorBookCreateWithoutTransactionsInput, DonorBookUncheckedCreateWithoutTransactionsInput>
  }

  export type ClientBookCreateWithoutTransactionsInput = {
    ISBN: string
    qty: number
    client: UserInfoCreateNestedOneWithoutRequestedInput
  }

  export type ClientBookUncheckedCreateWithoutTransactionsInput = {
    id?: number
    C_id: number
    ISBN: string
    qty: number
  }

  export type ClientBookCreateOrConnectWithoutTransactionsInput = {
    where: ClientBookWhereUniqueInput
    create: XOR<ClientBookCreateWithoutTransactionsInput, ClientBookUncheckedCreateWithoutTransactionsInput>
  }

  export type UserInfoUpsertWithoutTransactionsCompletedInput = {
    update: XOR<UserInfoUpdateWithoutTransactionsCompletedInput, UserInfoUncheckedUpdateWithoutTransactionsCompletedInput>
    create: XOR<UserInfoCreateWithoutTransactionsCompletedInput, UserInfoUncheckedCreateWithoutTransactionsCompletedInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutTransactionsCompletedInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutTransactionsCompletedInput, UserInfoUncheckedUpdateWithoutTransactionsCompletedInput>
  }

  export type UserInfoUpdateWithoutTransactionsCompletedInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    donated?: DonorBookUpdateManyWithoutDonorNestedInput
    requested?: ClientBookUpdateManyWithoutClientNestedInput
  }

  export type UserInfoUncheckedUpdateWithoutTransactionsCompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    donated?: DonorBookUncheckedUpdateManyWithoutDonorNestedInput
    requested?: ClientBookUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DonorBookUpsertWithoutTransactionsInput = {
    update: XOR<DonorBookUpdateWithoutTransactionsInput, DonorBookUncheckedUpdateWithoutTransactionsInput>
    create: XOR<DonorBookCreateWithoutTransactionsInput, DonorBookUncheckedCreateWithoutTransactionsInput>
    where?: DonorBookWhereInput
  }

  export type DonorBookUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: DonorBookWhereInput
    data: XOR<DonorBookUpdateWithoutTransactionsInput, DonorBookUncheckedUpdateWithoutTransactionsInput>
  }

  export type DonorBookUpdateWithoutTransactionsInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    donor?: UserInfoUpdateOneRequiredWithoutDonatedNestedInput
  }

  export type DonorBookUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    D_id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientBookUpsertWithoutTransactionsInput = {
    update: XOR<ClientBookUpdateWithoutTransactionsInput, ClientBookUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ClientBookCreateWithoutTransactionsInput, ClientBookUncheckedCreateWithoutTransactionsInput>
    where?: ClientBookWhereInput
  }

  export type ClientBookUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ClientBookWhereInput
    data: XOR<ClientBookUpdateWithoutTransactionsInput, ClientBookUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClientBookUpdateWithoutTransactionsInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    client?: UserInfoUpdateOneRequiredWithoutRequestedNestedInput
  }

  export type ClientBookUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type DonorBookCreateManyDonorInput = {
    id?: number
    ISBN: string
    qty: number
    age: number
    category: string
    book_name: string
    img_link?: string | null
  }

  export type ClientBookCreateManyClientInput = {
    id?: number
    ISBN: string
    qty: number
  }

  export type TransactionTableCreateManyNgoInput = {
    id?: number
    donorBookId: number
    clientBookId: number
    qty: number
    status?: string
  }

  export type DonorBookUpdateWithoutDonorInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionTableUpdateManyWithoutDonorBookNestedInput
  }

  export type DonorBookUncheckedUpdateWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: TransactionTableUncheckedUpdateManyWithoutDonorBookNestedInput
  }

  export type DonorBookUncheckedUpdateManyWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    book_name?: StringFieldUpdateOperationsInput | string
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientBookUpdateWithoutClientInput = {
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionTableUpdateManyWithoutClientBookNestedInput
  }

  export type ClientBookUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionTableUncheckedUpdateManyWithoutClientBookNestedInput
  }

  export type ClientBookUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionTableUpdateWithoutNgoInput = {
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    donorBook?: DonorBookUpdateOneRequiredWithoutTransactionsNestedInput
    clientBook?: ClientBookUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionTableUncheckedUpdateWithoutNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorBookId?: IntFieldUpdateOperationsInput | number
    clientBookId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTableUncheckedUpdateManyWithoutNgoInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorBookId?: IntFieldUpdateOperationsInput | number
    clientBookId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTableCreateManyDonorBookInput = {
    id?: number
    clientBookId: number
    NGO_id: number
    qty: number
    status?: string
  }

  export type TransactionTableUpdateWithoutDonorBookInput = {
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ngo?: UserInfoUpdateOneRequiredWithoutTransactionsCompletedNestedInput
    clientBook?: ClientBookUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionTableUncheckedUpdateWithoutDonorBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientBookId?: IntFieldUpdateOperationsInput | number
    NGO_id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTableUncheckedUpdateManyWithoutDonorBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientBookId?: IntFieldUpdateOperationsInput | number
    NGO_id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTableCreateManyClientBookInput = {
    id?: number
    donorBookId: number
    NGO_id: number
    qty: number
    status?: string
  }

  export type TransactionTableUpdateWithoutClientBookInput = {
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ngo?: UserInfoUpdateOneRequiredWithoutTransactionsCompletedNestedInput
    donorBook?: DonorBookUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionTableUncheckedUpdateWithoutClientBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorBookId?: IntFieldUpdateOperationsInput | number
    NGO_id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTableUncheckedUpdateManyWithoutClientBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorBookId?: IntFieldUpdateOperationsInput | number
    NGO_id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}