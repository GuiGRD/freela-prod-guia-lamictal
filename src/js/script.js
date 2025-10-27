const opcoesPorIdade = {
  '2-12': [
    { value: 'nenhum', label: 'Nenhum' },
    { value: 'atazanavir-ritonavir', label: 'Atazanavir/ritonavir' },
    { value: 'carbamazepina', label: 'Carbamazepina' },
    { value: 'lopinavir-ritonavir', label: 'Lopinavir/ritonavir' },
    { value: 'oxcarbazepina', label: 'Oxcarbazepina' },
    { value: 'paracetamol', label: 'Paracetamol' },
    { value: 'fenobarbital', label: 'Fenobarbital' },
    { value: 'fenitoina', label: 'Fenitoína' },
    { value: 'primidona', label: 'Primidona' },
    { value: 'rifampicina', label: 'Rifampicina' },
    { value: 'topiramato', label: 'Topiramato' },
    { value: 'outra', label: 'Outra' },
  ],
  '12-18': [
    { value: 'nenhum', label: 'Nenhum' },
    { value: 'atazanavir-ritonavir', label: 'Atazanavir/ritonavir' },
    { value: 'carbamazepina', label: 'Carbamazepina' },
    { value: 'gabapentina', label: 'Gabapentina' },
    { value: 'lacosamida', label: 'Lacosamida' },
    { value: 'levetiracetam', label: 'Levetiracetam' },
    { value: 'lopinavir-ritonavir', label: 'Lopinavir/ritonavir' },
    { value: 'oxcarbazepina', label: 'Oxcarbazepina' },
    { value: 'paracetamol', label: 'Paracetamol' },
    { value: 'perampanel', label: 'Perampanel' },
    { value: 'fenobarbital', label: 'Fenobarbital' },
    { value: 'fenitoina', label: 'Fenitoína' },
    { value: 'primidona', label: 'Primidona' },
    { value: 'rifampicina', label: 'Rifampicina' },
    { value: 'topiramato', label: 'Topiramato' },
    { value: 'outra', label: 'Outra' },
  ],
  '18': [
    { value: 'nenhum', label: 'Nenhum' },
    { value: 'aripiprazol', label: 'Aripiprazol' },
    { value: 'atazanavir-ritonavir', label: 'Atazanavir/ritonavir' },
    { value: 'bupropiona', label: 'Bupropiona' },
    { value: 'carbamazepina', label: 'Carbamazepina' },
    { value: 'etinilestradiol-levonorgestrel', label: 'Etinilestradiol/levonorgestrel' },
    { value: 'gabapentina', label: 'Gabapentina' },
    { value: 'lacosamida', label: 'Lacosamida' },
    { value: 'levetiracetam', label: 'Levetiracetam' },
    { value: 'litio', label: 'Lítio' },
    { value: 'lopinavir-ritonavir', label: 'Lopinavir/ritonavir' },
    { value: 'olanzapina', label: 'Olanzapina' },
    { value: 'oxcarbazepina', label: 'Oxcarbazepina' },
    { value: 'paracetamol', label: 'Paracetamol' },
    { value: 'perampanel', label: 'Perampanel' },
    { value: 'fenobarbital', label: 'Fenobarbital' },
    { value: 'fenitoina', label: 'Fenitoína' },
    { value: 'pregabalina', label: 'Pregabalina' },
    { value: 'primidona', label: 'Primidona' },
    { value: 'rifampicina', label: 'Rifampicina' },
    { value: 'topiramato', label: 'Topiramato' },
    { value: 'outra', label: 'Outra' },
  ],
};

const opcoesBipolarSlct1 = {
  'quero-iniciar-com-lamictal': [
    { value: 'quero-iniciar-medicacao-concomitante', label: 'Quero iniciar medicação concomitante' },
    { value: 'quero-suspender-medicacao-concomitante', label: 'Quero suspender medicação concomitante' },
    { value: 'quero-iniciar-monoterapia', label: 'Quero iniciar monoterapia' },
  ],
  'paciente-ja-toma-lamictal': [
    { value: 'quero-iniciar-medicacao-concomitante', label: 'Quero iniciar medicação concomitante' },
    { value: 'quero-suspender-medicacao-concomitante', label: 'Quero suspender medicação concomitante' },
  ],
};

const opcoesBipolarSlct2 = {
  'quero-iniciar-com-lamictal_quero-iniciar-medicacao-concomitante': [
    { value: 'quero-iniciar-medicacao-concomitante', label: 'Quero iniciar medicação concomitante' },
    { value: 'quero-suspender-medicacao-concomitante', label: 'Quero suspender medicação concomitante' },
    { value: 'quero-iniciar-monoterapia', label: 'Quero iniciar monoterapia' },
  ],
  'quero-iniciar-com-lamictal_quero-iniciar-medicacao-concomitante': [
    { value: 'quero-iniciar-medicacao-concomitante', label: 'Quero iniciar medicação concomitante' },
    { value: 'quero-suspender-medicacao-concomitante', label: 'Quero suspender medicação concomitante' },
    { value: 'quero-iniciar-monoterapia', label: 'Quero iniciar monoterapia' },
  ],
};

const choices1 = new Choices('#medicamento-concomitante', {
  removeItemButton: true,
  placeholder: true,
  placeholderValue: 'Selecione',
  searchEnabled: false,
  shouldSort: false,
  position: 'top',
  itemSelectText: '',
});
const choices2 = new Choices('#bipolar-select-1', {
  removeItemButton: true,
  placeholder: true,
  placeholderValue: 'Selecione',
  searchEnabled: false,
  shouldSort: false,
  position: 'top',
  itemSelectText: '',
});
const choices3 = new Choices('#bipolar-select-2', {
  removeItemButton: true,
  placeholder: true,
  placeholderValue: 'Selecione',
  searchEnabled: false,
  shouldSort: false,
  position: 'top',
  itemSelectText: '',
});
const choices4 = new Choices('#bipolar-select-3', {
  removeItemButton: true,
  placeholder: true,
  placeholderValue: 'Selecione',
  searchEnabled: false,
  shouldSort: false,
  position: 'top',
  itemSelectText: '',
});

function atualizarOpcoes(idade) {
  choices1.removeActiveItems();
  choices1.clearChoices();
  choices1.setChoices(opcoesPorIdade[idade], 'value', 'label', true);
}

function atualizarOpcoesBipolar(slct1, slct2) {
  if(slct1) {
    choices3.removeActiveItems();
    choices3.clearChoices();
    choices3.setChoices(opcoesBipolarSlct1[slct1], 'value', 'label', true);
  } else  if (slct1 && slct2) {
    choices4.removeActiveItems();
    choices4.clearChoices();
    choices4.setChoices(opcoesBipolarSlct2[slct1+'_'+slct2], 'value', 'label', true);
  }
  
  
}

function checkFormEpilepsiaValidity() {
  const $form = $('.section-form-epilepsia form');
  const $submitButton = $form.find('.jsSubmitEpilepsia');
  
  const isAgeSelected = $form.find('input[name="idade"]:checked').length > 0;
  
  const isValproatoSelected = $form.find('input[name="valproato"]:checked').length > 0;
  
  const isMedicationSelected = $form.find('#medicamento-concomitante').val() !== null && $form.find('#medicamento-concomitante').val() !== '';

  if (isAgeSelected && isValproatoSelected && isMedicationSelected) {
    $submitButton.removeClass('disabled');
  } else {
    $submitButton.addClass('disabled'); 
  }
}

function checkFormBipolarValidity() {
  const $form = $('.section-form-bipolar form');
  const $submitButton = $form.find('.jsSubmitBipolar');
  
  const is1Selected = $form.find('#bipolar-select-1').val() !== null && $form.find('#bipolar-select-1').val() !== '';
  const is2Selected = $form.find('#bipolar-select-2').val() !== null && $form.find('#bipolar-select-2').val() !== '';
  const is3Selected = $form.find('#bipolar-select-3').val() !== null && $form.find('#bipolar-select-3').val() !== '';

  if (is1Selected && is2Selected && is3Selected) {
    $submitButton.removeClass('disabled');
  } else {
    $submitButton.addClass('disabled'); 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("select");

  selects.forEach(select => {
    select.selectedIndex = -1;
  });
});

$(document).ready(function() {
  document.querySelector('#form-epilepsia').reset();

  // var swiper3 = new Swiper(".swiper-materiais", {
  //   slidesPerView: "auto",
  //   navigation: {
  //     nextEl: ".swiper-button-next-materiais",
  //     prevEl: ".swiper-button-prev-materiais",
  //   },
  // });
  
  $(".jsOpenMenu").on("click", function() {
    $(".menu").addClass("active");
  });

  $(".menu__close").on("click", function() {
    $(".menu").removeClass("active");
  });

  $('.section-form-epilepsia form input[type="radio"]').on('change', checkFormEpilepsiaValidity);
  $('#medicamento-concomitante').on('change', function() {
    checkFormEpilepsiaValidity();
  });

  $('#bipolar-select-1, #bipolar-select-2, #bipolar-select-3').on('change', function() {
    checkFormBipolarValidity();
    let slct1 = $("#bipolar-select-1").val();
    let slct2 = $("#bipolar-select-2").val();
    atualizarOpcoesBipolar(slct1, slct2);
  });

  $('input[name="idade"]').on('change', function() {
    let age = $(this).val();
    atualizarOpcoes(age);
    if(age === '2-12') {
      $('.jsPersona').addClass('age-2-12');
      $('.jsPersona').removeClass('age-12-18');
      $('.jsPersona').removeClass('epilepsia');
      $('.jsPersona').removeClass('bipolar'); 

      $('')
    } else if(age === '12-18') {
      $('.jsPersona').addClass('age-12-18');
      $('.jsPersona').removeClass('age-2-12');
      $('.jsPersona').removeClass('epilepsia');
      $('.jsPersona').removeClass('bipolar');
    } else if(age === '18') {
      $('.jsPersona').addClass('epilepsia');
      $('.jsPersona').removeClass('age-2-12');
      $('.jsPersona').removeClass('age-12-18');
      $('.jsPersona').removeClass('bipolar');
    }
  });

  $('.jsBtnEpilepsia').on("click", function() {
    $('.jsPersona').addClass('epilepsia');
    $('.jsPersona').removeClass('bipolar');

    $('.btnBack').addClass('active');
    $('.img-logo').addClass('active');

    $('#sct-inicio').fadeOut('fast', function() {
      $('#sct-form-epilepsia').fadeIn('medium');
    });
  });

  $('.jsBtnBipolar').on("click", function() {
    $('.jsPersona').addClass('bipolar');
    $('.jsPersona').removeClass('epilepsia');

    $('.btnBack').addClass('active');
    $('.img-logo').addClass('active');

    $('#sct-inicio').fadeOut('fast', function() {
      $('#sct-form-bipolar').fadeIn('medium');
    });
  });

  $('.jsBack').on("click", function() {
    if($('body').hasClass('default')) {
      if($('.jsPersona').hasClass('epilepsia') || $('.jsPersona').hasClass('age-2-12') || $('.jsPersona').hasClass('age-12-18')) {
        $('#sct-form-epilepsia').fadeOut('fast', function() {
          $('#sct-inicio').fadeIn('medium');
        });
      } else if($('.jsPersona').hasClass('bipolar')) {
        $('#sct-form-bipolar').fadeOut('fast', function() {
          $('#sct-inicio').fadeIn('medium');
        });
      } else {
        $('#sct-inicio').fadeIn('medium');
      }

      $('.jsPersona').removeClass('epilepsia');
      $('.jsPersona').removeClass('bipolar');
      $('.jsPersona').removeClass('age-2-12');
      $('.jsPersona').removeClass('age-12-18');

      $('.btnBack').removeClass('active');
      $('.img-logo').removeClass('active');

      document.querySelector('#form-epilepsia').reset();
      document.querySelector('#form-bipolar').reset();

      document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = -1;
      });
      
      choices1.removeActiveItems();
      choices2.removeActiveItems();
      choices3.removeActiveItems();
      choices4.removeActiveItems();

      checkFormEpilepsiaValidity();
      checkFormBipolarValidity();
    }
    else if($('body').hasClass('epilepsia')) {
      $('body').removeClass('epilepsia').addClass('default');
      $('.jsPersona').removeClass('active');
      $('#sct-slides-epilepsia, #sct-slides-epilepsia .slide').fadeOut('fast', function() {
        $('#sct-form-epilepsia').fadeIn('medium');
      });
    }
    else if($('body').hasClass('bipolar')) {
      $('body').removeClass('bipolar').addClass('default');
      $('.jsPersona').removeClass('active');
      $('#sct-slides-bipolar, #sct-slides-bipolar .slide').fadeOut('fast', function() {
        $('#sct-form-bipolar').fadeIn('medium');
      });
    }
  });

  $('.jsSubmitEpilepsia').on('click', function() {
    const $form = $('.section-form-epilepsia form');

    let age = $form.find('input[name="idade"]:checked').val();
    let valproato = $form.find('input[name="valproato"]:checked').val();
    let medication = $form.find('#medicamento-concomitante').val()

    $('#sct-form-epilepsia').fadeOut('fast', function() {
      $('#sct-slides-epilepsia').fadeIn('medium');
      $(`.slide[data-slide=epilepsia_${age}_${valproato}_${medication}]`).fadeIn('medium');
    });

    $('body').removeClass('default bipolar').addClass('epilepsia');

    $('.jsPersona').addClass('active');
  });

  
  $('.jsSubmitBipolar').on('click', function() {
    const $form = $('.section-form-bipolar form');

    let select1 = $form.find('#bipolar-select-1').val();
    let select2 = $form.find('#bipolar-select-2').val();
    let select3 = $form.find('#bipolar-select-3').val()

    $('#sct-form-bipolar').fadeOut('fast', function() {
      $('#sct-slides-bipolar').fadeIn('medium');
      $(`.slide[data-slide=bipolar_${select1}_${select2}_${select3}]`).fadeIn('medium');
    });

    $('body').removeClass('default epilepsia').addClass('bipolar');

    $('.jsPersona').addClass('active');
  });

  $('.jsContentMore').on('click', function() {
    $(this).parent().parent().parent().addClass('switch');
  });

  $('.jsContentBack').on('click', function() {
    $(this).parent().parent().parent().removeClass('switch');
  });
});
