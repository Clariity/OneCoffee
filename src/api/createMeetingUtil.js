const fetch = require("node-fetch");

const createWebexMeeting = () => {
  var base = 'https://webexapis.com/v1/meetings'
  var data = {
      'title': 'Josh room',
      'password': 'BcJep@43',
      'start': '2020-09-10 20:00:00',
      'end': '2020-09-10 21:00:00',
      'enabledAutoRecordMeeting': false,
      'allowAnyUserToBeCoHost': false
  }
  fetch(base, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer NTVhYzc2MDYtOTdhOS00ZmQ4LWIwZmUtN2EyMjk1NTkzY2E2MWZhYzhhNGMtYmMx_P0A1_82a20bd7-efa6-4b1f-8523-922d77a2abd0'
      },
      body: JSON.stringify(data)
  }).then(res => res.json()).then(data => console.log(data));
  window.alert(data);
  return data;
}

export default createWebexMeeting;