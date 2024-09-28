## About
This project is about creating a COVID-19 data visualization dashboard using NextUI in next.js. The dashboard display various charts and statistics using COVID data to analyse various aspects like total cases, deaths, recoveries and new cases.

## Steps to run project

1. Download the repository manually or open a empty folder in your terminal or command prompt and run ```git clone https://github.com/Abhishekkumar200/COVID-19-Data-Visualization-Dashboard-in-NextUI.git```. This will download the repository in current open folder.
2. Open the downloaded folder in VS Code or any other editor. And run the command ```npm install``` in your editor terminal, it will install the node modules and other dependencies.
3. Now, type ```npm run dev```  to run the project.
4. Go to `http://localhost:3000` to see running project.
5. If components does not respond, please refresh the page.

## Important folders

### 1. components
This folder includes all components that are required in this project. It includes various folders and files. They are:-

**I. charts** - It include all chart component files.

**II. icons** - It include moon and sun icon files for theme switcher.

**III. table** - It include table component file.

**IV.** **DashboardCard.js**, **NavComp.js**, **Sidebar.js**, **SidebarComp.js** and **ThemeSwitcher.js**  these corresponding files includes cards for dashboard, Navbar, Sidebar, elements of sidebar and theme switcher.

### 2. data
This folder includes 1 file **data.js**, which contains dummy COVID-19 data for the visualization.

### 3. src\app

This folder include all routes folders, layout.js, Providers.js for theme switching, page.js for home page etc.

**I. charts** - This route folder navigates to show various charts including line chart, bar chart and date range picker.

**II. statistics** - This route folder navigates to show data table.

## Snapshots

### 1. Home page

![image](https://github.com/user-attachments/assets/23f87f2d-25c9-4000-82c8-09c29dd31053)

### 2. Statistics page

![image](https://github.com/user-attachments/assets/10b4621e-ec24-4632-b97e-6c05b1a01080)

### 3. Charts page

![image](https://github.com/user-attachments/assets/39ed1b1b-3ceb-45c3-ab6a-d8b626140f3c)

