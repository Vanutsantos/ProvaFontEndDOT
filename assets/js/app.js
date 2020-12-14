document.addEventListener("DOMContentLoaded", function() {
  $('.banners').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  
  $('.cards-content').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: $('#next'),
    prevArrow: $('#prev'),
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  const closeAccordions = () => {
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    })
  }

  const accordions = document.querySelectorAll('.accordion-item button');
  accordions.forEach(item => {
    item.addEventListener('click', function(){
      if(this.closest(".accordion-item ").classList.value.indexOf('active') != -1) {
        closeAccordions();
      }else{
        closeAccordions();
        this.closest(".accordion-item ").classList.add('active')
      }
    })
  })

  document.querySelector('#telephone').addEventListener('keypress', function() {
    let value = this.value;
    value = value.replace(/\D/g,"");
    value = value.replace(/^(\d\d)(\d)/g,"($1) $2");
    value = value.replace(/(\d{4})(\d)/,"$1-$2"); 
    value = value.replace(/^[a-z]{0,14}$/);
    value = value === 'undefined' ? '' : value;
    this.value = value;
  })

  document.querySelector('form.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telephone').value;
    const mensagem = document.querySelector('#message').value;
    let msg = `Nome: ${nome} \nEmail: ${email} \nTelefone: ${telefone} \nMensagem: ${mensagem} `
    alert(msg);
  })
  
});
