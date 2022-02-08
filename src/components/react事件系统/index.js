

function Index() {

    return (
        <section ONCLICK={(e) => console.log("click section")}>
            <h3>你好</h3>
            <button
                onClick={(e) => {
                    //e.stopPropagation();
                    console.log("click button");
                }}
            >
                点击
            </button>
        </section>
    )
}

export default Index