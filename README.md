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





## SEPTIMA SUBIDA

### Paso 1: Crear el archivo Procfile.

- Incluir la siguiente línea:

web: node ./bin/www

____________________________________________________________________________________________________


### Paso 2: Modificar el archivo package.json.

- Incluir:

"engines": {
    "node": "0.10.x",
    "npm": "1.4.x"
  },

____________________________________________________________________________________________________


### Paso 3: Guardar proyecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "Añadir Procfile y modificación de package.json"

____________________________________________________________________________________________________


### Paso 4: Publicar el proyecto en GITHUB.




## OCTAVA SUBIDA

### Paso 1: Instalar sequelize y sqlite3

npm install --save sequelize@1.7.0

npm install --save sqlite3@2.2.0

____________________________________________________________________________________________________


### Paso 2: Crear el modelo en el directorio models con las definiciones necesarias

- Fichero models/quiz.js: definición de tabla Quiz de preguntas y respuestas.
- Fichero models/models.js: crea e inicializa la tabla Quiz utilizando sequelize

____________________________________________________________________________________________________


### Paso 3: Modificar quiz_controller.js para que busque la pregunta en la BD

____________________________________________________________________________________________________


### Paso 4: Actualizar .gitignore para que no guarde fichero quiz.sqlite con DB

____________________________________________________________________________________________________


### Paso 5: Guardar versión (commit) con git

git commit -a -m "sequelize.js y SQLite"

____________________________________________________________________________________________________


### Paso 6: Publicar el proyecto en GITHUB.




## NOVENA SUBIDA

### Paso 1: Añadir la base de datos Postgres como un add-on al despliegue en Heroku

heroku addons:create heroku-postgresql:hobby-dev --app quiz-2015-manuperez

____________________________________________________________________________________________________


### Paso 2: Añadir el URL de acceso la DB en la variable de entorno DATABASE_URL

heroku pg:promote HEROKU_POSTGRESQL_GOLD_URL

____________________________________________________________________________________________________


### Paso 3: Pasar la dependencia de SQLite a “devDependencies” (la que haya en "dependencies"). Incluir parámetro a package.json

"devDependencies": {
	"sqlite3": "^3.0.8"
},

____________________________________________________________________________________________________


### Paso 4: Incluir dependencia de base de datos Postgres en package.json

npm install --save pg@4.1.1

__________________________________________________________________________________________________


### Paso 5: Añadir fichero local .env con variables de entorno para Postgres.

DATABASE_URL=postgres://pfghfxymiruzrg:w1k2TUpTLtCBFAMIFPtbrOsN-o@ec2-54-227-249-165.compute-1.amazonaws.com:5432/d9fpg0girk4uil
DATABASE_STORAGE=quiz.sqlite

____________________________________________________________________________________________________


### Paso 6: Adaptar models/models.js para el entorno local (SQLite) y en Heroku (Postgres)

// SQLite:
//var DATABASE_URL = 'sqlite://:@:/';
//var DATABASE_STORAGE='quiz.sqlite';

//var url = DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
//var storage = DATABASE_STORAGE;

// Postgres:
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var storage = process.env.DATABASE_STORAGE;

____________________________________________________________________________________________________


### Paso 7: Prueba de ejecución local con foreman start

OJO! “foreman start” arranca el servidor en el puerto 5000, habrá que probar con URLs: “http://localhost:5000/

____________________________________________________________________________________________________


### Paso 8: Guardar versión en git y desplegar en heroku

git add .
git commit -m “Despliegue DB en Heroku”

git push heroku master -f




## DECIMA SUBIDA

### Paso 1: Adaptar MVC de pregunta y respuesta a colección de recursos

• a: Cambiar en controlador quiz_controller.js: question por show y modificar answer
• b1: Cambiar en index.js: GET /quizes/question por GET /quizes/:quizId
• b1: Cambiar en index.js: GET /quizes/answer por GET /quizes/:quizId/answer
• c: Adaptar vistas cambiando answer.ejs por show.ejs y modificando answer.ejs

____________________________________________________________________________________________________


### Paso 2: Añadir lista de preguntas: GET /quizes

• a: Añadir al controlador quiz_controller.js la acción index asociada a la ruta /quizes
• b: Añadir otra pregunta al inicializar la base de datos en models/models.js
• c: Añadir la ruta /quizes (lista de preguntas) al enrutador routes/index.js
• d: Crear nueva vista con lista de preguntas views/quizes/index.ejs

____________________________________________________________________________________________________


### Paso 3: Modificar layout.ejs para enlazar con la lista de preguntas

____________________________________________________________________________________________________


### Paso 4: Guardar versión (commit) git y subir a Heroku
