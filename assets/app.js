
    const tabs=[...document.querySelectorAll('[data-tab]')];
    function selectTab(next,moveFocus=false){tabs.forEach(tab=>{const selected=tab.dataset.tab===next;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;document.getElementById('view-'+tab.dataset.tab).hidden=!selected;if(selected&&moveFocus)tab.focus()})}
    tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab.dataset.tab));tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;selectTab(tabs[next].dataset.tab,true)})});
    const menuBtn=document.getElementById('menuBtn'),navlinks=document.getElementById('navlinks');menuBtn.addEventListener('click',()=>{const open=navlinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu')});navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Open menu')}));
    document.querySelectorAll('.event-teaser').forEach(link=>{const href=link.getAttribute('href');if(!href.startsWith('#'))return;const target=document.querySelector(href);if(!target)return;link.addEventListener('mouseenter',()=>target.classList.add('is-highlighted'));link.addEventListener('mouseleave',()=>target.classList.remove('is-highlighted'));link.addEventListener('focus',()=>target.classList.add('is-highlighted'));link.addEventListener('blur',()=>target.classList.remove('is-highlighted'))});
  
if(document.getElementById("view-eu")&&location.hash==="#europe")selectTab("eu");

// Ticket selection stays on this site; final payment uses the supplied Stripe link.
(()=>{
  if(!document.querySelector('a[href^="https://buy.stripe.com/"]'))return;
  const modal=document.createElement('dialog');
  modal.className='checkout-dialog';
  modal.setAttribute('aria-labelledby','checkoutTitle');
  modal.innerHTML=`<div class="checkout-window">
    <div class="checkout-windowbar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="checkout-address">microcon27 / checkout</span><button type="button" class="checkout-close" aria-label="Close ticket window">×</button></div>
    <div class="checkout-body"><div class="eyebrow pink">YOUR SELECTED TICKET</div><h2 id="checkoutTitle"></h2><p class="checkout-place"></p><div class="checkout-summary"><span>Ticket price</span><strong class="checkout-price"></strong></div><ul class="checkout-features"></ul><p class="checkout-note">Availability and the final total are shown by Stripe before payment. Review the <a href="policies.html">event policies</a> first.</p><a class="checkout-continue" target="_blank" rel="noopener noreferrer">Continue to secure checkout <span aria-hidden="true">↗</span></a><button type="button" class="checkout-cancel">Keep browsing</button></div>
  </div>`;
  document.body.append(modal);
  const title=modal.querySelector('#checkoutTitle');
  const place=modal.querySelector('.checkout-place');
  const price=modal.querySelector('.checkout-price');
  const features=modal.querySelector('.checkout-features');
  const continueLink=modal.querySelector('.checkout-continue');
  let trigger=null;
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href^="https://buy.stripe.com/"]');
    if(!link||modal.contains(link))return;
    event.preventDefault();
    trigger=link;
    const card=link.closest('.price-card,.ticket-card,.hub-window,.content-card');
    const panel=link.closest('.ticket-panel');
    title.textContent=card?.querySelector('h3')?.textContent.trim()||'MicroCon 27 ticket';
    place.textContent=panel?.querySelector('.ticket-location')?.textContent.trim()||
      (card?.classList.contains('eu')||card?.classList.contains('eu-ticket')?'Aigues-Mortes, France':'San Diego, California');
    price.textContent=card?.querySelector('.price-value,.amount,.price')?.textContent.trim()||'Shown at checkout';
    features.replaceChildren();
    for(const item of card?.querySelectorAll('.feature-list li')||[]){
      const li=document.createElement('li');li.textContent=item.textContent.trim().replace(/^✓\s*/, '');features.append(li);
    }
    features.hidden=!features.childElementCount;
    continueLink.href=link.href;
    modal.showModal();
  });
  const close=()=>modal.close();
  modal.querySelector('.checkout-close').addEventListener('click',close);
  modal.querySelector('.checkout-cancel').addEventListener('click',close);
  modal.addEventListener('click',event=>{if(event.target===modal)close()});
  modal.addEventListener('close',()=>trigger?.focus());
  continueLink.addEventListener('click',()=>modal.close());
})();
