const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id")[0].value;
    console.log("want this:"+id);
    charactersAPI.getOneRegister(id);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementsByName("character-id-delete")[0].value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const character = {
      name:document.getElementById("name-edit").value,
      occupation:document.getElementById("occupation-edit").value,
      weapon:document.getElementById("weapon-edit").value,
      cartoon:document.getElementById("cartoon-edit").checked
    }
    console.log(character);
    charactersAPI.updateOneRegister(character,document.getElementById("id-edit").value);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const character = {
      name:document.getElementById("name-create").value,
      occupation:document.getElementById("occupation-create").value,
      weapon:document.getElementById("weapon-create").value,
      cartoon:document.getElementById("cartoon-create").checked
    }
    console.log(character);
    charactersAPI.createOneRegister(character);
  });
});
