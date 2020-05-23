# Create Token

Endpoint to create a login token that can then be consumed in the future, when the returned token is consumed
Conjury will return the identifier and context back to your so you can log your user in.

Optional context can be passed to assist you in identifying the user once the token is consumed.

### Endpoint
**POST** `https://api.conjury.io/v1/token`

### Properties
| Property  | Type   | Required | Description                                               |
|-----------|--------|----------|-----------------------------------------------------------|
| identifier | string | true     | The identifier for _your_ user, e.g database ID or UUID.   |
| context   | object | false    | Additional context to assist you in identifying the user. |

### Example Data
```json
{
	"identifier": "4f5a00f0-cf7b-47e6-a47a-9d88278cf06f",
	"context": {
		"email": "example@conjury.io"
	}
}
```

### Example Response
```json
{
    "token": "0332a07b8f3c475b8cb122d170257193"
}
```