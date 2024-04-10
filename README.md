# node-todo-cicd

sudo apt install nodejs
sudo apt install npm
npm install
node app.js

## ALL COMANDS HISTORY:-
sudo apt update
2.
sudo apt install openjdk-11-jre
3.
java -version
4.
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \ /usr/share/keyrings/jenkins-keyring.asc > /dev/null
5.
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \ https://pkg.jenkins.io/debian binary/ | sudo tee \ /etc/apt/sources.list.d/jenkins.list > /dev/null
6.
sudo apt-get update
7.
sudo apt-get install jenkins
8.
sudo systemctl enable jenkins
9.
sudo systemctl start jenkins
10.
sudo systemctl status jenkins
11.
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
12.
sudo apt install docker.io
13.
FROM node:12.2.0-alpine
14.
WORKDIR app
15.
COPY . .
16.
RUN npm install
17.
EXPOSE 8000
18.
CMD ["node","app.js"]
19.
docker build . -t node-app
20.
sudo usermod -a -G docker $USER
21.
docker run -d --name node-todo-app -p 8000:8000 todo-node-app
22.
Got to jenkins job
23.
Execute shell
24.
docker build . -t node-app-todo
25.
docker run -d --name node-app-container -p 8000:8000 node-app-todo


## Installation of java and Jenkins:
Step - 1 Install Java Update your system sudo apt update Install java sudo apt install openjdk-11-jre Validate Installation java -version It should look something like this openjdk version "11.0.12" 2021-07-20 OpenJDK Runtime Environment (build 11.0.12+7-post-Debian-2) OpenJDK 64-Bit Server VM (build 11.0.12+7-post-Debian-2, mixed mode, sharing) Step - 2 Install Jenkins Just copy these commands and paste them onto your terminal. curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \ /usr/share/keyrings/jenkins-keyring.asc > /dev/null echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \ https://pkg.jenkins.io/debian binary/ | sudo tee \ /etc/apt/sources.list.d/jenkins.list > /dev/null sudo apt-get update sudo apt-get install jenkins Step -3 Start jenkins sudo systemctl enable jenkins sudo systemctl start jenkins sudo systemctl status Jenkins
