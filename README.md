# 리액트 연습

## 도커 빌드

* `docker build -t kkndo2/react .`
  * `-t` : tag명
  * `.` : 현재 디렉토리에 `Dockerfile`이 있음

## 도커 컨테이너 실행

* `docker run -dt --name practice kkndo2/react`
  * `-d` : 백그라운드 실행
  * `-i` : 표준 입력이 활성화됨. 컨테이너에 명령을 입력할 수 있음.
  * `-t` : TTY 모드를 사용.
  * `--name` : 컨테이너 이름 지정

## 도커 컨테이너 실행 - 공유디렉토리 및 포트포워딩 설정

* `docker run -dt --name practice -v ${PWD}:/app -v /app/node_modules -p 3000:3000 kkndo2/react npm start`
  * `-v ${PWD}:/app` :
    * `${PWD}` : 호스트의 현재디렉토리
    * `/app` : 컨테이너 내부 디렉토리
  * `-v /app/node_modules` : node_modules 디렉토리를 호스트와 공유하지못하도록 볼륨마운트 설정. 
    * 이렇게하면, docker에 이름없는 볼륨이 생성되고, 해당 `이름없는 볼륨`이 `/app/node_modules` 와 마운트되면서, 호스트의 node_modules 디렉토리와 공유되지 않는다.
  * `-p 3000:3000` : 호스트 3000 => 컨테이너 3000 으로 포트포워딩
  * `npm start` : 컨테이너 실행 후 실행될 명령

## 컨테이너 실행 후 tty접속

* `docker exec -it practice /bin/bash`

## 도커 컴포즈 시작

* `docker-compose pu --build`
* <http://localhost:3000/>
* 원하면, `-d` 옵션으로 백그라운드 실행할 수 있음

## 리액트 웹서비스 시작

* `npm start`
* <http://localhost:3000/>
