function Container (props) {
    const fallback = { 
        display: "flex", 
        flexWrap: "wrap", 
        with: "90%", 
        margin: "10px auto",
    };
    const style = props.style ? { ...props.style, ...fallback} :fallback

    return <div style={style}>{props.children}</div>
}

export default Container