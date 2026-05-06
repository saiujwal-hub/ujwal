// Task Manager Application
class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentFilter = 'all';
        this.currentSort = 'newest';
        this.editingId = null;
        
        this.init();
    }
    
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.updateDate();
        this.render();
        
        // Update date every minute
        setInterval(() => this.updateDate(), 60000);
    }
    
    cacheDOM() {
        // Inputs
        this.taskInput = document.getElementById('task-input');
        this.prioritySelect = document.getElementById('priority-select');
        this.addBtn = document.getElementById('add-btn');
        
        // Lists
        this.taskList = document.getElementById('task-list');
        this.emptyState = document.getElementById('empty-state');
        
        // Navigation
        this.navItems = document.querySelectorAll('.nav-item');
        
        // Filters
        this.filterBtns = document.querySelectorAll('.filter-btn');
        
        // Stats
        this.allCount = document.getElementById('all-count');
        this.todayCount = document.getElementById('today-count');
        this.importantCount = document.getElementById('important-count');
        this.completedCount = document.getElementById('completed-count');
        this.totalTasks = document.getElementById('total-tasks');
        this.pendingTasks = document.getElementById('pending-tasks');
        this.doneTasks = document.getElementById('done-tasks');
        
        // Progress
        this.progressCircle = document.getElementById('progress-circle');
        this.progressPercent = document.getElementById('progress-percent');
        this.progressMessage = document.getElementById('progress-message');
        
        // Modal
        this.editModal = document.getElementById('edit-modal');
        this.editInput = document.getElementById('edit-input');
        this.editPriority = document.getElementById('edit-priority');
        this.saveEditBtn = document.getElementById('save-edit');
        this.cancelEditBtn = document.getElementById('cancel-edit');
        
        // Page title
        this.pageTitle = document.getElementById('page-title');
    }
    
    bindEvents() {
        // Add task
        this.addBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
        
        // Navigation
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                this.navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                this.currentFilter = item.dataset.filter;
                this.updatePageTitle();
                this.render();
            });
        });
        
        // Sort filters
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterBtns.forEach(f => f.classList.remove('active'));
                btn.classList.add('active');
                this.currentSort = btn.dataset.sort;
                this.render();
            });
        });
        
        // Modal
        this.cancelEditBtn.addEventListener('click', () => this.closeModal());
        this.saveEditBtn.addEventListener('click', () => this.saveEdit());
        this.editModal.addEventListener('click', (e) => {
            if (e.target === this.editModal) this.closeModal();
        });
        this.editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.saveEdit();
        });
    }
    
    updateDate() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').textContent = date.toLocaleDateString('en-US', options);
    }
    
    updatePageTitle() {
        const titles = {
            all: 'All Tasks',
            today: "Today's Tasks",
            important: 'Important Tasks',
            completed: 'Completed Tasks'
        };
        this.pageTitle.textContent = titles[this.currentFilter] || 'All Tasks';
    }
    
    addTask() {
        const text = this.taskInput.value.trim();
        if (!text) return;
        
        const task = {
            id: Date.now(),
            text: text,
            priority: this.prioritySelect.value,
            completed: false,
            createdAt: new Date().toISOString(),
            isImportant: false
        };
        
        this.tasks.unshift(task);
        this.saveTasks();
        this.render();
        
        // Clear input
        this.taskInput.value = '';
        this.prioritySelect.value = 'medium';
        
        // Animation feedback
        this.showNotification('Task added successfully!');
    }
    
    toggleComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
            
            if (task.completed) {
                this.showNotification('Task completed! Great job!');
            }
        }
    }
    
    toggleImportant(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isImportant = !task.isImportant;
            this.saveTasks();
            this.render();
        }
    }
    
    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.saveTasks();
        this.render();
        this.showNotification('Task deleted');
    }
    
    openEditModal(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            this.editingId = id;
            this.editInput.value = task.text;
            this.editPriority.value = task.priority;
            this.editModal.classList.add('show');
            this.editInput.focus();
        }
    }
    
    closeModal() {
        this.editModal.classList.remove('show');
        this.editingId = null;
    }
    
    saveEdit() {
        const text = this.editInput.value.trim();
        if (!text || !this.editingId) return;
        
        const task = this.tasks.find(t => t.id === this.editingId);
        if (task) {
            task.text = text;
            task.priority = this.editPriority.value;
            this.saveTasks();
            this.render();
            this.closeModal();
            this.showNotification('Task updated!');
        }
    }
    
    getFilteredTasks() {
        let filtered = [...this.tasks];
        
        switch (this.currentFilter) {
            case 'today':
                const today = new Date().toDateString();
                filtered = filtered.filter(t => new Date(t.createdAt).toDateString() === today);
                break;
            case 'important':
                filtered = filtered.filter(t => t.isImportant);
                break;
            case 'completed':
                filtered = filtered.filter(t => t.completed);
                break;
            default:
                // all tasks
                break;
        }
        
        // Sort
        switch (this.currentSort) {
            case 'priority':
                const priorityOrder = { high: 0, medium: 1, low: 2 };
                filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
                break;
            case 'alphabetical':
                filtered.sort((a, b) => a.text.localeCompare(b.text));
                break;
            case 'newest':
            default:
                filtered.sort((a, b) => b.id - a.id);
                break;
        }
        
        return filtered;
    }
    
    updateStats() {
        const today = new Date().toDateString();
        
        this.allCount.textContent = this.tasks.length;
        this.todayCount.textContent = this.tasks.filter(t => 
            new Date(t.createdAt).toDateString() === today
        ).length;
        this.importantCount.textContent = this.tasks.filter(t => t.isImportant).length;
        this.completedCount.textContent = this.tasks.filter(t => t.completed).length;
        
        this.totalTasks.textContent = this.tasks.length;
        this.pendingTasks.textContent = this.tasks.filter(t => !t.completed).length;
        this.doneTasks.textContent = this.tasks.filter(t => t.completed).length;
    }
    
    updateProgress() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        
        // Update progress ring
        const circumference = 2 * Math.PI * 45; // r=45
        const offset = circumference - (percent / 100) * circumference;
        this.progressCircle.style.strokeDashoffset = offset;
        this.progressPercent.textContent = `${percent}%`;
        
        // Update message
        const messages = [
            { threshold: 0, message: "Start your day!" },
            { threshold: 25, message: "Good start!" },
            { threshold: 50, message: "Halfway there!" },
            { threshold: 75, message: "Almost done!" },
            { threshold: 100, message: "All done! Great work!" }
        ];
        
        const msg = messages.reverse().find(m => percent >= m.threshold);
        this.progressMessage.textContent = msg ? msg.message : "Keep going!";
    }
    
    render() {
        const filtered = this.getFilteredTasks();
        
        // Show/hide empty state
        if (filtered.length === 0) {
            this.taskList.innerHTML = '';
            this.emptyState.classList.add('show');
        } else {
            this.emptyState.classList.remove('show');
            this.taskList.innerHTML = filtered.map(task => this.createTaskHTML(task)).join('');
            
            // Bind task events
            filtered.forEach(task => {
                const el = document.querySelector(`[data-id="${task.id}"]`);
                if (el) {
                    el.querySelector('.task-checkbox').addEventListener('click', 
                        () => this.toggleComplete(task.id));
                    el.querySelector('.task-btn.edit').addEventListener('click', 
                        () => this.openEditModal(task.id));
                    el.querySelector('.task-btn.star').addEventListener('click', 
                        () => this.toggleImportant(task.id));
                    el.querySelector('.task-btn.delete').addEventListener('click', 
                        () => this.deleteTask(task.id));
                }
            });
        }
        
        this.updateStats();
        this.updateProgress();
    }
    
    createTaskHTML(task) {
        const date = new Date(task.createdAt);
        const dateStr = date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
        
        return `
            <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <div class="task-checkbox ${task.completed ? 'checked' : ''}">
                    ${task.completed ? `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    ` : ''}
                </div>
                <div class="task-content">
                    <div class="task-text">${this.escapeHtml(task.text)}</div>
                    <div class="task-meta">
                        <span class="priority-badge ${task.priority}">${task.priority}</span>
                        <span class="task-date">${dateStr}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="task-btn star ${task.isImportant ? 'active' : ''}" title="Mark important">
                        <svg viewBox="0 0 24 24" fill="${task.isImportant ? 'currentColor' : 'none'}" 
                             stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    </button>
                    <button class="task-btn edit" title="Edit">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                    </button>
                    <button class="task-btn delete" title="Delete">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                    </button>
                </div>
            </li>
        `;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    showNotification(message) {
        // Create notification element
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: var(--success);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            animation: slideUp 0.3s ease;
            box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.4);
        `;
        notif.textContent = message;
        
        // Add animation style if not exists
        if (!document.getElementById('notif-style')) {
            const style = document.createElement('style');
            style.id = 'notif-style';
            style.textContent = `
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.style.animation = 'slideUp 0.3s ease reverse';
            setTimeout(() => notif.remove(), 300);
        }, 2500);
    }
}

// Initialize SVG gradient
document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('.progress-ring svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#6366f1"/>
            <stop offset="100%" style="stop-color:#10b981"/>
        </linearGradient>
    `;
    svg.prepend(defs);
    
    // Initialize app
    new TaskManager();
});
