# veritone-challenge
Veritone Fullstack Coding Challenge.

## Usage

Clone the project:

```sh
mkdir -p ~/work/challenge & cd ~/work/challenge
git clone https://github.com/YuZhaoping/veritone-challenge.git veritone

```

Build PostgreSQL docker image & run PostgreSQL docker container :

```sh
cd ~/work/challenge/veritone
./dbs/PostgreSQL/docker-cmd/build-image.sh
./dbs/PostgreSQL/docker-cmd/run.sh
```

Run the mall backend service server:

```sh
cd ~/work/challenge/veritone/ms/mall
npm install
npm run dev
```
The web server is listening at `3000` port as default.
<br/>Use `Ctrl+C` to terminate the server.

Run the challenge app front end:

```sh
cd ~/work/challenge/veritone/front-end
npm install
npm run dev
```
The web server is listening at `8080` port as default.
<br/>Use `Ctrl+C` to exit the web server.

## APIs

[RESTful APIs between front-end and backend services](0-REST-APIs.md)

