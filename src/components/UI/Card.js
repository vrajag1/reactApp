import "./Card.css";

export default function Card(Props) {
  const classes = "card " + Props.className;
  return <div className={classes}>{Props.children}</div>;
}
