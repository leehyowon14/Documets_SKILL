const fs=require('fs'), vm=require('vm'), assert=require('assert');
const source=fs.readFileSync(require('path').join(__dirname, '../editorial.js'),'utf8');
for(const n of [0,1,5,12]) for(const overflow of [false,true]){
 let printed=0,click,ready; const total={textContent:''},status={},events={};
 const pages=Array.from({length:n},(_,i)=>({folio:{},classList:{toggle(){}},querySelector(){return {scrollHeight:overflow&&i===0?300:100,clientHeight:100}},querySelectorAll(){return [this.folio]}}));
 vm.runInNewContext(source,{document:{querySelectorAll:s=>s==='.page'?pages:[total],querySelector:s=>s==='.print-status'?status:{addEventListener:(e,f)=>click=f},fonts:{ready:{then:f=>ready=f}}},window:{addEventListener:(e,f)=>events[e]=f,print:()=>printed++}});
 ready(); click(); assert.equal(total.textContent,String(n).padStart(2,'0'));assert.equal(printed,overflow&&n?0:1);assert.equal(Boolean(status.textContent),Boolean(overflow&&n)); pages.forEach((p,i)=>assert.equal(p.folio.textContent,String(i+1).padStart(2,'0')));
}
console.log('PASS: page counts 0/1/5/12, numbering, overflow warning and print guard');
