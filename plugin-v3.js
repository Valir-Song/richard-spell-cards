// Richard's Spell Cards 0.3: decorative native Penpot card
const UI="https://valir-song.github.io/richard-spell-cards/index-v3.html";
try {
  const X=120,Y=120,W=960,H=260;
  const b=penpot.createBoard();b.name="Ричард — Магическая рука · 0.3";b.x=X;b.y=Y;b.resize(W,H);b.fills=[{fillColor:"#F9F4E9"}];
  const rect=(name,x,y,w,h,fill)=>{
    const s=penpot.createRectangle();s.name=name;s.x=X+x;s.y=Y+y;s.resize(w,h);s.fills=[{fillColor:fill}];b.appendChild(s);return s;
  };
  const oval=(name,x,y,w,h,fill)=>{
    const s=penpot.createEllipse();s.name=name;s.x=X+x;s.y=Y+y;s.resize(w,h);s.fills=[{fillColor:fill}];b.appendChild(s);return s;
  };
  const txt=(name,value,x,y,size,color,font="Georgia")=>{
    const t=penpot.createText(value);if(!t)throw Error("Не создан текст: "+name);
    t.name=name;t.x=X+x;t.y=Y+y;t.fontSize=String(size);t.fontFamily=font;
    t.fills=[{fillColor:color}];t.growType="auto-height";b.appendChild(t);return t;
  };
  // Inset double gilded border, generous margins.
  rect("Золотой внешний контур",7,7,946,246,"#AE9060");
  rect("Кремовое поле",11,11,938,238,"#FCF8EF");
  rect("Тонкий внутренний контур",18,18,924,224,"#E1CDA8");
  rect("Пергамент",20,20,920,220,"#FAF4E8");
  // Decorative corners, all editable vector shapes.
  rect("Орнамент ВЛ горизонталь",26,26,40,2,"#A68B61");
  rect("Орнамент ВЛ вертикаль",26,26,2,34,"#A68B61");
  rect("Орнамент ВП горизонталь",894,26,40,2,"#A68B61");
  rect("Орнамент ВП вертикаль",932,26,2,34,"#A68B61");
  rect("Орнамент НЛ горизонталь",26,232,40,2,"#A68B61");
  rect("Орнамент НЛ вертикаль",26,200,2,34,"#A68B61");
  rect("Орнамент НП горизонталь",894,232,40,2,"#A68B61");
  rect("Орнамент НП вертикаль",932,200,2,34,"#A68B61");
  // Heading.
  rect("Контур заголовка",42,38,720,63,"#D5BE98");
  rect("Лавандовая плашка",44,40,716,59,"#EBE7F0");
  rect("Левая фиолетовая линия",44,40,5,165,"#77689A");
  // Description panel.
  rect("Рамка описания",42,116,721,89,"#E3D0AE");
  rect("Поле описания",44,118,717,85,"#FFF9EF");
  rect("Нижняя линия слева",58,220,285,2,"#C1A476");
  rect("Нижняя линия справа",390,220,285,2,"#C1A476");
  oval("Нижний орнамент",358,214,15,15,"#B59A71");
  // Level medallion.
  oval("Золотой круг",804,63,116,116,"#B79B6C");
  oval("Светлый круг",811,70,102,102,"#E9DBC3");
  oval("Синий круг",818,77,88,88,"#526F9C");
  rect("Плашка школы",798,189,129,32,"#D6BE98");
  rect("Поле школы",800,191,125,28,"#F9F1E4");
  // Native editable text.
  txt("Название","Магическая рука",63,45,29,"#322A58");
  txt("Параметры","ЗАГОВОР  ·  30 ФТ.  ·  1 МИН",63,80,13,"#77665C","Arial");
  txt("Описание","Манипулирует предметами до 10 фунтов; не атакует.",63,138,18,"#342E2A");
  txt("Круг — подпись","КРУГ",840,98,12,"#E9EDF5","Arial");
  txt("Круг — значение","0",854,118,34,"#FFFFFF");
  txt("Школа","ВОПЛОЩЕНИЕ",810,198,12,"#675847","Arial");
  penpot.selection=[b];
  penpot.ui.open("Richard's Spell Cards 0.3",UI,{width:340,height:220});
} catch(e) {
  console.error("Richard's Spell Cards 0.3:",e);
  penpot.ui.open("Richard's Spell Cards — ошибка",UI,{width:340,height:220});
}
