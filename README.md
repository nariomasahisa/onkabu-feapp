```
docker build -t onkabu-feapp:latest .
```

```
docker container run -p 4200:4200 -v ${PWD}:/app --name onkabu-feapp onkabu-feapp:latest;
```