# Star Wars API demo

## Setup

Se está utilizando un archivo .env para almacenar las variables de la base de datos, ya que no se incluye en el repositorio.
Se debe crear un archivo .env en el directorio raíz en la carpeta local y colocar las siguientes variables:

.env file
```
MYSQL_HOST=string
MYSQL_USER=string
MYSQL_PASSWORD=string
MYSQL_DATABASE=string
MYSQL_PORT=number
```

Comandos para poder ejecutar el api en local:
```
> npm install
> serverless offline
```

## Deploy

El serverless.yml está configurado con un custom profile para la cuenta personal de AWS.
```
...
custom:
  profiles:
    dev: personalAccount
...
provider:
  name: aws
  runtime: nodejs14.x
  region: us-east-1
  stage: ${opt:stage, 'dev'}
  profile: ${self:custom.profiles.${self:provider.stage}}
...
```

Para crear un profile con el nombre personalAccount, se debe ejecutar el siguiente comando:

```
> serverless config credentials --provider aws --key aws_access_key_id --secret aws_secret_access_key --profile personalAccount
```

Una vez configurado el profile correctamente, se hace el despliegue:

```
> serverless deploy 
```
