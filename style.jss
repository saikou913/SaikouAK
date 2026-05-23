@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

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
    color:#FFFFFF;
    overflow-x:hidden;

    font-family:'Poppins',sans-serif;
}

/* NAVBAR */

.top-nav{
    width:52%;
    height:8px;

    display:flex;

    position:fixed;
    top:70px;
    left:50%;

    transform:translateX(-50%);

    z-index:999;
}

.nav-segment{
    flex:1;

    transition:.45s cubic-bezier(.77,0,.18,1);

    position:relative;

    text-decoration:none;
}

.nav-segment span{
    position:absolute;

    top:50%;
    left:50%;

    transform:translate(-50%,-50%);

    opacity:0;

    color:#FFFFFF;

    font-size:11px;
    font-weight:700;

    transition:.35s;

    white-space:nowrap;
}

.nav-segment:hover{
    flex:2.2;
    height:18px;
}

.nav-segment:hover span{
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

    font-size:76px;
    font-weight:700;

    letter-spacing:2px;

    font-family:"ITC Avant Garde Gothic Std", sans-serif;
}

/* SECTION */

.section{
    width:100%;
    margin-bottom:120px;
}

.section-label{
    width:40%;

    margin:auto;
    margin-bottom:10px;

    color:#666666;

    font-size:14px;
}

/* CARD */

.card{
    width:40%;

    margin:auto;

    background:#050505;

    padding:48px;

    position:relative;
}

.cyan-border{
    border-top:28px solid #88C1B0;
}

.yellow-border{
    border-top:28px solid #EDA93C;
}

.red-border{
    border-top:28px solid #9A2D28;
}

.card h2{
    font-size:52px;
    font-weight:800;

    display:flex;
    align-items:center;

    gap:10px;

    margin-bottom:40px;
}

.circle{
    width:42px;
    height:42px;

    border-radius:50%;

    background:#E86031;

    display:flex;
    align-items:center;
    justify-content:center;

    font-size:32px;
    font-weight:700;
}

.card p{
    color:#FFFFFF;

    line-height:1.7;

    font-size:15px;
}

/* BUTTON */

.member-btn{
    margin-top:25px;

    background:none;
    border:none;

    color:#E86031;

    cursor:pointer;

    font-size:15px;

    font-family:'Poppins',sans-serif;
}

/* MEMBERS */

.hidden{
    display:none;
}

.carousel-container{
    display:flex;
    align-items:center;
    justify-content:center;

    gap:20px;
}

.carousel{
    display:flex;
    gap:8px;
}

.operator-card{
    width:82px;
    height:130px;

    overflow:hidden;

    transition:.3s;
}

.operator-card:hover{
    transform:translateY(-8px);
}

.operator-card img{
    width:100%;
    height:100%;

    object-fit:cover;
}

.arrow{
    background:none;
    border:none;

    color:white;

    cursor:pointer;

    font-size:22px;
}

/* CONTACT */

.contact-card{
    text-align:center;

    padding:70px 40px;
}

.contact-title{
    color:#E86031;

    font-size:72px;
    font-weight:700;

    margin-bottom:50px;

    font-family:"ITC Avant Garde Gothic Std", sans-serif;
}

.socials{
    display:flex;
    justify-content:center;

    gap:40px;
}

.socials a{
    width:44px;
    height:44px;

    border-radius:50%;

    background:white;
    color:black;

    display:flex;
    justify-content:center;
    align-items:center;

    text-decoration:none;

    transition:.3s;
}

.socials a:hover{
    transform:scale(1.15);
}

/* RESPONSIVE */

@media(max-width:1200px){

    .card,
    .section-label,
    .top-nav{
        width:80%;
    }

}

@media(max-width:768px){

    .hero h1{
        font-size:52px;
    }

    .card{
        padding:32px;
    }

    .card h2{
        font-size:34px;
    }

    .contact-title{
        font-size:48px;
    }

}