let players = [];
let i = 0;

function NewPerson(){
    this.name = "Derkin";
    this.ac = 0;
    this.initative = 0;
    this.damageTaken = 0;
}

function NewPerson(name, ac, initative, damageTaken){
    this.name = name;
    this.ac = ac;
    this.initative = initative;
    this.damageTaken = damageTaken;
}
const container = document.querySelector("#container");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    players[i] = new NewPerson();
    
    const form = document.createElement("form");
    form.classList.add('players');
    form.id = 'player' + i;
    container.appendChild(form);

    const nameInput = document.createElement("input");
    const nameLabel = document.createElement('label')
    const acInput = document.createElement("input");
    const acLabel = document.createElement('label');
    const initativeInput = document.createElement("input");
    const initativeLabel = document.createElement('label');
    const dmgTakenInput = document.createElement("input");
    const dmgTakenLabel = document.createElement('label');
    const deleteDiv = document.createElement("div");
    const img = document.createElement('img');

    nameInput.id = 'nameInput';
    nameInput.style["justify-self"] = 'start';
    nameInput.style["align-self"] = 'center';
    nameInput.style['font-size'] = '1em';
    nameInput.style['background-color'] = 'rgba(0,0,0,0.0)';
    nameInput.style["grid-column-start"] = "3";
    nameInput.style["grid-column-end"] = "span 6";
    nameInput.style["grid-row-start"] = "1";
    nameInput.style["grid-row-end"] = "span 1";
    nameInput.setAttribute('autocomplete', 'off');


    nameLabel.id = 'nameLabel';
    nameLabel.style['font-size'] = '1em';
    nameLabel.style["grid-column-start"] = "2";
    nameLabel.style["grid-column-end"] = "span 1";
    nameLabel.style["grid-row-start"] = "1";
    nameLabel.style["grid-row-end"] = "span 1";
    nameLabel.style["justify-self"] = 'end';
    nameLabel.style["align-self"] = 'center';
    nameLabel.style.cursor = 'grab';
    nameLabel.textContent = 'Name: '

    acInput.id = "acInput";
    acInput.style["justify-self"] = 'start';
    acInput.style["align-self"] = 'center';
    acInput.style['width'] = '2em';
    acInput.style['background-color'] = 'rgba(0,0,0,0.0)';
    acInput.style['grid-column-start'] = '2';
    acInput.style['grid-column-end'] = 'span 1';
    acInput.style['grid-row-start'] = '2';
    acInput.style['grid-row-end'] = 'span 1'
    acInput.setAttribute('autocomplete', 'off');

    acLabel.id = 'acLabel'
    acLabel.style["justify-self"] = 'end';
    acLabel.style["align-self"] = 'center';
    acLabel.style['grid-column-start'] = '1';
    acLabel.style['grid-column-end'] = 'span 1'
    acLabel.style['grid-row-start'] = '2';
    acLabel.style['grid-row-end'] = 'span 1';
    acLabel.style.cursor = 'grab';
    acLabel.textContent = 'Armor Class:';

    initativeInput.id = 'intitativeInput';
    initativeInput.style["justify-self"] = 'start';
    initativeInput.style["align-self"] = 'center';
    initativeInput.style['width'] = '2em';
    initativeInput.style['background-color'] = 'rgba(0,0,0,0.0)';
    initativeInput.style['grid-column-start'] = '4';
    initativeInput.style['grid-column-end'] = 'span 1'
    initativeInput.style['grid-row-start'] = '2';
    initativeInput.style['grid-row-end'] = 'span 1'
    initativeInput.setAttribute('autocomplete', 'off');

    initativeLabel.id = 'intitativeLabel';
    initativeLabel.style["justify-self"] = 'end';
    initativeLabel.style["align-self"] = 'center';
    initativeLabel.style['grid-column-start'] = '3';
    initativeLabel.style['grid-column-end'] = 'span 1'
    initativeLabel.style['grid-row-start'] = '2';
    initativeLabel.style['grid-row-end'] = 'span 1';
    initativeLabel.style.cursor = 'grab';
    initativeLabel.textContent = 'Initative:';

    dmgTakenInput.id = 'dmgTakenInput';
    dmgTakenInput.style["justify-self"] = 'start';
    dmgTakenInput.style["align-self"] = 'center';
    dmgTakenInput.style['width'] = '2em';
    dmgTakenInput.style['background-color'] = 'rgba(0,0,0,0.0)';
    dmgTakenInput.style['grid-column-start'] = '6';
    dmgTakenInput.style['grid-column-end'] = 'span 1'
    dmgTakenInput.style['grid-row-start'] = '2';
    dmgTakenInput.style['grid-row-end'] = 'span 1'
    dmgTakenInput.setAttribute('autocomplete', 'off');

    dmgTakenLabel.id = 'dmgTakenLabel';
    dmgTakenLabel.style["justify-self"] = 'end';
    dmgTakenLabel.style["align-self"] = 'center';
    dmgTakenLabel.style['grid-column-start'] = '5';
    dmgTakenLabel.style['grid-column-end'] = 'span 1'
    dmgTakenLabel.style['grid-row-start'] = '2';
    dmgTakenLabel.style['grid-row-end'] = 'span 1';
    dmgTakenLabel.style.cursor = 'grab';
    dmgTakenLabel.textContent = 'Dmg Taken:';

    deleteDiv.id = 'deleteDiv';
    deleteDiv.style['grid-column-start'] = '6';
    deleteDiv.style['grid-column-end'] = 'span 1';
    deleteDiv.style['grid-row-start'] = '1';
    deleteDiv.style['grid-row-end'] = 'span 1';
    deleteDiv.style['justify-self'] = 'end';
    deleteDiv.style['align-self'] = 'start'
    deleteDiv.style.cursor ='pointer'

    img.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/04/03/00/42/delete-309165_1280.png');
    img.style.width = '1.1em'
    img.style.height = '1.1em'
    deleteDiv.appendChild(img);

    document.getElementById("player" + i).appendChild(nameInput);
    document.getElementById("player" + i).appendChild(nameLabel);
    document.getElementById("player" + i).appendChild(acInput);
    document.getElementById("player" + i).appendChild(acLabel);
    document.getElementById("player" + i).appendChild(initativeInput);
    document.getElementById("player" + i).appendChild(initativeLabel);
    document.getElementById("player" + i).appendChild(dmgTakenInput);
    document.getElementById("player" + i).appendChild(dmgTakenLabel);
    document.getElementById("player" + i).appendChild(deleteDiv);

    const bob = document.querySelector('#player' + i);
    bob.addEventListener('mousedown', (event) =>{   
        container.appendChild(bob);
        bob.style.position = 'absolute';
        bob.style.zIndex = 900;

        let shiftX = event.clientX - bob.getBoundingClientRect().left;
        let shiftY = event.clientY - bob.getBoundingClientRect().top; 

        moveAt(event.pageX, event.pageY);

        bob.style.cursor ="grabbing";

        function moveAt(pageX,pageY){
            bob.style.left = pageX - shiftX + 'px';
            bob.style.top = pageY - shiftY + 'px';
        }

        function mousemove(event){
            moveAt(event.pageX,event.pageY);
        }
        document.addEventListener('mousemove',mousemove);
        
        bob.addEventListener('mouseup', ()=> {
            document.removeEventListener('mousemove', mousemove);
            bob.mouseup = null;
            bob.style.cursor = "grab";
        });
    });

    bob.dragstart = function () {
        return false;
    };

    deleteDiv.addEventListener('mousedown', () => {
        bob.style.cursor = 'point';
        bob.style.display = 'none';
    }); 

    i++;
    
});

