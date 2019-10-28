## Aplicación de comandos 

Para instalar esta aplicación debemos instalar todos los paquetes necesarios usando el siguiente comando

```
npm install
```

### Comandos

#### Crear Nota
Con el siguiente comando se crean registros

```
node app crear -d "<nota>"
```

#### Listar Notas
Para listar todos los registros

```
node app listar
```

Para listar todas las notas completadas

```
node app listar -m true
```

Para listar todas las notas que falta por completar

```
node app listar -m false
```

#### Actualizar estado de la nota
Con el siguiente comando se actualiza el estado del registro. Es decir, se ha completado o no

Actualiza el estado del registro a completado

```
node app actualizar -d "<tarea> -c"
```

o

```
node app actualizar -d "<tarea>" -c true
```

Actualiza el estado del registro a sin completar

```
node app actualizar -d "<tarea>" -c false
```

#### Borrar Registro
Con el siguiente comando se eliminan registros

```
node app borrar -d "<tarea>"
```