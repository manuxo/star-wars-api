# Star Wars API Demo - Guía de uso

## Variables de entorno

Se está utilizando un archivo .env para almacenar las variables de entorno con la conexión a RDS - MySQL, ya que no se incluye en el repositorio.
Se debe crear un archivo .env en el directorio raíz y colocar las siguientes variables:

```
MYSQL_HOST=string
MYSQL_USER=string
MYSQL_PASSWORD=string
MYSQL_DATABASE=string
MYSQL_PORT=number
```

## Ejecución en localhost

```
> npm install
> serverless offline
```

## Documentación con OpenAPI

Para visualizar y probar la documentación de Open API v3, ejecutar ```> serverless offline ``` y abrir en el navegador web el index.html que está ubicado en el directorio ```/dist```

## Despliegue

El serverless.yml está configurado con un custom profile para la cuenta personal de AWS.
```
custom:
  profiles:
    dev: personalAccount

provider:
  name: aws
  runtime: nodejs14.x
  region: us-east-1
  stage: ${opt:stage, 'dev'}
  profile: ${self:custom.profiles.${self:provider.stage}}

```

Para crear un profile con el nombre personalAccount, se debe ejecutar el siguiente comando:

```
> serverless config credentials --provider aws --key aws_access_key_id --secret aws_secret_access_key --profile personalAccount
```

Una vez configurado el profile correctamente, se hace el despliegue:

```
> serverless deploy --stage dev 
```

## Base de datos

En el directorio ```src/database/ddl.sql``` se encuentra un script para la creación de tablas en la base de datos mysql.

```sql
CREATE TABLE `people` (
  `nombre` VARCHAR(64) NOT NULL,
  `estatura` INT NULL,
  `peso` INT NULL,
  `color_cabello` VARCHAR(32) NULL,
  `color_ojos` VARCHAR(32) NULL,
  `genero` VARCHAR(16) NULL,
  `anio_nacimiento` VARCHAR(16) NULL
);
```
