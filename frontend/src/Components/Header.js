import React from 'react'

function Header() {
  return (
    <div>
        <header id="header">
  <div class="intro">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="intro-text">
            <h1>Gusto</h1>
            <p>Reservations: (887) 654-3210</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<div id="features" class="text-center">
  <div class="container">
    <div class="section-title">
      <h2>Our Specials</h2>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-4">
        <div class="features-item">
          <h3>Lorem ipsum dolor</h3>
          <img src="%PUBLIC_URL%/template/img/specials/1.jpg" class="img-responsive" alt=""></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4">
        <div class="features-item">
          <h3>Consectetur adipiscing</h3>
          <img src="%PUBLIC_URL%/template/img/specials/2.jpg" class="img-responsive" alt=""></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4">
        <div class="features-item">
          <h3>Duis sed dapibus</h3>
          <img src="%PUBLIC_URL%/template/img/specials/3.jpg" class="img-responsive" alt=""></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
</div>


  )
}

export default Header