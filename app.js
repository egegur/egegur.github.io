document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.header nav');
if(menuButton&&nav){
  const setOpen=open=>{nav.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');};
  menuButton.addEventListener('click',()=>setOpen(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false);});
}

const projects={
  baas:{category:'GARANTİ BBVA · BAAS & EMBEDDED FINANCE',title:'Finans, hayatın akışında.',sections:[['Çalışmanın odağı','E-ticaret, oyun ve fintech platformlarının finansal hizmetlere API üzerinden erişebilmesi. Finansal deneyimleri, kullanıcının bulunduğu platforma taşımak.'],['Benim rolüm','Garanti BBVA’da Service Banking ve Embedded Finance alanlarında ürün stratejisi ve uçtan uca yürütme liderliği. İş ihtiyaçlarıyla teknik ekipleri ortak bir hedefte buluşturmak.'],['Ürün sorusu','Bir finansal hizmeti farklı platformlara taşırken deneyimi nasıl sade, güvenli ve tutarlı tutabiliriz?']]},
  ozgurkart:{category:'KURUMİÇİ GİRİŞİMCİLİK · ÖZGÜRKART',title:'Özgürlük, güvenle başlar.',sections:[['Fikir','Ailelerin çocuklarına güvenli ve kontrollü bir harcama ekosistemi sunması için geliştirilen kart ürünü konsepti.'],['Hikâyesi','Garanti BBVA Management Trainee ekibiyle Kurumiçi Girişimcilik Yarışması’nda sunduğumuz ve ödül kazandığımız proje.'],['Ürün sorusu','Çocukların bağımsızlığını desteklerken ailelerin ihtiyaç duyduğu kontrolü nasıl sağlayabiliriz?']]},
  tech:{category:'ODTÜ · TOPLULUK & GİRİŞİMCİLİK',title:'İnsanları bir araya getirmek.',sections:[['Fikir','ODTÜ öğrencileri ile Teknokent girişimleri arasında bir köprü kurmak.'],['Benim rolüm','Beş arkadaşımla birlikte Tech For Startup topluluğunu kurdum. Üniversite ve girişimcilik ekosistemi arasında bağlantılar geliştirmeye odaklandık.'],['Yolculuktaki yeri','Girişimcilik dünyasına yakından bakmamı ve kendi yönümü sorgulamamı sağlayan ilk deneyimlerimden biri.']]},
  hobo:{category:'HOBO · İLK GİRİŞİM DENEYİMİ',title:'Her fikir, bir öğrenme alanı.',sections:[['Fikir','İnovasyon odaklı holdinglerde birimler arası iletişimi ve iş geliştirmeyi destekleyecek bir uygulama.'],['Süreç','Teknik yetersizlikler ve ekip içi anlaşmazlıklar nedeniyle proje sonlandı. Bu deneyim, girişimcilik yolculuğumun önemli bir parçası oldu.'],['Geriye kalan soru','Bir ürün fikri kadar, o fikri hayata geçirecek ekibin uyumunu ve yetkinliklerini nasıl değerlendirmeliyiz?']]}
};
const dialog=document.querySelector('.project-dialog');
if(dialog){
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
    const p=projects[button.dataset.project];if(!p)return;
    document.querySelector('#dialog-category').textContent=p.category;
    document.querySelector('#dialog-title').textContent=p.title;
    const content=document.querySelector('#dialog-content');content.replaceChildren();
    p.sections.forEach(([title,body])=>{const h=document.createElement('h3');h.textContent=title;const para=document.createElement('p');para.textContent=body;content.append(h,para);});
    const note=document.createElement('p');note.className='dialog-note';note.textContent='Bu sayfadaki proje çizimleri, portfolyo için hazırlanmış temsili tasarımlardır.';content.append(note);
    dialog.showModal();
  }));
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
}
