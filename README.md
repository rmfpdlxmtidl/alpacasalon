# ๐ฆ ์ํ์นด ์ด๋กฑ (Alpaca Salon) Frontend

์ํ์นด๊ฐ ๋ชจ์ฌ ๊ณต๊ฐํด์ฃผ๊ณ  ์ฆ๊ฒ๊ฒ ์๊ธฐํ๋ ๊ณต๊ฐ

## Introduction

### Why

### What

### How

https://alpacasalon.vercel.app ์ ๋ค์ด์ค์ธ์~

(gif ๋๋ ์ด๋ฏธ์ง ์ฒจ๋ถ)

## Requires

- macOS 11.5
- [Git](https://git-scm.com/downloads) 2.32
- [Node](https://nodejs.org/ko/download/) 16 Alpine
- [Yarn](https://yarnpkg.com/getting-started/install#about-global-installs) berry
- [Visual Studio Code](https://code.visualstudio.com/Download) 1.61
- Chrome 94.0, Safari 14.0, Whale 2.9, Firefox 87.0

```bash
$ git --version
$ node --version
$ yarn --version
$ code --version
```

์ ๋ช๋ น์ด๋ฅผ ํตํด ํ๋ก์ ํธ์ ํ์ํ ๋ชจ๋  ํ๋ก๊ทธ๋จ์ด ์ค์น๋์ด ์๋์ง ํ์ธํฉ๋๋ค.

## Project structure

![images/architecture.webp](images/architecture.webp)

## Quick start

### Download codes

```shell
$ git clone https://github.com/rmfpdlxmtidl/alpacasalon.git
$ cd alpacasalon
$ git checkout main
$ yarn
```

ํ๋ก์ ํธ๋ฅผ ๋ค์ด๋ก๋ ๋ฐ๊ณ  ํด๋น ํด๋๋ก ์ด๋ํ ํ ์ ์ ํ ๋ธ๋์น(`main` ๋ฑ)๋ก ์ด๋ํ๊ณ  ํ๋ก์ ํธ์ ํ์ํ ์ธ๋ถ ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.

๊ทธ๋ฆฌ๊ณ  ํ๋ก์ ํธ ํด๋์์ VSCode๋ฅผ ์คํํ๋ฉด ์ค๋ฅธ์ชฝ ์๋์ '๊ถ์ฅ ํ์ฅ ํ๋ก๊ทธ๋จ ์ค์น' ์๋ฆผ์ด ๋จ๋๋ฐ, ํ๋ก์ ํธ์์ ๊ถ์ฅํ๋ ํ์ฅ ํ๋ก๊ทธ๋จ(ESLint, Prettier ๋ฑ)์ ๋ชจ๋ ์ค์นํฉ๋๋ค.

### Create environment variables

```
NEXT_PUBLIC_BACKEND_URL=

NEXT_PUBLIC_GOOGLE_ANALITICS_ID=

NEXT_PUBLIC_KAKAO_REST_API_KEY=
NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY=
```

ํ๋ก์ ํธ ๋ฃจํธ ๊ฒฝ๋ก์ `.env.development`๊ณผ `.env.production` ํ์ผ์ ์์ฑํ๊ณ  ๊ฑฐ๊ธฐ์ ํ๋ก์ ํธ์ ํ์ํ ํ๊ฒฝ ๋ณ์๋ฅผ ์ค์ ํฉ๋๋ค.

> [Next.js ํ๊ฒฝ ๋ณ์ (nextjs.org)](https://nextjs.org/docs/basic-features/environment-variables)

### Start Node.js server

```shell
$ yarn dev
```

ํ์ผ ๋ณ๊ฒฝ ์ฌํญ์ด ๋ฐ๋ก ๋ฐ์๋๋ Next.js ์น ์๋ฒ๋ฅผ ์คํํฉ๋๋ค.

or

```shell
$ yarn build && yarn start
```

TypeScript ํ์ผ์ JavaScript๋ก ํธ๋์คํ์ผ ๋ฐ ์ต์ ํํ ํ Next.js ์น ์๋ฒ๋ฅผ ์คํํฉ๋๋ค.

### Browser

```
http://localhost:3000
```

๋ธ๋ผ์ฐ์ ์์ ์๋ ์ฃผ์๋ก ์ ์ํ๋ฉด ๊ฐ๋ฐ ์ค์ธ ์ฌ์ดํธ๋ฅผ ๋ณผ ์ ์์ต๋๋ค.

## Errors

### (Windows) PowerShell ๋ณด์ ์ค๋ฅ

```shell
$ Set-ExecutionPolicy Unrestricted
```

PowerShell์ ๊ด๋ฆฌ์ ๊ถํ์ผ๋ก ์ด์ด์ ๋ณด์ ์ ์ฑ์ ์์ ๊ฐ์ด ์์ ํด์ค๋๋ค.

> https://velog.io/@gwak2837/powershell-yarn-๋ณด์-์ค๋ฅ

## Scripts

#### `pre-push`

```shell
$ yarn pre-push
```

์ฝ๋ ํฌ๋งท, ๋ฆฐํธ, TypeScript ํ์ ๊ฒ์ฌ๋ฅผ ์ ๋ถ ์ํํฉ๋๋ค. ํ์ฌ ์ด ๋ช๋ น์ด๋ ์๊ฒฉ ์ ์ฅ์๋ก push ํ๊ธฐ ์ ์ husky๊ฐ ์๋์ผ๋ก ์คํํด์ฃผ๊ณ , ๋ฌธ์ ๊ฐ ์๋ ๊ฒฝ์ฐ์๋ง ์ปค๋ฐ์ ์๊ฒฉ ์ ์ฅ์๋ก pushํฉ๋๋ค.

#### `generate`

```shell
$ yarn generate
```

์๋ฒ๋ก๋ถํฐ GraphQL Schema๋ฅผ ๋ฐ์์ ์ด์ ํด๋นํ๋ TypeScript ์๋ฃํ๊ณผ apollo hook ๋ฑ์ ์๋์ผ๋ก ์์ฑํด์ค๋๋ค. ์๋ฒ๋ ๋ก์ปฌ์ GraphQL Schema๊ฐ ๋ณ๊ฒฝ๋์ ๋๋ง๋ค ์คํํฉ๋๋ค.

#### `build`

```shell
$ yarn build
```

๊ฒฐ๊ณผ๋ฌผ์ ์น ์๋ฒ๊ฐ ํฌํจ๋๋๋ก ๋์ ์ผ๋ก ๋น๋ํฉ๋๋ค. ์ด ๊ฒฝ์ฐ ๊ฒฐ๊ณผ๋ฌผ์ ์น ์๋ฒ ๋ก์ง, JSON, HTML, CSS, JS ๋ฑ์ด ํฌํจ๋ฉ๋๋ค.

```
# https://github.com/integrations/slack#subscribing-and-unsubscribing
/github subscribe rmfpdlxmtidl/alpacasalon commits:* reviews comments
/github unsubscribe rmfpdlxmtidl/alpacasalon deployments
```
