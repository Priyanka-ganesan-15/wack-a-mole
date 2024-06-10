Certainly! Here is a detailed project description for your Whack-A-Mole game:

---

# Whack-A-Mole Game

## Project Description

Whack-A-Mole is an interactive and entertaining web-based game where players aim to hit moles that pop up randomly on a grid. The game also introduces obstacles in the form of Piranha Plants to increase difficulty. This project leverages HTML, CSS, and JavaScript to create a fun and engaging user experience.

### Features

- **Interactive Gameplay**: Click on the moles to score points. Avoid clicking on Piranha Plants to prevent ending the game.
- **Score Tracking**: Displays the current score and updates it in real-time.
- **Dynamic Controls**: Adjust the number of plants, mole appearance interval, and plant appearance interval using sliders.
- **Restart Functionality**: Restart the game at any time to reset the score and game state.
- **Responsive Design**: The game board is styled to provide a consistent experience across different devices.

### Technology Stack

- **HTML**: Structures the game layout and UI elements.
- **CSS**: Styles the game board and controls for an appealing user interface.
- **JavaScript**: Implements the game logic, including mole and plant appearance, score tracking, and user interactions.

### How It Works

1. **Game Initialization**: The game sets up a 3x3 grid with empty tiles.
2. **Mole Appearance**: Moles randomly appear on the grid at intervals, which can be adjusted by the player.
3. **Plant Appearance**: Piranha Plants randomly appear on the grid, avoiding the mole's tile and other plant tiles.
4. **User Interaction**: Players click on tiles to hit moles and avoid plants. The score updates for each successful hit.
5. **Game Over**: Clicking on a plant ends the game, displaying the final score.
6. **Restart**: The game can be restarted, resetting the score and intervals.

### Project Structure

- **`index.html`**: The main HTML file that sets up the game layout and includes references to CSS and JavaScript files.
- **`mole.css`**: The CSS file that styles the game board, tiles, and controls.
- **`mole.js`**: The JavaScript file that contains the game logic and user interaction handling.

### Setup and Usage

To set up and run the game locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/whack-a-mole.git
    cd whack-a-mole
    ```

2. **Open `index.html`** in your web browser to start the game.

### Gameplay Instructions

1. **Starting the Game**: The game starts with a score of 0.
2. **Adjusting Settings**: Use the sliders to set the number of plants and the intervals for mole and plant appearances.
3. **Hitting Moles**: Click on the tiles where moles appear to score points.
4. **Avoiding Plants**: Do not click on tiles with Piranha Plants to avoid ending the game.
5. **Restarting the Game**: Click the "Restart Game" button to reset the game and score.

