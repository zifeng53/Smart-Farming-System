document.write(`
<style>
header {
    background: #ffffff;
    color: black;
    width: 80%;
    margin: 0 auto;
}

header::after {
    content: "";
    display: table;
    clear: both;
}

.logo {
    float: left;
    padding: 10px 0;
    height: 100px;
    width: 100px;
}

nav {
    float: right;
}

nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 20px;
}

nav li {
    display: inline-block;
    margin-left: 50px;
    padding: 25px 0;
    position: relative;
}

nav a {
    color: #444;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 17px;
}

nav a:hover {
    color: #000;
}

nav a::before {
    content: "";
    display: block;
    width: 0%;
    height: 5px;
    background-color: #444;
    position: absolute;
    top: 0;
    transition: all ease-in-out 200ms;
}

nav a:hover:before {
    width: 100%;
}
</style>
<header>
    <div class="header-container">
        <img src="https://drive.google.com/uc?id=1lt1JU1cOpyUQSqIXG5w8Z-aXAnr8vYUj" alt="logo" class="logo" />
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="Light.html">Light Automation</a></li>
                <li><a href=".html">Watering System</a></li>
                <li><a href="gate.html">Gate</a></li>
                <li><a href="sound.html">Sound</a></li>
            </ul>
        </nav>
    </div>
</header>
<hr />
<br />
`);