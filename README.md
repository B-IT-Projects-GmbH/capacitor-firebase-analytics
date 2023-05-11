# capacitor-firebase-analytics

Capacitor plugin for Firebase Analytics

## Install

```bash
npm install capacitor-firebase-analytics
npx cap sync
```

## API

<docgen-index>

* [`analyticsInit(...)`](#analyticsinit)
* [`analyticsLogEvent(...)`](#analyticslogevent)
* [`analyticsSetUserProperties(...)`](#analyticssetuserproperties)
* [`analyticsSetUserIdentifier(...)`](#analyticssetuseridentifier)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### analyticsInit(...)

```typescript
analyticsInit(options: FirebaseConfig) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#firebaseconfig">FirebaseConfig</a></code> |

--------------------


### analyticsLogEvent(...)

```typescript
analyticsLogEvent(options: { name: string; params?: { [key: string]: any; } | undefined; }) => Promise<void>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ name: string; params?: { [key: string]: any; }; }</code> |

--------------------


### analyticsSetUserProperties(...)

```typescript
analyticsSetUserProperties(options: { properties: { [key: string]: any; }; }) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ properties: { [key: string]: any; }; }</code> |

--------------------


### analyticsSetUserIdentifier(...)

```typescript
analyticsSetUserIdentifier(options: { userId: string; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ userId: string; }</code> |

--------------------


### Interfaces


#### FirebaseConfig

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`apiKey`**            | <code>string</code> |
| **`authDomain`**        | <code>string</code> |
| **`databaseURL`**       | <code>string</code> |
| **`projectId`**         | <code>string</code> |
| **`storageBucket`**     | <code>string</code> |
| **`messagingSenderId`** | <code>string</code> |
| **`appId`**             | <code>string</code> |
| **`measurementId`**     | <code>string</code> |

</docgen-api>
