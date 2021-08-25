**Each instruction creates one layer:**

[Best Practices for DockerFile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

- `FROM` creates a layer from the ubuntu:18.04 Docker image.
- `COPY` adds files from your Docker client’s current directory.
- `RUN` builds your application with make.
- `CMD` specifies what command to run within the container.

[Using Docker-compose](https://docs.docker.com/get-started/08_using_compose/)
