export function BarChart({ arr }: { arr: number[] }) {
  const barStyles = {
    display: "flex",
    alignItems: "flex-end",
    marginTop: '100px',
  };

  const barItemStyles = {
    flexGrow: 1,
    backgroundColor: "#fff",
    marginLeft: "5px",
    width: '20px'
  };

  const bars = arr.map((value, index) => (
    <div style={{ flexDirection: 'column' }}>
      <div style={{ color: 'white' }}>{value}</div>
      <div key={index} style={{ ...barItemStyles, height: `${value}px` }}></div>
      <div style={{ color: 'white' }}>{index}</div>
    </div>
  ));

  return (
    <div style={barStyles}>
      {bars}
    </div>
  );
}
