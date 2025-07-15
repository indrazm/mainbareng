
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Participants
 * 
 */
export type Participants = $Result.DefaultSelection<Prisma.$ParticipantsPayload>
/**
 * Model EventBanners
 * 
 */
export type EventBanners = $Result.DefaultSelection<Prisma.$EventBannersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participants`: Exposes CRUD operations for the **Participants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participants.findMany()
    * ```
    */
  get participants(): Prisma.ParticipantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventBanners`: Exposes CRUD operations for the **EventBanners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventBanners
    * const eventBanners = await prisma.eventBanners.findMany()
    * ```
    */
  get eventBanners(): Prisma.EventBannersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Users: 'Users',
    Events: 'Events',
    Participants: 'Participants',
    EventBanners: 'EventBanners'
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
      modelProps: "users" | "events" | "participants" | "eventBanners"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Participants: {
        payload: Prisma.$ParticipantsPayload<ExtArgs>
        fields: Prisma.ParticipantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          findFirst: {
            args: Prisma.ParticipantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          findMany: {
            args: Prisma.ParticipantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          create: {
            args: Prisma.ParticipantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          createMany: {
            args: Prisma.ParticipantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          delete: {
            args: Prisma.ParticipantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          update: {
            args: Prisma.ParticipantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          aggregate: {
            args: Prisma.ParticipantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipants>
          }
          groupBy: {
            args: Prisma.ParticipantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantsCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsCountAggregateOutputType> | number
          }
        }
      }
      EventBanners: {
        payload: Prisma.$EventBannersPayload<ExtArgs>
        fields: Prisma.EventBannersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventBannersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventBannersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>
          }
          findFirst: {
            args: Prisma.EventBannersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventBannersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>
          }
          findMany: {
            args: Prisma.EventBannersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>[]
          }
          create: {
            args: Prisma.EventBannersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>
          }
          createMany: {
            args: Prisma.EventBannersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventBannersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>[]
          }
          delete: {
            args: Prisma.EventBannersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>
          }
          update: {
            args: Prisma.EventBannersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>
          }
          deleteMany: {
            args: Prisma.EventBannersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventBannersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventBannersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>[]
          }
          upsert: {
            args: Prisma.EventBannersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventBannersPayload>
          }
          aggregate: {
            args: Prisma.EventBannersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventBanners>
          }
          groupBy: {
            args: Prisma.EventBannersGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventBannersGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventBannersCountArgs<ExtArgs>
            result: $Utils.Optional<EventBannersCountAggregateOutputType> | number
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
    users?: UsersOmit
    events?: EventsOmit
    participants?: ParticipantsOmit
    eventBanners?: EventBannersOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    events: number
    participants: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UsersCountOutputTypeCountEventsArgs
    participants?: boolean | UsersCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    participants: number
    eventbanner: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | EventsCountOutputTypeCountParticipantsArgs
    eventbanner?: boolean | EventsCountOutputTypeCountEventbannerArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountEventbannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventBannersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    first_name: string | null
    last_name: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    first_name: string | null
    last_name: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    first_name: string | null
    last_name: string | null
    password: string | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    events?: boolean | Users$eventsArgs<ExtArgs>
    participants?: boolean | Users$participantsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "last_name" | "password" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Users$eventsArgs<ExtArgs>
    participants?: boolean | Users$participantsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      events: Prisma.$EventsPayload<ExtArgs>[]
      participants: Prisma.$ParticipantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      first_name: string | null
      last_name: string | null
      password: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Users$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Users$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Users$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Users$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.events
   */
  export type Users$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Users.participants
   */
  export type Users$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    cursor?: ParticipantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    max_participant: number | null
    latitude: number | null
    longitude: number | null
    price: number | null
    user_id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    max_participant: number | null
    latitude: number | null
    longitude: number | null
    price: number | null
    user_id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    sport_type: string | null
    date_time: Date | null
    max_participant: number | null
    city: string | null
    location_name: string | null
    latitude: number | null
    longitude: number | null
    price: number | null
    is_private: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    sport_type: string | null
    date_time: Date | null
    max_participant: number | null
    city: string | null
    location_name: string | null
    latitude: number | null
    longitude: number | null
    price: number | null
    is_private: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    sport_type: number
    date_time: number
    max_participant: number
    city: number
    location_name: number
    latitude: number
    longitude: number
    price: number
    is_private: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    max_participant?: true
    latitude?: true
    longitude?: true
    price?: true
    user_id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    max_participant?: true
    latitude?: true
    longitude?: true
    price?: true
    user_id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sport_type?: true
    date_time?: true
    max_participant?: true
    city?: true
    location_name?: true
    latitude?: true
    longitude?: true
    price?: true
    is_private?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sport_type?: true
    date_time?: true
    max_participant?: true
    city?: true
    location_name?: true
    latitude?: true
    longitude?: true
    price?: true
    is_private?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sport_type?: true
    date_time?: true
    max_participant?: true
    city?: true
    location_name?: true
    latitude?: true
    longitude?: true
    price?: true
    is_private?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    sport_type: string
    date_time: Date
    max_participant: number | null
    city: string
    location_name: string | null
    latitude: number | null
    longitude: number | null
    price: number | null
    is_private: boolean | null
    created_at: Date
    updated_at: Date
    user_id: number
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sport_type?: boolean
    date_time?: boolean
    max_participant?: boolean
    city?: boolean
    location_name?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    is_private?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    participants?: boolean | Events$participantsArgs<ExtArgs>
    eventbanner?: boolean | Events$eventbannerArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sport_type?: boolean
    date_time?: boolean
    max_participant?: boolean
    city?: boolean
    location_name?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    is_private?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sport_type?: boolean
    date_time?: boolean
    max_participant?: boolean
    city?: boolean
    location_name?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    is_private?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    sport_type?: boolean
    date_time?: boolean
    max_participant?: boolean
    city?: boolean
    location_name?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    is_private?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "sport_type" | "date_time" | "max_participant" | "city" | "location_name" | "latitude" | "longitude" | "price" | "is_private" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    participants?: boolean | Events$participantsArgs<ExtArgs>
    eventbanner?: boolean | Events$eventbannerArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      participants: Prisma.$ParticipantsPayload<ExtArgs>[]
      eventbanner: Prisma.$EventBannersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      sport_type: string
      date_time: Date
      max_participant: number | null
      city: string
      location_name: string | null
      latitude: number | null
      longitude: number | null
      price: number | null
      is_private: boolean | null
      created_at: Date
      updated_at: Date
      user_id: number
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
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
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Events$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Events$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventbanner<T extends Events$eventbannerArgs<ExtArgs> = {}>(args?: Subset<T, Events$eventbannerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'Int'>
    readonly title: FieldRef<"Events", 'String'>
    readonly description: FieldRef<"Events", 'String'>
    readonly sport_type: FieldRef<"Events", 'String'>
    readonly date_time: FieldRef<"Events", 'DateTime'>
    readonly max_participant: FieldRef<"Events", 'Int'>
    readonly city: FieldRef<"Events", 'String'>
    readonly location_name: FieldRef<"Events", 'String'>
    readonly latitude: FieldRef<"Events", 'Float'>
    readonly longitude: FieldRef<"Events", 'Float'>
    readonly price: FieldRef<"Events", 'Int'>
    readonly is_private: FieldRef<"Events", 'Boolean'>
    readonly created_at: FieldRef<"Events", 'DateTime'>
    readonly updated_at: FieldRef<"Events", 'DateTime'>
    readonly user_id: FieldRef<"Events", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events.participants
   */
  export type Events$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    cursor?: ParticipantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Events.eventbanner
   */
  export type Events$eventbannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    where?: EventBannersWhereInput
    orderBy?: EventBannersOrderByWithRelationInput | EventBannersOrderByWithRelationInput[]
    cursor?: EventBannersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventBannersScalarFieldEnum | EventBannersScalarFieldEnum[]
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Model Participants
   */

  export type AggregateParticipants = {
    _count: ParticipantsCountAggregateOutputType | null
    _avg: ParticipantsAvgAggregateOutputType | null
    _sum: ParticipantsSumAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  export type ParticipantsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type ParticipantsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type ParticipantsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    status: string | null
    joined_at: Date | null
  }

  export type ParticipantsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    status: string | null
    joined_at: Date | null
  }

  export type ParticipantsCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    status: number
    joined_at: number
    _all: number
  }


  export type ParticipantsAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type ParticipantsSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type ParticipantsMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    status?: true
    joined_at?: true
  }

  export type ParticipantsMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    status?: true
    joined_at?: true
  }

  export type ParticipantsCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    status?: true
    joined_at?: true
    _all?: true
  }

  export type ParticipantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to aggregate.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantsMaxAggregateInputType
  }

  export type GetParticipantsAggregateType<T extends ParticipantsAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipants[P]>
      : GetScalarType<T[P], AggregateParticipants[P]>
  }




  export type ParticipantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithAggregationInput | ParticipantsOrderByWithAggregationInput[]
    by: ParticipantsScalarFieldEnum[] | ParticipantsScalarFieldEnum
    having?: ParticipantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantsCountAggregateInputType | true
    _avg?: ParticipantsAvgAggregateInputType
    _sum?: ParticipantsSumAggregateInputType
    _min?: ParticipantsMinAggregateInputType
    _max?: ParticipantsMaxAggregateInputType
  }

  export type ParticipantsGroupByOutputType = {
    id: number
    user_id: number
    event_id: number
    status: string
    joined_at: Date
    _count: ParticipantsCountAggregateOutputType | null
    _avg: ParticipantsAvgAggregateOutputType | null
    _sum: ParticipantsSumAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  type GetParticipantsGroupByPayload<T extends ParticipantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    joined_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    joined_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    joined_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    joined_at?: boolean
  }

  export type ParticipantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "status" | "joined_at", ExtArgs["result"]["participants"]>
  export type ParticipantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type ParticipantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type ParticipantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }

  export type $ParticipantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participants"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      event: Prisma.$EventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      event_id: number
      status: string
      joined_at: Date
    }, ExtArgs["result"]["participants"]>
    composites: {}
  }

  type ParticipantsGetPayload<S extends boolean | null | undefined | ParticipantsDefaultArgs> = $Result.GetResult<Prisma.$ParticipantsPayload, S>

  type ParticipantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantsCountAggregateInputType | true
    }

  export interface ParticipantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participants'], meta: { name: 'Participants' } }
    /**
     * Find zero or one Participants that matches the filter.
     * @param {ParticipantsFindUniqueArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantsFindUniqueArgs>(args: SelectSubset<T, ParticipantsFindUniqueArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantsFindUniqueOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindFirstArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantsFindFirstArgs>(args?: SelectSubset<T, ParticipantsFindFirstArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindFirstOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participants.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantsWithIdOnly = await prisma.participants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantsFindManyArgs>(args?: SelectSubset<T, ParticipantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participants.
     * @param {ParticipantsCreateArgs} args - Arguments to create a Participants.
     * @example
     * // Create one Participants
     * const Participants = await prisma.participants.create({
     *   data: {
     *     // ... data to create a Participants
     *   }
     * })
     * 
     */
    create<T extends ParticipantsCreateArgs>(args: SelectSubset<T, ParticipantsCreateArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantsCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participants = await prisma.participants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantsCreateManyArgs>(args?: SelectSubset<T, ParticipantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantsCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participants = await prisma.participants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantsWithIdOnly = await prisma.participants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantsCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participants.
     * @param {ParticipantsDeleteArgs} args - Arguments to delete one Participants.
     * @example
     * // Delete one Participants
     * const Participants = await prisma.participants.delete({
     *   where: {
     *     // ... filter to delete one Participants
     *   }
     * })
     * 
     */
    delete<T extends ParticipantsDeleteArgs>(args: SelectSubset<T, ParticipantsDeleteArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participants.
     * @param {ParticipantsUpdateArgs} args - Arguments to update one Participants.
     * @example
     * // Update one Participants
     * const participants = await prisma.participants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantsUpdateArgs>(args: SelectSubset<T, ParticipantsUpdateArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantsDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantsDeleteManyArgs>(args?: SelectSubset<T, ParticipantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participants = await prisma.participants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantsUpdateManyArgs>(args: SelectSubset<T, ParticipantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantsUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participants = await prisma.participants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantsWithIdOnly = await prisma.participants.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantsUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participants.
     * @param {ParticipantsUpsertArgs} args - Arguments to update or create a Participants.
     * @example
     * // Update or create a Participants
     * const participants = await prisma.participants.upsert({
     *   create: {
     *     // ... data to create a Participants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participants we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantsUpsertArgs>(args: SelectSubset<T, ParticipantsUpsertArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participants.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantsCountArgs>(
      args?: Subset<T, ParticipantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantsAggregateArgs>(args: Subset<T, ParticipantsAggregateArgs>): Prisma.PrismaPromise<GetParticipantsAggregateType<T>>

    /**
     * Group by Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsGroupByArgs} args - Group by arguments.
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
      T extends ParticipantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantsGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participants model
   */
  readonly fields: ParticipantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Participants model
   */
  interface ParticipantsFieldRefs {
    readonly id: FieldRef<"Participants", 'Int'>
    readonly user_id: FieldRef<"Participants", 'Int'>
    readonly event_id: FieldRef<"Participants", 'Int'>
    readonly status: FieldRef<"Participants", 'String'>
    readonly joined_at: FieldRef<"Participants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participants findUnique
   */
  export type ParticipantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants findUniqueOrThrow
   */
  export type ParticipantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants findFirst
   */
  export type ParticipantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants findFirstOrThrow
   */
  export type ParticipantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants findMany
   */
  export type ParticipantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants create
   */
  export type ParticipantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Participants.
     */
    data: XOR<ParticipantsCreateInput, ParticipantsUncheckedCreateInput>
  }

  /**
   * Participants createMany
   */
  export type ParticipantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantsCreateManyInput | ParticipantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participants createManyAndReturn
   */
  export type ParticipantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantsCreateManyInput | ParticipantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participants update
   */
  export type ParticipantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Participants.
     */
    data: XOR<ParticipantsUpdateInput, ParticipantsUncheckedUpdateInput>
    /**
     * Choose, which Participants to update.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants updateMany
   */
  export type ParticipantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participants updateManyAndReturn
   */
  export type ParticipantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participants upsert
   */
  export type ParticipantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Participants to update in case it exists.
     */
    where: ParticipantsWhereUniqueInput
    /**
     * In case the Participants found by the `where` argument doesn't exist, create a new Participants with this data.
     */
    create: XOR<ParticipantsCreateInput, ParticipantsUncheckedCreateInput>
    /**
     * In case the Participants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantsUpdateInput, ParticipantsUncheckedUpdateInput>
  }

  /**
   * Participants delete
   */
  export type ParticipantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter which Participants to delete.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants deleteMany
   */
  export type ParticipantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participants without action
   */
  export type ParticipantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
  }


  /**
   * Model EventBanners
   */

  export type AggregateEventBanners = {
    _count: EventBannersCountAggregateOutputType | null
    _avg: EventBannersAvgAggregateOutputType | null
    _sum: EventBannersSumAggregateOutputType | null
    _min: EventBannersMinAggregateOutputType | null
    _max: EventBannersMaxAggregateOutputType | null
  }

  export type EventBannersAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    size: number | null
  }

  export type EventBannersSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    size: number | null
  }

  export type EventBannersMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    size: number | null
    path: string | null
    created_at: Date | null
  }

  export type EventBannersMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    size: number | null
    path: string | null
    created_at: Date | null
  }

  export type EventBannersCountAggregateOutputType = {
    id: number
    event_id: number
    name: number
    size: number
    path: number
    created_at: number
    _all: number
  }


  export type EventBannersAvgAggregateInputType = {
    id?: true
    event_id?: true
    size?: true
  }

  export type EventBannersSumAggregateInputType = {
    id?: true
    event_id?: true
    size?: true
  }

  export type EventBannersMinAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    size?: true
    path?: true
    created_at?: true
  }

  export type EventBannersMaxAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    size?: true
    path?: true
    created_at?: true
  }

  export type EventBannersCountAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    size?: true
    path?: true
    created_at?: true
    _all?: true
  }

  export type EventBannersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventBanners to aggregate.
     */
    where?: EventBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventBanners to fetch.
     */
    orderBy?: EventBannersOrderByWithRelationInput | EventBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventBanners
    **/
    _count?: true | EventBannersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventBannersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventBannersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventBannersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventBannersMaxAggregateInputType
  }

  export type GetEventBannersAggregateType<T extends EventBannersAggregateArgs> = {
        [P in keyof T & keyof AggregateEventBanners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventBanners[P]>
      : GetScalarType<T[P], AggregateEventBanners[P]>
  }




  export type EventBannersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventBannersWhereInput
    orderBy?: EventBannersOrderByWithAggregationInput | EventBannersOrderByWithAggregationInput[]
    by: EventBannersScalarFieldEnum[] | EventBannersScalarFieldEnum
    having?: EventBannersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventBannersCountAggregateInputType | true
    _avg?: EventBannersAvgAggregateInputType
    _sum?: EventBannersSumAggregateInputType
    _min?: EventBannersMinAggregateInputType
    _max?: EventBannersMaxAggregateInputType
  }

  export type EventBannersGroupByOutputType = {
    id: number
    event_id: number
    name: string
    size: number
    path: string
    created_at: Date
    _count: EventBannersCountAggregateOutputType | null
    _avg: EventBannersAvgAggregateOutputType | null
    _sum: EventBannersSumAggregateOutputType | null
    _min: EventBannersMinAggregateOutputType | null
    _max: EventBannersMaxAggregateOutputType | null
  }

  type GetEventBannersGroupByPayload<T extends EventBannersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventBannersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventBannersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventBannersGroupByOutputType[P]>
            : GetScalarType<T[P], EventBannersGroupByOutputType[P]>
        }
      >
    >


  export type EventBannersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    size?: boolean
    path?: boolean
    created_at?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventBanners"]>

  export type EventBannersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    size?: boolean
    path?: boolean
    created_at?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventBanners"]>

  export type EventBannersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    size?: boolean
    path?: boolean
    created_at?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventBanners"]>

  export type EventBannersSelectScalar = {
    id?: boolean
    event_id?: boolean
    name?: boolean
    size?: boolean
    path?: boolean
    created_at?: boolean
  }

  export type EventBannersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "name" | "size" | "path" | "created_at", ExtArgs["result"]["eventBanners"]>
  export type EventBannersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type EventBannersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type EventBannersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }

  export type $EventBannersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventBanners"
    objects: {
      event: Prisma.$EventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      name: string
      size: number
      path: string
      created_at: Date
    }, ExtArgs["result"]["eventBanners"]>
    composites: {}
  }

  type EventBannersGetPayload<S extends boolean | null | undefined | EventBannersDefaultArgs> = $Result.GetResult<Prisma.$EventBannersPayload, S>

  type EventBannersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventBannersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventBannersCountAggregateInputType | true
    }

  export interface EventBannersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventBanners'], meta: { name: 'EventBanners' } }
    /**
     * Find zero or one EventBanners that matches the filter.
     * @param {EventBannersFindUniqueArgs} args - Arguments to find a EventBanners
     * @example
     * // Get one EventBanners
     * const eventBanners = await prisma.eventBanners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventBannersFindUniqueArgs>(args: SelectSubset<T, EventBannersFindUniqueArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventBanners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventBannersFindUniqueOrThrowArgs} args - Arguments to find a EventBanners
     * @example
     * // Get one EventBanners
     * const eventBanners = await prisma.eventBanners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventBannersFindUniqueOrThrowArgs>(args: SelectSubset<T, EventBannersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventBannersFindFirstArgs} args - Arguments to find a EventBanners
     * @example
     * // Get one EventBanners
     * const eventBanners = await prisma.eventBanners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventBannersFindFirstArgs>(args?: SelectSubset<T, EventBannersFindFirstArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventBanners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventBannersFindFirstOrThrowArgs} args - Arguments to find a EventBanners
     * @example
     * // Get one EventBanners
     * const eventBanners = await prisma.eventBanners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventBannersFindFirstOrThrowArgs>(args?: SelectSubset<T, EventBannersFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventBannersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventBanners
     * const eventBanners = await prisma.eventBanners.findMany()
     * 
     * // Get first 10 EventBanners
     * const eventBanners = await prisma.eventBanners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventBannersWithIdOnly = await prisma.eventBanners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventBannersFindManyArgs>(args?: SelectSubset<T, EventBannersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventBanners.
     * @param {EventBannersCreateArgs} args - Arguments to create a EventBanners.
     * @example
     * // Create one EventBanners
     * const EventBanners = await prisma.eventBanners.create({
     *   data: {
     *     // ... data to create a EventBanners
     *   }
     * })
     * 
     */
    create<T extends EventBannersCreateArgs>(args: SelectSubset<T, EventBannersCreateArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventBanners.
     * @param {EventBannersCreateManyArgs} args - Arguments to create many EventBanners.
     * @example
     * // Create many EventBanners
     * const eventBanners = await prisma.eventBanners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventBannersCreateManyArgs>(args?: SelectSubset<T, EventBannersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventBanners and returns the data saved in the database.
     * @param {EventBannersCreateManyAndReturnArgs} args - Arguments to create many EventBanners.
     * @example
     * // Create many EventBanners
     * const eventBanners = await prisma.eventBanners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventBanners and only return the `id`
     * const eventBannersWithIdOnly = await prisma.eventBanners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventBannersCreateManyAndReturnArgs>(args?: SelectSubset<T, EventBannersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventBanners.
     * @param {EventBannersDeleteArgs} args - Arguments to delete one EventBanners.
     * @example
     * // Delete one EventBanners
     * const EventBanners = await prisma.eventBanners.delete({
     *   where: {
     *     // ... filter to delete one EventBanners
     *   }
     * })
     * 
     */
    delete<T extends EventBannersDeleteArgs>(args: SelectSubset<T, EventBannersDeleteArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventBanners.
     * @param {EventBannersUpdateArgs} args - Arguments to update one EventBanners.
     * @example
     * // Update one EventBanners
     * const eventBanners = await prisma.eventBanners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventBannersUpdateArgs>(args: SelectSubset<T, EventBannersUpdateArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventBanners.
     * @param {EventBannersDeleteManyArgs} args - Arguments to filter EventBanners to delete.
     * @example
     * // Delete a few EventBanners
     * const { count } = await prisma.eventBanners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventBannersDeleteManyArgs>(args?: SelectSubset<T, EventBannersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventBannersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventBanners
     * const eventBanners = await prisma.eventBanners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventBannersUpdateManyArgs>(args: SelectSubset<T, EventBannersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventBanners and returns the data updated in the database.
     * @param {EventBannersUpdateManyAndReturnArgs} args - Arguments to update many EventBanners.
     * @example
     * // Update many EventBanners
     * const eventBanners = await prisma.eventBanners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventBanners and only return the `id`
     * const eventBannersWithIdOnly = await prisma.eventBanners.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventBannersUpdateManyAndReturnArgs>(args: SelectSubset<T, EventBannersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventBanners.
     * @param {EventBannersUpsertArgs} args - Arguments to update or create a EventBanners.
     * @example
     * // Update or create a EventBanners
     * const eventBanners = await prisma.eventBanners.upsert({
     *   create: {
     *     // ... data to create a EventBanners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventBanners we want to update
     *   }
     * })
     */
    upsert<T extends EventBannersUpsertArgs>(args: SelectSubset<T, EventBannersUpsertArgs<ExtArgs>>): Prisma__EventBannersClient<$Result.GetResult<Prisma.$EventBannersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventBannersCountArgs} args - Arguments to filter EventBanners to count.
     * @example
     * // Count the number of EventBanners
     * const count = await prisma.eventBanners.count({
     *   where: {
     *     // ... the filter for the EventBanners we want to count
     *   }
     * })
    **/
    count<T extends EventBannersCountArgs>(
      args?: Subset<T, EventBannersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventBannersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventBannersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventBannersAggregateArgs>(args: Subset<T, EventBannersAggregateArgs>): Prisma.PrismaPromise<GetEventBannersAggregateType<T>>

    /**
     * Group by EventBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventBannersGroupByArgs} args - Group by arguments.
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
      T extends EventBannersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventBannersGroupByArgs['orderBy'] }
        : { orderBy?: EventBannersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventBannersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventBannersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventBanners model
   */
  readonly fields: EventBannersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventBanners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventBannersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventBanners model
   */
  interface EventBannersFieldRefs {
    readonly id: FieldRef<"EventBanners", 'Int'>
    readonly event_id: FieldRef<"EventBanners", 'Int'>
    readonly name: FieldRef<"EventBanners", 'String'>
    readonly size: FieldRef<"EventBanners", 'Int'>
    readonly path: FieldRef<"EventBanners", 'String'>
    readonly created_at: FieldRef<"EventBanners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventBanners findUnique
   */
  export type EventBannersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * Filter, which EventBanners to fetch.
     */
    where: EventBannersWhereUniqueInput
  }

  /**
   * EventBanners findUniqueOrThrow
   */
  export type EventBannersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * Filter, which EventBanners to fetch.
     */
    where: EventBannersWhereUniqueInput
  }

  /**
   * EventBanners findFirst
   */
  export type EventBannersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * Filter, which EventBanners to fetch.
     */
    where?: EventBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventBanners to fetch.
     */
    orderBy?: EventBannersOrderByWithRelationInput | EventBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventBanners.
     */
    cursor?: EventBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventBanners.
     */
    distinct?: EventBannersScalarFieldEnum | EventBannersScalarFieldEnum[]
  }

  /**
   * EventBanners findFirstOrThrow
   */
  export type EventBannersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * Filter, which EventBanners to fetch.
     */
    where?: EventBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventBanners to fetch.
     */
    orderBy?: EventBannersOrderByWithRelationInput | EventBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventBanners.
     */
    cursor?: EventBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventBanners.
     */
    distinct?: EventBannersScalarFieldEnum | EventBannersScalarFieldEnum[]
  }

  /**
   * EventBanners findMany
   */
  export type EventBannersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * Filter, which EventBanners to fetch.
     */
    where?: EventBannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventBanners to fetch.
     */
    orderBy?: EventBannersOrderByWithRelationInput | EventBannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventBanners.
     */
    cursor?: EventBannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventBanners.
     */
    skip?: number
    distinct?: EventBannersScalarFieldEnum | EventBannersScalarFieldEnum[]
  }

  /**
   * EventBanners create
   */
  export type EventBannersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * The data needed to create a EventBanners.
     */
    data: XOR<EventBannersCreateInput, EventBannersUncheckedCreateInput>
  }

  /**
   * EventBanners createMany
   */
  export type EventBannersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventBanners.
     */
    data: EventBannersCreateManyInput | EventBannersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventBanners createManyAndReturn
   */
  export type EventBannersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * The data used to create many EventBanners.
     */
    data: EventBannersCreateManyInput | EventBannersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventBanners update
   */
  export type EventBannersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * The data needed to update a EventBanners.
     */
    data: XOR<EventBannersUpdateInput, EventBannersUncheckedUpdateInput>
    /**
     * Choose, which EventBanners to update.
     */
    where: EventBannersWhereUniqueInput
  }

  /**
   * EventBanners updateMany
   */
  export type EventBannersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventBanners.
     */
    data: XOR<EventBannersUpdateManyMutationInput, EventBannersUncheckedUpdateManyInput>
    /**
     * Filter which EventBanners to update
     */
    where?: EventBannersWhereInput
    /**
     * Limit how many EventBanners to update.
     */
    limit?: number
  }

  /**
   * EventBanners updateManyAndReturn
   */
  export type EventBannersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * The data used to update EventBanners.
     */
    data: XOR<EventBannersUpdateManyMutationInput, EventBannersUncheckedUpdateManyInput>
    /**
     * Filter which EventBanners to update
     */
    where?: EventBannersWhereInput
    /**
     * Limit how many EventBanners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventBanners upsert
   */
  export type EventBannersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * The filter to search for the EventBanners to update in case it exists.
     */
    where: EventBannersWhereUniqueInput
    /**
     * In case the EventBanners found by the `where` argument doesn't exist, create a new EventBanners with this data.
     */
    create: XOR<EventBannersCreateInput, EventBannersUncheckedCreateInput>
    /**
     * In case the EventBanners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventBannersUpdateInput, EventBannersUncheckedUpdateInput>
  }

  /**
   * EventBanners delete
   */
  export type EventBannersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
    /**
     * Filter which EventBanners to delete.
     */
    where: EventBannersWhereUniqueInput
  }

  /**
   * EventBanners deleteMany
   */
  export type EventBannersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventBanners to delete
     */
    where?: EventBannersWhereInput
    /**
     * Limit how many EventBanners to delete.
     */
    limit?: number
  }

  /**
   * EventBanners without action
   */
  export type EventBannersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventBanners
     */
    select?: EventBannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventBanners
     */
    omit?: EventBannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventBannersInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    sport_type: 'sport_type',
    date_time: 'date_time',
    max_participant: 'max_participant',
    city: 'city',
    location_name: 'location_name',
    latitude: 'latitude',
    longitude: 'longitude',
    price: 'price',
    is_private: 'is_private',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const ParticipantsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    status: 'status',
    joined_at: 'joined_at'
  };

  export type ParticipantsScalarFieldEnum = (typeof ParticipantsScalarFieldEnum)[keyof typeof ParticipantsScalarFieldEnum]


  export const EventBannersScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    name: 'name',
    size: 'size',
    path: 'path',
    created_at: 'created_at'
  };

  export type EventBannersScalarFieldEnum = (typeof EventBannersScalarFieldEnum)[keyof typeof EventBannersScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    first_name?: StringNullableFilter<"Users"> | string | null
    last_name?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    events?: EventsListRelationFilter
    participants?: ParticipantsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    events?: EventsOrderByRelationAggregateInput
    participants?: ParticipantsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringNullableFilter<"Users"> | string | null
    last_name?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    events?: EventsListRelationFilter
    participants?: ParticipantsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    first_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: IntFilter<"Events"> | number
    title?: StringFilter<"Events"> | string
    description?: StringNullableFilter<"Events"> | string | null
    sport_type?: StringFilter<"Events"> | string
    date_time?: DateTimeFilter<"Events"> | Date | string
    max_participant?: IntNullableFilter<"Events"> | number | null
    city?: StringFilter<"Events"> | string
    location_name?: StringNullableFilter<"Events"> | string | null
    latitude?: FloatNullableFilter<"Events"> | number | null
    longitude?: FloatNullableFilter<"Events"> | number | null
    price?: IntNullableFilter<"Events"> | number | null
    is_private?: BoolNullableFilter<"Events"> | boolean | null
    created_at?: DateTimeFilter<"Events"> | Date | string
    updated_at?: DateTimeFilter<"Events"> | Date | string
    user_id?: IntFilter<"Events"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    participants?: ParticipantsListRelationFilter
    eventbanner?: EventBannersListRelationFilter
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sport_type?: SortOrder
    date_time?: SortOrder
    max_participant?: SortOrderInput | SortOrder
    city?: SortOrder
    location_name?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    is_private?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UsersOrderByWithRelationInput
    participants?: ParticipantsOrderByRelationAggregateInput
    eventbanner?: EventBannersOrderByRelationAggregateInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    title?: StringFilter<"Events"> | string
    description?: StringNullableFilter<"Events"> | string | null
    sport_type?: StringFilter<"Events"> | string
    date_time?: DateTimeFilter<"Events"> | Date | string
    max_participant?: IntNullableFilter<"Events"> | number | null
    city?: StringFilter<"Events"> | string
    location_name?: StringNullableFilter<"Events"> | string | null
    latitude?: FloatNullableFilter<"Events"> | number | null
    longitude?: FloatNullableFilter<"Events"> | number | null
    price?: IntNullableFilter<"Events"> | number | null
    is_private?: BoolNullableFilter<"Events"> | boolean | null
    created_at?: DateTimeFilter<"Events"> | Date | string
    updated_at?: DateTimeFilter<"Events"> | Date | string
    user_id?: IntFilter<"Events"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    participants?: ParticipantsListRelationFilter
    eventbanner?: EventBannersListRelationFilter
  }, "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sport_type?: SortOrder
    date_time?: SortOrder
    max_participant?: SortOrderInput | SortOrder
    city?: SortOrder
    location_name?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    is_private?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Events"> | number
    title?: StringWithAggregatesFilter<"Events"> | string
    description?: StringNullableWithAggregatesFilter<"Events"> | string | null
    sport_type?: StringWithAggregatesFilter<"Events"> | string
    date_time?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    max_participant?: IntNullableWithAggregatesFilter<"Events"> | number | null
    city?: StringWithAggregatesFilter<"Events"> | string
    location_name?: StringNullableWithAggregatesFilter<"Events"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Events"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Events"> | number | null
    price?: IntNullableWithAggregatesFilter<"Events"> | number | null
    is_private?: BoolNullableWithAggregatesFilter<"Events"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    user_id?: IntWithAggregatesFilter<"Events"> | number
  }

  export type ParticipantsWhereInput = {
    AND?: ParticipantsWhereInput | ParticipantsWhereInput[]
    OR?: ParticipantsWhereInput[]
    NOT?: ParticipantsWhereInput | ParticipantsWhereInput[]
    id?: IntFilter<"Participants"> | number
    user_id?: IntFilter<"Participants"> | number
    event_id?: IntFilter<"Participants"> | number
    status?: StringFilter<"Participants"> | string
    joined_at?: DateTimeFilter<"Participants"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }

  export type ParticipantsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    event?: EventsOrderByWithRelationInput
  }

  export type ParticipantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_event_id?: ParticipantsUser_idEvent_idCompoundUniqueInput
    AND?: ParticipantsWhereInput | ParticipantsWhereInput[]
    OR?: ParticipantsWhereInput[]
    NOT?: ParticipantsWhereInput | ParticipantsWhereInput[]
    user_id?: IntFilter<"Participants"> | number
    event_id?: IntFilter<"Participants"> | number
    status?: StringFilter<"Participants"> | string
    joined_at?: DateTimeFilter<"Participants"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }, "id" | "user_id_event_id">

  export type ParticipantsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    _count?: ParticipantsCountOrderByAggregateInput
    _avg?: ParticipantsAvgOrderByAggregateInput
    _max?: ParticipantsMaxOrderByAggregateInput
    _min?: ParticipantsMinOrderByAggregateInput
    _sum?: ParticipantsSumOrderByAggregateInput
  }

  export type ParticipantsScalarWhereWithAggregatesInput = {
    AND?: ParticipantsScalarWhereWithAggregatesInput | ParticipantsScalarWhereWithAggregatesInput[]
    OR?: ParticipantsScalarWhereWithAggregatesInput[]
    NOT?: ParticipantsScalarWhereWithAggregatesInput | ParticipantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participants"> | number
    user_id?: IntWithAggregatesFilter<"Participants"> | number
    event_id?: IntWithAggregatesFilter<"Participants"> | number
    status?: StringWithAggregatesFilter<"Participants"> | string
    joined_at?: DateTimeWithAggregatesFilter<"Participants"> | Date | string
  }

  export type EventBannersWhereInput = {
    AND?: EventBannersWhereInput | EventBannersWhereInput[]
    OR?: EventBannersWhereInput[]
    NOT?: EventBannersWhereInput | EventBannersWhereInput[]
    id?: IntFilter<"EventBanners"> | number
    event_id?: IntFilter<"EventBanners"> | number
    name?: StringFilter<"EventBanners"> | string
    size?: IntFilter<"EventBanners"> | number
    path?: StringFilter<"EventBanners"> | string
    created_at?: DateTimeFilter<"EventBanners"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }

  export type EventBannersOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    path?: SortOrder
    created_at?: SortOrder
    event?: EventsOrderByWithRelationInput
  }

  export type EventBannersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventBannersWhereInput | EventBannersWhereInput[]
    OR?: EventBannersWhereInput[]
    NOT?: EventBannersWhereInput | EventBannersWhereInput[]
    event_id?: IntFilter<"EventBanners"> | number
    name?: StringFilter<"EventBanners"> | string
    size?: IntFilter<"EventBanners"> | number
    path?: StringFilter<"EventBanners"> | string
    created_at?: DateTimeFilter<"EventBanners"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }, "id">

  export type EventBannersOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    path?: SortOrder
    created_at?: SortOrder
    _count?: EventBannersCountOrderByAggregateInput
    _avg?: EventBannersAvgOrderByAggregateInput
    _max?: EventBannersMaxOrderByAggregateInput
    _min?: EventBannersMinOrderByAggregateInput
    _sum?: EventBannersSumOrderByAggregateInput
  }

  export type EventBannersScalarWhereWithAggregatesInput = {
    AND?: EventBannersScalarWhereWithAggregatesInput | EventBannersScalarWhereWithAggregatesInput[]
    OR?: EventBannersScalarWhereWithAggregatesInput[]
    NOT?: EventBannersScalarWhereWithAggregatesInput | EventBannersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventBanners"> | number
    event_id?: IntWithAggregatesFilter<"EventBanners"> | number
    name?: StringWithAggregatesFilter<"EventBanners"> | string
    size?: IntWithAggregatesFilter<"EventBanners"> | number
    path?: StringWithAggregatesFilter<"EventBanners"> | string
    created_at?: DateTimeWithAggregatesFilter<"EventBanners"> | Date | string
  }

  export type UsersCreateInput = {
    email: string
    first_name?: string | null
    last_name?: string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    events?: EventsCreateNestedManyWithoutUserInput
    participants?: ParticipantsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    first_name?: string | null
    last_name?: string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutUserInput
    participants?: ParticipantsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutUserNestedInput
    participants?: ParticipantsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutUserNestedInput
    participants?: ParticipantsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    first_name?: string | null
    last_name?: string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateInput = {
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutEventsInput
    participants?: ParticipantsCreateNestedManyWithoutEventInput
    eventbanner?: EventBannersCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    participants?: ParticipantsUncheckedCreateNestedManyWithoutEventInput
    eventbanner?: EventBannersUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutEventsNestedInput
    participants?: ParticipantsUpdateManyWithoutEventNestedInput
    eventbanner?: EventBannersUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantsUncheckedUpdateManyWithoutEventNestedInput
    eventbanner?: EventBannersUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
  }

  export type EventsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantsCreateInput = {
    status?: string
    joined_at?: Date | string
    user: UsersCreateNestedOneWithoutParticipantsInput
    event: EventsCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantsUncheckedCreateInput = {
    id?: number
    user_id: number
    event_id: number
    status?: string
    joined_at?: Date | string
  }

  export type ParticipantsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutParticipantsNestedInput
    event?: EventsUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsCreateManyInput = {
    id?: number
    user_id: number
    event_id: number
    status?: string
    joined_at?: Date | string
  }

  export type ParticipantsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventBannersCreateInput = {
    name: string
    size: number
    path: string
    created_at?: Date | string
    event: EventsCreateNestedOneWithoutEventbannerInput
  }

  export type EventBannersUncheckedCreateInput = {
    id?: number
    event_id: number
    name: string
    size: number
    path: string
    created_at?: Date | string
  }

  export type EventBannersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutEventbannerNestedInput
  }

  export type EventBannersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventBannersCreateManyInput = {
    id?: number
    event_id: number
    name: string
    size: number
    path: string
    created_at?: Date | string
  }

  export type EventBannersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventBannersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type ParticipantsListRelationFilter = {
    every?: ParticipantsWhereInput
    some?: ParticipantsWhereInput
    none?: ParticipantsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type EventBannersListRelationFilter = {
    every?: EventBannersWhereInput
    some?: EventBannersWhereInput
    none?: EventBannersWhereInput
  }

  export type EventBannersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sport_type?: SortOrder
    date_time?: SortOrder
    max_participant?: SortOrder
    city?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    is_private?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    id?: SortOrder
    max_participant?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    user_id?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sport_type?: SortOrder
    date_time?: SortOrder
    max_participant?: SortOrder
    city?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    is_private?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sport_type?: SortOrder
    date_time?: SortOrder
    max_participant?: SortOrder
    city?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    is_private?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    id?: SortOrder
    max_participant?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EventsScalarRelationFilter = {
    is?: EventsWhereInput
    isNot?: EventsWhereInput
  }

  export type ParticipantsUser_idEvent_idCompoundUniqueInput = {
    user_id: number
    event_id: number
  }

  export type ParticipantsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
  }

  export type ParticipantsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type ParticipantsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
  }

  export type ParticipantsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
  }

  export type ParticipantsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type EventBannersCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    path?: SortOrder
    created_at?: SortOrder
  }

  export type EventBannersAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    size?: SortOrder
  }

  export type EventBannersMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    path?: SortOrder
    created_at?: SortOrder
  }

  export type EventBannersMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    path?: SortOrder
    created_at?: SortOrder
  }

  export type EventBannersSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    size?: SortOrder
  }

  export type EventsCreateNestedManyWithoutUserInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type ParticipantsCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantsCreateWithoutUserInput, ParticipantsUncheckedCreateWithoutUserInput> | ParticipantsCreateWithoutUserInput[] | ParticipantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutUserInput | ParticipantsCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantsCreateManyUserInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type ParticipantsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantsCreateWithoutUserInput, ParticipantsUncheckedCreateWithoutUserInput> | ParticipantsCreateWithoutUserInput[] | ParticipantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutUserInput | ParticipantsCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantsCreateManyUserInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventsUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutUserInput | EventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutUserInput | EventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutUserInput | EventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type ParticipantsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantsCreateWithoutUserInput, ParticipantsUncheckedCreateWithoutUserInput> | ParticipantsCreateWithoutUserInput[] | ParticipantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutUserInput | ParticipantsCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutUserInput | ParticipantsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantsCreateManyUserInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutUserInput | ParticipantsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutUserInput | ParticipantsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput> | EventsCreateWithoutUserInput[] | EventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutUserInput | EventsCreateOrConnectWithoutUserInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutUserInput | EventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventsCreateManyUserInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutUserInput | EventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutUserInput | EventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type ParticipantsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantsCreateWithoutUserInput, ParticipantsUncheckedCreateWithoutUserInput> | ParticipantsCreateWithoutUserInput[] | ParticipantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutUserInput | ParticipantsCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutUserInput | ParticipantsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantsCreateManyUserInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutUserInput | ParticipantsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutUserInput | ParticipantsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutEventsInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    connect?: UsersWhereUniqueInput
  }

  export type ParticipantsCreateNestedManyWithoutEventInput = {
    create?: XOR<ParticipantsCreateWithoutEventInput, ParticipantsUncheckedCreateWithoutEventInput> | ParticipantsCreateWithoutEventInput[] | ParticipantsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutEventInput | ParticipantsCreateOrConnectWithoutEventInput[]
    createMany?: ParticipantsCreateManyEventInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type EventBannersCreateNestedManyWithoutEventInput = {
    create?: XOR<EventBannersCreateWithoutEventInput, EventBannersUncheckedCreateWithoutEventInput> | EventBannersCreateWithoutEventInput[] | EventBannersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventBannersCreateOrConnectWithoutEventInput | EventBannersCreateOrConnectWithoutEventInput[]
    createMany?: EventBannersCreateManyEventInputEnvelope
    connect?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
  }

  export type ParticipantsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ParticipantsCreateWithoutEventInput, ParticipantsUncheckedCreateWithoutEventInput> | ParticipantsCreateWithoutEventInput[] | ParticipantsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutEventInput | ParticipantsCreateOrConnectWithoutEventInput[]
    createMany?: ParticipantsCreateManyEventInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type EventBannersUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventBannersCreateWithoutEventInput, EventBannersUncheckedCreateWithoutEventInput> | EventBannersCreateWithoutEventInput[] | EventBannersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventBannersCreateOrConnectWithoutEventInput | EventBannersCreateOrConnectWithoutEventInput[]
    createMany?: EventBannersCreateManyEventInputEnvelope
    connect?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UsersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    upsert?: UsersUpsertWithoutEventsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEventsInput, UsersUpdateWithoutEventsInput>, UsersUncheckedUpdateWithoutEventsInput>
  }

  export type ParticipantsUpdateManyWithoutEventNestedInput = {
    create?: XOR<ParticipantsCreateWithoutEventInput, ParticipantsUncheckedCreateWithoutEventInput> | ParticipantsCreateWithoutEventInput[] | ParticipantsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutEventInput | ParticipantsCreateOrConnectWithoutEventInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutEventInput | ParticipantsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ParticipantsCreateManyEventInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutEventInput | ParticipantsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutEventInput | ParticipantsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type EventBannersUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventBannersCreateWithoutEventInput, EventBannersUncheckedCreateWithoutEventInput> | EventBannersCreateWithoutEventInput[] | EventBannersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventBannersCreateOrConnectWithoutEventInput | EventBannersCreateOrConnectWithoutEventInput[]
    upsert?: EventBannersUpsertWithWhereUniqueWithoutEventInput | EventBannersUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventBannersCreateManyEventInputEnvelope
    set?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    disconnect?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    delete?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    connect?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    update?: EventBannersUpdateWithWhereUniqueWithoutEventInput | EventBannersUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventBannersUpdateManyWithWhereWithoutEventInput | EventBannersUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventBannersScalarWhereInput | EventBannersScalarWhereInput[]
  }

  export type ParticipantsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ParticipantsCreateWithoutEventInput, ParticipantsUncheckedCreateWithoutEventInput> | ParticipantsCreateWithoutEventInput[] | ParticipantsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutEventInput | ParticipantsCreateOrConnectWithoutEventInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutEventInput | ParticipantsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ParticipantsCreateManyEventInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutEventInput | ParticipantsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutEventInput | ParticipantsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type EventBannersUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventBannersCreateWithoutEventInput, EventBannersUncheckedCreateWithoutEventInput> | EventBannersCreateWithoutEventInput[] | EventBannersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventBannersCreateOrConnectWithoutEventInput | EventBannersCreateOrConnectWithoutEventInput[]
    upsert?: EventBannersUpsertWithWhereUniqueWithoutEventInput | EventBannersUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventBannersCreateManyEventInputEnvelope
    set?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    disconnect?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    delete?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    connect?: EventBannersWhereUniqueInput | EventBannersWhereUniqueInput[]
    update?: EventBannersUpdateWithWhereUniqueWithoutEventInput | EventBannersUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventBannersUpdateManyWithWhereWithoutEventInput | EventBannersUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventBannersScalarWhereInput | EventBannersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<UsersCreateWithoutParticipantsInput, UsersUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutParticipantsInput
    connect?: UsersWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<EventsCreateWithoutParticipantsInput, EventsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutParticipantsInput
    connect?: EventsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<UsersCreateWithoutParticipantsInput, UsersUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutParticipantsInput
    upsert?: UsersUpsertWithoutParticipantsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutParticipantsInput, UsersUpdateWithoutParticipantsInput>, UsersUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventsUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<EventsCreateWithoutParticipantsInput, EventsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutParticipantsInput
    upsert?: EventsUpsertWithoutParticipantsInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutParticipantsInput, EventsUpdateWithoutParticipantsInput>, EventsUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventsCreateNestedOneWithoutEventbannerInput = {
    create?: XOR<EventsCreateWithoutEventbannerInput, EventsUncheckedCreateWithoutEventbannerInput>
    connectOrCreate?: EventsCreateOrConnectWithoutEventbannerInput
    connect?: EventsWhereUniqueInput
  }

  export type EventsUpdateOneRequiredWithoutEventbannerNestedInput = {
    create?: XOR<EventsCreateWithoutEventbannerInput, EventsUncheckedCreateWithoutEventbannerInput>
    connectOrCreate?: EventsCreateOrConnectWithoutEventbannerInput
    upsert?: EventsUpsertWithoutEventbannerInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutEventbannerInput, EventsUpdateWithoutEventbannerInput>, EventsUncheckedUpdateWithoutEventbannerInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EventsCreateWithoutUserInput = {
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutEventInput
    eventbanner?: EventBannersCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutEventInput
    eventbanner?: EventBannersUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutUserInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput>
  }

  export type EventsCreateManyUserInputEnvelope = {
    data: EventsCreateManyUserInput | EventsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantsCreateWithoutUserInput = {
    status?: string
    joined_at?: Date | string
    event: EventsCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantsUncheckedCreateWithoutUserInput = {
    id?: number
    event_id: number
    status?: string
    joined_at?: Date | string
  }

  export type ParticipantsCreateOrConnectWithoutUserInput = {
    where: ParticipantsWhereUniqueInput
    create: XOR<ParticipantsCreateWithoutUserInput, ParticipantsUncheckedCreateWithoutUserInput>
  }

  export type ParticipantsCreateManyUserInputEnvelope = {
    data: ParticipantsCreateManyUserInput | ParticipantsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithWhereUniqueWithoutUserInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutUserInput, EventsUncheckedUpdateWithoutUserInput>
    create: XOR<EventsCreateWithoutUserInput, EventsUncheckedCreateWithoutUserInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutUserInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutUserInput, EventsUncheckedUpdateWithoutUserInput>
  }

  export type EventsUpdateManyWithWhereWithoutUserInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutUserInput>
  }

  export type EventsScalarWhereInput = {
    AND?: EventsScalarWhereInput | EventsScalarWhereInput[]
    OR?: EventsScalarWhereInput[]
    NOT?: EventsScalarWhereInput | EventsScalarWhereInput[]
    id?: IntFilter<"Events"> | number
    title?: StringFilter<"Events"> | string
    description?: StringNullableFilter<"Events"> | string | null
    sport_type?: StringFilter<"Events"> | string
    date_time?: DateTimeFilter<"Events"> | Date | string
    max_participant?: IntNullableFilter<"Events"> | number | null
    city?: StringFilter<"Events"> | string
    location_name?: StringNullableFilter<"Events"> | string | null
    latitude?: FloatNullableFilter<"Events"> | number | null
    longitude?: FloatNullableFilter<"Events"> | number | null
    price?: IntNullableFilter<"Events"> | number | null
    is_private?: BoolNullableFilter<"Events"> | boolean | null
    created_at?: DateTimeFilter<"Events"> | Date | string
    updated_at?: DateTimeFilter<"Events"> | Date | string
    user_id?: IntFilter<"Events"> | number
  }

  export type ParticipantsUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipantsWhereUniqueInput
    update: XOR<ParticipantsUpdateWithoutUserInput, ParticipantsUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantsCreateWithoutUserInput, ParticipantsUncheckedCreateWithoutUserInput>
  }

  export type ParticipantsUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipantsWhereUniqueInput
    data: XOR<ParticipantsUpdateWithoutUserInput, ParticipantsUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantsUpdateManyWithWhereWithoutUserInput = {
    where: ParticipantsScalarWhereInput
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyWithoutUserInput>
  }

  export type ParticipantsScalarWhereInput = {
    AND?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
    OR?: ParticipantsScalarWhereInput[]
    NOT?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
    id?: IntFilter<"Participants"> | number
    user_id?: IntFilter<"Participants"> | number
    event_id?: IntFilter<"Participants"> | number
    status?: StringFilter<"Participants"> | string
    joined_at?: DateTimeFilter<"Participants"> | Date | string
  }

  export type UsersCreateWithoutEventsInput = {
    email: string
    first_name?: string | null
    last_name?: string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutEventsInput = {
    id?: number
    email: string
    first_name?: string | null
    last_name?: string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutEventsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
  }

  export type ParticipantsCreateWithoutEventInput = {
    status?: string
    joined_at?: Date | string
    user: UsersCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
    status?: string
    joined_at?: Date | string
  }

  export type ParticipantsCreateOrConnectWithoutEventInput = {
    where: ParticipantsWhereUniqueInput
    create: XOR<ParticipantsCreateWithoutEventInput, ParticipantsUncheckedCreateWithoutEventInput>
  }

  export type ParticipantsCreateManyEventInputEnvelope = {
    data: ParticipantsCreateManyEventInput | ParticipantsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventBannersCreateWithoutEventInput = {
    name: string
    size: number
    path: string
    created_at?: Date | string
  }

  export type EventBannersUncheckedCreateWithoutEventInput = {
    id?: number
    name: string
    size: number
    path: string
    created_at?: Date | string
  }

  export type EventBannersCreateOrConnectWithoutEventInput = {
    where: EventBannersWhereUniqueInput
    create: XOR<EventBannersCreateWithoutEventInput, EventBannersUncheckedCreateWithoutEventInput>
  }

  export type EventBannersCreateManyEventInputEnvelope = {
    data: EventBannersCreateManyEventInput | EventBannersCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutEventsInput = {
    update: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEventsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
  }

  export type UsersUpdateWithoutEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParticipantsUpsertWithWhereUniqueWithoutEventInput = {
    where: ParticipantsWhereUniqueInput
    update: XOR<ParticipantsUpdateWithoutEventInput, ParticipantsUncheckedUpdateWithoutEventInput>
    create: XOR<ParticipantsCreateWithoutEventInput, ParticipantsUncheckedCreateWithoutEventInput>
  }

  export type ParticipantsUpdateWithWhereUniqueWithoutEventInput = {
    where: ParticipantsWhereUniqueInput
    data: XOR<ParticipantsUpdateWithoutEventInput, ParticipantsUncheckedUpdateWithoutEventInput>
  }

  export type ParticipantsUpdateManyWithWhereWithoutEventInput = {
    where: ParticipantsScalarWhereInput
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyWithoutEventInput>
  }

  export type EventBannersUpsertWithWhereUniqueWithoutEventInput = {
    where: EventBannersWhereUniqueInput
    update: XOR<EventBannersUpdateWithoutEventInput, EventBannersUncheckedUpdateWithoutEventInput>
    create: XOR<EventBannersCreateWithoutEventInput, EventBannersUncheckedCreateWithoutEventInput>
  }

  export type EventBannersUpdateWithWhereUniqueWithoutEventInput = {
    where: EventBannersWhereUniqueInput
    data: XOR<EventBannersUpdateWithoutEventInput, EventBannersUncheckedUpdateWithoutEventInput>
  }

  export type EventBannersUpdateManyWithWhereWithoutEventInput = {
    where: EventBannersScalarWhereInput
    data: XOR<EventBannersUpdateManyMutationInput, EventBannersUncheckedUpdateManyWithoutEventInput>
  }

  export type EventBannersScalarWhereInput = {
    AND?: EventBannersScalarWhereInput | EventBannersScalarWhereInput[]
    OR?: EventBannersScalarWhereInput[]
    NOT?: EventBannersScalarWhereInput | EventBannersScalarWhereInput[]
    id?: IntFilter<"EventBanners"> | number
    event_id?: IntFilter<"EventBanners"> | number
    name?: StringFilter<"EventBanners"> | string
    size?: IntFilter<"EventBanners"> | number
    path?: StringFilter<"EventBanners"> | string
    created_at?: DateTimeFilter<"EventBanners"> | Date | string
  }

  export type UsersCreateWithoutParticipantsInput = {
    email: string
    first_name?: string | null
    last_name?: string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    events?: EventsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutParticipantsInput = {
    id?: number
    email: string
    first_name?: string | null
    last_name?: string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutParticipantsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutParticipantsInput, UsersUncheckedCreateWithoutParticipantsInput>
  }

  export type EventsCreateWithoutParticipantsInput = {
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutEventsInput
    eventbanner?: EventBannersCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutParticipantsInput = {
    id?: number
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    eventbanner?: EventBannersUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutParticipantsInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutParticipantsInput, EventsUncheckedCreateWithoutParticipantsInput>
  }

  export type UsersUpsertWithoutParticipantsInput = {
    update: XOR<UsersUpdateWithoutParticipantsInput, UsersUncheckedUpdateWithoutParticipantsInput>
    create: XOR<UsersCreateWithoutParticipantsInput, UsersUncheckedCreateWithoutParticipantsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutParticipantsInput, UsersUncheckedUpdateWithoutParticipantsInput>
  }

  export type UsersUpdateWithoutParticipantsInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventsUpsertWithoutParticipantsInput = {
    update: XOR<EventsUpdateWithoutParticipantsInput, EventsUncheckedUpdateWithoutParticipantsInput>
    create: XOR<EventsCreateWithoutParticipantsInput, EventsUncheckedCreateWithoutParticipantsInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutParticipantsInput, EventsUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventsUpdateWithoutParticipantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutEventsNestedInput
    eventbanner?: EventBannersUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    eventbanner?: EventBannersUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsCreateWithoutEventbannerInput = {
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutEventsInput
    participants?: ParticipantsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutEventbannerInput = {
    id?: number
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    participants?: ParticipantsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutEventbannerInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutEventbannerInput, EventsUncheckedCreateWithoutEventbannerInput>
  }

  export type EventsUpsertWithoutEventbannerInput = {
    update: XOR<EventsUpdateWithoutEventbannerInput, EventsUncheckedUpdateWithoutEventbannerInput>
    create: XOR<EventsCreateWithoutEventbannerInput, EventsUncheckedCreateWithoutEventbannerInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutEventbannerInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutEventbannerInput, EventsUncheckedUpdateWithoutEventbannerInput>
  }

  export type EventsUpdateWithoutEventbannerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutEventsNestedInput
    participants?: ParticipantsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutEventbannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    sport_type: string
    date_time: Date | string
    max_participant?: number | null
    city: string
    location_name?: string | null
    latitude?: number | null
    longitude?: number | null
    price?: number | null
    is_private?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParticipantsCreateManyUserInput = {
    id?: number
    event_id: number
    status?: string
    joined_at?: Date | string
  }

  export type EventsUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutEventNestedInput
    eventbanner?: EventBannersUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutEventNestedInput
    eventbanner?: EventBannersUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport_type?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participant?: NullableIntFieldUpdateOperationsInput | number | null
    city?: StringFieldUpdateOperationsInput | string
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsCreateManyEventInput = {
    id?: number
    user_id: number
    status?: string
    joined_at?: Date | string
  }

  export type EventBannersCreateManyEventInput = {
    id?: number
    name: string
    size: number
    path: string
    created_at?: Date | string
  }

  export type ParticipantsUpdateWithoutEventInput = {
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventBannersUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventBannersUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventBannersUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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