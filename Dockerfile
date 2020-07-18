# 노드
FROM node:12

# 앱 디렉터리
WORKDIR /app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
#COPY . .

#EXPOSE 8080

# 앱 실행
# CMD ["npm", "start"]