function addMessage(message, me = true) {
    const template = `<div class="message" onclick="showAlert(this)">
      <div class="${
        me ? "myMessage" : "fromThem"
      }" data-date="${new Date().toLocaleTimeString()}">
        <p>${message}</p>
        <date> ${new Date().toLocaleTimeString()} </date>
      </div>
    </div>`;
  
    document.querySelector(".chat .messages").innerHTML += template;
  }
  
  function typing() {
    document.querySelector(".typing").classList.toggle("active");
    setTimeout(() => {
      document.querySelector(".typing").classList.toggle("active");
    }, 1000);
  }
  
  typing();
  addMessage("Hi!", false);
  addMessage("In this exercise you will work with events in JS", false);
  addMessage("Let's go!");
  
  /**
   * Listen to the submit of the form and add a new message
   * with addMessage()
   */
  
  // Code here
  document.querySelector('.chat').addEventListener('submit', (event) => {
    event.preventDefault()  
    const inputFieldElement = document.getElementById('inputField')
      const newMessage = inputFieldElement.value
      if (newMessage) {
          addMessage(newMessage)
      }
      inputFieldElement.value = ''

  })
  
  /**
   * Listen to the click on each message and create an alert
   * with the date from 'data-date'
   * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   */
  
  // Code here
//   document.querySelectorAll('.message').forEach((el) => {
//       console.log('add click handler')
//       el.click = () => {
//           alert('Click on message')
//       }
//   })

  function showAlert(element) {
    let dateElement = element.querySelector('.fromThem')
    if (!dateElement) {
        dateElement = element.querySelector('.myMessage')
    }
    const dateMsg = dateElement.dataset.date
    console.log(dateMsg)
  }
  
  /**
   * Listen to every Keydown (from the keyboard) in the input and call
   * the function typing()
   */
  
  // Code here
  document.getElementById('inputField').addEventListener('keydown', typing)
  