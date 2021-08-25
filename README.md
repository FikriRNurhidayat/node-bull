# Node.js with Bull

Express.js with Bull as worker.

## How to run with Docker

Docker is a great tools. I'm too lazy to write.

#### Requirements

- `docker-compose`
- `docker`

You need to use `docker-compose`

```bash
docker-compose up
```

## How to run with Node.js

Node.js is also great tools. I'm too lazy to write.

#### Requirements

- `nodejs`
- `postgresql`
- `redis`

Install everything:

```bash
yarn
```

Run development server:

```bash
yarn develop # To run development server
```

Run production server:

```bash
yarn start
yarn start:worker
```

## Testing

Hit this endpoint to place order:

```bash
curl -X POST -H 'Content-Type: application/json' \
  --data '{"amount": 1000}' \
  'http://localhost:8000/orders'
```

Then, checkout the order:

```bash
curl -X PUT -H 'Content-Type: application/json' \
  --data '{"amount": 1000}' \
  'http://localhost:8000/orders/:id/checkout'
```

If you want to see your order being updated into expired, wait for 5 second, otherwise hit this endpoint:

```bash
curl -X PUT -H 'Content-Type: application/json' \
  --data '{"amount": 1000}' \
  'http://localhost:8000/orders/:id/pay'
```

#### Does it fault tolerant?

Yes. Try to kill `worker` container, then rerun, it will handle all of the job that is hanged.
