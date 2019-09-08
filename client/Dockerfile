FROM node:lts-alpine

# カレントワーキングディレクトリとして 'app' フォルダを指定する
WORKDIR /app

# カレントワーキングディレクトリ(つまり 'app' フォルダ)にプロジェクトのファイルやフォルダをコピーする
COPY . .

# プロジェクトの依存ライブラリをインストールする
RUN npm install

CMD [ "npm", "run", "serve" ]
