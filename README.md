# DoIt — To-Do List App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A clean, responsive to-do list app built with vanilla HTML, CSS, and JavaScript. It helps users plan daily tasks, track progress, and clear completed items without any framework or build setup.

## Table of contents

- [What the project does](#what-the-project-does)
- [Why the project is useful](#why-the-project-is-useful)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Support and documentation](#support-and-documentation)
- [Maintainers and contributions](#maintainers-and-contributions)

## What the project does

DoIt is a simple task management interface designed for everyday planning. Users can:

- add a new task from the input field
- mark tasks as complete with a circular checkbox control
- delete individual tasks
- clear all completed tasks in one click
- view live counts for total tasks and completed tasks

The app is intentionally lightweight and easy to run locally, making it a good project for beginners learning front-end development.

## Why the project is useful

This project is useful for anyone who wants a quick and focused task tracker without a heavy dependency stack.

### Key features

- lightweight static app with no package installation required
- responsive layout that works on desktop and smaller screens
- immediate feedback through live task counters and empty-state UI
- simple, readable code structure for easy learning and extension

### Benefits

- reduces friction for daily planning
- helps track progress visually
- serves as a clear example of vanilla JavaScript DOM manipulation
- easy to customize for personal or academic projects

## Project structure

The repository is intentionally small and easy to navigate:

- [index.html](index.html) — app markup and task list container
- [style.css](style.css) — layout, color scheme, and responsive styling
- [script.js](script.js) — task creation, filtering, and status updates
- [README.md](README.md) — project overview and usage information

## Getting started

### Prerequisites

- a modern web browser
- a local web server is optional but recommended for smoother local testing

### Option 1: Open directly in a browser

1. Open [index.html](index.html) in your browser.
2. Enter a task in the input field.
3. Click Add Task to create your first item.

### Option 2: Run a local web server

From the project folder:

```bash
cd ElevateLabs_Day2
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This method is useful when you want a browser environment closer to how the app would be served in a real deployment.

## Usage

A typical workflow looks like this:

```text
1. Type a task name into the input box
2. Press Add Task
3. Click the circular button to mark a task complete
4. Click Delete to remove a task you no longer need
5. Click Clear completed to remove all finished tasks
```

### Example interaction

```javascript
// App behavior is handled in script.js.
// Tasks are dynamically added to the DOM on form submission.
// Each task receives complete and delete actions.
```

The current implementation is a client-side app, so all behavior happens in the browser without a backend or database.

## Support and documentation

### Helpful project references

- [index.html](index.html)
- [style.css](style.css)
- [script.js](script.js)

### Getting help

If you are new to the project or need help understanding the app:

- review the source files above for the actual behavior and styling
- open an issue in the repository if the project is hosted on GitHub
- ask a maintainer or teammate for guidance on extending the app

For a larger project, it is a good idea to add a dedicated documentation folder or a contribution guide later, but this repository is intentionally minimal and focused on learning and quick iteration.

## Maintainers and contributions

This project is a small front-end learning app and is best maintained by the repository owner and contributors working on the codebase.

### Contribution approach

Contributions are welcome when they improve clarity, usability, or functionality. A good contribution flow is:

1. fork or clone the repository
2. create a feature branch for your changes
3. keep edits focused and aligned with the existing app structure
4. test the app in a browser after making changes
5. submit a pull request with a clear description of what changed

### Suggested improvement ideas

- add localStorage support so tasks persist after refresh
- add task editing support
- implement filters such as active and completed views
- add keyboard shortcuts and improved validation

## Summary

DoIt is a simple, beginner-friendly to-do app that demonstrates modern front-end fundamentals in a compact codebase. It is ideal for learning DOM interactions, event handling, and responsive UI design without the overhead of a framework.
