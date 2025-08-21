# 📝 Todo App

A modern, responsive Todo application built with vanilla JavaScript, HTML, and CSS. This application helps you stay organized and manage your tasks efficiently with a beautiful user interface and powerful features.

![Todo App Screenshot](https://github.com/user-attachments/assets/65281062-8226-40e5-a56d-3aba751c7305)

## ✨ Features

- **📅 Interactive Calendar**: Navigate through months and view your tasks by date
- **🌙 Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **🔍 Search Functionality**: Quickly find tasks by searching through their titles
- **📊 Task Statistics**: Real-time tracking of completed and pending tasks
- **✏️ Edit Tasks**: Modify task titles and descriptions after creation
- **✅ Mark as Complete**: Mark tasks as completed with smooth animations
- **🗑️ Delete Tasks**: Remove unwanted tasks from your list
- **💾 Local Storage**: Your tasks persist even after closing the browser
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean and intuitive interface with smooth animations

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/5mokshith/todo-app.git
   cd todo-app
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Start using the app**
   - Navigate to `http://localhost:8000` (if using a local server)
   - Or just double-click `index.html` to open directly in your browser

##  How to Use

### Adding Tasks
1. Enter a title for your task in the "Type Title here.." field
2. Add a description in the "Description of the task" field
3. Click the "+" button or press Enter to add the task

### Managing Tasks
- **Complete a task**: Click the checkmark icon on any task card
- **Edit a task**: Click the edit icon to modify title and description
- **Delete a task**: Click the delete icon to remove the task
- **Search tasks**: Use the search bar to find specific tasks

### Calendar Navigation
- Use the left/right arrow buttons to navigate between months
- Click on any date to view tasks for that specific day
- The current date is highlighted in the calendar

### Theme Switching
- Click the "Dark Mode" button to toggle between light and dark themes
- Your theme preference is saved and will persist across sessions

##  Project Structure

```
Todo/
├── css/
│   ├── animations.css      # CSS animations and transitions
│   ├── calender.css        # Calendar component styles
│   ├── main-style.css      # Main application styles
│   └── media-queries.css   # Responsive design styles
├── images/
│   ├── todo.png           # Todo app logo (PNG)
│   └── todo.svg           # Todo app logo (SVG)
├── javascript/
│   ├── calender.js        # Calendar functionality
│   └── main.js           # Main application logic
├── index.html            # Main HTML file
└── README.md            # Project documentation
```

##  Key Features Explained

### Local Storage
The app uses browser's localStorage to persist your tasks and preferences, so you won't lose your data when you close the browser.

### Responsive Design
The application is fully responsive and works great on all device sizes, from mobile phones to desktop computers.

### Task Management
- **Add**: Create new tasks with titles and descriptions
- **Edit**: Modify existing tasks without losing their creation date
- **Complete**: Mark tasks as done with a satisfying animation
- **Delete**: Remove tasks you no longer need
- **Search**: Find specific tasks quickly using the search functionality

### Calendar Integration
The interactive calendar allows you to:
- Navigate between months
- View the current date
- Plan tasks for specific dates
- Track your productivity over time

##  Customization

The app is built with vanilla technologies, making it easy to customize:

- **Colors**: Modify CSS variables in `main-style.css`
- **Animations**: Adjust timing and effects in `animations.css`
- **Layout**: Customize the responsive breakpoints in `media-queries.css`
- **Functionality**: Extend features by modifying the JavaScript files

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Author

**Mokshith**
- GitHub: [@5mokshith](https://github.com/5mokshith)

##  Acknowledgments

- Google Fonts for the beautiful typography
- Material Symbols for the icon set
- The open-source community for inspiration and resources

---

**Happy Task Management! 🎉**

*Built with ❤️ using HTML, CSS, and JavaScript*
