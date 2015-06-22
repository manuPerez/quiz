# Repository quiz

Curso Miriadax: Desarrollo de servicios en la nube con HTML5, Javascript y node.js. Repositorio para proyecto quiz.

## PRIMERA SUBIDA

### Paso 1: Instalar express-generator.

- Crear el directorio mis_proyectos

mkdir mis_proyectos

- Dentro del nuevo directorio, instalar el paquete express-generator

cd mis_proyectos
npm install express-generator@4.9.0

____________________________________________________________________________________________________


### Paso 2: Generar el proyecto 'quiz' con el comando express.

- Invocar el comando express con el path a partir del directorio de trabajo (mis_proyectos)

node_modules/express-generator/bin/express --ejs quiz

(NOTA: la opción --ejs hace referencia al renderizador de vistas ejs)

____________________________________________________________________________________________________


### Paso 3: Guardar proyecto quiz en GIT.

- Creamos el proyecto y el repositorio:

- Iniciamos la gestión del proyecto quiz con git

cd quiz
git init

- Identificamos los ficheros que no queremos guardar en .gitignore

node_modules
.DS_Store
npm-debug.log

- Añadimos todo el contenido en directorio al area de cambios

git add .

- Generamos versión identificada como: espress-generator skeleton

git commit -m "esqueleto express-generator"

____________________________________________________________________________________________________


### Paso 4: Publicar el proyecto en GITHUB.

- Crear repositorio vacío 'quiz' en Github

- Desde la consola de Git, asociar el repositorio local 'quiz' con el repositorio de Github.

git remote add origin https://github.com/manuPerez/quiz

- Publicar el proyecto al repositorio de Github.

git push origin master (si éste falla, añadir -f al comando push)



## SEGUNDA SUBIDA

### Paso 1: Modificar ficheros:

/routes/index.js
/views/index.ejs

___________________________________________________________________________________________________


### Paso 2: Quitar ruta /users.

- Borrar archivo /routes/users.js
- Modificar archivo app.js. Quitar referencias a ruta users.

____________________________________________________________________________________________________


### Paso 3: Añadir favicon

____________________________________________________________________________________________________


### Paso 4: Probar aplicación antes de subir

- Crear dependencias

npm install

- Arrancar aplicación

npm start o node bin/www

- Comprobar que la aplicación se despliega correctamente.

http://localhost:3000

____________________________________________________________________________________________________


### Paso 5: Guardar proyecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "Primera subida y favicon"

____________________________________________________________________________________________________


### Paso 6: Publicar el proyecto en GITHUB.

git push origin master (si éste falla, añadir -f al comando push)



## TERCERA SUBIDA

### Paso 1: Crear ficheros:

- Controlador: /controllers/quiz_controllers.js
- Vistas: views/quizes/question.ejs
          views/quizes/answer.ejs

____________________________________________________________________________________________________


### Paso 2: Modificar fichero:

- views/index.ejs: Añadir enlace a vista views/quizes/question.ejs

____________________________________________________________________________________________________


### Paso 3: Probar aplicación antes de subir

____________________________________________________________________________________________________


### Paso 4: Guardar proyecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "Primera pregunta"

____________________________________________________________________________________________________


### Paso 5: Publicar el proyecto en GITHUB.



## CUARTA SUBIDA

### Paso 1: Instalar paquete express-partials.

npm install --save express-partials@0.3.0 (la opción --save hace que se guarde dependencia en el package.json)

____________________________________________________________________________________________________


### Paso 2: Importar e instalar middleware express-partials en app.js

____________________________________________________________________________________________________


### Paso 3: Añadir el marco único views/layout.ejs con las marcas HTML5

____________________________________________________________________________________________________


### Paso 4: Rehacer todas las vistas para renderizar en <section> sólo el código que cambia.

____________________________________________________________________________________________________


### Paso 5: Probar aplicación antes de subir

____________________________________________________________________________________________________


### Paso 6: Guardar poryecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "Vistas parciales y marco"

____________________________________________________________________________________________________


### Paso 7: Publicar el proyecto en GITHUB.



## QUINTA SUBIDA

### Paso 1: Definir 3 estilos CSS a utilizar.

stylesheets/smartphone.css
stylesheets/style.css
stylesheets/wide.css

____________________________________________________________________________________________________


### Paso 2: Modificar el marco views/layout.ejs para que asocie cada estilo en la pantalla asociada.
###         Para ello se utiliza media-queries

____________________________________________________________________________________________________


### Paso 3: Guardar poryecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "CSS´s adaptables a móviles y PC"

____________________________________________________________________________________________________


### Paso 4: Publicar el proyecto en GITHUB.



## SEXTA SUBIDA

### Paso 1: Modificar el marco views/layout.ejs.

- Incluir la opción de menú 'Créditos'.
- Incluir en el footer el enlace al proyecto github.

____________________________________________________________________________________________________


### Paso 2: Modificar el archivo index.js.

- Incluir el routes para la nueva página author.ejs

____________________________________________________________________________________________________


### Paso 3: Incluir la imagen images/author.png

____________________________________________________________________________________________________


### Paso 4: Incluir nueva view views/quizes/author.ejs

____________________________________________________________________________________________________


### Paso 5: Guardar poryecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "Nueva página de créditos y nueva imagen"

____________________________________________________________________________________________________


### Paso 6: Publicar el proyecto en GITHUB.