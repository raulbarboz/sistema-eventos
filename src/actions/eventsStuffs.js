import database from '../firebase/firebase.js';
// READ_ONLY_EVENTS_STUFFS

export const readEventsStuffs = (events_stuffs) => ({
    type: 'READ_EVENTS_STUFFS',
    events_stuffs
  })
  
  export const startReadEventsStuffs = () => {
    return (dispatch) => {
      return database.ref('users').once('value').then((snapshot) => {
        const events_stuffs = [];
        snapshot.forEach((childSnapshot) => {
          childSnapshot.forEach((childSnapshot_level2) => {
            childSnapshot_level2.forEach((childSnapshot_level3) => {
              if(childSnapshot_level2.key === 'stuffs'){
                childSnapshot_level3.forEach((childSnapshot_level4) => {
                  events_stuffs.push({
                    parent_id: childSnapshot.key,
                    event_type: childSnapshot_level2.key,
                    event_id: childSnapshot_level3.key,
                    stuff_id: childSnapshot_level4.key,
                    ...childSnapshot_level4.val()
                  })
                })
              }else{
                events_stuffs.push({
                  parent_id: childSnapshot.key,
                  event_type: childSnapshot_level2.key,
                  event_id: childSnapshot_level3.key,
                  ...childSnapshot_level3.val()
                })
              }
            })
          })
        })
        dispatch(readEventsStuffs(events_stuffs))
      })
    }
  }
  