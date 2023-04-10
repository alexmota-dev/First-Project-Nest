<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</p>

## Description
The [Nest](https://github.com/nestjs/nest) framework is being used in this application.

## Installation
```bash
$ npm install
```
# unning the app
## Development
```bash
$ npm run start $
```

## Watch mode
```bash 
$ npm run start:dev $
```

## Production mode
```bash 
$ npm run start:prod $
```

## Ao usar o useGlobalPipe() é necessario instalar duas libs:
```bash 
$ npm i class-validator class-transformer
```

## Para reaproveitar um CreateGenericDto em um UpdateGenericDto é necessario instalar a lib:
```bash 
$ npm i @nestjs/mapped-types
```

## Para para conexão com o BD é necessario a instalação do typeOrm e do pg
```bash 
$ npm i typeorm @nestjs/typeorm pg
```

## Criar migrations com TypeORM
### 0.2* TypeORM
```bash
$ typeorm migration:create -n CourseRefactoring
```
### 0.3* TypeORM
```bash
$ typeorm migration:create -n src/CourseRefactoring
```
#### Atualmente a propriedade -n não é mais usada.