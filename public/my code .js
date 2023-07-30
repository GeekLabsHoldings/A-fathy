@font-face {
    font-family: Hellix;
    src: url(../../font/Hellix-Bold.ttf);
  }
  
  @font-face {
  
    font-family: MediumHellix;
    src: url(../../font/Hellix-Medium.ttf);
  }
  
  @font-face {
    font-family: Hellix-light;
    src: url(../../font/Hellix-Light.ttf);
  }
  
  @font-face {
  
    font-family: semiHellix;
    src: url(../../font/Hellix-SemiBold.ttf);
  }
  
  @font-face {
    font-family: Hellix-regular;
    src: url(../../font/Hellix-Regular.ttf);
  }
  
  .Home-page {
    width: 99% !important;
    margin: auto;
    position: relative;
    height: auto;
    overflow: hidden;
  }
  
  .home-first {
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
  }
  
  .Home-page .Left {
    position: relative;
    width: 25% !important;
    height: auto;
    left: 0;
    text-align: center;
  }
  
  .Home-page .right {
    position: absolute;
    right: 0;
    top: 0 !important;
    width: 75.4%;
    height: auto;
    border-right: 8px solid #000;
  }
  
  .bttn a {
    color: #fff !important;
  }
  
  .abs-home {
    position: absolute;
    width: 8px;
    height: auto;
    top: 0;
    right: 0;
    background-color: #000;
  }
  
  .first-left {
    width: 100%;
    background-color: #000;
    height: 1100px !important;
    float: left;
    color: #fff;
  }
  
  .left-imgs {
    display: flex;
    width: 250px;
    justify-content: space-between;
    margin: 140px auto;
    margin-bottom: 0 !important;
  
  }
  
  .home-first .slide-text {
    text-align: center;
  }
  
  .left-imgs img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  
  .left-text {
    width: 250px;
    margin: 40px auto;
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
  
  .left-text p {
    font-family: MediumHellix;
    font-size: 18px;
    width: 110%;
    margin-left: -10px;
  }
  
  .input-search {
    width: 250px;
    margin: 0 auto;
    position: relative;
  }
  
  .input-search input {
    width: 100%;
    padding: 5px 0;
    border-radius: 20px;
    border: 0;
  }
  
  .input-search span {
    position: absolute;
    left: 11px;
    top: -1px;
    color: #000;
    transform: scale(1.5);
  }
  
  .left-two {
    left: 0;
    background: #DEDEDE;
    height: 670px;
    position: absolute;
    top: 430px;
    width: 100%;
    border-left: 8px solid #000;
    text-align: center;
  }
  
  .left-two img {
    width: 200px !important;
    height: 200px !important;
    transform: scale(1.5);
    margin-top: 66px;
  }
  
  .left-two h3 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    color: #000;
    line-height: 1;
    letter-spacing: -1px;
    margin-bottom: 0;
    margin-top: 0;
    font-family: Hellix;
  }
  
  .left-two p {
    margin: 0;
    font-size: 22px;
    font-weight: 300;
    color: #000;
    padding: 10px 50px;
    text-align: center;
    font-family: Hellix-regular;
    line-height: 1.2;
    width: 75%;
    margin: auto;
    padding-top: 20px;
  }
  
  .left-two button {
    width: 168px;
    height: 48px;
    text-align: center;
    border: none;
    border-radius: 30px;
    background-color: #6C40EC;
    margin: 20px 0 0 0;
  }
  
  .left-two button a {
    color: #fff !important;
    text-decoration: none;
    font-family: SemiHellix;
  }
  
  
  /* right side */
  
  .first-right {
    height: 1100px;
    float: left;
    color: #fff;
    width: 100%;
  }
  
  /* slider */
  .Home-page .slider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .first-right .arrows {
    position: absolute;
    width: 100%;
    z-index: 9999;
    top: 50%;
  }
  
  /* .first-right .slide-image{
    position: absolute;
    left: 40% !important;
  } */
  .first-right .arrows .next {
    right: 0;
  }
  
  .first-right .arrows .prev {
    left: 0;
  }
  
  .image {
    width: 688px !important;
    height: 381px !important;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    float: right;
    border: none;
    background-color: #fff;
  }
  
  .right-arrow {
    position: absolute;
    bottom: -245px;
    right: 50px;
    font-size: 3.5rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .left-arrow {
    position: absolute;
    bottom: -245px;
    left: 50px;
    font-size: 3.5rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
    width: 1088px !important;
    height: 381px !important;
    background-color: #000;
    position: absolute;
    top: 120px;
    left: 0;
    border-radius: 30px;
  }
  
  .slide.active p {
    width: 300px;
    font-size: 31px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    position: absolute;
    left: 5%;
    top: 10%;
  }
  
  .slide.active button {
    width: 137px;
    height: 41px;
    position: absolute;
    bottom: 10%;
    left: 13%;
    border-radius: 50px;
    background-color: #6C40EC;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
  }
  
  
  
  /* dress-sec style */
  .dress-sec {
    position: relative;
    width: 1273px;
    height: 314px;
    background-color: #6C40EC;
    border-radius: 30px;
    top: 50px;
    margin: 0 auto;
  }
  
  .dress-sec .dr-left {
    width: 40%;
    float: left;
    text-align: start;
    padding-left: 41px;
  }
  
  .dress-sec .dr-left img {
    width: 100px;
    height: 60px;
    margin: 25px 0 0 0;
  }
  
  .dress-sec .dr-left h4 {
    color: #fff;
    padding: 10px 0 0 0;
    font-size: 40px;
    font-weight: bold;
    margin-top: 0px;
    line-height: 1;
    margin-bottom: 30px;
    font-family: Hellix;
  }
  
  .dress-sec .dr-left p {
    width: 350px;
    font-size: 20px;
    color: #fff;
    font-weight: 400;
    margin-top: -15px;
    line-height: 1.2;
    font-family: MediumHellix;
  }
  
  .dress-sec .dr-right img {
    width: 400px;
    position: absolute;
    right: 20px;
    bottom: 10px;
  }
  
  .dress-sec .dr-right button {
    position: absolute;
    top: 230px;
    left: 47%;
    width: 135px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: #000;
  }
  
  .dress-sec .dr-right button a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    font-family: semiHellix;
  }
  
  .dress-sec .dr-right button:hover {
    opacity: .8;
  }
  
  
  
  .second-left {
    width: 98.5%;
    height: 400vh;
    float: left;
    color: #fff;
    border-left: 8px solid #000;
  }
  
  .seconed-two {
    left: 0;
    height: 820px;
    width: 98.5%;
  
  }
  
  .seconed-two img {
    width: 200px !important;
    height: 200px !important;
    transform: scale(1.2);
    margin-top: 132px;
  }
  
  .seconed-two h3 {
    font-size: 41px;
    font-weight: bold;
    text-align: center;
    color: #000;
    line-height: 1;
    letter-spacing: -1px;
    margin-bottom: 0;
    margin-top: 70px;
    font-family: Hellix;
  }
  
  .seconed-two p {
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    color: #000;
    padding: 10px 50px;
    text-align: center;
    line-height: 1.2;
    font-family: Hellix-regular;
  }
  
  .seconed-two button {
    width: 168px;
    height: 48px;
    text-align: center;
    border: none;
    border-radius: 30px;
    background-color: #6C40EC;
    margin: 20px 0 0 0;
  }
  
  .seconed-two button a {
    color: #fff;
    text-decoration: none;
    font-size: 21px;
    font-family: SemiHellix;
  
  }
  
  .left-four {
    height: 970px;
    position: relative;
  }
  
  .left-four img {
    width: 135px;
    height: 115px;
  
  }
  
  .left-four .bttn {
    position: absolute;
    left: 34%;
    bottom: 90px;
    width: 150px;
    height: 70px;
    border-radius: 50px;
    border: none;
    background-color: #000;
    font-size: 24px;
    font-family: MediumHellix;
  }
  
  .left-four .bttn a {
    color: #fff;
  }
  
  
  /* seconed-right style */
  /* .seconed-right{
    position: absolute;
    width: 100%;
    left: 0;
    height: 1970px;
    background-color: #6C40EC;
  } */
  .seconed-right {
    position: absolute;
    width: 100%;
    left: 9px;
    top: 1100px;
    height: 400vh;
    background-color: #000 !important;
  }
  
  .seconed-right h1 {
    position: absolute;
    font-size: 103px;
    font-weight: bold;
    color: #000;
    top: -137px;
    left: 80px;
    font-family: Hellix;
    letter-spacing: -4px;
  }
  
  .slider-two {
    width: 90%;
    height: 880px;
    position: relative;
    margin: auto;
  }
  
  .parent {
    width: 88%;
    height: auto;
    position: absolute;
    right: 0;
    top: 20px;
  }
  
  .parent img {
    width: 100% !important;
    height: 455px !important;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 0px;
  }
  
  .slider-two .left-arrow,
  .slider-two .right-arrow {
    background-color: #fff !important;
    position: absolute;
    top: 50%;
  }
  
  .slider-two .right-arrow {
    right: 35px;
  }
  
  .parent .abs {
    width: 100% !important;
    display: block;
    height: 50px;
    position: absolute !important;
    bottom: 27px !important;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  
  .parent .abs p {
    width: 100% !important;
    margin-top: 145px;
    margin-left: -54px;
    background-color: #5A45EF;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 10px 0;
    font-size: 42px;
    font-weight: Hellix;
    line-height: 1.1;
  }
  
  .multi-slider {
    height: 1035px;
  
  }
  
  .multi-slider h2 {
    font-size: 73px;
    font-weight: bold;
    color: #fff;
    margin-top: -40px;
    text-align: center;
    font-family: Hellix;
  }
  
  .left-three,
  .three-right {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 2910px;
  }
  
  .left-three {
    background-color: #000;
  }
  
  .three-right {
    background-color: #fff;
    box-sizing: border-box;
  }
  
  /* third section */
  .four-parent {
    width: 88%;
    height: 77vh;
    margin: auto;
    background-color: #DEDEDE;
    margin-top: 70px;
    border-radius: 30px;
    padding-bottom: 10px;
  }
  
  .flex {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
  
  .flex h1 {
    font-size: 60px;
    font-weight: bolder;
    margin-top: 4px;
  }
  
  .flex button {
    width: 183px;
    height: 46px;
    border-radius: 40px;
    background-color: #6C40EC;
    border: none;
    margin-top: 30px;
  }
  
  .flex button a {
    color: #fff !important;
    font-size: 18px;
  }
  
  a:hover {
    list-style: none;
    outline: none;
    text-decoration: none;
  }
  
  .row1 {
    width: 94%;
    margin: auto;
    height: 350px;
    background-color: #000;
    border-radius: 20px;
    margin-top: 5px;
    position: relative;
  }
  
  .fl-right {
    width: 45%;
    float: right;
  }
  
  .fl-right .p {
    color: #fff;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    word-spacing: 0px;
    margin-top: 30px;
    width: 350px;
    margin-left: 15%;
  }
  
  .wid {
    padding: 5px 90px;
    text-align: center;
    color: #FFFFFF;
    opacity: .8;
    font-size: 18px;
    font-weight: 400;
  
  }
  
  .fl-right button {
    width: 119px;
    height: 45px;
    border: none;
    border-radius: 30px;
    background-color: #6C40EC;
    margin-top: 10px;
    position: absolute;
    right: 18%;
  }
  
  .fl-right button a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
  
  .divs {
    width: 94%;
    margin: auto;
    height: 170px;
    background-color: transparent;
    margin-top: 10px;
    display: flex;
  }
  
  .Home-page .div1 {
    width: 49.6%;
    border-radius: 20px;
    height: 100%;
    float: left;
    background-color: #000 !important;
  }
  
  .div2 {
    width: 49.6%;
    border-radius: 20px;
    height: 100%;
    float: left;
    background-color: #000;
  }
  
  .Home-page .fo {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-top: 25px;
    margin-right: 5px;
    line-height: 1.2 !important;
  }
  
  .Home-page .fo2 {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-right: 5px;
    opacity: .7;
    line-height: 1;
  }
  
  /* left-five style */
  .left-five {
    height: 100%;
    background-color: #000;
    border-left: 8px solid #000;
  }
  
  .left-five img {
    width: 90%;
    transform: scale(.9);
    margin: 170px 20px 20px 60px;
  }
  
  .left-five p {
    text-align: center;
    color: #fff;
    font-size: 28px;
    font-weight: 0;
    margin-top: 0 !important;
  }
  
  .left-five button {
    margin-top: 15px;
    width: 135px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: #6C40EC;
  }
  
  .left-five button a {
    color: #fff;
  }
  
  
  
  /* four-parent style */
  .four-right,
  .left-last {
    width: 100%;
    height: 1314px;
    position: absolute;
    border-left: 8px solid #000;
    top: 3845px;
    background-color: #5A45EF;
  }
  
  .four-right {
    background-color: #000;
    position: relative;
    left: 0px;
    height: 1540px;
  }
  
  .left-last {
    background-color: #fff;
  }
  
  
  
  
  
  /* cen */
  /* .left-sex{
    position: absolute;
    background-color: #fff !important;
    height: 1394px;
    border-left: 8px solid #000;
  } */
  .cen {
    position: relative;
    width: 90%;
    height: 90%;
    background-color: #000;
    margin: auto;
    margin-top: 80px;
    border-radius: 20px;
  }
  
  .bot {
    width: 100%;
    height: 360px;
    position: absolute;
    bottom: 0;
    background-color: #6C40EC;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  
  .fl-right2 {
    position: relative;
    padding: 80px 50px;
  }
  
  .p2 {
    font-size: 28px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 1.2;
    margin-top: -20px;
  }
  
  .p3 {
    color: #fff;
    opacity: .7;
    text-align: center;
    margin-top: 5px;
    padding: 0 8px;
  }
  
  .fl-right2 button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 50px;
    background-color: #000;
    margin-top: 10px;
  }
  
  .fl-right2 button a {
    color: #fff;
  }
  
  .right-fivth {
    position: relative;
    right: 0;
  }
  
  .Home-page .full {
    position: absolute;
    left: 80px;
    width: 1250px;
    height: 293px;
    margin: auto;
    background: #000;
    border: .1px solid #5A45EF;
    margin-top: 40px;
    border-radius: 20px;
  }
  
  .Home-page .full .r-l {
    position: relative;
    width: 622px;
    height: 100%;
    float: right;
    background-color: #5A45EF;
    padding-left: 50px;
    padding-top: 50px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  
  }
  
  .Home-page .pp2 {
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    line-height: 1.2;
    text-align: start;
    margin-top: -10px;
  }
  
  .pp3 {
    color: #fff;
    font-size: 17px;
    opacity: .7;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: start;
  }
  
  .r-l button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 50px;
    background-color: #000;
    margin-top: 30px;
    position: absolute;
    left: 25px;
  }
  
  .r-l button a {
    color: #fff;
  }
  
  .r-l img {
    width: 100px;
    height: 70px;
    right: 20px;
    bottom: 20px;
    position: absolute;
  }
  
  .full2 {
    position: absolute;
    left: 80px;
    top: 300px;
    width: 1250px;
    height: 867px;
    margin: auto;
    background: #5A45EF;
    border: .1px solid #5A45EF;
    margin-top: 40px;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 100px;
  }
  
  .full2 h1 {
    font-size: 60px;
    color: #fff;
    font-weight: bold;
    padding-left: 30px;
    text-align: start;
  }
  
  .rev-left {
    background-color: #fff;
    height: 684px;
    width: 813px;
    margin-left: 35px;
    border-radius: 20px;
  }
  
  .rev-btn {
    width: 813px;
    position: absolute;
  
    padding: 15px 0;
    text-align: center;
    bottom: 23px;
    background-color: #000;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  
  .rev-btn {
    font-size: 25px;
    color: #fff;
  }
  
  .rev-right {
    background-color: transparent;
    height: 684px;
    position: absolute;
    right: 41px;
    top: 125px;
    border-radius: 20px;
  
  }
  
  .rev-right h5 {
    font-size: 30px;
    text-align: center;
    padding: 0px 0 10px 0;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
  }
  
  .rev-right p {
    text-align: center;
    color: #fff;
    font-size: 16px;
    opacity: .8;
    margin-top: 30px;
  }
  
  .rev-right button {
    width: 280px;
    height: 60px;
    border: none;
    border-radius: 50px;
    background-color: #000;
    margin-top: 85px;
  }
  
  .rev-right button a {
    color: #fff !important;
    font-size: 18px;
  }
  
  
  /* .last-foot{
    position: absolute;
    width: 100%;
    height: 250px;
    background-color: #6C40EC;
    bottom: 0;
    left: 0;
   } */
  .five-last {
    width: 99%;
    margin: auto !important;
    height: 260px;
  
  }
  
  .Home-page .owl-carousel .owl-nav.disabled {
    display: block;
  }
  
  .Home-page .owll {
    width: 89%;
    margin: auto;
    position: relative;
  }
  
  .Home-page .owl-nav {
    position: absolute;
    top: 40%;
    width: 100%;
    z-index: 9999;
    background-color: red;
  }
  
  .Home-page .owl-carousel .owl-nav button.owl-next {
    position: absolute !important;
    right: 10px !important;
    top: -26px;
    font-size: 40px !important;
    margin-left: 50px;
    color: #fff;
  }
  
  .Home-page .owl-carousel .owl-nav button.owl-prev {
    position: absolute !important;
    left: -40px !important;
    top: -26px;
    font-size: 40px !important;
    margin-left: 50px;
    color: #fff;
  }
  
  .Home-page .shadow-effect p {
    visibility: hidden;
  }
  
  @media(max-width:1950px) {
  
    .first-right .slider-container section {
      width: 100%;
    }
  
    .first-right .inactive {
      width: 100%;
      visibility: hidden;
    }
  
    .home-first .slide-text {
      width: 70%;
      margin: auto;
      text-align: start;
      font-size: 28px;
      text-align: center;
      padding-top: 40%;
      line-height: 1.1;
    }
    .dress-sec {
      position: relative;
      width: 90%;
    }
  
    .Home-page .parent {
      width: 70% !important;
      height: auto;
      position: absolute;
      left: 15%;
      top: 20px;
      background-color: #5A45EF;
    }
  
    .Home-page .parent .slide.active {
      width: 100% !important;
    }
  
    .parent .abs p {
      width: 100% !important;
      margin-top: 145px;
      margin-left: 0;
      position: absolute;
      left: 0;
    }
  
    .first-right .active {
      width: 90%;
      display: inline-block;
      position: absolute !important;
      left: 5% !important;
    }
  
    .first-right .arrows .next {
      left: 95%;
    }
  
    .four-right .full,
    .four-right .full2 {
      width: 85%;
    }
  
    .row1 {
      position: relative;
  
    }
  
    .fl-right .p {
      font-size: 24px;
    }
  
    .fl-right button {
      position: absolute;
      left: 50%;
      bottom: 30px;
    }
  
    .Home-page .wid {
      padding: 5px 20px 0 80px
    }
  
    .rev-left,
    .rev-btn {
      width: 60%;
    }
  
    .rev-right {
      width: 30%;
    }
  
    .Home-page .dress-sec .dr-right img {
      transform: scale(.9);
    }
    .left-two p {
      margin: 0;
      font-size: 16px;
      font-weight: 300;
      color: #000;
      padding: 10px 50px;
      text-align: center;
      font-family: Hellix-regular;
      line-height: 1.2;
      width: 91%;
      margin: auto;
      padding-top: 20px;
  }
  .seconed-right h1 {
    position: absolute;
    font-size: 85px;
    
    left: 6px;
    font-family: Hellix;
    letter-spacing: -4px;
  }
  }
  
  /* @media(max-width:1500px) {
    .home-first .slide-text {
      font-size: 25px;
      padding-top: 150px;
    }
  
    .Home-page .dress-sec .dr-right img {
      transform: scale(.6);
      position: absolute;
      left: 60%;
      top: 0;
    }
  
    .dress-sec .dr-right button {
      left: 50%;
    }
  
    .parent .abs p {
      font-size: 26px;
    }
  
    .fl-right .p {
      font-size: 20px;
      width: 70%;
    }
  
    .Home-page .wid {
      padding: 5px 20px 0 20px;
    }
  
    .fl-right {
      width: 58%;
      float: right;
      text-align: start;
    }
  
    .flex h1 {
      font-size: 45px;
      padding-top: 10px;
    }
  
    .Home-page .full .r-l {
      position: relative;
      width: 60%;
    }
  
    .rev-right {
      width: 30%;
      position: absolute;
      right: 18px;
    }
  
    .four-right .full2 h1 {
      font-size: 40px !important;
      padding-bottom: 50px !important;
    }
  
    .rev-btn p {
      font-size: 22px;
    }
  } */
  
  /* @media(max-width:1150px) {
    .first-right .active {
      height: 400px !important;
    }
  
    .slid-abs {
      height: 100%;
    }
  
    .first-right .arrows {
      top: 43%;
      left: -10px;
    }
  
    .all-dots {
      bottom: -463px !important;
  
    }
  
    .Home-page .slider-container section {
      height: 390px;
    }
  
    .home-first .slide-text {
      font-size: 20px;
      padding-top: 112px;
    }
  
    .Home-page .dress-sec .dr-right img {
      transform: scale(.5);
      position: absolute;
      left: 54%;
      top: -34px;
    }
  
    .dress-sec .dr-left p {
      width: 100%;
      font-size: 16px;
      color: #fff;
      font-weight: 400;
      margin-top: 21px;
    }
  
  
  } */