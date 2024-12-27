let CurrentTime = () => {

    let time = new Date();

    return <p className="Time">This is the Current Time : {time.toDateString()} - {time.toLocaleTimeString()}</p>
}

export default CurrentTime;