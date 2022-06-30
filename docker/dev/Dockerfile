FROM node:16.15.1-bullseye-slim

RUN apt update && \
    apt upgrade -y
RUN apt install -y \
      git \
      curl
RUN curl -L https://foundry.paradigm.xyz | bash
RUN /root/.foundry/bin/foundryup
