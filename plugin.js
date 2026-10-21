// Penpot-native spell card prototype, no SVG text import.
const UI = "https://valir-song.github.io/richard-spell-cards/index.html";
try {
  const board=penpot.createBoard();
  board.name="Ричард — Магическая рука";
  board.x=120; board.y=120; board.resize(900,220);
  board.fills=[{fillColor:"#F8F1E4"}];
  const rectangle=(name,x,y,w,h,fill)=>{
    const s=penpot.createRectangle();s.name=name;s.x=x;s.y=y;s.resize(w,h);
    s.fills=[{fillColor:fill}];board.appendChild(s);return s;
  };
  rectangle("Золотая рамка",126,126,888,208,"#C5A46B");
  rectangle("Пергамент",130,130,880,200,"#F9F4E9");
  rectangle("Светлая плашка",147,145,640,54,"#E7E4F1");
  rectangle("Фиолетовая линия",147,145,4,145,"#8C79B9");
  const circle=penpot.createEllipse();circle.name="Круг заклинания";circle.x=924;circle.y=265;circle.resize(62,62);circle.fills=[{fillColor:"#477FC0"}];board.appendChild(circle);
  const addText=(name,value,x,y,size,color,font)=>{
    const t=penpot.createText(value);
    if(!t)throw Error("Не создан текст "+name);
    t.name=name;t.x=x;t.y=y;t.fontSize=String(size);t.fontFamily=font||"Arial";
    t.fills=[{fillColor:color}];t.growType="auto-height";board.appendChild(t);return t;
  };
  addText("Название","Магическая рука",165,150,25,"#30285D","Georgia");
  addText("Параметры","Заговор · 30 фт. · 1 мин",165,184,14,"#735A42");
  addText("Описание","Манипулирует предметами до 10 фунтов; не атакует.",165,227,16,"#302A27");
  addText("Уровень","0",945,281,25,"#FFFFFF","Georgia");
  penpot.selection=[board];
  penpot.ui.open("Richard's Spell Cards",UI,{width:340,height:240});
} catch(e) {
  console.error("Richard's Spell Cards failed:",e);
  penpot.ui.open("Richard's Spell Cards — ошибка",UI,{width:340,height:240});
}
