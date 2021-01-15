var style = {
    backgroundColor: "#525252",
    borderTop: "1px solid #E7E7E7",
    textAlign: "Mebonbar",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '1px',
  height: '1px',
  width: '100%',
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