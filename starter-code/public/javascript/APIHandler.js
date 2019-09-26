class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.characterContainer = document.getElementsByClassName("characters-container")[0]
  }


  createCharacterHTML(character){
    return   `
    <div class="character-info">
      <div class="name">${character.name}</div>
      <div class="occupation">${character.occupation}</div>
      <div class="cartoon">${character.weapon}</div>
      <div class="weapon">${character.cartoon}</div>
    </div>
    `
  }

  getFullList() {
    axios.get(this.BASE_URL+"/characters").then(
      characters => {
        console.log(characters.data);
        let characterHTMLString =""
        characters.data.forEach( character => {
          characterHTMLString+= this.createCharacterHTML(character);
        })
        this.characterContainer.innerHTML=characterHTMLString
      }
    )
  }

  getOneRegister(id) {
    axios.get(this.BASE_URL+"/characters/"+id).then(
      character => {
        console.log(character.data);
        this.characterContainer.innerHTML=this.createCharacterHTML(character.data)
        document.getElementById('fetch-one').style.backgroundColor = 'green';
      }
    ).catch(error => {document.getElementById('fetch-one').style.backgroundColor = 'red';})
  }

  createOneRegister(characterData) {
    axios.post(this.BASE_URL+"/characters",characterData).then(
      character => {
        console.log(character.data);
        this.characterContainer.innerHTML=this.createCharacterHTML(character.data)
      }
    )
  }

  updateOneRegister (characterData,id) {
    axios.patch(this.BASE_URL+"/characters/"+id,characterData).then(
      character => {
        console.log(character.data);
        this.characterContainer.innerHTML=this.createCharacterHTML(character.data)
      }
    )
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL+"/characters/"+id).then(
      character => {
        console.log(character.data);
        this.characterContainer.innerHTML=this.createCharacterHTML(character.data)
      }
    ).catch(error => {document.getElementById('delete-one').style.backgroundColor = 'red';})
  }
}
