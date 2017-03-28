# hello-es
Demo app for interacting with an AWS ElasticSearch instance from a local Docker image


## Configuring the app

Edit the `index.js` file:

Add your AWS access key ID, secret access key, and the ElasticSearch endpoint for the host

By default, this image will create an index called 'Test', with 'posts' type, and the body 'Testing upload'

Uncomment the other functions for examples of GET or DELETE


## Build the Docker image

```
docker build -t hello-es .
```


## Run the app

```
docker run hello-es
```
