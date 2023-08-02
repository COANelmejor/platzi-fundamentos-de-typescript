# platzi-fundamentos-de-typescript

Código creado gracias al [Curso de Dundamentos de Typescript](https://platzi.com/cursos/typescript/)

Abajo encontrarás mis notas con respecto a lo aprendido en el curso.

## Typescript como CLI

Usando el siguiente comando se puede compilar a JS archivos `.ts`

```bash
npx tsc [file]
```

Este puede recbir modificadores

### --target

Para especificar a que version de ECMAScript se quiere usr se debe usar el modificador `--target [version]`

```bash
 npx tsc src/01-hello.ts --target es6
```
### --outDir

Si solo se compila, el archivo el resultado (`.js`) se creará en el en el mismo directorio del archivo donde se encuentre el archivo `.ts`

Para evitar eso es comun tener una carpeta dedicada a este proposito. Por lo gener puede llamarse `dist/`

De esta manera los archivops traspilador estarán en dicha carpeta

```bash
npx tsc src/01-hello.ts --target es6 --outDir dist
```

### --init

Existe un archivo muy importante para para proyectos formales. Este es `tsconfig.json`

Con el siguiente comando es posible crearlo automaticamente.

```bash
npx tsc --init
```

Este archivo contiene la configuración de typescript para el proyecto. 

En el se puede especificar la version de ECMAScript a usar, la carpeta donde se guardaran los archivos traspilados, si se quiere que se traspilen todos los archivos `.ts` o solo los que se especifiquen, etc.

### --watch

Para evitar estar compilando manualomente cada vez que se haga un cambio en un archivo `.ts` se puede usar el modificador `--watch`

Esto hará que cada vez que se guarde un archivo `.ts` se compile automaticamente.

```bash
npx tsc --watch
```
