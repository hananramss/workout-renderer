# Workout Renderer 🏃‍♂️

This project is a React + TailwindCSS component that renders a structured running workout from a JSON input. It is built using **Next.js 15**, with modular components and utility-first styling.

## 📦 Tech Stack

- **Next.js 15 (App Router)**
- **React 18**
- **Tailwind CSS**
- **Google Fonts – Poppins**

---

## 🧠 Approach

### 1. **Project Structure**
- `app/`: Contains main layout and page routing.
- `components/`: Reusable UI components like `Segment`, `Block`, etc.
- `data/`: Includes the `workout.json` file that simulates backend workout data.

### 2. **Data Interpretation**
- Parsed and rendered each workout segment (Warmup, Main Set, Cool Down).
- Handled nested `blocks` including repeated intervals using recursion-like component logic.
- Made use of `render`, `intensity`, and `note` properties to present clear visual guidance.

### 3. **Styling and UI**
- Used **TailwindCSS** for rapid, consistent styling.
- Segments are visually grouped with padding, background color, and shadows.
- Integrated an icon (`Lightbulb`) for tips or notes under each block.

### 4. **Typography**
- Integrated **Poppins** font using Next.js' font loading system for modern, readable text.

### 5. **Responsiveness & Accessibility**
- Layout is fully responsive using Tailwind’s utility classes.
- Semantic HTML and accessible markup used where possible.

---

## 📝 Usage

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/workout-renderer.git
   cd workout-renderer
2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
