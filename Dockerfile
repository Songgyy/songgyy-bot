FROM debian:latest
MAINTAINER Gabriel Petry

ARG node_version=12

RUN apt-get update && apt-get upgrade -y && apt-get -y install curl
RUN apt-get install -y \
	make \
	build-essential \
	gcc \
	unzip \
	libtool \
	python \
	ffmpeg

RUN curl -o- \
		https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

COPY ./package.json ./package-lock.json /app/
COPY ./src/ /app/src/
WORKDIR /app

RUN /bin/bash -c "export NVM_DIR=\"$HOME/.nvm\" && \
	echo \"Home is $HOME\" && \
	source \"$HOME/.nvm/nvm.sh\" && \
	nvm install $node_version && \
	nvm use $node_version && \
	npm install"

# CMD [ "source /root/.nvm/nvm.sh && nvm use 12 && npm run start" ]
CMD [ "bash", "-c", "source /root/.nvm/nvm.sh && nvm use 12 && npm run start" ]
