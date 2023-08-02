# platzi-fundamentos-de-typescript

Código creado gracias al [Curso de Dundamentos de Typescript](https://platzi.com/cursos/typescript/)

## Notas

### Typescript como CLI

Usando el siguiente comando se puede compilar a JS archivos `.ts`

```bash
npx tsc [file]
```

Este puede recbir modificadores

#### --target

Para especificar a que version de ECMAScript se quiere usr se debe usar el modificador `--target [version]`

```bash
 npx tsc src/01-hello.ts --target es6
```
#### --outDir

Si solo se compila, el archivo el resultado (`.js`) se creará en el en el mismo directorio del archivo donde se encuentre el archivo `.ts`

Para evitar eso es comun tener una carpeta dedicada a este proposito. Por lo gener puede llamarse `dist/`

De esta maner los archivops traspilador estarán en dicha carpeta

```bash
npx tsc src/01-hello.ts --target es6 --outDir dist
```
