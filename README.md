# State Mania

State Mania is a React application that explores and compares various state management solutions, including Redux, Jotai, Recoil, and Zustand. This project serves as a learning resource for understanding different state management libraries and their implementation in a real-world application.

## Features

- Compare state management libraries:
  - Redux
  - Jotai
  - Recoil
  - Zustand
- Profiling with React Profiler

## Getting Started

Follow these steps to run the State Mania project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/state-mania.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd state-mania
   ```

3. **Install dependencies:**

   ```bash
   pnpm install
   ```

*Notes, I use [pnpm](https://pnpm.io/) as my package manager. You can use npm or yarn if you prefer.*

## Using React Profiler for Performance Comparison

To compare the rendering performance of components in the "State Mania" project, you can utilize React Profiler, a built-in tool for profiling React applications. React Profiler helps you identify performance bottlenecks and optimize your application's rendering process.

Follow these steps to use React Profiler for performance comparison:

1. **Start the Development Server:**

   Ensure that you have the project's development server running. You can start it by running:

   ```bash
   pnpm run dev
   ```

2. **Open Your Application in the Browser:**

   Open your web browser and navigate to `http://localhost:5173/` (or the URL where your development server is running).

3. **Open React DevTools:**

   - **Chrome**: Right-click on the page, select "Inspect," and navigate to the "React" tab.
   - **Firefox**: Right-click on the page, select "Inspect Element," and go to the "React" tab.

4. **Enable React Profiler:**

   In React DevTools, click on the "Profiler" tab to open React Profiler. 

5. **Start Profiling:**

   Then click the "Record" button to enable profiling.

6. **Interact with Your Application:**

   Interact with different sections of your "State Mania" application to trigger rendering and state updates. For example, you can click buttons, add posts, or perform any actions that cause components to re-render.

7. **Stop Profiling:**

   Click the "Stop" button in the React Profiler to stop recording performance data.

8. **Analyze the Results:**

   - You can see a timeline of component renders, updates, and interactions in the React Profiler.
   - Pay attention to how different components in your application behave during rendering.

9. **Compare Different State Management Libraries:**

   - Repeat the profiling process for each section of your application that uses a different state management library (Redux, Zustand, Jotai, Recoil, and Context).
   - Compare the rendering performance, update frequencies, and any optimization opportunities between the sections.

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/): A set of tools for efficient Redux development.
- [Jotai](https://github.com/pmndrs/jotai): A primitive and flexible state management library.
- [Recoil](https://recoiljs.org/): An experimental state management library for React.
- [Zustand](https://github.com/pmndrs/zustand): A small, fast, and simple state management library.

