# 🎬 CineFind

CineFind is a sleek movie discovery app built with React and Appwrite. Users can search for movies, view trending picks, and curate their personal list of favourite films—all in one place.

![CineFind Banner](public/cover.png)

---

## 🚀 Features

- 🔍 Search for movies using TheMovieDB API
- 🔥 View trending movies of the week
- ❤️ Add or remove movies from your favourites list
- 📦 Context-based state management
- ⚡ Fast and responsive UI with TailwindCSS

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS, Vite
- **Backend**: Appwrite (for trending movies and search counts)
- **API**: TMDB (TheMovieDB)
- **State Management**: React Context API

---

## 📦 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/cinefind.git
cd cinefind
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file in the root with the following:

```bash
VITE_API_KEY=your_tmdb_api_key_here
```

### 4. Start the server

```bash
npm run dev
```

## 🧰 Tech Stack

- **React** – Frontend framework

- **Tailwind CSS** – Utility-first CSS for styling
- **TMDb API** – Movie data
- **Appwrite** – For tracking search counts (optional module)
- **LocalStorage** – To persist favourites
- **React Context API** – For global state management

## 📁 Project Structure

📦 cinefind/
├── public/
│ ├── hero-bg.png
│ └── no-movie.png
├── src/
│ ├── components/
│ │ ├── MovieCard.jsx
│ │ ├── Search.jsx
│ │ ├── Navbar.jsx
│ │ └── Favourite.jsx
│ ├── context/
│ │ └── MovieContext.jsx
│ ├── library/
│ │ └── appwrite.js
│ ├── styles/
│ │ ├── App.css
│ │ └── Moviecard.css
│ ├── App.jsx
│ └── main.jsx

## ✅ Future Improvements

- 🔐 User authentication (Google OAuth)
- 🧠 Smart recommendations
- 👆 Click on any movie card to view its summary in a sleek modal popup.

## 🧑‍💻 Author

Built with ❤️ by [Mozammil Tarique](https://github.com/MozammilT)

## 📄 License

This project is open source and available under the MIT License.

### 🛠 Notes for you:

- Replace `"your_tmdb_api_key_here"` with your actual `.env` key instructions.
- Replace `"Your Name"` and GitHub URL.
- You can also add a live demo link if it's hosted.
