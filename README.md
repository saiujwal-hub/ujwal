# FocusFlow - Task Tracker

A modern, intuitive task management application designed to help you stay organized and boost your productivity. FocusFlow provides a clean interface for managing daily tasks with advanced filtering, priority management, and progress tracking features.

![FocusFlow](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Live Demo

- **Production URL**: https://firstweb.qzz.io/

## ✨ Features

- **Task Management**: Add, edit, and delete tasks with ease
- **Priority Levels**: Organize tasks by priority (Low, Medium, High)
- **Smart Filtering**: View tasks by category (All, Today, Important, Completed)
- **Sorting Options**: Sort tasks by newest, priority, or alphabetically
- **Weekly Progress**: Visual progress ring showing task completion rate
- **Real-time Statistics**: Track total, pending, and completed tasks
- **Responsive Design**: Fully responsive interface that works on all devices
- **Local Storage**: Tasks persist in browser local storage
- **Modern UI**: Clean, professional interface with smooth animations

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure JavaScript for optimal performance
- **Google Fonts**: Inter font family for typography
- **SVG Icons**: Custom SVG icons for lightweight implementation

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build process or dependencies required

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. Navigate to the project directory:
```bash
cd your-repo-name/html/todo-app
```

3. Open `index.html` in your web browser:
```bash
# Simply double-click index.html or use a local server
npx serve .
# or
python -m http.server 8000
```

## 🎯 Usage

### Adding a Task
1. Type your task in the input field
2. Select the priority level (Low, Medium, High)
3. Click "Add Task" or press Enter

### Managing Tasks
- **Edit**: Click the edit icon on any task to modify its text or priority
- **Delete**: Click the delete icon to remove a task
- **Complete**: Click the checkbox to mark a task as completed

### Filtering Tasks
- **All Tasks**: View all your tasks
- **Today**: Filter tasks created today
- **Important**: View high-priority tasks
- **Completed**: Show only completed tasks

### Sorting Tasks
- **Newest First**: Most recently created tasks appear first
- **Priority**: Tasks sorted by priority (High → Medium → Low)
- **A-Z**: Tasks sorted alphabetically

## 📁 Project Structure

```
todo-app/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── app.js              # Application logic and interactivity
├── .gitignore          # Git ignore configuration
├── netlify.toml        # Netlify deployment configuration (legacy)
└── README.md           # Project documentation
```

## 🎨 Key Components

### Sidebar
- Navigation menu with task filters
- Weekly progress visualization
- Task count badges

### Main Content Area
- Header with current date and statistics
- Task input section with priority selection
- Sortable task list with filtering options
- Empty state for new users

### Modal
- Edit task functionality
- Priority modification
- Cancel/Save actions

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
}
```

### Modifying Default Priority
Change the selected option in `index.html`:
```html
<select id="priority-select">
    <option value="low">Low Priority</option>
    <option value="high" selected>High Priority</option>
    <option value="medium">Medium Priority</option>
</select>
```

## 🚢 Deployment

### Vercel Deployment
The project is currently deployed on Vercel. To deploy your own version:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Manual Deployment
Since this is a static site, you can deploy to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

Simply upload the files and configure the index.html as the entry point.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

- The application uses Local Storage for data persistence
- All data is stored locally in the user's browser
- No backend or database required
- Responsive breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)

## 🐛 Known Issues

No known issues at this time. Please report any bugs via the issue tracker.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Project Link: [https://github.com/yourusername/your-repo-name](https://github.com/yourusername/your-repo-name)

## 🙏 Acknowledgments

- Google Fonts for the Inter typeface
- SVG icon design inspiration from modern UI libraries
- Built with modern web standards and best practices

## 📞 Support

For support, email support@example.com or open an issue in the repository.

---

**Note**: This is a client-side only application. All data is stored in your browser's local storage and is not transmitted to any server.

Made by Sai Ujwal
