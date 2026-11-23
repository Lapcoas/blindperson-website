(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const S={get(k,d){try{return localStorage.getItem(k)??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const IS_MOBILE=window.matchMedia('(max-width: 900px)').matches;
const DEV={
 pc:IS_MOBILE?0:1,
 maxStars:IS_MOBILE?50:130,
 starArea:9000,
 ft:IS_MOBILE?28:0,
 dt:IS_MOBILE?2:1,
 links:IS_MOBILE?0:1,
 fl:IS_MOBILE?5:10,
 once:IS_MOBILE?1:0,
 swS:IS_MOBILE?220:240,
 swF:IS_MOBILE?110:140
};

/* ---------- ссылки (меняются здесь) ---------- */
const NICK='blindperson',USER='@uqerse';
const TG='https://t.me/uqerse';
const LINKS={
 anon:'https://t.me/voprosy?start=gpck9sc',
 tiktok:'https://tiktok.com/@watmeks',
 channel:'https://t.me/+Kv9WLXkQQSswNTRh',
 chat:'https://t.me/+eC4uOEC9UFM2OGRh'
};

const I={music:'M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',home:'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',grid:'M4 4h6.5v6.5H4zM13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4zM13.5 13.5H20V20h-6.5z',star:'m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',chat:'M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',send:'M21 3 3 10.2l6.4 2.4L11.8 20zM9.4 12.6 21 3',
gear:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
sun:'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',left:'M15 5l-7 7 7 7',right:'M9 5l7 7-7 7',up:'M12 19V5M5 12l7-7 7 7',x:'M6 6l12 12M18 6 6 18',copy:'M8 8h12v12H8zM4 16V4h12',rot:'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',
gem:'M6 3h12l4 6-10 12L2 9zM2 9h20M9 3 7 9l5 12 5-12-2-6',shield:'M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6zM8.5 12l2.5 2.5 4.5-5',bank:'M3 10 12 4l9 6M5 10v8M9.7 10v8M14.3 10v8M19 10v8M3 20h18',monitor:'M3 5h18v11H3zM8 20h8M12 16v4',mega:'M3 11v2a1 1 0 0 0 1 1h2l8 4V6L6 10H4a1 1 0 0 0-1 1zM18 9a4 4 0 0 1 0 6',bot:'M5 8h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM12 8V4M8.5 13h.01M15.5 13h.01M9 16.5h6',
users:'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 19v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8',globe:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',spark:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16v4M17 18h4',type:'M5 7V5h14v2M12 5v14M9 19h6',ext:'M7 17 17 7M8 7h9v9',share:'M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13',grid2:'M5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5v-4A1.5 1.5 0 0 1 5.5 4zM14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4A1.5 1.5 0 0 1 14.5 4zM5.5 13h4A1.5 1.5 0 0 1 11 14.5v4A1.5 1.5 0 0 1 9.5 20h-4A1.5 1.5 0 0 1 4 18.5v-4A1.5 1.5 0 0 1 5.5 13zM14.5 13h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5z',bubbles:'M10 3.5C6.4 3.5 3.5 5.9 3.5 8.9c0 1.4.6 2.7 1.7 3.7l-.6 2.3 2.4-1.2M14.5 8.5c3.3 0 6 2.2 6 5s-2.7 5-6 5c-.7 0-1.4-.1-2-.3l-3.2 1.5.7-2.7c-1.3-.9-2-2.3-2-3.5 0-2.8 2.7-5 6-5z',pcircle:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6.2 18.2c1.2-2 3.3-3 5.8-3s4.6 1 5.8 3',house:'M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-3.2V15a1.3 1.3 0 0 0-1.3-1.3h-4a1.3 1.3 0 0 0-1.3 1.3v5.5H5.5A1.5 1.5 0 0 1 4 19z',bag:'M5 8h14l-1 11.2a1.5 1.5 0 0 1-1.5 1.3h-9A1.5 1.5 0 0 1 6 19.2zM9 8V7a3 3 0 0 1 6 0v1',star2:'M12 3.8l2.5 5.1 5.6.8-4.05 3.95.95 5.6L12 16.6l-5 2.65.95-5.6L3.9 9.7l5.6-.8z',bubble:'M12 4c4.7 0 8.5 3.2 8.5 7.2S16.7 18.4 12 18.4c-.9 0-1.8-.1-2.6-.3L5.2 20l.9-3.4C4.6 15.3 3.5 13.4 3.5 11.2 3.5 7.2 7.3 4 12 4z',person:'M12 12.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2zM4.8 20c.6-3.4 3.7-5.2 7.2-5.2s6.6 1.8 7.2 5.2',sliders:'M4 7h5.5M14.5 7H20M4 17h1.5M10.5 17H20M12 4.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 14.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z',search:'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',tag:'M3 12V4h8l10 10-8 8zM7.5 8.5h.01',card:'M3 6h18v12H3zM3 10h18M7 15h3',wallet:'M3 7a2 2 0 0 1 2-2h13v3M3 7v11a2 2 0 0 0 2 2h15V8H5a2 2 0 0 1-2-1zM16 14h2'};

const ic=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${I[n]}"/></svg>`;
$$('[data-ic]').forEach(e=>e.innerHTML=ic(e.dataset.ic));

/* ---------- English strings (RU lives in the HTML as default) ---------- */
const E={on:'online',on2:'online',b1:'Alias · Nickname · Username',l2:'Nickname',l4:'Username tg',lab:'About me:',
about:'Hi! I\'m blindperson. All my links and contacts are here: Telegram, anonymous chat, channel, chat and TikTok. Message me any time.',
wr:'Message me',oc:'Open contacts',ql:'Quick links',q1:'Anonymous chat',q2:'Channel',q3:'Chat',q4:'TikTok',
rvh:'Reviews',rvt:'Reviews and feedback live in the channel and the chat. Take a look before you write.',rvc:'Open channel',rvch:'Open chat',
k1:'Contact · @uqerse',k2:'Transfer to account',k3:'Anonymous chat',k4:'Channel',k5:'Chat',k6:'TikTok',vc:'Save contact',
n1:'Home',n2:'Reviews',n3:'Contacts',n4:'Settings',
sl:'Language',san:'Animations',sst:'Starry background',stx:'Large text',pf1:'Floating symbols',pf2:'Film grain',pf3:'Cursor glow',pf4:'Vibration',
fxh:'Special effects',fx:'Effects brightness',fs:'Text size',sh:'Share the site',rs:'Reset settings'};
const FR=`Как связаться?|Напиши в Telegram @uqerse.
Можно ли написать анонимно?|Да, через анонимный чат во вкладке «Контакты».
Где канал и чат?|Ссылки на них — во вкладке «Контакты».
Где отзывы?|Во вкладке «Отзывы».
Где TikTok?|Тоже в «Контактах».
Что значит «Перевод на аккаунт»?|Кнопка ведёт в личные сообщения @uqerse.`.split('\n').map(x=>x.split('|'));
const FE=`How can I reach you?|Message me on Telegram @uqerse.
Can I write anonymously?|Yes, use the anonymous chat in the "Contacts" tab.
Where are the channel and chat?|Links are in the "Contacts" tab.
Where are the reviews?|In the "Reviews" tab.
Where is TikTok?|Also in "Contacts".
What does "Transfer to account" do?|It opens a private chat with @uqerse.`.split('\n').map(x=>x.split('|'));
const LG=[['en','English'],['ru','Русский'],['zh','中文'],['es','Español'],['hi','हिन्दी'],['ar','العربية'],['pt','Português'],['bn','বাংলা'],['fr','Français'],['de','Deutsch'],['ja','日本語'],['ko','한국어'],['tr','Türkçe'],['it','Italiano'],['vi','Tiếng Việt'],['pl','Polski'],['uk','Українська'],['id','Indonesia'],['th','ไทย'],['nl','Nederlands'],['fa','فارسی'],['he','עברית'],['sv','Svenska'],['cs','Čeština'],['ro','Română'],['el','Ελληνικά'],['hu','Magyar']];
$$('[data-k]').forEach(e=>e.dataset.ru=e.innerHTML);
let lang=S.get('lang',/^ru|^uk|^be|^kk/.test(navigator.language)?'ru':'en'),anim=S.get('an','1')==='1',stars=S.get('sk','1')==='1',tab='home',NV=0,fd=1,mx=0;
const ru=()=>lang==='ru',P=(r,e)=>ru()?r:e,nav=$('#nav'),ts=$('#ts'),md=$('#md'),bx=$('#bx'),pg=$('#pg'),upb=$('#up'),rg=$('.ring');
$('#ls').innerHTML=LG.map(l=>`<option value="${l[0]}">${l[1]}</option>`).join('');

/* ---------- reveal on scroll ---------- */
const obs=new IntersectionObserver(es=>es.forEach(e=>{const t=e.target;
 if(e.isIntersecting){t.classList.add('in');if(DEV.once)obs.unobserve(t)}
 else if(!DEV.once){t.style.setProperty('--ty',e.boundingClientRect.top<0?'-34px':'34px');t.classList.remove('in')}}),{threshold:.08});
const rv=el=>{el.classList.add('rv');obs.observe(el)};

function render(){
$('#faq').innerHTML=(ru()?FR:FE).map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
$$('.blk,.wb,.bl,.grp,h2,.lab,.hero,.logo,.mq,.chips').forEach(e=>{if(!e.classList.contains('rv'))rv(e)})}
function apply(){document.documentElement.lang=lang;document.documentElement.dir=['ar','fa','he'].includes(lang)?'rtl':'ltr';
$$('[data-k]').forEach(e=>{e.innerHTML=ru()?e.dataset.ru:(E[e.dataset.k]||e.dataset.ru)});
$$('#lg button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));$('#ls').value=lang;S.set('lang',lang);render();ui()}
function setLang(l){lang=l;apply()}
$$('#lg button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));$('#ls').onchange=e=>setLang(e.target.value);

/* ---------- settings ---------- */
function setAnim(v){anim=v;document.body.classList.toggle('na',!v);$('#an').checked=v;S.set('an',v?'1':'0');loop();bk()}
function setStars(v){stars=v;$('#sky').style.display=v?'':'none';$('#sk').checked=v;S.set('sk',v?'1':'0');loop()}
$('#an').onchange=e=>setAnim(e.target.checked);$('#sk').onchange=e=>setStars(e.target.checked);
$('#lt').checked=S.get('lt','0')==='1';document.documentElement.classList.toggle('lg',$('#lt').checked);
$('#lt').onchange=e=>{document.documentElement.classList.toggle('lg',e.target.checked);S.set('lt',e.target.checked?'1':'0');fd=1;mx=0;bd.forEach(b=>b.w=0);fit()};

/* ---------- navigation ---------- */
function go(id,np){tab=id;if(!np&&location.hash!=='#'+id)try{history.pushState(null,'','#'+id)}catch(e){}
swap(id);
$$('#nav button').forEach(b=>{b.classList.toggle('on',b.dataset.go===id);b.setAttribute('aria-current',b.dataset.go===id?'page':'false')});
upd();place();loop();bk();pl.classList.remove('sq');void pl.offsetWidth;pl.classList.add('sq')}
$$('[data-go]').forEach(b=>b.onclick=()=>{NV=1;go(b.dataset.go)});
let tkp=0;
function upd(){tkp=0;const y=scrollY;nav.classList.toggle('show',y>40||tab!=='home');if(!mx)mx=document.documentElement.scrollHeight-innerHeight;pg.style.transform=`scaleX(${mx>0?Math.min(1,y/mx):0})`;upb.classList.toggle('show',y>400)}
upb.onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>{if(!tkp){tkp=1;requestAnimationFrame(upd)}},{passive:true});
new ResizeObserver(()=>{mx=0}).observe($('.w'));

/* ---------- modal (search) ---------- */
const open=h=>{bx.innerHTML=h;md.classList.add('on');$$('.x').forEach(x=>x.onclick=close)},close=()=>md.classList.remove('on');
md.onclick=e=>{if(e.target===md)close()};addEventListener('keydown',e=>{if(e.key==='Escape')close()});

/* ---------- starfield ---------- */
const cv=$('#sky'),cx=cv.getContext('2d');let W=0,H=0,ST=[],M=[],run=0,lt0=0;
function rs(){const w=innerWidth;if(w===W&&ST.length)return;W=cv.width=w;H=cv.height=innerHeight;
ST=Array.from({length:Math.min(DEV.maxStars,Math.round(W*H/DEV.starArea))},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.2+.3,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,p:Math.random()*6}))}
function dr(move){const dt=DEV.dt;cx.clearRect(0,0,W,H);
for(let i=0;i<ST.length;i++){const s=ST[i];if(move){s.x=(s.x+s.vx*dt+W)%W;s.y=(s.y+s.vy*dt+H)%H;s.p+=.02*dt}
cx.fillStyle=`rgba(216,180,254,${.16+.14*Math.sin(s.p)})`;cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill()}
if(DEV.links){cx.lineWidth=1;for(let i=0;i<ST.length;i++)for(let j=i+1;j<ST.length;j++){const a=ST[i],b=ST[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;if(d2<9025){cx.strokeStyle=`rgba(168,85,247,${.11*(1-Math.sqrt(d2)/95)})`;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}}
if(move){if(Math.random()<.014*dt&&M.length<3)M.push({x:Math.random()*W*.8,y:Math.random()*H*.4,t:0});
M=M.filter(m=>{m.t+=dt;m.x+=11*dt;m.y+=5*dt;const a=Math.max(0,1-m.t/50);cx.strokeStyle=`rgba(192,132,252,${a*.85})`;cx.lineWidth=1.6;cx.beginPath();cx.moveTo(m.x,m.y);cx.lineTo(m.x-70,m.y-32);cx.stroke();return a>0})}}
function frame(t){if(!run)return;requestAnimationFrame(frame);if(t-lt0<DEV.ft)return;lt0=t;dr(true)}
function loop(){if(!stars){run=0;cx.clearRect(0,0,W,H);return}
if(anim&&!document.hidden){if(!run){run=1;requestAnimationFrame(frame)}}else{run=0;dr(false)}}
let lw=innerWidth,rt;
addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(innerWidth===lw)return;lw=innerWidth;rs();loop();fd=1;mx=0;bd.forEach(b=>b.w=0);fit();place()},140)});

/* ---------- toast / copy ---------- */
function toast(m){ts.textContent=m;ts.classList.add('on');setTimeout(()=>ts.classList.remove('on'),1800)}
$('#cp').onclick=()=>{try{navigator.clipboard.writeText(USER)}catch(e){}toast(P('Скопировано','Copied'))};

/* ---------- small live bits ---------- */
const pl=document.createElement('i');pl.className='pl';nav.prepend(pl);
function place(){const b=$('#nav button.on');if(!b){pl.style.opacity=0;return}pl.style.opacity=1;pl.style.width=b.offsetWidth+'px';pl.style.height=b.offsetHeight+'px';pl.style.transform=`translate(${b.offsetLeft}px,${b.offsetTop}px)`}
new ResizeObserver(place).observe(nav);addEventListener('load',place);
const ld=$('#ld');
setTimeout(()=>{ld.classList.add('off');fd=1;fit();setTimeout(()=>toast((h=>h<5?P('Доброй ночи','Good night'):h<12?P('Доброе утро','Good morning'):h<18?P('Добрый день','Good afternoon'):P('Добрый вечер','Good evening'))(new Date().getHours())),900);setTimeout(()=>ld.remove(),700)},anim?1000:100);
{const g=['✦','◈','◇','✧','◆','✦','◈','◇','✧','◆'].slice(0,DEV.fl);g.forEach(g=>{const f=document.createElement('i');f.className='fl';f.textContent=g;f.style.cssText=`left:${Math.random()*92}vw;font-size:${14+Math.random()*16}px;animation-duration:${22+Math.random()*26}s;animation-delay:-${Math.random()*30}s`;document.body.append(f)})}
document.addEventListener('pointerdown',e=>{const t=e.target.closest&&e.target.closest('.wb,.bl,.chips>*');if(!t)return;
try{!document.body.classList.contains('no-hp')&&navigator.vibrate&&navigator.vibrate(8)}catch(_){}
const r=t.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,d=document.createElement('i');d.className='rp';d.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;t.appendChild(d);setTimeout(()=>d.remove(),650)},{passive:true});

/* ---------- logo fit ---------- */
function fit(){const L=$('.logo');if(!L||!L.offsetParent)return;const s=L.firstElementChild;s.style.fontSize='100px';s.style.fontSize=(100*L.clientWidth/s.getBoundingClientRect().width)+'px';fd=0}
document.fonts&&document.fonts.ready.then(()=>{fd=1;fit()});

/* ---------- tab swap ---------- */
const pos={};let sw;
function swap(id){clearTimeout(sw);const cur=$('.tab.on'),nx=$('#'+id);const sf=NV;NV=0;document.body.dataset.sf=sf?'1':'';
if(cur&&cur!==nx)pos[cur.id]=scrollY;
if(cur===nx){scrollTo({top:0,behavior:'smooth'});return}
const fin=()=>{$$('.tab').forEach(t=>{t.classList.remove('out');t.classList.toggle('on',t===nx)});scrollTo(0,pos[id]||0);mx=0;upd();if(fd)fit()};
if(cur&&cur!==nx&&anim){cur.classList.add('out');sw=setTimeout(fin,sf?DEV.swS:DEV.swF)}else fin()}
const TB=['home','reviews','contacts','settings'];

function ui(){$('#fq').placeholder=P('Поиск по FAQ','Search FAQ');rfx()}
$('#fq').oninput=e=>{const q=e.target.value.toLowerCase();$$('#faq details').forEach(d=>d.style.display=d.textContent.toLowerCase().includes(q)?'':'none')};
addEventListener('popstate',()=>go(TB.includes(location.hash.slice(1))?location.hash.slice(1):'home',1));
$$('[data-pf]').forEach(i=>{const k=i.dataset.pf,f=()=>document.body.classList.toggle('no-'+k,!i.checked);i.checked=S.get('pf_'+k,k==='gr'?'0':'1')==='1';f();i.onchange=()=>{S.set('pf_'+k,i.checked?'1':'0');f()}});
$('#shr').onclick=async()=>{let u;try{u=new URL('../',location.href).href}catch(e){u=location.href}try{if(navigator.share){await navigator.share({title:NICK,url:u});return}}catch(e){return}try{await navigator.clipboard.writeText(u)}catch(e){}toast(P('Ссылка скопирована','Link copied'))};
$('#rst').onclick=()=>{try{localStorage.clear()}catch(e){}location.reload()};
$$('.pa').forEach(i=>i.src=$('.av').src);

/* ---------- marquee bands (runs only while visible) ---------- */
['BLINDPERSON ✦ UQERSE ✦ ','@UQERSE ✦ BLINDPERSON ✦ '].forEach((u,i)=>$$('.bd i')[i].textContent=u.repeat(3)+u.repeat(3));
const bd=$$('.bd i').map((e,i)=>({e,d:i?1:-1,x:0,w:0,n:0}));let ly=0,vl=0,bRun=0,bVis=0;
function bt(){bRun=0;if(!(tab==='home'&&anim&&bVis&&!document.hidden))return;const y=scrollY,dy=Math.abs(y-ly);ly=y;vl+=(Math.min(dy,60)-vl)*.12;
bd.forEach(b=>{if(!b.w){b.w=b.e.scrollWidth/2;if(!b.w)return;if(!b.n){b.x=b.d>0?-b.w:0;b.n=1}}const w=b.w;b.x+=b.d*(.7+vl*.6);if(b.d<0&&b.x<=-w)b.x+=w;if(b.d>0&&b.x>=0)b.x-=w;b.e.style.transform=`translate3d(${b.x}px,0,0)`});bRun=1;requestAnimationFrame(bt)}
function bk(){if(!bRun&&tab==='home'&&anim&&bVis&&!document.hidden){bRun=1;ly=scrollY;requestAnimationFrame(bt)}}
new IntersectionObserver(es=>{bVis=es[0].isIntersecting;bk()}).observe($('.bands'));
new IntersectionObserver(es=>$('.logo').classList.toggle('off',!es[0].isIntersecting)).observe($('.logo'));

/* ---------- clock ---------- */
const clk=()=>{if(!document.hidden)$('#clk').textContent=new Date().toLocaleTimeString('en-GB')};clk();setInterval(clk,1000);

/* ---------- device-specific input ---------- */
if(DEV.pc){const cg=$('#cg');let px=0,py=0,pend=0;
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;px=e.clientX;py=e.clientY;if(pend)return;pend=1;requestAnimationFrame(()=>{pend=0;cg.style.opacity=1;cg.style.transform=`translate(${px}px,${py}px)`;if(tab==='home')rg.style.transform=`perspective(500px) rotateY(${(px/innerWidth-.5)*24}deg) rotateX(${-(py/innerHeight-.5)*24}deg)`})},{passive:true});
addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;if(/^[1-4]$/.test(e.key))go(TB[e.key-1])});
let kb='';addEventListener('keydown',e=>{if(/INPUT|TEXTAREA/.test(document.activeElement.tagName))return;kb=(kb+e.key).slice(-8).toLowerCase();for(const k in FX)if(kb.endsWith(k))FX[k]()})}
else{let tx,ty;
document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
document.addEventListener('touchend',e=>{if(e.target.closest('.md,input,select'))return;const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>90&&Math.abs(dy)<45){const t=TB[TB.indexOf(tab)+(dx<0?1:-1)];if(t)go(t)}},{passive:true});
if(window.DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission!=='function'){let g=0,b=0,pend=0;addEventListener('deviceorientation',e=>{if(tab!=='home'||e.gamma==null||!anim)return;g=Math.max(-25,Math.min(25,e.gamma));b=Math.max(-25,Math.min(25,(e.beta||0)-50));if(pend)return;pend=1;requestAnimationFrame(()=>{pend=0;rg.style.transform=`perspective(500px) rotateY(${g*.9}deg) rotateX(${-b*.9}deg)`})},{passive:true})}}
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();cmd()}});

/* ---------- search palette ---------- */
function cmd(){const T=P(['Главная','Отзывы','Контакты','Настройки'],['Home','Reviews','Contacts','Settings']),
all=[...TB.map((t,i)=>({t:T[i],k:P('вкладка','tab'),f:()=>go(t)})),
...EFF.map(e=>({t:P('Эффект: ','Effect: ')+P(e[1],e[2]),k:P('эффект','effect'),f:()=>FX[e[0]]()})),
{t:P('Написать в Telegram','Message on Telegram'),k:USER,f:()=>window.open(TG,'_blank')},
{t:P('Анонимный чат','Anonymous chat'),k:P('ссылка','link'),f:()=>window.open(LINKS.anon,'_blank')},
{t:P('Канал','Channel'),k:P('ссылка','link'),f:()=>window.open(LINKS.channel,'_blank')},
{t:P('Чат','Chat'),k:P('ссылка','link'),f:()=>window.open(LINKS.chat,'_blank')},
{t:'TikTok',k:P('ссылка','link'),f:()=>window.open(LINKS.tiktok,'_blank')},
...(ru()?FR:FE).map(f=>({t:f[0],k:'FAQ',f:()=>go('settings')}))];
open(`<h3><span>${P('Поиск','Search')}</span><button class="x" aria-label="Close">${ic('x')}</button></h3><input class="in2" id="cq" autocomplete="off" placeholder="${P('Что найти?','Search anything…')}"><div id="cr"></div>`);
const cr=$('#cr'),q=$('#cq');let s2=0,cu=[];const dr=()=>{const v=q.value.trim().toLowerCase();cu=all.filter(i=>!v||i.t.toLowerCase().includes(v)).slice(0,8);cr.innerHTML=cu.map((i,n)=>`<div class="pr${n==s2?' on':''}" data-n="${n}">${ic('search')}<span>${i.t}</span><small>${i.k}</small></div>`).join('');$$('.pr').forEach(p=>p.onclick=()=>{close();cu[p.dataset.n].f()})};
q.oninput=()=>{s2=0;dr()};q.onkeydown=e=>{if(e.key==='ArrowDown'){s2=Math.min(cu.length-1,s2+1);dr();e.preventDefault()}else if(e.key==='ArrowUp'){s2=Math.max(0,s2-1);dr();e.preventDefault()}else if(e.key==='Enter'&&cu[s2]){close();cu[s2].f()}};dr();q.focus()}
$('#sb').onclick=cmd;

/* ---------- save contact ---------- */
$('#vc').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([`BEGIN:VCARD\nVERSION:3.0\nFN:${NICK}\nNICKNAME:${NICK}\nURL:${TG}\nNOTE:Telegram ${USER}\nEND:VCARD`],{type:'text/vcard'}));a.download=NICK+'.vcf';a.click();toast(P('Контакт сохранён','Contact saved'))};
const fx=$('#fxr'),fsr=$('#fsr'),sF=v=>{document.body.style.setProperty('--fx',v/100);S.set('fx',v)},sS=v=>{document.documentElement.style.setProperty('--fs',v/100);S.set('fs',v)};
fx.value=S.get('fx',100);fsr.value=S.get('fs',100);sF(+fx.value);sS(+fsr.value);fx.oninput=()=>sF(+fx.value);fsr.oninput=()=>{sS(+fsr.value);fd=1;mx=0;bd.forEach(b=>b.w=0);fit()};
const T0=document.title;document.addEventListener('visibilitychange',()=>{document.title=document.hidden?NICK+' — '+P('вернись','come back'):T0;loop();bk()});

/* ---------- special effects ---------- */
const EFF=[['matrix','Матрица','Matrix'],['snow','Снег','Snow'],['confetti','Конфетти','Confetti'],['warp','Варп','Warp'],['glitch','Глитч','Glitch']];
function fxc(ms,bg,draw){const c=document.createElement('canvas');c.style.cssText='position:fixed;inset:0;z-index:95;pointer-events:none;background:'+bg;c.width=innerWidth;c.height=innerHeight;document.body.append(c);const x=c.getContext('2d'),t0=performance.now();(function f(t){if(t-t0>ms){c.remove();return}draw(x,c.width,c.height,t-t0);requestAnimationFrame(f)})(t0)}
const FX={matrix(){const y=[];let n=0;const g='BLINDPERSON01UQERSE✦◈◇';fxc(5000,'#030008cc',(x,w,h)=>{if(n++%3)return;while(y.length<Math.floor(w/16))y.push(0);x.fillStyle='#0300081a';x.fillRect(0,0,w,h);x.fillStyle='#c084fc';x.font='14px monospace';y.forEach((v,i)=>{x.fillText(g[Math.random()*g.length|0],i*16,v*16);y[i]=v*16>h&&Math.random()>.96?0:v+1})})},
snow(){const s=Array.from({length:120},()=>({x:Math.random(),y:Math.random(),r:1+Math.random()*2.5,v:.0015+Math.random()*.003,p:Math.random()*6}));fxc(7000,'transparent',(x,w,h,t)=>{x.clearRect(0,0,w,h);x.fillStyle='#e9d5ff';s.forEach(f=>{f.y=(f.y+f.v)%1;x.beginPath();x.arc((f.x+Math.sin(t/900+f.p)*.02)*w,f.y*h,f.r,0,7);x.fill()})})},
confetti(){const C=['#a855f7','#c084fc','#7c3aed','#e9d5ff','#6d28d9'];const p=Array.from({length:140},()=>({x:innerWidth/2,y:innerHeight,vx:(Math.random()-.5)*16,vy:-8-Math.random()*14,r:Math.random()*6,s:3+Math.random()*5,c:C[Math.random()*C.length|0]}));fxc(3500,'transparent',(x,w,h)=>{x.clearRect(0,0,w,h);p.forEach(q=>{q.vy+=.35;q.x+=q.vx;q.y+=q.vy;q.r+=.2;x.save();x.translate(q.x,q.y);x.rotate(q.r);x.fillStyle=q.c;x.fillRect(-q.s,-q.s/2,q.s*2,q.s);x.restore()})})},
warp(){const s=Array.from({length:160},()=>({a:Math.random()*6.28,d:Math.random()*.2,v:.002+Math.random()*.01}));fxc(3500,'#030008aa',(x,w,h)=>{x.clearRect(0,0,w,h);x.fillStyle='#030008cc';x.fillRect(0,0,w,h);x.strokeStyle='#c084fc';const m=Math.max(w,h);s.forEach(q=>{const d0=q.d;q.d+=q.v*(1+q.d*6);x.lineWidth=1+q.d*2;x.beginPath();x.moveTo(w/2+Math.cos(q.a)*d0*m,h/2+Math.sin(q.a)*d0*m);x.lineTo(w/2+Math.cos(q.a)*q.d*m,h/2+Math.sin(q.a)*q.d*m);x.stroke();if(q.d>1)q.d=0})})},
glitch(){document.body.classList.add('glt');setTimeout(()=>document.body.classList.remove('glt'),1800)}};
function rfx(){$('#fxc').innerHTML=EFF.map(e=>`<button data-e="${e[0]}">${P(e[1],e[2])}</button>`).join('');$$('#fxc button').forEach(b=>b.onclick=()=>FX[b.dataset.e]())}
let lt=0;$('.logo').addEventListener('click',()=>{if(++lt>=5){lt=0;FX.matrix()}setTimeout(()=>lt=0,2000)});
rs();setAnim(anim);setStars(stars);apply();upd();go(TB.includes(location.hash.slice(1))?location.hash.slice(1):'home',1);
})();


/* ===== BlindPerson integrated reviews / Supabase ===== */
(()=>{
  'use strict';
  const SUPABASE_URL='https://qsxlvufosgsdabsykxjx.supabase.co';
  const SUPABASE_KEY='sb_publishable_cf8VV0mjDDtC7psZWJd_6g_7_fWErQJ';
  const $=s=>document.querySelector(s);
  const client=window.supabase?.createClient(SUPABASE_URL,SUPABASE_KEY);
  const state={reviews:[],filter:'all',sort:'new',rating:5,visitor:getVisitor(),myReactions:new Set(),busy:false};
  function getVisitor(){let v='';try{v=localStorage.getItem('bp_review_visitor')||'';if(!/^[a-f0-9-]{36}$/i.test(v)){v=crypto.randomUUID();localStorage.setItem('bp_review_visitor',v)}}catch(e){v='bp-'+Math.random().toString(36).slice(2)+Date.now().toString(36)}return v}
  const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dateText=s=>{try{return new Intl.DateTimeFormat('ru-RU',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(s))}catch{return ''}};
  const starText=n=>'★'.repeat(Math.max(0,Math.min(5,Number(n)||0)))+'☆'.repeat(5-Math.max(0,Math.min(5,Number(n)||0)));
  function notify(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>t.classList.remove('show'),2600)}
  function setStatus(s){$('#feedStatus').textContent=s}
  async function load(){
    if(!client){setStatus('SUPABASE SDK NOT LOADED');$('#reviewList').innerHTML='<div class="empty-state">Не удалось загрузить библиотеку подключения. Обновите страницу.</div>';return}
    setStatus('SYNCING PUBLIC DATABASE...');
    const [list,stats,reactions]=await Promise.all([
      client.from('bp_reviews').select('id,author_name,rating,body,reply,replied_at,reactions,pinned,created_at').eq('status','published').order('pinned',{ascending:false}).order('created_at',{ascending:false}),
      client.rpc('bp_stats'),
      client.rpc('bp_my_reactions',{p_visitor:state.visitor})
    ]);
    if(list.error){console.error(list.error);setStatus('DATABASE CONNECTION ERROR');$('#reviewList').innerHTML='<div class="empty-state"><div class="empty-icon">!</div><b>Не удалось загрузить отзывы</b><span>Попробуйте обновить страницу чуть позже.</span></div>';return}
    state.reviews=list.data||[];
    state.myReactions=new Set((reactions.data||[]).map(x=>`${x.review_id}:${x.emoji}`));
    updateStats(stats.data);render();setStatus('DATABASE CONNECTED / '+state.reviews.length+' RECORDS');
  }
  function updateStats(s){s=s||{count:state.reviews.length,avg:0,dist:{}};$('#avgRating').textContent=Number(s.avg||0).toFixed(1);$('#reviewCount').textContent=String(s.count||0);$('#allCount').textContent=String(s.count||0);$('#ratingCaption').textContent=`На основе ${s.count||0} опубликованных отзывов`;const dist=s.dist||{};const max=Math.max(1,...[1,2,3,4,5].map(n=>Number(dist[n]||0)));$('#ratingBars').innerHTML=[5,4,3,2,1].map(n=>`<div class="bar-row"><span>${n}★</span><i><b style="width:${(Number(dist[n]||0)/max)*100}%"></b></i><small>${Number(dist[n]||0)}</small></div>`).join('')}
  function render(){let arr=[...state.reviews];if(state.filter!=='all')arr=arr.filter(r=>Number(r.rating)===Number(state.filter));switch(state.sort){case'old':arr.sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));break;case'high':arr.sort((a,b)=>b.rating-a.rating||new Date(b.created_at)-new Date(a.created_at));break;case'low':arr.sort((a,b)=>a.rating-b.rating||new Date(b.created_at)-new Date(a.created_at));break;default:arr.sort((a,b)=>Number(b.pinned)-Number(a.pinned)||new Date(b.created_at)-new Date(a.created_at))}
    if(!arr.length){$('#reviewList').innerHTML='<div class="empty-state"><div class="empty-icon">[ ]</div><b>'+(state.reviews.length?'По этому фильтру пока нет отзывов':'Пока здесь тихо.')+'</b><span>'+(state.reviews.length?'Выберите другой фильтр.':'Станьте первым, кто поделится впечатлением.')+'</span></div>';return}
    $('#reviewList').innerHTML=arr.map((r,i)=>{const reactions=r.reactions||{};const initial=(r.author_name||'А').trim().charAt(0).toUpperCase();return `<article class="review-card ${r.pinned?'pinned':''}" style="animation-delay:${Math.min(i,8)*35}ms"><div class="review-top"><div class="author"><div class="avatar-letter">${escapeHTML(initial)}</div><div><div class="author-name">${escapeHTML(r.author_name||'Аноним')}</div><div class="review-date">${dateText(r.created_at)}</div></div></div><div class="review-stars" aria-label="Оценка ${r.rating} из 5">${starText(r.rating)}</div></div><p class="review-body">${escapeHTML(r.body)}</p>${r.pinned?'<div class="review-tags"><span class="tag pin">★ PINNED</span></div>':''}<div class="review-bottom"><div class="reaction-group">${reactionButton(r,'star','★',reactions.star)}${reactionButton(r,'heart','♥',reactions.heart)}${reactionButton(r,'fire','♨',reactions.fire)}${reactionButton(r,'like','＋',reactions.like)}</div><span class="tag">ID / ${String(r.id).slice(0,8).toUpperCase()}</span></div>${r.reply?`<div class="reply"><div class="reply-label">↳ ОТВЕТ BLINDPERSON · ${dateText(r.replied_at)}</div><div class="reply-text">${escapeHTML(r.reply)}</div></div>`:''}</article>`}).join('');
    $('#reviewList').querySelectorAll('[data-react]').forEach(b=>b.addEventListener('click',()=>toggleReaction(b.dataset.id,b.dataset.react,b)));
  }
  function reactionButton(r,key,symbol,count){const on=state.myReactions.has(`${r.id}:${key}`);return `<button class="reaction ${on?'on':''}" data-id="${r.id}" data-react="${key}" aria-pressed="${on}" title="Реакция">${symbol} ${Number(count||0)}</button>`}
  async function toggleReaction(id,emoji,button){if(button.disabled)return;button.disabled=true;const {data,error}=await client.rpc('bp_toggle_reaction',{p_review:id,p_visitor:state.visitor,p_emoji:emoji});button.disabled=false;if(error){console.error(error);notify('Не удалось поставить реакцию');return}const r=state.reviews.find(x=>x.id===id);if(r)r.reactions=data?.reactions||r.reactions;const k=`${id}:${emoji}`;if(data?.on)state.myReactions.add(k);else state.myReactions.delete(k);render()}
  function openDialog(){$('#formMessage').textContent='';$('#reviewDialog').showModal();document.body.style.overflow='hidden'}
  function closeDialog(){$('#reviewDialog').close();document.body.style.overflow=''}
  function setRating(n){state.rating=n;$('#starPicker').querySelectorAll('button').forEach(b=>{const on=Number(b.dataset.rating)<=n;b.classList.toggle('selected',on);b.setAttribute('aria-checked',String(Number(b.dataset.rating)===n))})}
  async function submit(e){e.preventDefault();if(state.busy)return;const name=$('#authorName').value.trim()||'Аноним';const body=$('#reviewBody').value.trim();if(!body){$('#formMessage').textContent='Напишите текст отзыва.';return}if(!state.rating){$('#formMessage').textContent='Выберите оценку.';return}state.busy=true;const btn=$('#submitReview');btn.disabled=true;btn.textContent='ОТПРАВКА...';$('#formMessage').textContent='Отправляем отзыв в базу...';const {data,error}=await client.rpc('bp_submit_review',{p_name:name,p_rating:state.rating,p_body:body,p_visitor:state.visitor});state.busy=false;btn.disabled=false;btn.innerHTML='ОПУБЛИКОВАТЬ <span>↗</span>';if(error){console.error(error);const m=error.message||'';const friendly=m.includes('too_fast')?'Подождите немного перед следующим отзывом.':m.includes('daily_limit')?'Достигнут дневной лимит отзывов.':m.includes('links_not_allowed')?'Ссылки в отзывах запрещены.':m.includes('bad_body')?'Текст должен содержать от 1 до 1000 символов.':'Не получилось отправить отзыв. Попробуйте ещё раз.';$('#formMessage').textContent=friendly;return}$('#reviewForm').reset();setRating(5);$('#charCount').textContent='0 / 1000';closeDialog();notify('Отзыв опубликован');await load();$('#bpReviewApp').scrollIntoView({behavior:'smooth'});}
  function init(){
    $('#year').textContent=new Date().getFullYear();$('#openForm').addEventListener('click',openDialog);$('#closeForm').addEventListener('click',closeDialog);$('#reviewDialog').addEventListener('click',e=>{if(e.target===$('#reviewDialog'))closeDialog()});$('#reviewForm').addEventListener('submit',submit);$('#starPicker').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setRating(Number(b.dataset.rating))));setRating(5);$('#reviewBody').addEventListener('input',e=>$('#charCount').textContent=`${e.target.value.length} / 1000`);$('#sortSelect').addEventListener('change',e=>{state.sort=e.target.value;render()});document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{state.filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));render()}));$('#refreshBtn').addEventListener('click',load);load();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
