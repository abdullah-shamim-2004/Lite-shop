# Lite Shop

**Lite Shop** is a modern, responsive e-commerce web application built with **Next.js 13 (App Router)** and **Tailwind CSS**. It allows users to browse products, view product details, and manage their own products (if logged in).

---

## Table of Contents

* [Features](#features)
* [Technologies](#technologies)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Running the Project](#running-the-project)
* [Environment Variables](#environment-variables)
* [Usage](#usage)
* [Future Improvements](#future-improvements)

---

## Features

* Home page with **banner**, **featured products**, **categories**, and **special offers**
* Product listing and **product detail pages**
* Add/Edit/Delete products (for authenticated users)
* Responsive design for mobile, tablet, and desktop
* Simple **loading and error handling** for better UX
* SweetAlert2 notifications for actions

---

## Technologies

* [Next.js 13](https://nextjs.org/) (App Router)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [MongoDB](https://www.mongodb.com/)
* [SweetAlert2](https://sweetalert2.github.io/)
* [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/lite-shop.git
cd lite-shop
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

---

## Running the Project

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file in the root:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## Usage

* Home page displays **banner, featured products, categories, and offers**
* Users can **view product details** by clicking a product
* Authenticated users can **add new products**
* Users can **edit/delete their own products**

---

## Future Improvements

* Add **user authentication** (login/register)
* Add **shopping cart and checkout**
* Add **filtering, search, and pagination** for products
* Implement **image upload** for products
* Add **reviews and ratings** for products

---

**Lite Shop** – A lightweight, modern e-commerce app built with Next.js & Tailwind CSS.

---

*Feel free to contribute, open issues, or suggest improvements!*
