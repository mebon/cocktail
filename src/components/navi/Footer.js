var style = {
    backgroundColor: "#525252",
    borderTop: "1px solid #E7E7E7",
    textAlign: "Mebonbar",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "0px",
    width: "100%",
}

var phantom = {
  padding: '40%',
  height: '1px',
  width: '1px',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer