# NgDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.
Styled with Angular Material, light/dark mode implemented

## Navbar

The sidebar includes a main menu with support for nested submenus.  
- **Burger toggle (mobile)** — on smaller screens, the sidebar collapses into a burger icon.
• 	Tapping the burger opens or closes the menu.
• 	This ensures the UI remains clean and usable on mobile devices.
Clicking the burger icon toggles between two display modes:  
- **Expanded view (desktop)** — menu items with labels and icons  
- **Compact view (desktop)** — only icons are visible, saving space on the screen



## Dashboard Page

The dashboard allows you to fully manage widgets using the **widgets panel**:  
- **Add widgets** — drag items from the panel list onto the dashboard  
- **Remove widgets** — drag existing widgets back into the panel to delete them  
- **Reorder widgets** — drag and drop widgets to arrange them in the desired order
- **Drag the pannel** - drag the pannel and drop it at the convenient place

## Content

### Forms

#### Inputs
- 	A showcase of all core Angular Material form controls.
- 	Each element is presented with custom styling to demonstrate how design tokens and theming can be applied consistently.
- 	Useful as a reference for building uniform, styled forms across the application.

#### Simple Form Example
- 	A minimal example of a Material form.
- 	Demonstrates how to combine multiple controls into a working form with validation and layout.
- 	Serves as a quick starting point for developers new to Angular Material forms.

#### Form Designer

- 	An interactive tool for building forms visually.
- 	**Left panel** : a palette of available form elements (input, checkbox, datepicker, select).
- 	**Center area** : the form canvas where elements can be dragged and dropped.
- 	Supports adding rows, reordering elements and rows, and deleting items, preview the form
- 	**Right panel**: contextual editor that appears when a form field is selected, allowing property customization.
- 	Export feature: the designed form can be generated as code, making it easy to integrate into projects.


## Grid animation

[Grid Animation Package](https://github.com/aholachek/animate-css-grid)

## Tailwind Integration (Angular 20 + Angular Material 3)

### Option 1 — `ng add tailwindcss`
This command runs the official Angular schematic and performs the setup automatically:
- Installs `tailwindcss`, `postcss`, and required plugins
- Generates `tailwind.config.js`
- Creates or updates `postcss.config.js`
- Adds Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`) into your global styles file (`styles.scss` or `styles.css`)
- Updates `angular.json` to ensure PostCSS and Tailwind are included in the build pipeline

✅ Recommended if you want a quick, automated setup with minimal manual steps **and your Angular version is 21+**.

---

### Option 2 — Manual install **version 20.2**
```bash
npm install tailwindcss @tailwindcss/postcss postcss autoprefixer --force



This only installs the packages.
You must manually:
• 	Create tailwind.config.js
• 	Add postcss.config.js with Tailwind plugin
• 	Insert Tailwind directives into your global styles file
• 	Update angular.json  if needed to ensure PostCSS is applied
⚠️ Use this if you prefer full control or want to customize the setup from scratch.

(docs Tailwind)[https://tailwindcss.com/docs/installation/framework-guides/angular]
(docs Angular)[https://v20.angular.dev/guide/tailwind]