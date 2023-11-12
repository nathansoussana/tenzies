export default function Button({ text, onClick }) {
  return <a className="btn" onClick={onClick}>{text}</a>
}