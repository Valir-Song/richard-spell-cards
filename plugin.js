// Richard's Spell Cards 0.2 — editable Penpot shapes and text.
// Layout only: all elements are native Penpot objects.
const UI="https://valir-song.github.io/richard-spell-cards/index.html";
try {
  const X=120,Y=120,W=900,H=220;
  const board=penpot.createBoard();board.name="Ричард — Магическая рука · пергамент 0.2";
  board.x=X;board.y=Y;board.resize(W,H);board.fills=[{fillColor:"#F8F3E9"}];
  const rect=(name,x,y,w,h,fill)=>{
    const s=penpot.createRectangle();s.name=name;s.x=X+x;s.y=Y+y;s.resize(w,h);
    s.fills=[{fillColor:fill}];board.appendChild(s);return s;
  };
  const ellipse=(name,x,y,w,h,fill)=>{
    const s=penpot.createEllipse();s.name=name;s.x=X+x;s.y=Y+y;s.resize(w,h);
    s.fills=[{fillColor:fill}];board.appendChild(s);return s;
  };
  const text=(name,value,x,y,size,color,font)=>{
    const t=penpot.createText(value);if(!t)throw Error("Не создан текст "+name);
    t.name=name;t.x=X+x;t.y=Y+y;t.fontSize=String(size);
    t.fontFamily=font||"Arial";t.fills=[{fillColor:color}];t.growType="auto-height";
    board.appendChild(t);return t;
  };
  // Framing: thin, understated double gold outline.
  rect("Внешний кант · золото",5,5,890,210,"#B79B70");
  rect("Поле · слоновая кость",7,7,886,206,"#FBF8F1");
  rect("Внутренняя рамка",13,13,874,194,"#E4D4B8");
  rect("Внутреннее поле",14,14,872,192,"#FBF8F1");
  // Heading and discreet accents.
  rect("Плашка названия",25,24,736,55,"#ECEAF2");
  rect("Левый акцент",25,24,4,158,"#80709F");
  rect("Линия под заголовком",43,90,795,1,"#D7C6A8");
  rect("Угол · верх",18,18,32,2,"#B69A69");
  rect("Угол · левый",18,18,2,29,"#B69A69");
  rect("Угол · низ",848,200,30,2,"#B69A69");
  rect("Угол · правый",876,173,2,29,"#B69A69");
  // Spell circle and editable label.
  ellipse("Обводка уровня",799,127,73,73,"#BEA77E");
  ellipse("Круг уровня",802,130,67,67,"#5B6F9B");
  text("Название · редактируемое","Магическая рука",45,30,27,"#322B4A","Georgia");
  text("Свойства · редактируемые","ЗАГОВОР   ·   30 ФТ.   ·   1 МИН",45,66,13,"#796A69");
  text("Описание · редактируемое","Манипулирует предметами до 10 фунтов; не атакует.",45,110,17,"#3B342F","Georgia");
  text("Уровень · редактируемый","0",825,143,27,"#FFFFFF","Georgia");
  penpot.selection=[board];
  penpot.ui.open("Richard's Spell Cards",UI,{width:340,height:240});
} catch(e) {console.error("Richard's Spell Cards:",e);penpot.ui.open("Richard's Spell Cards — ошибка",UI,{width:340,height:240});}
