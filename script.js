const addBtn = document.querySelector(".addbtn");
const main = document.querySelector(".main");

addBtn.addEventListener("click", function () {
    addNote();
});

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
        <i class="fas fa-trash" ></i>
        <i class="fas fa-trash"></i>
     </div >
<textarea></textarea>
`;

    main.appendChild(note);
}