# Connect 4 Game

![Connect 4](https://img.shields.io/badge/React-v18.2.0-blue) ![Vercel](https://img.shields.io/badge/Deployment-Vercel-brightgreen)

Welcome to the **Connect 4** game, a classic two-player strategy game built with React. This project was bootstrapped with [Create React App](https://create-react-app.dev/) and is deployed on [Vercel](https://react-project-pl2vmkkpp-machages-projects.vercel.app/).

## Features

- **Interactive Gameplay**: A fully functional Connect 4 board where two players can alternate turns.
- **Dynamic Rendering**: React's component-based architecture ensures smooth updates and efficient re-renders.
- **Responsive Design**: The game is fully responsive, providing an optimal experience across devices.
- **Deployment**: Deployed on Vercel for quick and reliable access.

## Live Demo

Check out the live version of the game here: [Connect 4 Game](https://react-project-pl2vmkkpp-machages-projects.vercel.app/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/connect-4.git
    ```
2. Navigate to the project directory:
    ```bash
    cd connect-4
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

The application will start on `http://localhost:3000`.

## Usage

1. Open the game in your browser.
2. Players take turns dropping discs into one of the seven columns.
3. The first player to connect four of their discs vertically, horizontally, or diagonally wins.
4. Reset the game at any time by clicking the "Reset" button.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Create React App**: A boilerplate tool that allows you to set up a React project with no build configuration.
- **JavaScript (ES6+)**: Leveraging modern JavaScript features.
- **CSS3**: For responsive and modern design.
- **Vercel**: For continuous deployment and hosting.

## Architecture

The project follows a component-based architecture, ensuring separation of concerns and reusability.

### Key Components:

- **Board**: Handles the rendering of the Connect 4 grid and manages the game state.
- **Cell**: Represents each individual cell on the board.
- **Game Logic**: Encapsulated within a custom hook, ensuring that the core logic is decoupled from the presentation layer.
- **Status**: Displays the current status of the game (whose turn it is or if someone has won).

### State Management:

- The game state is managed using React's `useState` and `useEffect` hooks.
- The board is represented as a 2D array, and each move updates the state.

## Game Logic

The game logic is encapsulated in a custom React hook, `useConnect4`, which includes:

- **Move Validation**: Ensures that discs are only placed in valid positions.
- **Win Detection**: Checks for four consecutive discs horizontally, vertically, or diagonally.
- **Draw Detection**: Determines if the board is full without any winner.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides a comprehensive technical overview of the Connect 4 project, making it easy for developers to understand the structure, usage, and deployment process.
