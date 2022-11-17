function triggers() {
  let mic_trigger = null;
  let chatbot_trigger = null;
  let menu_trigger = null;
  
  const set_mic_trigger = (cb) => {
    mic_trigger = cb;
  }
  const set_chatbot_trigger = (cb) => {
    chatbot_trigger = cb;
  }
  const set_menu_trigger = (cb) => {
    menu_trigger = cb;
  }

  const get_mic_trigger = () => {
    if(mic_trigger === null) console.error("[Trigger Module] Trying to get mic_trigger before setting it.")
    else mic_trigger();
  }
  const get_chatbot_trigger = () => {
    if(chatbot_trigger === null) console.error("[Trigger Module] Trying to get chatbot_trigger before setting it.")
    else chatbot_trigger();
  }

  const get_menu_trigger = () => {
    if(menu_trigger === null) console.error("[Trigger Module] Trying to get menu_trigger before setting it.")
    else menu_trigger();
  }

  return {
    set_mic_trigger,
    set_menu_trigger,
    set_chatbot_trigger,
    get_chatbot_trigger,
    get_menu_trigger,
    get_mic_trigger
  }
}

const trigger = triggers();

