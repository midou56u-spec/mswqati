import{h as Ce,render as Ae}from"https://esm.sh/preact";import{useState as r,useEffect as q}from"https://esm.sh/preact/hooks";import Ne from"https://esm.sh/htm";import{GoogleGenAI as De}from"https://esm.run/@google/genai";import{initializeApp as Se}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";import{getFirestore as Pe,onSnapshot as F,doc as p,updateDoc as f,collection as C,getDocs as S,deleteDoc as Ue,getDoc as ne,setDoc as R,query as B,where as P,increment as U}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))A(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&A(g)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function A(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();const s=Ne.bind(Ce),Me={projectId:"gen-lang-client-0875902085",appId:"1:852106800021:web:2420af81b94cc4b67d649c",apiKey:"AIzaSyBcFY_4bq5HWWAeN3aNU4fFWA7P8_LJ-RQ",authDomain:"gen-lang-client-0875902085.firebaseapp.com",storageBucket:"gen-lang-client-0875902085.firebasestorage.app",messagingSenderId:"852106800021",measurementId:""},Le="ai-studio-6100c38d-0c90-47d2-bd34-dbb846b47b30",Te="AIzaSyBcFY_4bq5HWWAeN3aNU4fFWA7P8_LJ-RQ";console.log("Initializing Firebase and AI...");const Ke=Se(Me),i=Pe(Ke,Le),je=new De({apiKey:Te});console.log("Initialization complete.");const o=({name:x,className:m="w-6 h-6"})=>{const t={PenTool:s`<path d="m12 19 7-7 3 3-7 7-3-3Zm0 0-3-3m0 0 2.29-2.29c.39-.39.39-1.02 0-1.41l-4.24-4.24c-.39-.39-1.02-.39-1.41 0L3.34 10.4c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0L11.29 13.7M9 16l-2 2" />`,LayoutDashboard:s`<path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z" />`,CreditCard:s`<rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" />`,Settings:s`<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" />`,LogOut:s`<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9" />`,Plus:s`<path d="M12 5v14m-7-7h14" />`,ImageIcon:s`<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />`,X:s`<path d="M18 6 6 18M6 6l12 12" />`,Copy:s`<rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />`,AlertCircle:s`<circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />`,Loader2:s`<path d="M21 12a9 9 0 1 1-6.219-8.56" />`,Users:s`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />`,Key:s`<path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3-3.5 3.5z" />`,Video:s`<path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />`,Smartphone:s`<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />`,Trash2:s`<path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 9v4m4-4v4" />`,BarChart3:s`<path d="M3 3v18h18m-18-4h4m4-4h4m4-4h4" />`,Search:s`<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />`};return s`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=${m}>
                    ${t[x]||s`<circle cx="12" cy="12" r="10" />`}
                </svg>
            `},ze=()=>{const[x,m]=r(()=>{const e=localStorage.getItem("app_user");return e?JSON.parse(e):null}),[t,A]=r(null),[a,c]=r("generate"),[g,le]=r(""),[M,oe]=r(""),[L,re]=r(""),[G,T]=r([]),[H,K]=r([]),[W,J]=r(!1),[w,Y]=r(null),[Q,X]=r(null),[N,d]=r(null),[Z,h]=r(null),[y,ie]=r(""),[$,ce]=r(""),[j,de]=r(""),[k,ue]=r("login"),[D,ee]=r(""),[z,be]=r(null),[te,pe]=r([]),[xe,me]=r(0),[E,ge]=r(""),[I,he]=r(null);q(()=>{if(x!=null&&x.uid)return F(p(i,"users",x.uid),n=>{if(n.exists()){const l=n.data();A(l),l.phone==="admin"&&l.role!=="admin"&&f(p(i,"users",x.uid),{role:"admin"})}})},[x]),q(()=>{if((t==null?void 0:t.role)==="admin"){const e=F(p(i,"stats","global"),l=>be(l.data())),n=F(C(i,"activationKeys"),l=>{pe(l.docs.map(u=>({id:u.id,...u.data()})).sort((u,b)=>b.createdAt-u.createdAt))});return S(C(i,"users")).then(l=>me(l.size)),()=>{e(),n()}}},[t]),q(()=>{(async()=>{(await ne(p(i,"users","admin"))).exists()||await R(p(i,"users","admin"),{uid:"admin",phone:"admin",password:"1182019",displayName:"المدير العام",role:"admin",shortId:"000000",createdAt:Date.now(),isActiveUntil:null})})()},[]);const ve=async()=>{if(d(null),!y||!$)return d("كمل البيانات يا بطل");try{const e=B(C(i,"users"),P("phone","==",y),P("password","==",$)),n=await S(e);if(n.empty)return d("البيانات غلط، ركز شوية");const l={uid:n.docs[0].id,...n.docs[0].data()};m(l),localStorage.setItem("app_user",JSON.stringify(l))}catch(e){d(e.message)}},fe=async()=>{if(d(null),!y||!$||!j)return d("كمل البيانات كلها");try{const e=B(C(i,"users"),P("phone","==",y));if(!(await S(e)).empty)return d("الرقم ده مسجل قبل كده");const l="u_"+Date.now(),u=Math.floor(1e5+Math.random()*9e5).toString(),b={uid:l,phone:y,password:$,displayName:j,role:"user",shortId:u,createdAt:Date.now(),isActiveUntil:null,trialPostsCount:6,trialScriptsCount:6};await R(p(i,"users",l),b),m(b),localStorage.setItem("app_user",JSON.stringify(b))}catch(e){d(e.message)}},ye=e=>{var l;const n=(l=e.target.files)==null?void 0:l[0];if(n){const u=new FileReader;u.onloadend=()=>{const b=u.result.split(",")[1];Y({type:n.type,base64:b}),X(u.result)},u.readAsDataURL(n)}},we=async()=>{if(!g&&!w)return d("اكتب اسم المنتج أو ارفع صورة الأول");const e=a==="tiktok",n=Date.now(),l=(t==null?void 0:t.role)==="admin"||(t==null?void 0:t.isActiveUntil)&&t.isActiveUntil>n;if(!l){if(e&&((t==null?void 0:t.trialScriptsCount)||0)<=0)return d("خلصت تجارب السكربتات يا نجم، فعل الحساب عشان تكمل");if(!e&&((t==null?void 0:t.trialPostsCount)||0)<=0)return d("خلصت تجارب البوستات يا نجم، فعل الحساب عشان تكمل")}J(!0),d(null);const u=e?`أنت خبير صناعة محتوى تيك توك (TikTok Creator) مصري محترف، مثقف، ولبق جداً. مهمتك كتابة 3 نماذج لسكربتات فيديو تيك توك قصيرة ومبهرة بالعامية المصرية الراقية.
السكربت لازم يكون "خاطف" من أول ثانية، بأسلوب ذكي ومحترم (لغة ولاد الناس).
ممنوع الفصحى تماماً، وممنوع الابتذال. استخدم تعبيرات مصرية شيك (زي: "يا أهلاً بيكم"، "حاجة في منتهى الشياكة"، "تجربة تستحق").
إذا وجدت صورة، حللها وادمج تفاصيلها في السكربت بذكاء.
اكتب 3 سكربتات فقط، بدون أي مقدمات.
افصل بين كل سكربت والتاني بكلمة "---SPLIT---".`:`أنت كاتب محتوى تسويقي مصري محترف، مثقف، ولبق جداً. مهمتك كتابة 3 نماذج لبوستات سوشيال ميديا بالعامية المصرية الراقية (لغة الطبقة المثقفة).
ممنوع تماماً استخدام لغة عربية فصحى (زي: هذا، سوف، نحن، رائع، مذهل).
استخدم بدائل مصرية مهذبة وشيك (زي: "ده"، "دي"، "هنـ"، "إحنا"، "حاجة راقية"، "ممتاز"، "اتفضلوا").
الأسلوب لازم يكون "سمبل" وشيك، كأنك بتكلم عميل VIP في مكان هادي.
إذا وجدت صورة، حللها كأنك خبير: "شوف" التفاصيل، الألوان، والجودة، واستخدم ده في الإقناع.
اكتب 3 بوستات فقط، بدون أي رغي زيادة.
افصل بين كل بوست والتاني بكلمة "---SPLIT---".`;let b="";g&&(b+=`اسم المنتج/الموضوع: ${g}. 
`),M&&(b+=`تفاصيل: ${M}. 
`),w&&(b+=`بص على الصورة دي كويس وحللها واكتب عنها بأسلوب شيك. 
`),L&&(b+=`ملحوظة مهمة من المستخدم: ${L} 
`);try{const v=[{text:b}];w&&v.push({inlineData:{data:w.base64,mimeType:w.type}});const se=(await je.models.generateContent({model:"gemini-3-flash-preview",contents:[{role:"user",parts:v}],config:{systemInstruction:u}})).text;if(se){const ae=se.split("---SPLIT---").map(_=>_.trim()).filter(_=>_.length>0);e?K(ae.slice(0,3)):T(ae.slice(0,3)),h(e?"السكربتات جاهزة يا نجم! 🎬":"البوستات جاهزة يا فنان! ✨");const O={aiRequestsCount:U(1)};l||(e?O.trialScriptsCount=U(-1):O.trialPostsCount=U(-1)),await f(p(i,"users",x.uid),O).catch(()=>{}),await f(p(i,"stats","global"),{aiRequestsCount:U(1)}).catch(()=>{})}else throw new Error("جيمناي مطلعش رد، جرب تاني")}catch(v){console.error("AI Error:",v),d("مشكلة في الذكاء الاصطناعي: "+v.message)}J(!1)},$e=async()=>{var e,n;if(D)try{const l=await ne(p(i,"activationKeys",D));if(!l.exists()||(e=l.data())!=null&&e.used)return d("الكود ده غلط أو استُخدم قبل كده");const u=(n=l.data())==null?void 0:n.days,b=(t==null?void 0:t.isActiveUntil)||Date.now(),v=Math.max(b,Date.now())+u*24*60*60*1e3;await f(p(i,"users",x.uid),{isActiveUntil:v}),await f(p(i,"activationKeys",D),{used:!0}),h(`تم التفعيل بنجاح لمدة ${u} يوم!`),ee("")}catch(l){d(l.message)}},ke=async e=>{const n=Math.random().toString(36).substring(2,10).toUpperCase();await R(p(i,"activationKeys",n),{days:e,used:!1,createdAt:Date.now()})},V=async()=>{if(!E)return;const e=B(C(i,"users"),P("shortId","==",E)),n=await S(e);if(n.empty)return d("المستخدم مش موجود");he({uid:n.docs[0].id,...n.docs[0].data()})},Ie=()=>{m(null),localStorage.removeItem("app_user")};return x?s`
                <div class="min-h-screen bg-gray-50 pb-24" dir="rtl">
                    <header class="bg-white border-b sticky top-0 z-50">
                        <div class="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md"><${o} name="PenTool" className="text-white w-6 h-6" /></div>
                                <div>
                                    <h1 class="font-black text-blue-900 leading-tight">مسوقاتي AI</h1>
                                    <span class="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">V42</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="text-left hidden sm:block">
                                    <p class="text-xs font-bold text-gray-900">${t==null?void 0:t.displayName}</p>
                                    <p class="text-[10px] text-gray-500">ID: ${t==null?void 0:t.shortId}</p>
                                </div>
                                <button onClick=${Ie} class="p-2 text-gray-400 hover:text-red-500 transition-colors"><${o} name="LogOut" className="w-5 h-5" /></button>
                            </div>
                        </div>
                    </header>

                    <main class="max-w-4xl mx-auto p-4">
                        <div class="flex bg-gray-100 p-1 rounded-2xl mb-8">
                            <button onClick=${()=>{c("generate"),T([]),K([])}} class=${`flex-1 py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 ${a==="generate"?"bg-white text-blue-600 shadow-sm":"text-gray-500"}`}><${o} name="PenTool" className="w-4 h-4" /> بوست فيسبوك</button>
                            <button onClick=${()=>{c("tiktok"),T([]),K([])}} class=${`flex-1 py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 ${a==="tiktok"?"bg-white text-blue-600 shadow-sm":"text-gray-500"}`}><${o} name="Video" className="w-4 h-4" /> سكربت تيك توك</button>
                            ${(t==null?void 0:t.role)==="admin"&&s`<button onClick=${()=>c("admin")} class=${`flex-1 py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 ${a==="admin"?"bg-white text-blue-600 shadow-sm":"text-gray-500"}`}><${o} name="Settings" className="w-4 h-4" /> الإدارة</button>`}
                        </div>

                        ${(a==="generate"||a==="tiktok")&&s`
                            <div class="space-y-6">
                                <div class="bg-blue-600 p-4 rounded-2xl text-white flex justify-between items-center shadow-lg shadow-blue-100">
                                    <div class="flex items-center gap-2">
                                        <${o} name="BarChart3" className="w-5 h-5 opacity-80" />
                                        <span class="text-xs font-bold">رصيدك المتبقي:</span>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="bg-white/20 px-3 py-1 rounded-lg text-[10px] font-black">
                                            ${t!=null&&t.isActiveUntil&&t.isActiveUntil>Date.now()?"اشتراك نشط":`بوستات: ${(t==null?void 0:t.trialPostsCount)||0}`}
                                        </div>
                                        <div class="bg-white/20 px-3 py-1 rounded-lg text-[10px] font-black">
                                            ${t!=null&&t.isActiveUntil&&t.isActiveUntil>Date.now()?"غير محدود":`سكربتات: ${(t==null?void 0:t.trialScriptsCount)||0}`}
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-[2rem] shadow-sm border space-y-6">
                                    <div class="space-y-4">
                                        <div>
                                            <label class="block text-sm font-bold text-gray-700 mb-2">${a==="tiktok"?"عنوان الفيديو أو الموضوع":"اسم المنتج"}</label>
                                            <input type="text" placeholder=${a==="tiktok"?"مثلاً: نصائح للعناية بالبشرة...":"مثلاً: طقم كاجوال صيفي"} value=${g} onInput=${e=>le(e.target.value)} class="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold" />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-bold text-gray-700 mb-2">وصف إضافي (اختياري)</label>
                                            <textarea placeholder="اكتب أي تفاصيل تانية عايزها تظهر..." value=${M} onInput=${e=>oe(e.target.value)} class="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold min-h-[100px] resize-none" />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-bold text-gray-700 mb-2 text-blue-600">محتاج تعديل إيه؟ (اختياري)</label>
                                            <input type="text" placeholder="مثلاً: خليه أقصر، أو ركز على السعر..." value=${L} onInput=${e=>re(e.target.value)} class="w-full p-4 bg-blue-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold" />
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <label class="flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-3xl hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group">
                                                <${o} name="ImageIcon" className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2" />
                                                <span class="text-xs font-bold text-gray-500 group-hover:text-blue-600">ارفع صورة</span>
                                                <input type="file" accept="image/*" onChange=${ye} class="hidden" />
                                            </label>
                                            ${Q&&s`<div class="relative w-28 h-28 rounded-3xl overflow-hidden border-2 border-blue-100 shadow-sm"><img src=${Q} class="w-full h-full object-cover" /><button onClick=${()=>{Y(null),X(null)}} class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1.5 shadow-lg"><${o} name="X" className="w-3 h-3" /></button></div>`}
                                        </div>
                                    </div>
                                    <button onClick=${we} disabled=${W} class="w-full bg-blue-600 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-blue-100 flex justify-center items-center gap-3 disabled:opacity-50">
                                        ${W?s`<${o} name="Loader2" className="w-6 h-6 animate-spin" /><span>بنكتبلك عظمة...</span>`:s`${a==="tiktok"?s`<${o} name="Video" className="w-6 h-6" />`:s`<${o} name="PenTool" className="w-6 h-6" />`}<span>${a==="tiktok"?"اكتبلي السكربتات ✨":"اكتبلي البوستات ✨"}</span>`}
                                    </button>
                                    ${(a==="tiktok"?H:G).length>0&&s`
                                        <div class="space-y-6 mt-8">
                                            <h3 class="text-lg font-black text-gray-900 text-center">${a==="tiktok"?"اختار السكربت اللي يعجبك 🎬":"اختار البوست اللي يعجبك ✨"}</h3>
                                            ${(a==="tiktok"?H:G).map((e,n)=>s`
                                                <div key=${n} class="p-6 bg-white rounded-[2rem] border-2 border-blue-100 relative shadow-sm">
                                                    <div class="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm">${n+1}</div>
                                                    <p class="text-gray-800 whitespace-pre-wrap leading-relaxed font-medium">${e}</p>
                                                    <button onClick=${()=>{navigator.clipboard.writeText(e),h("تم النسخ بنجاح! ✅"),setTimeout(()=>h(null),2e3)}} class="mt-4 w-full py-3 bg-blue-50 text-blue-600 font-black rounded-xl border border-blue-100 flex items-center justify-center gap-2 text-sm"><${o} name="Copy" className="w-4 h-4" /> نسخ هذا النص</button>
                                                </div>
                                            `)}
                                        </div>
                                    `}
                                </div>
                            </div>
                        `}
                        
                        ${a==="subscription"&&s`
                            <div class="space-y-6">
                                <div class="bg-white p-8 rounded-[2rem] shadow-sm border space-y-8">
                                    <div class="text-center space-y-2"><h2 class="text-2xl font-black text-gray-900">حالة الاشتراك</h2><p class="text-gray-500 font-medium">فعل حسابك عشان تستخدم الذكاء الاصطناعي براحتك</p></div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="bg-gray-50 p-6 rounded-3xl border text-center"><p class="text-xs text-gray-500 mb-1 font-bold">تاريخ الانتهاء</p><p class="text-lg font-black text-blue-900">${t!=null&&t.isActiveUntil?new Date(t.isActiveUntil).toLocaleDateString("ar-EG"):"غير مفعل"}</p></div>
                                        <div class="bg-gray-50 p-6 rounded-3xl border text-center"><p class="text-xs text-gray-500 mb-1 font-bold">حالة الحساب</p><p class=${`text-lg font-black ${t!=null&&t.isActiveUntil&&t.isActiveUntil>Date.now()?"text-green-600":"text-red-500"}`}>${t!=null&&t.isActiveUntil&&t.isActiveUntil>Date.now()?"نشط ✅":"منتهي ❌"}</p></div>
                                    </div>
                                    <div class="space-y-4">
                                        <h3 class="font-black text-gray-800 flex items-center gap-2"><${o} name="Key" className="w-5 h-5 text-blue-600" /> تفعيل كود جديد</h3>
                                        <div class="flex gap-2">
                                            <input type="text" placeholder="ادخل الكود هنا" value=${D} onInput=${e=>ee(e.target.value)} class="flex-1 p-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl text-center font-black uppercase tracking-widest outline-none transition-all" />
                                            <button onClick=${$e} class="bg-blue-600 text-white px-8 rounded-2xl font-black">تفعيل</button>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2rem] text-white text-center space-y-4 shadow-xl shadow-blue-200"><p class="font-bold opacity-90">للاشتراك أو تجديد الخدمة تواصل معنا:</p><p class="text-4xl font-black tracking-tighter">01090746032</p></div>
                                </div>
                            </div>
                        `}

                        ${a==="admin"&&(t==null?void 0:t.role)==="admin"&&s`
                            <div class="space-y-6">
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div class="bg-white p-6 rounded-3xl border shadow-sm"><div class="flex items-center gap-3 mb-2"><div class="p-2 bg-blue-100 rounded-lg text-blue-600"><${o} name="Users" className="w-5 h-5" /></div><span class="text-xs font-bold text-gray-500">إجمالي المستخدمين</span></div><p class="text-2xl font-black text-gray-900">${xe}</p></div>
                                    <div class="bg-white p-6 rounded-3xl border shadow-sm"><div class="flex items-center gap-3 mb-2"><div class="p-2 bg-purple-100 rounded-lg text-purple-600"><${o} name="BarChart3" className="w-5 h-5" /></div><span class="text-xs font-bold text-gray-500">طلبات الـ AI</span></div><p class="text-2xl font-black text-gray-900">${(z==null?void 0:z.aiRequestsCount)||0}</p></div>
                                    <div class="bg-white p-6 rounded-3xl border shadow-sm"><div class="flex items-center gap-3 mb-2"><div class="p-2 bg-orange-100 rounded-lg text-orange-600"><${o} name="Key" className="w-5 h-5" /></div><span class="text-xs font-bold text-gray-500">الأكواد المتاحة</span></div><p class="text-2xl font-black text-gray-900">${te.filter(e=>!e.used).length}</p></div>
                                </div>
                                <div class="bg-white p-8 rounded-[2rem] border shadow-sm space-y-8">
                                    <div class="space-y-4"><h3 class="font-black text-gray-800 flex items-center gap-2"><${o} name="Plus" className="w-5 h-5 text-blue-600" /> توليد أكواد تفعيل</h3><div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${[7,30,90,365].map(e=>s`<button key=${e} onClick=${()=>ke(e)} class="p-4 bg-gray-50 border-2 border-transparent hover:border-blue-500 rounded-2xl font-bold text-sm transition-all">${e===365?"سنة":`${e} يوم`}</button>`)}</div></div>
                                    <div class="space-y-4">
                                        <h3 class="font-black text-gray-800 flex items-center gap-2"><${o} name="Search" className="w-5 h-5 text-blue-600" /> البحث عن مستخدم</h3>
                                        <div class="flex gap-2"><input type="text" placeholder="ادخل الـ ID" value=${E} onInput=${e=>ge(e.target.value)} class="flex-1 p-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl text-center font-bold outline-none transition-all" /><button onClick=${V} class="bg-blue-600 text-white px-8 rounded-2xl font-black">بحث</button></div>
                                        ${I&&s`<div class="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100 flex justify-between items-center"><div><p class="font-black text-blue-900">${I.displayName}</p><p class="text-xs text-blue-600 font-bold">${I.phone}</p></div><div class="flex gap-2"><button onClick=${async()=>{const e=Date.now()+2592e6;await f(p(i,"users",I.uid),{isActiveUntil:e}),h("تم تفعيل شهر"),V()}} class="bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-bold">تفعيل شهر</button><button onClick=${async()=>{await f(p(i,"users",I.uid),{isActiveUntil:null}),h("تم إلغاء التفعيل"),V()}} class="bg-red-500 text-white px-4 py-2 rounded-xl text-xs font-bold">إلغاء</button></div></div>`}
                                    </div>
                                    <div class="space-y-4"><h3 class="font-black text-gray-800">الأكواد الأخيرة</h3><div class="space-y-2 max-h-[300px] overflow-y-auto pr-2">${te.map(e=>s`<div key=${e.id} class=${`p-4 rounded-2xl border flex justify-between items-center ${e.used?"bg-gray-50 opacity-50":"bg-white border-blue-100"}`}><div><p class="font-black text-sm tracking-widest">${e.id}</p><p class="text-[10px] font-bold text-gray-500">${e.days} يوم</p></div><div class="flex items-center gap-3">${!e.used&&s`<button onClick=${()=>{navigator.clipboard.writeText(e.id),h("تم النسخ"),setTimeout(()=>h(null),2e3)}} class="p-2 text-blue-600"><${o} name="Copy" className="w-4 h-4" /></button>`}<button onClick=${async()=>{await Ue(p(i,"activationKeys",e.id))}} class="p-2 text-red-400"><${o} name="Trash2" className="w-4 h-4" /></button></div></div>`)}</div></div>
                                </div>
                            </div>
                        `}
                    </main>

                    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 z-50">
                        <div class="max-w-4xl mx-auto flex justify-around items-center">
                            <button onClick=${()=>c("generate")} class=${`flex flex-col items-center gap-1 transition-all ${a==="generate"?"text-blue-600 scale-110":"text-gray-400"}`}><${o} name="LayoutDashboard" className="w-6 h-6" /><span class="text-[10px] font-black">الرئيسية</span></button>
                            <button onClick=${()=>c("subscription")} class=${`flex flex-col items-center gap-1 transition-all ${a==="subscription"?"text-blue-600 scale-110":"text-gray-400"}`}><${o} name="CreditCard" className="w-6 h-6" /><span class="text-[10px] font-black">الاشتراك</span></button>
                        </div>
                    </nav>

                    ${Z&&s`<div class="fixed bottom-24 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg z-[100] animate-bounce">${Z}</div>`}
                    ${N&&s`<div class="fixed bottom-24 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg z-[100] animate-shake">${N}</div>`}
                </div>
            `:s`
                    <div class="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-600 to-indigo-900" dir="rtl">
                        <div class="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all">
                            <div class="p-8 text-center bg-blue-50">
                                <div class="w-20 h-20 bg-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg rotate-3">
                                    <${o} name="PenTool" className="text-white w-10 h-10 -rotate-3" />
                                </div>
                                <h1 class="text-3xl font-black text-blue-900 mb-2">مسوقاتي AI</h1>
                                <p class="text-blue-600 font-medium">كاتب البوستات المصري الروش</p>
                            </div>
                            <div class="p-8 space-y-4">
                                ${N&&s`<div class="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center gap-2 text-sm font-bold border border-red-100"><${o} name="AlertCircle" className="w-4 h-4" /> ${N}</div>`}
                                <div class="space-y-3">
                                    <div class="relative">
                                        <${o} name="Smartphone" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input type="text" placeholder="رقم الموبايل" value=${y} onInput=${e=>ie(e.target.value)} class="w-full p-4 pr-12 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold" />
                                    </div>
                                    <div class="relative">
                                        <${o} name="Key" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input type="password" placeholder="كلمة السر" value=${$} onInput=${e=>ce(e.target.value)} class="w-full p-4 pr-12 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold" />
                                    </div>
                                    ${k==="register"&&s`
                                        <div class="relative">
                                            <${o} name="Users" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input type="text" placeholder="اسمك بالكامل" value=${j} onInput=${e=>de(e.target.value)} class="w-full p-4 pr-12 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold" />
                                        </div>
                                    `}
                                </div>
                                <button onClick=${k==="login"?ve:fe} class="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">${k==="login"?"دخول يا بطل":"سجل حساب جديد"}</button>
                                <button onClick=${()=>ue(k==="login"?"register":"login")} class="w-full text-gray-500 font-bold text-sm hover:text-blue-600 transition-colors">${k==="login"?"معندكش حساب؟ سجل من هنا":"عندك حساب؟ ادخل من هنا"}</button>
                            </div>
                        </div>
                    </div>
                `};Ae(s`<${ze} />`,document.getElementById("root"));
