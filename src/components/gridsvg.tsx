const Gridsvg = ({
  cellSize,
  height,
  width,
}: {
  height: number;
  width: number;
  cellSize: number;
}) => {
  const cols = Math.ceil(width / cellSize);
  const rows = Math.ceil(height / cellSize);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <mask id="grid-mask">
          {/* <rect x={0} y={0} width={width} height={height} fill="white" /> */}
          {[...Array(cols + 1)].map((_, colIndex) => (
            <line
              key={`v-${colIndex}`}
              x1={colIndex * cellSize}
              y1={0}
              x2={colIndex * cellSize}
              y2={height}
              stroke="white"
              strokeWidth={2}
            />
          ))}

          {/* Dessin des lignes horizontales */}
          {[...Array(rows + 1)].map((_, rowIndex) => (
            <line
              key={`h-${rowIndex}`}
              x1={0}
              y1={rowIndex * cellSize}
              x2={width}
              y2={rowIndex * cellSize}
              stroke="white"
              strokeWidth={2}
              //   strokeWidth={}
            />
          ))}
          {/* Dégradé de blanc à noir sur le bas de la grille */}
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#fade-gradient)"
          />
        </mask>
        {/* Définition du dégradé */}
        <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" stopOpacity="0" />
          <stop offset="20%" stopColor="black" stopOpacity="0.5" />
          <stop offset="80%" stopColor="black" stopOpacity="0.9" />
          <stop offset="100%" stopColor="black" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Gridsvg;
