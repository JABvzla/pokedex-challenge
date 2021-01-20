# POKEDEX

_Prueba Tecnica de Fravega_

[Demo](https://pokedex-challenge-pi.vercel.app/)

## Requisitos

- node >= v14.15.\*
- yarn >= 1.22.10

## Instalación

- git clone https://github.com/JABvzla/pokedex-challenge.git
- cd pokedex-challenge
- yarn

## Proyecto

Estructura de carpetas

```
contants    // valores/configuraciones constantes
types       // types/interfaces globales
components  // componentes organizados utilizando atomic design
pages       // componentes por url
public      // assets y ficheros publicos
styles      // estilos globales
```

### Componentes

La organización de componentes en este proyecto se baso utilizando atomic design, dejando reflejado en los nombre de los ficheros el orden propuesto en la metodologia (atoms, molecules, organisms, templates).

### Pruebas

Las funciones que requieren de servicio externo son testeado comprobando que el servicio responde de forma esperada por la app (test de integración).

- yarn test
`