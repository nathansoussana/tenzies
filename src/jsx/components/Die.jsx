export default function Die({ isHeld, onClick, value }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white"
  }
  
  return <div style={styles} className="die" onClick={onClick}>{value}</div>
}
