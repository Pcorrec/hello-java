FROM openjdk:26-ea-17-jdk-slim
COPY HelloWorld.java .
RUN javac HelloWorld.java
CMD [ "java", "HelloWorld" ]