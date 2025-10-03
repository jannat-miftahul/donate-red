# DonateRed - Blood Donation Platform

A modern, responsive blood donation platform built with HTML, CSS, JavaScript, Tailwind CSS, and DaisyUI.

## Features

-   🩸 Blood donation management system
-   📊 Interactive dashboard
-   👥 Donor and recipient management
-   🌙 Dark mode support
-   📱 Fully responsive design
-   ✨ Modern UI with animations
-   🔐 User authentication system

## Installation

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Setup

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd donate-red
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Build the CSS**

    ```bash
    # For development (with watch mode)
    npm run build-css

    # For production (minified)
    npm run build
    ```

4. **Open the application**
    - Open `index.html` in your browser
    - Or use a local server like Live Server in VS Code

## Project Structure

```
donate-red/
├── index.html
├── dashboard.html
├── login.html
├── register.html
├── styles/       # CSS files (Tailwind + custom)
├── scripts/      # JavaScript files
└── images/       # Image assets
```

## Development

### Available Scripts

-   `npm run build-css` - Build CSS with watch mode for development
-   `npm run build` - Build minified CSS for production

### Customization

The project uses Tailwind CSS with DaisyUI components. You can customize:

-   **Colors**: Edit the `colors` section in `tailwind.config.js`
-   **Fonts**: Modify the `fontFamily` section
-   **Animations**: Add custom animations in the `keyframes` section
-   **Themes**: Configure DaisyUI themes in the `daisyui` section

## Technologies Used

-   **HTML5** - Semantic markup
-   **CSS3** - Styling and animations
-   **JavaScript** - Interactive functionality
-   **Tailwind CSS** - Utility-first CSS framework
-   **DaisyUI** - Component library for Tailwind
-   **Font Awesome** - Icons
-   **Google Fonts** - Typography

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
