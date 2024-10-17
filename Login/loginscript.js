function changeLanguage(language) {
  var translations = {
      en: { 
          "description": "Welcome, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          "tab-1": "TC Identity",
          "tab-2": "Foreign Identity",
          "tab-3": "SMS",
          "tab-4": "Email",
          "tc-label": "TC Identity Number",
          "name-label": "Name",
          "surname-label": "Surname",
          "birth-day-label": "Day",
          "birth-month-label": "Month",
          "birth-year-label": "Year",
          "connect-button": "Connect",
          "agreement-label": "I Accept the Agreement.",
          "share-info-label": "I Allow to Share My Information.",
          "foreign-id-label": "Passport Identification Number",
          "foreign-name-label": "Name",
          "foreign-surname-label": "Surname",
          "foreign-birth-day-label": "Day",
          "foreign-birth-month-label": "Month",
          "foreign-birth-year-label": "Year",
          "foreign-connect-button": "Connect",
          "foreign-agreement-label": "I Accept the Agreement.",
          "foreign-share-info-label": "I Allow to Share My Information.",
          "sms-number-label": "SMS Number",
          "sms-name-label": "Name",
          "sms-surname-label": "Surname",
          "sms-connect-button": "Connect",
          "sms-agreement-label": "I Accept the Agreement.",
          "sms-share-info-label": "I Allow to Share My Information.",
          "email-label": "Email",
          "email-connect-button": "Connect",
          "email-agreement-label": "I Accept the Agreement.",
          "email-share-info-label": "I Allow to Share My Information.",
          "phone-number": "0242 606 24 24",
          "months": [
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
          ]
      },
      tr: {  
          "description": "Hoş geldiniz, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          "tab-1": "TC Kimlik",
          "tab-2": "Yabancı Kimlik",
          "tab-3": "SMS",
          "tab-4": "E-posta",
          "tc-label": "TC Kimlik Numarası",
          "name-label": "İsim",
          "surname-label": "Soyisim",
          "birth-day-label": "Gün",
          "birth-month-label": "Ay",
          "birth-year-label": "Yıl",
          "connect-button": "Bağlan",
          "agreement-label": "Sözleşmeyi kabul ediyorum.",
          "share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
          "foreign-id-label": "Pasaport Kimlik Numarası",
          "foreign-name-label": "İsim",
          "foreign-surname-label": "Soyisim",
          "foreign-birth-day-label": "Gün",
          "foreign-birth-month-label": "Ay",
          "foreign-birth-year-label": "Yıl",
          "foreign-connect-button": "Bağlan",
          "foreign-agreement-label": "Sözleşmeyi kabul ediyorum.",
          "foreign-share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
          "sms-number-label": "SMS Numarası",
          "sms-name-label": "İsim",
          "sms-surname-label": "Soyisim",
          "sms-connect-button": "Bağlan",
          "sms-agreement-label": "Sözleşmeyi kabul ediyorum.",
          "sms-share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
          "email-label": "E-posta",
          "email-connect-button": "Bağlan",
          "email-agreement-label": "Sözleşmeyi kabul ediyorum.",
          "email-share-info-label": "Bilgilerimin paylaşılmasına izin veriyorum.",
          "phone-number": "0242 606 24 24",
          "months": [
              "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
              "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
          ]
      },
      de: {
          "description": "Willkommen, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          "tab-1": "TC Identität",
          "tab-2": "Fremde Identität",
          "tab-3": "SMS",
          " tab-4": "E-Mail",
          "tc-label": "TC Identitätsnummer",
          "name-label": "Name",
          "surname-label": "Nachname",
          "birth-day-label": "Tag",
          "birth-month-label": "Monat",
          "birth-year-label": "Jahr",
          "connect-button": "Verbinden",
          "agreement-label": "Ich akzeptiere die Vereinbarung.",
          "share-info-label": "Ich erlaube das Teilen meiner Informationen.",
          "foreign-id-label": "Pass-Identifikationsnummer",
          "foreign-name-label": "Name",
          "foreign-surname-label": "Nachname",
          "foreign-birth-day-label": "Tag",
          "foreign-birth-month-label": "Monat",
          "foreign-birth-year-label": "jahr",
          "foreign-connect-button": "Verbinden",
          "foreign-agreement-label": "Ich akzeptiere die Vereinbarung.",
          "foreign-share-info-label": "Ich erlaube das Teilen meiner Informationen.",
          "sms-number-label": "SMS Nummer",
          "sms-name-label": "Name",
          "sms-surname-label": "Nachname",
          "sms-connect-button": "Verbinden",
          "sms-agreement-label": "Ich akzeptiere die Vereinbarung.",
          "sms-share-info-label": "Ich erlaube das Teilen meiner Informationen.",
          "email-label": "E-Mail",
          "email-connect-button": "Verbinden",
          "email-agreement-label": "Ich akzeptiere die Vereinbarung.",
          "email-share-info-label": "Ich erlaube das Teilen meiner Informationen.",
          "phone-number": "0242 606 24 24",
          "months": [
              "Januar", "Februar", "März", "April", "Mai", "Juni",
              "Juli", "August", "September", "Oktober", "November", "Dezember"
          ]
      }
  };
  
  var translation = translations[language];
  document.getElementById("description").innerText = translation.description;
  document.getElementById("tab-1").innerText = translation["tab-1"];
  document.getElementById("tab-2").innerText = translation["tab-2"];
  document.getElementById("tab-3").innerText = translation["tab-3"];
  document.getElementById("tab-4").innerText = translation ["tab-4"];
  document.getElementById("tc-label").innerText = translation["tc-label"];
  document.getElementById("name-label").innerText = translation["name-label"];
  document.getElementById("surname-label").innerText = translation["surname-label"];
  document.getElementById("birth-day-label").innerText = translation["birth-day-label"];
  document.getElementById("birth-month-label").innerText = translation["birth-month-label"];
  document.getElementById("birth-year-label").innerText = translation["birth-year-label"];
  document.getElementById("connect-button").innerText = translation["connect-button"];
  document.getElementById("agreement-label").innerText = translation["agreement-label"];
  document.getElementById("share-info-label").innerText = translation["share-info-label"];
  document.getElementById("foreign-id-label").innerText = translation["foreign-id-label"];
  document.getElementById("foreign-name-label").innerText = translation["foreign-name-label"];
  document.getElementById("foreign-surname-label").innerText = translation["foreign-surname-label"];
  document.getElementById("foreign-birth-day-label").innerText = translation["foreign-birth-day-label"];
  document.getElementById("foreign-birth-month-label").innerText = translation["foreign-birth-month-label"];
  document.getElementById("foreign-birth-year-label").innerText = translation["foreign-birth-year-label"];
  document.getElementById("foreign-connect-button").innerText = translation["foreign-connect-button"];
  document.getElementById("foreign-agreement-label").innerText = translation["foreign-agreement-label"];
  document.getElementById("foreign-share-info-label").innerText = translation["foreign-share-info-label"];
  document.getElementById("sms-number-label").innerText = translation["sms-number-label"];
  document.getElementById("sms-name-label").innerText = translation["sms-name-label"];
  document.getElementById("sms-surname-label").innerText = translation["sms-surname-label"];
  document.getElementById("sms-connect-button").innerText = translation["sms-connect-button"];
  document.getElementById("sms-agreement-label").innerText = translation["sms-agreement-label"];
  document.getElementById("sms-share-info-label").innerText = translation["sms-share-info-label"];
  document.getElementById("email-label").innerText = translation["email-label"];
  document.getElementById("email-connect-button").innerText = translation["email-connect-button"];
  document.getElementById("email-agreement-label").innerText = translation["email-agreement-label"];
  document.getElementById("email-share-info-label").innerText = translation["email-share-info-label"];
  document.getElementById("phone-number").innerText = translation["phone-number"];

  const flagSrc = {
      en: 'assets/image/eng.png',
      tr: 'assets/image/tr.jpg',
      de: 'assets/image/alm.jpg'
  };

  document.getElementById("selected-flag").src = flagSrc[language];

  // Ay isimlerini güncelle
  const monthSelect = document.getElementById("birth-month");
  monthSelect.innerHTML = '';
  translation.months.forEach((month, index) => {
      const option = document.createElement('option');
      option.value = index + 1;
      option.text = month;
      monthSelect.appendChild(option);
  });

  const foreignMonthSelect = document.getElementById("foreign-birth-month");
  foreignMonthSelect.innerHTML = '';
  translation.months.forEach((month, index) => {
      const option = document.createElement('option');
      option.value = index + 1;
      option.text = month;
      foreignMonthSelect.appendChild(option);
  });
}

function showForm(formId) {
const forms = document.querySelectorAll('.form');
forms.forEach(form => {
  form.style.display = 'none';
});
document.querySelector(`.${formId}-form`).style.display = 'block';
clearForm(); // Form verilerini temizle
}

document.querySelectorAll('.tabs button').forEach((button, index) => {
  button.addEventListener('click', () => {
      const formIds = ['tc-identity', 'foreign-identity', 'sms', 'email'];
      showForm(formIds[index]);
      document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});
changeLanguage('en');



// Form verilerini temizleme fonksiyonu
function clearForm() {
// Form input alanlarını temizle
document.querySelectorAll('.form input').forEach(input => {
  input.value = '';
});

// Form checkbox'larını temizle
document.querySelectorAll('.form input[type="checkbox"]').forEach(checkbox => {
  checkbox.checked = false;
});
}

// Sayfa değiştiğinde form verilerini temizle
window.addEventListener('beforeunload', clearForm);

// Tab butonlarına tıklandığında form verilerini temizle
document.querySelectorAll('.tabs button').forEach(button => {
button.addEventListener('click', clearForm);
});

// Formu gönderme fonksiyonu
function submitForm(formId) {
const form = document.querySelector(`.${formId}-form`);
const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="date"]');
const checkboxes = form.querySelectorAll('input[type="checkbox"]');

// Form input alanlarını kontrol et
let inputError = false;
inputs.forEach(input => {
  if (input.type === 'date' && input.value === '') {
    inputError = true;
    input.style.border = '1px solid red';
  } else if (input.type !== 'date' && input.value.trim() === '') {
    inputError = true;
    input.style.border = '1px solid red';
  } else {
    input.style.border = '';
  }
});

// Form checkbox'larını kontrol et
let checkboxError = false;
checkboxes.forEach(checkbox => {
  if (!checkbox.checked) {
    checkboxError = true;
    checkbox.style.border = '1px solid red';
  } else {
    checkbox.style.border = '';
  }
});

// Hata varsa formu gönderme
if (inputError || checkboxError) {
  alert('Lütfen tüm alanları doldurun ve Sözleşmeleri kabul edin.');

  return false;
}

// Formu gönder
alert('Giriş Başarılı!');

return true;
}
// Form gönderme butonlarına tıklandığında formu gönder
document.querySelectorAll('.btn').forEach(button => {
button.addEventListener('click', event => {
  event.preventDefault();
  const formId = button.id === 'connect-button' ? 'tc-identity' : button.id === 'foreign-connect-button' ? 'foreign-identity' : button.id === 'sms-connect-button' ? 'sms' : 'email';
  submitForm(formId);
});
});


// Add this to your JavaScript file
const modal = document.querySelector('.modal');
const modalText = document.querySelector('#modal-text');

document.querySelectorAll('.checkbox-container label').forEach(label => {
label.addEventListener('click', event => {
  const checkbox = event.target.previousElementSibling;
  if (!checkbox.checked) {
    const checkboxText = event.target.textContent;
    modalText.textContent = checkboxText;
    modal.style.display = 'block';
  }
});
});

document.querySelector('.close').addEventListener('click', () => {
modal.style.display = 'none';
});


// Formu gönderme fonksiyonu
function submitForm(formId) {
  const form = document.querySelector(`.${formId}-form`);
  const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], select');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');

  // Form input alanlarını kontrol et
  let inputError = false;
  inputs.forEach(input => {
      if (input.tagName === 'SELECT' && input.value === '') {
          inputError = true;
          input.style.border = '1px solid red';
      } else if (input.type !== 'date' && input.value.trim() === '') {
          inputError = true;
          input.style.border = '1px solid red';
      } else {
          input.style.border = '';
      }
  });

  // Form checkbox'larını kontrol et
  let checkboxError = false;
  checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
          checkboxError = true;
          checkbox.style.border = '1px solid red';
      } else {
          checkbox.style.border = '';
      }
  });

  // Hata varsa formu gönderme
  if (inputError || checkboxError) {
      alert('Lütfen tüm alanları doldurun ve Sözleşmeleri kabul edin.');
      return false;
  }

  // Formu gönder
  alert('Giriş Başarılı!');
  return true;
}




// Ay ve yıl değiştiğinde günleri güncelle
document.querySelectorAll('#birth-month, #birth-year').forEach(select => {
  select.addEventListener('change', () => {
      const month = document.querySelector('#birth-month').value;
      const year = document.querySelector('#birth-year').value;
      const days = getDaysInMonth(month, year);
      const daySelect = document.querySelector('#birth-day');

      // Günleri temizle
      daySelect.innerHTML = '';

      // Günleri oluştur
      for (let i = 1; i <= days; i++) {
          const option = document.createElement('option');
          option.value = i;
          option.text = i;
          daySelect.appendChild(option);
      }
  });
});

// Ay ve yıl değiştiğinde günleri güncelle
document.querySelector('#birth-year').dispatchEvent(new Event('change'));

// Ay ve yıl için günleri hesapla
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}


// Ay ve yıl değiştiğinde günleri güncelle
document.querySelectorAll('#foreign-birth-month, #foreign-birth-year').forEach(select => {
  select.addEventListener('change', () => {
      const month = document.querySelector('#foreign-birth-month').value;
      const year = document.querySelector('#foreign-birth-year').value;
      const days = getDaysInMonth(month, year);
      const daySelect = document.querySelector('#foreign-birth-day');

      // Günleri temizle
      daySelect.innerHTML = '';

      // Günleri oluştur
      for (let i = 1; i <= days; i++) {
          const option = document.createElement('option');
          option.value = i;
          option.text = i;
          daySelect.appendChild(option);
      }
  });
});

// Ay ve yıl değiştiğinde günleri güncelle
document.querySelector('#foreign-birth-year').dispatchEvent(new Event('change'));