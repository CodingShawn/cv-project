const FinalCV = (props) => {
    console.log(props)

    return (
        <div className="card">
            <section class="card-header d-flex align-items-center justify-content-between">
                <h1 class="card-title">{props.name}</h1>
                <div>
                    <p>Contact Number: {props.phone}</p>
                    <p>Email: {props.email}</p>
                </div>
            </section>  
            <section class="card-body">
                <h3 className="card-title">Education</h3>
                <p>{props.course}</p>
                <p>{props.school}</p>
                <p>Graduated: {props.graduation}</p>
                <h3 className="card-title">Professional Experience</h3>
                <h4>{props.position}</h4>
                <p>{props.company}</p>
                <p>{props.dateStarted} - {props.dateTill ? props.dateTill : "Present"}</p>
                <p>{props.mainTasks}</p>
            </section>
        </div>
    )
}

export default FinalCV