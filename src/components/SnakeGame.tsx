import React, { useState, useEffect, useRef, useCallback } from 'react';
import './SnakeGame.css';

// Game constants
const BOARD_WIDTH = 400;
const BOARD_HEIGHT = 400;
const UNIT = 20; // Size of each "pixel" block
const GAME_SPEED = 150; // Milliseconds between moves

// Types
interface Position {
  x: number;
  y: number;
}

interface GameState {
  snake: Position[];
  food: Position;
  direction: string;
  gameOver: boolean;
  score: number;
}

const SnakeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<NodeJS.Timeout>();

  const [gameState, setGameState] = useState<GameState>({
    snake: [{ x: 100, y: 100 }],
    food: { x: 200, y: 200 },
    direction: 'RIGHT',
    gameOver: false,
    score: 0,
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Generate random food position
  const generateFood = useCallback((): Position => {
    const x = Math.floor(Math.random() * (BOARD_WIDTH / UNIT)) * UNIT;
    const y = Math.floor(Math.random() * (BOARD_HEIGHT / UNIT)) * UNIT;
    return { x, y };
  }, []);

  // Initialize game
  const initGame = useCallback(() => {
    setGameState({
      snake: [{ x: 100, y: 100 }],
      food: generateFood(),
      direction: 'RIGHT',
      gameOver: false,
      score: 0,
    });
    setIsPlaying(false);
  }, [generateFood]);

  // Start game
  const startGame = () => {
    if (gameState.gameOver) {
      initGame();
    }
    setIsPlaying(true);
  };

  // Draw game elements
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

    // Draw snake
    ctx.fillStyle = '#4ade80';
    gameState.snake.forEach((segment, index) => {
      // Snake head is slightly different color
      ctx.fillStyle = index === 0 ? '#22c55e' : '#4ade80';
      ctx.fillRect(segment.x, segment.y, UNIT, UNIT);
      
      // Add pixel art border effect
      ctx.strokeStyle = '#16a34a';
      ctx.lineWidth = 1;
      ctx.strokeRect(segment.x, segment.y, UNIT, UNIT);
    });

    // Draw food
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(gameState.food.x, gameState.food.y, UNIT, UNIT);
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 1;
    ctx.strokeRect(gameState.food.x, gameState.food.y, UNIT, UNIT);

    // Draw grid lines for pixel art effect
    ctx.strokeStyle = '#404040';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= BOARD_WIDTH; x += UNIT) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, BOARD_HEIGHT);
      ctx.stroke();
    }
    for (let y = 0; y <= BOARD_HEIGHT; y += UNIT) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(BOARD_WIDTH, y);
      ctx.stroke();
    }
  }, [gameState.snake, gameState.food]);

  // Game logic
  const moveSnake = useCallback(() => {
    if (gameState.gameOver || !isPlaying) return;

    setGameState(prevState => {
      const newSnake = [...prevState.snake];
      const head = { ...newSnake[0] };

      // Move head based on direction
      switch (prevState.direction) {
        case 'UP':
          head.y -= UNIT;
          break;
        case 'DOWN':
          head.y += UNIT;
          break;
        case 'LEFT':
          head.x -= UNIT;
          break;
        case 'RIGHT':
          head.x += UNIT;
          break;
      }

      // Check wall collision
      if (head.x < 0 || head.x >= BOARD_WIDTH || head.y < 0 || head.y >= BOARD_HEIGHT) {
        return { ...prevState, gameOver: true };
      }

      // Check self collision
      for (let segment of newSnake) {
        if (head.x === segment.x && head.y === segment.y) {
          return { ...prevState, gameOver: true };
        }
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === prevState.food.x && head.y === prevState.food.y) {
        // Don't remove tail, snake grows
        return {
          ...prevState,
          snake: newSnake,
          food: generateFood(),
          score: prevState.score + 10,
        };
      } else {
        // Remove tail
        newSnake.pop();
        return {
          ...prevState,
          snake: newSnake,
        };
      }
    });
  }, [gameState.gameOver, isPlaying, generateFood]);

  // Handle keyboard input
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!isPlaying || gameState.gameOver) return;

    const key = e.key.toLowerCase();
    setGameState(prevState => {
      let newDirection = prevState.direction;
      
      switch (key) {
        case 'arrowup':
        case 'w':
          if (prevState.direction !== 'DOWN') newDirection = 'UP';
          break;
        case 'arrowdown':
        case 's':
          if (prevState.direction !== 'UP') newDirection = 'DOWN';
          break;
        case 'arrowleft':
        case 'a':
          if (prevState.direction !== 'RIGHT') newDirection = 'LEFT';
          break;
        case 'arrowright':
        case 'd':
          if (prevState.direction !== 'LEFT') newDirection = 'RIGHT';
          break;
      }
      
      return { ...prevState, direction: newDirection };
    });
  }, [isPlaying, gameState.gameOver]);

  // Game loop
  useEffect(() => {
    if (isPlaying && !gameState.gameOver) {
      gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isPlaying, gameState.gameOver, moveSnake]);

  // Set up keyboard event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // Draw game
  useEffect(() => {
    draw();
  }, [draw]);

  // Initialize game on mount
  useEffect(() => {
    initGame();
  }, [initGame]);

  return (
    <div className="snake-game">
      <h3>Snake Game</h3>
      <div className="game-info">
        <p>Score: <span className="score-value">{gameState.score}</span></p>
        <p className="game-controls">Use Arrow Keys or WASD</p>
      </div>
      
      <div className="game-container">
        <canvas
          ref={canvasRef}
          width={BOARD_WIDTH}
          height={BOARD_HEIGHT}
          className="game-canvas"
        />
        
        {gameState.gameOver && (
          <div className="game-over-overlay">
            <div className="game-over-content">
              <h4>Game Over!</h4>
              <p>Final Score: {gameState.score}</p>
            </div>
          </div>
        )}
      </div>

      <div className="game-buttons">
        <button 
          className="btn-secondary" 
          onClick={startGame}
          type="button"
        >
          {gameState.gameOver ? 'Play Again' : isPlaying ? 'Playing...' : 'Start Game'}
        </button>
        
        <button 
          className="btn-secondary" 
          onClick={initGame}
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SnakeGame;