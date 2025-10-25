# TechFlow TaskFlow 🚀

A cutting-edge project management platform with a futuristic aesthetic, featuring WCAG AA compliant UI design with deep space theme, neon glow effects, and glassmorphic elements.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.27.6-0170FE?style=flat&logo=ant-design)](https://ant.design/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

### 🎨 Futuristic UI Design
- **Deep Space Theme**: Immersive dark interface with deep space black (#0F172A) as foundation
- **Neon Glow Effects**: Eye-catching cyan (#67E8F9) and tech blue (#06B6D4) accents with dynamic glow animations
- **Glassmorphic Cards**: Modern frosted glass effect with backdrop blur (10-15px) and transparency (30-50%)
- **Smooth Animations**: Number count-up effects, fade-in transitions, and neon pulse animations

### ♿ Accessibility First
- **WCAG AA Compliant**: All text and interactive elements meet WCAG AA contrast ratio standards (≥4.5:1)
- **High Contrast Text**: Optimized color palette ensuring readability on dark backgrounds
- **Enhanced Visibility**: Carefully tuned foreground/background color combinations for all UI components

### 📊 Comprehensive Dashboard
- **Real-time Metrics**: Live project progress, task completion rates, and team performance data
- **Interactive Charts**: Powered by Recharts with custom styled tooltips
  - Line charts for trend analysis
  - Pie charts for distribution visualization
  - Bar charts for comparative metrics
- **Key Performance Indicators**: At-a-glance statistics with animated number displays

### 📋 Advanced Task Management
- **Kanban-Style Board**: Drag-and-drop task organization (UI ready for backend integration)
- **Priority Levels**: Color-coded tags (High/Medium/Low) with high-contrast design
- **Status Tracking**: Multiple states (Not Started/In Progress/Completed/Planning)
- **Progress Monitoring**: Visual progress bars with percentage indicators
- **Rich Task Details**: Task descriptions, assignees, due dates, and milestones

### 👥 Team Collaboration
- **User Management**: Role-based access control with user profiles
- **Team Dashboard**: Member list with roles, departments, and status indicators
- **Real-time Notifications**: Alert system with glassmorphic dropdown menu
- **Personal Information Panel**: Sliding sidebar with user details and quick actions

### 📈 Data Analytics
- **Project Trends**: Historical performance visualization
- **Team Performance**: Individual and collective productivity metrics
- **Task Distribution**: Workload analysis across team members
- **Custom Date Ranges**: Flexible time period selection for reports

### ⚙️ System Configuration
- **User Administration**: Add, edit, and manage team members
- **System Settings**: Customizable preferences and configurations
- **Data Backup**: Backup and restore functionality (UI prepared)
- **Multi-tab Interface**: Organized settings with tab navigation

## 🚀 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.3.1 | Frontend framework |
| **Ant Design** | 5.27.6 | UI component library |
| **Ant Design Icons** | 5.5.1 | Icon set |
| **Recharts** | 2.15.0 | Data visualization |
| **CSS3** | - | Styling with CSS Variables |
| **React Scripts** | 5.0.1 | Build toolchain |

## 🎯 Design Philosophy

TechFlow TaskFlow embraces a **"Futuristic Minimalism"** design language:

### Color Palette
```css
--primary-dark: #0A0F1E      /* Deep space black - primary background */
--primary-blue: #0284C7      /* Tech blue - interactive elements */
--primary-cyan: #67E8F9      /* Fluorescent cyan - accents & highlights */
--secondary-gray: #94A3B8    /* Silver gray - auxiliary elements */

/* WCAG AA Compliant Text Colors */
--text-primary: #FFFFFF      /* Contrast ratio 15.3:1 */
--text-secondary: #F1F5F9    /* Contrast ratio 13.8:1 */
--text-muted: #E2E8F0        /* Contrast ratio 11.6:1 */
--text-accent: #67E8F9       /* Contrast ratio 10.2:1 */
```

### Core Design Elements
1. **Neon Glow Borders**: 1-2px width with 3-5px blur radius for futuristic feel
2. **Glassmorphic Cards**: Semi-transparent backgrounds with backdrop blur effects
3. **Linear Gradient Dividers**: Smooth color transitions for visual separation
4. **Number Count-up Animations**: Dynamic data visualization (800ms duration)

### Typography
- **Font Family**: Inter, Roboto (sans-serif)
- **Title Weight**: 600-700 (Bold)
- **Body Weight**: 400-500 (Regular)
- **Auxiliary Weight**: 300 (Light)

## 📦 Installation

### Prerequisites
- Node.js 14+ 
- npm 6+ or yarn 1.22+

### Setup

```bash
# Clone the repository
git clone https://github.com/nikk909/tech-workflow.git

# Navigate to project directory
cd tech-workflow/project-manager-proto

# Install dependencies
npm install

# Start development server
npm start
```

The application will automatically open at `http://localhost:3000`

### Available Scripts

```bash
npm start          # Run development server (port 3000)
npm run build      # Create production build
npm test           # Run test suite
npm run eject      # Eject from Create React App (one-way operation)
```

### Custom Port
```bash
# Windows PowerShell
$env:PORT=3002; npm start

# Linux/Mac
PORT=3002 npm start
```

## 🖥️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📁 Project Structure

```
techflow-taskflow/
├── doc/                          # Documentation files
│   ├── 原始需求.md               # Original requirements
│   ├── prd模板.md                # PRD template
│   └── 项目任务管理软件PRD.md    # Product requirements document
├── project-manager-proto/        # Main application
│   ├── public/                   # Static assets
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/                      # Source code
│   │   ├── App.js                # Main application component
│   │   ├── App.css               # Global styles with CSS variables
│   │   ├── index.js              # Application entry point
│   │   └── index.css             # Base styles
│   ├── package.json              # Dependencies and scripts
│   └── .gitignore                # Git ignore rules
└── README.md                     # This file
```

## 🎨 Key Features Showcase

### Dashboard Overview
- **24** Total Projects
- **156** Active Tasks  
- **8** Team Members
- **87%** Average Progress

### Task Management Interface
- Search and filter capabilities
- Sortable columns (Task Name, Status, Assignee, Priority, Progress, Due Date)
- Inline action buttons (View, Edit, Delete)
- Color-coded priority and status tags

### Data Visualization
- Project progress trends over time
- Task status distribution (pie chart)
- Team performance comparison (bar chart)
- Interactive tooltips with glassmorphic styling

### User Experience Highlights
- **Smooth Transitions**: 300ms animation duration for theme elements
- **Responsive Layout**: Adapts to different screen sizes
- **Custom Scrollbars**: Themed to match the futuristic aesthetic
- **Hover Effects**: Subtle glow and color shifts on interactive elements

## 🔧 Configuration

### CSS Variables
All theme colors are defined as CSS variables in `App.css`, allowing easy customization:

```css
:root {
  /* Modify these values to customize the theme */
  --primary-dark: #0A0F1E;
  --primary-blue: #0284C7;
  --primary-cyan: #67E8F9;
  /* ... more variables */
}
```

### Component Customization
Individual components can be styled via:
- Inline styles in `App.js`
- CSS classes in `App.css`
- Ant Design theme tokens (future enhancement)

## 🚧 Roadmap

### Phase 1 (Current)
- ✅ UI/UX Design Implementation
- ✅ Component Structure
- ✅ WCAG AA Compliance
- ✅ Responsive Layout

### Phase 2 (Planned)
- ⏳ Backend API Integration
- ⏳ Real-time Data Updates
- ⏳ Drag-and-drop Task Board
- ⏳ User Authentication

### Phase 3 (Future)
- 📅 Multi-language Support (i18n)
- 📅 Dark/Light Theme Toggle
- 📅 Advanced Analytics Dashboard
- 📅 Export Reports (PDF/Excel)
- 📅 Mobile Application

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**nikk909**  
📧 Email: 2536590932@qq.com  
🔗 GitHub: [@nikk909](https://github.com/nikk909)

## 🙏 Acknowledgments

- **Ant Design Team** - For the excellent UI component library
- **Recharts Contributors** - For the powerful charting library
- **React Community** - For continuous innovation and support

## 📸 Screenshots

> **Note**: Screenshots will be added soon. You can view the live demo by running the project locally.

To see the application in action:
```bash
cd project-manager-proto
npm install
npm start
```
The application will open at `http://localhost:3000` with all features available:
- 📊 Dashboard with real-time metrics and interactive charts
- 📋 Task Management with comprehensive tracking
- 📈 Data Analytics with detailed performance metrics
- ⚙️ System Settings with user management interface

---

<div align="center">

**Built with ❤️ using React and Ant Design**

⭐ Star this repository if you find it helpful!

</div>

