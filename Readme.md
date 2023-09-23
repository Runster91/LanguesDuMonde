# Proyecto de Visualización de Datos

 

Este proyecto consta de códigos JavaScript y HTML para visualizar datos sobre las lenguas más habladas. Proporciona una tabla y gráficos para una representación visual de la información.

 

## Funcionalidades

 

El proyecto consta de tres partes principales:

 

1. **Tabla de Datos**
   - La función `drawTable()` recupera datos de una API en `./dbjson` y dibuja una tabla en el elemento `tableCanvas`. Muestra las lenguas y el número de hablantes nativos.

 

2. **Gráfico de Barras**
   - La función `drawChart()` recupera datos de la misma API y crea un gráfico de barras en el elemento `myChart`. Muestra el número de hablantes nativos por lengua.

 

3. **Gráfico Circular (Pie Chart)**
   - La función `drawPieChart()` también utiliza datos de la API para crear un gráfico circular en el elemento `myPieChart`. Muestra la distribución de hablantes por origen de la lengua.

 

## Cómo Usar

 

1. Clona o descarga este repositorio en tu máquina local.

 

2. Abre el archivo `index.html` en tu navegador web. Esto cargará la página que muestra la tabla y los gráficos.

 

3. Observa la información en la página y explora la tabla y los gráficos.

 

4. Si deseas modificar los datos o la apariencia, puedes editar los archivos JavaScript o CSS según sea necesario.

 

## Requisitos

 

- Se debe tener una conexión a internet para cargar los datos desde la API en `http://localhost:3000/langues`.

## Personalización

Si deseas personalizar la apariencia de los gráficos o la página web en sí, puedes editar el archivo `style.css` para ajustar los estilos.

## Problemas Conocidos

- Si experimentas problemas de red o de carga de datos desde la API, asegúrate de que el servidor de desarrollo esté en funcionamiento y que la API esté disponible en `./dbjson`.

- Asegúrate de que las dependencias necesarias estén instaladas en tu proyecto si planeas realizar modificaciones importantes.