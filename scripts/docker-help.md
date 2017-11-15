# cmds


## Start

### Create a new image

```bash
sudo docker build -t <name>-image .
```

### Run the image in a new container

```bash
sudo docker run --restart unless-stopped --name <container-name> -d -p 8080:80 <image-to-run>
```

## Handling


### list images

```bash
sudo docker images
```

### list containers

```bash
sudo docker container ls -a
```

### exec cmd in running container

```bash
sudo docker exec <container-name> COMMAND [OPTIONS]
```
