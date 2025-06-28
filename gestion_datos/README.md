# Data Management

Interactive web application for inventory management using modern web technologies. This tool allows users to register, edit, delete, and display products, with visual validation through SweetAlert2.

---

## Description

This project is a practical CRUD (Create, Read, Update, Delete) solution using HTML5, CSS3, and modern JavaScript, integrating libraries like SweetAlert2 for a more user-friendly experience. It is designed to be responsive and easy to maintain, ideal for practice or educational environments.

---

## Features

- Product registration with validation  
- Real-time deletion and editing  
- Friendly visual alerts with SweetAlert2  
- Responsive design (mobile, tablet, desktop)  
- In-memory data storage simulating a database  
- Modular organization (HTML, CSS, JS)  
- Developed using Vite for fast development  

---

## Repository Structure

```plaintext
gestion_datos/
│
├── index.html                 # Main HTML structure
├── package.json               # Project configuration and dependencies
├── package-lock.json
├── .gitignore
│
├── public/
│   └── vite.svg               # Static example image
│
├── src/
│   ├── css/
│   │   └── style.css          # Responsive general styles
│   └── js/
│       └── gestion_datos.js   # CRUD logic and DOM interaction
│
└── node_modules/              # Installed dependencies (ignore)


---

## ¿Cómo iniciar el proyecto?

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/gestion_datos.git
   cd gestion_datos
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development environment with Vite**:

   ```bash
   npm run dev
   ```

4. **Open in your browser**:

   Accede a `http://localhost:5173/` o el puerto indicado.

---


## Resources Used

| Resource / Library | Description                              |
| ------------------ | ---------------------------------------- |
| Vite               | Fast development bundler                 |
| SweetAlert2        | Stylish alerts for better UX interaction |
| HTML5/CSS3         | Base languages for the interface         |
| JavaScript (ES6+)  | CRUD logic and DOM manipulation          |
| Flexbox/Grid       | Responsive and adaptive design layout    |

---

## Data Structures Table

| Structure   | Main Usage                                |
| ----------- | ----------------------------------------- |
| Object      | Storing product information               |
| Array       | In-memory list of products                |
| Functions   | Modularization of actions (create, read…) |
| DOM         | Real-time interface manipulation          |
| SweetAlert2 | Visual validation and user notifications  |

---
## Author and Contact

**Samuel Arena**  
Desarrollador Frontend Jr. | Estudiante de Desarrollo de Software  
- samyarena2005@gmail.com 
- https://github.com/s4mue3l2005 

---

## License

Este proyecto se encuentra bajo la licencia **MIT**.
