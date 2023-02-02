
## First cloned, do it.
```
docker-compose run -w /app --rm app yarn install
```

## Dev app
```
docker-compose up -d
```
- And open localhost:8000.

## Stop app
```
docker-compose down
```

---

## Page layout
- index.tsx
    - Title Scene
- game/result.tsx
    - Result Scene
- game/main.tsx
    - Main Game Scene


# Architecture
### This application made in reference to the Onin Architecture.