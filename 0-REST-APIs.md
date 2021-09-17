## The RESTful APIs between front-end and backend services.
NOTE: each of the APIs will return the unique error response format if some errors ocurred:
```
{
  "apiVersion": "v1",
  "error": {
    "code": "<number of error cord>",
    "message": "<The brief description about the error>",
    "errors": [
      {
        "message": "<The array of each error details>",
        ...
      },
      ...
    ]
  }
}
```
NOTE: assume that the user(customer) has been authenticated while accessing the following APIs, each of the request containes the `Authorization` header, like:
```
Authorization: Bearer xxxxxx
```

### `GET /mall/api/v1/shopping_items`
  Get all of the shopping items.
* Response body:
```
{
  "apiVersion": "v1",
  "data": [
    {
      "itemId": "<The item id>",
      "itemName": "<The item name>",
      "itemDesc": "<The item description>",
      "amount": "<The item amount>"
    },
    ...
  ]
}
```

### `POST /mall/api/v1/shopping_items`
  Create a new shopping item.
* Request body:
```
{
  "itemName": "<The item name>",
  "itemDesc": "<The item description>",
  "amount": "<The item amount>"
}
```
* Response body:
```
{
  "apiVersion": "v1",
  "data": {
    "itemId": "<The item id>",
    "itemName": "<The item name>",
    "itemDesc": "<The item description>",
    "amount": "<The item amount>"
  }
}
```

### `PUT /mall/api/v1/shopping_items/:itemId`
  Update the shopping item by itemId.
* Request body:
```
{
  "itemId": "<The item id>",
  "itemName": "<The item name>",
  "itemDesc": "<The item description>",
  "amount": "<The item amount>"
}
```
* Response body:
```
{
  "apiVersion": "v1",
  "data": {
    "itemId": "<The item id>",
    "itemName": "<The item name>",
    "itemDesc": "<The item description>",
    "amount": "<The item amount>"
  }
}
```

### `DELETE /mall/api/v1/shopping_items/:itemId`
  Delete the shopping item by itemId.
* None Request body:
* None Response body:
