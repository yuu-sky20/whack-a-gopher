
### first cloned, do it.
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

### /pages
- index.tsx
    - Title Scene
- result.tsx
    - Result Scene
- main.tsx
    - Main Game Scene