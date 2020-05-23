# Create Token

Endpoint to consume a given token, will return all user data passed when originally creating the token.

### Endpoint
**POST** `https://api.conjury.io/v1/token/{your_token}`

### Example Response
```json
{
	"identifier": "4f5a00f0-cf7b-47e6-a47a-9d88278cf06f",
	"context": {
		"email": "example@conjury.io"
	}
}
```