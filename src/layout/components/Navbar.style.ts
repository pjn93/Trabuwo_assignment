import { Style } from '../../types/style.type'


export const style: Style = {
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "#734d26",
 },
 box: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff33",
    padding: "0 10px",
    borderRadius: 1,
    width: "400px",
 },
 input: {
    color: "white",
    marginLeft: 1,
    "& input::placeholder": { color: "white" },
    borderRadius: 1,
    width: "400px",
 },
 logo: {
    flexGrow: 1, textAlign: "center", mr: 10
 }
}