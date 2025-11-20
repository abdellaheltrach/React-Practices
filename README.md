# React Todo Application

A modern, feature-rich Todo List application built with React, TypeScript, and Tailwind CSS.

🔗 **Live Demo:** [https://todoappelt.netlify.app/](https://todoappelt.netlify.app/)

## Features

*   **Task Management**: Add, edit, delete, and mark tasks as completed.
*   **Filtering**: Filter tasks by All, Completed, or Pending status.
*   **Persistence**: Tasks are saved to local storage, so you don't lose them on refresh.
*   **Smooth Animations**: Powered by **Framer Motion** for a premium feel.
*   **Notifications**: Real-time toast notifications for user actions (Add, Update, Delete).
*   **Safety**: Confirmation dialog prevents accidental task deletion.
*   **Responsive Design**: Fully responsive layout using **Tailwind CSS**.

## Tech Stack

*   **Framework**: React 19
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS, Material UI (Icons)
*   **Animations**: Framer Motion
*   **Notifications**: React Hot Toast

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## Project Structure

*   `src/components`: Reusable UI components (ConfirmDialog, etc.)
*   `src/types.ts`: Shared TypeScript interfaces
*   `src/App.tsx`: Main application logic
*   `src/RenderTaskList.tsx`: Task list rendering with animations
*   `src/UpdateTask.tsx`: Modal for editing tasks
