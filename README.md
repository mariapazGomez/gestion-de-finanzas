# gestion-de-finanzas
Aplicación Web para el manejo de las finanzas personales

## How to use:

-   Open up command prompt / terminal.
-   Clone this repository.
-   Run  `npm install` to install the dependencies.
-   Inside the `services/` directory remove 'sample' from `firebaseAdminSample.js` and `firebaseClientSample.js`.
-   Modify `firebaseConfig` inside `firebaseAdmin.js` with your own Firebase app keys.
-   Run ```npm run dev``` to run the development server.
-   On your browser go to `http://localhost:3000/`.

## Project structure:
- `Front/`
    - Contiene todos los archivos correspondientes al frontend de la aplicacón.
    - `public/`  Contiene archivos estáticos y públicos del frontend.
    - `src/` Contiene los archivos de código fuente del backend organizados por funcionalidad.
      - `components/`  Contiene los componentes reutilizables del frontend
      - `services/`  Contiene los servicios para comunicarse con el backend u otras operaciones relacionadas con la lógica de negocio del frontend
      - `utils/`  Contiene utilidades y funciones auxiliares del frontend.
      - `assets/` Contiene recursos como imágenes y estilos CSS del frontend.
- `Backend/` 
    - Contiene todos los archivos correspondientes al frontend de la aplicacón.
      - `src/` 
        - `controllers/` Contiene los controladores que manejan las solicitudes y respuestas del backend.
        - `models/` Contiene los modelos de datos que representan las entidades del backend
        - `routes/` Contiene los archivos de definición de rutas del backend.
        - `utils/`  Contiene utilidades y funciones auxiliares del backend.
      -

## Database Structure:
```
Users
  |
  └ User UID
        |
        └ User Data (Email, Name, Password, UID)
        |
        └ TransactionList (TransactionsID)
                |
                └ Transactions Data (Amount, Category, DateString, Description, Type, dateID)
```

