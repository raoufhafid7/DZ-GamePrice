const PRODUCTS=[
{id:1,name:"PS5 Slim 1TB",cat:"console",price:139000,store:"GameDZ",icon:"🎮",tag:"الأقل سعراً"},
{id:2,name:"Xbox Series S 512GB",cat:"console",price:115000,store:"TechStore",icon:"🟩",tag:"جديد"},
{id:3,name:"PS4 Pro 1TB",cat:"console",price:85000,store:"DZ Games",icon:"🎮",tag:"مستعمل"},
{id:4,name:"GTA V — PC",cat:"games",price:6800,store:"GameStore",icon:"🕹️",tag:"عرض"},
{id:5,name:"Resident Evil 4 Remake",cat:"games",price:7900,store:"KeyStore",icon:"🧟",tag:"جديد"},
{id:6,name:"RTX 4060 8GB",cat:"gpu",price:65000,store:"PC World DZ",icon:"⚡",tag:"متوفر"},
{id:7,name:"RTX 3060 12GB",cat:"gpu",price:55000,store:"TechStore",icon:"⚡",tag:"عرض"},
{id:8,name:"Ryzen 5 5600",cat:"pc",price:29000,store:"PC World DZ",icon:"🧠",tag:"جديد"},
{id:9,name:"GameSir X5 Lite",cat:"accessories",price:5500,store:"Gaming DZ",icon:"🎮",tag:"متوفر"}
];
let state={cat:"all",q:"",min:"",max:""};
const money=n=>new Intl.NumberFormat("fr-DZ").format(n)+" دج";
function render(){
 let arr=PRODUCTS.filter(p=>(state.cat==="all"||p.cat===state.cat)&&p.name.toLowerCase().includes(state.q.toLowerCase())&&(!state.min||p.price>=+state.min)&&(!state.max||p.price<=+state.max));
 document.getElementById("resultCount").textContent=arr.length+" منتج";
 document.getElementById("productGrid").innerHTML=arr.map(p=>`<article class="product"><div class="thumb">${p.icon}</div><span class="tag">${p.tag}</span><h3>${p.name}</h3><span class="store">من ${p.store}</span><div class="price">${money(p.price)}</div><button class="primary" onclick="openProduct(${p.id})">عرض التفاصيل</button></article>`).join("")||"<div class='muted'>لا توجد نتائج بهذه الفلاتر.</div>";
}
function doSearch(){const q=document.getElementById("heroSearch").value.trim();document.getElementById("globalSearch").value=q;state.q=q;scrollToId("products");render()}
document.getElementById("globalSearch").addEventListener("input",e=>{state.q=e.target.value;render()});
document.getElementById("heroSearch").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch()});
function filterCat(cat){state.cat=cat;document.getElementById("catFilter").value=cat;scrollToId("products");render()}
function applyFilters(){state.cat=document.getElementById("catFilter").value;state.min=document.getElementById("minPrice").value;state.max=document.getElementById("maxPrice").value;render()}
function resetFilters(){state={cat:"all",q:"",min:"",max:""};document.getElementById("catFilter").value="all";document.getElementById("minPrice").value="";document.getElementById("maxPrice").value="";document.getElementById("globalSearch").value="";render()}
function openProduct(id){const p=PRODUCTS.find(x=>x.id===id);alert(`${p.name}\n\nالسعر الحالي: ${money(p.price)}\nالمتجر: ${p.store}\n\nصفحة المنتج الكاملة جاهزة للربط مع قاعدة البيانات.`)}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"})}
render();