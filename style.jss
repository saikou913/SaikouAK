*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#1E1E1E;
    color:white;
    font-family:'Poppins',sans-serif;
}

/* NAVBAR */

.navbar{
    width:50%;

    height:8px;

    display:flex;

    position:fixed;

    top:70px;
    left:50%;

    transform:translateX(-50%);

    z-index:999;
}

.nav{
    flex:1;

    transition:.4s;

    position:relative;
}

.nav span{
    position:absolute;

    top:50%;
    left:50%;

    transform:translate(-50%,-50%);

    opacity:0;

    color:white;

    font-size:11px;
    font-weight:700;

    transition:.3s;
}

.nav:hover{
    flex:2;
    height:18px;
}

.nav:hover span{
    opacity:1;
}

.cyan{
    background:#88C1B0;
}

.yellow{
    background:#EDA93C;
}

.red{
    background:#9A2D28;
}

/* HERO */

.hero{
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;
}

.hero h1{
    color:#E86031;

    font-size:80px;

    font-family:"ITC Avant Garde Gothic Std",sans-serif;
}

/* SECTION */

.section{
    margin-bottom:120px;
}

.label{
    width:40%;
    margin:auto;

    margin-bottom:10px;

    color:#666;
}

/* CARD */

.card{
    width:40%;

    margin:auto;

    background:#050505;

    padding:50px;
}

.blue-border{
    border-top:28px solid #88C1B0;
}

.yellow-border{
    border-top:28px solid #EDA93C;
}

.red-border{
    border-top:28px solid #9A2D28;
}

.card h2{
    display:flex;
    align-items:center;

    gap:10px;

    margin-bottom:40px;

    font-size:52px;
}

.circle{
    width:42px;
    height:42px;

    border-radius:50%;

    background:#E86031;

    display:flex;
    justify-content:center;
    align-items:center;
}

.card p{
    line-height:1.7;
}

/* BUTTON */

.member-btn{
    margin-top:20px;

    background:none;
    border:none;

    color:#E86031;

    cursor:pointer;

    font-size:15px;
}

/* CONTACT */

.center{
    text-align:center;
}

.contact-title{
    color:#E86031;

    font-size:72px;

    margin-bottom:50px;

    font-family:"ITC Avant Garde Gothic Std",sans-serif;
}

.socials{
    display:flex;
    justify-content:center;

    gap:30px;
}

.social{
    width:45px;
    height:45px;

    border-radius:50%;

    background:white;
}