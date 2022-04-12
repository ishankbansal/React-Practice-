function Header()
{
    return (
        <header>
            <nav>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Page(){
    return (
        <div>
            <Header/>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids</li>
                <li>I'am more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
        
    )
}
ReactDOM.render(<Page/>, document.getElementById("root"))