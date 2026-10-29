#!/bin/bash
set -e
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y docker.io docker-compose-v2
systemctl enable --now docker
usermod -aG docker ubuntu
mkdir -p /home/ubuntu/app
chown ubuntu:ubuntu /home/ubuntu/app