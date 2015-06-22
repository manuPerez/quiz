## Repository quiz

Curso Miriadax: Desarrollo de servicios en la nube con HTML5, Javascript y node.js. Repositorio para proyecto quiz.

### PRIMERA SUBIDA

# Paso 1: Instalar express-generator.

- Crear el directorio mis_proyectos

mkdir mis_proyectos

- Dentro del nuevo directorio, instalar el paquete express-generator

cd mis_proyectos
npm install express-generator@4.9.0

____________________________________________________________________________________________________


# Paso 2: Generar el proyecto 'quiz' con el comando express.

- Invocar el comando express con el path a partir del directorio de trabajo (mis_proyectos)

node_modules/express-generator/bin/express --ejs quiz

(NOTA: la opción --ejs hace referencia al renderizador de vistas ejs)

____________________________________________________________________________________________________


# Paso 3: Guardar proyecto quiz en GIT.

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

Paso 4: Publicar el proyecto en GITHUB.

- Crear repositorio vacío 'quiz' en Github

- Desde la consola de Git, asociar el repositorio local 'quiz' con el repositorio de Github.

git remote add origin https://github.com/manuPerez/quiz

- Publicar el proyecto al repositorio de Github.

git push origin master (si éste falla, añadir -f al comando push)



### SEGUNDA SUBIDA

# Paso 1: Modificar ficheros:

/routes/index.js
/views/index.ejs

___________________________________________________________________________________________________


# Paso 2: Quitar ruta /users.

- Borrar archivo /routes/users.js
- Modificar archivo app.js. Quitar referencias a ruta users.

____________________________________________________________________________________________________


# Paso 3: Añadir favicon

____________________________________________________________________________________________________


# Paso 4: Probar aplicación antes de subir

- Crear dependencias

npm install

- Arrancar aplicación

npm start o node bin/www

- Comprobar que la aplicación se despliega correctamente.

http://localhost:3000

____________________________________________________________________________________________________


Paso 5: Guardar proyecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "Primera subida y favicon"

____________________________________________________________________________________________________


Paso 6: Publicar el proyecto en GITHUB.

git push origin master (si éste falla, añadir -f al comando push)



### TERCERA SUBIDA

# Paso 1: Crear ficheros:

- Controlador: /controllers/quiz_controllers.js
- Vistas: views/quizes/question.ejs
          views/quizes/answer.ejs

____________________________________________________________________________________________________


# Paso 2: Modificar ficheros:

- views/index.ejs: Añadir enlace a vista views/quizes/question.ejs
- routes/index.js: Importar quiz_controller.js en routes/index.js

____________________________________________________________________________________________________


# Paso 3: Probar aplicación antes de subir.

____________________________________________________________________________________________________


# Paso 4: Guardar proyecto quiz en GIT.

- Añadimos todo el contenido en directorio al area de cambios y generamos versión.

git commit -a -m "Primera pregunta"

____________________________________________________________________________________________________


# Paso 5: Publicar el proyecto en GITHUB.